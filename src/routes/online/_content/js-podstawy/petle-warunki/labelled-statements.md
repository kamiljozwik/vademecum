---
title: Labelled Statements
description: ''
order: 110
free: true
extra_links:
  - title: Break out of nested for loops in JavaScript - Labels
    href: https://www.youtube.com/watch?v=e3UNE1ZQQYk
---

Labelled Statements w JavaScript to technika, która pozwala nadać unikalną nazwę (etykietę) instrukcji lub bloku instrukcji. Dzięki temu można odwołać się do tych instrukcji w innej części kodu.

Wyobraź sobie, że jesteś na wielopoziomowym parkingu i każdy poziom ma swoją etykietę. Podobnie, w kodzie, możemy „nazwać” poszczególne bloki kodu, co ułatwia ich identyfikację i manipulację.

```javascript
etykieta: instrukcja;
```

## Zastosowanie z pętlami

Najczęstszym zastosowaniem `Labelled Statements` jest kontrola przepływu w pętlach zagnieżdżonych. Załóżmy, że masz pętlę wewnątrz innej pętli i chcesz przerwać obie pętle na raz. Zwykle `break` kończy tylko najbliższą pętlę, ale z etykietą możemy przerwać również zewnętrzną pętlę.

```javascript
zewnętrznaPętla: for (let i = 0; i < 3; i++) {
	wewnętrznaPętla: for (let j = 0; j < 3; j++) {
		if (i === 1 && j === 1) {
			break zewnętrznaPętla;
		}
		console.log(`Iteracja ${i}, ${j}`);
	}
}
```

W tym przykładzie, gdy `i` oraz `j` są równe `1`, pętla `zewnętrznaPętla` zostaje przerwana, co kończy również pętlę `wewnętrznaPętla`.

## `continue` z etykietą

Podobnie jak `break`, `continue` również można używać z etykietami. `continue etykieta` powoduje, że pętla wznawia najbliższą kolejną iterację pętli oznaczonej daną etykietą.

### Przykład z `continue`

```javascript
zewnętrzna: for (let i = 0; i < 5; i++) {
	wewnętrzna: for (let j = 0; j < 5; j++) {
		if (j === 2) {
			continue zewnętrzna;
		}
		console.log(`Iteracja ${i}, ${j}`);
	}
}
```

Tutaj, gdy `j` osiąga wartość 2, pętla `wewnętrzna` jest przerywana i kontrola wraca do pętli `zewnętrzna`.

## Kiedy stosować

Labelled Statements są przydatne w specyficznych sytuacjach, gdy mamy do czynienia z zagnieżdżonymi pętlami lub chcemy dokładnie kontrolować przepływ programu. Jednak ich nadużywanie może prowadzić do kodu trudnego do zrozumienia i utrzymania.

Używaj ich rozważnie i zanim sięgniesz po to rozwiązanie zastanów się dwa razy, czy na pewno nie da się danego problemu rozwiązać w inny sposób.
