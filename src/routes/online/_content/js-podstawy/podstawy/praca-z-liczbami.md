---
title: Praca z liczbami
description: ''
order: 40
free: false
extra_links:
  - title: Math methods in JavaScript
    href: https://www.youtube.com/watch?v=xR82Jx4pqIc
  - title: 5 JavaScript Math Functions You Need to Know
    href: https://www.youtube.com/watch?v=H1u09emZQts
---

JavaScript używa pojedynczego typu danych, `number`, do reprezentowania zarówno liczb całkowitych, jak i zmiennoprzecinkowych. Jest to typ danych podwójnej precyzji zgodny ze standardem IEEE 754, który obejmuje wartości specjalne takie jak `NaN` (Not a Number) i `Infinity` (wartość nieskończona).

## Operacje na liczbach

Podstawowe operacje arytmetyczne, takie jak dodawanie, odejmowanie, mnożenie i dzielenie, są proste i intuicyjne w JavaScript.

### Przykład podstawowych operacji:

```javascript
let suma = 10 + 5; // 15
let roznica = 10 - 5; // 5
let iloczyn = 10 * 5; // 50
let iloraz = 10 / 5; // 2
```

## Zaokrąglanie liczb

JavaScript oferuje kilka metod do zaokrąglania liczb, takich jak `Math.round()`, `Math.floor()`, i `Math.ceil()`.

### Przykłady metod zaokrąglania:

```javascript
let zaokraglone = Math.round(5.5); // 6 (zaokrągla do najbliższej liczby całkowitej)
let podloga = Math.floor(5.9); // 5 (zaokrągla w dół)
let sufit = Math.ceil(5.1); // 6 (zaokrągla w górę)
```

## Obiekt `Math`

Obiekt `Math` w JavaScript zawiera właściwości i metody do zaawansowanych operacji matematycznych.

- **`Math.PI`**: Reprezentuje wartość Pi.

  ```javascript
  let pi = Math.PI; // 3.141592653589793
  ```

- **`Math.pow(base, exponent)`**: Zwraca wynik podnoszenia liczby do potęgi.

  ```javascript
  let potega = Math.pow(2, 3); // 8
  ```

- **`Math.sqrt(number)`**: Oblicza pierwiastek kwadratowy liczby.

  ```javascript
  let pierwiastek = Math.sqrt(9); // 3
  ```

- **`Math.random()`**: Generuje pseudolosową liczbę między 0 a 1.

  ```javascript
  let losowa = Math.random(); // np. 0.123456789
  ```

- **`Math.max(...numbers)` / `Math.min(...numbers)`**: Zwraca największą/najmniejszą liczbę z podanych.

  ```javascript
  let maksimum = Math.max(1, 2, 3); // 3
  let minimum = Math.min(1, 2, 3); // 1
  ```

Załóżmy, że budujesz kalkulator. Będziesz potrzebował `Math` do obliczania wartości, takich jak pierwiastki kwadratowe, a podstawowe operacje arytmetyczne do dodawania, odejmowania, mnożenia i dzielenia.
