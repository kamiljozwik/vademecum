---
title: Wprowadzenie
description: ''
order: 10
free: false
extra_links:
  - title: What Are Objects in JavaScript
    href: https://www.youtube.com/watch?v=4uVwGw317QM
  - title: Learn JavaScript OBJECTS in 7 minutes!
    href: https://www.youtube.com/watch?v=lo7o91qLzxc
---

Obiekty w JavaScript to kluczowy element tego języka. Są one zasadniczo kolekcjami par klucz-wartość, gdzie kluczem jest łańcuch znaków, a wartością może być dowolny typ danych, włączając w to inne obiekty. Obiekty pozwalają na grupowanie danych i funkcjonalności, co jest dość przydatne w organizacji kodu.

Kiedy myślimy o obiektach, warto wyobrazić sobie je jako "worki" 👜 do przechowywania zmiennych (właściwości) i funkcji (metod), które są ze sobą logicznie powiązane. Dzięki temu łatwiej jest zarządzać i manipulować złożonymi danymi.

## Tworzenie obiektów

W JavaScript istnieje kilka sposobów na stworzenie obiektu. Najprostszym jest użycie tzw. `object literals`:

```javascript
let samochod = {
	marka: 'Toyota',
	model: 'Corolla',
	rok: 2021,
	wyswietlInfo: function () {
		return this.marka + ' ' + this.model + ' (' + this.rok + ')';
	}
};
```

W powyższym przykładzie stworzyliśmy obiekt `samochod` z trzema właściwościami (`marka`, `model`, `rok`) i jedną metodą (`wyswietlInfo`).

Innym popularnym sposobem jest użycie konstruktora `Object`:

```javascript
let samochod = new Object(); // tworzymy pusty obiekt

samochod.marka = 'Toyota'; // dodajemy właściwości
samochod.model = 'Corolla';
samochod.rok = 2021;
```

Choć ten sposób jest mniej popularny, warto znać obie metody.

## Dostęp i modyfikacja właściwości obiektu

Aby uzyskać dostęp do właściwości obiektu, możemy użyć notacji kropki lub nawiasów. Na przykład, aby uzyskać model samochodu, użylibyśmy `samochod.model` lub `samochod['model']`. Oba sposoby są równoważne, ale notacja nawiasów jest szczególnie przydatna, gdy nazwa właściwości jest przechowywana w zmiennej lub jest niestandardowym łańcuchem znaków.

Modyfikacja właściwości obiektu jest równie prosta. Możemy po prostu przypisać nową wartość do istniejącej właściwości:

```javascript
samochod.rok = 2022;
```

Lub dodać nowe właściwości w podobny sposób:

```javascript
samochod.kolor = 'czerwony';
```

Warto pamiętać, że obiekty w JavaScript są przekazywane przez odniesienie, co oznacza, że jeśli przypiszemy nasz obiekt `samochod` do nowej zmiennej, obie zmienne będą wskazywać na ten sam obiekt. Zmiany dokonane przez jedną zmienną będą widoczne również dla drugiej.
