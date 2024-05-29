---
title: Zmienne CSS
description: ""
order: 70
free: false
extra_links:
  - title: CSS Variables in 100 Seconds
    href: https://www.youtube.com/watch?v=NtRmIp4eMjs
  - title: Get more out of custom properties
    href: https://www.youtube.com/watch?v=5QIiWIoCmsc
  - title: CSS Variables Tutorial
    href: https://www.youtube.com/playlist?list=PLqYFXd9GTRVWrl7L18M0rU50AEB07BqtB
    desc: Tematy z JS na razie można odpuścić 😉
---

<script>
	import Codepen from "$lib/components/ui/Codepen.svelte";
</script>

Jeżeli samodzielnie przepisujesz i analizujesz przykłady z poprzednich lekcji (a powinieneś tak robić dość często 🙂), to być może napotkałeś już na problem, który zaadresujemy w tej lekcji, czyli regularne powtarzanie (kopiowanie) tych samych wartości CSS. Załóżmy przykładowo, że zdecydowaliśmy się, że dominującym kolorem na naszej stronie będzie kolor `#ef5350`. Powtarzamy więc ten kolor wielokrotnie na wszystkich podstronach, kopiując go do różnych właściwości CSS. Już ta praca sama w sobie jest dość monotonna a co w przypadku, gdy zdecydujemy się jednak zmienić ten kolor na inny? Oczywiście musimy wprowadzać zmiany we wszystkich właściwościach, które tego koloru używają.

W językach programowania takich jak np. JavaScript, powtarzające się wartości najczęściej zapisujemy w jednym miejscu (tworząc tzw. zmienną lub stałą) i odnosimy się w całym kodzie do tej jednej wartości. Jeżeli będziemy chcieli zmienić jej wartość, zmieniamy ją tylko w jednym miejscu (właśnie w zmiennej / stałej) i cały kod automatycznie dowiaduje się o tej zmianie. Podobny mechanizm mamy od dość niedawna w CSS 🙂

## Czym jest zmienna CSS?

Zmienne CSS nazywane są również Custom Properties (“niestandardowe właściwości”). Wiemy już bardzo dobrze, czym są właściwości CSS. Niejednokrotnie korzystaliśmy już z takich właściwości jak `width`, `position`, `font-size`. To wszystko są właściwości zdefiniowane przez dokumentację i zaimplementowane w przeglądarkach, dlatego wszyscy możemy z nich korzystać i przeglądarka wie dokładnie co z takimi właściwościami zrobić.

Zmienna CSS również jest właściwością – tyle tylko, że to my wymyślamy sobie jej nazwę oraz ustawiamy jej wartość. Kolejną różnicą jest specyficzny, złożony z dwóch kresek prefix “–“, np. `--primary-color: #4286f4;`, `--secondary-color: #efef3f;`

Głównym celem zmiennej CSS, jak nie trudno się domyślić, jest możliwość jej wielokrotnego użycia. Od teraz stylizując poszczególne elementy na naszej stronie, możemy podawać tylko nazwę naszej zmiennej, a CSS już sam ją odnajdzie i podstawi jej wartość.

Spójrzmy na poniższy przykład:

```css
section {
  /* Definiowanie dwóch zmiennych CSS */
  --primary-color: #4286f4;
  --secondary-color: #efef3f;
}

.app-header {
  /* Użycie zmiennej CSS -> "background-color" zostanie
  w tym przypadku ustawiony na wartość "#4286f4" */
  background-color: var(--primary-color);
}

.app-title {
  color: var(--secondary-color);
}
```

Jak widać na powyższym przykładzie, odwołując się do zmiennej CSS musimy użyć słowa kluczowego `var`, a następnie w nawiasach podać nazwę zmiennej wraz z prefixem `--`. Dzięki temu możemy w efektywny sposób zarządzać wielokrotnie wykorzystywanymi wartościami. Nazwa `primary-color` jest również dużo łatwiejsza do zapamiętania niż wartość `#4286f4`. Co więcej, jeżeli w przyszłości zdecydujemy się zmienić główny kolor na naszej stronie, wystarczy, że zrobimy to w jednym miejscu – podczas deklaracji zmiennej.

## Selektor zmiennych CSS

W poprzednim przykładzie mogliśmy zauważyć, że blok deklaracji zmiennych CSS posiada selektor. Dzięki temu selektorowi możemy deklarować zmienne CSS jako zmienne globalne lub lokalne.

Zmiennych globalnych możemy użyć w każdym miejscu kodu CSS. Nie ważne czy to będą style na znacznik `<body>`, czy na jakiś głęboko zagnieżdżony `<div>` – zmienna zostanie odnaleziona i zastosowana.

Zmienne lokalne z kolei są dostępne tylko na wybranym przez nas selektorze (za pomocą właśnie wspominanego wcześniej selektora) oraz na wszystkich zagnieżdżonych w nim tagach. Takie podejście pozwoli nam odseparować zmienne od siebie i zapobiec przypadkowego użyciu tej zmiennej w złym miejscu. W praktyce jednak niemal zawsze będziemy używali zmiennych globalnych. Selektorem zmiennej globalnej jest `:root`:

<Codepen id="bGOOVgV" />

Jedna rzecz, o której należy pamiętać, to fakt, że zmiennych CSS możemy użyć tylko jako wartości właściwości CSS. Niedozwolony jest więc taki zapis:

```css
:root {
  --od-dolu: margin-bottom;
}

div {
  var(--od-dolu): 20px; /* ŹLE ⛔ - to nie jest to samo co "margin-bottom: 20px" */
}
```

## DevTools

Zmienne CSS możemy również w bardzo łatwy sposób podejrzeć przy użyciu DevTools. Będziemy mieli w nich podgląd na wszystkie globalne zmienne, a w przypadku zaznaczenia elementu wybranego przez selektor deklaracji zmiennej, zobaczymy również zmienne lokalne.

<img alt="" src="/kurs/statyczna/img/nowoczesna-strona/variable.png" />

Jeżeli zastanawiasz się, czy zmienne globalne są popularnym rozwiązaniem, to polecam odwiedzić stronę [Facebooka](https://www.facebook.com/) i za pomocą DevTools podejrzeć wspomniany wyżej fragment CSS zawierający informację o zmiennych CSS 😉

## 🕵️ Portfolio

Nasze przykładowe portfolio posiada całkiem sporo kolorów. Mając już wiedzę na temat zmiennych CSS, może warto zastąpić te kolory zmiennymi? 🤔
