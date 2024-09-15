---
title: Design Tokens
description: ""
order: 20
extra_links:
  - title: Tech A Day 27 - Design Tokens
    href: https://www.youtube.com/watch?v=dMkYWwYmJB8
  - title: Difference Between Design Tokens and Design Variables
    href: https://blog.bitsrc.io/difference-between-design-tokens-and-design-variables-in-css-8809b7f3b5c8
  - title: CSS Variables in 100 Seconds
    href: https://www.youtube.com/watch?v=NtRmIp4eMjs
---

`Design Tokens` to podstawowe jednostki stylów, które definiują wygląd i zachowanie komponentów w Design Systemie. Pozwalają one na zdefiniowanie takich właściwości jak kolory, typografia, odstępy, rozmiary i wiele innych w sposób spójny i łatwy do zarządzania.

## Dlaczego warto używać Design Tokens?

1. **Spójność:** Używanie tych samych wartości dla stylów w całej aplikacji zapewnia spójny wygląd i odbiór.
2. **Łatwość zarządzania:** Aktualizacja jednego tokena automatycznie wpływa na wszystkie miejsca, w których jest używany, co ułatwia wprowadzanie zmian.
3. **Skalowalność:** Dzięki tokenom można łatwo dostosować stylowanie do różnych platform i urządzeń.

## Najlepsze praktyki

- **Nazewnictwo:** Używaj intuicyjnych i opisowych nazw dla tokenów, które jasno wskazują na ich przeznaczenie.
- **Hierarchia:** Organizuj tokeny w hierarchiczne struktury, np. `color.primary`, `color.secondary`, aby łatwiej było je zarządzać i odnajdywać.
- **Dokumentacja:** Dobrze udokumentowane tokeny ułatwiają pracę zespołowi i zapewniają, że wszyscy korzystają z tych samych wartości.

## Przechowywanie Design Tokens

- Najczęściej `Design Tokens` są przechowywane w plikach `JSON` lub `YAML`, co ułatwia ich integrację z narzędziami do budowania oraz systemami stylów, takimi jak `CSS-in-JS`.
- Tokeny możemy również dość łatwo przechowywać w formie zmiennych CSS ([custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*))
- W przypadku preprocesorów takich jak SASS, możemy [skorzystać ze zmiennych](https://sass-lang.com/documentation/variables/)
- W przypadku Tailwind CSS tokeny możemy przechowywać w ramach [konfiguracji theme](https://tailwindcss.com/docs/theme)
- Zdecydowana większość bibliotek CSS in JS również ma możliwość konfiguracji tokenów za pomocą obiektu theme (np. [Chakra](https://v2.chakra-ui.com/docs/styled-system/customize-theme))

Design tokens prawdopodobnie będą Ci przekazane przez Designera prawdopodobnie pracującego w Figmie, więc warto sprawdzić czy nie ma jakiegoś [odpowiadającego wam pluginu](https://www.figma.com/community/tag/design%20tokens/plugins) do przekazywania tych informacji. Dobrym wyborem wydaje się być [Tokens Studio for Figma](https://www.figma.com/community/plugin/843461159747178978/tokens-studio-for-figma-figma-tokens)

## Przykłady typowych tokenów

- **Kolory**: `color-primary`, `color-secondary`, `color-background`
- **Typografia**: `font-size-base`, `font-weight-bold`, `line-height`
- **Odstępy**: `spacing-small`, `spacing-medium`, `spacing-large`
- **Rozmiary**: `size-button-height`, `size-avatar-width`
- **Cienie**: `shadow-elevation-low`, `shadow-elevation-high`

```json
{
  "color": {
    "primary": "#007bff",
    "secondary": "#6c757d"
  },
  "spacing": {
    "small": "8px",
    "medium": "16px",
    "large": "32px"
  }
}
```

```js
import tokens from "./design-tokens.json";

const Button = styled.button`
  background-color: ${tokens.color.primary};
  padding: ${tokens.spacing.small} ${tokens.spacing.medium};
`;
```
