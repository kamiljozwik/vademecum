---
title: Listy
description: ''
order: 70
free: true
extra_links:
  - title: How to create and style lists with HTML and CSS
    href: https://www.youtube.com/watch?v=bRYwmmLC_Ns
  - title: HTML Lists Tutorial
    href: https://www.youtube.com/watch?v=gJWNA3Fduek
---

<script>
	import Codepen from "$lib/components/ui/Codepen.svelte";
</script>

Listowanie elementów jest często spotykaną praktyką na stronach internetowych. Z tego też powodu nie umieszczałem tagów związanych z listami w lekcji dotyczącej wyświetlania tekstu, tylko zajmiemy się nimi teraz. Na szczęście tych tagów nie ma dużo, więc będziemy mogli przyswoić sobie je dość szybko.

W HTML występują trzy rodzaje list:

- numerowane (ang. ordered lists)
- nienumerowane (ang. unordered lists)
- listy definicji (ang. definition lists)

Angielskie nazwy dużo nam pomogą, ponieważ znaczniki HTML, które im odpowiadają, są po prostu ich skrótami.

## Listy numerowane `<ol>`

Widzimy, iż tag ten jest skrótem od ordered list. Listy numerowane będą charakteryzowały się tym, iż elementy listy będą automatycznie otrzymywały kolejne numery porządkowe. Jak zatem zapisać element listy – oczywiście, że kolejnym tagiem, który powstał z angielskiego tłumaczenie elementu listy, czyli list item, a więc znacznikiem tym będzie `<li>...</li>`.

```html
<!-- lista numerowana -->
<ol>
	<li>Element 1</li>
	<li>Element 2</li>
	<li>Element 3</li>
	<li>Ostatni element</li>
</ol>
```

## Listy nienumerowane `<ul>`

Listy nienumerowane będą również wyświetlały nam elementy listy zapisane za pomocą tagu `<li>`, jednak tym razem zamiast numerów zobaczymy punktory listy w postaci małych czarnych kropek. Wygląd punktorów można zmienić za pomocą CSS, ale to jeszcze przed nami.

```html
<!-- lista nienumerowana -->
<ul>
	<li>Element 1</li>
	<li>Element 2</li>
	<li>Element 3</li>
	<li>Ostatni element</li>
</ul>
```

## Listy definicji `<dl>`

Listy definicji, czasami nazywane również listami opisów (ang. description list) tworzymy nieco inaczej niż dwie poprzednie listy. Jak sama nazwa wskazuje, będziemy tworzyć listę złożoną z definicji. Każda definicja zazwyczaj składa się ze słowa kluczowego oraz jego wytłumaczenia. Dokładnie tak jak ma to miejsce w encyklopediach. Element listy będzie więc składał się ze słowa, które chcemy tłumaczyć (ang. definition term) oraz jego opisu (ang. definition description). Teraz powinniśmy już domyśleć się, jak będą wyglądały tagi. Oczywiście będą to `<dt>...</dt>` oraz `<dd>...<dd>`.

```html
<dl>
	<dt>HTML</dt>
	<dd>Język skryptowy tworzący szkielet strony</dd>
	<dt>CSS</dt>
	<dd>Technologia używany w celu stylizacji strony</dd>
	<dt>JavaScript</dt>
	<dd>Język programowania używany przy tworzeniu aplikacji webowych</dd>
</dl>
```

Znaczniki `<li>`, `<dt>` oraz `<dd>` określają element listy. Jednak zdecydowanie co będzie tym elementem to już nasza decyzja. Wewnątrz tych tagów możemy umieszczać inne znaczniki, np. formatujące tekst. Listy możemy również zagnieżdżać wewnątrz siebie – w takim przypadku zamiast kolejnego tagu `<li>` umieszczamy nową listę. Zwróćmy również uwagę na to, jak przeglądarka jest w stanie rozróżnić różnego rodzaju listy i używać różnych punktorów.

<Codepen id="BavOpwd" />

Wszystkie powyższe tagi ponownie zebrałem w krótkim podsumowaniu ([pełny rozmiar](/online/statyczna/img/podstawy-html/listy.png)):

<img alt="" src="/online/statyczna/img/podstawy-html/listy.png" />

## Zadanie

Listy są jednymi z najczęściej używanych elementów HTML, więc warto je dobrze poznać. W ramach ćwiczeń, możesz stworzyć kilka list, np. listę zakupów, listę zadań do wykonania, listę ulubionych filmów.

Obecnie listy te nie będą wyglądały zbyt atrakcyjnie, ale o tym, jak je stylizować dowiemy się w rozdziale poświęconym CSS. Gdy już go poznasz, możesz wrócić do tego zadania i nadać listom odpowiedni wygląd.

Jeżeli brakuje Ci pomysłów na to jak listy takie mogą wyglądać, to poniżej znajdują się przykłady list stworzonych głównie za pomocą HTML + CSS. Postaraj się odtwarzać te listy tak długo, aż nabierzesz wprawy 💪

- [45+ CSS Lists](https://freefrontend.com/css-lists/)
- [40 CSS List Style Examples](https://devdevout.com/css/css-list-styles)
- [30+ CSS Lists](https://devsnap.me/css-lists)
