---
title: Tworzenie repozytorium
description: ''
order: 50
video: https://player.vimeo.com/video/502542132?h=8d3e24c573
video_length: '04:13'
free: true
extra_links:
  - title: How to create a local Git repo ('Git init' and how it works)
    href: https://www.youtube.com/watch?v=yUBCXIUs8Aw
---

W tej lekcji po raz pierwszy dodamy Gita do projektu i stworzymy lokalne repozytorium, w którym będziemy mogli commitować nasze zmiany. Dwa słowa na temat tego, czym jest repozytorium. Tylko dwa, ponieważ sprawa nie jest specjalnie skomplikowana. Jak pamiętamy z lekcji wprowadzającej, po dodaniu Gita do projektu możemy zacząć tworzyć gałęzie i dodawać commity. Repozytorium jest po prostu miejscem, w którym trzymamy informację o wszystkich tych commitach i gałęziach. Tworząc commity możemy edytować oraz dodawać pliki – zarówno tekstowe (kod), jak i grafikę, wideo itp. Tym samym repozytorium będzie posiadało również wszystkie te pliki – zarówno ich najbardziej aktualne wersje, jak i pełną historię commitów (czerwone kropki na grafice w lekcji wprowadzającej).

Tworząc repozytorium na naszym komputerze, tylko my mamy do niego dostęp i tylko my możemy przeglądać historię zmian. Gdy nasze repozytorium umieścimy na serwerze w Internecie, wtedy dostęp do tego repozytorium będzie możliwy również dla innych programistów. Wtedy taki programista może skopiować na swój komputer nasze repozytorium i będzie mógł przejrzeć wszystkie gałęzie oraz wszystkie zmiany, jakie zrobiliśmy od pierwszego wykonanego commita. Będzie mógł również dodać do niego swoje własne commity i tym samym dalej powiększać repozytorium.

Tym serwerem w Internecie najczęściej jest GitHub. I warto pamiętać o tym, że wszystko, co zostało commitowane do repozytorium zostanie zapamiętane w historii i każda osoba mająca dostęp do repo (skrócona nazwa repozytorium, często używana w mowie potocznej) może takie zmiany podejrzeć. Są oczywiście pewne sposoby na usunięcie niechcianych commitów z historii, ale nie jest to trywialne zadanie i w tym przypadku lepiej zapobiegać niż leczyć. Także dodanie ważnych haseł w jednym commicie i usunięcie ich w kolejnych spowoduje, że w aktualnej wersji pliku ich nie będzie, ale wracając do odpowiedniego commita w historii nie będzie żadnych problemów z ich odczytaniem.

## Komendy, które poznany w tej lekcji:

**git init** – utworzenie repozytorium wewnątrz folderu.
