---
title: Hoisting
description: ''
order: 61
free: false
extra_links:
  - title: Learn JavaScript Hoisting In 5 Minutes
    href: https://www.youtube.com/watch?v=EvfRXyKa_GI
  - title: WTF Is JavaScript Variable Hoisting
    href: https://www.youtube.com/watch?v=j-9_15QBW2s
---

W JavaScript, termin „hoisting” odnosi się do domyślnego mechanizmu, który przenosi deklaracje zmiennych i funkcji na początek ich zakresu przed wykonaniem kodu. W praktyce oznacza to, że możemy odwoływać się do zmiennych i funkcji przed ich deklaracją w kodzie.

## Hoisting zmiennych

Zmienne deklarowane za pomocą `var` są przenoszone na początek zakresu, ale tylko ich deklaracja, nie inicjalizacja. Oznacza to, że zmienna istnieje od początku zakresu, ale jej wartość jest `undefined` do momentu inicjalizacji.

```javascript
console.log(myVar); // undefined
var myVar = 5;
console.log(myVar); // 5
```

W powyższym przykładzie, zmienna `myVar` jest hoistowana na początek zakresu, więc jej odwołanie przed inicjalizacją zwraca `undefined`.

## Hoisting funkcji

Funkcje deklarowane za pomocą słowa kluczowego `function` są przenoszone w całości, co oznacza, że możemy wywołać funkcję przed jej deklaracją.

```javascript
myFunc(); // "Cześć!"

function myFunc() {
	console.log('Cześć!');
}
```

W tym przypadku, funkcja `myFunc` jest dostępna na początku zakresu, więc jej wywołanie przed deklaracją jest możliwe i działa poprawnie.

## Hoisting a `let` i `const`

W przypadku `let` i `const`, hoisting również zachodzi, ale zmienne te są w tzw. `temporal dead zone` (czasowej strefie martwej) od początku bloku do momentu ich deklaracji. Oznacza to, że odwołanie się do nich przed deklaracją spowoduje błąd.

```javascript
console.log(myLetVar); // ⛔ ReferenceError
let myLetVar = 3;
```

## Unikanie pułapek związanych z hoistingiem

1. **Deklaracje na początku zakresu:** Zawsze deklaruj zmienne i funkcje na początku zakresu, aby uniknąć niejasności.
2. **Używanie `let` i `const`:** Preferuj `let` i `const` nad `var`, aby lepiej kontrolować zakres i unikać nieoczekiwanego zachowania.
3. **Zrozumienie zakresu:** Zrozumienie, jak zakres działa w JavaScript, jest niezwykle ważne do efektywnego korzystania z hoistingu.
