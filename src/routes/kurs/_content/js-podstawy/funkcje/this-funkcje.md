---
title: Funkcje i "this"
description: ''
order: 110
free: false
extra_links:
  - title: JavaScript call() apply() bind() Methods In 90 Seconds
    href: https://www.youtube.com/watch?v=rZc7_2YXbP8
  - title: Apply Bind Call function methods
    href: https://www.youtube.com/watch?v=THh3EiUbysk
  - title: Using Call, Apply and Bind
    href: https://www.youtube.com/watch?v=9eUe1-gLeKs
---

Kontekst `this` w JavaScript jest jednym z najbardziej subtelnych i często mylących aspektów języka, zwłaszcza w kontekście funkcji. Wartość `this` w funkcji zależy od tego, jak i gdzie funkcja jest wywoływana.

W dalszych lekcjach dowiemy się więcej o obiektach i tam również rozszerzymy sobie wiedzę na temat `this`, więc jeżeli ta lekcja będzie dla Ciebie mało zrozumiała, nie martw się. Wszystko będzie dużo jaśniejsze po przeczytaniu lekcji o obiektach. Ta lekcja przyda Ci się głównie wtedy, gdy będizesz wracał do tego kursu, aby odświeżyć sobie wiedzę (czyli już będziesz dobrze wiedział, czym jest `this`).

## Funkcje globalne i zwykłe

W zwykłej funkcji, wywoływanej globalnie (nie jako metoda obiektu), `this` odnosi się do globalnego obiektu. W przeglądarce będzie to `window`, a w środowisku Node.js – `global`. Na przykład:

```javascript
function pokazThis() {
	console.log(this);
}

pokazThis(); // Loguje globalny obiekt (w przypadku przeglądarki, będzie to "window")
```

## Metody obiektów

Gdy funkcja jest wywoływana jako metoda obiektu, `this` odnosi się do tego obiektu.

```javascript
const obiektMetoda = {
	metoda: function () {
		console.log(this);
	}
};

obiektMetoda.metoda(); // Loguje obiekt "obiektMetoda"
```

## Funkcje strzałkowe

Funkcje strzałkowe nie posiadają własnego kontekstu `this`. Wartość `this` w takiej funkcji jest dziedziczona z zakresu, w którym została zdefiniowana.

```javascript
const obiekt = {
	metoda: () => {
		console.log(this);
	}
};

obiekt.metoda(); // Loguje globalny obiekt
```

## Metody `call`, `apply` i `bind`

Te trzy metody pozwalają manipulować kontekstem `this` w funkcjach JavaScript.

### 👉 `call`

Metoda `call` pozwala wywołać funkcję z określonym przez nas kontekstem `this` i argumentami przekazanymi indywidualnie.

```javascript
function przywitaj(slowo) {
	console.log(slowo + ', ' + this.imie);
}

const osoba = { imie: 'Jan' };
przywitaj.call(osoba, 'Cześć'); // Cześć, Jan
```

### 👉 `apply`

Podobnie jak `call`, `apply` pozwala wywołać funkcję z określonym przez nas kontekstem `this`, ale argumenty przekazywane są jako tablica.

```javascript
function przedstaw(slowo1, slowo2) {
	console.log(slowo1 + ', ' + this.imie + ' ' + slowo2);
}

const osoba = { imie: 'Anna' };
przedstaw.apply(osoba, ['Witaj', 'tutaj']); // Witaj, Anna tutaj
```

### 👉 `bind`

Metoda `bind` tworzy nową funkcję, która będzie miała przypisany kontekst `this`, ale nie wykonuje funkcji od razu. Pozwala na jej późniejsze wywołanie.

```javascript
function powiedzCos() {
	console.log('Mówię jako ' + this.imie);
}

const osoba = { imie: 'Krzysztof' };
const zbindowanaFunkcja = powiedzCos.bind(osoba);
zbindowanaFunkcja(); // Mówię jako Krzysztof
```

`call`, `apply` i `bind` pewnie nie będą przez Ciebie zbyt często używane, szczególnie na początku nauki JavaScript. Jednak zdecydowanie warto je znać, ponieważ jest to zagadnienie, które często pojawia się na rozmowach kwalifikacyjnych.
