---
title: Grafika - picture
description: ''
order: 40
free: false
extra_links:
  - title: HTML Picture Element Tutorial
    href: https://www.youtube.com/watch?v=6EgD0YEYMLA
  - title: The HTML picture element explained
    href: https://www.youtube.com/watch?v=Rik3gHT24AM
  - title: When to use image, figure and picture tag in html
    href: https://www.youtube.com/watch?v=Xn5_gDQFyJg
---

<script>
	import Vimeo from "$lib/components/ui/Vimeo.svelte";
</script>

W tym temacie poznamy znacznik, który pozwoli nam na nieco większą swobodę w wyborze wyświetlanej grafiki na stronie niż tag `<img>`. Tym znacznikiem będzie `<picture>`. W tym przypadku będziemy mogli korzystać z media queries w podobny sposób jak w CSS, a więc zmieniając obraz w zależności od rozmiaru ekranu.

Wiedząc już jak działają media queries oraz atrybut `srcset`, na podstawie poniższego przykładu zapewne dość szybko zrozumiesz, w jaki sposób działa `<picture>`:

```html
<!-- Znacznik <picture> jest kontenerem dla znaczników <source> oraz <img> -->
<picture>
	<!-- Znacznik <source> wskazuje przeglądarce dostępne grafiki dla wybranych
  szerokości ekranu. Poniżej widzimy, iż w przypadku ekranów mniejszych niż 600px,
  zostanie wyświetlony plik "image-with-zoom.png" -->
	<source media="(max-width: 599px)" srcset="image-with-zoom.png" />
	<source media="(min-width: 600px)" srcset="image-full.png" />
	<!-- Na samym końcu MUSIMY! podać znacznik <img>, który to zostanie wyświetlony
  w przypadku starszych przeglądarek. -->
	<img src="image-full.png" alt="Opis obrazka" />
</picture>
```

Zobaczmy, jak to teraz wygląda w praktyce:

```html
<html>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Picture</title>
		<style>
			body {
				font-family: sans-serif;
			}
			img {
				width: 100%;
				max-width: 800px;
			}
		</style>
	</head>
	<body>
		<h1>I ❤ 🚲</h1>
		<picture>
			<source media="(max-width: 599px)" srcset="img/bike-zoom.png" />
			<source media="(min-width: 600px)" srcset="img/bike.png" />
			<img src="img/bike.png" alt="Opis obrazka" />
		</picture>
	</body>
</html>
```

<Vimeo id="567456881" h="aeeea81d8c" />

## 🕵️ Portfolio

Na naszej stronie startowej nie posiadamy zbyt dużo grafik, które moglibyśmy zoptymalizować za pomocą poznanych w tej lekcji technik. Możemy więc pomyśleć o stworzeniu kolejnej podstrony, na której umieścimy zdjęcia oraz wideo (omówione w jednym z następnych tematów) dotyczące naszego głównego bohatera. Podstrona taka może mieć format prostej galerii zdjęć ułożonych jeden obok drugiego bądź nieco bardziej rozbudowanego portfolio, gdzie zdjęcia będą pogrupowane i opisane wg. rozwiązanych spraw.
