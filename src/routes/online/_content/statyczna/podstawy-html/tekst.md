---
title: Praca z tekstem
description: ''
order: 50
free: true
extra_links:
  - title: Learn HTML text formatting in 3 minutes!
    href: https://www.youtube.com/watch?v=urT4pdM3sr4
---

<script>
	import Codepen from "$lib/components/ui/Codepen.svelte";
</script>

Najłatwiejszą rzeczą do wyświetlenia na każdej stronie internetowej jest tekst. Możemy zrobić to, wpisując go bezpośrednio wewnątrz znacznika `<body>` i już mamy w pełni działającą stronę z (minimalną, ale jednak) zawartością.

W tej lekcji przyjrzymy się znacznikom, których możemy używać przy pracy z tekstem. Główną różnicą w przypadku używania różnych tagów będzie ich wygląd oraz ilość zajmowanego miejsca na stronie. Różnice w wyglądzie najłatwiej będzie zauważyć, po prostu renderując wszystkie tagi na jednej stronie i to właśnie zaraz sobie zrobimy.

Co do zajętości miejsca mam tutaj głównie na myśli szerokość elementu. Niektóre znaczniki będą zajmowały całą szerokość strony pomimo tego, że będą posiadały bardzo krótki tekst. W takim przypadku tekst z kolejnego znacznika będzie wyświetlony w następnej linii. Czemu tak się dzieje? Dowiemy się tego w lekcjach poświęconych tzw. Box Model. Na razie nie zawracajmy sobie tym głowy i załóżmy, że tak po prostu jest 🙂

Spójrzmy teraz na ten przykładowy plik HTML. Umieściłem w nim większość tagów używanych przy pracy z tekstem. Dzięki wyświetleniu ich wszystkich na jednej stronie możemy poznać wizualne różnice występujące między nimi.

<Codepen id="yLGqxEe" />

W powyższym przykładzie tekst jest renderowany w pojedynczych tagach, np. `<h3> Daj ać ja pobruszę a ty poczywaj </h3>`. Znaczniki możemy jednak zagnieżdżać jeden w drugim tak jak na poniższym przykładzie:

```html
<html lang="en">
	<body>
		<p>
			Paragraf tekstu, <strong>wewnątrz</strong> którego możemy umieszczać
			<mark>dodatkowe</mark> formatowanie tekstu.
		</p>
	</body>
</html>
```

Dodatkowe informacje na temat wszystkich użytych znaczników można znaleźć na poniższej grafice (większa rozdzielczość [tutaj](/online/statyczna/img/podstawy-html/tekst.png)):

<img alt="" src="/online/statyczna/img/podstawy-html/tekst.png" />
