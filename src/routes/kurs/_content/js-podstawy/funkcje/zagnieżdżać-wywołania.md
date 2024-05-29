---
title: Zagnieżdżenia
description: ''
order: 50
free: false
---

W programowaniu, wartość zwracana przez funkcję jest podstawą jej użyteczności. W JavaScript, każda funkcja po wykonaniu może (ale nie musi) zwrócić wartość. Używamy słowa kluczowego `return` do określenia, co funkcja powinna "oddać" do miejsca, z którego została wywołana.

## Przykład z użyciem `return`

Rozważmy prostą funkcję, która dodaje dwie liczby:

```javascript
function dodaj(a, b) {
	return a + b;
}
```

Gdy wywołamy `dodaj(5, 3)`, funkcja zwróci wartość `8`. Jest to wartość, którą możemy przypisać do zmiennej, wykorzystać w innej funkcji, lub po prostu wyświetlić.

## Co się dzieje bez `return`?

Jeśli funkcja nie ma zdefiniowanego `return`, domyślnie zwraca `undefined`. Warto o tym pamiętać.

## Zagnieżdżone wywołania

Mówiąc o zagnieżdżonych wywołaniach, mamy na myśli sytuację, w której wynik jednej funkcji staje się argumentem dla innej. To tworzy łańcuch wywołań, który może być tak długi, jak tylko wymaga tego nasza logika.

### Przykład

Wyobraźmy sobie, że mamy dwie funkcje: `dodaj` i `pomnoz`. Możemy zagnieździć ich wywołania w następujący sposób:

```javascript
function dodaj(a, b) {
	return a + b;
}

function pomnoz(x, y) {
	return x * y;
}

function wynik() {
	return pomnoz(dodaj(1, 2), dodaj(3, 4));
}

console.log(wynik()); // Wynik: 21 (tutaj też również widzimy zagnieżdżenie)
```

W tym przykładzie, `dodaj(1, 2)` zwraca `3`, a `dodaj(3, 4)` zwraca `7`. Następnie, `pomnoz(3, 7)` zwraca `21`, co jest ostatecznym wynikiem wywołania funkcji `wynik`.

Zagnieżdżanie funkcji pozwala na tworzenie bardziej złożonej logiki bez konieczności pisania dodatkowego kodu. Umożliwia to również ponowne wykorzystanie kodu i utrzymanie czystości oraz przejrzystości naszych programów.
