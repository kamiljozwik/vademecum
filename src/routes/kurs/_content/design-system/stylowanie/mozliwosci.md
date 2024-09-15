---
title: Możliwości
description: ""
order: 10
extra_links:
  - title: 7 ways to deal with CSS
    href: https://www.youtube.com/watch?v=ouncVBiye_M
  - title: Tailwind in 100 Seconds
    href: https://www.youtube.com/watch?v=mr15Xzb1Ook
---

Stylowanie komponentów może być realizowane na wiele różnych sposobów. Każde podejście ma swoje zalety i wady, a wybór odpowiedniego rozwiązania zależy od specyficznych potrzeb projektu i preferencji zespołu.

Jako, że tego rodzaju porównania bardzo często są robione w ramach [ADR](https://adr.github.io/)-ów dla nowych bibliotek UI, poniżej zamieszczam listę zalet i wad najczęściej stosowanych rozwiązań.

## Czysty CSS

✅ Zalety

- Brak dodatkowych bibliotek czy narzędzi.
- Stylowanie odbywa się bezpośrednio w przeglądarce, bez potrzeby wykonywania dodatkowego kodu JavaScript.
- Wszystkie style są łatwe do śledzenia i debugowania w narzędziach deweloperskich przeglądarki.
- CSS jest standardem webowym, więc większość deweloperów jest już z nim zaznajomiona.
- Działa bez problemów z renderowaniem po stronie serwera.
- Może być łatwo połączone z SASS, LESS lub innymi preprocesorami CSS.

🚫 Wady

- Style domyślnie mają globalny zasięg, co może prowadzić do konfliktów nazw klas i trudności w zarządzaniu złożonymi projektami.
- Trudniejsze do osiągnięcia modularność i ponowne użycie stylów bez dodatkowych narzędzi lub konwencji.
- W dużych projektach zarządzanie stylami może stać się skomplikowane i trudne do utrzymania.
- Wymaga rygorystycznej organizacji i konwencji nazewniczych, aby uniknąć problemów z kolizją nazw klas i spójnością stylów.
- Trudniejsze do osiągnięcia dynamiczne stylowanie bez wsparcia JavaScript.
- Trudniejsze wdrożenie i zarządzanie motywami bez użycia dodatkowych narzędzi lub konwencji.
- Bez odpowiednich narzędzi i praktyk, łatwo jest skończyć z dużą ilością nieużywanych stylów w kodzie.

## CSS in JS

✅ Zalety

- Style aplikowane tylko w wybranym scopie
- Łatwe dynamiczne stylowanie
- Łatwe wdrażanie motywów w całej aplikacji
- Dobry DX przy pisaniu stylów
- Modułowość i łatwość ponownego użycia stylów
- Wykorzystuje pełną moc JavaScript
- Dojrzałe rozwiązanie z wieloma gotowymi do produkcji bibliotekami korzystającymi z podejścia CSS w JS

🚫 Wady

- Wprowadza narzut wydajnościowy (`runtime overhead`), szczególnie jeśli style są dość dynamicznie
- Zwiększa rozmiar plików JS
- Dodaje pewnego rodzaju warstwę złożoności do kodu, mieszając JavaScript i CSS
- Dość szybki do nauki
- Generowane nazwy klas są często długie i nieczytelne, co może utrudniać debugowanie stylów w przeglądarce
- Zaśmieca narzędzia deweloperskie React
- SSR może być kłopotliwe

## Tailwind CSS (utility-first CSS)

✅ Zalety

- Wysoce konfigurowalny i elastyczny
- Standaryzowany sposób pisania klas CSS w całej aplikacji
- Redukuje potrzebę pisania czystego CSS
- Brak narzutu wydajnościowego w `runtime`
- Dobre wsparcie dla IDE (np. `autocomplete`)
- Napisany CSS ograniczony do konkretnego znacznika / elementu
- Małą ilość martwego kodu CSS
- Theming
- Rozwiązanie dojrzałe i nadal zyskujące na popularności
- Dostępnych wiele wtyczek i rozszerzeń
- Wysoce konfigurowalny
- Po zaznajomieniu się z dostępnymi klasami, deweloperzy mogą szybko stylizować komponenty bez przełączania się między plikami CSS i HTML
- Pomaga w utrzymaniu spójnego Design Systemu w całej aplikacji, ponieważ wszystkie style są zdefiniowane w centralnym pliku konfiguracyjnym
- Może być używany wraz z innymi metodologiami CSS (takimi jak CSS-in-JS) i frameworkami

🚫 Wady

- Jest to narzędzie, którego trzeba w pierwszej kolejności się nauczyć
- HTML może stać się bardzo rozwlekły z wieloma klasami
- Używanie wielu klas może prowadzić do niesemantycznego HTML, gdzie struktura jest mniej czytelna na pierwszy rzut oka w porównaniu do tradycyjnego CSS z bardziej opisowymi nazwami klas
- Wymaga początkowej konfiguracji, która może być bardziej złożona w porównaniu do używania gotowej biblioteki komponentów
- Niektórzy deweloperzy mogą uznać to podejście za mniej intuicyjne lub trudniejsze do przyjęcia, szczególnie jeśli są przyzwyczajeni do pisania tradycyjnego CSS lub korzystania z rozwiązań CSS-in-JS
- Nadmierne poleganie na klasach narzędziowych może prowadzić do słabej utrzymywalności (choć dostępne są lintery do utrzymania czystości w kodzie)
- Łatwo jest skończyć z klasami "spaghetti" w złożonych komponentach

## CSS Modules

✅ Zalety

- Style utrzymują swój scope bez potrzeby korzystania z zewnętrznych bibliotek (wystarczy konfiguracja narzędzia budującego aplikację)
- Wsparcie dla SASS
- Zachęca do modułowego i wielokrotnego użytku CSS
- Proste i łatwe do użycia dla deweloperów zaznajomionych z tradycyjnym CSS (istnieje jednak pewna krzywa uczenia się tego podejścia)
- Brak narzutu wydajnościowego w `runtime`
- W połączeniu z TypeScript, CSS Modules mogą zapewnić bezpieczeństwo typów dla nazw klas

🚫 Wady

- Wymaga dodatkowej konfiguracji narzędzia budującego do przetwarzania modułów CSS
- Generowane nazwy klas są często długie i nieczytelne dla człowieka, co może utrudniać debugowanie stylów w przeglądarce
- Integracja z bibliotekami zewnętrznymi, które nie wspierają CSS Modules od razu, może być nieco problematyczna
- Wymaga przełączania się między pisaniem JavaScript i CSS
- Możliwość powstania dużej ilości martwego kodu

## Podsumowanie

Pamiętaj, że nie ma idealnego rozwiązania. Wybór odpowiedniego paradygmatu stylowania zależy od specyficznych potrzeb projektu, preferencji zespołu i wymagań dotyczących wydajności i modularności.
