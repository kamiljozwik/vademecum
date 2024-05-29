---
title: CSS Transition
description: ""
order: 140
free: false
extra_links:
  - title: Animating with CSS Transitions - A look at the transition properties
    href: https://www.youtube.com/watch?v=Nloq6uzF8RQ
  - title: Animating with CSS Transitions - Using transitions in action
    href: https://www.youtube.com/watch?v=YYlFFMc0RAg
---

<script>
	import Vimeo from "$lib/components/video/Vimeo.svelte";
	import Codepen from "$lib/components/ui/Codepen.svelte";
</script>

W poprzednim temacie widzieliśmy jak odkomentowanie pojedynczych linii kodu powoduje “przeskoczenie” elementu w jego nowe miejsce. To samo ma miejsce w przypadku, gdy zmieniamy wartość właściwości CSS z zastosowaniem pseudo klasy `:hover` – zmiana następuje błyskawicznie, skokowo. Nie można tego na pewno nazwać animacją.

W celu otrzymania płynnego przejścia z jednej wartości w inną stosujemy właściwość `transition`. To za jej pomocą ustalamy, w jaki sposób i w jakim czasie wartości te powinny się zmieniać.

```css
div {
  /* "transition" przyjmuje trzy wartości: 
  czas trwania animacji, opóźnienie startu animacji, przebieg animacji.
  Wymagane jest podanie czasu trwania animacji, dwie pozostałe wartości są opcjonalne.
  Do przebiegu animacji jeszcze wrócimy. */
  transition: 0.5s 1s linear;
}
```

Co warto zaznaczyć, `transition` domyślnie odnosi się do wszystkich zmieniających się wartości. Jeżeli podczas `:hover` zmienimy pozycję, kolor oraz dodamy obrót elementu, wtedy wszystkie te zmiany będą animowane zgodnie z ustawieniami `transition`. Jeżeli chcemy ustawić inne czasy trwania animacji dla zmiany poszczególnych właściwości CSS, możemy zrobić to następująco:

```css
div {
  /* Zmiany właściwości "background" będą trwały 1 sekundę, natomiast zmiany w "transform"
  będą trwały pół sekundy i zaczną się z opóźnieniem jednosekundowym. */
  transition:
    background 1s,
    transform 0.5s 1s;
}
```

Zobaczmy jak to zadziała na przykładzie:

<Codepen id="qBLLwje" />

## timing-function – przebieg animacji

Ostatnim parametrem przyjmowanym przez `transition` jest tzw. timing-function, czyli sposób, w jaki ma zachowywać się animacja. W powyższych przykładach korzystaliśmy z domyślnej wartości, czyli `linear`. Oznacza ona, iż animacja przez cały czas trwania wykonuje się z tą samą prędkością. Za pomocą timing-function możemy uruchomić naszą animację tak, że zacznie wykonywać się bardzo szybko i delikatnie zwolni tuż przed końcem, bądź będzie wykonywała się "krokowo". Przykładowe wartości dla timing-function:

- **linear** – animacja wykonywana z tą samą prędkością,
- **ease-out** – przyśpieszenie na początku i zwolnienie pod koniec animacji,
- **ease-in** – powolny start i przyspieszenie pod koniec,
- **ease-in-out** – powolny start, przyspieszenie w środku animacji, zwolnienie pod koniec,
- **ease** – podobne do e`ase-in-out`, ale przyspieszenie zaczyna się wcześniej i jest bardziej dynamiczne,
- **step** – “krokowe” wykonywanie animacji,
- **cubic-bezier** – własnoręcznie zdefiniowane przez nas zachowanie za pomocą tzw. “Krzywej Béziera” (patrz wideo pod przykladem).

Przykłady zastosowania timing-function:

<Codepen id="GRPPLMj" />

## cubic-bezier

<Vimeo id="567577335" h="c3f8a460dd" />

Generator: [Generator cubic-bezier](https://cubic-bezier.com/#.17,.67,.83,.67)
Przykładowe krzywe: [Easing function](https://easings.net/)

## Co możemy animować?

Niestety nie możemy animować (czyli płynnie zmieniać wartości) wszystkich właściwości w CSS. Lista zawierająca wszystkie nadające się do animowania właściwości znajduje się pod tym linkiem – [Animatable CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties).

Dodatkowo warto nadmienić, iż ze względu na wydajność, wszelkiego rodzaju przemieszczania, obracania i skalowania powinniśmy wykonywać zawsze przy użyciu właściwości `transform`, zamiast na przykład `top`, `left`, `width` itp.
