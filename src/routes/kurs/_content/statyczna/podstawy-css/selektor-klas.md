---
title: Selektor class i id
description: ''
order: 110
free: false
---

<script>
	import Codepen from "$lib/components/ui/Codepen.svelte";
	import Selektory from "./selektory.svelte";
</script>

Klasy oraz identyfikatory są normalnymi atrybutami niemal każdego tagu HTML. Jak dobrze pamiętamy, identyfikator (atrybut `id`) musi mieć unikalną wartość w skali całej jednej strony. Dzięki temu, wskazując w selektorze identyfikator, możemy być pewni, iż ostylujemy tylko jeden element na stronie. Musimy jednak być bardzo uważni, aby przez przypadek nie umieścić dwóch takich samych atrybutów `id`. W celu wskazania znacznika, o wybranym przez nas identyfikatorze, podajemy przed nim znak hash `#`:

```html
<html>
	<head>
		<title>Selektory klas i identyfikatorów</title>
	</head>
	<style>
		/* Selektor atrybutu "id" poprzedzamy znakiem "#" */
		#pierwszy {
			color: red;
		}
		#drugi {
			color: green;
		}
	</style>
	<body>
		<p id="pierwszy">Paragraf z <strong>id</strong> o wartości "pierwszy"</p>
		<p id="drugi">Paragraf z <strong>id</strong> o wartości "drugi"</p>
	</body>
</html>
```

Drugim atrybutem, który używany jest niemal tylko i wyłącznie z CSS, jest klasa (atrybut `class`). Klasy są dużo bardziej elastyczne w użyciu niż identyfikatory, więc to głównie z nich będziemy korzystać podczas wszelkich prac z CSS.

Klasa może mieć kilka wartości i wartości te mogą się powtarzać na stronie. Pojedyncze wartości klasy rozdzielane są od siebie spacją. W poniższym przykładzie klasa znacznika `<p>` posiada trzy wartości: `big`, `red` oraz `with-border`:

```html
<p class="big red with-border">Tutaj tekst</p>
```

Korzystając z selektorów, możemy teraz wybrać każdą z tych klas osobno i napisać dla nich zupełnie osobne style CSS. Następnie tag HTML, który posiada te klasy, korzysta ze wszystkich stylów przypisanych do pojedynczych klas. Tak jak w przypadku identyfikatora korzystaliśmy ze znaku `#`, tak w przypadku klasy, będziemy korzystać z kropki `.`.

Zobaczmy to na poniższym przykładzie:

<Codepen id="vYvVGWb" />

Podobnie jak w przypadku selektorów tagów HTML, tak tutaj również możemy być bardziej specyficzni co do wybieranego elementu, poprzez podanie jego zagnieżdżenia w drzewie HTML:

<Codepen id="rNoqepz" />

W przypadku klas dochodzi nam jeszcze jeden sposób na to, aby selektory były bardziej precyzyjne. Tym sposobem jest podanie w selektorze kilku klas, które muszą być obecne na danym elemencie, aby zdefiniowany w nim styl został zaaplikowany. W tym przypadku selektorów klas niczym nie rozdzielamy:

<Codepen id="dywgMJg" />

Wszystkie do tej pory omówione metody na tworzenie selektorów można oczywiście ze sobą łączyć. W jednym selektorze możemy mieć zarówno selektory tagów, jak i klas oraz identyfikatorów. Tak jak w poprzednim przykładzie połączenie ze sobą dwóch klas, oznacza wybranie elementu posiadającego obydwie te klasy. Połączenie ze sobą tagu HTML oraz klasy oznacza wybranie konkretnego tagu posiadającego podaną klasę. Stanie się to dużo jaśniejsze, gdy na jednym przykładzie zbierzemy poznane już metody tworzenia selektorów.

<Selektory />

## Użycie wielu selektorów w jednym przykładzie

Przykład łączący, podane w dwóch poprzednichlekcjach, sposoby na tworzenie selektorów CSS. Czy wszystkie są już dla Ciebie jasne? 🙂

<Codepen id="QWzZNoG" />
