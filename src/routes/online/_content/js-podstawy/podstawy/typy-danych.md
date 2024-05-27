---
title: Typy danych
description: ''
order: 20
free: true
extra_links:
  - title: JavaScript Data Types
    href: https://www.youtube.com/watch?v=UmSpfdxu3ro
  - title: Different Data Types in JavaScript
    href: https://www.youtube.com/watch?v=O9by2KcR2v4
---

JavaScript jest językiem o dynamicznym typowaniu, co oznacza, że typy danych zmiennych są ustalane w czasie wykonania. Poznajmy podstawowe typy danych, które są filarem każdego skryptu JS.

## 👉 Stringi (ciągi znaków)

Stringi to ciągi znaków, używane do reprezentowania tekstu. Mogą być otoczone pojedynczymi lub podwójnymi cudzysłowiami lub tzw. backtickami (`` ` ``). Te ostatnie pozwalają na interpolację, czyli dynamiczną zmianę zawartości tekstu.

### Przykład użycia stringów:

```javascript
let powitanie = 'Witaj, świecie!';
let imie = 'Code';
let zdanie = `Moje imię to ${imie}`;

console.log(zdanie); // Moje imię to Code
```

## 👉 Numery / Liczby

W JavaScript, liczby (zarówno całkowite, jak i zmiennoprzecinkowe) są reprezentowane przez typ `number`. Nie ma oddzielnych typów dla liczb całkowitych i zmiennoprzecinkowych. Wszystkie liczby wpadają do jednego worka, jakim jest typ `number`.

### Przykład użycia wartości liczbowych:

```javascript
let wiek = 30;
let temperatura = -4.5;
```

## 👉 Boolean

Typ boolean przyjmuje jedną z dwóch wartości: `true` lub `false`. Jest to podstawowy typ danych do obsługi logiki warunkowej.

### Przykład użycia booleanów:

```javascript
let jestPelnoletni = true;
let jestZalogowany = false;
```

## 👉 `null` i `undefined`

Te dwa typy danych są używane do reprezentowania braku wartości. W większości przypadków możemy użyć ich zamiennie, ale istnieje subtelna różnica między nimi.

- `null` to świadoma, jawna pustka - używana, gdy chcemy wyraźnie wskazać brak wartości danej zmiennej.
- `undefined` pojawia się, gdy zmienna została zadeklarowana, ale nie została jej przypisana żadna wartość.

Początkowo może wydawać się to lekko mylące, ale z czasem na pewno zrozumiesz różnicę między tymi dwoma typami danych.

### Przykład:

```javascript
let nieZdefiniowanaZmienna;
let pustaZmienna = null;

console.log(nieZdefiniowanaZmienna); // undefined
console.log(pustaZmienna); // null
```

## 👉 Symbole

Symbol jest nowym typem danych w ES6, używanym do tworzenia unikalnych identyfikatorów. Symbole są szczególnie użyteczne w kontekście właściwości obiektów (będziemy o nich mówić w kolejnych lekcjach), gdzie zapewniają ich unikalność.

### Przykład użycia symboli:

```javascript
let symbol1 = Symbol('id');
let symbol2 = Symbol('id');

console.log(symbol1 === symbol2); // false
```

## 👉 Tablice

Tablice są uporządkowanymi kolekcjami danych, które mogą zawierać wartości różnych typów. W przeciwieństwie do obiektów, tablice nie mają nazwanych właściwości, ale mają numery indeksów, które są automatycznie przypisywane do każdego elementu tablicy.

### Przykład użycia tablic:

```javascript
let zainteresowania = ['JavaScript', 'Programowanie', 'Podróże'];

console.log(zainteresowania[0]); // JavaScript (w programowaniu zazwyczaj liczymy od 0 (zera), więc pierwszym element tablicy posiada indeks równy 0])
console.log(zainteresowania[1]); // Programowanie
console.log(zainteresowania[2]); // Podróże
```

## 👉 Obiekty

Obiekty są złożonymi strukturami danych, które pozwalają na przechowywanie wielu wartości w jednej zmiennej. Obiekty są zbiorem właściwości, które mają nazwę i wartość. Właściwości mogą być metodami (funkcjami) lub zwykłymi wartościami.

```javascript
const obiekt = {
	klucz: 'wartość klucza', // pamiętaj o przecinkach!
	property: 'property value', // klucze obiektów często określa się jako właściwości (properties)
	key: 'value' // spotykamy się również z terminem "key-value pair"
};
```

### Przykład użycia obiektów:

```javascript
let osoba = {
	imie: 'Jan',
	nazwisko: 'Kowalski',
	wiek: 30,
	adres: {
		// obiekty mogą zawierać inne zagnieżdżone obiekty
		ulica: 'Kwiatowa',
		numer: 5,
		kodPocztowy: '00-100',
		miasto: 'Warszawa',
		kraj: 'Polska'
	},
	zainteresowania: ['JavaScript', 'Programowanie', 'Podróże'],
	admin: false,
	samochód: null // brak samochodu
};

console.log(osoba.imie); // Jan
console.log(osoba.adres.miasto); // Warszawa
console.log(osoba.zainteresowania[0]); // JavaScript (pamiętaj, że liczymy od 0 😉)
```

## Jak wybrać odpowiedni typ danych?

- **Strings**: Kiedykolwiek pracujesz z tekstem.
- **Numbers**: Dla liczb zarówno całkowitych, jak i zmiennoprzecinkowych.
- **Boolean**: W warunkach logicznych i decyzjach.
- **`null` i `undefined`**: Aby reprezentować brak wartości lub niezainicjalizowaną zmienną.
- **Symbole**: Dla unikalnych identyfikatorów.
- **Tablice**: Kiedy potrzebujesz kolekcji uporządkowanych danych.
- **Obiekty**: Dla złożonych struktur danych.

Spróbuj samodzielnie stworzyć w edytorze tekstowym kilka zmiennych różnych typów i wyświetlić je w konsoli. Pamiętaj, żeby używać nazw zmiennych, które mają sens i są łatwe do zrozumienia. Na przykład, zamiast `x` lub `y`, użyj `imie` lub `wiek`. To pomoże Ci później w łatwiejszym zrozumieniu kodu.
