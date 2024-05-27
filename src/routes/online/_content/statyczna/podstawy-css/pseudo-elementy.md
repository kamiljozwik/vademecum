---
title: Pseudo elementy
description: ''
order: 230
free: false
extra_links:
  - title: CSS Pseudo-elements in 100 Seconds
    href: https://www.youtube.com/watch?v=e1KpKBHJOrA
  - title: Learn CSS Pseudo Elements In 8 Minutes
    href: https://www.youtube.com/watch?v=OtBpgtqrjyo
---

<script>
	import Codepen from "$lib/components/ui/Codepen.svelte";
</script>

Pseudo elementy w CSS najczęściej są używane do stylowania małych elementów, których nie ma w kodzie HTML, ale chcemy, aby pojawiły się “za”, lub “przed” konkretnym elementem wybranym za pomocą selektora. Tym elementem niejako “wstrzykniętym” przez CSS do kodu HTML może być tekst lub grafika. O tym, co będzie znajdowało się w pseudo elemencie decyduje wartość właściwości `content`. O ile w poprzedniej lekcji pseudo klasy oznaczaliśmy jednym dwukropkiem, tak pseudo elementy będziemy już oznaczać dwoma dwukropkami `::`.

Składania dla pseudo elementów `::before` i `::after` wygląda następująco:

```css
/* Umieszczenie pseudo elementu w formie tekstu "tekst przed" przed każdym tagiem <div> */
div::before {
	content: 'tekst przed';
}

/* Umieszczenie pseudo elementu w formie tekstu "tekst za" za każdym tagiem <div> */
div::after {
	content: 'tekst za';
}
```

Właściwość `content` jest wymagana. Bez niego nasz pseudo element niewyrenderuje się na stronie. Może on przyjmować następujące wartości:

- **tekst**, np. `tekst za tagiem`, albo pusty ciąg znaków `""`,
- **adres URL grafiki**, np. `url(/img/grafika.jpg)`.

Brzmi to na pewno dość dziwnie, czytając o tym na sucho, więc standardowo zagłębmy się w przykładowy kod:

<Codepen id="MWZPZex" />

Poza dwoma najpopularniejszymi pseudo elementami wymienionymi wyżej, mamy do dyspozycji jeszcze trzy inne:

- `::first-letter` – stylowanie pierwszej litery z bloku tekstu,
- `::first-line` – stylowanie pierwszej linii z bloku tekstu,
- `::selection` – stylowanie tekstu zaznaczonego przez użytkownika.

Te elementy są już dużo łatwiejsze do zrozumienia, więc spójrzmy znowu na przykłady:

<Codepen id="YzdJdGN" />
