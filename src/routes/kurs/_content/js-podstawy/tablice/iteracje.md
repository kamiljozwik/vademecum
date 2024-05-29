---
title: Popularne metody
description: ''
order: 50
free: false
extra_links:
  - title: 8 Must Know JavaScript Array Methods
    href: https://www.youtube.com/watch?v=R8rmfD9Y5-c
  - title: JavaScript forEach() method in 8 minutes!
    href: https://www.youtube.com/watch?v=uOZWH0KEUs4
  - title: JavaScript Array Map Method Practice in 5 Minutes
    href: https://www.youtube.com/watch?v=G6J2kl1aVao
  - title: JavaScript Array Reduce Method Practice in 5 Minutes
    href: https://www.youtube.com/watch?v=0aJ65a6LsSc
  - title: Map, Filter & Reduce EXPLAINED
    href: https://www.youtube.com/watch?v=8MoElay6dWU
---

Tablice w JavaScript są nie tylko prostymi strukturami przechowującymi dane. Dzięki zastosowaniu różnorodnych metod iteracyjnych, takich jak `forEach`, `map`, `filter`, `reduce`, `every`, i `some`, możemy efektywnie manipulować i zarządzać danymi zawartymi w tablicach. Metody te ułatwiają nam pisanie czystego i zrozumiałego kodu.

## ▶️ Metoda `forEach` - Iteracja bez zwracania

Metoda `forEach` pozwala na wykonanie określonej funkcji dla każdego elementu w tablicy. Jest to podstawowa forma iteracji, która nie zwraca nowej tablicy, a jedynie pozwala na wykonanie operacji na każdym elemencie.

```javascript
let liczby = [1, 2, 3, 4, 5];

liczby.forEach((liczba) => {
	console.log(liczba); // 1, 2, 3, 4, 5
});
```

## ▶️ Przekształcanie z `map`

W przeciwieństwie do `forEach`, metoda `map` tworzy nową tablicę, zawierającą wyniki działania podanej funkcji na każdym elemencie oryginalnej tablicy. Jest to niezwykle przydatne, gdy chcemy przekształcić dane bez modyfikowania oryginalnej tablicy.

```javascript
let liczby = [1, 2, 3, 4, 5];
let podwojoneLiczby = liczby.map((liczba) => liczba * 2);

console.log(podwojoneLiczby); // [2, 4, 6, 8, 10]
```

## ▶️ Filtracja z `filter`

Metoda `filter` pozwala na utworzenie nowej tablicy zawierającej tylko te elementy, które spełniają określony warunek. Jest to szczególnie przydatne do wyciągania podzbiorów danych na podstawie określonych kryteriów.

```javascript
let liczby = [1, 2, 3, 4, 5];
let parzysteLiczby = liczby.filter((liczba) => liczba % 2 === 0);

console.log(parzysteLiczby); // [2, 4]
```

## ▶️ Agregacja z `reduce`

`Reduce` to potężna metoda służąca do agregacji danych tablicy w pojedynczy wynik. Może być używana do sumowania wartości, łączenia ciągów znaków, a nawet do konstruowania obiektów na podstawie tablicy.

```javascript
let liczby = [1, 2, 3, 4, 5];
let suma = liczby.reduce((akumulator, liczba) => akumulator + liczba, 0);

console.log(suma); // 15
```

## ▶️ Sprawdzanie warunków z `every` i `some`

- `every`: Sprawdza, czy wszystkie elementy tablicy spełniają dany warunek. Zwraca `true` tylko wtedy, gdy każdy element tablicy przeszedł test.
- `some`: Sprawdza, czy przynajmniej jeden element tablicy spełnia dany warunek. Zwraca `true`, gdy warunek jest spełniony przez jakikolwiek element.

```javascript
let liczby = [1, 2, 3, 4, 5];

let wszystkieParzyste = liczby.every((liczba) => liczba % 2 === 0);
let jakasParzysta = liczby.some((liczba) => liczba % 2 === 0);

console.log(wszystkieParzyste); // false
console.log(jakasParzysta); // true
```
