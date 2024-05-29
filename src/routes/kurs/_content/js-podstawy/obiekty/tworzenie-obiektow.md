---
title: Tworzenie obiektów
description: ''
order: 20
free: false
extra_links:
  - title: Different Ways of Creating Objects in JavaScript
    href: https://www.youtube.com/watch?v=UrM9xgPxq1E
  - title: Obiekty JavaScript - wprowadzenie
    href: https://www.frontstack.pl/blog/obiekty-javascript-podstawy
---

W tej lekcji skupimy się na tym, w jaki sposó możemy tworzyć obiekty w JavaScript.

## 👉 Object Literals

Jednym z najprostszych sposobów tworzenia obiektów w JavaScript jest użycie Object Literals. Jest to szybki i intuicyjny sposób (widzieliśmy go w poprzedniej lekcji) na stworzenie obiektu z par klucz-wartość.

```javascript
let samochod = {
	marka: 'Toyota',
	model: 'Corolla',
	rok: 2021
};
```

## 👉 Konstruktor `Object`

Możemy również użyć wbudowanego konstruktora `Object()`. Ten sposób jest mniej powszechny, ale nadal użyteczny w niektórych scenariuszach.

```javascript
let samochod = new Object();
samochod.marka = 'Toyota';
samochod.model = 'Corolla';
samochod.rok = 2021;
```

## 👉 Funkcje konstruktujące

Możesz zdefiniować własną funkcję konstruktującą i używać `new` do tworzenia instancji.

```javascript
function Samochod(marka, model, rok) {
	this.marka = marka; // this odnosi się do obiektu, który zostanie utworzony (patrz kolejne lekcje)
	this.model = model;
	this.rok = rok;
}

let mojSamochod = new Samochod('Toyota', 'Corolla', 2021);
```

## 👉 Metoda `Object.create()`

Ta metoda pozwala na tworzenie nowych obiektów, używając istniejącego obiektu jako prototypu.

```javascript
const prototypSamochodu = {
	pokazInfo: function () {
		return `Samochód: ${this.marka} ${this.model} z roku ${this.rok}`;
	}
};

let mojSamochod = Object.create(prototypSamochodu);
mojSamochod.marka = 'Toyota';
mojSamochod.model = 'Corolla';
mojSamochod.rok = 2021;

mojSamochod.pokazInfo(); // Samochód: Toyota Corolla z roku 2021
```

## 👉 Klasa w ES6

W ES6 wprowadzono klasy, które nieco ułatwiły nam tworzenie obiektów w JS. Klasami zajmujemy się w kursie zaawansowanym.

```javascript
class Samochod {
	constructor(marka, model, rok) {
		this.marka = marka;
		this.model = model;
		this.rok = rok;
	}

	pokazInfo() {
		return `Samochód: ${this.marka} ${this.model} z roku ${this.rok}`;
	}
}

let mojSamochod = new Samochod('Toyota', 'Corolla', 2021);

mojSamochod.pokazInfo(); // Samochód: Toyota Corolla z roku 2021
```

Wybór metody tworzenia obiektów zależy od kontekstu i potrzeb. Literały obiektów i klasy ES6 są najbardziej popularne ze względu na ich czytelność i prostotę. Funkcje konstruktujące i `Object.create()` są bardziej elastyczne, ale mogą być bardziej skomplikowane w użyciu. Ważne jest, aby zrozumieć różnice i wybrać odpowiednią metodę dla konkretnego przypadku użycia.
