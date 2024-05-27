---
title: Wprowadzenie
description: ''
order: 10
free: false
extra_links:
  - title: Learn JSON in 10 Minutes
    href: https://www.youtube.com/watch?v=iiADhChRriM
---

JSON, czyli `JavaScript Object Notation`, to lekki format wymiany danych. Jest łatwy do czytania i pisania dla ludzi oraz prosty do parsowania i generowania dla maszyn. JSON opiera się na dwóch strukturach:

1. **Zbiór par klucz-wartość**: W wielu językach programowania realizowany jako obiekt, rekord, struktura, słownik, tabela z kluczami lub tablica asocjacyjna.
2. **Uporządkowana lista wartości**: W większości języków realizowana jako tablica, wektor, lista lub sekwencja.

Każda wartość w JSON może być jednego z typów: `String`, `Number`, `Boolean`, `Object` (obiekt JSON), `Array` (tablica) lub `null`.

## Podstawowa struktura JSON

Podstawową strukturą JSON jest zbiór par klucz-wartość, gdzie każdy klucz jest unikalnym stringiem, a wartość może być dowolnego typu danych JSON. Oto przykład:

```json
{
	"imie": "Anna",
	"wiek": 25,
	"jestStudentem": true,
	"umiejetnosci": ["JavaScript", "React", "Node.js"],
	"adres": {
		"ulica": "Kwiatowa 3",
		"miasto": "Warszawa",
		"kodPocztowy": "00-001"
	}
}
```

W tym przykładzie mamy obiekt JSON z pięcioma parami klucz-wartość. Wartości zawierają różne typy, w tym stringi, liczby, wartości logiczne, tablice i inny obiekt JSON.

## Różnice i podobieństwa między JSON a obiektami JavaScript

Chociaż JSON wywodzi się z JavaScriptu, istnieją między nimi pewne różnice:

1. **Klucze**: W JSON każdy klucz musi być otoczony podwójnymi cudzysłowami. W JavaScript obiekty pozwalają na używanie kluczy bez cudzysłowów, jeśli są one ważnymi identyfikatorami.
2. **Dane**: JSON nie obsługuje typów danych specyficznych dla JavaScript, takich jak `Date`, `RegExp`, `undefined` czy funkcje. JSON obsługuje tylko tekst, liczby, obiekty, tablice, wartości logiczne i `null`.
3. **Literały**: JSON nie obsługuje literałów JavaScript, takich jak `undefined`, `NaN` czy `Infinity`. Wszystkie liczby w JSON muszą być rzeczywistymi liczbami.
4. **Zagnieżdżanie**: JSON i JavaScript pozwalają na zagnieżdżanie obiektów i tablic, ale JSON jest bardziej restrykcyjny w kwestii typów danych.

Podobieństwa między nimi obejmują ich składnie oraz ich zdolność do przechowywania i reprezentowania złożonych struktur danych.
JSON to uniwersalny format danych, który choć wywodzi się z JavaScriptu, znajduje zastosowanie w wielu innych językach programowania i technologiach, dzięki swojej prostocie i elastyczności.
