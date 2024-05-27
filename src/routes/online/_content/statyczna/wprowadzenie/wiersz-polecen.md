---
title: Wiersz poleceń
description: ''
order: 50
free: false
extra_links:
  - title: Windows Powershell vs Command Prompt
    href: https://www.youtube.com/watch?v=H0gwnFV_SFs
  - title: Introduction to Windows Terminal
    href: https://www.youtube.com/watch?v=JvHHgnOqW4w
  - title: Customize your Windows Terminal
    href: https://www.youtube.com/watch?v=K-hby0Op1dM
---

W kursie dotyczącym jedynie HTML i CSS niemal w ogóle nie będziemy korzystać z wierszy poleceń. Temat ten jest jednak na tyle podstawowym i ważnym zagadnieniem, że warto mieć podstawową wiedzę w tej dziedzinie. Dlatego też umieszczam w tym miejscu lekcję omawiającą wiersze poleceń w systemie Windows. Nie musisz jej przerabiać, aby móc kontynuować ten kurs, ale gorąco do tego zachęcam 🙂

## CMD

Terminal (wiersz poleceń) jest kolejnym narzędziem, które towarzyszy każdemu programiście w jego codziennej pracy. Korzystamy z niego głównie do uruchamiania aplikacji, testów, zarządzania systemem kontroli wersji (Git – do niego jeszcze wrócimy) oraz nawigowania pomiędzy katalogami. Tak jak już wspominałem, będziemy pracować głównie w środowisku Windows, więc skupimy się teraz na opcjach dostępnych na tym systemie.

Windows posiada wbudowany wiersz poleceń (cmd), z którym niemal każdym początkujący programista, informatyk czy sieciowiec miał już kiedyś do czynienia. Wiersz poleceń możemy uruchomić wyszukując aplikacji `cmd` w Windowsie.

CMD jest jak najbardziej w pełni funkcjonalne, jednakże praca z nim jest mało komfortowa i niezbyt wydajna, szczególnie gdy musimy uruchomić kilka aplikacji i przełączać się między oknami. Na potrzeby szybkiego uruchomienia skryptów jak najbardziej można pozostać tylko przy tym domyślnym wierszu poleceń, jednak żyjemy w XXI wieku i będziemy korzystać z nieco ciekawszych rozwiązań.

## Windows PowerShell

Windows PowerShell jest kolejnym narzędziem, które mamy dostępne w systemie bez żadnych dodatkowych instalacji. Jesteśmy na kursie frontend-u, więc nie będziemy rozwodzić się nad jego możliwościami. To, co powinniśmy wiedzieć na temat PowerShell, to fakt, iż jest on dużo bardziej rozwiniętym wierszem poleceń niż cmd. Posiada on dużo większą integrację z systemem operacyjnym oraz pozwala na tworzenie skryptów automatyzujących czynności wykonywane ręcznie w systemie operacyjnym. Dzięki temu PowerShell wykorzystywany jest głównie przez administratorów systemów oraz przydaje się często w przypadku tworzenia właśnie skryptów konfigurujących i uruchamiających środowiska developerskie lub całe aplikacje. PowerShell uruchamiamy podobnie jak `cmd`, wyszukjąc w Windowsie aplikacji `PowerShell`.

W przypadku tworzenia aplikacji frontend-owych PowerShell nie daje nam jakiejś znacznej przewagi niż domyślny wiersz poleceń. Jest on nieco lepiej przygotowany pod kątem kolorowania składni i tekstu na ekranie. Dzięki temu jest na pewno dużo czytelniejszy niż cmd i praca z nim może być dzięki temu wygodniejsza.

## Windows Terminal

Najnowszym i moim zdaniem najwygodniejszym obecnie rozwiązaniem jest skorzystanie z nowego produktu Microsoftu, jakim jest Windows Terminal. Nie jest to kolejny wiersz poleceń bądź rozszerzenie cmd lub PowerShell. Tym razem mamy do czynienia z narzędziem, które ułatwia oraz organizuje nam pracę z dwoma wspomnianymi już wierszami poleceń.

Windows Terminal można pobrać i zainstalować za pomocą aplikacji [Microsoft Store](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701?hl=pl-pl&gl=pl&activetab=pivot%3Aoverviewtab).

Z jednej aplikacji (właśnie z Windows Terminal) możemy uruchamiać nowe okna cmd oraz PowerShell w zakładkach a dzięki skrótom klawiszowym szybko przełączać się między nimi. Mamy również możliwość dostosowywać kolory, motywy, czcionki i wiele innych wizualnych aspektów naszego terminala. Wszystko po to, aby codzienna kilkugodzinna praca stawała się dla nas coraz przyjemniejsza.

<img alt="" src="/online/statyczna/img/wprowadzenie/terminal.png" />

Jak widać na załączonym wyżej obrazku, możemy teraz uporządkować wszystkie nasze karty w jednym miejscu i dzięki temu uniknąć frustracji związanej z niemożliwością znalezienia interesującego nas okna. Oprócz zakładek mamy również np. możliwość otwarcia dwóch lub więcej wierszy poleceń w trybie podzielonego okna, dzięki czemu nawet nie będziemy musieli się martwić przełączaniem zakładek.
