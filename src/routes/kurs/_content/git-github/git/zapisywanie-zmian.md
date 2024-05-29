---
title: Zapisywanie zmian
description: ''
order: 60
video: https://player.vimeo.com/video/502541838?h=8002fc1c47
video_length: '11:33'
free: true
extra_links:
  - title: What are Git commits and how do they work?
    href: https://www.youtube.com/watch?v=zXlNqCioxBY
  - title: Making Commits
    href: https://www.youtube.com/watch?v=Fhgga2s_RmM
---

W tej lekcji dowiemy się jak możemy commitować nowe oraz edytowane pliki. Ważna rzecz, o której należy wiedzieć, to tzw. poczekalnia (ang. staging area, ciężko znaleźć odpowiednik polski w tym przypadku). Zanim będziemy mogli wykonać commit z naszymi zmianami, musimy wybrać, które pliki z tych edytowanych przez nas chcemy umieścić w commicie. Pliki takie trafiają do wspomnianej już poczekalni i gdy wywołamy odpowiednią komendę odpowiedzialną za commit, tylko pliki z poczekalni zostaną w nim uwzględnione.

Są dwa główne powody, dla których taki mechanizm występuje w Git:

- jest to swego rodzaju dodatkowe zabezpieczenie przed przypadkowym commitem,
- możemy podzielić duże zmiany na małe commity – jeżeli dokonaliśmy zmian w kilku miejscach naszej aplikacji, możemy najpierw dodać do poczekalni pliki z jednego miejsca, zrobić commit z odpowiednią nazwą, następnie dodać do poczekalni pozostałe pliki i zrobić kolejny commit opisujący zmiany tylko w tym miejscu. Dzięki temu nasza historia będzie bardziej czytelna i łatwiejsza w przeglądaniu.

W dużym więc skrócie – poczekalnię (staging area) możemy traktować jako tymczasowe miejsce, w którym przechowujemy te pliki, które edytowaliśmy bądź dopiero co stworzyliśmy i zamierzamy je uwzględnić w najbliższym commicie. Wszystkie inne pliki, nawet jeżeli zostały przez nas zmienione, ale nie są umieszczone w poczekalni, nie zostaną zapisane w repozytorium.

## Szybki commit

Jedną z niepokazanych w materiale wideo wersji commita jest komenda `git commit -a`. Jest to komenda, która może nieco przyśpieszyć naszą pracę, ponieważ flaga `-a` oznacza “umieść w tym commicie wszystko, co do tej pory edytowałem, nawet jeżeli nie jest w poczekalni”. Słowem kluczem jest tutaj “edytowałem”. Jeżeli podczas pracy stworzyliśmy nowy plik i nie dodaliśmy go samodzielnie do poczekalni, to nie zostanie on uwzględniony. Tak więc korzystając tylko z `commit -a` łatwo taki plik przegapić. Jeżeli jednak jesteśmy pewni, że jedynie edytowaliśmy pliki, możemy śmiało używać tej komendy i commitować nieco szybciej.

### Komendy, które poznany w tej lekcji:

- **git status** – aktualny stan repozytorium. Używamy głównie w celu sprawdzenia które pliki zostaną umieszczone w commicie.
- **git add** – dodanie pliku lub plików do poczekalni w celu uwzględnienia ich w najbliższym commicie.
- **git rm --cached** – usunięcie pliku lub plików z poczekalni. Pliki te nie zostaną umieszczone w commicie.
- **git commit** – utworzenie nowego commita w repozytorium.
- **git log** – wyświetlenie historii commitów na aktualnym branchu.
