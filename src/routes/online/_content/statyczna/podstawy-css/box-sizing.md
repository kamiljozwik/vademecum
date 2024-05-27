---
title: Box sizing
description: ''
order: 180
free: false
extra_links:
  - title: box-sizing border-box (Best Explanation)
    href: https://www.youtube.com/watch?v=HdZHcFWcAd8
---

<script>
	import Codepen from "$lib/components/ui/Codepen.svelte";
</script>

Box sizing jest małą, aczkolwiek bardzo przydatną właściwością CSS. Domyślnie, niemal każda przeglądarka, kalkulując wysokość i szerokość elementu na stronie, bierze pod uwagę jedynie wysokość i szerokość zawartości tagu HTML. Nie są brane pod uwagę wymiary obramowania, paddingu oraz marginu. Takie podejście potrafi sprawić wiele problemów, ponieważ zarówno `padding`, jak i `margin` “powiększają” wymiary elementów. Tak więc ustawiając w CSS te wartości, musimy cały czas pamiętać o tym, że element może w rzeczywistości na stronie być wyższy/szerszy niż zakładamy.

<Codepen id="ZEVqpoY" />

Takie liczenie wysokości i szerokości często powodowało sporo problemów z poprawnym wyświetlaniem stron. Dlatego też wprowadzono pewne usprawnienie w postaci nowej właściwości CSS box-sizing. Dobra wiadomość jest taka, że własność ta przyjmuje tylko dwie wartości:

- **content-box** – zachowanie domyślne, które zostało przedstawione na powyższym przykładzie,
- **border-box** – nowe zachowanie, dzięki któremu podając wysokość i szerokość, przeglądarka uwzględni w swoich obliczeniach `padding` oraz `border`.

W przypadku `border-box` w dalszym ciągu nie włączamy do obliczeń `margin`, co w sumie ma sens, gdyż `margin` jedynie odsuwa nam inne elementy od naszego znacznika, ale nie wpływa na jego wymiary. Zobaczmy teraz, jak to wygląda na przykładzie:

<Codepen id="qBLJaKr" />

## Box Model Reset

Domyślna wartość właściwości `box-sizing` potrafi wprowadzić wiele zamieszania i błędów w naszych wyliczeniach, dlatego więc bardzo częstą praktyką jest globalne nadpisanie domyślnej wartości i używanie wszędzie na naszej stronie wartości `border-box`. W tym celu możemy zastosować poznany już wcześniej selektor uniwersalny:

```css
/* Pseudo elementy ::before oraz ::after poznamy w dalszej części kursu. */
*,
*::before,
*::after {
	/* Od teraz wszystkie znaczniki HTML będą miały ustawioną wartość "border-box"
  dla właściwości "box-sizing", a więc na rozmiar każdego elementu będzie składał się
  również jego "padding" oraz "margin". */
	box-sizing: border-box;
}
```
