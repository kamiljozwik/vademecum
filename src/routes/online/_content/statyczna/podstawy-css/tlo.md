---
title: Tło
description: ''
order: 210
free: false
extra_links:
  - title: CSS Backgrounds
    href: https://www.youtube.com/watch?v=dr1y4m7iEoU
  - title: Background images with HTML & CSS
    href: https://www.youtube.com/watch?v=zHZRFwWQt2w
  - title: Learn CSS background in 3 minute
    href: https://www.youtube.com/watch?v=YA8ZciJa64k
---

<script>
	import Codepen from "$lib/components/ui/Codepen.svelte";
</script>

Właściwość `background` w CSS pozwala nam umieścić tło na niemal dowolnym znaczniku HTML i będzie ono wyświetlane pod zawartością tego tagu. Jako tło możemy ustawić jednolity kolor, grafikę lub gradient (kilka kolorów gładko przechodzących jeden w drugi). Właściwość ta jest dość popularna i daje nam możliwość osiągania naprawdę fajnych efektów na stronie, więc przyjrzymy się wszystkim właściwością związanym z `background` (jak to zwykle w CSS bywa, `background` będzie jedną właściwością (tzw. shorthand), za pomocą której będziemy mogli zapisać wszystkie poznane poniżej pojedyncze właściwości).

## 1. background-image

Właściwość ta pozwala nam na ustawienie grafiki lub gradientu jako tła wybranego elementu. Ustawienie grafiki jest podobne do tego, jak wskazujemy źródło dla znacznika `<img alt="" />`, a więc podajemy po prostu adres URL umieszczony w funkcji `url()`:

```css
div {
	background-image: url(img/grafika.png);
}
```

Z kolei, jeżeli naszym celem jest umieszczanie gradientu, wtedy musimy skorzystać z funkcji `linear-gradient()` dla gradientu liniowego lub `radial-gradient()` dla gradientu radialnego (promieniowego).

**Gradient liniowy** będzie nam rozmieszczał kolory w wybranym przez nas kierunku (np. od lewej do prawej, od góry do dołu) lub dodatkowo jeszcze pod wybranym przez nas kontem (np. 45 stopni). Domyślnie gradient nakładany jest w kierunku góra-dół ⬇

<Codepen id="mdazWrM" />

**Gradient radialny** rozpocznie nam przechodzenie kolorów w sposób promienisty – trochę na wzór świecącego Słońca. Możemy w tym przypadku określić, w którym miejscu będzie znajdowało się “centrum” rozchodzenia kolorów. Najlepiej zobaczyć to na przykładzie:

<Codepen id="MWZPpjd" />

### Więcej niż jedno tło

Na każdy element możemy nałożyć więcej niż jedno tło i tym samym mieszać ze sobą np. grafiki oraz gradienty. W tym celu wystarczy podać kilka wartości rozdzielonych przecinkami:

```css
div {
	/* Grafika logo.png wyświetli się "nad" grafiką "image.png". */
	background-image: url(logo.png), url(image.png);

	/* Gradient zostanie nałożony na grafikę. Jako jeden z kolorów możemy podać 
  wartość "transparent", tworząc dzieki temu ładnie wyglądające przejście. */
	background-image: linear-gradient(black, white), url(image.png);
}
```

## 2. background-repeat

W przypadku gdy na tło wybierzemy grafikę mniejszą niż wielkość stylowanego elementu, wtedy CSS będzie próbował pokryć całą dostępną powierzchnię, replikując grafikę. Możemy nadpisać to domyślne zachowanie w następujący sposób:

<Codepen id="qBLJrRN" />

## 3. background-position

Za pomocą tej właściwości możemy umieścić grafikę wybraną jako tło w dowolnym miejscu naszego elementu:

<Codepen id="abPRJJv" />

## 4. background-size

Właściwość ta pozwala nam zarówno ustawić szerokość / wysokość tła (samego tła, nie elementu, na który nakładamy tło), jak i zdecydować o tym, czy grafika powinna wypełnić całą dostępną przestrzeń (i tym samym być może “uciąć” nieco boków), czy może powinna zostać wyświetlona w całości i ewentualnie wtedy nie zapełnić całego tła.

Dostępne wartości dla tej właściwości to:

- **cover** – zmniejsz lub powiększ grafikę tak, aby zapełniła całe tło,
- **contain** – wyświetl zawsze całą grafikę,
- **jedna wartość** wyrażona w `px`, `%`, `vh` itp. – ustaw tę wartość jako szerokość i dobierz wysokość automatycznie,
- **dwie wartości** – ustaw odpowiednio szerokość oraz wysokość.

Spójrzmy na przykłady:

<Codepen id="XWoxMRJ" />

## 5. background-attachment

Bardzo ciekawa właściwość, dzięki której możemy określić, w jaki sposób ma zachować się grafika podczas scrollowania strony. Do naszej dyspozycji dostaliśmy trzy wartości:

- **scroll** – wartość domyślna, tło scrollowane jest razem z głównym oknem,
- **fixed** – tło pozostaje nieruchome podczas scrollowania,
- **local** – pozwala na scrollowanie tła wewnątrz innego, scrollowalnego okna.

<Codepen id="WNLapjY" />

## 6. background-origin / background-clip

Za pomocą tych dwóch właściwości możemy jeszcze dokładniej określić, gdzie chcemy umieścić tło na elemencie, który posiada zarówno `margin` i `padding`. Dozwolone wartości dla tej właściwości:

- **border-box** – obraz zajmie całą przestrzeń wraz z obramowaniem,
- **padding-box** – obraz zajmie przestrzeń z paddingiem, ale bez obramowania,
- **content-box** – obraz zajmie przestrzeń tylko wewnątrz paddingu.

Jest to jedna z tych wartości CSS, którą dużo łatwiej jest zobrazować niż wytłumaczyć słownie 🙂

<Codepen id="WNLapOY" />

## 7. background-color

Na sam koniec została nam w sumie najłatwiejsza właściwość, czyli ustawienie jako tła jednolitego koloru.

```css
div {
	background-color: red;
}
```

## 8. background (shorthand)

Jak już wspomnieliśmy sobie wcześniej, wszystkie powyższe właściwości można zapisać za pomocą jednej właściwości – `background`. Wartość dla tej właściwości wygląda następująco (zwróć uwagę na brak przecinków pomiędzy pojedynczymi wartościami):

```css
div {
	background: url(image.png) /* grafika lub gradient */ top center / 200px 200px
		/* pozycja / rozmiar */ no-repeat /* duplikacja grafiki */ fixed /* zachowanie przy scrollu */
		padding-box /* origin */ content-box /* clip */ red; /* kolor */
}
```
