---
title: try..catch
description: ''
order: 20
free: false
extra_links:
  - title: Javascript Error Handling
    href: https://www.youtube.com/watch?v=blBoIyNhGvY
  - title: Javascript Error Handling 2
    href: https://www.youtube.com/watch?v=CQzwi9_7wHI
---

W JavaScript, mechanizm `try...catch` stanowi podstawowe narzędzie do obsługi błędów. Struktura ta pozwala na eleganckie zarządzanie wyjątkami, które mogą pojawić się podczas wykonywania kodu.

Kod, który może generować błąd, umieszczamy w bloku `try`. JavaScript najpierw próbuje wykonać kod wewnątrz tego bloku. Jeśli wszystko przebiegnie pomyślnie, blok `catch` jest pomijany. Jednakże, gdy wystąpi błąd, natychmiast przechodzimy do bloku `catch`.

```javascript
try {
	// Kod, który może generować wyjątek / błąd
} catch (error) {
	// Kod, który zostanie wykonany w przypadku wystąpienia błędu
}
```

Wyobraźmy sobie, że mamy funkcję, która łączy się z zewnętrznym API. Ta operacja może się nie udać z wielu powodów (np. brak dostępu do internetu, błędny adres URL). Użycie `try...catch` pozwala na eleganckie obsłużenie takich sytuacji.

## Łapanie Różnych Typów Błędów

W JavaScript istnieje wiele różnych typów błędów, jak `ReferenceError`, `TypeError`, `SyntaxError` itp. Dzięki `try...catch`, możemy obsłużyć każdy z nich w sposób specyficzny.

Aby obsłużyć różne typy błędów, możemy użyć instrukcji `instanceof` wewnątrz bloku `catch`. Pozwala to na sprawdzenie, jakiego typu jest złapany błąd i odpowiednie zareagowanie.

```javascript
try {
	// Jakiś ryzykowny kod
} catch (error) {
	if (error instanceof TypeError) {
		// Obsługa błędu TypeError
	} else if (error instanceof ReferenceError) {
		// Obsługa błędu ReferenceError
	} else {
		// Obsługa innych typów błędów
	}
}
```
