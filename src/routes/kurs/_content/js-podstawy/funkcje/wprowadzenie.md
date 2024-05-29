---
title: Wprowadzenie
description: ''
order: 10
free: false
extra_links:
  - title: How To Create/Use Functions
    href: https://www.youtube.com/watch?v=FOD408a0EzU
  - title: JavaScript Functions
    href: https://www.youtube.com/watch?v=N8ap4k_1QEQ
---

Funkcje w JavaScript są to bloki kodu, które można wielokrotnie wywoływać, co znacznie upraszcza pisanie kodu. W praktyce, funkcje pozwalają na uporządkowanie kodu, jego ponowne wykorzystanie oraz izolowanie poszczególnych zadań, co z kolei prowadzi do lepszej czytelności i łatwiejszego zarządzania kodem.

## Tworzenie prostej funkcji

Aby zrozumieć funkcje, zacznijmy od prostego przykładu. Funkcja w JavaScript definiowana jest za pomocą słowa kluczowego `function`, po którym następuje nazwa funkcji oraz nawiasy, w których możemy opcjonalnie umieścić parametry.

```javascript
// Definicja funkcji. Do czasu wywołania, kod wewnątrz tej funkcji nie zostanie wykonany.
function powiedzCzesc() {
	console.log('Cześć!');
}

powiedzCzesc(); // Wywołanie/uruchomienie funkcji. Tutaj zostanie już wyświetlone "Cześć!".
```

Ta funkcja, nazwana `powiedzCzesc`, po wywołaniu zaloguje w konsoli `Cześć!`.

## Parametry i argumenty

Funkcje mogą przyjmować parametry, które są zmiennymi dostępnymi tylko wewnątrz funkcji. Na przykład:

```javascript
function powiedzCzesc(imie) {
	console.log('Cześć, ' + imie + '!');
}

powiedzCzesc('Anna'); // Wyświetli "Cześć, Anna!".
```

## Zwracanie wartości

Funkcje mogą również zwracać wartości za pomocą słowa kluczowego `return`. Wartości tych możemy później użyć w dalszej/innej części aplikacji.

```javascript
function dodaj(a, b) {
	return a + b;
}

function odejmij(a, b) {
	return a - b;
}

let wynik1 = dodaj(5, 7); // zmienna wynik1 będzie miała wartość 12
let wynik2 = dodaj(2, 2); // zmienna wynik2 będzie miała wartość 4

// Wyniki dodawania możemy wykorzystać w kolejnym wywołaniu funkcji i podać je jako argumenty.
let wynik3 = odejmij(wynik1, wynik2); // zmienna wynik3 będzie miała wartość 8.
```

## Zakres i domknięcia

Warto też wspomnieć o zakresie (`scope`) w kontekście funkcji. Zmienne zadeklarowane wewnątrz funkcji są lokalne dla tej funkcji i nie są dostępne poza nią. JavaScript umożliwia również tworzenie tzw. domknięć (`closures`), które pozwalają na dostęp do zmiennych zewnętrznych, ale na ten temat poświęcimy całą oddzielną lekcję.

Funkcje w JavaScript to kluczowy element, który umożliwia modularność, ponowne wykorzystanie kodu (jedną funkcję możemy wywoływać wielokrotnie), oraz lepszą organizację. Zrozumienie ich działania i umiejętne wykorzystanie jest fundamentem dla każdego programisty JavaScript, więc poświęć kolejnym lekcjom wystarczająco dużo uwagi.
