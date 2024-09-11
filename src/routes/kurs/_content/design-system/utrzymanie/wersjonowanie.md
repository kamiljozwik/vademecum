---
title: Wersjonowanie
description: ""
order: 30
extra_links:
  - title: What is Semantic Versioning? (semver)
    href: https://www.youtube.com/watch?v=97i9pOa2EyE
  - title: How to Version and Changelog your projects automatically to GitHub using Release It
    href: https://www.youtube.com/watch?v=BbdFfvZNWNw
---

Wersjonowanie `Design Systemu` jest ważnym elementem utrzymania spójności i porządku w projekcie, zwłaszcza gdy z systemu korzysta wiele zespołów i projektów. Właściwe zarządzanie wersjami pomaga śledzić zmiany, zapewnia kompatybilność oraz ułatwia wdrażanie poprawek i nowych funkcji.

## Kilka najważniejszych zasad:

1. **Semantyczne wersjonowanie ([semver](https://semver.org/))**

   Stosuj zasady semantycznego wersjonowania (`major.minor.patch`):

   - **Major (główna wersja)**: wprowadza zmiany, które mogą być niekompatybilne wstecz (wprowadzanie _breaking changes_).
   - **Minor (wersja pomocnicza)**: dodaje nowe funkcje, które są wstecznie kompatybilne.
   - **Patch**: wprowadza poprawki błędów i optymalizacje, które nie zmieniają funkcjonalności.

2. **Zarządzanie zależnościami**

   Upewnij się, że każdy projekt korzystający z `Design System` ma dobrze zdefiniowane wersje zależności w plikach takich jak `package.json`, co pozwoli uniknąć nieprzewidzianych problemów z kompatybilnością.

3. **Stabilne API komponentów**

   Staraj się zachować stabilność API komponentów w kolejnych wersjach. Jeśli konieczne są zmiany w komponentach, staraj się dodawać nowe funkcjonalności w sposób, który nie wpływa na dotychczasowe użycie.

4. **Komunikacja zmian**

   Każda nowa wersja powinna być dokładnie opisana w `release notes`, aby wszyscy użytkownicy systemu mogli zrozumieć, jakie zmiany zostały wprowadzone, czy są jakieś potencjalne problemy z kompatybilnością oraz co zostało naprawione.

5. **Usuwanie funkcjonalności**

   Jeśli planujesz usunąć jakieś funkcje lub komponenty, zawsze oznaczaj je jako przestarzałe (`deprecated`) w poprzedniej wersji, zanim usuniesz je w przyszłej wersji `major`. Daje to zespołom czas na adaptację i unikanie nagłych problemów.

6. **Automatyzacja wersjonowania**

   Stosuj narzędzia do automatycznego zarządzania wersjami, takie jak [semantic-release](https://github.com/semantic-release/semantic-release) lub [release-it](https://github.com/release-it/release-it), które na podstawie commitów i zmian w kodzie mogą automatycznie tworzyć nowe wersje, generować odpowiednie tagi i dokumentację.

7. **Testowanie zgodności**

   Każda nowa wersja `Design Systemu` powinna być dokładnie przetestowana pod kątem kompatybilności z istniejącymi aplikacjami. Warto wdrożyć mechanizmy automatycznego testowania, które będą sprawdzały, czy zmiany nie powodują problemów z istniejącym kodem.

8. **Dokumentacja zmian**

   Oprócz `release notes` warto prowadzić szczegółową dokumentację zmian (np. `CHANGELOG.md`), w której opisane są wszystkie nowe funkcje, zmiany w API, usunięte funkcje, poprawki błędów oraz inne istotne informacje.

9. **Tagowanie w systemie kontroli wersji**

   Każda wersja `Design Systemu` powinna być oznaczona odpowiednim tagiem w systemie kontroli wersji (Np. `v1.2.3` dla wydania `1.2.3`), co ułatwi śledzenie zmian, przywracanie poprzednich wersji oraz zarządzanie wersjami w zautomatyzowanych procesach.
