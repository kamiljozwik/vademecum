---
title: CI/CD
description: ""
order: 30
extra_links:
  - title: CI/CD In 5 Minutes
    href: https://www.youtube.com/watch?v=42UP1fxi2SY
  - title: What is GitHub Actions?
    href: https://www.youtube.com/watch?v=URmeTqglS58
  - title: How GitHub Actions 10x my productivity
    href: https://www.youtube.com/watch?v=yfBtjLxn_6k
---

Dobrze skonfigurowany i przemyślany proces CI/CD (Continuous Integration / Continuous Deployment) ma istotne znaczenie dla efektywnego zarządzania projektem, automatyzacji testów i wdrażania nowych wersji oprogramowania.

### Continuous Integration (CI)

- Definicja: CI polega na regularnym łączeniu zmian kodu od różnych deweloperów do głównej gałęzi projektu. Automatyczne testy są (a przynajmniej powinny być 😉) uruchamiane przy każdej integracji, aby wykryć błędy na wczesnym etapie.
- Korzyści: Wczesne wykrywanie błędów, szybka weryfikacja poprawności kodu, zachowanie stabilności głównej gałęzi kodu.

### Continuous Deployment (CD)

- Definicja: CD automatyzuje proces wdrażania kodu na środowisko produkcyjne. Po przejściu wszystkich testów, zmiany są automatycznie (lub po ręcznej akceptacji) wdrażane.
- Korzyści: Szybsze dostarczanie nowych funkcji, mniejsze ryzyko błędów wdrożeniowych, ciągła aktualizacja aplikacji.

## GitHub Actions

[GitHub Actions](https://github.com/features/actions) to potężne (z dość szczodrym darmowym limitem) narzędzie do automatyzacji bezpośrednio na platformie GitHub. Umożliwia definiowanie zadań, które są wykonywane w odpowiedzi na zdarzenia w repozytorium, takie jak push, pull request, czy release.

### Zalety GitHub Actions:

- **Integracja z GitHub**: Bezproblemowa integracja z repozytoriami na GitHub.
- **Elastyczność**: Możliwość definiowania skomplikowanych `pipeline`-ów za pomocą plików YAML.
- **Marketplace**: Dostęp do tysięcy gotowych akcji w GitHub Marketplace, które można wykorzystać na swoje potrzeby.

## CircleCI

[CircleCI](https://circleci.com/) to popularne narzędzie do automatyzacji CI/CD, które oferuje zaawansowane funkcje i elastyczność w konfiguracji. Umożliwia łatwe definiowanie `pipeline`-ów za pomocą plików konfiguracyjnych i integrację z wieloma różnymi narzędziami i usługami.

### Zalety CircleCI:

- **Szybkość**: Wydajne budowanie i testowanie dzięki rozproszonym środowiskom.
- **Konfiguracja**: Intuicyjne pliki konfiguracyjne YAML.
- **Integracje**: Szeroka gama integracji z popularnymi narzędziami i usługami, takimi jak Docker, AWS, Google Cloud, i inne.

## Travis CI

[Travis CI](https://www.travis-ci.com/) to jedno z pierwszych narzędzi CI/CD, które zdobyło dużą popularność wśród projektów open source. Oferuje prostą konfigurację i integrację z GitHub oraz innymi repozytoriami

### Zalety Travis CI:

- **Łatwość użycia**: Prosta konfiguracja za pomocą plików YAML.
- **Wsparcie dla wielu języków**: Obsługa wielu języków programowania i środowisk.
- **Darmowe dla open source**: Bezpłatne plany dla projektów open source.

## Jenkins

[Jenkins](https://www.jenkins.io/) to otwarte oprogramowanie do automatyzacji CI/CD, które oferuje dużą elastyczność i rozszerzalność. Dzięki swojej modularnej architekturze i dużej liczbie wtyczek, `Jenkins` może być dostosowany do praktycznie każdego procesu CI/CD.

### Zalety Jenkins:

- **Elastyczność**: Możliwość dostosowania do różnych scenariuszy CI/CD dzięki bogatemu ekosystemowi wtyczek.
- **Open Source**: Otwarty kod źródłowy i duża społeczność wspierająca rozwój narzędzia.
- **Skalowalność**: Możliwość rozbudowy do obsługi dużych i złożonych projektów.

## GitLab CI/CD

[GitLab CI/CD](https://docs.gitlab.com/ee/ci/) to narzędzie do automatyzacji CI/CD zintegrowane z platformą GitLab

## Azure Pipelines

[Azure Pipelines](https://azure.microsoft.com/pl-pl/products/devops/pipelines) to narzędzie do CI/CD w ramach platformy [Azure DevOps](https://azure.microsoft.com/pl-pl/products/devops)

## Przykładowy workflow CI/CD

- Krok 1: Commit kodu do głównej gałęzi.
- Krok 2: Automatyczne uruchomienie testów jednostkowych (unit tests).
- Krok 3: Automatyczne uruchomienie testów integracyjnych.
- Krok 4: Budowanie paczki biblioteki komponentów.
- Krok 5: Publikacja paczki na npm (lub innym rejestrze).
- Krok 6: Wdrożenie zmian na środowisko produkcyjne.
