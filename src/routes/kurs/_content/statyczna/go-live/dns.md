---
title: DNS
description: ''
order: 30
video: https://player.vimeo.com/video/567940950?h=c6b864f1fb
video_length: '03:00'
free: false
extra_links:
  - title: DNS Explained in 100 Seconds
    href: https://www.youtube.com/watch?v=UVR9lhUGAyU
---

DNS (domain name system) jest zagadnieniem związanym z sieciami komputerowymi, więc nie będziemy wchodzić w jego szczegóły. Pokażemy sobie jedynie, w jaki sposób z niego skorzystać, aby zakupiona przez nas domena (np. za pomocą OVH) kierowała użytkownika w miejsce, gdzie faktycznie znajduje się nasza strona (np. na GitHub Pages).

W przypadku gdy zdecydujemy się na domenę i hosting u tego samego dostawcy, wtedy prawdopodobnie nie będziemy musieli tego robić, gdyż wszystko będzie już prawidłowo skonfigurowane.

## Dwa słowa o DNS

Żebyśmy mieli podstawową świadomość tego, co za chwile będziemy robić, powiemy sobie w dwóch słowach o tym, czym jest DNS. W Internecie niemal każda strona internetowa znajduje się na jakimś serwerze. Przeglądając stronę internetową, tak naprawdę pobieramy do pamięci przeglądarki pliki HTML, CSS i JavaScript i to na ich podstawie przeglądarka wyświetla (renderuje) nam widok danej strony. Serwery hostujące strony internetowe posiadają swoje unikalne adresy IP i występują one w dwóch wariantach:

- **IP v4** (wersja czwarta), np. `177.34.211.8`,
- **IP v6** (wersja szósta), np. `2551:0ab8:66a3:0000:0000:aaaa:03b0:7334`.

Jak sami widzimy, adresy IP nie są zbyt przyjemne w zapisie, a już na pewno nie są łatwe do zapamiętania. Jednakże musimy znać adres IP, aby móc pobrać z serwera zawartość strony. W tym celu właśnie został wymyślny DNS. Pełni on funkcję “tłumacza” adresów URL na adresy IP, czyli np. www.frontschool.pl na adres 18.197.180.133. To właśnie spod tego adresu pobierane są wszystkie rzeczy, które składają się na kurs, który właśnie przeglądasz 🙂.

Technicznie rzecz biorąc, DNS jest również serwerem, a dokładnie rzecz biorąc setkami serwerów rozsianych po całym świecie, które umożliwiają komputerom w Internecie komunikować się ze sobą oraz przeglądać zawartości stron Internetowych.

Tyle powinno nam na razie wystarczyć – zobaczmy jak wygląda konfiguracja DNS w praktyce.

## Konfiguracja DNS

Konfiguracja DNS będzie inna dla różnych dostawców domen. W każdym przypadku będziemy musieli jednak dokonać tej samej czynności, czyli dodać odpowiedni “rekord DNS”. To właśnie te rekordy znajdują się na globalnie rozsianych serwerach DNS i na ich podstawie sterowany jest ruch w Internecie. Rekordy, które będą nas interesowały, nazywają się `A` oraz `CNAME`.

### A (address)

Podstawowy rekord DNS, w którym podajemy, pod jakim adresem IP znajduje się nasza strona internetowa. Będziemy z niego korzystać w sytuacji, gdy posiadamy własny serwer (bądź wynajmujemy serwer wirtualny), do którego mamy przypisany stały adres IP. Na tym serwerze musimy mieć uruchomiony oraz prawidłowo skonfigurowany web server, oraz pliki składające się na naszą stronę. W przypadku, gdy wykupimy hosting oraz domenę u tego samego dostawcy, rekord ten będzie już automatycznie dodany i będzie wskazywał na adres zakupionego przez nas serwera hostingowego.

### CNAME (canonical name)

Rekord, za pomocą którego możemy wskazać, pod jaki adres URL (na jaką domenę) ma zostać przekierowany użytkownik, wpisując nazwę wykupionej przez nas domeny. Właśnie tego rekordu użyjemy w celu przeniesienia użytkownika na GitHub Pages w momencie, gdy odwiedzi on naszą domenę.
