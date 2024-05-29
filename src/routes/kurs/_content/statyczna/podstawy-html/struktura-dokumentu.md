---
title: Struktura dokumentu
description: ''
order: 40
free: false
extra_links:
  - title: Code Fast with Emmet in VS Code!
    href: https://www.youtube.com/watch?v=SY8DppQHloU
  - title: Learn Emmet In 15 Minutes
    href: https://www.youtube.com/watch?v=V8vizNQKtx0
---

Poniżej znajduje się najbardziej podstawowy fragment kodu HTML. który wyświetli nam jedną linijkę tekstu w przeglądarce:

```html
<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>
	<body>
		Live server
	</body>
</html>
```

To, co widać na powyższym fragmencie, jest bazową, podstawową strukturą każdego pliku HTML. Przyjrzyjmy się dokładnie poszczególnym elementom.

## DOCTYPE

`DOCTYPE` nie będzie miał wpływu na wygląd strony. Jest to tzw. preambuła dokumentu HTML, która w pewnym sensie “informuje” przeglądarkę, że to, co znajdzie w dalszej części dokumentu, będzie dokumentem HTML i wymusza na niej renderowanie w trybie zgodnym ze standardami zapisanymi w specyfikacjach HTML i CSS.

## html

Tag `<html>` jest głównym znacznikiem każdej strony internetowej. Pojawia się on jako pierwszy (po `Doctype`) oraz ostatni tag każdego dokumentu. W przykładzie widzimy również, iż `<html>` posiada jeden atrybut: `lang="eng"`. Jeszcze nie wspominaliśmy za dużo na temat atrybutów, ale informacja ta mówi nam o tym, w jakim języku będą pojawiały się treści na naszej stronie. Dzięki temu wyszukiwarki internetowe (np. Google) mogą zawężać wyniki wyszukiwania tylko do określonego języka. Jest to również bardzo przydatne w przypadku osób niewidomych, które korzystają z Internetu, słuchając czytników stron internetowych. Gdy czytnik będzie wiedział od samego początku, z jakim językiem ma do czynienia, będzie mógł odpowiednio dobrać głos oraz akcent.

Wewnątrz tagu `<html>` mogą znaleźć się tylko dwa znaczniki: `<head>` oraz `<body>`

## head

Znacznik `<head>` ma bardzo duże znaczenie dla każdej strony internetowej, dlatego zostanie poświęcona mu cała oddzielna lekcja tego kursu. Na tym etapie wtajemniczenia powinniśmy pamiętać jedynie, iż umieszczamy tam rzeczy, które nie są renderowane bezpośrednio w oknie przeglądarki, ale mają bardzo duży wpływ na to, jak strona będzie wyglądała. To właśnie tam znajdą się linki odnoszące do plików CSS oraz JavaScript. Oprócz tego wewnątrz nagłówka (czyli potocznej nazwy tego znacznika) znajdą się informacje na temat strony, takie jak jej tytuł (jest on widoczny m.in. na zakładce przeglądarki) czy link do grafiki, która ma się wyświetlić, gdy umieścimy link do naszej strony na Facebooku. Do tego znacznika wrócimy w oddzielnej lekcji.

## body

Jak nie trudno się domyślić po nazwie, to właśnie tutaj znajdzie się cała treść naszej strony internetowej. W przeciwieństwie do pozostałych tagów zawartość tego znacznika zostanie w całości wyrenderowana w oknie przeglądarki. Nie ma co się za bardziej rozwodzić na temat samego `<body>`, ponieważ jedynie jest on nadrzędnym tagiem dla całej zawartości strony, a w kolejnych lekcjach skupimy się już na tym, co możemy tam umieścić.

## 🎉 Bonus - Emmet

Z racji tego, iż każda strona musi posiadać opisane tagi zawsze w takiej samej kolejności, dobrze by było zaczynać pracę nad nową stroną z już wygenerowanym schematem i uniknąć ciągłego kopiowania tego fragmentu. Korzystając z VS Code możemy łatwo to osiągnąć. Wystarczy stworzyć nowy plik z rozszerzeniem .html i wpisać wykrzyknik (!) Gdy pojawi się podpowiedź taka jak na poniższej grafice, wystarczy kliknąć tabulator i w naszym dokumencie pojawi się schemat nowej strony HTML.

Skorzystaliśmy tutaj z rozwiązania wbudowanego w VS Code – tzw. [Emmet](https://code.visualstudio.com/docs/editor/emmet). Dzięki niemu możemy uniknąć wpisywania całych fragmentów teksu bądź długich tagów wypełnionych atrybutami. Wystarczy znać odpowiedni skrót i VS Code oszczędzi nam cenne sekundy potrzebne na ciągłe wpisywanie tych samych rzeczy. Z Emmeta skorzystamy jeszcze nie raz w trakcie kursu.
