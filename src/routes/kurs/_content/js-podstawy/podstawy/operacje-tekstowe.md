---
title: Operacje tekstowe
description: ''
order: 30
free: true
extra_links:
  - title: JavaScript for Beginners — String Manipulation
    href: https://www.youtube.com/watch?v=nEEp30hWR-o
  - title: JavaScript String Methods and Properties
    href: https://www.youtube.com/watch?v=LiuzigJldNo
  - title: All 34 String Methods In JavaScript In ONE VIDEO
    href: https://www.youtube.com/watch?v=x16Z_U1tGrc
  - title: Useful string methods
    href: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods
---

Stringi to jeden z najczęściej używanych typów danych w JavaScript, a ich manipulacja jest kluczowym elementem programowania. Poznajmy najważniejsze metody i techniki pracy z danymi tekstowymi.

## Konkatenacja stringów

Łączenie stringów, znane jako konkatenacja (`concatenate`), jest podstawową operacją. Możemy używać operatora `+` lub interpolacji stringów za pomocą backticków.

### Przykład konkatenacji:

```javascript
let powitanie = 'Witaj, ' + 'świecie!';
let imie = 'Code';
let zdanie = `Moje imię to ${imie}`; // Składnia template literals - wyjaśnienie w dalszej części lekcji

console.log(powitanie); // Witaj, świecie!
console.log(zdanie); // Moje imię to Code
```

## Metody Stringów

JavaScript oferuje wiele wbudowanych metod do pracy ze stringami. Oto te, które warto znać od samego początku nauki:

- **`length`**: Zwraca długość stringa.

  ```javascript
  let dlugosc = 'Hello'.length; // 5
  ```

- **`toUpperCase()` / `toLowerCase()`**: Zmienia wszystkie znaki na wielkie/małe litery.

  ```javascript
  let duze = 'hello'.toUpperCase(); // "HELLO"
  let male = 'HELLO'.toLowerCase(); // "hello"
  ```

- **`includes(searchString)`**: Sprawdza, czy string zawiera podany ciąg znaków.

  ```javascript
  let zawiera = 'Witaj, świecie!'.includes('świecie'); // true
  let nieZawiera = 'Witaj, świecie!'.includes('Programisto'); // false
  ```

- **`startsWith(searchString)` / `endsWith(searchString)`**: Sprawdza, czy string zaczyna/kończy się na określony ciąg znaków.

  ```javascript
  let zaczyna = 'Witaj, świecie!'.startsWith('Witaj'); // true
  let konczy = 'Witaj, świecie!'.endsWith('świecie!'); // true

  let nieZaczyna = 'Witaj, świecie!'.startsWith('Programisto'); // false
  ```

- **`slice(start, end)`**: Wycina fragment stringa od indeksu `start` do `end`. Pamiętaj, że indeksy zaczynają się od `0`.

  ```javascript
  let wycinek = 'Witaj, świecie!'.slice(0, 5); // "Witaj"
  let wycinek2 = 'Witaj, mój świecie!'.slice(7, 10); // "mój"
  ```

- **`replace(searchFor, replaceWith)`**: Zastępuje fragment stringa.

  ```javascript
  let zamieniony = 'Witaj, świecie!'.replace('świecie', 'Programisto'); // "Witaj, Programisto!"
  ```

- **`split(separator)`**: Rozdziela string na tablicę na podstawie separatora.

  ```javascript
  // separatorem jest tutaj spacja
  let slowa = 'Witaj, świecie!'.split(' '); // ["Witaj,", "świecie!"]
  ```

- **`join(separator)`**: Łączy elementy tablicy w jeden string, używając łącznika.
  ```javascript
  // łącznikiem jest tutaj spacja
  let polaczony = slowa.join(' '); // "Witaj, świecie!"
  ```

## Template Literals

Template literals (backticks `` `tekst` ``) oferują bardziej zaawansowane możliwości, takie jak wieloliniowe stringi oraz interpolacja.

### Przykład 1:

```javascript
let tekstWieloliniowy = `Pierwsza linia
Druga linia`;

console.log(wieloliniowy);
```

### Przykład 2:

```javascript
let imie = 'Code';
let zdanie = `Moje imię to ${imie}`;

console.log(zdanie); // Moje imię to Code
```

Tych kilka podstawowych metod pozwoli Ci na większość operacji na stringach, ale nie są to wszystkie metody, które oferuje JavaScript. Nie sensu jest uczyć się wszystkiego na pamięć, więc z czasem nauczysz się korzystać z dokumentacji i znajdowania odpowiednich metod do rozwiązywania swoich problemów.

Tymczasem zapoznaj się z materiałami dodatkowymi, aby poznać kolejne przydatne metody do pracy z tekstem.
