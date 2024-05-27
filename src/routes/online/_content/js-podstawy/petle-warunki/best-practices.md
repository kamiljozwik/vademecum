---
title: Best practices
description: ''
order: 130
free: false
extra_links:
  - title: JavaScript Loops - Code This, Not That
    href: https://www.youtube.com/watch?v=x7Xzvm0iLCI
  - title: 5 Tips for Writing BETTER For Loops in JavaScript
    href: https://www.youtube.com/watch?v=QO-3d128l28
  - title: Javascript Loop Tutorial for Beginners
    href: https://www.youtube.com/watch?v=zO5-OnRA5lA
---

Pętle w JavaScript są podstawowym narzędziem każdego programisty, pozwalającym na wykonywanie powtarzających się operacji. Jak już wiesz, istnieje kilka rodzajów pętli, takich jak `for` czy `while`. Każda z nich ma swoje specyficzne zastosowania.

### 👉 Pętla `while`

Pętla `while` wykonuje kod tak długo, jak spełniony jest określony warunek.

```javascript
while (warunek) {
	// Kod do wykonania
}
```

**Najlepsze praktyki:**

- Upewnij się, że warunek w pewnym momencie przestanie być spełniony, aby uniknąć nieskończonych pętli.
- Używaj `while`, gdy liczba iteracji nie jest znana z góry.

### 👉 Pętla `do...while`

Pętla `do...while` jest podobna do pętli `while`, z tą różnicą, że kod jest wykonywany przynajmniej raz, nawet jeśli warunek nie jest spełniony.

```javascript
do {
	// Kod do wykonania
} while (warunek);
```

**Najlepsze praktyki:**

- Używaj `do...while` do wykonania kodu przynajmniej raz, nawet jeśli warunek nie jest spełniony.

### 👉 Pętla `for`

Pętla `for` jest najczęściej używaną pętlą w JavaScript. Pozwala na wykonywanie kodu określoną liczbę razy.

```javascript
for (inicjalizacja; warunek; aktualizacja) {
	// Kod do wykonania
}
```

**Najlepsze praktyki:**

- Używaj zmiennych `let` lub `const` zamiast `var` w inicjalizacji pętli, aby uniknąć niezamierzonych efektów w zasięgu (scope) zmiennej.
- Sprawdzaj warunki w sposób, który unika niepotrzebnego obciążenia, np. obliczając długość tablicy przed pętlą.

### 👉 Pętla `for...of`

Pętla `for...of` jest nowszą konstrukcją w JavaScript, używaną do iteracji po elementach iterowalnych, takich jak tablice czy stringi.

```javascript
for (const element of iterable) {
	// Kod do wykonania
}
```

**Najlepsze praktyki:**

- Używaj `for...of` do czytelnej iteracji po elementach kolekcji.
- Pamiętaj, że `for...of` nie dostarcza bezpośrednio indeksu elementu, jeśli jest to potrzebne, użyj tradycyjnej pętli `for`.

### 👉 Pętla `for...in`

Pętla `for...in` jest używana do iteracji po kluczach obiektu.

```javascript
for (const key in object) {
	// Kod do wykonania
}
```

**Najlepsze praktyki:**

- Używaj `for...in` do iteracji po kluczach obiektu.
- Pamiętaj, że `for...in` iteruje po wszystkich kluczach w łańcuchu prototypów, dlatego zawsze należy sprawdzać, czy klucz jest własnością obiektu. Możesz to zrobić za pomocą metody `hasOwnProperty()`.
- Używaj `Object.keys()` do iteracji po kluczach obiektu, jeśli nie chcesz iterować po łańcuchu prototypów.

## Optymalizacja i wydajność

### Unikanie zbędnych obliczeń

W pętlach często popełnianym błędem jest wykonywanie zbędnych obliczeń w każdej iteracji. Na przykład, obliczanie długości tablicy w warunku pętli `for` może znacząco obniżyć wydajność.

### Minimalizacja skutków ubocznych

Pętle mogą niezamierzenie modyfikować zmienne zewnętrzne lub obiekty. Dobre praktyki sugerują minimalizowanie takich skutków ubocznych, aby kod był bardziej przewidywalny i łatwiejszy w utrzymaniu.

### Wykorzystanie metod tablicowych

JavaScript oferuje metody takie jak `.forEach()`, `.map()`, `.filter()`, które często mogą zastąpić tradycyjne pętle, oferując bardziej deklaratywny i czytelny sposób pracy z kolekcjami.
