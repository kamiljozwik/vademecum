---
title: Promises
description: ''
order: 40
free: false
extra_links:
  - title: JavaScript Promise in 100 Seconds
    href: https://www.youtube.com/watch?v=RvYYCGs45L4
  - title: JavaScript Promises In 10 Minutes
    href: https://www.youtube.com/watch?v=DHvZLI7Db8E
  - title: JJavaScript Promises -- Tutorial for Beginners
    href: https://www.youtube.com/watch?v=TnhCX0KkPqs
---

Obietnice (`Promises`) w JavaScript to kluczowy element asynchronicznego programowania. Są one jak umowy, które reprezentują wartość, która może być dostępna teraz, w przyszłości, lub nigdy - stąd nazwa "obietnica".

Główną zaletą promisów jest ich zdolność do uproszczenia złożonych operacji asynchronicznych, takich jak pobieranie danych z sieci.

## Jak działa Promise?

Kiedy tworzysz promise, dostarczasz funkcję, która zawiera "producenta" obietnicy. Ta funkcja ma dwa argumenty: `resolve` i `reject`.

- `resolve` jest wywoływana, gdy asynchroniczna operacja zakończy się sukcesem.
- `reject` jest używana, gdy operacja się nie powiedzie.

Promise może mieć jeden z trzech stanów:

- Oczekująca (`pending`): początkowy stan, ani spełniona, ani odrzucona.
- Spełniona (`fulfilled`): oznacza, że operacja zakończyła się sukcesem.
- Odrzucona (`rejected`): oznacza, że operacja zakończyła się niepowodzeniem.

## Przykład użycia

```javascript
let promise = new Promise((resolve, reject) => {
  // Kod asynchroniczny tutaj
  if (/* operacja udana */) {
    resolve("Sukces");
  } else {
    reject("Błąd");
  }
});
```

## Łańcuchowanie obietnic w JavaScript

Jedną z zalet obietnic jest ich zdolność do "łańcuchowania". Możesz użyć `.then()` do obsługi spełnionych obietnic i `.catch()` do obsługi błędów.

```javascript
promise
	.then((value) => {
		// Obsługa spełnionej obietnicy
	})
	.catch((error) => {
		// Obsługa błędu
	});
```

Wyobraźmy sobie, że pobierasz dane użytkownika z API:

```javascript
fetchUserById(id)
	.then((user) => {
		console.log('Użytkownik:', user);
	})
	.catch((error) => {
		console.error('Wystąpił błąd:', error);
	});
```

Rozważmy teraz kolejny scenariusz: musimy pobrać dane użytkownika z API, a następnie, na podstawie tych danych, pobrać dodatkowe informacje z innego endpointu. Używając obietnic, możemy to zrobić w sposób uporządkowany i czytelny:

```javascript
pobierzUzytkownika(123)
	.then((uzytkownik) => pobierzDodatkoweInfo(uzytkownik.id))
	.then((info) => {
		console.log('Dodatkowe informacje:', info);
	})
	.catch((error) => {
		console.error('Wystąpił błąd:', error);
	});
```

W powyższym przykładzie, każde wywołanie `.then()` oczekuje na zakończenie poprzedniej operacji. Jeśli któraś z obietnic zostanie odrzucona, przechodzimy bezpośrednio do bloku `.catch()`, zarządzając błędami.

## Obsługa błędów z obietnicami

Kluczowym aspektem pracy z obietnicami jest odpowiednie zarządzanie błędami. W przeciwieństwie do tradycyjnego podejścia z callbackami, obietnice oferują elegancki sposób na obsługę błędów za pomocą metody `.catch()`.

## Przechwytywanie błędów na różnych etapach łańcucha

Ważną cechą łańcuchowania obietnic jest to, że błąd w dowolnym miejscu łańcucha przerywa jego dalsze wykonywanie i przechodzi do najbliższego bloku `.catch()`. To pozwala na centralne zarządzanie błędami. Przyjrzyjmy się przykładowi:

```javascript
pobierzUzytkownika(123)
	.then((uzytkownik) => {
		if (!uzytkownik) {
			throw new Error('Użytkownik nie znaleziony');
		}
		return pobierzDodatkoweInfo(uzytkownik.id);
	})
	.then((info) => {
		console.log('Dodatkowe informacje:', info);
	})
	.catch((error) => {
		console.error('Wystąpił błąd:', error);
	});
```

W tym przykładzie, jeśli użytkownik nie zostanie znaleziony, rzucony zostanie wyjątek, który natychmiast przeniesie nas do bloku `.catch()`, pomijając wszelkie kolejne etapy łańcucha.

## `Promise.all` i `Promise.race`

### 👉 Promise.all

`Promise.all` jest niezwykle przydatną metodą w JavaScript, która pozwala na równoległe wykonywanie wielu promisów. Gdy pracujesz z asynchronicznymi operacjami, które są od siebie niezależne, `Promise.all` przychodzi z pomocą, umożliwiając efektywne zarządzanie tymi operacjami.

```javascript
Promise.all([promise1, promise2, promise3])
	.then((values) => {
		// Działania po pomyślnym wykonaniu wszystkich obietnic
	})
	.catch((error) => {
		// Działania w przypadku błędu w którejkolwiek z obietnic
	});
```

W powyższym przykładzie, `Promise.all` przyjmuje tablicę obietnic i zwraca nową obietnicę. Nowa obietnica rozwiązuje się pomyślnie, gdy wszystkie obietnice w tablicy zostaną pomyślnie rozwiązane. Jeśli którakolwiek z obietnic zostanie odrzucona, cała `Promise.all` zostaje odrzucona.

Wyobraź sobie sytuację, w której musisz pobrać dane z różnych API. Każde zapytanie do API zwraca obietnicę. Używając `Promise.all`, możesz poczekać na wyniki wszystkich zapytań, zanim przejdziesz do następnego etapu przetwarzania danych.

### 👉 Promise.race

`Promise.race` to kolejna użyteczna metoda, która rozwiązuje się jak tylko pierwsza z przekazanych do niej obietnic zostanie rozwiązana lub odrzucona.

```javascript
Promise.race([promise1, promise2, promise3])
	.then((value) => {
		// Działania po rozwiązaniu pierwszej obietnicy
	})
	.catch((error) => {
		// Działania w przypadku błędu w pierwszej rozwiązanej obietnicy
	});
```

W tym przypadku, `Promise.race` zwraca obietnicę, która rozwiązuje się lub odrzuca na podstawie pierwszej obietnicy, która zostanie rozwiązana lub odrzucona.

Jednym z przykładów zastosowania `Promise.race` może być stworzenie mechanizmu timeout dla asynchronicznych operacji. Możesz stworzyć obietnicę, która odrzuca się po określonym czasie i użyć `Promise.race`, aby wybrać, która operacja zakończy się szybciej: żądanie API czy timeout.
