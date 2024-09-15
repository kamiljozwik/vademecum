---
title: Dokumentacja
description: ""
order: 10
extra_links:
  - title: Storybook in 100 Seconds
    href: https://www.youtube.com/watch?v=gdlTFPebzAU
  - title: ELI5 - Docusaurus
    href: https://www.youtube.com/watch?v=_An9EsKPhp0
  - title: Projects that use Storybook
    href: https://storybook.js.org/showcase/projects
---

Dokumentacja jest jednym z najważniejszych elementem każdej biblioteki komponentów. Ułatwia zrozumienie i prawidłowe wykorzystanie komponentów przez wszystkich członków zespołu.

Poniżej znajdziemy kilka najpopularniejszych narzędzi do tworzenia takowej dokumentacji.

## Storybook

[Storybook](https://storybook.js.org/) to jedno z najpopularniejszych narzędzi do dokumentowania komponentów. Pozwala na tworzenie, przeglądanie i testowanie komponentów w izolacji. Dzięki temu każdy komponent można zobaczyć w różnych stanach i konfiguracjach.

### Zalety Storybook:

- **Izolacja komponentów**: Możliwość tworzenia i testowania komponentów bez uruchamiania całej aplikacji.
- **Dokumentacja**: Automatyczne generowanie dokumentacji komponentów, która jest łatwa do przeglądania przez innych deweloperów.
- **Addons**: Szeroka gama dodatków, które rozszerzają funkcjonalność Storybooka (np. `Knobs`, `Actions`, `A11y`).

## Docusaurus

[Docusaurus](https://docusaurus.io/) to narzędzie do tworzenia stron dokumentacyjnych. Jest to świetny wybór, gdy potrzebujesz bardziej zaawansowanej i kompleksowej dokumentacji dla swojej biblioteki komponentów.

### Zalety Docusaurus:

- **Prostota**: Łatwość w tworzeniu i utrzymywaniu dokumentacji.
- **Konfiguracja**: Wiele opcji konfiguracyjnych, które pozwalają dostosować dokumentację do potrzeb projektu.
- **Integracje**: Możliwość integracji z `GitHub` i innymi narzędziami deweloperskimi.

## Bit.dev

[Bit.dev](https://bit.dev/) to platforma do udostępniania, przeglądania i zarządzania komponentami. Dzięki `Bit.dev` można łatwo publikować komponenty, śledzić ich wersje i udostępniać je innym zespołom.

### Zalety Bit.dev:

- **Centralizacja**: Możliwość centralnego zarządzania komponentami, co ułatwia ich ponowne używanie w różnych projektach.
- **Wersjonowanie**: Automatyczne śledzenie wersji komponentów.
- **Integracje**: Możliwość integracji z narzędziami CI/CD, co ułatwia publikowanie nowych wersji komponentów.

## MkDocs

[MkDocs](https://www.mkdocs.org/) to prosty narzędzie do tworzenia statycznych stron dokumentacyjnych z plików markdown. Jest idealne do szybkiego tworzenia i utrzymywania dokumentacji technicznej.

### Zalety MkDocs:

- **Prostota**: Łatwość w użyciu i konfiguracji.
- **Markdown**: Wykorzystanie markdown do tworzenia dokumentacji, co jest intuicyjne i szybkie.
- **Rozszerzalność**: Możliwość dodawania rozszerzeń, które zwiększają funkcjonalność `MkDocs`.

Tego rodzaju narzędzi jest oczywiście znacznie więcej (np. [React Styleguidist](https://react-styleguidist.js.org/)) i w zdecydowanej większości przypadków rekomendowanym narzędziem w przypadku Design Systemu będzie Storybook.

Pod [tym linkiem](https://storybook.js.org/showcase/projects) możemy znaleźć imponującą listę popularnych Design Systemów udokumentowanych właśnie za pomocą Storybooka.
