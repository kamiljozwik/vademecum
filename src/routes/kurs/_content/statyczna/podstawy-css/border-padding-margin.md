---
title: Padding / Margin
description: ''
order: 160
free: false
extra_links:
  - title: Margin and Padding Deep Dive - The basics
    href: https://www.youtube.com/watch?v=EhbZGV2dqZ4
---

<script>
	import Codepen from "$lib/components/ui/Codepen.svelte";
</script>

W poprzedniej lekcji dowiedzieliśmy się, czym jest i jak prawidłowo korzystać z podejścia box model. W tej lekcji dowiemy się już dokładniej, jakie możliwości w tej dziedzinie daje nam CSS.

## Border

Obramowanie dość wyraźnie oddziela nam zawartość tagu HTML od reszty strony. Mamy kilka sposobów na to, aby ramka ta nie była tylko zwykłą cienką czarną linią:

<Codepen id="QWzZKpz" />

## Padding

W przypadku paddingu nie mamy aż tak dużego wachlarza możliwości, jak w przypadku obramowania. Jedyne co możemy tutaj ustawić to odległość, ale warto poznać skrócone zasady zapisu tej własności.

<Codepen id="YzdJGVQ" />

## Margin

Margin, podobnie jak padding przyjmuje jedynie wartości określające odległość – w tym przypadku od obramowania do sąsiadującego tagu HTML. Wszystkie skrócone zapisy, czyli np. margin: 5px 30px działają tak samo, jak w przypadku padding, więc nie będę tutaj tego powtarzał. Nowością tutaj będzie możliwość używania wartości ujemnych. Dzięki temu, zamiast oddalać elementy od siebie, będziemy je przybliżać.

<Codepen id="QWzZKvz" />
