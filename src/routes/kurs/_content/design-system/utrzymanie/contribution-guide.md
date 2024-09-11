---
title: Kontrybucja
description: ""
order: 20
extra_links:
  - title: Setting guidelines for repository contributors
    href: https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors
  - title: Contributing Guidelines Example
    href: https://github.com/jessesquires/.github/blob/main/CONTRIBUTING.md
---

Każda dobrze utrzymywana biblioteka komponentów powinna posiadać jasny i szczegółowy przewodnik dla kontrybutorów. Taki przewodnik pomaga utrzymać spójność kodu, ułatwia współpracę w zespole i jest nieocenionym źródłem wiedzy dla wszystkich nowych developerów dołączających do zespołu.

Przewodnik taki:

- Ułatwia nowym kontrybutorom rozpoczęcie pracy nad projektem.
- Zapewnia spójność w kodzie poprzez określenie standardów kodowania.
- Redukuje liczbę błędów i konfliktów dzięki jasnym wytycznym dotyczącym pracy z repozytorium.

**Co powinniśmy umieścić w takim dokumencie?**

1. **Wprowadzenie do projektu**

   - Krótkie omówienie celu naszego Design Systemu i główne funkcjonalności.
   - Informacje, jak klonować repozytorium i uruchomić projekt lokalnie.

2. **Standardy kodowania**

   - Styl kodowania, np. korzystanie z `Prettier` i `ESLint`.
   - Konwencje nazewnicze dla plików, komponentów i funkcji.

3. **Struktura projektu**

   - Opis struktury katalogów w projekcie.
   - Gdzie znajdują się kluczowe pliki i foldery, takie jak komponenty, style, testy i dokumentacja.

4. **Praca z `Git`**

   - Wytyczne dotyczące tworzenia gałęzi (`branching`), np. `feature/`, `bugfix/`, `hotfix/`.
   - Zalecenia dotyczące tworzenia `commit`ów, (np. używanie konkretnej konwencji tytułów, opisów itp.).

5. **Testowanie**

   - Wytyczne dotyczące pisania testów jednostkowych i integracyjnych.
   - Narzędzia używane do testowania, np. `Jest`, `React Testing Library`.

6. **Proces `Pull Request` (PR)**

   - Jak tworzyć `Pull Requesty`.
   - Szablon PR, który należy wypełnić (np. co zostało zmienione, dlaczego, jak przetestować?).
   - Kryteria akceptacji PR (np. minimalna liczba recenzji, przejście testów CI/CD, pokrycie testami).

7. **Wersjonowanie i wydania**

   - Jak wersjonować zmiany zgodnie z [Semantic Versioning](https://semver.org/).
   - Proces tworzenia nowych wydań (releases).

8. **Komunikacja i wsparcie**
   - Główne kanały komunikacji w zespole, np. Slack, e-mail.
   - Jak zadawać pytania i gdzie szukać pomocy.

**Przykład struktury przewodnika dla kontrybutorów:**

```
CONTRIBUTING.md
  - Wprowadzenie
  - Instalacja i uruchomienie
  - Standardy kodowania
  - Struktura projektu
  - Praca z Git
  - Testowanie
  - Tworzenie Pull Requestów
  - Wersjonowanie i wydania
  - Komunikacja i wsparcie
```

Pamiętaj, że im więcej czasu poświęcisz na stworzenie porządnego przewodnika, tym więcej później go odzyskasz w trakcie dołączania nowych osób do projektu.
