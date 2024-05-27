---
title: Pozycjonowanie
description: ''
order: 70
free: false
extra_links:
  - title: Normal Document Flow
    href: https://www.youtube.com/watch?v=l8NH6YppJFA
---

<script>
	import Codepen from "$lib/components/ui/Codepen.svelte";
</script>

W tej lekcji omówimy sobie różne sposoby na pozycjonowanie elementów na stronie. Będzie to dotyczyło możliwości przesuwania, jak również utrzymywanie w jednym miejscu poszczególnych części naszej strony. Nauczymy się również, w jaki sposób możemy centrować “dzieci” wewnątrz swoich “rodziców” a także jak wyświetlać elementy jeden nad drugim.

## Normal document flow

Zanim przejdziemy do pozycjonowania, musimy dowiedzieć się, czym jest tzw. Normal document flow. W uproszczeniu jest to sposób, w jaki przeglądarka renderuje nasze znaczniki na stronie. Dotyczy to zarówno ich położenia, jak i zajmowanego miejsca na stronie. Wiemy już, czym jest Box Model i elementy liniowe / blokowe, więc wiemy, w jaki sposób przeglądarka umieszcza takie elementy na stronie.

W ramach szybkiego przypomnienia:

- Elementy **blokowe** zajmują całą możliwą szerokość oraz przyjmują na siebie wszystkie elementy z Box Model (`padding`, `margin`, `border`).
- Elementy **liniowe** zajmują tylko tyle miejsca, ile wymaga ich zawartość, nie możemy ustawiać za pomocą CSS ich szerokość, wysokości oraz górnej / dolnej wartości `margin`.
- Elementy **liniowo-blokowe** zajmują miejsce na stronie tak jak elementy liniowe, ale możemy ustawiać im wszystkie wartości tak, jak w elementach blokowych.

Normal document flow jest więc po prostu domyślnym niczym niezakłóconym sposobem wyświetlania elementów na stronie. Wygląda on tak jak na poniższym przykładzie:

<Codepen id="mdaQpVO" />

Skoro Normal document flow jest domyślnym sposobem wyświetlania elementów na stronie, to znaczy, że musi istnieć sposób na to, aby to zmienić. Tym sposobem jest właściwość CSS o nazwie `position`. To dzięki niej możemy umieszczać nasze elementy w dowolnym miejscu strony. Więcej na ten temat znajdziemy w kolejnym temacie.
