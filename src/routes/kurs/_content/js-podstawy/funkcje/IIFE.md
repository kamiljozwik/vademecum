---
title: IIFE
description: ''
order: 80
free: false
extra_links:
  - title: What is an IIFE?
    href: https://www.youtube.com/watch?v=8GDk8sj0YgQ
---

Wyrażenia funkcyjne natychmiastowo wywoływane (IIFE - Immediate Invoked Function Expressions) to ciekawy wzorzec w JavaScript, który pozwala na izolację zakresu zmiennych i funkcji. Składnia IIFE jest dość prosta i opiera się na dwóch głównych elementach: anonimowej funkcji i natychmiastowym jej wywołaniu. Oto przykład:

```javascript
(function () {
	// kod tutaj jest izolowany
})(); // natychmiastowe wywołanie - zwróć uwagę na nawiasy po funkcji
```

Warto zauważyć, że nawiasy wokół funkcji nie są tylko ozdobą. One przekształcają deklarację funkcji w wyrażenie funkcyjne, które może być natychmiast wywołane. A nawiasy po funkcji - to właśnie one odpowiadają za wywołanie.

### Praktyczne zastosowanie IIFE

- **Izolacja Zakresu Zmiennych**: IIFE tworzy nowy zakres, dzięki czemu zmienne zadeklarowane wewnątrz IIFE nie kolidują z zmiennymi o tych samych nazwach w globalnym zakresie.
- **Ochrona kodu**: Przez izolowanie kodu w IIFE, chronimy go przed wpływem zewnętrznym, co zwiększa bezpieczeństwo i czytelność kodu.
- **Użycie w patternach modułowych**: IIFE jest często wykorzystywane w patternach modułowych, aby zapewnić prywatność dla zmiennych i funkcji modułu.
- **Wykonanie kodu tylko raz**: Ponieważ IIFE wywoływane jest natychmiast po jego definicji, jest idealne do wykonania kodu, który ma działać tylko raz, na przykład przy inicjalizacji.

## Korzyści z używania IIFE w enkapsulacji kodu

Enkapsulacja jest jednym z kluczowych pojęć w programowaniu obiektowym, a IIFE doskonale wpisuje się w ten wzorzec, oferując następujące korzyści:

- **Ochrona przed globalnym zakresem**: IIFE zapewnia, że zmienne i funkcje nie są dodawane do globalnego zakresu, co minimalizuje ryzyko konfliktów nazw i zanieczyszczenia globalnej przestrzeni nazw.
- **Tworzenie prywatnych zmiennych i funkcji**: Wewnątrz IIFE można tworzyć zmienne i funkcje, które nie są dostępne z zewnątrz, co jest idealne dla tworzenia "prywatnych" metod i właściwości.
- **Natychmiastowe wykonanie logiki**: IIFE pozwala na natychmiastowe wykonanie potrzebnych operacji, co jest szczególnie przydatne w przypadkach, gdy potrzebujemy szybko coś np. zainicjować.

Rozważmy przykład modułu, który zarządza użytkownikami w aplikacji:

```javascript
let userModule = (function () {
	let users = ['Jan', 'Anna'];

	function addUser(name) {
		users.push(name);
	}

	function listUsers() {
		console.log(users);
	}

	return {
		add: addUser,
		list: listUsers
	};
})();
```

W tym przykładzie, `users`, `addUser` i `listUsers` są prywatne i nie dostępne poza modułem. Natomiast `userModule` udostępnia publiczny interfejs do zarządzania użytkownikami.
