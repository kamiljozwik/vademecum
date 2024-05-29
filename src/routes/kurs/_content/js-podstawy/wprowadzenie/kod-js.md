---
title: Kod JavaScript
description: ''
order: 40
free: false
---

Program JavaScript składa się z serii instrukcji, które są wykonywane przez przeglądarkę lub serwer. Każdy skrypt JavaScript może być umieszczony bezpośrednio w pliku HTML lub w osobnym pliku z rozszerzeniem `.js`.

## Typowa struktura skryptu JS

- **Deklaracje zmiennych**: Skrypty często rozpoczynają się od deklaracji zmiennych, które są używane do przechowywania danych. Używa się do tego słów kluczowych `let`, `const` lub (rzadziej) `var`.
- **Funkcje**: Kolejnym elementem mogą być funkcje, które grupują bloki kodu wykonujące określone zadania. Deklarowanie funkcji pomaga w organizacji kodu i jego wielokrotnym wykorzystaniu.
- **Wykonanie logiki**: Po deklaracji zmiennych i funkcji następuje właściwa logika programu. Może to być seria instrukcji warunkowych, pętli, wywołań funkcji itp.
- **Interakcje z DOM i Event Handlers**: W kontekście stron internetowych, skrypty często zawierają interakcje z DOM oraz obsługę zdarzeń (np. kliknięcia, wprowadzanie tekstu itd.).
- **Komunikacja z serwerem**: W bardziej zaawansowanych skryptach może pojawić się logika odpowiedzialna za komunikację z serwerem, np. za pomocą `AJAX` lub `Fetch API`.

## Przykład prostego skryptu JavaScript

```javascript
// Deklaracja zmiennej
const powitanie = 'Witaj w świecie JavaScript!';

// Deklaracja (stworzenie) funkcji wyświetlającej powitanie
function wyswietlPowitanie() {
	console.log(powitanie); // logika funkcji
}

/* Wywołanie (uruchomienie) funkcji.
To dopiero tutaj zostanie uruchomiona logika funkcji. */
wyswietlPowitanie();
```

## Komentarze

Komentarze w kodzie JavaScript (zapisywane jako `// komentarz` dla komentarzy jednoliniowych lub `/* komentarz */` dla wieloliniowych) są ważne dla zrozumienia i dokumentowania kodu. Pomagają innym programistom (oraz Tobie w przyszłości) zrozumieć, co dany fragment kodu robi. Przykładowe komentarze widzieliśmy już w poprzednim przykładzie. Komentarze są również przydatne do tymczasowego wyłączania fragmentów kodu, np. podczas testowania.

```javascript
// To jest komentarz jednoliniowy

/*
To jest komentarz
wieloliniowy
*/
```

## Dobrze zorganizowany kod

Dobra organizacja kodu ułatwia jego czytanie i utrzymanie. Należy stosować konsekwentne wcięcia, jasne nazewnictwo zmiennych i funkcji, oraz rozdzielać logikę na mniejsze, łatwe do zarządzania bloki.

Ale spokojnie - tego wszystkiego nauczymy się w kolejnych lekcjach 😉
