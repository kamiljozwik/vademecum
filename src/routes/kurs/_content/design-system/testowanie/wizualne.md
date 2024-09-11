---
title: Testy wizualne
description: ""
order: 20
extra_links:
  - title: Awesome Visual Regression Testing
    href: https://github.com/mojoaxel/awesome-regression-testing
  - title: I didn't know snapshot testing was a thing
    href: https://www.youtube.com/watch?v=jfsgSiMwt3U
  - title: How to do visual regression testing using Playwright
    href: https://www.youtube.com/watch?v=Y1eTK-j66PU
---

Poza klasycznymi testami wymienionymi w poprzedniej lekcji, w kontekście UI istnieją jeszcze dwa popularne podejścia do testowania: _snapshot testing_ i _visual regression testing_.

## Snapshot Testing 📸

Testowanie to polega na przechwytywaniu i porównywaniu "migawki" (`snapshot`) renderowanego komponentu z wcześniej zapisaną wersją. Tymi snapshotami nie są tutaj grafiki, tylko cały kod HTML stojący za komponentem (kod HTML, który znajdzie się w przeglądarce). Jest to szybki sposób na upewnienie się, że zmiany w kodzie nie wprowadziły niezamierzonych modyfikacji w wyglądzie i strukturze komponentu. Jak wygląda flow takiego testowania?

1. **Tworzenie snapshotów**: Podczas pierwszego uruchomienia testu tworzone są snapshoty dla każdego testowanego komponentu.
2. **Porównywanie snapshotów**: Przy kolejnych uruchomieniach testów, nowe snapshoty są porównywane z zapisanymi wcześniej. Jeśli są różnice, test nie przechodzi.
3. **Aktualizowanie snapshotów**: Jeśli zmiany są zamierzone, snapshoty można zaktualizować, aby odzwierciedlały nowy wygląd komponentów.

Zalety testowania migawkowego:

- Szybkie i łatwe do wdrożenia.
- Automatycznie wykrywa niezamierzone zmiany w wyglądzie komponentów.

Wady:

- Czasem może prowadzić do fałszywych alarmów, gdy nieistotne zmiany wprowadzają różnice w snapshotach.
- Nie zawsze wychwytuje subtelne wizualne regresje.
- Częste zmiany w komponentach mogą doprowadzić do tego, że developer przyzwyczajony do tego, że często aktualizuje snapshoty, "z automatu" będzie aktualizował również te snapshoty, które zawierają regresję.

## Visual Regression Testing 👀

Wizualne testowanie regresyjne idzie krok dalej niż testowanie "migawkowe". Zamiast porównywać kod renderowanego komponentu, porównuje zrzuty ekranu (`screenshots`) komponentów. Dzięki temu można wykryć nawet najmniejsze wizualne różnice.

1. **Tworzenie zrzutów ekranu**: Podczas pierwszego uruchomienia testów, dla każdego komponentu tworzony jest zrzut ekranu.
2. **Porównywanie zrzutów ekranu**: Nowe zrzuty ekranu są porównywane z zapisanymi wcześniej wersjami. Narzędzia do wizualnego testowania regresyjnego zazwyczaj pokazują różnice, co ułatwia ich identyfikację.
3. **Raportowanie różnic**: W przypadku wykrycia różnic, generowane są raporty z podglądem zmian, co ułatwia decyzję, czy zmiany są zamierzone, czy nie.

Zalety wizualnego testowania regresyjnego:

- Dokładniejsze niż testowanie snapshotów.
- Wykrywa subtelne wizualne zmiany, które mogą być trudne do zauważenia.

Wady:

- Zajmuje więcej czasu niż testowanie snapshotów.
- Może wymagać więcej zasobów do uruchamiania i porównywania zrzutów ekranu.

## Narzędzia

Kilka popularnych narzędzi, które warto znać:

- `Jest` z dodatkiem [react-test-renderer](https://www.npmjs.com/package/react-test-renderer) lub [jest-image-snapshot](https://github.com/americanexpress/jest-image-snapshot). Sprawdź [docs](https://jestjs.io/docs/snapshot-testing).
- `Storybook` z dodatkiem [StoryShots](https://storybook.js.org/addons/@storybook/addon-storyshots).
- `Percy` lub `Chromatic` dla zaawansowanego wizualnego testowania regresyjnego. Płatne z darmowym limitem.
