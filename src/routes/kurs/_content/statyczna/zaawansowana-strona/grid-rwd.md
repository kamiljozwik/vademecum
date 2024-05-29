---
title: Grid + RWD
description: ""
order: 90
free: false
extra_links:
  - title: Learn how to create a responsive CSS grid layout
    href: https://www.youtube.com/watch?v=sKFW3wek21Q
  - title: Responsive CSS Grid Tutorial
    href: https://www.youtube.com/watch?v=68O6eOGAGqA
  - title: Responsive CSS Grid No Media Queries
    href: https://www.youtube.com/watch?v=k3YHfp8Bp_E
---

<script>
	import Codepen from "$lib/components/ui/Codepen.svelte";
	import Vimeo from "$lib/components/video/Vimeo.svelte";
</script>

Czy pamiętacie jeszcze media-queries? 🙂 Za ich pomocą możemy dopasowywać wygląd naszej strony do szerokości ekranu urządzenia, na której jest przeglądana. Dopasowywanie to wykonujemy poprzez nadpisywanie bądź dodawania nowych właściwości CSS w określonych przedziałach szerokości ekranu. W poprzednim temacie poznaliśmy jedną właściwość CSS, za pomocą której możemy zdefiniować layout całej strony – `grid-template-areas`.

Łącząc te dwie rzeczy: media query + CSS grid, otrzymamy niezwykle łatwy, szybki i przyjemny sposób na tworzenie responsywnych stron internetowych. Wszystko, co musimy zrobić to w zależności od rozmiaru ekranu zmieniać rozmiar siatki oraz rozmieszczone na niej obszary.

<Codepen id="KKbJpyL" />

Powyższy layout będzie zachowywał się następująco:

<Vimeo id="872587240" h="bf681b5df4" />
