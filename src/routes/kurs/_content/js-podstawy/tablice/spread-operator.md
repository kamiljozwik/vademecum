---
title: Spread Operator
description: ''
order: 60
free: false
extra_links:
  - title: JS Spread Operator - How It Works & Why I Love It
    href: https://www.youtube.com/watch?v=pYI-UuZVtHI
  - title: The JavaScript Spread Operator - One Thing You DIDN'T KNOW!
    href: https://www.youtube.com/watch?v=mlXj7c7UIE4
---

Operator `spread` w JavaScript, oznaczony trzema kropkami (`...`), pozwala na rozszerzenie iterowalnych elementów, takich jak tablice, w miejscach, gdzie oczekuje się wielu argumentów lub elementów. W kontekście tablic, operator ten jest często wykorzystywany do tworzenia kopii tablic.

Zrozumienie, jak tworzyć kopie tablic w JavaScript, jest bardzo ważne, ponieważ tablice w JavaScript są obiektami i zachowują się jak referencje. Oznacza to, że przypisując jedną tablicę do drugiej, tworzymy tylko referencję do tej samej tablicy, a nie osobną kopię. To prowadzi do problemów, gdy chcemy modyfikować jedną tablicę bez wpływu na drugą.

## Tworzenie płytkiej kopii z użyciem `spread`

Płytka kopia tablicy oznacza, że kopiowane są tylko elementy na najwyższym poziomie tablicy. Głębsze struktury obiektów lub tablic wewnątrz pozostają nadal połączone referencyjnie.

```javascript
let originalArray = [1, 2, 3];
let copiedArray = [...originalArray];

console.log(copiedArray); // [1, 2, 3]
```

W tym przykładzie `copiedArray` jest teraz oddzielną tablicą, a modyfikacje tej tablicy nie wpłyną na `originalArray`. Jest to szczególnie użyteczne, gdy chcemy pracować na danych bez ryzyka niezamierzonej modyfikacji oryginału.

## Zastosowania operatora `spread` przy kopiowaniu

1. **Łączenie Tablic:**
   Możemy użyć operatora `spread` do łączenia dwóch lub więcej tablic w jedną.

   ```javascript
   let firstArray = [1, 2];
   let secondArray = [3, 4];
   let mergedArray = [...firstArray, ...secondArray]; // [1, 2, 3, 4]
   ```

2. **Dodawanie Elementów:**
   Operator `spread` umożliwia także łatwe dodawanie nowych elementów do tablicy podczas kopiowania.

   ```javascript
   let numbers = [1, 2];
   let moreNumbers = [...numbers, 3, 4]; // [1, 2, 3, 4]
   ```

3. **Kopiowanie z Modyfikacjami:**
   Łatwo możemy wprowadzić zmiany w kopii, na przykład dodając warunki lub modyfikując elementy.
   ```javascript
   let original = [1, 2, 3];
   let modifiedCopy = [...original.map((element) => element * 2)]; // [2, 4, 6]
   ```

## Uwagi Końcowe

Operator `spread` jest naprawdę potężnym 💪 narzędziem w arsenale każdego programisty JavaScript. Umożliwia on nie tylko efektywne i bezpieczne kopiowanie tablic, ale także oferuje elastyczność w manipulowaniu danymi. Należy jednak pamiętać, że kopiuje on tylko na poziomie płytkim (`shalow copy`), co oznacza, że zagnieżdżone obiekty i tablice nadal będą współdzielić swoje referencje.
