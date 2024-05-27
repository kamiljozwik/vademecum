---
title: Deklaracja/wyrażenie
description: ''
order: 20
free: false
extra_links:
  - title: Function Declarations vs Function Expressions
    href: https://www.youtube.com/watch?v=VAYIPSNXHhw
  - title: Javascript Function Expression Vs Declaration For Beginners
    href: https://www.youtube.com/watch?v=qz7Nq1tV7Io
---

W JS funkcje można tworzyć na dwa główne sposoby:

- deklaracje funkcji
- wyrażenia funkcji

Choć obie metody służą do definiowania funkcji, różnią się kilkoma kluczowymi aspektami, które mogą wpłynąć na sposób, w jaki piszesz i organizujesz swój kod.

## Deklaracje funkcji

Deklaracja funkcji to standardowy sposób definiowania funkcji. Widzieliśmy to w poprzedniej lekcji.

```javascript
function nazwaFunkcji(parametry) {
	// Ciało funkcji
}
```

**Główne cechy**:

- **Hoisting**: Deklaracje funkcji są "wynoszone" na początek zakresu, w którym zostały zdefiniowane. Oznacza to, że możesz wywołać funkcję przed jej zadeklarowaniem w kodzie.
- **Czytelność i struktura**: Deklaracje funkcji są zazwyczaj bardziej czytelne, zwłaszcza w dużych projektach, ponieważ łatwo jest zidentyfikować funkcje w kodzie.

**Przykład**:

```javascript
const wynik = dodaj(5, 3); // Wywołanie funkcji przed jej zdefiniowaniem.
console.log(wynik); // Działa, zwraca 8

function dodaj(a, b) {
	return a + b;
}
```

## Wyrażenia funkcji

Wyrażenie funkcji to inny sposób definiowania funkcji, który polega na przypisaniu funkcji do zmiennej. Wygląda to następująco:

```javascript
const nazwaFunkcji = function (parametry) {
	// Ciało funkcji
};
```

**Główne cechy**:

- **Brak hoistingu**: W przeciwieństwie do deklaracji, wyrażenia funkcji nie są "wynoszone". Oznacza to, że nie można ich wywołać przed zdefiniowaniem w kodzie.
- **Anonimowość**: Często funkcje w wyrażeniach są "anonimowe" (tak nazywamy funkcje bez podanej nazwy po słowie kluczowym `function`), co może utrudniać debugowanie, ale również daje elastyczność w definiowaniu funkcji.

**Przykład**:

```javascript
const wynik = dodaj(5, 3); // ⛔ Błąd: "dodaj" nie jest zdefiniowane
console.log(wynik);

const dodaj = function (a, b) {
	return a + b;
};
```

## Kiedy używać którego

- **Deklaracje funkcji** są idealne, gdy potrzebujesz jasnej struktury i łatwości w identyfikowaniu funkcji w kodzie. Są one także użyteczne, gdy funkcje muszą być wywoływane w różnych miejscach kodu, niezależnie od ich kolejności.
- **Wyrażenia funkcji** są użyteczne w sytuacjach, gdzie funkcje są używane jako wartości, np. jako argumenty innych funkcji, czy też gdy chcesz uniknąć hoistingu, co może prowadzić do bardziej przewidywalnego kodu.
