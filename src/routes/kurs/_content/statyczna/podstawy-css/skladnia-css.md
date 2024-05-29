---
title: Składnia CSS
description: ""
order: 20
free: false
extra_links:
  - title: Basic CSS Syntax
    href: https://www.youtube.com/watch?v=1CqHws4WZ-M
    desc: Materiał dość stary, ale cały czas aktualny
---

Składnia CSS nieco różni się od składni HTML. W tym przypadku nie posługujemy się już tagami a ich miejsce zajmą selektory oraz deklaracje. Spójrzmy jak wygląda pojedynczy blok kodu CSS i omówmy sobie jego poszczególne części:

<img alt="" src="/kurs/statyczna/img/podstawy-css/skladnia.png" />

## Selektor

Za pomocą selektora wskazujemy, na który element HTML na naszej stronie chcemy nanieść style CSS i tym samym zmienić jego wygląd. Selektorem mogą być nazwy tagów HTML (`div`, `span` itp.), jak również ich atrybuty – najczęściej `id` oraz `class`. Odpowiednie dobranie selektora jest niezwykle ważną czynnością i pomyłki w tym miejscu mogą spowodować, iż nie tylko nie ostylujemy założonego elementu a nałożymy style w zupełnie nieplanowanych miejscach. Temat jest na tyle ważny, że poświęcimy mu niedługo całą lekcję.

## Deklaracja

W tym miejscu definiujemy, jak ma wyglądać wybrany przez nas element na stronie. To tutaj będziemy ustawiać kolory, czcionki, odstępy i wiele innych wizualnych aspektów. Każda deklaracja jest opleciona tzw. klamrami `{}`. Wewnątrz klamry znajdują się pojedyncze “opisy” naszych zmian. Opis taki z kolei jest zbudowany z właściwości CSS (ang. CSS property) oraz wartości tychże właściwości. Każda deklaracja może posiadać wiele par `właściwość CSS: wartość`, które oddzielamy od siebie średnikiem `;`.

## Właściwość CSS

Właściwość CSS (CSS property) należy rozumieć jako jedna wizualna zmiana na stronie. Taką zmianą może być np. kolor tła lub rozmiar czcionki. To jakiego koloru będzie tło bądź jak duża będzie czcionka ustalimy za pomocą wartości

## Wartość

Jak już wspomniano w poprzednim punkcie, to w tym miejscu ustalamy, jaką wartość ma przyjąć zdefiniowana właściwość. Wartość może być wyrażana w wielu różnych jednostkach, np. pixel dla rozmiaru czcionki, procentowa szerokość ekranu użytkownika w przypadku rozmieszczania elementów na stronie, bądź po prostu kolor `red`, gdy ustawiamy tło naszej nawigacji.

Choć może wydaje się to nieco skomplikowane, to w praktyce jest dość proste i intuicyjne. Nazwy właściwości CSS są najczęściej angielskimi nazwami danej czynność (np. `font-size`) a możliwe wartości, jakich możemy użyć, zawsze możemy podejrzeć w DevTool (o tym w jednej z następnych lekcji).

Spójrzmy, jak wyglądają dwa przykładowe bloki CSS. W pierwszym przypadku nasz selektor wybrał wszystkie tagi `div` na stronie i w deklaracji widzimy, iż wszystkie te elementy będą posiadały czcionkę koloru czerwonego oraz będą odsunięte od innych elementów na stronie o `10px` (px = pixeli). Drugi blok z kolei wybrał wszystkie tagi `li`, które znajdują się wewnątrz tagu ul, który to z kolei znajduje się w tagu `article`. Widzimy więc, że ten selektor już jest dużo bardziej precyzyjny i nie wybiera każdego `li` a jedynie te spełniające pewne warunki. Takie li tutaj będą miały czcionkę o wielkości `16px`. Przykład jest tylko pokazowy – wszystkie te pola poznamy i zrozumiemy na kolejnych lekcjach.

<img alt="" src="/kurs/statyczna/img/podstawy-css/example.png" />

## Dostępne właściwości CSS

Pytanie, jakie może się nasuwać po przeczytaniu tej lekcji, to jakie właściwości CSS mamy dostępne do naszego użytku? Otóż… naprawdę bardzo dużo. Na samym początku ich liczba może wydawać się nieco przytłaczająca. Dlatego w tym przypadku bardzo, ale to bardzo ważne jest regularne pisanie stylów CSS w ramach ćwiczeń. Dzięki temu w pewnym momencie nauki będziemy wiedzieli bez większego zastanawiania jakiego selektora / właściwości / wartości użyć w konkretnym przypadku.

Liczba wszystkich właściwości znajduje się [pod tym linkiem](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference).
