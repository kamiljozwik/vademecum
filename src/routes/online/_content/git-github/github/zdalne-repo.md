---
title: Zdalne repo
description: ''
order: 30
video: https://player.vimeo.com/video/502542353?h=408c1d51fa
video_length: '06:29'
free: false
---

Git jest narzędziem na tyle elastycznym, iż możemy umieścić go w naszym projekcie praktycznie w dowolnym momencie. Oczywiście najlepiej jest to zrobić na samym początku prac, gdyż wtedy będziemy mieli pełną historię projektu. W takim przypadku, gdy od samego początku wiemy, iż będziemy pracować z Gitem i dodatkowo zdecydujemy się umieścić nasz projekt na platformie GitHub, możemy od razu stworzyć nasze repozytorium na stronie GitHuba. Jest to bardzo wygodna i moim zdaniem najłatwiejsza droga na to, żeby umieścić kod w GitHubie. Nowo stworzone repozytorium następnie klonujemy (pobieramy) na nasz komputer i automatycznie mamy już ustawiony adres URL zdalnego repo. Jesteśmy więc pewni, iż nie będzie żadnych większych problemów z wysyłaniem zmian na serwer – kontynuujemy w końcu to, co zaczęliśmy na GitHubie. Dodatkowo GitHub automatycznie stworzy nam pierwszy `init commit` tuż po utworzeniu repo, więc na pewno będziemy mieli solidny punkt startowy.

Jeżeli jednak zdecydujemy się dodać Gita gdzieś w trakcie naszej pracy, to również nie ma żadnych problemów, aby taki projekt zamieścić na GitHubie. Być może chcemy w pierwszej kolejności sprawdzić, czy projekt, który zaczynamy, faktycznie będziemy kontynuować w przyszłości i warto umieścić go w zdalnym repo. A może wolimy najpierw odpowiednio skonfigurować nową aplikację i dopiero wtedy utworzyć `init commit`. Bądź nie znaliśmy do tej pory Gita i nie wiedzieliśmy, że takie wspaniałe narzędzie istnieje a mamy już kilka projektów, które warto by było przenieść na zdalny serwer. Niezależnie od powodu, pierwszy krok będzie dokładnie taki sam jak w poprzednim przykładzie, czyli stworzenie repozytorium na stronie GitHuba. Gdy to już zrobimy, zobaczymy adres URL naszego repo – jego charakterystyczną cechą będzie to, iż adres będzie kończył się na `.git`, np. `https://github.com/microsoft/vscode.git`

Ten adres następnie zapisujemy w naszym lokalnym repo jako adres zdalnego repozytorium i jesteśmy gotowi do przesłania (czasami używa się określenia wypchnięcia) kodu tworzonej aplikacji.

Jako że posiadamy już lokalne repozytoria utworzone w lekcjach poświęconych Git, to w pierwszej kolejności nauczymy się jak wysłać obecne już na naszym komputerze repozytorium do GitHuba.

### Komendy, które poznany w tej lekcji:

- **git push** – wysyłanie zmian (commitów) do zdalnego repozytorium.
- **git pull** – pobranie najnowszych zmian ze zdalnego repozytorium.
- **git remote add** – Utworzenie aliasu dla zdalnego repozytorium. Alias najczęściej przyjmuje nazwę origin.
- **git remote -v** – podgląd aliasów zdalnego repozytorium.
