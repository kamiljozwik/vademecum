---
title: Pętla "for..of"
description: ''
order: 80
free: false
extra_links:
  - title: For in and for of loop in javascript
    href: https://www.youtube.com/watch?v=NlagmmCwOU4
---

Pętla `for...of` w JavaScript to potężne narzędzie, które pozwala nam na przejście przez każdy element w obiektach iterowalnych, takich jak tablice (`arrays`) czy ciągi znaków (`strings`). To eleganckie rozwiązanie zastępuje klasyczne pętle, takie jak `for` czy metodę `forEach`, oferując bardziej intuicyjną i czytelną składnię.

## Jak działa `for...of`?

```javascript
for (const element of iterable) {
	// operacje na elemencie
}
```

W powyższym kodzie, `iterable` to obiekt iterowalny, a `element` to zmienna, która przechwytuje kolejne elementy z `iterable` w każdej iteracji pętli.

## Przechodzenie przez tablice

Rozważmy tablicę `owoce = ['jabłko', 'banan', 'pomarańcza']`. Używając pętli `for...of`, możemy łatwo przejść przez każdy owoc w tablicy:

```javascript
const owoce = ['jabłko', 'banan', 'pomarańcza'];

for (const owoc of owoce) {
	console.log(owoc);
}
```

## Iteracja po ciągach znaków

Podobnie, możemy użyć pętli `for...of` do iteracji po ciągach znaków. Na przykład:

```javascript
const slowo = 'Hello';

for (const litera of slowo) {
	console.log(litera); // H, e, l, l, o
}
```

## Zalety używania `for...of`

1. **Czytelność**: Składnia jest bardziej zwięzła i czytelna niż w przypadku tradycyjnych pętli.
2. **Uniwersalność**: Działa z różnymi rodzajami obiektów iterowalnych.
3. **Bezpieczeństwo**: Zmniejsza ryzyko błędów, takich jak przeoczenie warunku kończącego.

## Kiedy używać `for...of`

`for...of` jest doskonałym wyborem, gdy potrzebujesz:

- Przejść przez elementy tablicy.
- Iterować przez ciągi znaków.
- Przetworzyć elementy innych obiektów iterowalnych, jak `NodeList` w przeglądarkach.

## Przykłady

Wyobraź sobie, że mamy tablicę użytkowników i chcemy wyświetlić ich imiona:

```javascript
const uzytkownicy = [{ imie: 'Anna' }, { imie: 'Krzysztof' }, { imie: 'Ola' }];

for (const uzytkownik of uzytkownicy) {
	console.log(uzytkownik.imie);
}
```

W powyższym przykładzie, `uzytkownik` jest zmienną, która przechwytuje każdy element z tablicy `uzytkownicy` w każdej iteracji pętli. Następnie możemy uzyskać dostęp do właściwości `imie` każdego użytkownika i wyświetlić je w konsoli.
