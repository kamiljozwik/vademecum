---
title: async / await
description: ''
order: 50
free: false
extra_links:
  - title: JavaScript Async Await
    href: https://www.youtube.com/watch?v=V_Kr9OSfDeU
  - title: Async Await vs. Promises - JavaScript Tutorial for beginners
    href: https://www.youtube.com/watch?v=spvYqO_Kp9Q
---

Funkcje asynchroniczne w JavaScript pozwalają na wykonywanie operacji w tle, nie blokując głównego wątku przeglądarki. Zostały wprowadzone w ES2017 i są zasadniczo ulepszeniem względem wcześniejszych podejść z użyciem callbacków i obietnic (promises).

Tradycyjny JavaScript jest językiem synchronicznym, co oznacza, że instrukcje są wykonywane jeden po drugim. W kontekście operacji takich jak pobieranie danych z internetu, synchroniczny kod może prowadzić do "zamrożenia" strony, co jest nieakceptowalne w nowoczesnym web development. Funkcje asynchroniczne rozwiązują ten problem, umożliwiając wykonywanie długotrwałych operacji w tle.

Funkcja asynchroniczna jest oznaczona słowem kluczowym `async`. Gdy funkcja jest oznaczona jako `async`, zawsze zwraca `Promise`. Jeśli zwraca wartość, która nie jest obietnicą, jest ona automatycznie opakowywana w `Promise`. Dzięki temu możemy używać `then` i `catch` do obsługi zakończenia funkcji.

Przykład:

```javascript
async function fetchData() {
	// Wykonanie żądania HTTP i oczekiwanie na odpowiedź
	let response = await fetch('url-do-zasobu');
	let data = await response.json();
	return data;
}
```

## Używanie słowa kluczowego `await`

Słowo kluczowe `await` jest używane wyłącznie wewnątrz funkcji asynchronicznych. Pozwala ono na "wstrzymanie" wykonywania funkcji do momentu, aż obietnica zostanie spełniona (lub odrzucona). Używając `await`, możemy pisać asynchroniczny kod w sposób, który jest bardziej przypominający synchroniczny - jest to znacznie czytelniejsze niż zagnieżdżanie callbacków lub łączenie wielu obietnic.

Kluczową zaletą `await` jest uproszczenie kodu asynchronicznego. Zamiast łańcuchowania obietnic za pomocą `then`, możemy po prostu napisać sekwencję instrukcji, jakby były synchroniczne.

```javascript
async function getUserData(userId) {
	let response = await fetch(`/api/users/${userId}`);
	let data = await response.json();
	console.log(data);
}
```

W tym przykładzie, `await` wstrzymuje wykonanie funkcji `getUserData` do momentu, aż zapytanie do API zostanie ukończone.

## `try/catch` w asynchronicznych funkcjach

Asynchroniczne funkcje w JavaScript, znane jako funkcje `async`, pozwalają na eleganckie i efektywne zarządzanie operacjami, które mogą trwać pewien czas, takimi jak pobieranie danych z internetu czy operacje na plikach. Jednak każda operacja asynchroniczna niesie ryzyko wystąpienia błędów, które muszą być odpowiednio obsłużone.

Podstawowym mechanizmem do obsługi błędów w JavaScript są bloki `try/catch`. Przykład zastosowania w funkcji asynchronicznej:

```javascript
async function pobierzDane(url) {
	try {
		let odpowiedz = await fetch(url);
		let dane = await odpowiedz.json();
		return dane;
	} catch (blad) {
		console.error('Wystąpił błąd:', blad);
	}
}
```

W tym przypadku, jeśli operacja `fetch` napotka błąd (np. z powodu problemów z siecią), kod w bloku `catch` zostanie wykonany. To pozwala na elegancką obsługę błędów bez przerywania działania całego programu.

### Dobre praktyki w obsłudze błędów

- **Jasne komunikaty o błędach**: Upewnij się, że komunikaty o błędach są jasne i informują użytkownika, co poszło nie tak.
- **Odróżnianie typów błędów**: W bloku `catch` możesz odróżnić różne rodzaje błędów, aby odpowiednio na nie reagować. Na przykład, błąd sieciowy może być traktowany inaczej niż błąd danych.
- **Czysty kod asynchroniczny**: Unikaj mieszania callbacków i promisów z `async/await`. To ułatwia czytanie i utrzymanie kodu.
- **Ograniczenie zakresu `try/catch`**: Umieszczaj w bloku `try` tylko kod, który rzeczywiście może wywołać błąd. To zapewnia większą kontrolę nad obsługą błędów i sprawia, że kod jest bardziej przewidywalny.
- **Logowanie błędów**: Rozważ użycie systemu logowania do zapisywania informacji o błędach. To może pomóc w monitorowaniu i analizie problemów.
- **Testowanie**: Regularnie testuj swoje funkcje asynchroniczne, aby upewnić się, że obsługa błędów działa poprawnie.
