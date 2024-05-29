---
title: Kaskadowość CSS
description: ""
order: 10
free: false
extra_links:
  - title: Learn CSS Specificity In 11 Minutes
    href: https://www.youtube.com/watch?v=CHyPGSpIhSs
  - title: CSS Specificity explained
    href: https://www.youtube.com/watch?v=c0kfcP_nD9E
---

<script>
	import Codepen from "$lib/components/ui/Codepen.svelte";
</script>

Mam nadzieję, że wykonanie pierwszej strony przebiegło bez większych problemów i w końcu udało się poukładać w głowie całą teorię, którą poznawaliśmy w pierwszych lekcjach dotyczących HTML i CSS. Osoby, które zdecydowały się na samodzielną budowę własnego portfolio, być może natknęły się już na problemy, o których powiemy sobie więcej w tej lekcji, czyli kaskadowość i dziedziczenie.

Kaskadowość jest fundamentalnym pojęciem w świecie CSS (przypominam, ang. Cascading Style Sheets, czyli kaskadowe arkusze stylów). Jest to termin, który odpowiada za decydowanie o tym, który styl CSS zostanie zastosowany na konkretnym tagu HTML. Jak wiemy z poprzednich lekcji, style może nakładać na trzy różne sposoby:

- inline CSS
- tag `<style>`
- zewnętrzny plik

Co jednak w sytuacji, gdy każdy z tych sposobów będzie chciał zmienić kolor tego samego tagu?

```html
<html>
  <head>
    <title>Kaskadowość</title>
    <link rel="stylesheet" href="strona.css" />
    <style>
      h1 {
        color: pink;
      }

      h1#naglowek {
        color: orange;
      }

      h1.greenText {
        color: green;
      }
    </style>
  </head>
  <body>
    <h1 id="naglowek" class="greenText" style="color: red;">Tytuł strony</h1>
  </body>
</html>
```

Na powyższym przykładzie widzimy pięć różnych prób ustawienia koloru dla nagłówka `<h1>` (zakładamy, że plik strona.css również ma selektor na ten znacznik). Każdy z tych sposób jest jak najbardziej poprawny, ale przeglądarka musi jakoś zdecydować, którego koloru ma użyć. Jak to robi?

W takich przypadkach style zostaną nałożone według poniższej hierarchii (tzw. kaskady). Im dana pozycja jest wyżej, tym jest ważniejsza i "wygra" rywalizację o stylowanie znacznika.

## Kaskada CSS

- Slowo kluczowe `!important` (o nim akurat powiemy sobie na końcu tej lekcji)
- Inline CSS
- Specificity ("siła selektora")
- Kolejność wystąpienia w pliku
- Dziedziczenie
- Domyślny styl przeglądarki

Słowo `!important` zostawimy sobie na sam koniec. Wiemy już czym jest inline CSS (i tym samym rozwiązaliśmy zagadkę z początku lekcji – tekst w przykładzie będzie miał kolor <span style="color: red">czerwony</span> 🙂), więc przejdźmy do Specifity.

## Specifity

Specyficzność, nazwana tutaj przeze mnie "siłą selektora" określa, jak bardzo dokładny jest nasz selektor CSS. Im jest dokładniejszy, tym jest ważniejszy. Dokładność selektora możemy zwiększać poprzez umieszczanie dodatkowych znaczników. Spójrzmy na przykład:

```css
/* Ten selektor jest mało specyficzny - wybiera wszystkie tagi <p> na całej stronie */
p {
  color: red;
}

/* Ten selektor jest dużo bardziej specyficzny.
   Wybiera tylko te tagi <p>, które mają klasę "notatka", dodatkowo są wewnątrz tagu <div>,
   który znajduje się wewnątrze tagu <section> z klasą "intro", będącym bezpośrednim
   dzieckiem tagu <body>, no ale przecież już wszystko to wiesz 🙂 */
body > section.intro div p.notatka {
  color: blue;
}
```

W dwóch słowach – zazwyczaj im selektor dłuży, tym jest ważniejszy. Jednak to nie długość ma tutaj prawdziwe znaczenie a konkretna wartość liczbowa "ważności". Przeglądarka wylicza siłę selektora, zwracając szczególną uwagę na:

- ilość atrybutów `id`,
- ilość pozostałych atrybutów (w tym `class`) oraz pseudo klas,
- ilość tagów oraz pseudo elementów.

Ważność konkretnego selektora określana jest za pomocą trzech "slotów". Sloty te wypełniane są wartościami wymienionymi w poniższej liście:

<table class="has-fixed-layout">
  <tbody>
    <tr>
      <td>Przykładowe selektory:</td>
      <td><strong>Slot 1</strong>: ilość atrybutów <code>id</code></td>
      <td>
        <strong>Slot 2</strong>: ilość pozostałych atrybutów i pseudo klas
      </td>
      <td>
        <strong>Slot 3</strong>: ilość pozostałych tagów i pseudo elementów
      </td>
    </tr>
    <tr>
      <td><strong>p</strong> &#123; … &#125;</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
    </tr>
    <tr>
      <td><strong>body &gt; section.intro div p.notatka</strong> &#123; … &#125;</td>
      <td>0</td>
      <td>2</td>
      <td>4</td>
    </tr>
    <tr>
      <td><strong>ul#nav li.active</strong> &#123; … &#125;</td>
      <td>1</td>
      <td>1</td>
      <td>2</td>
    </tr>
    <tr>
      <td><strong>#hero</strong> &#123; … &#125;</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td><strong>article.main ul#lista li.item</strong> &#123; … &#125;</td>
      <td>1</td>
      <td>2</td>
      <td>3</td>
    </tr>
    <tr>
      <td><strong>ul li</strong> &#123; … &#125;</td>
      <td>0</td>
      <td>0</td>
      <td>2</td>
    </tr>
  </tbody>
</table>

Porównywanie selektorów teraz polega na porównywaniu slotów w kolejności od slotu nr 1 do slotu nr 3. Jeżeli w slocie nr 1 pojawi się remis, (czyli obydwa selektory mają taką liczbę atrybutów `id`), to porównujemy kolejny slot. Jeżeli w drugim slocie już jeden z selektorów wygra (tzn. będzie miał większą liczbę), to w tym momencie kończymy i wybieramy ten właśnie selektor. W przypadku powyższej tabelki najsilniejszym selektorem jest selektor o konfiguracji slotów 1-2-3 a najsłabszym 0-0-1.

Widzimy więc, że atrybut `id` jest bardzo ważnym atrybutem w kontekście CSS. Nie ma też się temu, co dziwić – jak pamiętamy z lekcji HTML, na całej stronie nie możemy mieć dwóch takich samych atrybutów `id`, a więc używając go w selektorze CSS zazwyczaj jesteśmy pewni co tak naprawdę chcemy ostylować.

Rozpisywanie sobie tej tabelki za każdym razem, gdy chcemy ocenić siłę selektora, może być nieco karkołomnym zadaniem. W tym przypadku lepiej skorzystać z gotowego narzędzia, które to po wpisaniu selektora policzy nam wszystko automatycznie – [link tutaj](https://specificity.keegan.st/). 🙂

## Kolejność wystąpienia w pliku

W przypadku obliczania siły selektora, po porównaniu wszystkich slotów możemy trafić na sytuację, gdzie w dalszym ciągu mamy "remis". W takiej sytuacji wybrany zostanie ten selektor, który pojawił się na stronie "później". Nie ma tutaj znaczenia czy CSS jest osadzony za pomocą tagu `<style>` czy importowany za pomocą tagu `<link>`. Zarówno `<style>`, jak i `<link>` umieszczamy w nagłówku strony, w przypadku remisu specifity, ten który pojawi się później, jest uważany za selektor ważniejszy. Spójrzmy na przykład:

<Codepen id="BavGydr" />

Pamiętamy o tym, że wszystkie pozostałe style również będą widoczne w DevTools. To, że dany selektor jest "słabszy" niż inne, oznacza, że zostanie nadpisany, a nie usunięty. Nadpisane wartości CSS w konsoli DevTools są zawsze przekreślone. DevToolsy dla powyższego przykładu będą wyglądały następująco:

<img alt="" src="/kurs/statyczna/img/html-css-dalsze-kroki/specifity.png" />

## Dziedziczenie

Z dziedziczeniem spotkaliśmy się już podczas poprzednich lekcji tego kursu. Jest ona również w dalszej części luźno związana z modelem "rodziny" i drzewa genealogicznego. Tak jak w rodzinie, dziecko może odziedziczyć po rodzicu kolor oczu, kształt nosa itp. tak "dziecko" w HTML dziedziczy wartości właściwości CSS swojego rodzica. Dziedziczone wartości nadpisują te ustawione domyślnie przez przeglądarkę.

Podobnie jak w prawdziwym życiu nie możemy odziedziczyć po rodzicach wszystkich cech, tak w CSS istnieje tylko pewna grupa właściwości, które ulegają dziedziczeniu:

- border-collapse
- border-spacing
- caption-side
- color
- cursor
- direction
- empty-cells
- font-family
- font-size
- font-style
- font-variant
- font-weight
- font-size-adjust
- font-stretch
- font
- letter-spacing
- line-height
- list-style-image
- list-style-position
- list-style-type
- list-style
- orphans
- quotes
- tab-size
- text-align
- text-align-last
- text-decoration-color
- text-indent
- text-justify
- text-shadow
- text-transform
- visibility
- white-space
- widows
- word-break
- word-spacing
- word-wrap

Jeżeli właściwość, którą chcemy odziedziczyć, nie znajduje się na powyższej liście, to mimo wszystko możemy za pomocą CSS "zmusić" element do dziedziczenia wartości z rodzica. W tym przypadku jako wartość właściwości musimy użyć słowa `inherit`. Zobaczmy, jak te wszystkie informacje wyglądają na przykładzie:

<Codepen id="gOZQbXX" />

Dziedziczenie właściwości następuje na każdego "potomka", nie tylko na "dziecko". Widzimy to wyraźnie w powyższym przykładzie, gdzie tag `<span>`, mimo iż nie jest "dzieckiem" tagu `<section>`, otrzymuje jego dziedziczne właściwości. Znacznik ten wygląda następująco w DevTools:

<img alt="" src="/kurs/statyczna/img/html-css-dalsze-kroki/inheritance.png" />

## !important

Na sam koniec zostawiliśmy sobie najsilniejszy sposób na ustawianie wartości CSS. Słowo kluczowe !important, użyte zaraz po wartości właściwości, nadpisuje wszystkie inne style. Jest to swego rodzaju “siłowy” sposób na zaaplikowanie konkretnego stylu CSS. Jest to podejście, którego staramy się używać jak najrzadziej, gdyż zaburza całą kaskadę stylów. Zdarzyć się jednak mogą sytuacje, w których użycie !important będzie jedynym sensownym rozwiązaniem. Użycie !important zostało przedstawione na poniższym przykładzie:

<Codepen id="RwEqNQZ" />
