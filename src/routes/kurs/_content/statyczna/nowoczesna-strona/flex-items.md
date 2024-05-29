---
title: Flex items
description: ""
order: 100
free: false
---

<script>
	import Codepen from "$lib/components/ui/Codepen.svelte";
  import Vimeo from "$lib/components/video/Vimeo.svelte";
</script>

Jak już dowiedzieliśmy się w poprzednim temacie, korzystając z niektórych właściwości CSS zaaplikowanych na rodzica (kontener), możemy wpływać na umiejscowienie dzieci. Sprawdźmy teraz, jakich właściwości CSS możemy użyć na elementach znajdujących się wewnątrz kontenera.

## order

Domyślnie elementy wewnątrz kontenera są układane na głównej osi w kolejności zgodnej z ich wystąpieniem w drzewie HTML. Gdybyśmy jednak chcieli z jakiegoś powodu wyświetlić je w innej kolejności, możemy tę kolejność narzucić za pomocą właściwości `order`:

<Codepen id="BavvoYj" />

## flex-grow

Jedną z bardziej przydatnych właściwości w całej “gamie” flexboxa jest `flex-grow`. Dzięki tej właściwości możemy ustawić dowolny element wewnątrz kontenera w taki sposób, aby wypełniał on całą dostępną wolną przestrzeń w kontenerze. Jako wartość w tym przypadku podajemy dowolną dodatnią całkowitą liczbę. Określa ona, w jakiej części dany element zajmie wolną przestrzeń. W przypadku gdy wszystkie elementy w kontenerze będą miały tę właściwość ustawioną na jednakową wartość (np. 1), wtedy wolna przestrzeń zostanie rozdystrybuowana po równo dla wszystkich elementów. Gdy jednak jednemu z tych elementów zmienimy wartość tej właściwości na `flex-grow: 2`, wtedy temu elementowi zostanie przydzielone dwa razy więcej wolnego miejsca niż pozostałym elementom posiadającym wartość 1.

Domyślną wartości dla wszystkich elementów w kontenerze jest zero (`0`), co oznacza, iż element ten nie zajmuje żadnego wolnego miejsca. Należy pamiętać, że `flex-grow` zajmuje się dystrybucją tylko wolnego miejsca, więc element z wartością `flex-grow: 2` niekoniecznie będzie dwukrotnie większy niż ten z wartością `flex-grow: 1`. Po prostu otrzyma on dwukrotnie więcej wolnego miejsca.

<Codepen id="RwEEWQX" />

Właściwość flex-grow bardzo fajnie współpracuje z właściwością flex-wrap ustawianą na kontenerze flex. Dzięki temu możemy otrzymać stosunkowo łatwo ciekawe responsywne zachowanie elementów na naszej stronie:

<Vimeo id="872091853" h="2cb0c37b29" />

Czy jesteś w stanie poprawić poprzedni przykład w taki sposób, aby otrzymać efekt widoczny na powyższym wideo? 🙂 Pamiętaj, że flex-wrap umieszczamy na kontenerze natomiast flex-grow na jego dzieciach.

## flex-shrink

Właściwość `flex-shrink` jest przeciwieństwem `flex-grow`, a więc element posiadający większą wartość dla tej właściwości będzie “kurczył” się szybciej niż inne elementy.

<Codepen id="oNJJjqV" />

## flex-basis

Za pomocą właściwości `flex-basis` (**Uwaga** – “basis”, nie “basic”), możemy ustawić początkowe wymiary konkretnego dziecka. Ogólnie rzecz biorąc, określa ona domyślny rozmiar elementu przed rozdysponowaniem pozostałej wolnej przestrzeni. Może to być długość (np. `10%`, `2em` itp.) lub słowo kluczowe `auto`. Słowo kluczowe `auto` oznacza, iż początkowy rozmiar będzie bazował na właściwościach `width` oraz `height` i jest to domyślna wartość tej właściwości.

<Codepen id="QWzzjrp" />

## align-self

W poprzednim temacie poznaliśmy właściwość `align-items`, dzięki której mogliśmy rozdysponować elementy wewnątrz kontenera w kierunkach góra-dół lub lewo-prawo w osiach odpowiednio poziomej i pionowej. Właściwość tą aplikowaliśmy na kontener, więc wpływa ona na wszystkie dzieci. Jednak możemy zmienić to zachowanie dla pojedynczych dzieci za pomocą właściwości `align-self`. Przyjmuje ona te same wartości co `align-items`, a więc `flex-start` | `flex-end` | `center` | `baseline` | `stretch` oraz dodatkowo `auto`, co oznacza, że element będzie korzystał z wartości nadanej przez kontener.

<Codepen id="VwqqvxO" />

## flex

Jest w końcu i ona – właściwość `flex` 🙂. Jest ona skróconym zapisem dla poznanych wcześniej właściwości i jej składnia wygląda następująco:

```css
/* 
  Właściwość "flex" jest skrótem dla zapisu właściwości
  "flex-grow", "flex-shrink" oraz "flex-basis".
  { flex: flex-grow flex-shrink flex-basis; }
*/
div {
  /* Domyślna wartość właściwości flex zbudowana jest z domyślnych wartości jej składowych: */
  flex: 0 1 auto;
}
```

## 🕵️ Portfolio

W naszym portfolio posiadamy sporo elementów, które możemy rozmieścić na stronie za pomocą flexboxa. Jeżeli masz w sobie wystarczająco dużo samozaparacia, to możesz już teraz poprawić CSS i zastosować wiedzę zdobytą w tej lekcji. Możesz również zostawić stronę z obecnym kodem CSS i po przerobieniu wszystkich lekcji napisać ją jeszcze raz od zera, tym razem korzystając już z flexboxa. Będziesz wtedy w stanie zauważyć, jak zmienił się kod CSS potrzebny do rozmieszczania elementów.
