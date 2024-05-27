---
title: Wstęp
description: ''
order: 10
free: false
extra_links:
  - title: Git Explained in 100 Seconds
    href: https://www.youtube.com/watch?v=hwP7WQkmECE
---

<img src="/online/git-github/img/git/gitlogo.png" alt="" />

Na samym początku od razu powiem, że Git nie jest językiem programowania. Jest to tylko narzędzie wspomagające programistów. Przy czym słowo “wspomagające” jest chyba niewystarczające, gdyż bez Gita współczesny development praktycznie by nie istniał. Gdy zaczniemy sobie googlować czym jest Git, trafimy na określenie rozproszony system kontroli wersji. Brzmi ładnie, ale co to w ogóle znaczy?

W rzeczywistości jest to łatwiejsze, niż może się początkowo wydawać. Spróbujmy rozbić sobie powyższą definicję na pojedyncze części:

- **Rozproszony**, czyli może być używany przez wiele osób na świecie na ich własnych komputerach. Nie jest wymagane ciągłe podłączenie do jakiegoś serwera, posiadanie specjalnego systemu operacyjnego czy sprzętu. Każdy programista będący częścią zespołu tworzącego jakąś stronę bądź aplikację ma zainstalowanego na swoim komputerze swojego własnego Gita.
- **System** – jak można się domyślić po poprzednim punkcie, Git jest zainstalowany w naszym systemie operacyjnym, a więc musi być swego rodzaju aplikacją. Sam Git nie jest aplikacją okienkową, do jakich przyzwyczaił nas Windows, a aplikacją konsolową. To znaczy, że będziemy obsługiwać go, korzystając z wiersza poleceń.
- **Kontroli**, a więc będziemy mogli coś kontrolować. Tym czymś będzie oczywiście nasz kod. Czy zmiany wprowadzone przez naszego kolegę z zespołu na pewno są wykonane poprawnie, czy nie popsuje to naszej aplikacji, czy może dwóch programistów nie wprowadziło różnych zmian w tym samym pliku? Mamy kontrolę, a więc będziemy to sprawdzać.
- **Wersji** – kto z nas nie tworzył kiedyś folderów z nazwami Projekt_v1, Projekt_v2, Projekt_ok, Projekt_final niech pierwszy rzuci klawiaturą. Wersjonowanie (czyli tworzenie kolejnych wersji np. projektu) to jeden z głównych powodów, dla których powstał Git. O ile kilka arkuszy Excela damy radę tak utrzymać z naszymi współpracownikami z biura, o tyle pliki tworzące system operacyjny, nad którym pracuje ok. 100 osób z kilku różnych krajów – tu może być już ciężko.

Pod względem wersjonowania Git po prostu błyszczy. Możliwość tworzenia eksperymentalnych funkcjonalności bez ingerowania w działający kod, automatyczne łączenie zmian wprowadzonych przez wiele osób w jednym pliku, łatwe przywracanie poprzednich wersji plików – i wszystko to za pomocą kilku prostych komend w wierszu poleceń. Dzięki temu Git obecnie jest standardem, a nie tylko dodatkiem.
