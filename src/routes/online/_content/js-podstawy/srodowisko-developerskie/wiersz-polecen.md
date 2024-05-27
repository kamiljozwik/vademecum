---
title: Wiersz poleceń
description: ''
order: 40
free: false
extra_links:
  - title: Command Line Crash Course For Beginners
    href: https://www.youtube.com/watch?v=uwAqEzhyjtw
  - title: 15+ Terminal Commands Every Developer Must Know
    href: https://www.youtube.com/watch?v=CV-ven_rxhw
---

## Podstawy CLI

Interfejs wiersza poleceń (CLI - Command Line Interface), lub po prostu "konsola", jest podstawowym narzędziem dla deweloperów, umożliwiającym efektywne zarządzanie systemem i projektami programistycznymi. W kontekście rozwoju aplikacji JavaScript na systemach Windows, CLI jest niezbędne dla wielu zadań, takich jak zarządzanie zależnościami, uruchamianie skryptów czy konfiguracja narzędzi deweloperskich.

## Dostępne opcje CLI na Windows

Na Windowsie możemy uruchomić wiesz poleceń na kilka sposobów:

- **Wiersz Poleceń (cmd.exe):** Klasyczny interfejs dostępny w Windows.
- **PowerShell:** Bardziej zaawansowany i elastyczny niż cmd.exe.
- **Bash za pośrednictwem Windows Subsystem for Linux (WSL):** Pozwala na uruchomienie środowiska Linux bezpośrednio w Windows, oferując dostęp do narzędzi typowych dla Linuxa.
- **Git Bash:** Bash dostępny wraz z instalacją Git.
- **Terminal w VS Code:** Terminal wbudowany w VS Code.
- **Windows Terminal:** Nowy [terminal Microsoftu](https://apps.microsoft.com/detail/windows-terminal/9N0DX20HK701?hl=pl-pl&gl=PL), który łączy w sobie wszystkie niemal wszystkie powyższe opcje. Sam z niego korzystam i polecam 👍.

## Podstawowe komendy CLI

- **`cd [ścieżka]`:** Zmiana bieżącego katalogu.
- **`dir`:** Wyświetlenie listy plików i folderów w bieżącym katalogu (w cmd.exe), `ls` w PowerShell i Bash.
- **`mkdir [nazwa]`:** Utworzenie nowego katalogu.
- **`del [nazwa_pliku]`:** Usunięcie pliku (w cmd.exe), `rm [nazwa_pliku]` w PowerShell i Bash.

## CLI i JavaScript

Wiersz poleceń przyda nam się również podczas pracy z JavaScriptem. Będziemy go używali głównie do tego, żeby uruchamiać skrypty JavaScript z poziomu konsoli (czyli bez przeglądarki).

Pamiętaj, że serwer to tylko bardzo mocny komputer. Mówiąc więc, że Node.js daje nam możliwość uruchamiania kodu JS na serwerze, oznacza to, że możemy ten kod uruchomić również bezpośrednio na laptopie czy PC.

Node.js jest również niezbędny do zarządzania zależnościami projektu, ale o tym wszystkim powiemy sobie w dalszej części kursu.
