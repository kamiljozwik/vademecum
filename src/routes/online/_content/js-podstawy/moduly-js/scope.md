---
title: Zakres
description: ''
order: 40
free: false
---

Zakres (ang. `scope`) definiuje kontekst wykonania, w którym zmienne, funkcje i obiekty są dostępne. W kontekście modułów JavaScript, każdy moduł ma swój własny zakres, co oznacza, że zmienne lub funkcje zdefiniowane w jednym module nie są domyślnie dostępne w innym.

Wyobraź sobie moduły jako indywidualne pokoje w budynku. Każdy pokój (moduł) ma swoje elementy, które nie są widoczne dla osób znajdujących się w innych pokojach. Taka struktura pozwala na uniknięcie konfliktów nazw i zwiększa czytelność kodu. Hermetyzacja, czyli ograniczenie dostępu do wewnętrznej struktury modułu, umożliwia utrzymanie kodu bezpiecznego i łatwego w utrzymaniu.

```javascript
// Przykład modułu
let prywatnaZmienna = 'Tajemnica';

export function publicznaFunkcja() {
	return `Tajemnica to: ${prywatnaZmienna}`;
}
```

## Globalny vs. lokalny zakres w modułach

1. **Globalny zakres**: Zmienne lub funkcje zdefiniowane w zakresie globalnym są dostępne wszędzie w Twojej aplikacji. Używanie globalnego zakresu może być ryzykowne, ponieważ wprowadza możliwość konfliktów nazw i utrudnia śledzenie zależności w kodzie.

   ```javascript
   // Zmienna globalna
   var zmiennaGlobalna = 'Dostępna wszędzie';
   ```

2. **Lokalny zakres w modułach**: W przeciwieństwie do zakresu globalnego, lokalny zakres w modułach ogranicza dostępność zmiennych i funkcji do modułu, w którym zostały zdefiniowane. Dzięki temu unikamy problemów związanych z globalnym zakresem i tworzymy bardziej przewidywalny i łatwy w utrzymaniu kod.

   ```javascript
   // Moduł A
   let lokalnaZmiennaA = 'Tylko w module A';

   // Moduł B
   import { lokalnaZmiennaA } from 'modulA'; // Błąd: lokalnaZmiennaA nie jest eksportowana z modułu A
   ```

W praktycznym zastosowaniu, zalecane jest korzystanie z lokalnych zakresów w modułach, aby zachować czystość i niezależność kodu. Na przykład, jeśli tworzysz bibliotekę matematyczną, każda funkcja powinna być zdefiniowana w oddzielnym module, aby uniknąć konfliktów i ułatwić ponowne użycie kodu.

```javascript
// matematyka.js
export function dodaj(a, b) {
	return a + b;
}

// użycie w innym module
import { dodaj } from 'matematyka';

console.log(dodaj(2, 3)); // Wynik: 5
```
