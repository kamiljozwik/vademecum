---
title: Obiekt "Date"
description: ''
order: 10
free: false
extra_links:
  - title: Learn JavaScript DATE objects in 8 minutes!
    href: https://www.youtube.com/watch?v=LwYwz67l1lA
  - title: The Date Object
    href: https://www.youtube.com/watch?v=-eRsWqwcPuk
---

W JavaScript, data i czas są obsługiwane przez wbudowany obiekt `Date`. Pozwala on na tworzenie, odczytywanie, i manipulowanie datami oraz czasem. Aby stworzyć nowy obiekt `Date`, możemy użyć kilku różnych konstruktorów. Najprostszy sposób to:

```javascript
let teraz = new Date();
```

To tworzy obiekt `Date` z aktualnym czasem. Możemy również określić konkretną datę i czas, przekazując łańcuch znaków do konstruktora:

```javascript
let dataUrodzenia = new Date('1990-05-15');
```

### 👉 Formatowanie dat

JavaScript oferuje różne metody do formatowania dat, takie jak `toLocaleDateString()`, `toLocaleTimeString()`, i `toLocaleString()`. Na przykład, jeśli chcemy wyświetlić tylko datę:

```javascript
console.log(teraz.toLocaleDateString()); // 'dd/mm/yyyy'
```

### 👉 Operacje na datach

Często potrzebujemy wykonywać operacje na datach, takie jak dodawanie dni czy porównywanie dat. JavaScript nie posiada wbudowanych funkcji do operacji matematycznych na datach, ale możemy to zrobić, manipulując milisekundami.

Aby dodać dni do daty, możemy skorzystać z metody `setDate()` i `getDate()`:

```javascript
teraz.setDate(teraz.getDate() + 5);
```

Ten kod doda 5 dni do obecnej daty.

### 👉 Porównywanie dat

Porównywanie dat możemy zrobić używając operatorów porównania:

```javascript
if (dataUrodzenia < teraz) {
	console.log('Twoja data urodzenia jest wcześniejsza niż dzisiejsza data.');
}
```
