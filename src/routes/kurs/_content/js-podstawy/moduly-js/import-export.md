---
title: Struktura modułu
description: ''
order: 20
free: false
extra_links:
  - title: JavaScript ES6 Modules
    href: https://www.youtube.com/watch?v=cRHQNNcYf6s
  - title: ES Modules (import / export) for JavaScript Developers
    href: https://www.youtube.com/watch?v=zeicsyk7mdE
---

W JavaScript, moduł to odseparowany fragment kodu, który odpowiada za określoną funkcjonalność. Moduły pomagają w organizacji kodu i umożliwiają jego wielokrotne wykorzystanie. Główną ideą modułów jest zasada `Single Responsibility Principle`, która mówi, że każda jednostka kodu powinna być odpowiedzialna tylko za jedną rzecz.

### Przykład prostej struktury modułu

Załóżmy, że tworzymy moduł do obsługi dat. Struktura może wyglądać następująco:

```javascript
// dateModule.js

// Prywatna funkcja pomocnicza
function formatData(date) {
	return date.toISOString().substring(0, 10);
}

// Publiczna funkcja do wyświetlania aktualnej daty
function pokazAktualnaDate() {
	const dzisiejszaData = new Date();
	console.log(formatData(dzisiejszaData));
}

// Eksport funkcji
export { pokazAktualnaDate }; // jest to skrócona wersja: export { pokazAktualnaDate: pokazAktualnaDate }
```

W tym przykładzie, funkcja `formatData` jest prywatną funkcją wewnętrzną modułu, a `pokazAktualnaDate` to funkcja publiczna, którą eksportujemy.

## Eksportowanie funkcji, obiektów i zmiennych

Eksportowanie elementów z modułu umożliwia ich wykorzystanie w innych plikach. W JavaScript istnieją dwa główne typy eksportu: `named export` i `default export`.

### Named Export

Eksport nazwany pozwala na eksportowanie wielu elementów z modułu.

```javascript
// mathModule.js

export function dodaj(a, b) {
	return a + b;
}

export const PI = 3.14;
```

W innym pliku można te elementy zaimportować używając ich nazw:

```javascript
import { dodaj, PI } from './mathModule.js';

console.log(dodaj(5, 3)); // Wynik: 8
console.log(PI); // Wynik: 3.14
```

### Default Export

`Default export` pozwala na eksportowanie pojedynczego elementu z modułu, który można potem zaimportować bez użycia nawiasów klamrowych:

```javascript
// greetingModule.js

function powitanie(imie) {
	return `Cześć, ${imie}!`;
}

export default powitanie;
```

Import w innym pliku:

```javascript
import powitanie from './greetingModule.js'; // UWAGA: brak nawiasów klamrowych, możemy zamiast "powitanie" użyć dowolnej nazwy

console.log(powitanie('Anna')); // Wynik: Cześć, Anna!
```
