---
title: Słowo kluczowe - this
description: ''
order: 30
free: false
extra_links:
  - title: What is THIS in JavaScript?
    href: https://www.youtube.com/watch?v=YOlr79NaAtQ
  - title: What is THIS keyword in JavaScript? - Tutorial for beginners
    href: https://www.youtube.com/watch?v=fVXp7ZWjlO4
---

Słowo kluczowe `this` w JavaScript jest jednym z najbardziej subtelnych i często źle rozumianych aspektów języka. W kontekście obiektów, `this` odnosi się do obiektu, w kontekście którego została wywołana funkcja (metoda). Jednak to, co dokładnie `this` reprezentuje, może się zmieniać w zależności od sposobu, w jaki funkcja jest wywoływana.

## Kontekst wywołania a `this`

### ▶️ Przykład Standardowego Wywołania

Rozważmy prosty obiekt i metodę w JavaScript:

```javascript
let obiekt = {
	nazwa: 'Przykładowy Obiekt',
	pokazNazwe: function () {
		return this.nazwa;
	}
};

console.log(obiekt.pokazNazwe()); // "Przykładowy Obiekt"
```

W tym przypadku, `this` w `pokazNazwe` odnosi się do obiektu `obiekt`, ponieważ metoda została wywołana w kontekście tego obiektu.

### ▶️ Funkcje strzałkowe a `this`

Funkcje strzałkowe (omawiane już wcześniej `arrow functions`) mają inny sposób wiązania `this`. Są one związane z kontekstem, w którym zostały utworzone, a nie z kontekstem wywołania.

```javascript
let obiekt = {
	nazwa: 'Przykładowy Obiekt',
	pokazNazwe: () => this.nazwa // funkcja strzałkowa
};

console.log(obiekt.pokazNazwe()); // undefined
```

W tym przykładzie, `this` nie odnosi się do `obiekt`, ponieważ funkcja strzałkowa nie tworzy własnego kontekstu `this`.

## Zmiana kontekstu `this`

### ▶️ Użycie `call` i `apply`

Metody `call` i `apply` pozwalają zmienić kontekst `this` w funkcji:

```javascript
function pokazNazwe() {
	return this.nazwa;
}

let obiekt1 = { nazwa: 'Obiekt 1' };
let obiekt2 = { nazwa: 'Obiekt 2' };

console.log(pokazNazwe.call(obiekt1)); // "Obiekt 1"
console.log(pokazNazwe.apply(obiekt2)); // "Obiekt 2"
```

### ▶️ Użycie `bind`

Metoda `bind` tworzy nową funkcję z ustalonym kontekstem `this`.

```javascript
let obiekt = { nazwa: 'Stały Obiekt' };

let pokazNazwe = function () {
	return this.nazwa;
}.bind(obiekt);

console.log(pokazNazwe()); // "Stały Obiekt"
```

## Znaczenie `this` w konstruktorach

W konstruktorach, `this` odnosi się do nowo utworzonego obiektu.

```javascript
function Osoba(imie) {
	this.imie = imie;
}

let osoba = new Osoba('Jan');
console.log(osoba.imie); // "Jan"
```

Zrozumienie działania `this` w różnych kontekstach pozwala na elastyczne manipulowanie kontekstem i zwiększa możliwości reużywalności kodu. Pamiętaj, że kontekst `this` może być zmienny i zależny od sposobu wywołania funkcji, co będzie wymagało od Ciebie szczególnej uwagi 😉.
