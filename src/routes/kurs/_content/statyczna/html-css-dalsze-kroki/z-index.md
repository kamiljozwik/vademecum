---
title: z-index
description: ""
order: 90
free: false
extra_links:
  - title: z-index & Stacking Order
    href: https://www.youtube.com/watch?v=k4taTzkhzHc
  - title: 4 Reasons Your Z-Index Isn't Working
    href: https://www.youtube.com/watch?v=qYi-OLf5q5g
  - title: z-index and stacking context explained
    href: https://www.youtube.com/watch?v=uS8l4YRXbaw
---

<script>
	import Codepen from "$lib/components/ui/Codepen.svelte";
</script>

Przesuwając elementy na stronie, trafimy w końcu na sytuację, gdy elementy te zaczną się na siebie nakładać. W tej lekcji skupimy się na tym, w jaki sposób możemy za pomocą CSS decydować które elementy mają znaleźć się "nad" innymi elementami na stronie. Właściwością, która jest odpowiedzialna za to zachowanie jest `z-index`.

<img alt="" src="/kurs/statyczna/img/html-css-dalsze-kroki/zindex.png" />

Okno przeglądarki można opisać trzema wymiarami. Dwa z nich są dość oczywiste – jest to szerokość i wysokość, trzeci natomiast opisuje właśnie nakładające się na siebie elementy. Jest to zobrazowane na powyższej grafice jako oś Z (czyli ta oś niejako "wychodząca" z ekranu w kierunku użytkownika). Ustawiając wartość właściwości `z-index`, wysuwamy bliżej użytkownika lub chowamy pod innymi elementami wybrane przez nas znaczniki HTML.

## Stacking order

W dalszej części lekcji będziemy posługiwać się pojęciem "pozycjonowany element". Przez ten zwrot będziemy rozumieć znacznik HTML, który posiada ustawioną właściwość `position` na każdą inną wartość niż `static`, która jest domyślną wartością dla każdego tagu HTML. Elementy z domyślną wartością dla właściwości `position` określamy jako "niepozycjonowane".

Omówmy sobie teraz dokładnie jakimi zasadami kieruje się przeglądarka, umieszczając elementy jeden na drugim i tym samym tworząc tzw. Stacking order ("Kolejność układania"):

- Nie możemy nakładać `z-index` na elementy niepozycjonowane.
- Elementy pozycjonowane nieposiadające właściwości `z-index` bądź mające tę właściwość ustawioną jako równą, bądź większą od zera, są wyświetlane nad elementami niepozycjonowanymi.
- Elementy pozycjonowane z ujemną wartością `z-index` są wyświetlane pod elementami niepozycjonowanymi.
- `z-index` jako wartość przyjmuje tylko wartości liczbowe (brak jednostki).
- Jeżeli dwa elementy posiadają tą samą wartość `z-index`, wtedy element występujący "później" w drzewie HTML umieszczony jest wyżej.

## Stacking context

Stacking context ("kontekst ułożenia") jest chyba najczęściej sprawiającym problemy zagadnieniem związanym z właściwością `z-index`. Wszystko to, co do tej pory napisaliśmy (włączając w to grafikę na początku lekcji), jest dość proste do czasu, gdy pozycjonowane przez nas elementy posiadają tego samego "rodzica" (są "rodzeństwem"). Sprawa zaczyna się nieco komplikować w sytuacji, gdy ustawiamy `z-index` na elementach zagnieżdżonych – wtedy nie zawsze "większy" znaczy "wyżej".

W drzewie HTML każdy "rodzic" tworzy "grupę" elementów w nim zagnieżdżonych. Wartości `z-index` ustawione na "dzieciach", mają znaczenie tylko w tej jednej grupie. Tę koncepcję najlepiej jest zrozumieć, patrząc na przykład:

<Codepen id="poqQpwQ" />
