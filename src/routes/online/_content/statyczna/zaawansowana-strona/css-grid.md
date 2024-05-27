---
title: CSS Grid
description: ''
order: 40
free: false
extra_links:
  - title: CSS Grid in 100 Seconds
    href: https://www.youtube.com/watch?v=uuOXPWCh-6o
---

Poznaliśmy już do tej pory kilka sposobów na rozmieszczanie elementów na stronie. W prostych przypadkach możemy skorzystać z elementów blokowych i liniowych. Gdy potrzebujemy nieco więcej responsywności, możemy skorzystać z flexboxa. We wszystkich tych przypadkach jednak zawsze rozmieszczamy elementy tylko w jednym wymiarze – od lewej do prawej bądź od góry w dół (i vice versa). Kolejność elementów w drzewie HTML na również tutaj bardzo duże znaczenie i przy zmianie widoku z dużego ekranu na mały nie tak łatwo jest przemieszczać elementy w nowe miejsca. Nie wspominając już o stworzeniu strony, która będzie posiadała wygląd kafelkowy (nazywany również “mozaiką”).

<img alt="" src="/online/statyczna/img/zaawansowana-strona/mosaic.png" />

W następnych kilku lekcjach poznamy nowy, bardzo ciekawy sposób na rozmieszczanie elementów na stronie za pomocą CSS, tzw. CSS Grid.

Grid
Skąd taka nazwa? Otóż w tym przypadku definiujemy na naszej stronie “siatkę” na której następnie będziemy układali znaczniki HTML. Siatka ta przypomina nieco zeszyt w kratkę, w którym będziemy “rysować” ułożenie elementów na stronie. To od nas będzie zależało, ile taka siatka będzie miała wierszy, kolumn oraz jakie będą między nimi odległości. Nie ma też większego znaczenia kolejność występowania znaczników w HTML – mamy pełną dowolność w rozmieszczaniu elementów na siatce.

CSS Grid sprawdzi się również bardzo dobrze w przypadku tworzenia stron responsywnych, gdyż w połączeniu z `Media Queries`, możemy tworzyć różne siatki w zależności od rozmiaru ekranu. Wszystkie te techniki poznamy w kolejnych lekcjach 🙂
