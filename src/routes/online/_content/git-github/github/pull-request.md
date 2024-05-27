---
title: Pull Request
description: ''
order: 50
video: https://player.vimeo.com/video/502542609?h=b3a777fa83
video_length: '04:38'
free: false
extra_links:
  - title: GitHub Pull Request in 100 Seconds
    href: https://www.youtube.com/watch?v=8lGpZkjnkt4
---

Dopóki pracujemy samodzielnie nad własnym projektem, to zazwyczaj nie przejmujemy się jakoś mocno tworzeniem nowych branchy za każdym razem, gdy dodajemy nową funkcjonalność, bądź bardzo czytelną historią commitów. Zakładamy, że wiemy, co robiliśmy, co robimy i co chcemy robić. Jeżeli jest to projekt realizowany w ramach nauki bądź jakaś mała poboczna strona lub aplikacja, to nie jest to jakiś duży problem.

Sprawy mają się nieco inaczej, gdy zaczynamy pracować nad jakimś projektem w kilka osób. Wtedy już każdy pracuje na swoim własnym komputerze, ma swoje własne zadania do zrealizowania (czytaj: kod do napisania), a więc nie zawsze wszyscy będą wiedzieć, co nowego pojawiło się bądź co pojawi się w repozytorium. Do tego ludzie popełniają błędy, więc być może kod pisany przez innego programistę będzie nie do końca optymalny bądź całkowicie popsuje wszystko to, co do tej pory stworzyliśmy. W takim przypadku dobrze jest sprawdzać się nawzajem i regularnie kontrolować kod, który ma trafić do master brancha. W tym przypadku GitHub posiada bardzo dobre kontrolne narzędzie – pull request.

Wiemy już, iż posiadamy w naszym repo jeden główny branch – najczęściej nazywa się on master. To tam powinna być trzymana sprawdzona, stabilna, przetestowana, najnowsza, działająca wersja naszej aplikacji. To z mastera powinniśmy tworzyć nowe branche i do mastera powinny być mergowane wszystkie nowe funkcjonalności. I tutaj pojawia się pytanie – jak to w takim razie mergować? Znamy już komendę `git merge`, ale nie będziemy z niej korzystać w przypadku wprowadzania zmian do mastera. Gdybyśmy tak zrobili i następnie wysłali zmiany na serwer (`git push`), to nikt z zespołu tych zmian nie będzie mógł przejrzeć. Zamiast tego wypychamy na zdalny serwer tylko nasz branch i za pomocą GitHub tworzymy tzw. pull request, czyli zgłaszamy chęć zmergowania naszych zmian do mastera. Dopiero gdy pozostali członkowie zespołu przejrzą pull request i go zaakceptują, wtedy GitHub automatycznie wykona merge gałęzi do mastera. Dzięki temu wszyscy wiedzą o nowych rzeczach, które pojawią się niedługo w masterze, a także jest szansa na wyłapanie potencjalnych błędów, które mogłyby trafić do głównej gałęzi repozytorium.

Sama nazwa pull request może być trochę myląca na samym początku. Pull może sugerować, iż jest to czynność, za pomocą której to my będziemy coś pobierać (pull – ang: ciągnąć). Należy to jednak odczytywać bardziej jako żądanie dociągnięcia nowych zmian (stworzonych przez programistę na swoim oddzielnym branchu) do mastera. Gwarantuję, iż po kilku wykonanych pull requestach wszystko będzie jasne.

Pamiętajmy więc, że w przypadku gdy nad jedną aplikację pracuje kilka osób, nigdy nie robimy zmian bezpośrednio na masterze oraz nie mergujemy swoich własnych branchy bezpośrednio do mastera. Jest to bardzo zła praktyka.
