---
title: Agregacja i aliasy
description: ''
order: 30
free: false
---

Gdy pracujemy z modułami w JavaScript, często zdarza się, że musimy importować wiele zmiennych lub funkcji z różnych modułów. Aby ułatwić sobie pracę i zwiększyć czytelność kodu, możemy używać aliasów. Aliasy to alternatywne nazwy, które możemy przypisać importowanym elementom. Spójrzmy na przykład:

```javascript
import { bardzoDlugaNazwaFunkcji as skroconaNazwa } from './modul';

skroconaNazwa();
```

Tutaj `bardzoDlugaNazwaFunkcji` jest oryginalną nazwą funkcji z modułu `modul`, a `skroconaNazwa` to alias, który ułatwia nam jej wywołanie. Użycie aliasów jest szczególnie przydatne, gdy importujemy funkcje lub zmienne o skomplikowanych lub długich nazwach.

## Agregacja eksportów

Kolejnym ważnym aspektem pracy z modułami jest agregacja eksportów. Pozwala to na bardziej zorganizowaną strukturę projektu, gdzie możemy eksportować wiele funkcji lub zmiennych z jednego pliku. To szczególnie przydatne, gdy chcemy stworzyć bibliotekę funkcji. Oto przykład:

```javascript
// plik funkcje.js
export const funkcja1 = () => {
	/*...*/
};
export const funkcja2 = () => {
	/*...*/
};

// plik index.js
export * from './funkcje';
```

W pliku `index.js`, używamy `export *` do eksportowania wszystkich funkcji z pliku `funkcje.js`. Użytkownik naszego modułu może teraz importować te funkcje bezpośrednio z `index.js`.

## Dynamiczne importy

Dynamiczne importy to zaawansowana funkcjonalność, która pozwala na ładowanie modułów na żądanie. Jest to szczególnie przydatne w dużych aplikacjach, gdzie chcemy ograniczyć początkowy czas ładowania bardzo dużych modułów. Używamy w tym celu składni `import()`:

```javascript
const nazwaModulu = './modul';

import(nazwaModulu)
	.then((modul) => {
		modul.funkcja();
	})
	.catch((error) => {
		console.error('Wystąpił problem z załadowaniem modułu', error);
	});
```

Dynamiczne importy są obietnicami (`Promise`), co oznacza, że możemy używać `then` i `catch` do obsługi załadowanego modułu lub ewentualnych błędów.
