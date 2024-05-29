---
title: Manipulacja danych
description: ''
order: 20
free: false
extra_links:
  - title: How You Add and Remove Elements in Array in Javascript
    href: https://www.youtube.com/watch?v=5viSCw3ha7M
---

## 👉 Dodawanie elementów

JavaScript oferuje dwie podstawowe metody do dodawania elementów do tablic: `push` i `unshift`. Oba te metody modyfikują oryginalną tablicę.

### Metoda `push`

Metoda `push` dodaje jeden lub więcej elementów na koniec tablicy. Jest to często używane w praktyce programistycznej, na przykład podczas dodawania nowych elementów do dynamicznie aktualizowanej listy.

```javascript
let liczby = [1, 2, 3];
liczby.push(4);

console.log(liczby); // [1, 2, 3, 4]
```

### Metoda `unshift`

Z kolei `unshift` dodaje elementy na początek tablicy. Jest to użyteczne, gdy kolejność elementów ma znaczenie, np. w kolejce priorytetowej.

```javascript
let liczby = [1, 2, 3];
liczby.unshift(0);

console.log(liczby); // [0, 1, 2, 3]
```

## 👉 Usuwanie elementów

Podobnie jak w przypadku dodawania, do usuwania elementów służą dwie metody: `pop` i `shift`.

### Metoda `pop`

`Pop` usuwa ostatni element z tablicy i zwraca go. Jest to przydatne, gdy pracujemy z danymi w formacie LIFO (Last In, First Out), jak w przypadku stosu.

```javascript
let liczby = [1, 2, 3, 4];
let usunietaLiczba = liczby.pop();

console.log(usunietaLiczba); // 4
console.log(liczby); // [1, 2, 3]
```

### Metoda `shift`

`Shift` działa podobnie, ale usuwa pierwszy element tablicy. Jest używane, gdy dane są przetwarzane w formacie FIFO (First In, First Out).

```javascript
let liczby = [1, 2, 3, 4];
let usunietaLiczba = liczby.shift();

console.log(usunietaLiczba); // 1
console.log(liczby); // [2, 3, 4]
```

## 👉 Metoda `splice`

Metoda `splice` jest bardziej uniwersalna i pozwala na dodawanie, usuwanie oraz zastępowanie elementów tablicy.

## Usuwanie elementów za pomocą `splice`

```javascript
let liczby = [1, 2, 3, 4, 5];
liczby.splice(2, 1);

console.log(liczby); // [1, 2, 4, 5]
```

W tym przykładzie, `splice(2, 1)` usuwa jeden element, zaczynając od indeksu 2 (czyli liczba 3).

## Dodawanie elementów

```javascript
let liczby = [1, 2, 4, 5];
liczby.splice(2, 0, 3);

console.log(liczby); // [1, 2, 3, 4, 5]
```

Tutaj `splice(2, 0, 3)` dodaje liczbę 3 na pozycji o indeksie 2, nie usuwając żadnego elementu (drugi argument to 0).

## Zastępowanie elementów

```javascript
let liczby = [1, 2, 3, 4, 5];
liczby.splice(2, 1, 'trzy');

console.log(liczby); // [1, 2, 'trzy', 4, 5]
```

W tym przykładzie, `splice(2, 1, 'trzy')` zastępuje jeden element na pozycji 2 nowym elementem ('trzy').
