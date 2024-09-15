---
title: Funkcje anonimowe
description: ""
order: 100
free: false
extra_links:
  - title: JavaScript Essentials - Anonymous Functions
    href: https://www.youtube.com/watch?v=Y8dztLmscwc
---

Funkcje anonimowe w JavaScript pozwalają programistom na większą elastyczność i zwięzłość kodu. Są to funkcje, które nie mają przypisanego nazwy identyfikacyjnej.

## Wykorzystanie w Callbackach

Callbacki są szeroko stosowane w programowaniu asynchronicznym, szczególnie w operacjach, które wymagają dłuższego oczekiwania na zakończenie, jak zapytania do serwera czy operacje na plikach. Funkcje anonimowe świetnie nadają się do tego celu, ponieważ pozwalają na bezpośrednie umieszczenie logiki funkcji w miejscu jej wywołania, co ułatwia zrozumienie przepływu programu.

Do callbacków wrócimy jeszcze w rozdziale dotyczącym programowania asynchronicznego.

Przykład funkcji anonimowej jako callbacka. W poniższym przykładzie funkcja zostanie wywołana po upływie 2 sekund (2000 milisekund). Funkcja `setTimeout` jest wbudowaną funkcją JavaScript, która pozwala na wykonanie kodu po upływie określonego czasu. Pierwszym argumentem jest funkcja, która ma zostać wykonana, a drugim czas w milisekundach.

```javascript
setTimeout(function () {
  console.log("To jest przykład funkcji anonimowej jako callback.");
}, 2000);
```

## Zastosowanie w obsłudze zdarzeń

Funkcje anonimowe są często używane przy dodawaniu obsługi zdarzeń w aplikacjach webowych. Umożliwiają one szybkie i proste przypisanie funkcji do zdarzeń bez konieczności definiowania ich w oddzielnym miejscu. Obsługę zdarzeń w przeglądarce omawiamy dokładniej w kursie poświęconym JavaScript w przeglądarce.

W poniższym przykładzie funkcja zostanie wywołana po kliknięciu na przycisk.

```javascript
document.getElementById("przycisk").addEventListener("click", function () {
  alert("Przycisk został kliknięty.");
});
```

### Operacje na tablicach

W JavaScript często wykonujemy operacje na tablicach, takie jak `map`, `filter`, `reduce`. Funkcje anonimowe sprawiają, że te operacje są bardziej zwięzłe i czytelne. Tablice jeszcze przed nami, ale dobrze już teraz wiedzieć czym są funkcje anonimowe.

```javascript
let liczby = [1, 2, 3, 4, 5];

let kwadraty = liczby.map(function (liczba) {
  return liczba * liczba;
});

console.log(kwadraty); // Wynik: [1, 4, 9, 16, 25]
```

Funkcje anonimowe w JavaScript są wyjątkowo przydatne w przypadkach, gdy potrzebujemy szybko zdefiniować logikę operacji bez konieczności jej ponownego używania w innym miejscu kodu. Szczególnie przydatne są w obsłudze zdarzeń i przy tworzeniu callbacków, gdzie ich jednorazowy charakter idealnie wpisuje się w potrzeby naszej aplikacji.
