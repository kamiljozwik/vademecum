---
title: Tabele
description: ""
order: 50
free: false
extra_links:
  - title: HOW TO CREATE & STYLE TABLES IN HTML
    href: https://www.youtube.com/watch?v=iuSKGuWWNGA
  - title: How to create a responsive HTML table
    href: https://www.youtube.com/watch?v=czZ1PvNW5hk
  - title: How to Create Tables in HTML
    href: https://www.youtube.com/watch?v=e23RA_Uo99o
  - title: HTML Tables Tutorial with CSS Styling
    href: https://www.youtube.com/watch?v=IGBRYTpgyg4
---

<script>
	import Codepen from "$lib/components/ui/Codepen.svelte";
</script>

Tabele pozwalają nam prezentować dane w sposób podobny do tego, jaki znamy z Excela. Jednak praca z tabelami w HTML może sprawić wiele problemów, jeżeli nie zrozumiemy dokładnie, w jaki sposób są one generowane.

W pierwszej kolejności musimy wiedzieć, z jakich elementów (i tagów) możemy tworzyć nasze tabele:

- Każda tabela otwierana i zamykana jest znacznikami `<table> ... </table>`
- Tabela może (ale nie musi) zawierać nagłówek `<thead> ... </thead>`
- Tabela może (ale nie musi) zawierać wyodrębnioną zawartość główną (“ciało” tabeli) `<tbody> ... </tbody>`
- Tabela może (ale nie musi) zawierać stopkę `<tfoot> ... </tfoot>`
- Tabela musi zawierać wiersze. Wiersze występują zarówno w nagłówku, jak i ciele oraz stopce `<tr> ... </tr>` (tr = table row)
- Wiersze składają się z komórek:
  - `<th>` (th = tabular header) – komórki używane jako nagłówki
  - `<td>` (td = tabular data) – komórki zawierające dane, które chcemy wyświetlić w tabeli.

Mając w głowie powyższe podstawowe założenia dotyczące tabel, zobaczmy jak to wszystko wygląda już w HTML:

<Codepen id="dywQZvr" />

## CSS

Pierwsza rzecz, która rzuca się w oczy w poprzednim przykładzie, to fakt, że tabele nie wyglądają jak… tabele. Nie widzimy żadnych obramowań, a tekst niemal zlewa się ze sobą. Jeżeli coś nie wygląda “ładnie”, to znaczy, że przyszła pora na CSS 🙂.

Zanim spojrzymy na przykład, warto wiedzieć o tym, że domyślnie przeglądarki renderują poszczególne komórki tabeli oddalone od siebie o 2px. Możemy wartość tą zmienić za pomocą właściwości `border-spacing`. Nie wygląda to najlepiej i w niczym nie przypomina tabelarycznego formatu danych znanego m.in. z Excela czy Worda. Jeżeli chcemy posiadać tylko jeden border pomiędzy komórkami, musimy skorzystać z właściwości CSS o nazwie `border-collapse`. Wszystko to możemy zobaczyć w przykładzie:

<Codepen id="NWeEwjR" />

## Łączenie komórek

Bardzo często w tabelach chcemy złączyć (scalić) ze sobą kilka komórek w pionie lub poziomie. W HTML możemy to osiągnąć za pomocą atrybutów `colspan` (łączenie w poziomie) oraz `rowspan` (łączenie w pionie), które to możemy umieszczać tylko na tagach `<th>` oraz` <td>`.

Należy pamiętać o tym, iż tworząc nową komórkę z powyższymi atrybutami, komórka ta “zajmie” tyle miejsca, ile wynosi wartość tego atrybutu. Tak więc należy zawsze dobrze “przeliczyć” ilość komórek w naszej tabeli. Jest to szczególnie ważny w przypadku `rowspan`. Pamiętajmy o tym, że wiersz, w którym umieścimy ten atrybut automatycznie “doda” komórki do poniższych wierszy. Wszytko to najlepiej zobrazuje przykład:

<Codepen id="dywQZWL" />

## Dwie osie

Często spotykaną tabelą jest tabela zawierająca “nagłówek” zarówno w pierwszej osi poziomej, jak i pionowej. W takim przypadku możemy zrezygnować z używania <thead> oraz <tbody> i użyć tagów <th> jako cały pierwszy wiersz, oraz pierwsze komórki kolejnych wierszy:

<Codepen id="bGOQYRw" />

## CSS – ciąg dalszy

Powiemy sobie teraz kilka słów na temat stylowania tabel za pomocą CSS. Najważniejszą rzeczą, o której należy pamiętać, to fakt, iż ustawienie wysokości/szerokości pojedynczej komórki będzie miało wpływ na wszystkie pozostałe komórki. Wiersze i kolumny tabeli muszą do siebie zawsze “pasować”. W takim przypadku, gdy chcemy ustawić stałą szerokość kolumn, najlepiej jest umieszczać CSS na pierwszym wierszu tabeli (najczęściej będzie to nagłówek). Ten oraz jeszcze kilka przydatnych przykładów znajdziemy w poniższym kodzie:

<Codepen id="eYbQeRV" />

## 🕵️ Portfolio

Na stronie głównej portfolio p. Holmesa wymienione zostały tylko cztery rozwiązane sprawy. W ramach przećwiczenia tworzenia tabel możemy stworzyć kolejną podstronę, na której umieścimy w formie tabelarycznej wszystkie sprawy rozwiązane przez naszego detektywa. Kształt takiej tabeli może być dowolny, ale możemy najpierw zacząć od czegoś prostego i skorzystać z poniższego przykładu.

W jaki sposób przejść do tej podstrony? Oczywiście musimy zdecydować gdzie i jak umieścić link do niej prowadzący – ale to już nie powinno być problemem 🙂

PS. Jeżeli nie znasz pozostałych zagadek rozwiązanych przez Sherlocka Holmesa to nie marnuj teraz czasu na przeglądanie Google – po prostu sobie je wymyśl 😉

<img alt="" src="/kurs/statyczna/img/html-css-dalsze-kroki/tablesh.png" />

## Inspiracje

Poniżej znajduje się kilka stron z tabelami stworzonymi za pomocą HTML i CSS. Możesz z nich czerpać inspiracje podczas tworzenia swoich własnych tabel, albo tworzyć ich kopie w ramach ćwiczeń.

- [CSS Tables](https://freefrontend.com/css-tables/)
- [Table Templates & Examples](https://colorlib.com/wp/css3-table-templates/)
- [50+ CSS Tables](https://devsnap.me/css-tables)
- [30 HTML and CSS table Examples](https://csshint.com/html-css-table/)
