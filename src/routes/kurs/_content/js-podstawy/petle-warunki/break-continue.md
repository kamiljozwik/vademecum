---
title: Break / Continue
description: ''
order: 100
free: false
extra_links:
  - title: Break & Continue
    href: https://www.youtube.com/watch?v=QSuTH0C_3_Y
  - title: Break & Continue (2)
    href: https://www.youtube.com/watch?v=S4_72alnjCg
---

W programowaniu, pętle są kluczowe do obsługi powtarzających się zadań. Czasami jednak potrzebujemy większej kontroli nad sposobem ich działania. Tu na scenę wkraczają `break` i `continue`.

## `break` - zatrzymywanie pętli

Instrukcja `break` natychmiast kończy działanie bieżącej pętli. Najczęściej stosowana jest w pętlach `for` lub `while`, gdy chcemy przerwać jej wykonanie w wyniku spełnienia pewnego warunku.

**Przykład**

```javascript
for (let i = 0; i < 10; i++) {
	if (i === 5) {
		break; // kończy pętlę, gdy i osiągnie 5
	}
	console.log(i); // loguje liczby od 0 do 4
}
```

## `continue` - pominięcie iteracji

Z kolei `continue` powoduje pominięcie obecnej iteracji pętli i przejście do następnej. Jest to użyteczne, gdy chcemy zignorować pewne wartości w obrębie pętli.

**Przykład**

```javascript
for (let i = 0; i < 10; i++) {
	if (i % 2 === 0) {
		continue; // pomija iteracje dla parzystych wartości "i"
	}
	console.log(i); // loguje tylko nieparzyste liczby
}
```

## Zarządzanie złożonymi warunkami

W praktyce, `break` i `continue` są nieocenione w obsłudze skomplikowanych warunków wewnątrz pętli, gdzie chcemy unikać nadmiernego zagnieżdżania `if-else`.

**Przykład:**

Wyobraźmy sobie, że mamy listę transakcji, a naszym zadaniem jest przetwarzanie ich aż do napotkania transakcji nieautoryzowanej (tutaj taka transakcja ma wartość ujemną).

```javascript
let transakcje = [200, 150, -50, 400, -100];

for (let i = 0; i < transakcje.length; i++) {
	if (transakcje[i] < 0) {
		// transakcja nieautoryzowana
		break;
	}
	// Przetwarzanie autoryzowanej transakcji
	console.log(`Przetwarzanie transakcji: ${transakcje[i]} PLN`);
}
```

Podczas korzystania z `break` i `continue` ważne jest, aby pamiętać o klarowności kodu. Nadmierne ich użycie może uczynić pętle trudniejszymi do zrozumienia i utrzymania. Zawsze starajmy się znaleźć równowagę między kontrolą a czytelnością.
