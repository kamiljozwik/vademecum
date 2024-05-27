---
title: Struktury sterujące
description: ''
order: 10
free: false
extra_links:
  - title: What is JS Control flow?
    href: https://www.youtube.com/watch?v=-VxB_96Q3Ps
---

Struktury sterujące w języku programowania, takim jak JavaScript, są kluczowe dla decydowania, jak program powinien reagować na różne warunki i dane. Używamy ich do kontrolowania przepływu wykonania programu. Przykładem może być instrukcja `if`, która pozwala na wykonanie kodu tylko wtedy, gdy spełniony jest określony warunek.

## Rodzaje struktur sterujących

- **Warunkowe (`if`, `else`, `switch`)**

  - `if` pozwala na wykonanie kodu, jeśli spełniony jest warunek.
  - `else` służy do wykonania kodu, gdy warunek `if` nie jest spełniony.
  - `switch` pozwala na wybór wykonania kodu na podstawie wartości zmiennej.

- **Pętle (`for`, `while`, `do-while`)**
  - `for` służy do powtarzania bloku kodu określoną liczbę razy.
  - `while` wykonuje blok kodu, dopóki spełniony jest określony warunek.
  - `do-while` jest podobny do `while`, ale zapewnia, że blok kodu zostanie wykonany co najmniej raz.

## Zastosowanie struktur sterujących

Wyobraźmy sobie, że piszemy skrypt do gry, w której gracz musi odgadnąć liczbę. Używamy struktury `if` do sprawdzenia, czy gracz odgadł liczbę. Jeśli tak, gratulujemy mu; jeśli nie, prosimy o kolejną próbę.

```javascript
let zgadywanaLiczba = 7;
let odpowiedzGracza = 5;

if (odpowiedzGracza === zgadywanaLiczba) {
	console.log('Gratulacje! Odpowiedź jest poprawna.');
} else {
	console.log('Niestety, to nie ta liczba. Spróbuj ponownie.');
}
```

Struktury sterujące są podstawą logiki w programowaniu. Pozwalają na tworzenie programów, które dynamicznie reagują na dane wejściowe użytkownika jak i również inne zmienne. Bez nich nasze programy byłyby tylko prostymi listami instrukcji, które wykonują się od początku do końca bez możliwości adaptacji czy interakcji.

## Prosty przykład

Załóżmy, że pracujesz nad aplikacją pogodową. Chcesz wyświetlić różne obrazy w zależności od prognozy. Możesz użyć instrukcji `switch` (na temat wszystkich użytych w tej lekcji poleceń mamy przygotowane oddzielne lekcje, więc na razie nie skupiaj się na kodzie, tylko na zrozumieniu czym są struktury sterujące) do zmiany obrazu na podstawie prognozowanej pogody.

```javascript
let pogoda = 'słonecznie';

switch (pogoda) {
	case 'słonecznie':
		console.log('Wyświetlam obraz słonecznego dnia.');
		break;
	case 'deszczowo':
		console.log('Wyświetlam obraz deszczowego dnia.');
		break;
	// itd.
	default:
		console.log('Standardowy obraz pogodowy.');
}
```

To tyle słowem wstępu. W kolejnych lekcjach dowieszpoznasz szczegóły na temat poszczególnych struktur sterujących.
