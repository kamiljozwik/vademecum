---
title: Grafika - srcset
description: ""
order: 30
free: false
extra_links:
  - title: Make Your Site Lightning Fast With Responsive Images
    href: https://www.youtube.com/watch?v=fp9eVtkQ4EA
  - title: srcset and sizes attributes
    href: https://www.youtube.com/watch?v=2QYpkrX2N48
  - title: Reduce image size - use srcset to automatically choose the right image
    href: https://www.youtube.com/watch?v=SyVKRnusyqM
  - title: Responsive image markup
    href: https://www.youtube.com/watch?v=NcD1V7C_3ks
---

<script>
	import Vimeo from "$lib/components/video/Vimeo.svelte";
</script>

Najpopularniejszym oraz najczęściej używanym tagiem do wyświetlania grafik na stronie jest dobrze nam już znany `<img />`. W tym temacie poznamy dodatkowe atrybuty tego znacznika, dzięki którym będziemy mogli wybrać, który plik graficzny chcemy wyświetlić, bazując na rozmiarze oraz rozdzielczości ekranu użytkownika. Może w tym momencie pojawić się pytanie – “ale po co?”

Pierwszym powodem jest rozmiar pliku. W przypadku gdy tworzymy widok przygotowany na duże ekrany (monitory), wtedy oczywiście chcemy, aby grafika była czytelna, ostra oraz wyraźna. Jeżeli strona będzie otwarta na dużym ekranie, to z pewną rezerwą możemy założyć, iż użytkownik korzysta z jakiegoś stabilnego szybkiego łącza internetowego. W takim wypadku możemy wyświetlić nieco większy plik i nie powinien on mieć dużego wpływu na czas wczytywania się strony, a z drugiej strony użytkownik będzie zadowolony z tego, że widzi ładną grafikę.

Sprawa ma się za to zupełnie inaczej w przypadku wyświetlenia strony na małym ekranie (np. telefon lub tablet). Tutaj użytkownik prawdopodobnie będzie korzystał z sieci operatora komórkowego i w przypadku słabego zasięgu czas pobierania się dużej grafiki może znacząco spowolnić stronę. Nie zapominajmy również o tym, że naszym dużym obrazkiem “zjadamy” limit transferu danych. Ekran telefonu jest dużo mniejszy niż ekran monitora Full HD, więc nie ma potrzeby pobierania dużych plików. Powinniśmy w tym miejscu pobrać jego mniejszy odpowiednik.

Kolejna rzecz, o której należy pamiętać to czytelność grafiki. Jeżeli ma ona charakter jedynie dekoracyjny, to zmniejszenie tej grafiki nie będzie miało większego znaczenia. Jeżeli jednak na tej grafice znajduje się coś, co ma związek z treścią strony (np. nasze zdjęcie na tle wielkiego domu), to zwykłe zmniejszenie tego zdjęcia (czyli to, co zrobi przeglądarka ze zbyt dużym zdjęciem) może spowodować, że będziemy na tym zdjęciu jedynie niewyraźną plamą na tle domu. W takim przypadku dużo lepiej będzie przygotować nową grafikę, na której “obetniemy” nieistotne elementy tak, abyśmy to my dalej byli wyraźnie wyświetlani w centralnej części zdjęcia. Tak przygotowaną grafikę możemy wyświetlać użytkownikom mniejszych ekranów.

To tyle tematem wstępu, sprawdźmy teraz jak możemy wszystko to osiągnąć za pomocą HTML.

## Atrybuty “srcset” i “sizes”

W standardowym sposobie użycia tagu `<img />` podawaliśmy jedynie nazwę jednego pliku, który chcemy wyświetlić:

```html
<img src="image1.jpg" alt="opis grafiki" />
```

Skoro we wstępnie tyle razy podkreślaliśmy fakt, iż powinniśmy wyświetlać użytkownikowi grafikę w zależności od wielkości ekranu, to nietrudno się domyślić, iż atrybuty `srcset` oraz `sizes`, będą odpowiednio wskazywały na to, jaki obrazek (`srcset`) wyświetlić na konkretnym ekranie (`sizes`). Zobaczmy najpierw, jak wygląda taki zapis, a następnie wyjaśnimy sobie, jak należy ustawiać dwa wspomniane już atrybuty.

```html
<img
  srcset="image-480w.jpg 480w, image-800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
            800px"
  src="image-800w.jpg"
  alt="Opis obrazka"
/>
```

## srcset

Za pomocą tego atrybutu informujemy przeglądarkę, z jakich wersji (jakich rozmiarów) grafiki może ona skorzystać podczas wyświetlania strony. Na wartość tego atrybutu składa się nazwa pliku + rzeczywista szerokość grafiki w pikselach (**Uwaga** – mimo, iż rozmiar podawany jest w pikselach, jako jednostkę podajemy w). Kolejny plik (czyli powiększona lub pomniejszona wersja tej samej grafiki) dodajemy, umieszczając przecinek i ponownie wpisując nazwę oraz szerokość pliku.

Atrybut `srcset` używany jest jedynie w celu poinformowania przeglądarki, ile i o jakich wielkościach pliki ma do dyspozycji podczas renderowania strony. Finalnie to do niej będzie należała decyzja, jakiego pliku użyje.

## sizes

Wartość tego atrybutu ma format podobny do poznanych już przez nas media queries. Podobnie jak w CSS, tak również i tutaj ustalamy, co powinno się wyświetlić przy określonym rozmiarze ekranu. Pierwsze wyrażenie, które będzie pasowało do aktualnego rozmiaru ekranu, zostanie wyświetlone przez przeglądarkę. Wyrażenie składa się z media query, czyli patrząc na nasz przykład, będzie to zapis `(max-width: 600px)` oraz następnie podanej po spacji szerokości, jaką zajmie grafika przy tym konkretnym media query. Tak więc w naszym przykładzie przy rozmiarach ekranu mniejszych niż 600px, na tę konkretną grafikę przewidujemy miejsce o szerokości 480px. Dzięki atrybutowi srcset przeglądarka wie, jakie grafiki ma do dyspozycji, więc w pierwszej kolejności sprawdzi, czy ma grafikę o dokładnie tej szerokości, gdyż taka będzie tutaj najlepszym wyborem – nie trzeba będzie jej zmniejszać (i tym samym pobierać nadmiarowy plik) oraz powiększać (i tym samym wyświetlić niewyraźny obrazek). Jeżeli nie znajdzie grafiki o dokładnie tym rozmiarze, wtedy poszuka pierwszej większej grafiki i to ją wyświetli w tym miejscu.

W naszym przykładzie widzimy również, iż drugie wyrażenie nie posiada media query, a więc jest to domyślna wartość w przypadku gdy rozmiar ekranu nie pasuje do żadnego z media query.

## src

W dalszym ciągu używamy również atrybutu src. Zostanie on użyty w przypadku, gdy użytkownik otworzy stronę za pomocą jakiejś starszej przeglądarki, która nie wspiera atrybutów srcset oraz sizes.

## Przeglądarka rządzi!

Warto wiedzieć o jednej zasadniczej rzeczy – to przeglądarka decyduje o tym, która grafika zostanie wyświetlona. W swoich decyzjach będzie kierowała się ona głównie zasadą oszczędności danych, więc jeżeli jakimś sposobem przeglądarka załadowała wcześniej większy obraz (z tych dostępnych w `srcset`), to nie będzie już próbowała pobierać innych, mniejszych, bo nie widzi takiej potrzeby. Skoro i tak już zużyła zasoby na pobranie grafiki o wyższej jakości, to marnowaniem zasobów i transferu danych będzie pobieranie mniejszego obrazka. Będzie można to dobrze zauważyć na poniższym przykładzie. Pamiętajmy więc, iż w przypadku znacznika `<img />` użytego z atrybutem `srcset`, staramy się wyświetlać zawsze tę samą grafikę, ale o różnych rozmiarach.

“Obcinanie” grafiki, o którym powiedzieliśmy sobie we wstępie, będziemy realizować za pomocą znacznika `<picture>`, który omówimy już w kolejnym temacie.

Prezentacja poniższego przykładu znajduje się poniżej kodu.

```html
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Responsive img</title>
    <style>
      body {
        font-family: sans-serif;
      }
      div {
        width: 50px;
        height: 50px;
        margin: 50px;
        background: green;
      }

      @media screen and (max-width: 600px) {
        div {
          background: red;
        }
      }
    </style>
  </head>
  <body>
    <h1>Responsywny &ltimg&gt</h1>
    <!-- Grafika użyta w tym przykładzie znajduje się
    w zakładce "Materiały" na samym początku lekcji ⬆ -->
    <img
      srcset="img/image-480w.png 480w, img/image-800w.png 800w"
      sizes="(max-width: 600px) 480px,
              800px"
      src="img/image-800w.png"
      alt="Opis obrazka"
    />
    <div></div>
  </body>
</html>
```

<Vimeo id="567408874" h="fcc60d408f" />
