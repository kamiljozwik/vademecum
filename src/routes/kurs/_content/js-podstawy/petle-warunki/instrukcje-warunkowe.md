---
title: Instrukcje warunkowe
description: ''
order: 20
free: true
extra_links:
  - title: Learn JavaScript LOGICAL OPERATORS in 5 minutes
    href: https://www.youtube.com/watch?v=ovWYhDVQiR8
  - title: JavaScript Tutorial For Beginners - Logical Operators
    href: https://www.youtube.com/watch?v=mbT7sSmVUS8
  - title: JavaScript == vs ===
    href: https://www.youtube.com/watch?v=C5ZVC4HHgIg
---

Wartości boole'owskie (`boolean`) w JavaScript przyjmują jedną z dwóch możliwych wartości: `true` (prawda) lub `false` (fałsz). Są one podstawą logiki warunkowej, umożliwiając podejmowanie decyzji w oparciu o spełnienie określonych warunków.

## Instrukcje warunkowe

Instrukcje warunkowe pozwalają na wykonanie różnych bloków kodu w zależności od spełnienia określonych warunków.

### Instrukcja `if`

Instrukcja `if` jest najprostszą formą instrukcji warunkowej. Jeśli warunek jest prawdziwy (`true`), blok kodu zostanie wykonany.

```javascript
if (warunek) {
	// kod do wykonania, gdy warunek jest prawdziwy
	// czy pamiętasz jak wcześniej wspominałem o tym, że blok kodu jest zdefiniowany przez nawiasy klamrowe?
}
```

### Instrukcja `else`

Instrukcja `else` jest używana w połączeniu z `if`. Jeśli warunek w `if` nie jest spełniony, wykona się blok kodu w `else`.

```javascript
if (warunek) {
	// kod do wykonania, gdy warunek jest prawdziwy
} else {
	// kod do wykonania, gdy warunek jest fałszywy
}
```

### Instrukcja `else if`

`else if` pozwala na sprawdzanie wielu warunków, jeden po drugim.

```javascript
if (warunek1) {
	// kod, gdy warunek1 jest prawdziwy
} else if (warunek2) {
	// kod, gdy warunek2 jest prawdziwy
} else {
	// kod, gdy żaden z warunków nie jest prawdziwy
}
```

## Operatory

W instrukcjach warunkowych często używa się operatorów porównania (`==`, `!=`, `===`, `!==`, `<`, `>`, `<=`, `>=`) oraz logicznych (`&&`, `||`, `!`).

### Operatory porównania

Operator `==` porównuje dwie wartości i zwraca `true`, jeśli są one równe. Operator `!=` zwraca `true`, jeśli wartości nie są równe.

```javascript
if (wiek == 18) {
	// kod, gdy wiek jest równy 18
}

if (wiek != 18) {
	// kod, gdy wiek nie jest równy 18
}
```

Operator `===` porównuje dwie wartości i zwraca `true`, jeśli są one równe i tego samego typu. Operator `!==` zwraca `true`, jeśli wartości nie są równe lub są innego typu.

```javascript
if (wiek === 18) {
	// kod, gdy wiek jest równy 18 i jest typu number
}

if (wiek !== 18) {
	// kod, gdy wiek nie jest równy 18 lub jest innego typu niż number
}

18 == '18'; // true (wartości są równe)
18 === '18'; // false (wartości są równe, ale typy są różne)
```

Operator `<` zwraca `true`, jeśli lewa wartość jest mniejsza od prawej. Operator `>` zwraca `true`, jeśli lewa wartość jest większa od prawej.

```javascript
if (wiek < 18) {
	// kod, gdy wiek jest mniejszy niż 18
}

if (wiek > 18) {
	// kod, gdy wiek jest większy niż 18
}
```

Operator `<=` zwraca `true`, jeśli lewa wartość jest mniejsza lub równa prawej. Operator `>=` zwraca `true`, jeśli lewa wartość jest większa lub równa prawej.

```javascript
if (wiek <= 18) {
	// kod, gdy wiek jest mniejszy lub równy 18
}

if (wiek >= 18) {
	// kod, gdy wiek jest większy lub równy 18
}
```

### Operatory logiczne

Operator `&&` (logiczne `and`) zwraca `true`, jeśli oba warunki są prawdziwe. Operator `||` (logiczne `or`) zwraca `true`, jeśli przynajmniej jeden z warunków jest prawdziwy. Operator `!` (negacja) zwraca `true`, jeśli warunek jest fałszywy (czyli po zanegowaniu będzie prawdziwy).

```javascript
if (wiek >= 18 && jestZalogowany) {
	// kod dla pełnoletnich użytkowników, którzy są zalogowani
}

if (punkty < 10 || czas > 60) {
	// kod, gdy użytkownik ma mniej niż 10 punktów lub czas większy niż 60
}

if (!jestZalogowany) {
	// kod, gdy użytkownik nie jest zalogowany
}
```

Załóżmy, że budujesz aplikację do zarządzania zadaniami. Możesz użyć instrukcji warunkowych do wyświetlania różnych wiadomości w zależności od statusu zadania: czy jest zakończone, w trakcie, czy nie rozpoczęte.
