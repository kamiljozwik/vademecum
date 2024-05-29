---
title: Wprowadzenie
description: ''
order: 10
free: false
extra_links:
  - title: JavaScript Arrays Crash Course
    href: https://www.youtube.com/watch?v=7W4pQQ20nJg
---

Tablice w JavaScript są jednymi z najbardziej podstawowych i użytecznych typów danych. Pozwalają one na przechowywanie wielu wartości w jednej zmiennej. Aby stworzyć tablicę, używamy nawiasów kwadratowych (`[]`), a elementy wewnątrz rozdzielamy przecinkami. Na przykład:

```javascript
let mojeUlubioneOwoce = ['jabłko', 'banan', 'mango'];
```

Dostęp do elementów tablicy uzyskujemy poprzez indeksowanie, gdzie pierwszy element ma indeks `0`. Przykładowo, aby uzyskać dostęp do pierwszego owocu w naszej tablicy, użylibyśmy:

```javascript
console.log(mojeUlubioneOwoce[0]); // 'jabłko'
```

## Długość tablicy i iteracja

Każda tablica w JavaScript posiada właściwość `length`, która zwraca liczbę jej elementów. Jest to niezwykle użyteczne, szczególnie przy iteracji po tablicy:

```javascript
console.log(mojeUlubioneOwoce.length); // '3', czyli liczba elementów w tablicy
```

Iteracja po tablicy to podstawowa operacja, która pozwala na wykonanie danej akcji dla każdego elementu tablicy. Jedną z najczęstszych metod iteracji jest użycie pętli `for`. Na przykład:

```javascript
for (let i = 0; i < mojeUlubioneOwoce.length; i++) {
	console.log(mojeUlubioneOwoce[i]);
}
```

W powyższym przykładzie pętla `for` iteruje od pierwszego elementu (indeks `0`) do ostatniego, wyświetlając każdy owoc na konsoli.

W praktycznym zastosowaniu, tablice służą do przechowywania list danych, takich jak lista użytkowników, produkty w sklepie internetowym, czy też wyniki zapytań do bazy danych. Są one nieodzownym elementem każdej aplikacji JavaScript.

Tablice są niezwykle elastycznym narzędziem w języku JavaScript. Umiejętność tworzenia, dostępu do elementów, iteracji oraz wykorzystywania ich długości to fundamenty, które każdy deweloper JavaScript powinien znać. W kolejnych lekcjach będziemy omawiać bardziej zaawansowane metody pracy z tablicami, takie jak metody `map`, `filter` i `reduce`.
