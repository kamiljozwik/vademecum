---
title: Best practices
description: ''
order: 120
free: false
extra_links:
  - title: Every JavaScript Developer Has Made This Mistake With Functions
    href: https://www.youtube.com/watch?v=7UMuJMiNjSk
  - title: JavaScript Function - What's your Function?
    href: https://www.youtube.com/watch?v=gigtS_5KOqo
  - title: Modern JavaScript Tutorial - Functions
    href: https://www.youtube.com/watch?v=xUI5Tsl2JpY
---

Czysty kod funkcji w JavaScript odnosi się do pisania funkcji w sposób, który jest zarówno zrozumiały, jak i łatwy w utrzymaniu. Nie zawsze "smart code" będzie tym samym co "clean code". Czysty kod funkcji jest zwykle prosty, czytelny i zorientowany na jedno zadanie.

Kluczowe jest tutaj wykorzystanie nazw funkcji, które są opisowe i adekwatne do wykonanej przez nie operacji. Na przykład, zamiast `function doThing()`, lepiej użyć `function calculateTax()`.

Używanie domyślnych wartości parametrów sprawia, że funkcje są bardziej elastyczne. Na przykład:

```javascript
function greet(name = 'Guest') {
	return `Hello, ${name}!`;
}
```

**Czystość funkcji:**

Idealne funkcje to te, które nie mają efektów ubocznych (zmian w stanie zewnętrznym) i zawsze zwracają ten sam wynik dla tych samych danych wejściowych. Takie funkcje nazywane właśnie "czystymi funkcjami". Na przykład, funkcja dodająca dwie liczby jest czystą funkcją.

**Unikanie globalnych zmiennych:**

Używanie globalnych zmiennych w funkcjach jest praktyką, której należy unikać, ponieważ może to prowadzić do nieprzewidywalnych wyników i konfliktów w nazewnictwie.

**Zbyt wiele odpowiedzialności:**

Funkcje powinny być zorientowane na jedno zadanie. Jeśli funkcja próbuje zrobić zbyt wiele, staje się trudna do zrozumienia i testowania.

**Długość funkcji:**

Zbyt długie funkcje są trudne do śledzenia. Dobrą praktyką jest utrzymanie funkcji na tyle krótkich, na ile to możliwe. Funkcje, które zajmują więcej niż ekran, zwykle wymagają refaktoryzacji.

**Mutacja argumentów:**

Zmienianie wartości argumentów przekazanych do funkcji może prowadzić do nieoczekiwanych efektów ubocznych. Zamiast tego, lepiej zwracać nowe wartości.

**Zbyt wiele argumentów:** Funkcje z dużą liczbą argumentów są trudne do zarządzania. Gdy funkcja wymaga wielu danych wejściowych, warto rozważyć użycie obiektu do przekazywania parametrów.

## Przykład

Załóżmy, że musimy napisać funkcję do obliczania podatku. Zamiast tworzyć skomplikowaną funkcję z wieloma parametrami, możemy ustrukturyzować ją w sposób, który jest zarówno czytelny, jak i elastyczny:

```javascript
function calculateTax({ amount, taxRate = 0.23, discount = 0 }) {
	// Sprawdźmy, czy znamy kwotę i czy nie jest ona ujemna.
	if (!amount || amount <= 0) {
		throw new Error('Amount must be greater than zero'); // w tens sposób możemy w kontrolowany sposób zwrócić błąd w funkcji
	}

	return amount + amount * taxRate - discount;
}

const taxDetails = {
	amount: 100,
	taxRate: 0.085,
	discount: 5
};

console.log(calculateTax(taxDetails));
```

Taka struktura i czytelne nazwy pozwalają na łatwe dostosowanie i rozszerzenie funkcji w przyszłości, a także ułatwia jej zrozumienie.
