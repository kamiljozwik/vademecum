---
title: Pętla "for"
description: ''
order: 60
free: false
extra_links:
  - title: JavaScript Loops
    href: https://www.youtube.com/watch?v=s9wW2PpJsmQ
  - title: Learn JavaScript FOR LOOPS in 5 minutes!
    href: https://www.youtube.com/watch?v=ZOQYIWLngSU
    desc: 'Continue oraz Break użyte w powyższym materiale będą omówione w kolejnych lekcjach.'
---

Pętla `for` to jeden z najbardziej podstawowych, a zarazem potężnych narzędzi w językach programowania, w tym w JavaScript. Daje ona programiście możliwość wielokrotnego wykonania określonego fragmentu kodu, co jest szczególnie przydatne przy iterowaniu przez dane, takie jak elementy tablicy czy obiektu.

## Struktura pętli `for`

Podstawowa składnia pętli `for` wygląda następująco:

```javascript
for (inicjalizacja; warunek; inkrementacja) {
	// Kod do wykonania
}
```

- **Inicjalizacja**: Zazwyczaj używana do zdefiniowania i ustawienia początkowej wartości zmiennej licznikowej.
- **Warunek**: Wyrażenie logiczne, które decyduje o kontynuacji lub zakończeniu pętli.
- **Inkrementacja**: Wykonuje się po każdej iteracji pętli, zazwyczaj służy do aktualizacji zmiennej licznikowej.

## Przykład użycia

Rozważmy poniższy przykład:

```javascript
for (let i = 0; i < 5; i++) {
	console.log(i);
}
```

W tym przypadku, zmienna `i` jest inicjalizowana wartością 0. Pętla będzie kontynuowana, dopóki `i` jest mniejsze niż 5, a w każdej iteracji wartość `i` jest zwiększana o 1.

## Iterowanie przez elementy tablicy

Jednym z najczęstszych zastosowań pętli `for` jest iterowanie przez elementy tablicy. Na przykład:

```javascript
let fruits = ['apple', 'banana', 'cherry'];

for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}
```

Tutaj pętla `for` przechodzi przez każdy element tablicy `fruits`, wyświetlając jego wartość.
