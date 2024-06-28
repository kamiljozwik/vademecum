---
title: Git Hooks
description: ""
order: 40
extra_links:
  - title: Podaj tytuł...
    href: Podaj link...
---

`Git hooks` to skrypty, które są uruchamiane w odpowiedzi na określone zdarzenia w systemie kontroli wersji `Git`. Pozwalają one na automatyzację różnych zadań, takich jak sprawdzanie jakości kodu, uruchamianie testów, formatowanie kodu i wiele innych. W tej lekcji dowiesz się, jak korzystać z `Git hooks` do utrzymania wysokiej jakości kodu i automatyzacji procesów w projekcie.

## Czym są `Git hooks`?

`Git hooks` to skrypty, które można uruchamiać na różnych etapach cyklu życia `Git`. Można je konfigurować lokalnie na poziomie repozytorium, aby automatycznie wykonywały określone zadania podczas operacji `Git`.

### Rodzaje `Git hooks`:

- **Pre-commit hook**: Uruchamiany przed zapisaniem `commit`, umożliwia sprawdzenie kodu pod kątem błędów, uruchomienie testów lub formatowanie kodu.
- **Commit-msg hook**: Uruchamiany po wpisaniu komunikatu `commit`, pozwala na weryfikację formatowania i zgodności komunikatu z ustalonymi konwencjami.
- **Pre-push hook**: Uruchamiany przed wysłaniem zmian do zdalnego repozytorium, umożliwia uruchomienie testów i weryfikację jakości kodu.

## Zastosowanie `Git hooks` w projekcie

1. **Zapewnienie jakości kodu**:
   - `Git hooks` mogą być używane do automatycznego sprawdzania jakości kodu przed zapisaniem `commit`. Na przykład, można uruchamiać linters, takie jak `ESLint`, aby upewnić się, że kod spełnia ustalone standardy jakości.
2. **Automatyzacja testów**:

   - Uruchamianie testów jednostkowych i integracyjnych przed zapisaniem `commit` lub wysłaniem zmian do zdalnego repozytorium pozwala na szybkie wykrycie błędów i problemów.

3. **Formatowanie kodu**:

   - `Git hooks` mogą automatycznie formatować kod za pomocą narzędzi takich jak `Prettier`, zapewniając spójność stylu kodowania w całym projekcie.

4. **Weryfikacja komunikatów `commit`**:
   - `Git hooks` mogą sprawdzać, czy komunikaty `commit` są zgodne z ustalonymi konwencjami, takimi jak `Conventional Commits`, co ułatwia późniejsze zarządzanie historią zmian i automatyzację wersjonowania.

## Konfiguracja i zarządzanie `Git hooks`

- **Lokalne vs globalne `Git hooks`**: `Git hooks` można konfigurować lokalnie na poziomie repozytorium, co pozwala na dostosowanie skryptów do specyficznych potrzeb projektu. Można również skonfigurować globalne `Git hooks`, które będą stosowane do wszystkich repozytoriów na danym komputerze.
- **Automatyzacja za pomocą narzędzi**: Narzędzia takie jak `Husky` ułatwiają zarządzanie `Git hooks` w projekcie, umożliwiając łatwą konfigurację i integrację z innymi narzędziami do kontroli jakości kodu.

## Najlepsze praktyki

- **Dokumentowanie `Git hooks`**: Upewnij się, że wszyscy członkowie zespołu są świadomi, jakie `Git hooks` są używane w projekcie i jakie zadania są automatyzowane. Dokumentacja powinna zawierać informacje o celach i konfiguracji poszczególnych `Git hooks`.
- **Regularne aktualizacje**: Regularnie przeglądaj i aktualizuj `Git hooks`, aby dostosować je do zmieniających się potrzeb projektu i zapewnić ich skuteczność.
- **Testowanie `Git hooks`**: Przed wdrożeniem nowych `Git hooks`, przetestuj je, aby upewnić się, że działają zgodnie z oczekiwaniami i nie powodują nieprzewidzianych problemów.

Używanie `Git hooks` jest potężnym sposobem na automatyzację zadań związanych z kontrolą jakości kodu i procesami rozwoju. W tej lekcji omówiliśmy, czym są `Git hooks`, jak mogą być używane w projekcie oraz jakie są najlepsze praktyki ich stosowania. Teraz jesteś gotowy do wykorzystania `Git hooks` w swoim projekcie, aby automatyzować zadania i utrzymywać wysoki standard jakości kodu.
