---
title: Git Hooks
description: ""
order: 40
extra_links:
  - title: What are GitHooks? Explained in 5 minutes
    href: https://www.youtube.com/watch?v=1OFiiPretCM
---

Git Hooks to narzędzie pozwalające na automatyzację zadań w repozytorium git. Działają jak skrypty, które wykonują się w określonych momentach cyklu życia commitów, pushów i innych operacji. Dzięki nim możesz wprowadzić dodatkowe zabezpieczenia, automatyczne formatowanie kodu czy uruchamianie testów przed zmergowaniem zmian.

## Najpopularniejsze `git hooks`:

- **pre-commit**: Uruchamiany przed zapisaniem `commita`, umożliwia sprawdzenie kodu pod kątem błędów, uruchomienie testów lub formatowanie kodu.
- **commit-msg**: Uruchamiany po wpisaniu komunikatu `commit`, pozwala na weryfikację formatowania i zgodności komunikatu z ustalonymi konwencjami.
- **pre-push**: Uruchamiany przed wysłaniem zmian do zdalnego repozytorium, umożliwia uruchomienie testów i weryfikację jakości kodu.

W kontekście bibliotek komponentów, `git hooks` mogą być używane do automatyzacji takich działań jak:

1. **Formatowanie kodu** - Za pomocą `pre-commit` hooka możesz uruchamiać narzędzia takie jak `Prettier` czy `ESLint`, aby upewnić się, że kod zawsze jest sformatowany zgodnie z ustalonym stylem.
2. **Testy jednostkowe** - Przy każdym commicie (hook `pre-commit`) lub przed pushem (`pre-push`), możesz uruchomić testy jednostkowe za pomocą `Jest` lub innego frameworka testowego.
3. **Sprawdzanie typów** - Jeśli w bibliotece komponentów korzystasz z TypeScript, hooki mogą uruchamiać kompilator TypeScript (`tsc`).
4. **Kontrola commit message** - Dzięki hookowi `commit-msg` możesz sprawdzić, czy wiadomości commitów spełniają określone reguły, np. zgodność z konwencją `Conventional Commits`. Może to być szczególnie przydatne, jeśli korzystasz z narzędzi takich jak `semantic-release` do automatyzacji wersjonowania i publikacji.

Aby zautomatyzować zarządzanie `git hooks` w projekcie, warto wykorzystać narzędzie takie jak [husky](https://github.com/typicode/husky), które upraszcza tworzenie i zarządzanie hookami w projekcie `git`. Dzięki `Husky`, zamiast ręcznie tworzyć skrypty w folderze `.git/hooks`, możesz zarządzać hookami bezpośrednio w pliku `package.json`, co sprawia, że ich konfiguracja jest znacznie łatwiejsza.

Upewnij się również, że wszyscy członkowie zespołu są świadomi, jakie `git hooks` są używane w projekcie i jakie zadania są automatyzowane. Dokumentacja powinna zawierać informacje o celach i konfiguracji poszczególnych `hooków`.
