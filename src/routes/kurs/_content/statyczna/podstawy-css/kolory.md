---
title: Kolory
description: ''
order: 200
free: false
extra_links:
  - title: CSS Colors Tutorial for Beginners
    href: https://www.youtube.com/watch?v=Ddc-IIrIot0
  - title: Colors with CSS - hex, rgba, and hsla
    href: https://www.youtube.com/watch?v=AQnR5TtXvZk
---

<script>
	import Codepen from "$lib/components/ui/Codepen.svelte";
</script>

Za pomocą CSS możemy nadawać kolory niemal każdemu elementowi na stronie, nieważne czy jest to tekst, obramowanie, czy tło. W tej lekcji omówimy sobie różne sposoby na definiowanie kolorów, czyli jakich wartości możemy użyć w przypadku korzystania z właściwości CSS związanej z kolorem (np. `color`, `background-color`, `border`).

Kolor w CSS najczęściej zapisujemy za pomocą czterech formatów:

- **nazwa koloru** (np. `red`),
- **HEX** (np. `#b822ff`),
- **RGB** oraz **RGBa** (np. `rgb(0, 255, 255)` i `rgba(0,255,255,0.5)`),
- **HSL** oraz **HSLa** (np. `hsl(180, 100%, 50%)` i `hsla(180, 100%, 50%, 0.5)`).

## Nazwa koloru

Najłatwiejszym sposobem na ustawienie konkretnego koloru jest podanie jego nazwy. O ile dość łatwo będzie nam ustawiać tutaj ogólnie znane kolory takie jak `red`, `green` czy `yellow`, tak w przypadku skorzystania z jakiegoś odcienia możemy już mieć problem. Nie każdy z nas również może wiedzieć o istnieniu koloru o nazwie `midnightBlue` 🙂

Swego rodzaju formą zapisu koloru jest również wartość `transparent`. W ten sposób ustawiamy kolor jako przezroczysty.

Na szczęście podczas pracy z CSS w VS Code dostajemy podpowiedzi, które graficznie prezentują nam wybrany kolor (w przypadku gdy VS Code nie pokazuje nam od razu listy dostępnych wartości, należy skorzystać ze skrótu klawiszowego `ctrl + spacja`. [W tym materiale](https://player.vimeo.com/video/871007083) skorzystałem z niego podczas wybierania koloru dla właściwości `border`):

### Nazwy kolorów

Istnieje przydatna strona, na której mamy ładnie zebrane i uporządkowane większość nazw kolorów, których możemy użyć na naszej stronie, wraz z ich odpowiednikami w formatach HEX i RGB. Strona ta dostępna jest pod linkiem: [Color Names](https://htmlcolorcodes.com/color-names/).

## HEX

Kolory możemy zapisywać również w formacie [szesnastkowym](https://pl.wikipedia.org/wiki/Szesnastkowy_system_liczbowy) (ang. hexadecimal). W tym przypadku podajemy sześć wartości w zakresie 0-F (czyli wszystkie cyfry oraz litery od A do F). Te sześć wartości dzielimy na trzy pary, z czego pierwsza para reprezentuje ilość czerwonego koloru w danej barwie, druga zielonego a trzecia niebieskiego. Wartość taką zawsze poprzedzamy znakiem hash.

Jeżeli poszczególne pary mają takie same wartości, możemy skrócić zapis do trzech znaków:

```css
/* 
  Format HEX: #RRGGBB, gdzie:
  R - kolor czerwony; G - kolor zielony, B - kolor niebieski. 
*/
p {
	color: #a1b78c;
	color: #000000; /* Kolor czarny */
	color: #ffffff; /* Kolor biały */
}

/* Skrócony zapis: */
p {
	/* Poniższe zapisy są równoważne*/
	color: #aa22ff;
	color: #a2f;
}
```

## RGB / RGBa

W przypadku formatu RGB mamy również do czynienia z mieszkanką trzech kolorów podstawowych – Red, Green, Blue (RGB). W przeciwieństwie do zapisu HEX tutaj każdy z kolorów (ilość tego koloru w wynikowej barwie), określamy w zakresie od 0 do 255. Jeżeli chcemy, aby nasz kolor posiadał pewien poziom przezroczystości, możemy skorzystać z formatu RGBa, w którym to oprócz podania wag dla poszczególnych kolorów, podamy również stopień przezroczystości w zakresie od 0 (całkowita przezroczystość, kolor nie będzie widoczny) do 1 (pełne krycie, brak przezroczystości). Zobrazowane to zostało na poniższym przykładzie:

<Codepen id="wvRYgJg" />

## HSL / HSLa

Tak jak w przypadku formatu RGB mieliśmy do czynienia z trzema kolorami (Red, Green, Blue) tak w tym przypadku mamy już do czynienia z Hue (odcień, barwa; skala od 0 do 360), Saturation (nasycenie; skala od 0% do 100%), Lightness (jasność; skala od 0% do 100%). Format ten jest dość rzadko stosowany i nie tak oczywisty, jak np. RGB, więc nie będziemy wchodzić w jego szczegóły – warto jednak wiedzieć, że taki format istnieje i jak najbardziej może zostać użyty w przeglądarce.

```css
p {
	color: hsl(180, 100%, 50%);
}
p {
	color: hsla(180, 100%, 50%, 0.5);
}
```

## Dla dociekliwych

Jeżeli kogoś zainteresował temat kolorów i chciałbym dowiedzieć się nieco więcej na ten temat, zachęcam do zapoznania się z [krótkim materiałem](http://historiasztuki.com.pl/NOWA/30-00-01-KOLOR.php) dotyczącym teorii koloru.
