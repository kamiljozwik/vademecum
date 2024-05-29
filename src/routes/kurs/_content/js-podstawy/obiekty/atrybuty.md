---
title: Atrybuty właściwości
description: ''
order: 50
free: false
extra_links:
  - title: JavaScript Object Property Descriptors
    href: https://www.youtube.com/watch?v=LD1tQEWsjz4
---

W JavaScript każda właściwość obiektu jest nie tylko wartością – posiada zestaw atrybutów, które określają jej zachowanie. Te atrybuty są czasami niewidoczne w typowym kodowaniu, ale mają znaczący wpływ na sposób, w jaki właściwości działają.

## Zrozumienie deskryptorów właściwości

Deskryptory właściwości to obiekty, które reprezentują atrybuty właściwości. Istnieją dwa typy deskryptorów: deskryptory danych i deskryptory właściwości.

1. **Deskryptory danych** dotyczą właściwości, które przechowują wartość:

   - `value`: wartość właściwości,
   - `writable`: określa, czy właściwość może być zmieniona,
   - `enumerable`: wskazuje, czy właściwość pojawia się w pętlach `for...in`,
   - `configurable`: określa, czy typ deskryptora i atrybuty można zmieniać.

2. **Deskryptory właściwości** dotyczą właściwości zdefiniowanych przez `getter` i `setter` (o tym powiemy sobie więcej w kolejnej lekcji):
   - `get`: funkcja getter, która zwraca wartość,
   - `set`: funkcja setter, która ustawia wartość,
   - `enumerable`: podobnie jak w deskryptorach danych,
   - `configurable`: podobnie jak w deskryptorach danych.

## Jak używać deskryptorów właściwości

Załóżmy, że mamy obiekt `osoba` i chcemy zdefiniować dla niego właściwość `imie`:

```javascript
let osoba = {};

Object.defineProperty(osoba, 'imie', {
	value: 'Jan',
	writable: true,
	enumerable: true,
	configurable: true
});
```

W tym przykładzie, `imie` jest właściwością, którą można zapisywać, wyliczać i konfigurować.

## Modyfikacja atrybutów właściwości

Zmiana atrybutów istniejącej właściwości jest prosta. Użyjmy `Object.defineProperty()`:

```javascript
Object.defineProperty(osoba, 'imie', {
	writable: false // Teraz 'imie' nie może być zmienione
});
```

Po tej zmianie próba zmiany `osoba.imie` zakończy się niepowodzeniem:

```javascript
osoba.imie = 'Anna';
console.log(osoba.imie); // Jan
```

Atrybuty i deskryptory właściwości pozwalają na precyzyjną kontrolę nad tym, jak dane są przechowywane, modyfikowane i wyświetlane. Zrozumienie tych koncepcji pozwala tworzyć bardziej wydajny i bezpieczny kod, dający większe możliwości manipulacji danymi.
