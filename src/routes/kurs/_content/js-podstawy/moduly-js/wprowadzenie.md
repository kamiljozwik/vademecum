---
title: Wprowadzenie
description: ''
order: 10
free: false
extra_links:
  - title: JavaScript Modules in 100 Seconds
    href: https://www.youtube.com/watch?v=qgRUr-YUk1Q
  - title: JavaScript Modules - From IIFEs to CommonJS to ES6 Modules
    href: https://www.youtube.com/watch?v=qJWALEoGge4
    desc: Trochę długi materiał, ale bardzo dobrze wyjaśnia ewolucję modułów w JavaScript
---

Moduły to fundament współczesnego programowania w JavaScript. Są to oddzielne pliki zawierające kod, które można importować i eksportować między różnymi częściami aplikacji. Dzięki temu, programiści mogą organizować kod w sposób bardziej przejrzysty i modularny. Na przykład, możesz mieć moduł `math.js` zawierający funkcje matematyczne i używać ich w różnych miejscach Twojej aplikacji.

## Pozostałe benefity modułów:

1. **Podział odpowiedzialności**: Każdy moduł zajmuje się konkretnym zadaniem, co ułatwia zarządzanie kodem.
2. **Łatwiejsze testowanie**: Oddzielone moduły są łatwiejsze do testowania i debugowania.
3. **Reużycie kodu**: Funkcjonalności zdefiniowane w modułach można łatwo użyć w różnych częściach aplikacji.
4. **Zarządzanie zależnościami**: Moduły pozwalają na wyraźne określenie, które części kodu zależą od innych.

## Jak używać Modułów?

Moduły importujemy przy użyciu słowa kluczowego `import`, a eksportujemy za pomocą `export`. Przykład:

```javascript
// plik math.js
export function add(a, b) {
	return a + b;
}

// plik main.js
import { add } from './math.js';

console.log(add(2, 3)); // Wynik: 5
```

W początkowych latach JavaScript, modularność nie istniała. Cały kod był zazwyczaj umieszczany w jednym pliku lub osadzany bezpośrednio w HTML. To prowadziło do licznych problemów, takich jak kolizje nazw i trudności w utrzymaniu kodu.

### Wprowadzenie Modułów

W ekosystemie JavaScript przez lata pojawiło się wiele różnych sposóbów na to, aby zorganizować kod w moduły. Oto kilka z nich:

1. **CommonJS**: Używany głównie w Node.js, wprowadził koncept `require` i `module.exports`. Pomimo swojej popularności, był ograniczony głównie do środowiska serwera.
2. **AMD (Asynchronous Module Definition)**: Skupiając się na asynchronicznym ładowaniu, AMD był popularny w środowiskach przeglądarek, ale jego skomplikowany składnia ograniczała użyteczność.
3. **UMD (Universal Module Definition)**: Próba stworzenia modułów kompatybilnych zarówno z CommonJS, jak i AMD. Mimo że rozwiązywał niektóre problemy, nie był idealny.

## ECMAScript 2015 i Moduły ES6

Wprowadzenie modułów ES6 w ECMAScript 2015 było przełomem. Zapewniało standardową, jasną składnię do importowania i eksportowania modułów (`import`/`export`). Moduły ES6 szybko stały się standardem w nowoczesnym JavaScript, oferując lepszą wydajność i możliwości dzięki statycznej strukturze.

I to właśnie Moduły ES6 będziemy wykorzystywać w naszym kursie, jako że są one obecnie najbardziej popularnym sposobem na organizację kodu w JavaScript.
