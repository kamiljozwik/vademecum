---
title: Selektor atrybutów
description: ''
order: 120
free: false
---

<script>
	import Codepen from "$lib/components/ui/Codepen.svelte";
</script>

Poznaliśmy już dwa specjalne atrybuty, które odgrywają tak znaczącą rolę w CSS, że posiadają swoje własne selektory:

- **id**, wybierany za pomocą notacji `#nazwa-id`,
- **class** (klasa), wybierana za pomocą notacji `.nazwa-klasy`

Za pomocą selektorów CSS możemy jednak wybrać dowolny atrybut istniejący na określonym tagu HTML. Notacja takiego selektora jest dość prosta i składa się z nazwy tagu oraz nawiasu kwadratowego `[]`. Oczywiście za jego pomocą możemy również wybierać atrybuty `id` oraz `class`. W jednej z poprzednich lekcji poznaliśmy już kilka podstawowych atrybutów, spróbujmy więc teraz połączyć je z CSS:

<Codepen id="ExGdgYY" />

Selektory atrybutów pozwalają nam być bardziej szczegółowymi, jeżeli chodzi o ich nazwy. O ile w przypadku selektorów `.klasa` bądź `#id` musimy podać dokładnie pełne nazwy klas lub identyfikatorów, tak w przypadku atrybutów możemy wskazać, od jakiego ciągu znaków wartość atrybutu ma się zaczynać, bądź jakim słowem ma się kończyć. W tym celu, zamiast znaku równości `=` użyjemy jednego z poniższych operatorów:

- `tag[class*="red"]` – wartość atrybutu `class` zawiera słowo “red”,
- `tag[class^="red"]` – wartość atrybutu `class` zaczyna się od słowa “red”,
- `tag[class$="red"]` – wartość atrybutu `class` kończy się na słowo “red”,
- `tag[class|="red"]` – wartość atrybutu `class` zaczyna się od słowa “red” lub “red-“,
- `tag[class~="red"]` – wartość atrybutu `class` zawiera słowo “red” i słowo to jest odseparowane od innych słów spacjami.

<Codepen id="ExGdgax" />
