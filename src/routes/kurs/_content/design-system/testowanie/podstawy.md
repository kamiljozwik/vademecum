---
title: Podstawy
description: ""
order: 10
---

Nie chcemy w tym rozdziale tworzyć całego kursu dotyczącego testowania komponentów, ale myślę, że warto zrobić szybkie powtórzenie najważniejszych tematów związanych z testowaniem w kontekście Design Systemu.

### Typy testów

- **Testy jednostkowe (`unit tests`)**:
  Testują pojedyncze funkcje lub komponenty w izolacji, sprawdzając, czy działają zgodnie z oczekiwaniami. Są szybkie i pozwalają na dokładne sprawdzenie logiki biznesowej.

- **Testy integracyjne (`integration tests`)**:
  Testują interakcje między różnymi komponentami i modułami. Upewniają się, że komponenty współpracują ze sobą poprawnie.

- **Testy end-to-end (`E2E`)**:
  Symulują rzeczywiste scenariusze użytkownika, sprawdzając pełne ścieżki zachowań użytkownika. Są bardziej kompleksowe, ale też wolniejsze i bardziej złożone w utrzymaniu. W przypadku Design Systemu i biblioteki komponentów, raczej dość rzadko będziemy z nich korzystać.

### Narzędzia do testowania

- **[Jest](https://jestjs.io/)**:
  Jest to framework do testów jednostkowych w ekosystemie React. Integruje się fajnie z `React Testing Library` i pozwala na dość łatwe pisanie testów.

- **[Vitest](https://vitest.dev/)**:
  Stosunkowo nowa, szybsza (oparta na `Vite`) i zdobywająca coraz większą popularność alternatywa dla `Jest`.

- **[Testing Library](https://testing-library.com/)**:
  Biblioteka do testowania komponentów React, Vue, Angular, Svelte i Preact, która kładzie nacisk na testowanie zachowania użytkownika, a nie szczegółów implementacyjnych. Umożliwia testowanie interakcji z komponentami w sposób zbliżony do rzeczywistego użycia.

- **[Playwright](https://playwright.dev/)**:
  Bardzo popularne narzędzie do testów E2E, ale również potrafi znaleźć zastosowanie przy testach jednostkowych i integracyjnych.

- **[Cypress](https://www.cypress.io/)**:
  Kolejne narzędzie do testów E2E, które oferuje przyjazny interfejs i potężne możliwości automatyzacji testów. Idealne do testowania pełnych ścieżek użytkownika w aplikacji.

- **[Mock Service Worker](https://mswjs.io/)**:
  Biblioteka do _mockowania_ zapytań sieciowych, działająca zarówno w przeglądarce jak i w Node.js.

## Best practices 💪

### 1. Pisanie testów zgodnych z zachowaniem użytkownika

- Skup się na tym, jak użytkownicy wchodzą w interakcję z komponentami. Używaj narzędzi takich jak `Testing Library`, które promują testowanie z perspektywy użytkownika.
- Unikaj testowania wewnętrznej implementacji komponentów, chyba że jest to absolutnie konieczne.

### 2. Utrzymywanie testów prostymi i czytelnymi

- Pisanie prostych i zrozumiałych testów ułatwia ich utrzymanie i zmniejsza ryzyko błędów. Preferuj `clean code` nad `smart code`.
- Używaj opisowych nazw testów, które jasno wskazują, co jest testowane.

### 3. Izolacja komponentów

- Testuj komponenty w izolacji, aby upewnić się, że działają poprawnie niezależnie od innych części aplikacji.
- Używaj mocków do symulowania zależności zewnętrznych.

### 4. Testowanie różnych stanów komponentów

- Sprawdź, jak komponenty zachowują się w różnych stanach (np. załadowany, ładowanie, błąd).
- Testuj różne kombinacje właściwości (`props`), aby upewnić się, że komponenty reagują poprawnie na zmiany.

### 5. Testowanie dostępności (`a11y`)

- Upewnij się, że komponenty są dostępne dla wszystkich użytkowników, w tym osób z niepełnosprawnościami.
- Używaj narzędzi do testowania dostępności, takich jak [axe-core](https://github.com/dequelabs/axe-core) lub [@axe-core/react](https://github.com/dequelabs/axe-core-npm/tree/develop/packages/react), aby automatycznie wykrywać problemy związane z dostępnością.

### 6. Regularne przeglądy i aktualizacje testów

- Regularnie przeglądaj testy, aby upewnić się, że są aktualne i odpowiadają bieżącym wymaganiom projektu.
- Usuwaj lub aktualizuj testy, które stały się nieaktualne lub niepotrzebne.

### 7. Integracja testów z CI/CD

- Zintegruj testy z systemem ciągłej integracji (`CI`), aby były automatycznie uruchamiane przy każdym wdrożeniu / Pull Requeście.

### 8. Używanie snapshotów z rozwagą

- `Snapshot testing` (o tym więcej w następnej lekcji) jest przydatny do szybkiego wykrywania zmian w strukturze komponentów, ale nie powinien zastępować testów funkcjonalnych.
- Regularnie przeglądaj i aktualizuj snapshoty, aby były zgodne z oczekiwaniami.

### 9. Testowanie stylów i responsywności

- Upewnij się, że komponenty są poprawnie stylizowane i responsywne na różnych urządzeniach i rozdzielczościach ekranu.
- Używaj narzędzi do testowania responsywności, takich jak `Storybook` (o tym również więcej w kolejnych lekcjach tego rozdziału) z pluginami do testowania stylów i układów.

### 10. Dokumentacja testów

- Dokumentuj cele i zakres testów, aby inni członkowie zespołu mogli łatwo zrozumieć, co i dlaczego jest testowane.
- Używaj komentarzy, aby wyjaśnić złożone lub nietypowe testy.

### 11. Pisz testy zaraz po developmencie

- Nie oszukuj się, że dopiszesz je później 😉
