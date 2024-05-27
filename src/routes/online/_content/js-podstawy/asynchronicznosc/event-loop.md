---
title: Event Loop
description: ''
order: 20
free: false
extra_links:
  - title: In The Loop - JSConf.Asia
    href: https://www.youtube.com/watch?v=cCOL7MC4Pl0
  - title: Czym do cholery jest pętla zdarzeń?
    href: https://www.youtube.com/watch?v=8aGhZQkoFbQ
---

JavaScript, język znany ze swojego jednowątkowego modelu wykonania, posiada unikalną zdolność do obsługi operacji asynchronicznych. Asynchroniczność w JavaScript jest kluczowa w tworzeniu responsywnych aplikacji webowych, gdzie operacje takie jak pobieranie danych z serwera, odczytywanie plików, czy opóźnione wykonywanie kodu, mogą być realizowane bez blokowania głównego wątku aplikacji.

### Przykład asynchroniczności: `setTimeout`

Rozważmy `setTimeout`, prostą, ale często spotykaną funkcję JavaScript. Pozwala ona na wykonanie określonego kodu po upływie określonego czasu. Na przykład:

```javascript
console.log('Start');

setTimeout(() => {
	console.log('Operacja asynchroniczna');
}, 2000);

console.log('Koniec');
```

Kod ten nie zatrzymuje całej aplikacji na 2 sekundy. Zamiast tego, "Operacja asynchroniczna" zostanie wyświetlona po 2 sekundach, podczas gdy reszta kodu kontynuuje swoje działanie.

### Co to jest pętla zdarzeń?

Pętla zdarzeń (Event Loop) to fundamentalny mechanizm w JavaScript, który pozwala na asynchroniczne wykonywanie kodu. W prostym ujęciu, jest to pętla, która nieustannie sprawdza, czy w kolejce zdarzeń (ang. event queue) pojawiły się jakieś zadania do wykonania. Jeśli tak, przenosi je do stosu wywołań (ang. call stack) do wykonania.

### Jak działa pętla zdarzeń?

- **Stos wywołań (Call Stack):** Tutaj JavaScript umieszcza funkcje do wykonania. Gdy funkcja jest wywoływana, jest umieszczana na szczycie stosu. Po zakończeniu wykonania, jest z niego usuwana.

- **Kolejka zdarzeń (Event Queue):** Gdy operacja asynchroniczna zostaje ukończona (na przykład po upływie czasu w `setTimeout`), jej callback (funkcja zwrotna) jest umieszczana w kolejce zdarzeń.

- **Event Loop:** Pętla zdarzeń monitoruje stos wywołań i kolejkę zdarzeń. Gdy stos wywołań jest pusty, pętla zdarzeń przenosi pierwszy element z kolejki zdarzeń na stos wywołań.

Rozważmy wcześniejszy przykład z `setTimeout`. Gdy `setTimeout` jest wywoływane, JavaScript umieszcza jego callback w kolejce zdarzeń po upływie określonego czasu. Następnie, gdy stos wywołań jest pusty, pętla zdarzeń przenosi ten callback na stos wywołań, a następnie jest on wykonywany.

Próba opisania pętli zdarzeń w słowach jeść trudnym zadaniem, więc gorąco zachęcam do obejrzenia poniższych materiałów, które wytłumaczą ten mechanizm w bardziej przystępny sposób. Pętla ta nie będzie Ci potrzeban do codziennej pracy, ale zdecydowanie warto wiedzieć czym ona jest i jak działa. Tym bardziej, że jest to częsty temat na rozmowach kwalifikacyjnych.
