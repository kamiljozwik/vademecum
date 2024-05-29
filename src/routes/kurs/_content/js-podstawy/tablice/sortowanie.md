---
title: Sortowanie tablic
description: ''
order: 40
free: false
extra_links:
  - title: JavaScript Array Sort Method Practice in 5 Minutes
    href: https://www.youtube.com/watch?v=nq0DC5M3Kc8
---

W tej lekcji skupimy się na różnych metodach sortowania, ich zastosowaniach oraz sposobach optymalizacji.

## Wprowadzenie do metody `sort()`

JavaScript oferuje wbudowaną metodę `sort()`, która jest często pierwszym wyborem dla deweloperów. Metoda ta sortuje elementy tablicy i zwraca ją w kolejności rosnącej.

```javascript
let liczby = [3, 1, 4, 1, 5, 9];
liczby.sort();

console.log(liczby); // [1, 1, 3, 4, 5, 9]
```

Jednakże, `sort()` ma pewne niuanse. Domyślnie sortuje elementy jako stringi. To może prowadzić do nieoczekiwanych wyników:

```javascript
let liczby = [10, 5, 40, 25];
liczby.sort();

console.log(liczby); // [10, 25, 40, 5]
```

Aby to naprawić, możemy dostarczyć funkcję porównującą w postaci callbacka. Funkcja ta powinna zwracać wartość mniejszą od zera, jeśli pierwszy argument jest mniejszy od drugiego, wartość większą od zera, jeśli pierwszy argument jest większy od drugiego, lub zero, jeśli oba argumenty są równe.

```javascript
liczby.sort((a, b) => a - b);
console.log(liczby); // [5, 10, 25, 40]
```

## Sortowanie zaawansowane

W rzeczywistych aplikacjach często spotkamy się z potrzebą sortowania bardziej złożonych danych, jak obiekty. Załóżmy, że mamy tablicę obiektów reprezentujących użytkowników:

```javascript
let uzytkownicy = [
	{ imie: 'Anna', wiek: 30 },
	{ imie: 'Jan', wiek: 24 },
	{ imie: 'Olga', wiek: 28 }
];

uzytkownicy.sort((a, b) => a.wiek - b.wiek);
```

Ta metoda pozwala nam sortować użytkowników względem wieku.
