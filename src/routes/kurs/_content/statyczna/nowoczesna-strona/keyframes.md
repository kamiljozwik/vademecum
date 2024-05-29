---
title: Keyframes
description: ''
order: 150
free: false
extra_links:
  - title: An Interactive Guide to Keyframe Animations
    href: https://www.joshwcomeau.com/animation/keyframe-animations/
---

<script>
	import Codepen from "$lib/components/ui/Codepen.svelte";
</script>

`Transition` umożliwia nam wykonywanie prostych animacji na zmieniających się wartościach CSS. Sprawdza się to bardzo dobrze w przypadku dynamicznych akcji na stronie – przykładowo najechanie kursorem na element, zaznaczenie checkboxa, walidacja formularza, itp.

W sytuacji, gdy chcemy stworzyć animację, która wykonywała się będzie automatycznie po uruchomieniu strony, możemy skorzystać z kolejnej funkcjonalności CSS – `@keyframes { ... }`. W tym przypadku definiujemy wartości początkowe, pośrednie oraz końcowe wewnątrz wspomnianego już bloku `@keyframes` i łączymy go z wybranym przez nas elementem za pomocą właściwości CSS `animation`.

```css
/* Definicja animacji - po słowie @keyframes musimy podać jej nazwę */
@keyframes fly {
	/* Stan początkowy animacji */
	from {
		/* Właściwości CSS */
	}
	/* Stan końcowy animacji */
	to {
		/* Właściwości CSS */
	}
}
```

Najprostszy przypadek użycia keyframes możemy zobaczyć w poniższym przykładzie:

<Codepen id="abPPxqg" />
