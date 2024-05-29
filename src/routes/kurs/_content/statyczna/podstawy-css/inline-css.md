---
title: Inline CSS
description: ""
order: 50
free: true
extra_links:
  - title: Basic Inline Styling
    href: https://www.youtube.com/watch?v=jH_WY-sQ8Lg
---

<script>
	import Codepen from "$lib/components/ui/Codepen.svelte";
</script>

Inline CSS polega na umieszczaniu kodu CSS bezpośrednio na znaczniku, który chcemy ostylować. W jednej z poprzednich lekcji widzieliśmy blok CSS składający się z selektora oraz różnych deklaracji.

W przypadku umieszczania CSS za pomocą metody inline kod umieszczamy bezpośrednio na tagu, a więc nie będziemy mieli selektora. Deklaracja CSS zostanie zaaplikowana na ten znacznik, na którym się znajduje.

Jeżeli umieszczamy coś na znaczniku HTML, to już wiemy, że musi być to atrybut. W tym przypadku będzie to atrybut `style`. Wartością tego atrybutu będzie zobrazowana wyżej deklaracja.

<img alt="" src="/kurs/statyczna/img/podstawy-css/inline.png" />

Jak widzimy na powyższym przykładzie, wartością atrybutu `style` jest ciąg tekstowy, dlatego też należy umieścić go w cudzysłowie a pojedyncze deklaracje rozdzielamy średnikiem `;`.

Zobaczmy, jak to wygląda w kodzie:

<Codepen id="zYyJagJ" />

Nasza strona nabrała w końcu jakichś kolorów i kształtów. Dosłownie kilka linijek CSS potrafi sprawić prawdziwe cuda 🙂. Wracając do samej metody osadzania kodu CSS w ten sposób, to jest to dobry sposób na jakieś małe style, szybkie poprawki, czyli ogólnie rzecz biorąc nic dużego. Nie będziemy w ten sposób na pewno stylować całych stron, gdyż metoda ta, choć wydaje się łatwa i szybka, jest niestety mało wydajna. Jeżeli chcemy w podobny sposób ostylować wiele elementów, to style te musimy wielokrotnie kopiować, jak również w przypadku późniejszych poprawek musimy nanosić je w wielu miejscach.

Tak więc metody tej staramy się unikać, ale gdy zachodzi taka potrzeba, to możemy użyć jej do małych, głównie kosmetycznych poprawek.
