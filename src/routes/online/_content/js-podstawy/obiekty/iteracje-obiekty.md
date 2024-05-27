---
title: Iteracje obiektów
description: ''
order: 80
free: false
extra_links:
  - title: How to iterate through a JavaScript object literal
    href: https://www.youtube.com/watch?v=5PCcu3ufXdg
  - title: JavaScript Object Iteration Essentials
    href: https://www.youtube.com/watch?v=UxMdQmJfWM8
---

W tej lekcji dowiesz się, jak iterować (czyli wykonywać pętle) po obiektach w JavaScript.

## 👉 Pętla `for...in`

Iterowanie po obiektach w JavaScript często rozpoczyna się od znanej nam już pętli `for...in`. Ta konstrukcja pozwala na przejście przez wszystkie enumerowalne właściwości obiektu, które nie są symbolami:

```javascript
let user = {
	name: 'Jan',
	age: 30,
	isAdmin: true
};

for (let key in user) {
	console.log(key); // "name", "age", "isAdmin"
	console.log(user[key]); // "Jan", 30, true
}
```

Pamiętaj, że `for...in` iteruje również po właściwościach dziedziczonych z prototypu, co czasami może być niepożądane. Aby tego uniknąć, często używamy metody `hasOwnProperty`:

```javascript
for (let key in user) {
	if (user.hasOwnProperty(key)) {
		console.log(key, user[key]);
	}
}
```

## 👉 `Object.keys`, `Object.values`, `Object.entries`

Alternatywą dla `for...in` są metody `Object.keys`, `Object.values`, i `Object.entries`. Każda z nich zwraca tablicę, którą można następnie iterować za pomocą pętli `for` lub `forEach`.

- **`Object.keys(obj)`**: Zwraca tablicę kluczy (nazw właściwości) obiektu `obj`.
- **`Object.values(obj)`**: Zwraca tablicę wartości właściwości obiektu `obj`.
- **`Object.entries(obj)`**: Zwraca tablicę par [klucz, wartość] dla każdej właściwości obiektu `obj`.

Przykłady użycia:

```javascript
let user = {
	name: 'Jan',
	age: 30,
	isAdmin: true
};

console.log(Object.keys(user)); // ["name", "age", "isAdmin"]
console.log(Object.values(user)); // ["Jan", 30, true]
console.log(Object.entries(user)); // [["name", "Jan"], ["age", 30], ["isAdmin", true]]
```

Te metody są szczególnie użyteczne, gdy chcemy przekształcić obiekt w tablicę, aby móc używać metod tablicowych, takich jak `map`, `filter` czy `reduce`.

## Przykład

Wyobraź sobie, że pracujesz nad aplikacją do zarządzania zadaniami i musisz wyświetlić szczegóły każdego zadania. Obiekty zadaniami mogą wyglądać tak:

```javascript
let tasks = {
	task1: { name: 'Napisać kod', status: 'W toku' },
	task2: { name: 'Przetestować aplikację', status: 'Nie rozpoczęte' }
	// więcej zadań...
};
```

Używając `Object.entries`, możesz łatwo przejść przez te zadania i wyświetlić informacje o nich:

```javascript
for (let [taskId, taskDetails] of Object.entries(tasks)) {
	console.log(`Zadanie ${taskId}: ${taskDetails.name} [Status: ${taskDetails.status}]`);
}
```

Ten kod wyświetli nazwę i status każdego zadania, co jest przydatne przy tworzeniu np. interfejsu użytkownika.
