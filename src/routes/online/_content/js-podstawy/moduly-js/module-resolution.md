---
title: Module Resolution
description: ''
order: 50
free: false
---

Podczas ładowania modułu, JavaScript musi zrozumieć, gdzie znajduje się plik modułu, co osiąga się poprzez rozwiązanie ścieżki. Ścieżka może być absolutna lub relatywna.

👉 **Ścieżki absolutne:**

- Zaczynają się od korzenia systemu plików (`root`) lub protokołu sieciowego.
- Przykład: `/home/user/myModule.js` lub `http://example.com/myModule.js`.
- Są mniej elastyczne, ale jasno wskazują lokalizację pliku.

👉 **Ścieżki relatywne:**

- Są definiowane w odniesieniu do pliku, który je wywołuje.
- Przykład: `./myModule.js` oznacza moduł w tym samym katalogu.
- Są bardziej elastyczne, ponieważ pozwalają na łatwą zmianę struktury folderów bez konieczności aktualizowania ścieżek.

## Jak JavaScript rozwiązuje ścieżki

- **Analiza Ścieżki:**

  - JavaScript rozpoczyna od analizy ścieżki podanej przy imporcie modułu.
  - Jeśli ścieżka jest relatywna (np. `./module`), rozwiązanie odbywa się względem pliku, który wykonuje import.
  - W przypadku ścieżek absolutnych, JavaScript używa określonej ścieżki bez zmian.

- **Ładowanie Modułu:**

  - Po rozwiązaniu ścieżki, moduł jest ładowany do pamięci.
  - Moduły są singletonami; oznacza to, że każdy moduł jest ładowany tylko raz, a jego eksportowane wartości są współdzielone pomiędzy wszystkimi importującymi je plikami.

Załóżmy, że mamy moduł `math.js`, który eksportuje funkcję dodawania:

```javascript
// math.js
export function add(a, b) {
	return a + b;
}
```

I chcemy go użyć w innym pliku, `app.js`:

```javascript
// app.js
import { add } from './math.js';

console.log(add(2, 3)); // Wynik: 5
```

W tym przykładzie, ścieżka `./math.js` jest rozwiązana względem `app.js`, a funkcja `add` jest używana do wykonania obliczenia.
