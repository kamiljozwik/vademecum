---
title: Linie siatki
description: ''
order: 60
free: false
---

<script>
	import Codepen from "$lib/components/ui/Codepen.svelte";
</script>

Z wierszami i kolumnami siatki powiązane są odpowiadające im linie widoczne na poniższej grafice. Maksymalna liczba linii w każdym kierunku wynosi n + 1, gdzie za n podstawiamy liczbę kolumn lub wierszy. Numery tych linii tworzą nam swoisty układ współrzędnych, za pomocą którego jesteśmy w stanie opisać dowolne położenie obiektu na siatce. Na poniższej grafice widzimy pomarańczowy prostokąt, którego położenie moglibyśmy opisać w następujący sposób: “Prostokąt ten zaczyna się na linii kolumny numer 2 i linii wiersza też numer 2, natomiast kończy się na linii kolumny numer 6 oraz linii wiersza nr 4.”

<img alt="" src="/online/statyczna/img/zaawansowana-strona/Linie.png" />

Jak nie trudno się domyślić, to właśnie w ten sposób będziemy układali poszczególne dzieci na siatce, dzięki czemu będziemy mieli pełną kontrolę nad ich rozmieszczeniem. Właściwości CSS odpowiedzialne za umieszczenie elementu w konkretnym miejscu siatki aplikujemy na dzieci. Możemy zrobić to za pomocą następujących właściwości:

```css
/* Zapis, którego użylibyśmy dla elementu z powyższego przykładu: */
.orange-box {
	grid-column-start: 2;
	grid-column-end: 6;
	grid-row-start: 2;
	grid-row-end: 4;
}

/* Możemy również użyć wersji skróconej tego zapisu,
gdzie jako wartośc podajemy "start/end": */
.orange-box {
	grid-column: 2/6;
	grid-row: 2/4;
}

/* Jeżeli nie chcemy za każdym razem ustawiać dokładnych
numerów linii, za pomocą słowa "span" możemy określić ile
komórek siatki ma zająć określony element */
.orange-box {
	/* zacznij od drugiej kolumny i zajmij cztery następne */
	grid-column: 2 / span 4;
	/* zacznij od wiersza w którym aktualnie jesteś i zajmij dwa kolejne. */
	grid-row: span 2;
}
```

Za pomocą tej prostej, ale bardzo wydajnej metody, możemy tworzyć bardzo ciekawe ułożenie elementów na naszej stronie.

<Codepen id="YzdBXNQ" />

## Zagnieżdżanie

W przypadku CSS Grid nic nie stoi na przeszkodzie, aby element jednej siatki stał się zupełnie nową siatką dla kolejnych elementów. Każdy element, na którym ustawimy właściwość `{ display: grid }` automatycznie staje się siatką i możemy działać na nim tak jak do tej pory się uczyliśmy.

<Codepen id="qBLgdra" />
