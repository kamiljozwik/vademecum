---
title: Obszar siatki
description: ''
order: 80
free: false
---

<script>
	import Codepen from "$lib/components/ui/Codepen.svelte";
</script>

Podczas omawiania tego tematu poznamy nowy sposób na rozmieszczanie elementów na siatce. Do tej pory robiliśmy to poprzez podawanie numeru początkowej oraz końcowej linii we właściwościach `grid-row` oraz `grid-column`. Minusem tego rozwiązania jest to, że musimy ciągle w głowie (bądź palcem na ekranie 🙂) wyliczać linie, wewnątrz których chcemy umieścić nasz element. W przypadku nieco bardziej skomplikowanego layoutu strony może to być mocno uciążliwe.

CSS Grid oferuje nam nieco ciekawszy sposób na stworzenie layoutu naszej strony. W dużym skrócie polega on na tym, iż za pomocą właściwości CSS `grid-area` nazywamy (dowolnie) każdy element, który chcemy umieścić na siatce i następnie dokonujemy rozmieszczania elementów za pomocą ich nazw podawanych jako wartość właściwości `grid-template-areas`. W tym momencie zapewne nie ma to jeszcze większego sensu, ale poniższy przykład powinien rozwiać wszelkie wątpliwości… i pozwolić nam pokochać CSS Grid jeszcze bardziej 🙂.

<Codepen id="MWZLwEg" />

## Mozaika

We wstępnie do CSS Grid wspomniałem o tym, iż za jego pomocą możemy łatwo stworzyć nowoczesny, kafelkowy wygląd strony. Myślę, że po poprzednim przykładzie będziesz w stanie zrobić to samodzielnie bez większego problemu. Możesz nawet pokusić się o to, aby spróbować stworzyć taki layout również bez użycia siatki, aby zobaczyć, jak dużym ułatwieniem jest CSS Grid.

Dla przypomnienia poniżej znajduje się przykładowy układ mozaiki. Do dzieła! 🙂

<img alt="" src="/online/statyczna/img/zaawansowana-strona/mosaic.png" />
