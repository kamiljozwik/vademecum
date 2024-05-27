---
title: Zmienne
description: ''
order: 10
free: false
extra_links:
  - title: Differences Between Var, Let, and Const
    href: https://www.youtube.com/watch?v=9WIJQDvt4Us
  - title: JavaScript Let, Const & Var - A Complete Guide
    href: https://www.youtube.com/watch?v=dzEieWaOJE0
---

W świecie programowania, zmienne są jak etykiety na pudełkach, które przechowują dane. W JavaScript, deklaracją zmiennej przygotowujemy miejsce do przechowywania danych. Oto podstawowe przykłady:

```javascript
let liczba = 5;
const nazwa = 'Frontstack';
var wiek = 30;
```

## `var` - stary, ale jary

Historia `var` sięga początków JavaScript, dlatego w dalszym ciągu możecie trafić na jakiś stary kod, w którym zmienne są deklarowane za pomocą `var`. Kod ten oczywiście będzie działał prawidłowo, ale dzsisiaj unikamy tego sposobu tworzenia zmiennych. Czemu? O tym powiemy sobie w lekcji dotyczącej `hoistingu`.

Słowo kluczowe `var` umożliwia deklarowanie zmiennych z możliwością zmiany ich wartości w przyszłości.

## `let` - nowoczesna alternatywa

`let` pojawia się w wersji ES6 (ECMAScript 2015) i rozwiązuje niektóre problemy związane z `var`.

Zmienne zadeklarowane za pomocą `let` są dostępne tylko w "bloku" kodu (blok kodu to kod, który znajduje się pomiędzy znakami `{` oraz `}` - rozszerzymy ten temat później), w którym zostały utworzone.

### Przykład zasięgu blokowego:

```javascript
if (true) {
	let zmiennaBloku = 'Widoczna w bloku';
	console.log(zmiennaBloku); // "Widoczna w bloku"
}

console.log(zmiennaBloku); // Błąd: "zmiennaBloku" nie jest zdefiniowana.
```

## `const` - stałe, niezmienne wartości

`const` jest kolejnym dodatkiem z ES6 i służy do deklarowania zmiennych, których wartości nie można zmienić po inicjalizacji. Idealne do stałych wartości, jak na przykład adres URL serwera czy konfiguracja aplikacji.

### Przykład użycia `const`:

```javascript
const PI = 3.14;
PI = 3.15; // Błąd: Próba zmiany stałej wartości

console.log(PI); // 3.14
```

## Kiedy używać `var`, `let`, i `const`?

- **`var`**: Unikaj, chyba że masz do czynienia z istniejącym projektem, który szeroko wykorzystuje `var`.
- **`let`**: Gdy potrzebujesz zmiennej, której wartość może ulec zmianie.
- **`const`**: Gdy wartość zmiennej pozostaje stała przez cały czas życia aplikacji.

## Przykład

Załóżmy, że tworzysz aplikację do zarządzania wydarzeniami. Użyj `const` do przechowywania adresu URL API, `let` do przechowywania liczby uczestników (która może się zmieniać), a `var` możesz użyć, jeśli pracujesz nad starszym kodem, gdzie jest on już obecny.
