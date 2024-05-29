---
title: Wprowadzenie
description: ''
order: 10
free: false
extra_links:
  - title: Async vs Sync Explained!
    href: https://www.youtube.com/watch?v=wYRw8f-wrco
---

**Synchroniczność** w programowaniu oznacza, że operacje wykonują się po kolei, jedna po drugiej. Każda kolejna operacja musi czekać, aż poprzednia zostanie zakończona. W kontekście JavaScript, gdy mamy blokujący kod, np. długo trwające obliczenia, cała strona może się "zawiesić" do czasu zakończenia tej operacji.

Natomiast **asynchroniczność** pozwala na wykonywanie operacji w tle, bez blokowania głównego wątku wykonania. W JavaScript asynchroniczność jest często realizowana za pomocą callbacków, promisów i składni async/await. Dzięki temu, nawet jeśli jakieś zadanie trwa długo, interfejs użytkownika pozostaje responsywny, a inne operacje mogą być wykonywane równocześnie.

### Przykład Synchronicznego Kodu

```javascript
console.log('Start');
let suma = 0;
for (let i = 0; i < 1000000; i++) {
	suma += i;
}
console.log('Suma: ', suma);
console.log('Koniec');
```

W tym przypadku, komunikat "Koniec" pojawi się dopiero po zakończeniu obliczeń.

### Przykład Asynchronicznego Kodu

```javascript
console.log('Start');

setTimeout(() => {
	console.log('To jest operacja asynchroniczna');
}, 2000);

console.log('Koniec');
```

Tutaj, "Koniec" zostanie wyświetlony od razu, a komunikat z `setTimeout` pojawi się po 2 sekundach.

To tyle słowem wstępu. W kolejnych lekcjach dowiemy się więcej w jaki sposób możemy wykorzystać asynchroniczność w JavaScript.
