---
title: Wprowadzenie
description: ""
order: 10
extra_links:
  - title: Unstyled Component Libraries Are A Game Changer
    href: https://www.youtube.com/watch?v=yn6vFCRkC3c
---

Komponenty typu `Headless UI` dostarczają jedynie logikę i funkcjonalność, bez żadnych gotowych stylów ani domyślnego wyglądu. Pozostawiają one pełną kontrolę nad ich prezentacją w rękach dewelopera.

Skorzystanie z komponentów typu Headless w naszym design systemie daje nam sporą elastyczność w ich wykorzystaniu.

## Dlaczego warto korzystać z komponentów Headless?

1. **Elastyczność**: Możesz z łatwością dostosować każdy aspekt wyglądu komponentów do wymagań swojego projektu, bez konieczności nadpisywania stylów lub zmiany istniejących struktur.
2. **Re-używalność**: `Headless components` można wykorzystać w różnych projektach, niezależnie od stylu, dzięki czemu są bardziej uniwersalne.
3. **Skalowalność**: Gdy Twoja aplikacja rośnie, łatwiej jest zarządzać i aktualizować komponenty, które są oddzielone od ich stylów.
4. **Testowalność**: Testowanie logiki oddzielnie od warstwy wizualnej upraszcza proces tworzenia testów jednostkowych.

## Jak działają komponenty Headless UI?

1. **Logika oddzielona od prezentacji**: `Headless components` dostarczają tylko logikę - na przykład zarządzanie stanem rozwinięcia/zwinięcia w przypadku `Dropdown`.
2. **Zwiększona kontrola**: Ty decydujesz, jak wygląda komponent, jak jest stylizowany i jak się zachowuje wizualnie. Możesz użyć dowolnego frameworka lub napisać swój własny CSS.
3. **Integracja z istniejącymi systemami**: Dzięki temu, że `headless components` są tak elastyczne, łatwo integrują się z istniejącymi bibliotekami i stylami w Twoim projekcie.

## Zalety i wady

✅ **Zalety**

- Zapewnia kompromis między elastycznością i re-używalnością.
- Mniej kodu do napisania.
- Umożliwia łatwe wdrożenie własnego stylu i motywów.
- Z gotowych bibliotek możemy wybierać i używać tylko tych komponentów, których potrzebujemy.
- Dobrze współgra z metodologią Atomic Design, pozwalając budować Design System z podstawowych bloków.

🚫 **Wady**

- Może wymagać nauki nowych paradygmatów i bibliotek.
- Wymaga więcej czasu i wysiłku na stylizację i implementację.
- Może wymagać zależności od zewnętrznej biblioteki.

`Headless UI` jest tylko koncepcją tworzenia bardzo elastycznych komponentów bez ingerencji w ich wygląd. Możemy takie komponenty zbudować samemu, ale oczywiście mamy już całkiem sporo fajnych rozwiązań open-source dostępnych na rynku i to na nich skupimy się w następnej lekcji.
