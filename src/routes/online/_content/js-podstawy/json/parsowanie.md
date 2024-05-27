---
title: Parsowanie
description: ''
order: 30
free: false
extra_links:
  - title: JavaScript JSON Parse Tutorial
    href: https://www.youtube.com/watch?v=LEBho3PUV3s
---

W pracy z JavaScript często spotykamy się z formatem JSON, który jest zapisywany w postaci tekstowej. Aby te dane można było wykorzystać w aplikacjach JavaScript, muszą zostać przekonwertowane na obiekty JavaScript. Do tego celu służy metoda `JSON.parse()`.

Załóżmy, że mamy ciąg JSON reprezentujący dane użytkownika:

```javascript
let jsonString = '{"name": "Anna", "age": 25, "isStudent": false}';
```

Używając `JSON.parse()`, możemy przekształcić ten ciąg w obiekt JavaScript:

```javascript
let userObject = JSON.parse(jsonString);

console.log(userObject.name); // Wyświetli "Anna"
```

### reviver function

`JSON.parse()` oferuje również możliwość wykorzystania tzw. funkcji rewizora (reviver function), która pozwala modyfikować obiekty podczas ich tworzenia. Dzięki temu możemy na przykład przekształcić daty zapisane w formacie JSON na obiekty dat JavaScript:

```javascript
let jsonString = '{"date": "2020-01-01"}';
let objectWithDate = JSON.parse(jsonString, (key, value) => {
	if (key === 'date') return new Date(value);
	return value;
});

console.log(objectWithDate.date instanceof Date); // Wyświetli "true"
```

## Obsługa błędów podczas parsowania JSON

Parsowanie JSON może być źródłem błędów, na przykład gdy format ciągu JSON jest nieprawidłowy. W takich przypadkach `JSON.parse()` zgłasza wyjątek `SyntaxError`.

### Przykład Użycia Try-Catch

Aby uniknąć przerywania działania aplikacji przez takie błędy, warto użyć bloku `try-catch`:

```javascript
let jsonString = '{"name": "Tomek", "age": 30'; // Błąd: brakujący znak '}'

try {
	let user = JSON.parse(jsonString);
	console.log(user.name);
} catch (e) {
	console.error('Błąd parsowania JSON:', e.message);
}
```

W tym przypadku, jeśli parsowanie się nie powiedzie, błąd zostanie złapany i obsłużony, co pozwala aplikacji kontynuować działanie.

Przy pracy z `JSON.parse()` ważne jest, aby zawsze zakładać możliwość wystąpienia błędów i odpowiednio je obsługiwać. To nie tylko chroni aplikację, ale także zapewnia lepszą obsługę błędów i doświadczenie użytkownika.
