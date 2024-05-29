---
title: Propagacja błędów
description: ''
order: 50
free: false
---

Propagacja błędów w JavaScript odnosi się do sposobu, w jaki informacje o błędzie przemieszczają się przez stos wywołań funkcji. Gdy w JavaScript wystąpi błąd, np. przez odwołanie do nieistniejącej zmiennej, silnik JavaScript tworzy obiekt błędu i przekazuje go w górę stosu wywołań, aż do momentu, kiedy zostanie obsłużony.

Wyobraź sobie, że masz kilka funkcji, z których każda wywołuje następną. Gdy w jednej z nich wystąpi błąd, nieobsłużony na tym poziomie, JavaScript "rzuca" błąd w górę, do funkcji, która ją wywołała. Ten proces kontynuowany jest aż do osiągnięcia globalnego zakresu, chyba że napotka na instrukcję `try...catch`, która obsłuży błąd.

```javascript
function poziom3() {
	throw new Error('Błąd w poziomie 3');
}

function poziom2() {
	poziom3();
}

function poziom1() {
	try {
		poziom2();
	} catch (e) {
		console.log('Błąd został obsłużony: ' + e.message);
	}
}

poziom1();
```

W tym przypadku błąd rzucony w `poziom3` jest przekazywany do `poziom2`, a następnie do `poziom1`, gdzie jest obsługiwany.

### Co to jest obiekt `Error`?

Obiekt `Error` w JavaScript to wbudowany obiekt, który reprezentuje błąd. Jest on używany podczas zgłaszania błędów w aplikacjach. Obiekty `Error` mogą być tworzone przez JavaScript (np. jako wynik błędu składniowego) lub przez programistę za pomocą znanej nam już instrukcji `throw`.

### Właściwości obiektu `Error`

Najważniejsze właściwości obiektu `Error` to:

- `message`: krótki opis błędu,
- `name`: nazwa błędu (domyślnie "Error"),
- `stack`: ciąg tekstowy reprezentujący stos wywołań w momencie zgłoszenia błędu.

### Tworzenie i Obsługa Własnych Błędów

```javascript
try {
	throw new Error('Coś poszło nie tak');
} catch (e) {
	console.log(e.name + ': ' + e.message);
}
```

W tym przykładzie tworzony jest nowy obiekt `Error` z niestandardowym komunikatem, który następnie jest obsługiwany w bloku `catch`.
