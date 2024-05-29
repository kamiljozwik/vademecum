---
title: Wiersz i kolumna
description: ""
order: 50
free: false
---

<script>
	import Codepen from "$lib/components/ui/Codepen.svelte";
</script>

Tak jak wspomnieliśmy już sobie na wstępnie, CSS Grid bazuje na siatce, która jest tworzona za pomocą CSS. Możemy wtedy wyobrazić sobie naszą stronę w następujący sposób:

<img alt="" src="/kurs/statyczna/img/zaawansowana-strona/grid.png" />

Podobnie jak w przypadku flexboxa tworzyliśmy kontener poprzez umieszczenie właściwości `{ display: flex }` na rodzicu, tak w przypadku CSS Grid tworzymy siatkę poprzez ustawienie właściwości `{ display: grid }`. Od teraz to na rodzicu będziemy definiowali kształt i rozmiar siatki, natomiast na dzieciach będziemy ustawiali odpowiednie właściwości, które to na tę siatkę je nałożą.

## Kolumny ↕

Każda siatka składa się z kolumn i wierszy. Kolumny definiujemy za pomocą właściwości ` grid-template-columns`. Wartość tej właściwości definiuje ile i jakiej szerokości kolumny będziemy mieli na siatce. Szerokość pojedynczej kolumny możemy podać w znanych nam jednostkach takich jak `px`, `%`, `vw` itp. jednak w przypadku grida dostajemy do dyspozycji jeszcze jedną jednostkę – `fr` (fraction). Jednostka ta powoduje zachowanie dość podobne do `flex-grow`, a więc określa jaką część wolnej przestrzeni zajmie konkretna kolumna. Jeżeli wartość ta będzie taka sama dla wszystkich kolumn – kolumnu będą równej szerokości.

W poniższym przykładzie możemy zobaczyć, w jaki sposób tworzymy siatkę przy użyciu właściwości grid-template-columns. Jeżeli liczba elementów HTML będzie większa niż liczba kolumn, wtedy nadmiarowe elementy przenoszone są do kolejnego wiersza.

<Codepen id="xxmMGZw" />

## Wiersze ↔

W poprzednim rozdziale mogliśmy zauważyć, że w przypadku, gdy liczba dzieci jest większa niż liczba kolumn, wiersze tworzą się automatycznie. Możemy jednak wpływać również na liczbę i wielkości wierszy w siatce. O ile w kolumnach interesuje nas głównie szerokość, tak w wierszach interesuje nas ich wysokość. Domyślnie, wysokość wiersza jest determinowana przez najwyższy element w danym wierszu. Możemy więc skończyć z siatką, w której każdy wiersz będzie posiadał inną wysokość. Możemy temu zapobiec, korzystając z właściwości `grid-auto-rows`, której wartości będzie wysokością wszystkich wierszy w siatce, np. `{ grid-auto-rows: 200px }`.

Nie jest to jednak idealne rozwiązanie, ponieważ w przypadku gdy jakiś element siatki będzie posiadał zawartość o wysokości większej niż `200px`, zostanie wtedy ucięty i nie będzie widoczny w całości. W takim przypadku możemy pójść krok dalej i jako wartość właściwości `grid-auto-rows` ustawić funkcję `minmax(min, max)`, gdzie w miejsce `min` wstawiamy minimalną a w miejsce `max` maksymalną dozwoloną wysokość wiersza. Jako maksymalną wysokości możemy wstawić wartość `auto`, dzięki czemu będzie ona równa aktualnej wysokość. Dzięki temu w przypadku, gdy trafimy na wiersz o wysokości większej niż `200px`, będzie on powiększony, natomiast wszystkie inne wiersze otrzymają wysokość równą `200px`.

<Codepen id="dywaoMN" />

Domyślne zachowanie, które tworzy nam automatycznie nowe wiersze dla elementów niemieszczących się w poprzednim wierszu, będzie nas zadowalało w większości przypadków. Mamy jednak do naszej dyspozycji właściwość `grid-template-rows`, za pomocą której możemy sami zdecydować ile wierszy i o jakiej wysokości będzie w naszej siatce. Jeżeli zdefiniujemy więcej wierszy niż mamy elementów HTML, wtedy te wiersze będą puste, ale będą zajmowały na stronie miejsce.

Właściwość ta przyjmuje te same wartości co bliźniacza właściwość `grid-template-columns` oraz dodatkowo możemy użyć funkcji `minmax`.

<Codepen id="VwqgLjp" />

## Odstępy między wierszami i kolumnami

CSS Grid daje nam również możliwość ustawiania odstępu między wierszami i kolumnami. Odstęp taki możemy również ustawić za pomocą właściwości `margin` na dzieciach grida, ale wtedy dodajemy niepotrzebne odstępy przy skrajnych elementach siatki, więc lepiej jest skorzystać z właściwości `column-gap` lub `row-gap`. Wtedy odstępy będą dodane tylko wewnątrz siatki. Jeżeli chcemy ustawić tę samą wartość dla wierszy i kolumn, możemy skorzystać ze skróconego zapisu `gap`.

<Codepen id="eYbxNzq" />
