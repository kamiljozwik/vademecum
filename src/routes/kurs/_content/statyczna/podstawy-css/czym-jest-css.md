---
title: Czym jest CSS?
description: ""
order: 10
free: false
extra_links:
  - title: CSS in 100 Seconds
    href: https://www.youtube.com/watch?v=OEV8gMkCHXQ
---

<img alt="" src="/kurs/statyczna/img/podstawy-css/css3.png" />

CSS jest skrótem od Cascading Style Sheets (ang.: kaskadowe arkusze stylów). Co w tej nazwie oznacza zwrot kaskadowe, powiemy sobie później, teraz zajmiemy się arkuszami stylów. CSS ma głównie rolę prezentacyjną. To za pomocą CSS definiujemy, jak ma wyglądać nasza strona, czyli m.in. to jakiego koloru będzie tekst, jakie będą odległości pomiędzy elementami na stronie, jak ma zachowywać się przycisk po najechaniu na niego myszką, jak ma kręcić się wskaźnik ładowania itd. Podobnie jak HTML, CSS nie jest językiem programowania. Jednak jest on zdecydowanie bardziej rozbudowany i posiada dużo większe możliwości niż HTML.

Jeszcze jedna kwestia odnośnie do samej nazwy. W wielu miejscach możemy natknąć się na nazwę CSS3. CSS i CSS3 to dokładnie te same rzeczy. Podobnie jak w przypadku HTML5, tak CSS3 jest obecnie żyjącym standardem, a więc nowe rzeczy są do niego dodawane regularnie i zrezygnowano (przynajmniej na razie) ze zmieniania numeru wersji.

W dzisiejszych czasach bardzo dobra znajomość CSS jest niezwykle cenioną umiejętnością. W Internecie istnieje obecnie niezliczona ilość stron i aplikacji. Główną rzeczą, która rozróżnia te strony/aplikacje jest ich wygląd. Pierwsze wrażenie, jakie wywoła na nas strona, odpowiednia estetyka, czytelny rozkład treści, pasujące do siebie kolory – wszystko to może zdecydować o tym, czy użytkownik na tej stronie zostanie, czy też od razu z niej wyjdzie i poszuka czegoś lepszego. Aczkolwiek CSS nie jest językiem programowania, sprawia one wiele problemów niedoświadczonym frontend-owcom, a czasami jest zupełną magią dla programistów niepracujących z nim na co dzień (mimo iż często dzierżą oni dumny tytuł full stack developera 🙂).

Do tej pory pisaliśmy tylko kod HTML, czyli tworzyliśmy strukturę/szkielet naszej strony. Nie oszukujmy się – nie wyglądało to jakoś pięknie. Na szczęście teraz z pomocą nowej technologii tchniemy nieco estetyki i życia w nasze projekty. CSS potrafi zdziałać prawdziwe cuda z każdą stroną – ten sam kod HTML może wyglądać zupełnie inaczej z różnymi stylami CSS. Poza statycznymi zmianami, takimi jak kolor czy styl obramowania, za pomocą CSS możemy tworzyć dość zaawansowane animacje. Zaczynając od prostego obracającego się kółka, które będzie oznaczało ładowanie danych na stronie, do… wesoło biegnącego papieru toaletowego (linki do przykładów obrazujących jak niesamowity potrafi być CSS umieszczone są na końcu tej lekcji – biegnący papier też 🙂).

## Przykłady CSS

Ciekawym przykładem możliwości CSS jest strona [CSS Zen Garden](http://www.csszengarden.com/). Zobaczymy na niej, jak można zmienić wygląd strony, korzystając jedynie z CSS. Po prawej stronie strony znajdziemy listę z różnymi stylowaniami tej samej strony – strony startowej CSS Zen Garden. Kod HTML jest w każdym przypadku dokładnie taki sam – zmienia się jedynie kod CSS.

Co prawda nie wiemy jeszcze praktycznie nic jak używać CSS, ale na zachętę przed kolejnymi lekcjami umieszczam linki do rewelacyjnych rzeczy stworzonych tylko przy użyciu HTML oraz CSS. Linki będą prowadziły do bardzo przydatnej aplikacji – [CodePen](https://codepen.io/). Jest to ciekawe narzędzie, dzięki któremu możemy szybko tworzyć oraz dzielić się prostymi stronami bądź tylko ich małymi fragmentami. CodePen posiada wbudowany edytor HTML/CSS/JavaScript, więc możemy sobie na nim pracować, nawet jeżeli jesteśmy na komputerze bez zainstalowanego VS Code. Naprawdę polecam poświęcić trochę czasu na zapoznanie się z tą stroną, gdyż może okazać się bardzo przydatna w przyszłej pracy.

A teraz przykłady – przypominam: w każdym przypadku użyty został tylko HTML oraz CSS 🙂

- [Obiecany papier toaletowy](https://codepen.io/cobra_winfrey/pen/gOpzozo)
- [Ponadczasowe radio](https://codepen.io/fossheim/pen/OJypZve)
- [Król na tronie (kliknij przycisk w lewym górnym rogu, aby uruchomić animacje)](https://codepen.io/alvaromontoro/pen/dyojLvx)
- [Elf](https://codepen.io/louflan/pen/PoPzqLV)
- [Kamera Polaroid](https://codepen.io/fossheim/pen/xxboBzO)
- [Kurczaczki w jajkach (najedź myszką nad każde z jajek)](https://codepen.io/Adir-SL/pen/EGmeBm)
- [Animowane karty](https://codepen.io/Jhonierpc/pen/MWgBJpy)
- [Szalony loader](https://codepen.io/aymangado/pen/YeVpLm)
- [Kilka przykładów loaderów](https://codepen.io/camdenfoucht/pen/BVxawq)
- [Zderzenie kulek](https://codepen.io/megatroncoder/pen/Xqeyva)
- [Loaderów nigdy za mało 🙂](https://codepen.io/pavelivanov/pen/VWxpgJ)
- [Loader sprężynka](https://codepen.io/_fbrz/pen/abYJNN)
- [i na koniec – Wasze zdrowie!](https://codepen.io/nazarelen/pen/GjKdVM)
