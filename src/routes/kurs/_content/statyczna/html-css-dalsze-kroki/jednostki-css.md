---
title: Jednostki CSS
description: ""
order: 20
free: false
extra_links:
  - title: Are you using the right CSS units?
    href: https://www.youtube.com/watch?v=N5wpD9Ov_To
  - title: Learn CSS Units In 8 Minutes
    href: https://www.youtube.com/watch?v=-GR52czEd-0
  - title: CSS Units & Sizes Tutorial for Beginners
    href: https://www.youtube.com/watch?v=_ybQREu-NU0
---

<script>
	import Codepen from "$lib/components/ui/Codepen.svelte";
	import Vimeo from "$lib/components/video/Vimeo.svelte";
</script>

Podczas poprzednich lekcji wielokrotnie korzystaliśmy z dwóch bardzo popularnych jednostek występujących w CSS, czyli `px` oraz `%`. Dzięki nim opisywaliśmy m.in. wymiary znaczników (np. `width`, `height`) lub wartości charakterystyczne dla box modelu (`padding`, `margin`, `border`). W CSS mamy do dyspozycji dużo więcej jednostek, które znajdą swoje zastosowanie w różnych scenariuszach. Wszystkie te jednostki dzielą się na dwie podstawowe grupy:

- **bezwzględne** (absolutne, ang: absolute)
- **względne** (relatywne, ang: relative)

## Jednostki bezwzględne (absolutne)

Jednostki te mają swoje stałe, niezmienne wymiary. Przykładami takich jednostek mogą być `cm` (centymetry) lub `px` (piksele). Niezależnie od tego na jak dużym ekranie będzie wyświetlać element na stronie opisany tymi jednostkami, to zawsze będzie to dokładnie ten sam rozmiar. Jednostki takie są dość kłopotliwe w przypadku tworzenia stron responsywnych, czyli takich, które dostosowują wymiary swoich elementów do rozmiaru ekranu. Wszystkie jednostki bezwzględne zostały zebrane w poniższej tabeli:

<table>
  <thead>
    <tr>
      <th>Jednostka bezwzględna</th>
      <th>Opis</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>px</strong> (piksel)</td>
      <td>1px = ok. 0.03cm</td>
    </tr>
    <tr>
      <td><strong>pt</strong> (point)</td>
      <td>1pt = ok. 0.035cm</td>
    </tr>
    <tr>
      <td><strong>pc </strong>(pica)</td>
      <td>1pc = 12pt</td>
    </tr>
    <tr>
      <td><strong>cm</strong> (centymetr)</td>
      <td>1cm = 10mm</td>
    </tr>
    <tr>
      <td><strong>mm</strong> (milimetr)</td>
      <td>1mm = 0.1cm</td>
    </tr>
    <tr>
      <td><strong>in</strong> (<em>inch</em>, cal)</td>
      <td>1in = 2.54cm</td>
    </tr>
  </tbody>
</table>

Jednostek bezwzględnych będziemy używali tam, gdzie responsywność nie jest dla nas ważnym czynnikiem. Zdecydowanie najczęściej używaną jednostką w tej grupie (jak i prawdopodobnie w całym CSS) jest oczywiście piksel. Jednsotki takie jak centymetr, milimetr bądź cal najczęściej będą użyteczne w sytuacjach, gdzie tworzymy stronę, która będzie miała możliwość wydruku – wtedy za pomocą tych jednostek możemy ustalać wymiary pasujące pod różne rozmiary kartek (A4, A3 itp.).

## Jednostki względne (relatywne)

Skoro jednostki absolutne nie nadawały się za bardzo do stron responsywnych, to znaczy, że jednostki relatywne są wręcz dla nich stworzone. Jednostki te są uzależnione od rozmiaru swojego “rodzica” bądź ekranu, na którym są wyświetlane. Dzięki temu zwiększają one swoje wartości wraz ze zwiększaniem rozmiaru ekranu i vice versa. Ich użycie jest nieco bardziej skomplikowane niż jednostek absolutnych, więc opiszmy sobie je dokładnie w poniższej tabeli:

<table>
  <thead>
    <tr>
      <th  style="width: 30%"><strong>Jednostka względna</strong></th>
      <th>Opis</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>% (procent)</td>
      <td>
        Wartość procentowa odnosząca się do rodzica. Przykładowo
        <code>width: 50%</code> oznacza, że element będzie miał szerokość
        ustawioną na połowę aktualnej szerokości swojego rodzica.
      </td>
    </tr>
    <tr>
      <td>em</td>
      <td>
        Wartość odnosząca się (proporcjonalna) do rozmiaru czcionki rodzica
        wybranego elementu. 1em = aktualny rozmiar czcionki ustawiony na
        rodzicu.
      </td>
    </tr>
    <tr>
      <td>rem</td>
      <td>
        Wartość odnosząca się (proporcjonalna) do rozmiaru czcionki ustawionej
        na tagu <code>&lt;html&gt;</code> (“rem” = “root em”). 1rem = aktualny
        rozmiar czcionki na tagu <code>&lt;html&gt;</code>
      </td>
    </tr>
    <tr>
      <td>ch (<em>character</em>)</td>
      <td>
        Wartość określająca szerokość pojedynczego znaku. Jak znak wzorcowy
        wybrany jest znak “zero” (0) aktualnie używanej czcionki.
      </td>
    </tr>
    <tr>
      <td>vh (<em>viewport height</em>)</td>
      <td>
        Jednostka proporcjonalna do wysokości okna przeglądarki. Wartość
        <code>height: 100vh</code> oznacza wysokość równą 100% wysokości okna
        przeglądarki.
      </td>
    </tr>
    <tr>
      <td>vw (<em>viewport width</em>)</td>
      <td>
        Jednostka proporcjonalna do szerokości okna przeglądarki. Wartość
        <code>width: 100vw</code> oznacza szerokość równą 100% szerokości okna
        przeglądarki.
      </td>
    </tr>
    <tr>
      <td>vmin</td>
      <td>
        Jednostka równa mniejszej z wartości <code>vh</code> oraz
        <code>vw</code>. Przykładowo w telefonie trzymanym w “normalnej”
        pozycji, szerokość otwartej na nim przeglądarki jest mniejsza niż
        wysokość. W tym przypadku <code>vmin</code> = <code>vw</code>
      </td>
    </tr>
    <tr>
      <td>vmax</td>
      <td>
        Jednostka równa większej z wartość <code>vh</code> oraz <code>vw</code>.
        Używając przykładu z telefonem, <code>vmax</code> = <code>vh</code>
      </td>
    </tr>
    <tr>
      <td>ex</td>
      <td>
        Wartość określająca wysokość pojedynczego znaku. Jak znak wzorcowy
        wybrany jest znak “x” (mała litera) aktualnie używanej czcionki.
      </td>
    </tr>
  </tbody>
</table>

Zobaczmy teraz te wszystkie jednostki w praktyce:

<Codepen id="OJrajrZ" />

Na poniższym krótkim wideo możemy zauważyć, jak zachowują się powyższe jednostki podczas zmiany szerokości ekranu. Widzimy, iż szerokości elementów wyrażone w jednostkach bezwzględnych są całkowicie obojętne na aktualną szerokość okna przeglądarki. W momencie, gdy element na stronie jest szerszy niż okno, wtedy pojawia nam się możliwość poziomego przesuwania strony, co nie jest zbyt wygodne dla użytkownika.

Z kolei elementy względne skalują się odpowiednio do szerokości strony. Dotyczy to zarówno szerokości elementów, jak i rozmiaru czcionki, której rozmiar został uzależniony od szerokości okna. Jak to wygląda w praktyce można zauważyć na poniższym video:

<Vimeo id="871710075" h="" />
