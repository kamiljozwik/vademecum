---
title: Atrybuty
description: ""
order: 90
free: false
extra_links:
  - title: HTML Attributes
    href: https://www.youtube.com/watch?v=29IbTXYRo5U
---

<script>
	import Codepen from "$lib/components/ui/Codepen.svelte";
</script>

<img alt="" src="/kurs/statyczna/img/podstawy-html/znacznik.png" />

Jak pamiętamy z poprzednich lekcji, znacznik HTML poza swoją nazwą posiada również atrybuty. Są to dodatkowe informacje, jakie można umieścić wewnątrz klamer znacznika. W niektórych przypadkach atrybuty zmieniają wygląd bądź funkcjonalność danego tagu HTML. Wartością atrybutu może być tekst (umieszczany wewnątrz cudzysłowu – patrz grafika powyżej) bądź wartość logiczna `true / false`.

W przypadku tekstu możemy używać wielu słów i rozdzielać je spacją. Konwencją (nie wymogiem) jest używanie również myślników, aby łączyć ze sobą słowa:

```html
<!-- Poniższy tag posiada jeden atrybut o nazwie "atrybut" i wartości "jakies dane bardzo-wazne" -->
<div atrybut="jakies dane bardzo-wazne">Tekst</div>
```

W przypadku wartości logicznej sprawa wygląda nieco inaczej, ponieważ wartość `true / false` determinuje obecność bądź brak atrybutu. W takim przypadku atrybut nie ma żadnej wartości tekstowej.

```html
<!-- Poniższy tag posiada jeden atrybut o nazwie "disabled" i jego wartość wynosi "true"
	 Należy to rozumieć jako: "atrybut disabled jest obecny na tagu"  -->
<button disabled>Tekst</button>
```

Dwa najważniejsze atrybuty, które musimy poznać i zrozumieć, zanim przejdziemy do omawiania tematów związanych z CSS to `id` oraz `class`.

## Atrybut "id"

Atrybut `id` jest unikalną wartością dla dowolnego tagu HTML. Jego wartość nie może się powtarzać na całej stronie internetowej. To znaczy, że jeżeli każdemu z tagów użytych do zbudowania naszej strony internetowej przypisaliśmy atrybut `id`, to wtedy każdy z nich musi posiadać swoją unikatową nazwę. Nie można użyć dwa razy tej samej wartości, nawet jeżeli atrybuty są bardzo daleko od siebie w kodzie. Często spotykaną praktyką w takim wypadku jest całkowite zrezygnowanie z używania atrybutów `id`. Atrybut `id` przyjmuje wartość tekstową, ale wartość taka nie może posiadać spacji i musi być jednym ciągiem tekstu. Dozwolone są jak najbardziej myślniki.

```html
<!-- Jest OK ✅ -->
<h1 id="naglowek">Tekst</h1>

<!-- Jest OK ✅ -->
<h2 id="podtytul">Tekst</h2>

<!-- BŁĄD ⛔ - atrybut id o wartości "podtytul" już istnieje! -->
<h2 id="podtytul">Tekst</h2>

<!-- Jest OK ✅ -->
<h2 id="podtytul-2">Tekst</h2>

<!-- BŁĄD ⛔ - atrybut id nie może zawierać spacji! -->
<h2 id="podtytul 3">Tekst</h2>
```

## Atrybut "class"

Atrybut `class` (klasa) w przeciwieństwie do `id` może być powielony na różnych tagach HTML oraz może zawierać spacje. `class` wykorzystywany jest głównie do grupowania podobnych sobie znaczników. Następnie wygląd wszystkich znaczników posiadających tę samą klasę może zostać ustawiony za pomocą jednego selektora CSS (stanie się to jasne, gdy dojdziemy do lekcji poświęconych CSS). Warto mieć tutaj na uwadze fakt, iż w przypadku `class` wszystkie słowa rozdzielone spacją są pojedynczymi wartościami. Należy to rozumieć tak, iż tag posiadający atrybut `class="big red full-width"`, oznacza, iż de faco posiada on trzy klasy “big“, “red” oraz “full-width“. Coś, co warto mieć w pamięci przed rozpoczęciem nauki CSS.

```html
<!-- Wszystkie poniższe użycia atrybutu "class" są poprawne -->

<!-- jedna klasa: "naglowek" -->
<h1 class="naglowek">Tekst</h1>

<!-- dwie klasy: "podtytul" oraz "big" -->
<h2 class="podtytul big">Tekst</h2>

<!-- trzy klasy: "big", "red-text" oraz "full-width" -->
<h2 class="big red-text full-width">Tekst</h2>
```

Atrybutów `id` oraz `class` możemy użyć na każdym dostępnym tagu HTML. Istnieją jednak atrybuty, które użyte tylko na wybranych tagach będą miały jakiś wpływ na działanie strony. Przykładem może być poznany już atrybut `src`, który użyty na tagu `<img alt="" />` wskazuje lokalizację grafiki do wyświetlenia. Użycie tego atrybutu na tagach `<div>`, `<h1>` czy `<section>` nie wniesie nam zupełnie nic nowego w wyświetleniu tych znaczników na stronie.

Z atrybutów `id` oraz `class` (a szczególnie `class`) będziemy bardzo dużo korzystać podczas nauki CSS. Samo ich użycie nie wnosi żadnych wizualnych bądź funkcjonalnych zmian do kodu HTML. Istnieją jednak atrybuty, które nawet bez użycia CSS potrafią wprowadzić kilka zmian w wyglądzie bądź funkcjonowaniu strony. Przykłady kilku takich atrybutów zobaczymy w poniższym przykładzie:

<Codepen id="GRPeNZW" />

## Wszystkie atrybuty

Wszystkie najważniejsze i najpopularniejsze atrybuty będziemy poznawać wraz z kolejnymi lekcjami. Listę wszystkich atrybutów oraz przypisanych im tagów HTML możemy znaleźć [pod tym linkiem](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes). Zachęcam do przejrzenia tej strony i wyłapaniu wszystkich poznanych do tej pory tagów oraz poeksperymentowaniu poprzez umieszczanie nowych atrybutów na znanych już nam tagach.
