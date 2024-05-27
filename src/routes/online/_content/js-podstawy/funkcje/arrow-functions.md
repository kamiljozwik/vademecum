---
title: Arrow functions
description: ''
order: 40
free: false
extra_links:
  - title: JavaScript ES6 Arrow Functions Tutorial
    href: https://www.youtube.com/watch?v=h33Srr5J9nY
  - title: Learn JavaScript ARROW FUNCTIONS in 8 minutes!
    href: https://www.youtube.com/watch?v=fRRRkognpOs
  - title: Arrow Functions JavaScript Tutorial - What NOT to do!!!
    href: https://www.youtube.com/watch?v=ajTvmGxWQF8
  - title: Why I Don’t Use Arrow Functions With const/let
    href: https://www.youtube.com/watch?v=5iGGvJn8K1U
---

Arrow function, znane również jako funkcje strzałkowe, to nowa składnia wprowadzona w ES6, która pozwala na bardziej zwięzłe tworzenie funkcji. Są one szczególnie przydatne w przypadkach, gdy potrzebujemy anonimowych funkcji, na przykład jako argumentów innych funkcji.

Podstawowa składnia funkcji strzałkowej wygląda następująco:

```javascript
const myFunction = (arg1, arg2) => {
	return arg1 + arg2;
};
```

W przypadku pojedynczego argumentu nawiasy są opcjonalne:

```javascript
const square = x => {
	return x * x;
};
```

A jeśli ciało funkcji ma tylko jedną linijkę, która zwraca wartość, możemy (ale nie musimy) pominąć nawiasy klamrowe i słowo `return`:

```javascript
const add = (a, b) => a + b;
```

Maksymalne uproszczenie:

```javascript
const square = x => x * x;
```

## Porównanie z klasycznymi funkcjami

- Kontekst `this`

Główną różnicą między arrow function a tradycyjnymi funkcjami jest sposób, w jaki obchodzą się z kontekstem `this` (szczegóły na temat `this` jeszcze przed nami). W tradycyjnych funkcjach `this` jest związane z kontekstem wywołania funkcji.

W funkcjach strzałkowych `this` jest związane leksykalnie, co oznacza, że odziedziczone jest z otaczającego zakresu. Spokojnie, wrócimy do tego 😉

- Metody `call`, `apply`, `bind`

W przypadku funkcji strzałkowych metody `call`, `apply` i `bind` nie zmieniają kontekstu `this`, co oznacza, że ich zachowanie jest różne w porównaniu z tradycyjnymi funkcjami.

- Brak `arguments`

Kolejną różnicą jest to, że arrow function nie mają własnego obiektu `arguments`. Jeśli potrzebujemy dostępu do wszystkich argumentów funkcji, musimy użyć operatora rest (`...`).

- Konstruktor

Funkcje strzałkowe nie mogą być używane jako konstruktory. Jeśli spróbujemy to zrobić, JavaScript zgłosi błąd.

## Kiedy Używać Arrow Function

Arrow function najlepiej sprawdzają się w sytuacjach, gdzie:

- Potrzebujemy anonimowej funkcji.
- Chcemy uniknąć problemów związanych z kontekstem `this`.
- Szukamy bardziej zwięzłego sposobu na zapisanie funkcji.

Na początku Twojej przygody z programowaniem w JS, możesz nie zauważyć różnicy między tradycyjnymi funkcjami a funkcjami strzałkowymi. Na ten moment, możesz śmiało używać i jednej i drugiej konstrukcji w zależności od Twoich preferencji. Sporo deweloperów preferuje funkcje strzałkowe, ponieważ są po prostu krótsze i szybsze do napisania.

W dalszej części tego kursu dojdziemy do sytuacji, gdy użycie jednej z nich będzie lepszym rozwiązaniem. Wtedy zrozumiesz ten temat dużo lepiej 🙂
