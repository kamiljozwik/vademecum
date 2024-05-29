---
title: Block / Inline
description: ''
order: 170
free: false
extra_links:
  - title: HTML Block vs Inline Elements
    href: https://www.youtube.com/watch?v=XHjoohto2-w
  - title: Block, Inline, and Inline-Block explained
    href: https://www.youtube.com/watch?v=x_i2gga-sYg
  - title: CSS Display Property Tutorial for Beginners
    href: https://www.youtube.com/watch?v=naTAFo2Gyus
---

<script>
	import Codepen from "$lib/components/ui/Codepen.svelte";
</script>

Wiemy już, czym jest box model, a także jak oddalać i przybliżać do siebie elementy na stronie. W tej lekcji poznamy niezwykle ważne zagadnienie, jakim są elementy blokowe i liniowe.

## Elementy liniowe

Elementy (tagi) takie są renderowane na stronie jeden obok drugiego. Jest to możliwe dzięki temu, iż elementy liniowe zajmują tylko tyle miejsca, ile potrzebuje zawartość znacznika. Jeżeli zawartością znacznika będzie tekst, to szerokość takiego znacznika będzie równa szerokości tekstu.

Część tagów HTML jest domyślnie elementem liniowym. Takimi tagami są np. `<a>`, `<button>`, `<i>`, `<img alt="">`, `<input>`, `<span>`, `<strong>`. Jeżeli chcemy samodzielnie ustawić jakiś tag jako element liniowy, musimy użyć CSS:

```css
.selector {
	display: inline;
}
```

Elementy liniowe nie mogą zawierać w sobie tagów ustawionych jako elementy blokowe (o nich za chwilę). Spójrzmy teraz na kilka przykładów:

<Codepen id="xxmyELO" />

Jedna dodatkowa rzecz, o której należy wiedzieć podczas pracy z elementami liniowymi, to fakt, iż elementy takie nie będą otrzymywały górnego i dolnego zewnętrznego odstępu (margin). Właściwość ta będzie miała zastosowanie tylko dla odstępu z lewej i prawej strony:

<Codepen id="bGOmwrm" />

Sprawdź również [video](https://player.vimeo.com/video/870972327) dla powyższego przykładu.

## Elementy blokowe

Elementy blokowe, w przeciwieństwie do liniowych, zajmują całą możliwą szerokość. W tym przypadku możliwa szerokość może być ograniczona przez szerokość rodzica lub po prostu szerokość ekranu. Przykładami tagów domyślnie blokowych są: `<article>`, `<div>`, `<form>`, `<h1 .. h6>`, `<header>`, `<ul>`, `<ol>`, `<li>`, `<main>`, `<nav>`, `<p>`, `<section>`.

Samodzielne ustawienie elementu na blokowy:

```css
.selector {
	display: block;
}
```

Elementy blokowe mogą zawierać w sobie elementy liniowe oraz inne elementy blokowe:

<Codepen id="poqxEpX" />

## Wysokość i szerokość

Istnieje jeszcze jedna szczególna różnica między elementami liniowymi i blokowymi. Otóż elementy liniowe mają z założenia zajmować tylko tyle miejsca, ile potrzebują. Z tego też powodu nie możemy ustawić za pomocą CSS wysokości oraz szerokości takiego elementu. W przypadku elementów blokowych nie mamy żadnych ograniczeń, jeżeli chodzi o ustawianie ich wysokości lub szerokości:

<Codepen id="jOXeMZR" />

## Elementy liniowo-blokowe

Elementy liniowe są przydatne w przypadku, gdy chcemy umieszczać elementy jeden obok drugiego, jednak ich sporą wadą jest brak możliwości ustawiania szerokości i wysokości. W celu rozwiązania tego problemu powstała trzecia, hybrydowa możliwość – element liniowo-blokowy. Pozycjonuje się on tak jak element liniowy, czyli umieszcza znaczniki jeden obok drugiego, natomiast zachowuje się tak, jak element blokowy, czyli możemy ustawić mu za pomocą CSS szerokość oraz wysokość.

```css
.selector {
	display: inline-block;
}
```

<Codepen id="JjwmRLb" />
