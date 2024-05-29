---
title: Metody
description: ''
order: 40
free: false
---

W JavaScript, jak już dobrze wiesz, obiekty to kluczowe elementy, które pozwalają nam grupować powiązane dane i funkcjonalności. Metody obiektów to funkcje, które można wywołać na obiektach. Są one podobne do funkcji, ale kluczowa różnica polega na tym, że metody mają dostęp do danych obiektu, na którym zostały zdefiniowane.

Przykład podstawowej metody w obiekcie:

```javascript
let samochod = {
	marka: 'Ford',
	model: 'Mustang',
	rocznik: 1969,
	wyswietlInfo: function () {
		return `Samochód: ${this.marka} ${this.model}, Rocznik: ${this.rocznik}`;
	}
};

console.log(samochod.wyswietlInfo());
```

W powyższym przykładzie, `wyswietlInfo` to metoda obiektu `samochod`. Używa ona słowa kluczowego `this` do odwołania się do innych właściwości w tym samym obiekcie.

**Używanie skróconej notacji funkcji:**

W ES6 (ECMAScript 2015) wprowadzono skróconą notację dla metod w obiektach. Można pominąć słowo `function` i stworzyć bardziej zwięzły kod:

```javascript
let samochod = {
	marka: 'Ford',
	model: 'Mustang',
	rocznik: 1969,
	wyswietlInfo() {
		return `Samochód: ${this.marka} ${this.model}, Rocznik: ${this.rocznik}`;
	}
};
```

**Metody jako funkcje strzałkowe:**

Chociaż funkcje strzałkowe (`arrow functions`) są popularne ze względu na skróconą składnię i zachowanie kontekstu `this`, nie zawsze są one najlepszym wyborem dla metod obiektów. Wynika to z faktu, że funkcje strzałkowe nie posiadają własnego kontekstu `this`, co może prowadzić do nieoczekiwanych wyników.

## `this` w metodach obiektów

Kluczowe znaczenie ma zrozumienie, jak `this` działa w metodach obiektów. `this` odnosi się do obiektu, na którym metoda została wywołana. To pozwala metodom na dostęp do innych właściwości i metod tego samego obiektu.

```javascript
let osoba = {
	imie: 'Anna',
	powitaj: function () {
		return `Cześć, jestem ${this.imie}!`;
	}
};

console.log(osoba.powitaj());
```

W powyższym przykładzie, `this.imie` w metodzie `powitaj` odnosi się do właściwości `imie` obiektu `osoba`.

## Praktyczne Zastosowania Metod w Obiektach

Metody w obiektach są niezwykle przydatne w programowaniu obiektowym (temat ten poruszamy w kursie zaawansowanym). Pozwalają one na tworzenie kodu, który jest łatwy do zrozumienia i utrzymania. Dzięki nim możemy tworzyć obiekty, które mają zarówno dane, jak i funkcje działające na tych danych, co jest podstawą wspomnianego już programowania obiektowego.

Metody w obiektach JavaScript pozwalają na organizację kodu w sposób, który jest zarówno logiczny, jak i funkcjonalny. Pamiętaj o używaniu `this` do dostępu do innych elementów wewnątrz obiektu i eksperymentuj z różnymi sposobami definiowania metod, aby znaleźć styl, który najlepiej odpowiada Twoim potrzebom.
