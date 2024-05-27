---
title: Szukanie elementów
description: ''
order: 30
free: false
extra_links:
  - title: The Smartest Way to Search Arrays in JavaScript
    href: https://www.youtube.com/watch?v=q5X6qJ9yqRs
  - title: find Array Method | JavaScript Tutorial
    href: https://www.youtube.com/watch?v=8SkHWeDoTf0
  - title: 8 Methods to Find, Search and Filter JavaScript Arrays
    href: https://www.youtube.com/watch?v=0WZaSoRNJnI
---

## Metoda `indexOf`

W JavaScript, metoda `indexOf` jest używana do szybkiego wyszukiwania pozycji elementu w tablicy. Zwraca indeks pierwszego wystąpienia wartości w tablicy, lub `-1`, jeśli wartość nie zostanie znaleziona. Jest to szczególnie przydatne, gdy pracujesz z prostymi tablicami zawierającymi typy pierwotne, takie jak `string` lub `number`.

```javascript
let fruits = ['apple', 'orange', 'banana'];
let index = fruits.indexOf('orange'); // Zwraca 1
```

## Metoda `lastIndexOf`

Metoda `lastIndexOf` działa podobnie, ale zwraca indeks ostatniego wystąpienia wartości w tablicy. Jest to przydatne, gdy chcesz znaleźć ostatni element w tablicy, lub gdy chcesz usunąć wszystkie wystąpienia określonej wartości.

```javascript
let fruits = ['apple', 'orange', 'banana', 'orange'];
let index = fruits.lastIndexOf('orange'); // Zwraca 3
```

## Metoda `find`

Gdy mamy do czynienia z tablicami obiektów, `find` staje się nieocenioną metodą. Pozwala ona znaleźć pierwszy element spełniający określone kryterium, zdefiniowane przez funkcję callback. Jest to bardzo przydatne, gdy chcemy odnaleźć obiekt na podstawie jednego lub więcej jego atrybutów.

```javascript
let users = [
	{ name: 'Alice', age: 30 },
	{ name: 'Bob', age: 25 }
];
let user = users.find((user) => user.name === 'Bob'); // Zwraca obiekt {name: "Bob", age: 25}
```

## Metoda `filter`

`filter` to całkiem potężne narzędzie do wyszukiwania wielu elementów spełniających określone kryterium. Ta metoda tworzy nową tablicę zawierającą wszystkie elementy, które przeszły test zdefiniowany w funkcji callback.

```javascript
let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter((number) => number % 2 === 0); // Zwraca [2, 4, 6], czyli liczby parzyste
```

## Metoda `findIndex`

Metoda `findIndex` działa podobnie do `find`, ale zwraca indeks pierwszego elementu spełniającego określone kryterium. Jest to przydatne, gdy chcemy znaleźć indeks obiektu, który spełnia określone kryterium.

```javascript
let users = [
	{ name: 'Alice', age: 30 },
	{ name: 'Bob', age: 25 }
];
let index = users.findIndex((user) => user.name === 'Bob'); // Zwraca 1
```

## Metoda `includes`

Metoda `includes` sprawdza, czy tablica zawiera określoną wartość. Zwraca `true`, jeśli wartość zostanie znaleziona, lub `false`, jeśli nie zostanie znaleziona. Jest to przydatne, gdy chcemy sprawdzić, czy tablica zawiera określony element, bez konieczności znajdowania jego indeksu.

```javascript
let numbers = [1, 2, 3, 4, 5, 6];
let hasNumber = numbers.includes(3); // Zwraca true
```
