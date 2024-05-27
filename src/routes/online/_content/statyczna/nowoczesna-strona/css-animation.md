---
title: CSS Animation
description: ''
order: 160
free: false
extra_links:
  - title: Learn CSS Animation In 15 Minutes
    href: https://www.youtube.com/watch?v=YszONjKpgg4
  - title: Learn CSS Animations In 20 Minutes - For Beginners
    href: https://www.youtube.com/watch?v=SgmNxE9lWcY
  - title: 10 CSS animation tips and tricks
    href: https://www.youtube.com/watch?v=y8-F5-2EIcg
  - title: CSS Animation Tutorial
    href: https://www.youtube.com/playlist?list=PL4cUxeGkcC9iGYgmEd2dm3zAKzyCGDtM5
    desc: Leciwy, aczkolwiek moim zdaniem w dalszym ciągu jeden z lepszych mini-kursów dotyczących animacji CSS
---

<script>
	import Codepen from "$lib/components/ui/Codepen.svelte";
</script>

W poprzednim temacie poznaliśmy nową właściwość CSS – `animation`. Jak na razie użyliśmy jej w bardzo prostym przykładzie gdzie użyliśmy dwóch wartości – nazwy animacji: `animation-name` (równoważnej z nazwą `keyframe`) oraz jej długości: `animation-duration`. Zajmiemy się teraz kolejnymi wartościami i zobaczymy, w jaki sposób możemy jeszcze kontrolować nasze animacje.

## animation-delay

Właściwość `animation-delay` umożliwia nam opóźnienie wykonania animacji.

## animation-fill-mode

W poprzednim przykładzie widać, iż po zakończeniu animacji, animowany obiekt wraca do swojego początkowego położenia. Zachowanie to możemy zmienić za pomocą właściwości `animation-fill-mode`. Przez położenie początkowe rozumiemy tutaj położenie elementu bez aplikowania stylów z bloków `from` lub `to`.

Właściwość `animation-fill-mode` przyjmuje cztery wartości:

- **none** – domyślne zachowanie, powrót do położenia początkowego po wykonaniu animacji,
- **forwards** – zachowanie stylów z bloku `to` po wykonaniu animacji,
- **backwards** – zaaplikowanie stylów z bloku `from` jeszcze przed uruchomieniem animacji i powrót do położenia początkowego po jej zakończeniu,
- **both** – zaaplikowanie stylów z bloku `from` jeszcze przed uruchomieniem animacji i zachowanie stylów z bloku `to` po wykonaniu animacji.

<Codepen id="jOXXRKx" />

## animation-iteration-count

Wszystkie nasze animacje jak na razie wykonywały się tylko raz i na tym kończyły swoją pracę. Jeżeli planujemy je zapętlić, możemy to zrobić za pomocą właściwości `animation-iteration-count`. Jako wartość możemy tutaj podać liczbę odtworzeń animacji, np. `3` lub słowo `infinite`, aby animacja wykonywała się w nieskończoność.

<Codepen id="VwqqNBa" />

## animation-direction

Nazwa omawianej tutaj właściwości już zdradza jej zastosowanie, a więc `animation-direction` pozwala nam na odtworzenie animacji w przeciwnym kierunku. To jednak nie wszystko, mamy tutaj dostępne cztery różne wartości:

- **normal** – animacja odtwarzana normalnie, a więc `from` ➡️ `to`,
- **reverse** – animacja odtwarzana odwrotnie, a więc `to` ➡️ `from`,
- **alternate** – animacja odtwarzana `from` ➡️ `to`, następnie `to` ➡️ `from` i tak w kółko,
- **alternate-reverse** – animacja odtwarzana `to` ➡️ `from`, następnie `from` ➡️ `to` i tak w kółko.

<Codepen id="VwqqNGa" />

## animation-timing-function

Na temat `timing-function` mówiliśmy sobie w temacie poświęconym właściwości `transition`. Wymieniliśmy sobie tam przykładowe wartości, takie jak `ease-in`, `ease-out` itp. Właściwość `animation-timing-function` przyjmuje dokładnie te same wartości. Jedyną różnicą jest tutaj wartość domyślna. W przypadku `transition` jest to `linear`, czyli animacja wykonuje się cały czas z ta samą prędkością, natomiast tutaj wartością domyślną jest `ease`, czyli najpierw powolny start, następnie przyspieszenie i zwolnienie pod koniec animacji.

<Codepen id="rNoobZR" />

## shorthand

Wszystkie powyższe właściwości możemy skrócić do zapisu jednej właściwości: `animation`. Z racji tego, iż wartości powyższych właściwości są różne od siebie, nie ma znaczenia kolejność ich zastosowania. Jedyne powtarzające się wartości to czas trwania i opóźnienie. Obydwie te wartości wyrażone są w jednostce czasu, więc wartość występująca jako pierwsza jest przyjmowana za czas trwania animacji, natomiast ta druga jest opóźnieniem.

Przykładowy skrócony zapis może wyglądać następująco:

```css
div {
	/* Czy pamiętasz do jakich właściwości zostaną przypisane poniższe wartości? 😉 */
	animation: fly 4s linear infinite reverse 2s;
}
```

## Więcej niż dwa stany

Do tej pory w naszych animacjach wykorzystywaliśmy tylko dwa stany animacji: `from` oraz `to`. Możemy jednak zdefiniować ich więcej. Robimy to, zamieniając `from/to` na wartości procentowe:

```css
@keyframes name {
  /* Stan początkowy, równoznaczny z wartością "from" */
  0% { ... }
  /* Stan pośredni - wykonanie 30% animacji */
  30% { ... }
  /* Stan pośredni - wykonanie połowę animacji */
  50% { ... }
  /* Stan końcowy, równoznaczny z wartością "to" */
  100% { ... }
}
```

<Codepen id="BavvEqw" />

## Łączenie animacji

W celu osiągania jeszcze ciekawszych efektów możemy łączyć ze sobą wiele animacji. W tym przypadku możemy tworzyć kilka wyrażeń `@keyframes`, a następnie łączyć je ze sobą za pomocą właściwości `animation`, po prostu podając kolejne animacje po przecinku:

<Codepen id="JjwwVeo" />

## 🕵️ Portfolio

Rozwijana przez nas strona aż prosi się o to, aby umieścić na niej animacje. Przykładowe elementy, które możemy spróbować animować to elementy górnego menu nawigacyjnego, awatar Sherlocka, przyciski prowadzące do rozwiązanych spraw, karty cennika.
