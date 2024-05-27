---
title: Getters i Setters
description: ''
order: 70
free: false
extra_links:
  - title: JavaScript Getters and Setters Explained
    href: https://www.youtube.com/watch?v=qkAb-4ZR5Yw
  - title: JavaScript GETTERS & SETTERS are awesome!!!
    href: https://www.youtube.com/watch?v=KQVCAnh6Afk
---

Getter i setter to funkcje w JavaScript, które umożliwiają kontrolowanie sposobu dostępu do właściwości obiektu. Te metody mogą być użyte do definiowania obiektów w bardziej szczegółowy sposób, pozwalając na bardziej złożone operacje niż proste przypisanie wartości.

## Co to są Getter i Setter?

- **Getter** to metoda, która jest wywoływana, kiedy właściwość obiektu jest czytana. Pozwala to na wykonanie dodatkowych obliczeń lub manipulacji danymi przed ich zwróceniem.
- **Setter** to metoda, która jest wywoływana, kiedy właściwość obiektu jest modyfikowana. Umożliwia to walidację lub transformację danych przed ich zapisaniem.

```javascript
let osoba = {
	imie: 'Jan',
	nazwisko: 'Kowalski',

	get pelneImie() {
		return `${this.imie} ${this.nazwisko}`;
	},

	set pelneImie(value) {
		[this.imie, this.nazwisko] = value.split(' '); // dzielimy stringa na tablicę dwuelementową i przypisujemy wartości do imienia i nazwiska
	}
};

console.log(osoba.pelneImie); // Jan Kowalski
osoba.pelneImie = 'Adam Nowak';
console.log(osoba.pelneImie); // Adam Nowak
```

## Po co używać Getterów i Setterów?

Getter i setter mogą wydawać się nieco bardziej skomplikowane niż proste przypisanie wartości, ale oferują kilka kluczowych korzyści:

- **Lepsza kontrola nad dostępem**: Pozwalają na kontrolę nad tym, jak wartości są ustawiane i pobierane.
- **Walidacja danych**: Umożliwiają walidację danych przed ich zapisaniem.
- **Dodatkowa logika**: Pozwalają na dodanie logiki przy odczycie lub zapisie danych.
- **Enkapsulacja**: Chronią wewnętrzne struktury obiektu, co jest istotnym elementem programowania obiektowego.

## Prykład: Formatowanie danych

```javascript
let produkt = {
	nazwa: 'Jabłko',
	_cena: 2.5, // czasami dodajemy _ przed nazwą właściwości, aby wskazać, że jest ona prywatna. Nie jest to jednak wymagane.

	get cena() {
		return `${this._cena.toFixed(2)} zł`; // zaokrąglamy do dwóch miejsc po przecinku
	},

	set cena(nowaCena) {
		if (nowaCena < 0) {
			throw new Error('Cena nie może być ujemna.');
		}
		this._cena = nowaCena;
	}
};

console.log(produkt.cena); // 2.50 zł
produkt.cena = 3.5;
console.log(produkt.cena); // 3.50 zł
```
