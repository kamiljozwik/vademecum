---
title: JSON i tablice
description: ''
order: 50
free: false
---

W JSON możemy zapisywać również tablice, które oferują łatwość manipulacji i dostępu do danych. Przyjrzyjmy się, jak można efektywnie obsługiwać `JSON arrays` w JavaScript.

### Ładowanie i parsowanie JSON arrays

Pierwszym krokiem w pracy z JSON arrays jest ich załadowanie i parsowanie. Najczęściej JSON jest pobierany z zewnętrznych API jako tekst. Aby przekształcić taki tekst w użyteczną strukturę danych, używamy metody `JSON.parse()`:

```javascript
const jsonString = '[{"name": "Alice"}, {"name": "Bob"}]';
const jsonArray = JSON.parse(jsonString);

console.log(jsonArray); // Wyświetli tablicę obiektów
```

Po parsowaniu, możemy iterować już po tablicy używając pętli lub metod tablicowych, takich jak `forEach`, `map`, `filter`:

```javascript
jsonArray.forEach((item) => {
	console.log(item.name);
});
```

### Konwersja tablic na string

W niektórych przypadkach, potrzebujemy przekonwertować tablicę z powrotem na string, na przykład do wysłania danych przez sieć. Użyjemy do tego `JSON.stringify()`:

```javascript
const array = ['Alice', 'Bob'];
const updatedJsonString = JSON.stringify(array);
```
