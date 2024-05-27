---
title: CSS Position
description: ''
order: 80
free: false
extra_links:
  - title: Learn CSS Position In 9 Minutes
    href: https://www.youtube.com/watch?v=jx5jmI0UlXU
  - title: Learn CSS position in 5 minutes
    href: https://www.youtube.com/watch?v=Pp7UXS3P6jY
  - title: Learn CSS Positioning Quickly With A Real World Example
    href: https://www.youtube.com/watch?v=MxEtxo_AaZ4
---

<script>
	import Codepen from "$lib/components/ui/Codepen.svelte";
</script>

`Position` jest jedną z tych właściwości CSS, którą należy naprawdę dobrze zrozumieć, aby uniknąć problemów i frustracji związanych z pozycjonowaniem elementów na stronie. Za jej pomocą możemy dokonywać zarówno delikatnych poprawek w ułożeniu elementów, jak i umieszczać je w dowolnie wybranym miejscu na stronie, niezależnie od umiejscowienia znacznika w drzewie HTML.

## top, bottom, left, right

Elementy na stronie możemy przemieszczać w czterech kierunkach: góra – dół – lewo – prawo. Służą do tego cztery właściwości CSS: `top`, `bottom`, `left`, `right`. Ich wartości mogą przyjmować zarówno jednostki względne, jak i bezwzględne. Używając jednej z powyższych właściwości, ustalamy, na jaką odległość od wybranego boku chcemy odsunąć nasz element.

Zapis `left: 10px` odsunie wybrany element o `10px` od lewej krawędzi, czyli de facto przesunie go w prawo. Podobnie przy zapisie `top: 20px`, wybrany znacznik zostanie odsunięty od górnej krawędzi, a więc na stronie będzie wyglądał jak opuszczony w dół. Należy mieć to na uwadze, gdyż bardzo łatwo tutaj o pomyłkę.

## Position

Właściwość `position` może mieć ustawioną jedną z pięciu wartości:

- **static** – domyślna wartość ustawiana na wszystkich znacznikach. Blokuje nam ona możliwość przemieszczania elementów i umożliwia Normal document flow.
- **relative** – wartość, która umożliwia nam "poruszanie" elementem za pomocą atrybutów `top`, `bottom`, `left`, `right` . Przemieszczany element w dalszym ciągu będzie zajmował na stronie to miejsce, które zostało mu przydzielone w wyniku Normal document flow a jego przemieszczenie będzie miało tylko efekt wizualny.
- **absolute** – poprzez zastosowanie tej wartości "wyjmujemy" element z Normal document flow. Pozostałe elementy na stronie będą rozmieszczane tak, jakby ten element w ogóle nie znajdował się w drzewie HTML, czyli na jego miejscu pojawi się kolejny znacznik w drzewie. W dalszym ciągu możemy poruszać elementem przy użyciu właściwości `top`, `bottom`, `left`, `right`.
- **fixed** – Kolejna wartość, która powoduje usunięcie elementu z normalnego renderowania strony. W tym przypadku pozycjonujemy element w stosunku do okna przeglądarki, a więc element ten jest nieruchomy podczas przewijania strony. Często używane do "przyklejenia" nawigacji do górnej części strony, dzięki czemu jest ona zawsze widoczna podczas przeglądania strony.
- **sticky** – połączenie `relative` oraz `fixed`. Element z tą wartością zachowuje się jak element `relative` do czasu, gdy nie osiągniemy ustawionej przez nas wartości "przeskrolowania". Wtedy element zmienia swoje zachowanie na `fixed`, a więc zostaje cały czas widoczny stronie.

## Przykład

Właściwość ta jest dość trudna do opisania, więc najlepiej będzie posłużyć się dobrze objaśnionym przykładem. Poniżej możemy zobaczyć, w jaki sposób powyższe wartości wpływają na położenie różnych elementów na stronie.

<Codepen id="yLGQpVR" />

## 🕵️ Portfolio

Na rozwijanej przez nas stronie portfolio nie mamy zbyt dużo przedmiotów, które moglibyśmy przesuwać po ekranie, ale możemy pokusić się o “przyklejenie” górnego menu nawigacyjnego do górnej krawędzi ekranu i mieć je zawsze widoczne podczas scrollowania strony. Dodatkowo możemy również umieścić “zakotwiczony” przycisk w prawym dolnym rogu (podobnie jak w poprzednim przykładzie), który będzie kierował na wybraną przez nas stronę (np. stronę kontaktową).
