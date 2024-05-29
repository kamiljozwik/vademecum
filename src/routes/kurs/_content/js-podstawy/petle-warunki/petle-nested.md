---
title: Pętle zagnieżdżone
description: ''
order: 90
free: false
extra_links:
  - title: JavaScript for Beginners - Nested Loops
    href: https://www.youtube.com/watch?v=5FwBd2eZcNM
  - title: JavaScript 2023 - Nested Loops
    href: https://www.youtube.com/watch?v=tnUM8_ro28M
---

Nested loops, czyli zagnieżdżone pętle, to technika programowania, która pozwala na umieszczenie jednej pętli wewnątrz innej. W kontekście JavaScript, mogą to być pętle `for`, `while`, lub `do...while`. Użycie zagnieżdżonych pętli ma duże znaczenie w wielu scenariuszach, takich jak przetwarzanie danych wielowymiarowych (np. tablic dwuwymiarowych) lub tworzenie złożonych algorytmów.

## Jak działa zagnieżdżenie

Wyobraźmy sobie prosty przykład: mamy tablicę dwuwymiarową (tablica w której są inne tablice) i chcemy przejść przez każdy element każdej podtablicy. Używamy do tego dwóch pętli `for`. Zewnętrzna pętla przechodzi przez każdą podtablicę, a wewnętrzna pętla - przez elementy danej podtablicy.

```javascript
let dwuwymiarowaTablica = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];

for (let i = 0; i < dwuwymiarowaTablica.length; i++) {
	for (let j = 0; j < dwuwymiarowaTablica[i].length; j++) {
		// dwuwymiarowaTablica[i] to podtablica
		console.log(dwuwymiarowaTablica[i][j]);
	}
}
```

## Uważaj na złożoność

Głównym wyzwaniem przy używaniu zagnieżdżonych pętli jest złożoność obliczeniowa. Jeśli mamy pętlę zagnieżdżoną w innej pętli, czas wykonania takiego kodu, z każdym dodatkowym poziomem zagnieżdżenia, rośnie eksponencjalnie (czyli w prostych słowach dość szybko 😉).

## Praktyczne zastosowania

1. **Algorytmy sortowania:** Wiele klasycznych algorytmów sortowania, jak sortowanie bąbelkowe, wykorzystuje zagnieżdżone pętle.
2. **Operacje na macierzach:** Operacje takie jak mnożenie macierzy wymagają zagnieżdżonych pętli do obliczenia wyniku.
3. **Gry:** W grach, szczególnie tych opartych na siatce (np. szachy), często używa się zagnieżdżonych pętli do przetwarzania i renderowania siatki gry.

## Zagnieżdżanie różnych typów pętli

Można również mieszać różne typy pętli w zagnieżdżeniu. Na przykład, pętla `for` może być zagnieżdżona w pętli `while`. Taka elastyczność pozwala na dopasowanie struktury pętli do konkretnego problemu.

```javascript
let i = 0;

while (i < 3) {
	for (let j = 0; j < 3; j++) {
		console.log(`i = ${i}, j = ${j}`);
	}
	i++;
}
```

Czy wiesz, co zobaczymy w konsoli?

Zagnieżdżone pętle to potężne narzędzie w rękach programisty JavaScript. Pozwalają na efektywne przetwarzanie danych złożonych struktur, ale wymagają uwagi w kontekście wydajności. Dobrze zaprojektowane zagnieżdżone pętle mogą znacznie ułatwić realizację skomplikowanych zadań, lecz ich nadużywanie może prowadzić do problemów z wydajnością. Pamiętaj, aby zawsze mieć na uwadze potencjalny wpływ na wydajność i starać się optymalizować kod tam, gdzie to możliwe.
