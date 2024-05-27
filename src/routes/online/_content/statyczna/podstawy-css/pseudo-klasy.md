---
title: Pseudo klasy
description: ''
order: 220
free: false
extra_links:
  - title: CSS Pseudo-classes in 100 Seconds
    href: https://www.youtube.com/watch?v=kpXKwDGtjGE
---

<script>
	import Codepen from "$lib/components/ui/Codepen.svelte";
</script>

Pseudo klasy pozwalają nam na jeszcze dokładniejszy wybór elementów na stronie. Dzięki nim możemy wybierać elementy, bazując na ich aktualnym stanie, bądź celując w specyficzne dzieci rodzica. Mówiąc "stan", mamy na myśli takie rzeczy jak kliknięty link bądź przycisk, zablokowane do edycji pole tekstowe, zaznaczony checkbox, element, nad którym znajduje się kursor myszy itp.

W przypadku elementów children możemy za pomocą CSS ostylować np. co drugi element listy, powiększyć czcionkę tylko pierwszego elementu wewnątrz wybranego tagu, itp. Może to się teraz wydawać trochę trudne do zrozumienia, ale poniższe przykłady na pewno rozwieją wszelkie wątpliwości.

Najczęściej używane pseudo klasy:

- **:active** – element, który został aktywowany przez użytkownika. Najczęściej używany z przyciskami i linkami,
- **:checked** – zaznaczony element checkbox, radio bądź opcja z listy rozwijanej,
- **:default** – domyślnie ustawiona wartość w elementach wymienionych powyżej,
- **:disabled** – element nieaktywny,
- **:empty** – pusty tag HTML (brak “dzieci”),
- **:enabled** – aktywny element, przeciwieństwo disabled,
- **:focus** – element z tzw. fokusem, czyli np. input, w którym znajduje się aktualnie kursor,
- **:hover** – element, nad którym znajduje się kursor myszy,
- **:link** – link, w który nikt jeszcze nie kliknął,
- **:not()** – element niepasujący do selektora,
- **:root** – równoznaczne z wyborem tagu HTML, wrócimy do niego przy zmiennych CSS,
- **:visited** – odwiedzony (kliknięty) link,
- **:only-child** – element nieposiadający “rodzeństwa”,
- **:first-child** – pierwsze “dziecko” (child) w grupie “rodzeństwa” (siblings),
- **:last-child** – ostatnie “dziecko” (child) w grupie “rodzeństwa” (siblings),
- **:nth-child()** – dokładnie określone “dziecko” (child) w grupie “rodzeństwa” (siblings),
- **:nth-last-child()** – dokładnie określone “dziecko” (child) w grupie “rodzeństwa” (siblings), licząc od tyłu.

Mam nadzieję, że opisy powyższych pseudo klas nieco rozjaśniły nam, w jakich sytuacjach możemy z nich korzystać. Listę wszystkich dostępnych pseudo klas znajdziemy [pod tym linkiem](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes).

Jak widać na liście, wszystkie pseudo klasy są poprzedzone znakiem dwukropka (`:`). To w ten właśnie sposób będziemy w selektorze CSS oznaczali ich użycie. Spójrzmy teraz na przykłady. Użyjemy w nich kilku popularnych pseudo klas.

<Codepen id="WNLaLry" />

## nth-child()

Wybór poszczególnych “dzieci” jest dość powszechnie używaną pseudo klasą oraz jednocześnie potrafi sprawić wiele problemów początkującym programistom. Dlatego też przykłady dotyczące tej funkcjonalności zostaną przedstawione i omówione na osobnych przykładach:

### Uwaga!

Pseudo klasy umieszczamy na tagu, który chcemy wybrać selektorem, a nie na rodzicu. Chcąc wybrać pierwszy element listy `<ul>` może w pierwszej chwili wydawać sie, że `:first-child` powinien trafić właśnie na `<ul>` – przecież chcemy wybierać dzieci elementu. "Nic bardziej mylnego" 😉
Selektor `ul:first-child` celuje w dalszym ciągu tylko w tag `<ul>`. Pseudo klasa tylko rozszerza ten wybór, mówiąc “wybierzmy ten tag `<ul>`, który dodatkowo jest pierwszym dzieckiem dowolnego innego tagu”.

<Codepen id="GRPYPZE" />
