---
title: Referencje obiektów
description: ''
order: 90
free: false
extra_links:
  - title: JavaScript Value vs. Reference (Primitives vs. Objects)
    href: https://www.youtube.com/watch?v=r5rYoJFWfN0
  - title: Reference Vs Value In JavaScript
    href: https://www.youtube.com/watch?v=-hBJz2PPIVE
---

W JavaScript, obiekty są przechowywane i manipulowane poprzez tzw. referencje, co oznacza, że gdy przypisujesz obiekt do zmiennej, przechowujesz w niej odniesienie do miejsca w pamięci, gdzie ten obiekt się znajduje. To różni się od prymitywów (takich jak np. `number`, `string`), które są przypisywane i kopiowane jako konkretne wartości.

Przykład:

```javascript
let obj1 = { a: 1, b: 2 };
let obj2 = obj1; // obj2 przechowuje referencję do tego samego obiektu co obj1

obj2.a = 3;
console.log(obj2); // Wynik: { a: 3, b: 2 }
console.log(obj1); // Wynik: { a: 3, b: 2 } - zwróć uwagę, że obj1 również został zmieniony
```

Zmiana `obj2.a` wpływa także na `obj1`, ponieważ obie zmienne wskazują na ten sam obiekt w pamięci.

Zrozumienie tego, jak działają referencje w JavaScript, jest niezwykle ważne do tego, aby efektywnie zarządzać obiektami w naszych aplikacjach. Teraz może to się wydawać mało intuicyjne, ale z czasem stanie się bardziej naturalne. Jest to również temat, który dość często pojawia się na rozmowach kwalifikacyjnych, więc dobrze jest mieć z nim doświadczenie.

## Płytka vs. głęboka kopia obiektów

### ▶️ Płytka kopia

Płytka kopia (`Shallow Copy`) tworzy nowy obiekt z takimi samymi właściwościami co oryginalny obiekt, ale tylko na najwyższym poziomie. Jeśli właściwością jest inny (zagnieżdżony) obiekt lub tablica, kopia będzie nadal przechowywać referencje do tych samych obiektów/tablic, co oryginał.

Możesz użyć `Object.assign()` lub spread operator (`...`) do utworzenia płytkiej kopii:

```javascript
let original = { a: 1, b: { c: 2 } };
let copy = { ...original };

copy.a = 4;

console.log(original.a); // Wynik: 1
console.log(copy.a); // Wynik: 4

copy.b.c = 3;

console.log(original.b.c); // Wynik: 3
console.log(copy.b.c); // Wynik: 3
```

Zmiana `copy.b.c` wpływa na `original.b.c`, ponieważ `b` jest kopią referencyjną.

### ▶️ Głęboka kopia

Głęboka kopia (`Deep Copy`) kopiuje obiekt wraz z wszystkimi zagnieżdżonymi obiektami i tablicami, tworząc w pełni niezależną kopię. Można to osiągnąć na kilka sposobów, ale jednym z najprostszych jest użycie `JSON.parse(JSON.stringify(obj))`.

```javascript
let original = { a: 1, b: { c: 2 } };
let deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.b.c = 3;
console.log(original.b.c); // Wynik: 2
console.log(deepCopy.b.c); // Wynik: 3
```

Zmieniając `deepCopy.b.c`, `original.b.c` pozostaje niezmienione, co dowodzi, że `deepCopy` jest niezależną kopią.

Warto zauważyć, że metoda `JSON.parse(JSON.stringify(obj))` ma pewne ograniczenia - nie obsługuje funkcji, symboli ani obiektów zawierających referencje do samych siebie (rekurencyjnych).
