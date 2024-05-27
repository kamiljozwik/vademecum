---
title: Pętla "for..in"
description: ''
order: 70
free: false
extra_links:
  - title: For...in loop
    href: https://www.youtube.com/watch?v=vPB-GnzRiT4
---

Pętla `for...in` w JavaScript jest narzędziem służącym do iteracji przez właściwości (klucze) obiektu. Jest to istotna technika dla programistów, umożliwiająca efektywne przeglądanie i manipulowanie danymi zawartymi w obiektach.

Pętla `for...in` przechodzi przez wszystkie tzw. "wyliczalne" (`iterables`) właściwości obiektu, zwracając klucze tych właściwości. Struktura pętli jest prosta:

```javascript
for (let klucz in obiekt) {
	// kod do wykonania dla każdej właściwości
}
```

Ważne jest, że `for...in` iteruje przez właściwości w całym łańcuchu prototypów obiektu. Oznacza to, że nie tylko bezpośrednie właściwości obiektu są przetwarzane, ale także właściwości dziedziczone. Na razie pewnie nic Ci to nie mówi, bo obiekty jeszcze przed nami, ale zostawiam Ci tę informację na przyszłość - gdy będziesz wracał do tej lekcji już po zapoznaniu się z obiektami.

## Przykład użycia

Załóżmy, że mamy obiekt reprezentujący samochód:

```javascript
let samochod = {
	marka: 'Toyota',
	model: 'Corolla',
	rok: 2021
};
```

Aby przeiterować przez wszystkie właściwości tego obiektu, użylibyśmy pętli `for...in`:

```javascript
for (let klucz in samochod) {
	console.log(klucz + ': ' + samochod[klucz]);
}
```

Wynikiem będzie wyświetlenie każdej pary klucz-wartość:

```
marka: Toyota
model: Corolla
rok: 2021
```

## Uważaj na dziedziczone właściwości

Jednym z potencjalnych problemów przy użyciu `for...in` jest to, że pętla ta może również iterować przez właściwości dziedziczone, co czasami jest niepożądane. Aby tego uniknąć, możemy użyć metody `hasOwnProperty` (ponownie, nie martw się, jeśli nie wiesz, co to jest - wszystko wyjaśni się w odpowiednim czasie):

```javascript
for (let klucz in samochod) {
	if (samochod.hasOwnProperty(klucz)) {
		console.log(klucz + ': ' + samochod[klucz]);
	}
}
```

## Kiedy używać `for...in`?

Pętle `for...in` są szczególnie przydatne, gdy pracujemy z obiektami, których struktura nie jest w pełni znana, lub gdy chcemy przetwarzać wszystkie wyliczalne właściwości obiektu. Są one jednak mniej odpowiednie do iteracji przez tablice, gdzie lepiej sprawdzają się pętle takie jak `for` lub metoda `forEach`.
