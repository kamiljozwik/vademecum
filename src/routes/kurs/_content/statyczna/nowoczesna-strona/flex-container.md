---
title: Flex container
description: ''
order: 90
free: false
---

<script>
	import Codepen from "$lib/components/ui/Codepen.svelte";
</script>

Tak jak wspomnieliśmy sobie na wstępie to kontener flex jest odpowiedzialny za to, w jaki sposób będą ułożone znajdujące się w nim elementy. Aby utworzyć kontener z dowolnego tagu HTML, wystarczy ustawić na nim właściwość `display: flex`. Od teraz wszystkiego jego dzieci będą automatycznie dopasowywane do tego, aby zmieścić się w jednej poziomej linii kontenera. Ta linia nosi również nazwę głównej osi, gdyż domyślnie elementy wewnątrz kontenera są umieszczane jeden obok drugiego, dokładnie tak jak ma to miejsce przy właściwości `display: inline-block`.

<Codepen id="yLGGYXb" />

**Uwaga** - Warto podkreślić to jeszcze raz – wszystkie właściwości CSS dotyczące flexbox, które będziemy omawiać w tej lekcji, będą aplikowane na znacznik HTML będący kontenerem. Jednak to nie kontener będzie zmieniał swój wygląd bądź położenia a wszystkie elementy znajdujące się w jego wnętrzu. W kolejnym temacie tej lekcji – “flex items”, powiemy sobie jakich właściwości możemy użyć na elementach znajdujących się wewnątrz kontenera.

## flex-direction

Kontener zawsze układa swoje dzieci wzdłuż głównej osi. Domyślnie oś ta jest pozioma ze zwrotem skierowanym w prawą stronę. To mogliśmy zauważyć na poprzednim przykładzie – elementy w kontenerze były umiejscowione poziomo od lewej do prawej strony. Możemy jednak zmienić domyślny kierunek głównej osi i utrzymać ją w poziomie i układać od prawej do lewej strony bądź ustawić oś pionowo i układać nasze elementy w kolejności góra ➡ dół (lub dół ➡ góra). Wszystko to zrobimy przy użyciu właściwości `flex-direction`. Przyjmuje ona następujące wartości:

- **row** – domyślne ułożenie elementów,
- **row-reverse** – ułożenie elementów w poziomie od prawej do lewej,
- **column** – ułożenie elementów w pionie,
- **column-reverse** – ułożenie elementów w pionie od dołu do góry.

Warto również tutaj nadmienić, iż w przypadku ułożenia poziomego, dzieci będą zajmowały (jeżeli nie zostanie to nadpisane właściwością `height`) całą dostępną wysokość kontenera. Z kolei w przypadku głównej osi ułożonej w pozycji pionowej, dzieci będą zajmowały cały szerokość kontenera (oczywiście, jeżeli nie będzie to nadpisane właściwością `width`).

<Codepen id="wvRRKqM" />

## flex-wrap

Domyślnie flexbox będzie utrzymywał wszystkie swoje dzieci w jednej w linii, zmniejszając ich szerokość, jeżeli będzie taka potrzeba. Jedną z kolejnych funkcjonalności, jakie mamy do naszej dyspozycji to możliwość “przerzucenia” elementów do kolejnego wiersza w sytuacji, gdy elementy nie będą już nam mieściły się na małym ekranie i zamiast “ściskać” je w jednej linii, lepszym rozwiązaniem będzie przeniesienie niektórych elementów do niższego (bądź wyższego) wiersza. Możemy to zrobić za pomocą właściwości `flex-wrap`. Właściwość ta przyjmuje trzy wartości:

- **nowrap** – domyślne zachowanie, elementy zostają zawsze na jednej linii,
- **wrap** – przerzucenie elementu do kolejnego wiersza w momencie, gdy flexbox musiałby zmniejszać element,
- **wrap-reverse** – to, co wyżej, tylko że element jest przenoszony do wiersza powyżej głównej osi.

<Codepen id="mdaaeMN" />

## flex-flow

Właściwości flex-direction oraz flex-wrap możemy zapisać za pomocą jednej właściwości flex-flow:

```css
/*
  flex-flow: flex-direction flex-wrap;
*/
div {
	/* Wartość domyślna: */
	flex-flow: row nowrap;
}
```

## justify-content

Przechodzimy teraz do sekcji, dzięki której zobaczymy, jak łatwo jest pozycjonować elementy wewnątrz kontenera. W pierwszej kolejności zajmiemy się rozmieszczeniem elementów na głównej osi. Jak pamiętamy, oś ta może być pozioma lub pionowa. Należy o tym pamiętać podczas stosowania pierwszej “pozycjonującej” właściwości – `justify-content`.

Właściwość ta przyjmuje następujące wartości:

- **flex-start** – umiejscowienie elementów na początku głównej osi,
- **flex-end** – umiejscowienie elementów na końcu głównej osi,
- **center –** umiejscowienie elementów w środku osi,
- **space-between** – umiejscowienie pierwszego elementu na początku osi, ostatniego na końcu i umieszczenie reszty w równych odległościach od siebie,
- **space-around** – podobnie jak wyżej, tylko pierwszy i ostatni element są odsunięte od początkowej i końcowej krawędzi osi. Odległość ta jest dwukrotnie mniejsza niż odległości między elementami.
- **space-evenly** – wszystkie elementy odsunięte od siebie o tę samą odległość, również pierwszy i ostatni od brzegów.

Co warte odnotowania, to odległości pomiędzy elementami zachowują się w sposób responsywny, więc zmiana rozmiaru okna będzie zbliżała te elementy do siebie.

<Codepen id="NWeeGwr" />

W przypadku gdy nasza główna oś zostanie przestawiona na oś pionową za pomocą właściwości flex-direction, wtedy wszystkie wartości właściwości justify-content również będą aplikowane w kierunku pionowym.

<Codepen id="XWoomzE" />

## align-items

We wszystkich dotychczasowych przykładach nasze elementy miały zawsze tę samą wysokość, więc mieliśmy wrażenie, że elementy są zawsze wyrównane do środka. W przypadku posiadania w kontenerze elementów o różnych wysokościach możemy je łatwo umiejscawiać na osi głównej za pomocą właściwości `align-items`. W przypadku osi poziomej będziemy przemieszczać elementy góra – dół, natomiast przy osi pionowej lewo-prawo.

Wartości, które są do naszej dyspozycji:

- **flex-start** – wyrównanie elementów do góry (do lewej),
- **flex-end** – wyrównanie elementów do dołu (do prawej),
- **center** – wyrównanie elementów do środka,
- **stretch** – rozciągnięcie elementów,
- **baseline** – wyrównanie elementów do zawartego w nich tekstu.

<Codepen id="GRPPpyR" />

## align-content

Pozostał nam jeszcze jeden przypadek rozmieszczania elementów wewnątrz kontenera, czyli sytuacja, gdy kontener ma ustawioną właściwość `flex-wrap: wrap`. W takim przypadku elementy z jednej linii mogą przeskoczyć do kolejnych/poprzednich linii w momencie, gdy nie mieszczą się już w jednej osi. Właściwość `align-content` umożliwia nam rozmieszczanie kilku linii jednego kontenera.

Dostępne wartości są miksem dwóch poprzednich właściwości:

- **flex-start**
- **flex-end**
- **center**
- **stretch**
- **space-between**
- **space-around**

<Codepen id="eYbbpyy" />
