---
title: Rozgałęzienia
description: ""
order: 80
video: https://player.vimeo.com/video/502541733?h=30a69dc1fe
video_length: "05:54"
free: false
extra_links:
  - title: Git Branches Tutorial
    href: https://www.youtube.com/watch?v=e2IbNHi4uCI
---

Tworzenie rozgałęzień w Git jest bardzo proste. Nie ma tutaj opcji znacznego popsucia repozytorium, bądź usunięcia kodu. Gałąź można traktować jak nowy folder, który stworzyliśmy sobie po to, aby na nim kontynuować pracę i w razie czego mieć też pod ręką oryginalną wersję plików. Pracując na jednej gałęzi (ang. branch), nie zmieniamy niczego w innych gałęziach. Gałęzie są od siebie całkowicie niezależne.

To, co mamy w Git, a nie mamy w przypadku zwykłych folderów to automatyczne łączenie zmian. W przypadku zwykłych folderów musielibyśmy ręcznie kopiować zmiany bądź nowe pliki z folderu roboczego do folderu głównego. Tutaj Git robi to automatycznie za nas. Wszystko to zostało dokładnie pokazane w lekcji video.

## Master branch

Do tej pory wszystkie zmiany oraz commity wykonywaliśmy na jednej, głównej gałęzi. Jest to jak najbardziej akceptowalne, jeżeli pracujemy samodzielnie nad jakimś małym projektem. Jednak w przypadku gdy aplikacja jest rozwijana przez grupę programistów, wtedy bardzo dobrym i zalecanym podejściem jest praca na branchach roboczych (nazywanych również feature branchami) i niewprowadzanie zmian bezpośrednio na branchu master (branchu głównym). Zanim efekty naszej pracy znajdą się w masterze, powinny zostać dokładnie zweryfikowane. Nowe branche robocze w zdecydowanej większości są tworzone z gałęzi głównej oraz gałąź ta powinna trzymać aktualny, przetestowany i poprawnie działający kod aplikacji. Z tego powodu należy zwracać szczególną uwagę co do takiego brancha trafia.

## HEAD

Mówiąc o branchach należy wspomnieć jeszcze dwa słowa o wskaźniku HEAD. Będzie on widoczny w wierszu poleceń np. po wykonaniu polecenia `git log --oneline`:

<img src="/kurs/git-github/img/git/head.png" alt="" />

Na podstawowym poziomie znajomości Gita wystarczy nam informacja, iż w ten sposób Git wskazuje, na jakim branchu aktualnie się znajduje.

### Komendy, które poznany w tej lekcji:

- **git branch** – stworzenie bądź usunięcie brancha.
- **git checkout -b** – stworzenie i automatyczna zmiana brancha.
