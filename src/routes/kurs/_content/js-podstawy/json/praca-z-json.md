---
title: Praca z JSON
description: ''
order: 20
free: false
extra_links:
  - title: How to Use JSON - JavaScript Tutorial
    href: https://www.youtube.com/watch?v=6I3qMe-jXDs
---

W pracy z JavaScript często spotykamy się z koniecznością pracy z danymi w formacie JSON.

Przykładem środowiska, w którym często operujemy na plikach JSON, jest Node.js. Aby odczytać plik JSON, najpierw należy go wczytać do pamięci. Używamy do tego modułu `fs` (FileSystem), który jest częścią standardowej biblioteki Node.js.

Przykładowy kod do odczytu pliku JSON:

```javascript
const fs = require('fs');

fs.readFile('example.json', 'utf8', (err, data) => {
	if (err) {
		console.error(err);
		return;
	}
	const jsonData = JSON.parse(data);
	console.log(jsonData);
});
```

W tym kodzie używamy funkcji `readFile` do asynchronicznego odczytu zawartości pliku. Następnie, używamy `JSON.parse` do przekształcenia stringa JSON na obiekt JavaScript.

### Użycie Fetch API do Odczytu JSON z Serwera

W przeglądarce często odczytujemy dane JSON z serwera. Do tego celu służy `Fetch API`. Przykład użycia:

```javascript
fetch('https://example.com/data.json')
	.then((response) => response.json()) // o tym, czym jest .then() powiemy sobie w kolejnych lekcjach
	.then((data) => console.log(data))
	.catch((error) => console.error(error));
```

Ta metoda korzysta z funkcji `fetch`, która zwraca `Promise`. Następnie, używamy metody `.json()` na odpowiedzi, aby otrzymać obiekt JavaScript.

### Zapisywanie Danych do Pliku JSON w Node.js

Podobnie jak przy odczytywaniu, do zapisu danych JSON w Node.js używamy modułu `fs`. Tym razem użyjemy funkcji `writeFile` do zapisu danych w pliku JSON.

Przykład zapisu danych do pliku JSON:

```javascript
const fs = require('fs');
const jsonData = { name: 'Jan', age: 30 };

fs.writeFile('output.json', JSON.stringify(jsonData), (err) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log('Dane zapisane pomyślnie');
});
```

W tym przykładzie `JSON.stringify` konwertuje obiekt JavaScript na string JSON, który następnie jest zapisywany w pliku.
