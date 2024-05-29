---
title: Matematyka CSS
description: ''
order: 30
free: false
extra_links:
  - title: Learn CSS Calc In 6 Minutes
    href: https://www.youtube.com/watch?v=x7EWFoRzAkk
  - title: Using the CSS Numeric Functions
    href: https://www.youtube.com/watch?v=6QwMvf1Jq0M
  - title: calc() lets you do some real CSS magic
    href: https://www.youtube.com/watch?v=PKVKwluRTfo
---

CSS ma specjalną funkcję, dzięki której możemy wykonywać podstawowe operacje matematyczne. Funkcję tę zapisujemy jako calc() i umieszczamy jako wartość właściwości.

```css
div {
	/* Szerokość tagu <div> będzie równa 70px */
	width: calc(20px + 50px);
	/* calc() możemy używamy używać również w skróconych zapisach */
	margin: 10px calc(50% + 10px);
}
```

Funkcji `calc()` możemy używać jedynie z wartościami numerycznymi, które używają jednostek poznanych w poprzedniej lekcji, czyli np. `px`, `%`, `vw` itp. Dozwolone jest również stosowanie mnożnika, jak i pojedynczej wartości.

```css
div {
	/* Szerokość tagu będzie równa 15px */
	width: calc(3 * 5px);
	/* Wysokość tagu będzie równa 100px */
	height: calc(100px);
}
```

## Mieszanie jednostek

Jedną z najciekawszych możliwości funkcji `calc()` jest możliwość mieszania jednostek. Możemy więc przykładowo dodawać do siebie piksele i procenty:

```css
div {
	/* Szerokość tagu o 20px mniejsza niż cała możliwa szerokość */
	width: calc(100% - 20px);
	/* Wysokość tagu będzie o 100px większa, niż obecna wysokość okna przeglądarki */
	height: calc(100vh + 100px);
}
```

Zapisywanie wartości niektórych właściwości za pomocą wyrażeń matematycznych znacząco zwiększy czytelność naszego kodu. Załóżmy, że posiadamy trzy znaczniki typu `inline-block` i chcemy, aby razem zapełniły całą szerokość strony i miały ten sam wymiar. Każdy ze znaczników musi posiadać szerokość równą 33,33333%, co nie jest zbyt eleganckim zapisem i nie do końca sugeruje, czemu akurat takiej wartości tutaj użyliśmy. Zamiast tego pokażmy wyliczenia, które stoją za tą liczbą:

```css
.znacznik {
	/* Jasny zapis - dzielimy całą szerokość na trzy równe części */
	width: calc(100% / 3);
	/* Mniej czytelny zapis z którego nie wynika czemu używamy tej wartości. */
	width: 33.33333%;
}
```

## Operatory matematyczne

W funkcji `calc()` możemy skorzystać z czterech podstawowych operatorów:

- **dodawanie** `+` – tylko wartości z jednostkami,
- **odejmowanie** `-` – tylko wartości z jednostkami,
- **mnożenie** `*` – jedna z mnożonych wartości musi być bez jednostki
- **dzielenie** `/` – dzielnik nie może mieć jednostki i nie może być równy zero.

Co więcej, między znakami dodawania oraz odejmowania musi wystąpić spacja:

```css
div {
	width: calc(20px + 10px); /* ✅ */
	width: calc(20px + 10); /* ⛔ */
	width: calc(20px+10px); /* ⛔ */

	width: calc(20px - 10px); /* ✅ */
	width: calc(20px - 10); /* ⛔ */
	width: calc(20px-10px); /* ⛔ */

	width: calc(10px * 3); /* ✅ */
	width: calc(10px * 3); /* ✅ */
	width: calc(10px * 3px); /* ⛔ */

	width: calc(10px / 2); /* ✅ */
	width: calc(10px / 2); /* ✅ */
	width: calc(10px / 2px); /* ⛔ */
	width: calc(10px / 0); /* ⛔ "Pamiętaj cholero, nie dziel przez zero" 👵 */
}
```
