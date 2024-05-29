---
title: Argumenty funkcji
description: ''
order: 30
free: false
---

W JavaScript funkcje są elastyczne, co oznacza, że mogą przyjmować różną liczbę parametrów. Rozważmy prosty przykład:

```javascript
function addNumbers(a, b) {
	return a + b;
}
```

W powyższym kodzie, `a` i `b` są parametrami funkcji `addNumbers`. Parametry te służą jako zmienne, które przechowują wartości przekazane do funkcji podczas jej wywołania. Ale co się stanie, jeśli wywołamy `addNumbers(10)` z tylko jednym argumentem? JavaScript pozwala na to, ale `b` otrzyma domyślną wartość `undefined`, co może prowadzić do nieoczekiwanych wyników.

## Domyślne parametry i `rest parameters`

JavaScript ES6 wprowadza interesującą funkcję - domyślne parametry. Pozwalają one funkcjom mieć predefiniowane wartości, które są używane, gdy argument nie jest dostarczony podczas wywołania.

```javascript
function greet(name = 'Gość') {
	return `Witaj, ${name}!`;
}

console.log(greet()); // "Witaj, Gość!"
console.log(greet('Anna')); // "Witaj, Anna!"
```

Dzięki domyślnym parametrom unikamy problemu niezdefiniowanych wartości i czynimy nasze funkcje bardziej elastycznymi i odpornymi na błędy.

`Rest parameters`, z drugiej strony, pozwalają funkcji akceptować dowolną liczbę argumentów jako tablicę. Jest to szczególnie przydatne, gdy nie wiesz, ile argumentów może zostać przekazanych.

```javascript
function sumAll(...numbers) {
	return numbers.reduce((acc, number) => acc + number, 0); // numbers będzie tutaj tablicą zawierającą wszystkie przekazane argumenty
}

console.log(sumAll(1, 2, 3)); // 6
```

## Obiekt `arguments`

Przed wprowadzeniem ES6, JavaScript używał obiektu `arguments` do dostępu do wszystkich argumentów przekazanych do funkcji. Jest to podobne do `rest parameters`, ale z kilkoma kluczowymi różnicami. `arguments` jest obiektem podobnym do tablicy, ale nie tablicą. Można na nim wykonywać operacje tablicowe, ale najpierw trzeba go przekształcić w tablicę.

```javascript
function showArguments() {
	const argsArray = Array.from(arguments);
	console.log(argsArray);
}

showArguments(1, 2, 3); // [1, 2, 3]
```

Podczas gdy `arguments` jest nadal używany w starszym kodzie, zaleca się używanie `rest parameters` w nowych projektach ze względu na ich większą czytelność i elastyczność.
