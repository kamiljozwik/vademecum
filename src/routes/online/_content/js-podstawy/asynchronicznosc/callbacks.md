---
title: Callbacks
description: ''
order: 30
free: false
extra_links:
  - title: Callbacks in JavaScript Explained!
    href: https://www.youtube.com/watch?v=cNjIUSDnb9k
  - title: Async JavaScript & Callback Functions -- Tutorial for Beginners
    href: https://www.youtube.com/watch?v=QSqc6MMS6Fk
---

Callbacki to fundamentalny element programowania asynchronicznego w JavaScript. Są to funkcje przekazywane jako argumenty do innych funkcji i wywoływane w odpowiednim czasie, aby obsłużyć wynik operacji asynchronicznej. Kluczowym aspektem callbacków jest ich zdolność do kontynuowania przepływu programu bez blokowania wykonania kodu.

Wyobraźmy sobie, że masz funkcję `pobierzDane`, która pobiera dane z serwera. Możesz przekazać callback do tej funkcji, który zostanie wywołany po otrzymaniu danych:

```javascript
function pobierzDane(url, callback) {
	// symulacja pobierania danych
	setTimeout(() => {
		const wynik = 'pobrane dane';
		callback(wynik); // wywołanie callbacku
	}, 1000);
}

pobierzDane('http://przykladowy.url', function (dane) {
	console.log('Otrzymane dane:', dane);
});
```

## Struktura Callbacku

Callback jest zwykle funkcją, która jest przekazywana jako argument do innej funkcji i wywoływana w określonym momencie. Może przyjmować argumenty i zwracać wartości, tak jak każda inna funkcja.

Rozważmy funkcję `wykonaj`, która wykonuje operację asynchroniczną i przyjmuje callback:

```javascript
function wykonaj(zadanie, callback) {
	console.log('Rozpoczynam zadanie:', zadanie);
	setTimeout(() => {
		const wynik = 'zakończenie zadania';
		callback(wynik);
	}, 2000);
}

wykonaj('Przykładowe zadanie', function (wynik) {
	console.log('Wynik:', wynik);
});
```

Callbacki są nieodłączną częścią JavaScript, szczególnie w obsłudze operacji asynchronicznych, takich jak żądania sieciowe, operacje na plikach czy zdarzenia w przeglądarce.

## Callback Hell 😈

Chociaż callbacki są potężnym narzędziem, mogą prowadzić do tzw. "callback hell" – sytuacji, w której poziomy zagnieżdżenia callbacków stają się niezrozumiałe.

Callback Hell, często nazywany również Piramidą Zagłady, to sytuacja, w której zagnieżdżone funkcje zwrotne (callbacks) tworzą strukturę kodu, która staje się trudna do zrozumienia i zarządzania. Wyobraźmy sobie, że mamy serię operacji asynchronicznych, każda z nich zależna od wyniku poprzedniej. Przykładem może być pobieranie danych z serwera, przetwarzanie ich, a następnie zapisywanie wyników w bazie danych. Każda z tych operacji może być wykonana za pomocą callbacka, co prowadzi do zagnieżdżenia kolejnych funkcji wewnątrz siebie.

### Przykład:

```javascript
getData(function (a) {
	parseData(a, function (b) {
		saveData(b, function (c) {
			// Kolejne operacje
		});
	});
});
```

## Problemy związane z głęboko zagnieżdżonymi callbackami

- **Czytelność i utrzymanie kodu:** Gdy funkcje zwrotne są głęboko zagnieżdżone, kod staje się trudny do czytania i utrzymania. Trudno jest śledzić przepływ wykonania oraz zarządzać błędami na każdym poziomie zagnieżdżenia.

- **Zarządzanie błędami:** W Callback Hell łatwo jest przeoczyć obsługę błędów, ponieważ każda funkcja zwrotna powinna mieć swój własny sposób na radzenie sobie z błędami. To może prowadzić do nieprzewidzianych zachowań i trudnych do zlokalizowania błędów.

- **Testowanie:** Testowanie tak zagnieżdżonego kodu jest dużym wyzwaniem.

- **Zależności:** W Callback Hell trudno jest zarządzać zależnościami między operacjami. Jeśli kolejność operacji się zmienia lub jeśli trzeba dodać nową operację, często wiąże się to z koniecznością przepisania dużej części kodu.

### Rozwiązanie Problemu

W nowoczesnym JavaScript rozwiązaniem Callback Hell jest użycie Promisów i async/await. `Promise` pozwala na zapisanie asynchronicznych operacji w bardziej liniowy i czytelny sposób, a async/await jeszcze bardziej upraszcza syntaktykę, czyniąc kod podobnym do synchronicznego.

Zarówno Promisy, jak i async/await poznamy w kolejnych lekcjach.
