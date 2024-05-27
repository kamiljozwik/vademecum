---
title: Pętle nieskończone
description: ''
order: 120
free: false
extra_links:
  - title: Infinite Loops in JavaScript
    href: https://www.youtube.com/watch?v=6VYTDLKB2Kg
---

W programowaniu, nieskończona pętla to sytuacja, w której pętla wykonuje się nieustannie, ponieważ warunek zakończenia nigdy nie zostaje spełniony. Przykładem może być pętla `while`, która zawsze sprawdza, czy warunek jest prawdziwy. Jeśli ten warunek zawsze zwraca wartość `true`, to pętla nigdy się nie zakończy.

```javascript
while (true) {
	// Kod tutaj będzie wykonywany w nieskończoność.
}
```

## Identyfikacja nieskończonych pętli

Zidentyfikowanie nieskończonych pętli może być trudne, szczególnie w złożonych systemach. Jednak są pewne znaki, na które warto zwrócić uwagę:

- **Pętla nie ma warunku wyjścia:** Najprostszym przypadkiem jest pętla bez jasno zdefiniowanego warunku zakończenia.
- **Warunek zakończenia nigdy nie jest osiągany:** Jeśli logika w pętli nie zmienia wartości potrzebnych do zakończenia pętli, będzie ona wykonywana w nieskończoność.
- **Błędna aktualizacja warunku:** Gdy aktualizujemy warunek w niewłaściwy sposób, pętla może nigdy się nie zakończyć.

## Jak unikać nieskończonych pętli

- **Używanie flagi warunkowej**

Flaga warunkowa to zmienna, która kontroluje wykonanie pętli. Może być to użyteczne, szczególnie jeśli warunek zakończenia pętli jest skomplikowany.

```javascript
let continueLoop = true;

while (continueLoop) {
    // Jakaś logika
    if (/* warunek zakończenia */) {
        continueLoop = false;
    }
}
```

- **Zastosowanie licznika iteracji**

Licznik iteracji to zmienna, która śledzi, ile razy pętla się wykonała. Jest to prosty, ale skuteczny sposób na uniknięcie nieskończonych pętli.

```javascript
let counter = 0;
const MAX_ITERATIONS = 100;

while (counter < MAX_ITERATIONS) {
	// Logika pętli
	counter++;
}
```

- **Używanie instrukcji `break`**

Instrukcja `break` pozwala natychmiast przerwać wykonanie pętli, niezależnie od jej warunku zakończenia.

```javascript
while (true) {
    // Jakaś logika
    if (/* warunek zakończenia */) {
        break;
    }
}
```

## Przykłady

### Przykład 1: Pętla przetwarzająca dane

Załóżmy, że mamy pętlę przetwarzającą dane z tablicy. Jeśli zapomnimy zaktualizować indeks tablicy, pętla nigdy się nie zakończy.

```javascript
let data = [
	/* jakaś tablica danych */
];

let index = 0;

while (index < data.length) {
	// Przetwarzanie danych
	// Brak inkrementacji index może spowodować nieskończoną pętlę
	index++;
}
```

### Przykład 2: Pętla oczekująca na zdarzenie

Możemy mieć pętlę, która oczekuje na wystąpienie określonego zdarzenia, np. naciśnięcie klawisza. Użycie flagi warunkowej lub `break` jest w tym przypadku kluczowe.

```javascript
let keyPressed = false;

while (!keyPressed) {
    // Oczekiwanie na naciśnięcie klawisza
    if (/* klawisz został naciśnięty */) {
        keyPressed = true;
    }
}
```

Unikanie nieskończonych pętli jest kluczowe dla stabilności i wydajności aplikacji. Kluczowe jest uważne projektowanie logiki pętli, w tym zdefiniowanie jasnych warunków zakończenia, stosowanie liczników iteracji oraz umiejętne używanie instrukcji `break`. Pamiętaj, że każda pętla musi mieć możliwość zakończenia, inaczej może spowodować zawieszenie lub awarię programu. Ewentualnie nieziemski rachunek od naszego dostawcy chmury 😉
