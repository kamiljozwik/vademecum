---
title: Różnice czasowe
description: ''
order: 30
free: false
---

W JavaScript, czas jest kluczowym elementem wielu aplikacji webowych, od prostych zegarów po skomplikowane harmonogramy. W tej lekcji skupimy się na obliczaniu różnic czasowych, co jest podstawową, ale niezbędną umiejętnością dla każdego dewelopera JavaScript.

## Praca z obiektami daty

Jak już wiemy, JavaScript posiada wbudowany obiekt `Date`, który ułatwia zarządzanie datami i czasem. Aby obliczyć różnicę czasową, najpierw musimy stworzyć dwa obiekty `Date`:

```javascript
let poczatek = new Date('2023-01-01');
let koniec = new Date('2023-12-31');
```

## Obliczanie różnicy

Różnica między dwoma datami jest wyrażana w milisekundach. Aby uzyskać liczbę dni, godzin, minut lub sekund, należy przekształcić wynik:

```javascript
let roznicaMs = koniec - poczatek; // różnica w milisekundach
let roznicaDni = roznicaMs / (1000 * 60 * 60 * 24);
```

## Uwzględnienie stref czasowych

Praca ze strefami czasowymi może być trudnym wyzwaniem. JavaScript obsługuje strefy czasowe w obiektach `Date`, ale zawsze warto być świadomym potencjalnych problemów związanych z konwersją czasu.

## Formatowanie Wyników

Często chcemy wyświetlić różnicę czasu w czytelnym formacie. Możemy to zrobić, konwertując milisekundy na dni, godziny, minuty i sekundy:

```javascript
function formatujCzas(ms) {
	let sekundy = Math.floor((ms / 1000) % 60);
	let minuty = Math.floor((ms / (1000 * 60)) % 60);
	let godziny = Math.floor((ms / (1000 * 60 * 60)) % 24);
	let dni = Math.floor(ms / (1000 * 60 * 60 * 24));

	return dni + ' dni ' + godziny + ' godzin ' + minuty + ' minut ' + sekundy + ' sekund';
}

console.log(formatujCzas(roznicaMs));
```
