---
title: Blok finally
description: ''
order: 30
free: false
---

Blok `finally` w JavaScript jest jednym z kluczowych elementów obsługi wyjątków, często używany razem z blokami `try` i `catch`. Głównym celem bloku `finally` jest wykonanie kodu po zakończeniu próby wykonania bloku `try`, niezależnie od tego, czy doszło do wyjątku czy nie.

```javascript
try {
	// Próba wykonania kodu
} catch (error) {
	// Obsługa wyjątku
} finally {
	// Kod w tym bloku zostanie wykonany zawsze
}
```

Blok `finally` jest szczególnie przydatny w przypadkach, gdy musimy upewnić się, że pewne operacje zostaną wykonane bez względu na to, czy operacja w bloku `try` się powiodła, czy nie. Na przykład, może być to zamknięcie pliku, połączenia sieciowego czy zwolnienie zasobów.

## Obsługa operacji czyszczących

W programowaniu często mamy do czynienia z sytuacjami, gdy musimy przeprowadzić tzw. operacje czyszczące (cleanup operations). Są to działania, które należy wykonać niezależnie od wyniku głównej operacji, na przykład zwolnienie zasobów.

Blok `finally` jest idealnym miejscem na umieszczenie takich operacji. Oto przykład:

```javascript
function exampleFunction() {
	let resource;

	try {
		resource = allocateResource();
		// Kod, który może generować wyjątki
	} catch (error) {
		// Obsługa błędów
		throw error; // Rzucamy wyjątek dalej
	} finally {
		// Tutaj dokonujemy operacji czyszczących
		if (resource) {
			resource.release();
		}
	}
}
```

W powyższym przykładzie, niezależnie od tego, czy w bloku `try` wystąpił błąd, czy nie, blok `finally` zadba o zwolnienie zasobów przez wywołanie `resource.release()`.
