---
title: Formatowanie dat
description: ''
order: 20
free: false
extra_links:
  - title: Formatting Is So Easy With The Intl JavaScript API
    href: https://www.youtube.com/watch?v=4oGWpTAY_hc
  - title: Time is Relative, even in JavaScript
    href: https://www.youtube.com/watch?v=acemrBKuDqw
---

Jedną z najważniejszych czynności przy pracy z datami jest ich formatowanie. JavaScript domyślnie nie oferuje zbyt wielu opcji do formatowania dat, ale można to zrealizować na kilka sposobów.

- **Używanie metod `Date`**: Obiekt `Date` posiada wiele metod, które pozwalają na uzyskanie konkretnych części daty, takich jak dzień, miesiąc, rok itp. Przykład:

  ```javascript
  let data = new Date();
  let dzien = data.getDate();
  let miesiac = data.getMonth() + 1; // Miesiące są liczone od 0
  let rok = data.getFullYear();

  console.log(`${dzien}/${miesiac}/${rok}`);
  ```

- **Internacjonalizacja dat (`Intl`)**: Dla bardziej zaawansowanego formatowania, można skorzystać z obiektu `Intl.DateTimeFormat`. Pozwala on na elastyczne formatowanie dat według różnych lokalizacji i formatów.

  ```javascript
  let formatter = new Intl.DateTimeFormat('pl-PL', {
  	year: 'numeric',
  	month: 'long',
  	day: 'numeric'
  });

  console.log(formatter.format(new Date()));
  ```

## Praca z czasem UTC

Praca z czasem UTC jest ważna w aplikacjach działających globalnie. Obiekt `Date` w JavaScript pozwala na łatwą manipulację czasem UTC. Używamy do tego metod z prefixem `UTC`, np. `getUTCHours()`, `setUTCMinutes()` itp.

Przykład:

```javascript
let data = new Date();
let godzina = data.getUTCHours();
let minuta = data.getUTCMinutes();

console.log(`${godzina}:${minuta}`);
```

## Praca z czasem lokalnym

JavaScript pozwala na łatwą manipulację czasem lokalnym. Używamy do tego metod bez prefixu `UTC`, np. `getHours()`, `setMinutes()` itp.

Przykład:

```javascript
let data = new Date();
let godzina = data.getHours();
let minuta = data.getMinutes();

console.log(`${godzina}:${minuta}`);
```
