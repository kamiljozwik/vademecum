---
title: Podstawy
description: ""
order: 10
extra_links:
  - title: Podaj tytuł...
    href: Podaj link...
---

## Testy Jednostkowe

Testy jednostkowe to podstawa zapewnienia jakości i niezawodności komponentów w Twojej bibliotece. W tej lekcji dowiesz się, jak pisać i uruchamiać testy jednostkowe dla komponentów React przy użyciu `Jest` i `Vitest`.

## Wprowadzenie do `Jest` i `Vitest`

`Jest` to popularne narzędzie do testowania jednostkowego stworzone przez Facebooka. Jest szeroko stosowane w ekosystemie React ze względu na swoją prostotę i wszechstronność. `Vitest` to nowsze narzędzie, które zyskuje na popularności dzięki swojej szybkości i integracji z Vite, nowoczesnym bundlerem dla aplikacji frontendowych.

## Pisanie testów jednostkowych dla komponentów

1. **Instalacja narzędzi do testowania**:

   - Aby zainstalować `Jest`, użyj następującej komendy:
     ```bash
     npm install --save-dev jest
     ```
   - Aby zainstalować `Vitest`, użyj:
     ```bash
     npm install --save-dev vitest
     ```

2. **Konfiguracja**:

   - W przypadku `Jest`, dodaj skrypt testowy do `package.json`:
     ```json
     "scripts": {
       "test": "jest"
     }
     ```
   - W przypadku `Vitest`, dodaj skrypt testowy do `package.json`:
     ```json
     "scripts": {
       "test": "vitest"
     }
     ```

3. **Podstawowy test komponentu**:

   - Tworzymy plik testowy dla komponentu, np. `Button.test.js`, i importujemy narzędzia testowe oraz komponent:
     ```javascript
     import React from "react";
     import { render } from "@testing-library/react";
     import Button from "./Button";
     ```

4. **Pisanie testu**:
   - Użyj `describe` i `it` aby zdefiniować zestaw testów i pojedynczy test. Przykładowo, aby sprawdzić, czy komponent `Button` renderuje się poprawnie:
     ```javascript
     describe("Button Component", () => {
       it("should render correctly", () => {
         const { getByText } = render(<Button>Click me</Button>);
         expect(getByText("Click me")).toBeInTheDocument();
       });
     });
     ```

## Najlepsze praktyki

- **Izolacja testów**: Upewnij się, że każdy test jest niezależny od innych, aby zmiany w jednym teście nie wpływały na wyniki innych testów.
- **Testowanie przypadków krawędziowych**: Pamiętaj o testowaniu nie tylko standardowych scenariuszy, ale również przypadków krawędziowych, aby zapewnić pełną pokrycie funkcjonalności.
- **Korzystanie z `beforeEach` i `afterEach`**: Te funkcje pozwalają na ustawianie i czyszczenie środowiska testowego przed i po każdym teście.

Testy jednostkowe są kluczowe dla zapewnienia jakości kodu i stabilności aplikacji. W tej lekcji nauczyliśmy się, jak pisać i uruchamiać podstawowe testy jednostkowe dla komponentów React za pomocą `Jest` i `Vitest`. Teraz jesteś gotowy do wdrożenia testów jednostkowych w swojej bibliotece komponentów.

## Testy Integracyjne

Testy integracyjne sprawdzają, jak różne części aplikacji współpracują ze sobą. W tej lekcji dowiesz się, jak pisać testy integracyjne dla komponentów React przy użyciu `Testing Library`.

## Używanie `Testing Library` do testów integracyjnych

`Testing Library` to zestaw narzędzi do testowania komponentów React, który skupia się na testowaniu komponentów z perspektywy użytkownika. Jego głównym celem jest ułatwienie pisania testów, które są łatwe do zrozumienia i utrzymania.

## Instalacja `Testing Library`

Aby zainstalować `Testing Library`, użyj następującej komendy:

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

## Pisanie testów integracyjnych

1. **Tworzenie testu integracyjnego**:

   - Tworzymy plik testowy dla zestawu komponentów, np. `App.test.js`, i importujemy narzędzia testowe oraz komponenty:
     ```javascript
     import React from "react";
     import { render, screen } from "@testing-library/react";
     import App from "./App";
     ```

2. **Pisanie testu**:

   - Użyj `describe` i `it` aby zdefiniować zestaw testów i pojedynczy test. Przykładowo, aby sprawdzić, czy aplikacja renderuje główny nagłówek:
     ```javascript
     describe("App Component", () => {
       it("should render the main header", () => {
         render(<App />);
         const headerElement = screen.getByText(/welcome to my app/i);
         expect(headerElement).toBeInTheDocument();
       });
     });
     ```

3. **Sprawdzanie interakcji**:
   - Możemy również testować interakcje użytkownika, takie jak kliknięcia przycisków. Przykładowo, aby sprawdzić, czy kliknięcie przycisku zmienia tekst:
     ```javascript
     describe("App Component", () => {
       it("should change text on button click", () => {
         render(<App />);
         const buttonElement = screen.getByRole("button", {
           name: /click me/i,
         });
         buttonElement.click();
         const updatedText = screen.getByText(/you clicked the button/i);
         expect(updatedText).toBeInTheDocument();
       });
     });
     ```

## Najlepsze praktyki

- **Testowanie z perspektywy użytkownika**: Skup się na testowaniu aplikacji tak, jakbyś był użytkownikiem. `Testing Library` dostarcza metody, które ułatwiają testowanie interakcji użytkownika.
- **Unikanie testowania szczegółów implementacji**: Testy integracyjne powinny koncentrować się na sprawdzaniu, czy komponenty współpracują ze sobą poprawnie, a nie na wewnętrznych szczegółach implementacji.
- **Używanie `async` i `waitFor`**: W przypadku asynchronicznych interakcji, takich jak zapytania sieciowe, używaj `async` i `waitFor`, aby upewnić się, że testy czekają na zakończenie wszystkich operacji asynchronicznych.

Testy integracyjne są kluczowe dla zapewnienia, że różne części aplikacji współpracują ze sobą poprawnie. W tej lekcji nauczyliśmy się, jak pisać i uruchamiać testy integracyjne dla komponentów React za pomocą `Testing Library`. Teraz jesteś gotowy do wdrożenia testów integracyjnych w swojej bibliotece komponentów.
