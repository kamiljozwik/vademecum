---
title: Reset
description: ''
order: 10
free: false
extra_links:
  - title: My Custom CSS Reset (joshwcomeau)
    href: https://www.joshwcomeau.com/css/custom-css-reset/
  - title: CSS Resets and Default Browser Style
    href: https://www.youtube.com/watch?v=Nn2_ISgTG1I
  - title: CREATE A CSS RESET STYLESHEET
    href: https://www.youtube.com/watch?v=5e0wuvhxLk4
---

W jednej z początkowych lekcji dotyczących CSS mówiliśmy sobie o domyślnych stylach CSS używanych przez przeglądarki. Dzięki nim mamy zapewnione podstawowe ostylowanie niektórych tagów HTML. Obecnie posiadamy już nieznaczne różnice w domyślnych stylach używanych przez współczesne przeglądarki takie jak Chrome, Firefox czy Opera. Różnice chodź małe, jednak w dalszym ciągu się pojawiają. Nie możemy zawsze zakładać, że użytkownik będzie przeglądał naszą stronę na tej samej przeglądarce, na jakiej my ją tworzyliśmy. Być może skorzysta z przeglądarki, która nada inny styl domyślny, niż my widzieliśmy u siebie i strona przez to nie będzie u niego wyglądała tak dobrze, jak u nas.

Istnieją dwa sposoby na poradzenie sobie z problemem domyślnego stylowania:

- **reset** – czyli całkowite usunięcie domyślnych stylów,
- **normalizacja** – ujednolicenie stylów między przeglądarkami.

## CSS Reset

Reset jest dość inwazyjną metodą, ponieważ usuwa wszystkie domyślne style przeglądarki. Po jego zastosowaniu każdy tag HTML będzie renderowany jak zwykły tekst, czyli np. nagłówki <h1..h6> przestaną być pogrubione, linki stracą swoje kolory i podkreślenie a listy nie będą posiadały liczb oraz punktorów. Jednym słowem zaczynamy całkowicie od zera i to my musimy napisać wszystkie style CSS od nowa.

W celu zresetowania domyślnego stylowania musimy jednak w dalszym ciągu skorzystać z pliku CSS, którego kod będzie resetował inne style. Możemy taki plik napisać samemu bądź skorzystać już z istniejących rozwiązań. Najpopularniejszym obecnie plikiem resetującym CSS jest plik znajdujący się [na tej stronie](https://meyerweb.com/eric/tools/css/reset/). Plik ten nie jest duży, więc możemy skopiować zawartość tego pliku ze strony, w naszym katalogu ze stroną stworzyć nowy plik CSS i tam umieścić kod resetujący style. Następnie taki plik powinien być zaimportowany jako pierwszy plik CSS. Nasz projekt będzie wyglądał tak jak na poniższym screenie:

<img alt="" src="/online/statyczna/img/nowoczesna-strona/reset.png" />

Powyższy plik jest chyba najczęściej używanym plikiem służącym resetowaniu CSS, ale wynika to głównie z tego, że jest najstarszy – wersja dostępna na powyższej stronie powstała w 2011 r. Istnieje drugi również dość popularny plik, który jest dużo młodszy i ciągle aktywnie rozwijany – można go znaleźć [na tej stronie](https://gist.github.com/DavidWells/18e73022e723037a50d6).

## Normalizacja CSS

Normalizacja CSS, w przeciwieństwie do resetu, nie usuwa domyślnych stylów przeglądarki. Zamiast tego próbuje jak najbardziej ujednolicić te style na wszystkich dostępnych przeglądarkach. Tak więc, zamiast usuwać wszystkie style, plik normalizujący nadpisze jedynie tylko te style, które wiadomo, że są inaczej wyświetlane na różnych przeglądarkach. W wyniki tego nadpisania domyślnie ostylowany element będzie już wyglądał tak samo na niemal wszystkich przeglądarkach.

Zabieg ten nie jest tak inwazyjny, jak reset i pozwala nam zachować wszystkie domyślne style, które często są dość przydatne i pozwalają nam na pisanie mniejszej ilości kodu CSS.

Najpopularniejszy plik normalizacyjny możemy znaleźć pod tym adresem:[ Normalize.css](https://necolas.github.io/normalize.css/). Podobnie jak w przypadku resetu musimy ten plik umieścić w naszym projekcie i zaimportować do pliku HTML.

## Reset czy normalizacja?

Obydwie te techniki są jak najbardziej dozwolone i poprawne. Decyzja o tym, czego użyjemy, należy wyłącznie do nas. Osobiście skłaniam się bardziej w kierunku normalizacji, gdyż domyślne style są dość przydatne szczególnie podczas tworzenia stron od zera.

Nie zapominajmy, że nie musimy koniecznie stosować gotowych plików. Często spotykanym rozwiązaniem jest samodzielne tworzenie plików CSS, które resetują / nadpisują te właściwości, które najbardziej nam przeszkadzają lub które i tak często nadpisujemy w wielu innych plikach. Wszystko zależy od rodzaju strony, którą tworzymy i naszych własnych preferencji dotyczących pisania CSS 🙂
