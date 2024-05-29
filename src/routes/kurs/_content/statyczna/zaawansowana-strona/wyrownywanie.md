---
title: Wyrównywanie
description: ''
order: 70
free: false
---

<script>
	import Codepen from "$lib/components/ui/Codepen.svelte";
</script>

Jak mogliśmy zauważyć w poprzednich przykładach, elementy będące elementami siatki zajmują całą dostępną dla nich powierzchnię, dokładnie tak jak zachowują się elementy wewnątrz kontenera flexbox mające ustawioną właściwość `{ align-items: stretch }`. Rozciągnięcie elementu na całą dostępną powierzchnię jest domyślnym zachowaniem w przypadku CSS Grid. Możemy to oczywiście zmienić, stosując odpowiednie właściwości zarówno na rodzicu, jak i na poszczególnych elementach nałożonych na siatkę.

W pierwszej kolejności spójrzmy na właściwości, które możemy nakładać na rodzica i tym samym odpowiednio pozycjonować wszystkie elementy. Do naszej dyspozycji są dwie właściwości:

- **align-items** (umiejscowienie w kierunku “góra – dół”) – dostępne wartości: `stretch` (domyślnie) | `start` | `end` | `center`.
- **justify-items** (umiejscowienie w kierunku “lewo – prawo”) – dostępne wartości: `stretch` (domyślnie) | `start` | `end` | `center`.

<Codepen id="XWoObgb" />

## Ułożenie pojedynczych elementów

Jeżeli naszym celem jest zmiana położenia jednego z elementów siatki, wtedy możemy skorzystać z właściwości `align-self` oraz `justify-self`, które to aplikujemy bezpośrednio na interesującym nas dziecku. Właściwości te przyjmują te same wartości co `align-items` oraz `justify-items`.

<Codepen id="NWeoqgE" />
