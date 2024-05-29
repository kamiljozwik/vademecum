---
title: Rekrurencja
description: ''
order: 90
free: false
extra_links:
  - title: Recursion in 100 Seconds
    href: https://www.youtube.com/watch?v=rf60MejMz3E
  - title: What Is Recursion - In Depth
    href: https://www.youtube.com/watch?v=6oDQaB2one8
  - title: Best Javascript Recursion Explanation on YouTube
    href: https://www.youtube.com/watch?v=LteNqj4DFD8
---

Rekurencja to technika programowania, w której funkcja wywołuje samą siebie.

Kluczowym aspektem rekurencji jest "warunek zakończenia" – specjalny przypadek, w którym funkcja przestaje się wywoływać. Bez tego, możemy wprowadzić program w nieskończoną pętlę.

```javascript
function przykładowaRekurencja(n) {
	if (n <= 0) {
		console.log('Koniec rekurencji');
		return;
	}

	console.log(n);
	przykładowaRekurencja(n - 1); // Wywołanie rekurencyjne. Funkcja wywołuje samą siebie.
}
```

W tym przykładzie, jeśli `n` jest mniejsze lub równe zero, funkcja przestaje się wywoływać.

## Pisanie funkcji rekurencyjnych

Tworzenie funkcji rekurencyjnej wymaga zrozumienia, jak rozbić problem na mniejsze części, które można rozwiązać w ten sam sposób.

### Krok po Kroku

1. **Zdefiniuj warunek zakończenia**: To zapobiega nieskończonym pętlom.
2. **Podziel problem**: Znajdź sposób, aby podzielić jeden problem na kilka mniejszych, które łatwiej rozwiązać.
3. **Wywołaj funkcję rekurencyjnie**: Z nowymi, mniejszymi problemami jako parametrami.

Przykład: Obliczanie silni `n!`:

```javascript
function silnia(n) {
	if (n === 0) {
		return 1;
	}

	return n * silnia(n - 1);
}
```

W tym przykładzie, warunkiem zakończenia jest `n === 0`. Dla każdego innego przypadku, funkcja wywołuje samą siebie z parametrem `n - 1`.

## Unikanie nieskończonych pętli

Nieskończona pętla rekurencyjna może spowodować, że przeglądarka przestanie odpowiadać. Aby tego uniknąć, zawsze upewnij się, że:

- Masz dobrze zdefiniowany warunek zakończenia.
- Parametry przekazywane w rekurencji zmierzają do warunku zakończenia.
