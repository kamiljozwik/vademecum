---
title: Stringifying
description: ''
order: 40
free: false
extra_links:
  - title: JSON stringify method - the optional parameters
    href: https://www.youtube.com/watch?v=0k4NwimfszA
---

Konwersja obiektów JavaScript na format JSON jest kluczowa elementem pracy z danymi w aplikacjach webowych. Funkcja `JSON.stringify()` jest tutaj naszym głównym narzędziem. W praktyce, gdy mamy obiekt JavaScript, który chcemy wysłać na serwer lub zapisać w local storage, używamy `JSON.stringify()` do przekształcenia go w łańcuch JSON.

```javascript
let user = {
	name: 'Anna',
	age: 25,
	isAdmin: true
};

let json = JSON.stringify(user);
console.log(json); // {"name":"Anna","age":25,"isAdmin":true}
```

Serializacja obiektu do formatu JSON jest procesem prostym, ale ważnym. `JSON.stringify()` bierze obiekt JavaScript i przekształca go w łańcuch tekstowy w formacie JSON. To znaczy, że każda właściwość obiektu staje się łańcuchem, a wartości numeryczne, logiczne czy też inne obiekty są odpowiednio konwertowane.

## Zrozumienie parametrów `JSON.stringify()` dla niestandardowej serializacji

Funkcja `JSON.stringify()` posiada dodatkowe parametry, które pozwalają na dostosowanie procesu serializacji.

### 👉 Drugi parametr: funkcja zamieniająca (Replacer)

Jeśli chcesz, aby proces serializacji był bardziej selektywny lub modyfikował dane w specyficzny sposób, możesz użyć funkcji zamieniającej. Jest to funkcja, która jest wywoływana dla każdej pary klucz-wartość w obiekcie i może modyfikować wartość, która zostanie zserializowana.

```javascript
let user = {
	name: 'Anna',
	age: 25,
	isAdmin: true
};

function replacer(key, value) {
	if (typeof value === 'string') {
		return undefined;
	}
	return value;
}

let json = JSON.stringify(user, replacer);
// {"age":25,"isAdmin":true}
```

### 👉 Trzeci parametr: wcięcie (space)

Ostatni parametr, który może być użyteczny, to `space`. Umożliwia on formatowanie wynikowego łańcucha JSON w bardziej czytelny sposób, dodając wcięcia i przerwy. Jest to szczególnie przydatne podczas debugowania lub gdy chcemy, aby nasze dane były łatwe do odczytania przez ludzi.

```javascript
let json = JSON.stringify(user, null, 2);
console.log(json);
/*
{
  "name": "Anna",
  "age": 25,
  "isAdmin": true
}
*/
```
