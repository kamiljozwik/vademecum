---
title: Coding policies
description: ""
order: 10
extra_links:
  - title: Frontend guideline
    href: https://github.com/juntossomosmais/frontend-guideline
  - title: 15 Coding Guidelines & Best Practices for Frontend
    href: https://javascript.plainenglish.io/coding-guideline-and-best-practices-for-frontend-dfdb4587afa9
---

W tworzeniu i utrzymywaniu biblioteki komponentów bardzo pomocne jest stosowanie spójnych i przejrzystych zasad pisania kodu (`coding policies`). Odgórne ustanowienie (lub wręcz wymuszanie np. przez ESLint) dobrych praktyki kodowania zwiększa czytelność kodu, ułatwia jego utrzymanie oraz współpracę w zespole.

Dobrze, aby taki dokument był łatwo dostępny dla wszystkich. Może to być również jedna ze stron w Storybooku.

Początkowo zapewne nie będzie to zbyt obszerny dokument i większość zapisanych tam dobrych praktyk będzie znana większości członkom zespołu, ale największą wartość uzyskamy, gdy dokument ten będzie dokumentem _żyjącym_ i aktualizowanym o wszelkiego rodzaju _edge-case_-y, które wyjdą już w pracy lub na PR-ach.

Jeżeli jakiś błąd, niepewność, niejednoznaczność pojawią się raz, to zapewne pojawią się również po raz kolejny. Szczególnie wtedy, gdy do zespołu będę dołączali nowi deweloperzy.

Każdy zespół pracujący nad Design Systemem musi taki dokument wypracować samodzielnie. Poniżej kilka uniwersalnych zasad, które mogą przydać się na samym początku.

## Spójne nazewnictwo

Stosowanie spójnych konwencji nazewniczych jest podstawą dobrej jakości kodu. Elementy powinny być nazywane zgodnie z przyjętymi standardami, np. `PascalCase` dla komponentów i `kebab-case` dla plików.

## Struktura plików

Utrzymywanie logicznej struktury plików pomaga w łatwym odnajdywaniu i zarządzaniu komponentami. Zalecane jest, aby każdy komponent miał swój własny folder zawierający plik z komponentem oraz pliki z testami i stylami.

## Komentarze i dokumentacja

Kod powinien być na tyle czytelny, aby nie wymagał nadmiernej ilości komentarzy. Jednakże, kluczowe fragmenty oraz złożona logika powinny być odpowiednio skomentowane. Dodatkowo, dokumentacja komponentów za pomocą narzędzi takich jak `JSDoc` pomaga innym programistom zrozumieć ich działanie.

## Unikanie zduplikowanego kodu

W miarę możliwości unikaj powielania kodu. Wykorzystuj reużywalne funkcje i komponenty ([DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)), aby zmniejszyć ilość powtórzeń w kodzie. Dzięki temu kod staje się bardziej modularny i łatwiejszy do utrzymania.

## Linting i formatowanie

Używanie narzędzi takich jak `ESLint` oraz `Prettier` pomaga automatycznie utrzymywać jednolity styl kodowania. Dzięki temu cały zespół pracuje w oparciu o te same standardy, co zmniejsza ryzyko błędów i ułatwia przeglądanie kodu.

## Testowanie

Pisanie testów jednostkowych oraz integracyjnych jest nieodzownym elementem utrzymania wysokiej jakości kodu w przypadku Design Systemu. Testy zapewniają, że komponenty działają zgodnie z oczekiwaniami i pozwalają szybko wykrywać regresje.

## Zarządzanie zależnościami

Regularne aktualizacje bibliotek oraz monitorowanie bezpieczeństwa zależności pomagają utrzymać projekt w dobrej kondycji i chronią przed tym, aby wasze komputery nie stały się koparkami bitcoinów 🪙

## Kontrola wersji

Dobrze jest stosować tzw. konwencje commitowania (np. [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)), co ułatwia śledzenie historii zmian i generowanie changelogów.
