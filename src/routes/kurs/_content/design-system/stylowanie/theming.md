---
title: Theming
description: ""
order: 30
---

Theming (pozwolę sobie zostać przy nazwie anglojęzycznej 🙂) to kluczowy aspekt nowoczesnych systemów projektowych, który pozwala na łatwe zarządzanie wyglądem i spójnością aplikacji. Dzięki themingowi możemy zmieniać kolory, czcionki i inne właściwości stylów w całej aplikacji za pomocą zaledwie kilku zmian w jednym miejscu.

Theming umożliwia łatwą personalizację i dostosowanie aplikacji do różnych potrzeb użytkowników lub brandingu klienta. Używając jednego spójnego systemu themingowego, możemy szybko wprowadzać zmiany w wyglądzie aplikacji bez konieczności modyfikowania poszczególnych komponentów.

## Jak działa Theming?

Theming jest zazwyczaj implementowany przy użyciu bibliotek takich jak [styled-components](https://styled-components.com/docs/advanced) lub [emotion](https://emotion.sh/docs/theming). Te biblioteki pozwalają na definiowanie globalnych themów, które mogą być później używane przez poszczególne komponenty.

Większość bibliotek `CSS-in-JS` daje nam możliwość dość łatwej pracy z theme - [Chakra](https://v2.chakra-ui.com/docs/styled-system/customize-theme), [MUI](https://mui.com/material-ui/customization/theming/), [Mantine](https://mantine.dev/theming/theme-object/).

Kluczowymi elementami każdego tematu są:

- **Kolory**: Definiowanie palety kolorów, która będzie używana w całej aplikacji. Możemy zdefiniować kolory główne, pomocnicze, tła, tekstu itp.
- **Typografia**: Ustalenie czcionek, ich rozmiarów, grubości i stylów, które będą stosowane w różnych częściach aplikacji.
- **Spacing**: Zdefiniowanie odstępów, marginesów i paddingów, które zapewnią spójność wizualną.
- **Breakpoints**: Określenie breakpointów dla responsywnego designu, które pozwolą na dostosowanie stylów w zależności od rozmiaru ekranu.

## Praktyczne wskazówki

- **Modularność**: Utrzymuj różne `theme`-y w osobnych plikach, aby łatwo było je modyfikować i zarządzać nimi.
- **Konsekwencja**: Stosuj zdefiniowane zmienne konsekwentnie w całej aplikacji, aby zapewnić spójność wizualną i łatwość aktualizacji.
- **Personalizacja**: Rozważ dodanie opcji zmiany `theme`-u przez użytkownika (np. jasny / ciemny / szary), co pozwoli na jeszcze większą personalizację aplikacji.

Jeżeli wydaje Ci się, że w Twoim design systemie nie będziesz potrzebował więcej niż jednego `theme`-u to prawdopodobnie masz rację - wydaje Ci się 🙂 Wybranie i odpowiednie skonfigurowanie `theme`-ingu nie zajmuje dużo czasu w początkowym okresie budowania biblioteki komponentów a jesteśmy zabezpieczeni na przyszłość, gdy taka potrzeba "customizacji" jednak się pojawi.
