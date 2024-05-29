---
title: Higher-Order Functions
description: ''
order: 70
free: false
extra_links:
  - title: Higher Order Functions in JavaScript
    href: https://www.youtube.com/watch?v=H4awPsyugS0
  - title: Higher Order Functions
    href: https://www.youtube.com/watch?v=0aKZvNNf8BA
---

W JavaScript funkcje są traktowane jako „obywatele pierwszej klasy” (choć zdecydowanie częściej będziemy używać angielskiej nazwy "First-Class Citizens").

Oznacza to, że funkcje w JavaScript mogą być przypisywane do zmiennych, przekazywane jako argumenty do innych funkcji i zwracane przez inne funkcje.

## Przykłady użycia funkcji jako zmiennych

Przyjrzyjmy się przykładowi, gdzie funkcja jest przypisana do zmiennej (widzieliśmy to już w jednej z poprzednich lekcji).

```javascript
const powitanie = function () {
	console.log('Cześć!');
};

powitanie(); // Wyświetli: Cześć!
```

W tym przypadku, `powitanie` jest zmienną, która odnosi się do funkcji. Możemy ją wywołać tak jak każdą inną funkcję.

## Funkcje jako argumenty innych funkcji

Funkcje mogą również być przekazywane jako argumenty do innych funkcji.

```javascript
function wykonajDzialanie(funkcja) {
	funkcja();
}

wykonajDzialanie(function () {
	console.log('Działanie wykonane!');
});
```

Tutaj, funkcja anonimowa jest przekazana jako argument do funkcji `wykonajDzialanie` i wywoływana w jej wnętrzu.

Możemy przekazać również nazwaną funkcję jako argument:

```javascript
function powitanie() {
	console.log('Cześć!');
}

function wykonajDzialanie(funkcja) {
	funkcja();
}

wykonajDzialanie(powitanie); // Cześć!
```

## Funkcje wyższego rzędu

Funkcje wyższego rzędu to funkcje, które przyjmują inne funkcje jako argumenty lub zwracają funkcje jako swoje wyniki. Są one fundamentem wielu wzorców programistycznych, szczególnie w programowaniu funkcyjnym.

Spójrzmy na funkcję, która tworzy nową funkcję:

```javascript
function stworzPowitanie(zwrot) {
	// zwracamy funkcję, która przyjmuje argument "imie"
	return function (imie) {
		console.log(zwrot + ', ' + imie + '!');
	};
}

const powitanieDzienDobry = stworzPowitanie('Dzień dobry');
const powitanieWitaj = stworzPowitanie('Witaj');

powitanieDzienDobry('Anna'); // Wyświetli: Dzień dobry, Anna!
powitanieWitaj('Tomasz'); // Wyświetli: Witaj, Tomasz!
```

W tym przypadku, `stworzPowitanie` jest funkcją wyższego rzędu, ponieważ zwraca nową funkcję. Funkcje `powitanieDzienDobry` i `powitanieWitaj` są tworzone przez nią i mogą być wykorzystane z różnymi argumentami.
