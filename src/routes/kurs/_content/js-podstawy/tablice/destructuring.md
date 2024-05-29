---
title: Destructuring
description: ''
order: 70
free: false
extra_links:
  - title: Why Is Array/Object Destructuring So Useful And How To Use It
    href: https://www.youtube.com/watch?v=NIq3qLaHCIs
---

Destructuring to wygodna funkcjonalność JavaScript, która pozwala na rozpakowanie wartości z tablic lub obiektów do oddzielnych zmiennych. Ta technika jest szczególnie przydatna, gdy chcemy uzyskać szybki dostęp do konkretnych elementów tablicy bez konieczności odwoływania się do nich poprzez indeksy.

Rozważmy prosty przykład:

```javascript
const liczby = [1, 2, 3];
const [pierwsza, druga, trzecia] = liczby;
```

W tym kodzie `liczby` to tablica trzech elementów. Dzięki destrukturyzacji możemy przypisać każdy z elementów tablicy do nowej zmiennej (`pierwsza`, `druga`, `trzecia`) w jednej linii.

Co jeśli chcemy pominąć niektóre elementy tablicy? To również jest możliwe:

```javascript
const liczby = [1, 2, 3, 4];
const [pierwsza, , trzecia] = liczby; // zwróć uwagę na puste miejsce i dwa przecinki
```

W tym przykładzie pominięta została druga wartość tablicy. Jest to osiągnięte poprzez pozostawienie pustego miejsca pomiędzy przecinkami.

## Destructuring z domyślnymi wartościami

Czasem chcemy mieć wartości domyślne dla zmiennych, które tworzymy przy pomocy destrukturyzacji:

```javascript
const liczby = [1];
const [pierwsza, druga = 'Brak'] = liczby;
```

W tym przypadku, jeśli w tablicy `liczby` brakuje drugiego elementu, zmienna `druga` otrzyma wartość `'Brak'`.

## Zastosowanie w funkcjach

Destructuring jest szczególnie przydatny w funkcjach, gdzie można szybko uzyskać dostęp do elementów przekazanej tablicy:

```javascript
function suma([a, b]) {
	return a + b;
}

suma([5, 10]); // 15
```

## Przykłady

Rozważmy bardziej zaawansowany przykład, gdzie łączymy destructuring z innymi funkcjami JavaScript:

```javascript
const osoba = ['Jan Kowalski', 35, 'Inżynier'];
const [nazwisko, , zawod] = osoba;

function przedstawSie([imie, , zawod]) {
	return `Cześć, jestem ${imie} i pracuję jako ${zawod}.`;
}

przedstawSie(osoba); // "Cześć, jestem Jan Kowalski i pracuję jako Inżynier."
```

W tym przypadku używamy destrukturyzacji w połączeniu z funkcją, aby stworzyć czytelne i łatwe w użyciu rozwiązanie.
