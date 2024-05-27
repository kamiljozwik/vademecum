---
title: Box model
description: ''
order: 150
free: false
extra_links:
  - title: CSS Box Model Tutorial for Beginners
    href: https://www.youtube.com/watch?v=L9khsrjMwKw
  - title: Learn CSS Box Model In 8 Minutes
    href: https://www.youtube.com/watch?v=rIO5326FgPE
  - title: How the CSS Box Model Works in 2 Minutes
    href: https://www.youtube.com/watch?v=YCsp1nATc2o
---

<script>
	import Vimeo from "$lib/components/ui/Vimeo.svelte";
</script>

Niemal każdy tag HTML można określić mianem pudełka (“box”). Posiada on swoją wysokość, szerokość i jest ułożony “obok”, “nad” lub “pod” innymi tagami. W tej lekcji przyjrzymy się dokładnie, co sprawia, że niektóre znaczniki są ułożone jeden obok drugiego, a inne, mimo że zajmują bardzo mało miejsca, zajmują aż całą szerokość strony.

W CSS istnieje zagadnienie nazwane box model. Określa ono, w jaki sposób umieszczane są względem siebie kolejne elementy HTML. Zakładamy, że każdy tag posiada swoją zawartość – może to być tekst, grafika, lista numerowana itp. Każdy z tych elementów składa się z trzech podstawowych składowych:

- **zawartość** – czyli to, co umieszczamy pomiędzy otwierającym oraz zamykającym tagiem `<p>Zawartość</p>`,
- **border** – obramowanie elementu,
- **padding** – odstęp pomiędzy zawartością tagu a obramowaniem,
- **margin** – odstęp pomiędzy obramowaniem a poprzednim i kolejnym tagiem w drzewie HTML.

Obrazowo box model prezentuje się następująco:

<img alt="" src="/online/statyczna/img/podstawy-css/box.png" />

Być może Twoje wprawne oko zauważyło już, iż powyższa grafika pochodzi z DevTools 👁. Dokładnie w taki sposób DevTools w Chrome będzie obrazował nam box model dla każdego znacznika HTML. Dla poniższej przykładowej strony, składającej się tylko z jednego tagu `<div>` z podstawowymi stylami CSS, box model będzie wyglądał tak jak na poniższym wideo:

<Vimeo id="870968265" h="" />

```html
<html>
	<head>
		<title>Box model</title>
		<style>
			div {
				padding: 20px;
				border: 2px solid purple;
				margin: 30px;
			}
		</style>
	</head>
	<body>
		<div>Dzień dobry</div>
	</body>
</html>
```
