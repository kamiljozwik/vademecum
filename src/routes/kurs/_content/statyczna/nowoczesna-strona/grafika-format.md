---
title: Grafika - format
description: ""
order: 50
free: false
extra_links:
  - title: What’s the Best Image Format for Your Website?
    href: https://themeisle.com/blog/best-image-format/
---

Wiemy już, w jaki sposób wstawiać grafikę na stronę, przyjrzyjmy się teraz jakiego rodzaju formaty graficzne mamy do naszej dyspozycji w przypadku stron internetowych.

## Wielkość pliku

Zanim przejdziemy już do konkretów, jeszcze jedna uwaga. Grafiki będą dość często wąskim gardłem dla wydajności naszej strony. Użytkownik musi zawsze pobrać wszystkie obrazki, aby zobaczyć naszą stronę w pełnej okazałości. O ile sama strona (kod HTML to tylko tekst) będzie miała relatywnie mały rozmiar (kilka/kilkanaście kB) to wielkość grafiki możemy liczyć w kilku/kilkunastu MB. Musimy więc zrobić wszystko, aby pliki pobierane przez użytkownika były możliwie jak najmniejsze. Dzięki temu nasza strona będzie szybsza i dzięki temu dużo przyjemniejsza do przeglądania.

Rozmiar grafiki na stronie można również zmieniać za pomocą CSS, jednak zmiany te mają wyłącznie charakter wizualny i w dalszym ciągu najpierw pobieramy oryginalny (duży) plik do pamięci przeglądarki i dopiero później zmieniamy sposób jego wyświetlania.

W sieci dostępnych jest wiele darmowych narzędzi pozwalających na skompresowanie plików graficznych. Dzięki nim możemy znacznie zmniejszyć rozmiar pliku bez dużego uszczerbku na jakości grafiki. Dwa przykładowe narzędzia, z których sam korzystam regularnie to [Squoosh](https://squoosh.app/) oraz [Optimizilla](https://imagecompressor.com/). Poniżej przykładowy screen z pierwszego narzędzia, porównujący wielkość oraz jakość pliku przed oraz po kompresji (zmiana z 1,3MB na 0,6MB przy zachowaniu niemak niezmienionej jakości grafiki):

<img alt="" src="/kurs/statyczna/img/nowoczesna-strona/compress.jpg" />

Na powyższej grafice widzimy po lewej stronie od suwaka grafikę oryginalną, natomiast po jego prawej stronie grafikę już po kompresji. Różnice w wyglądzie są niemal niedostrzegalne gołym okiem, natomiast rozmiar obrazu został zredukowany aż o 95% (z początkowego rozmiaru 1,3 MB do finalnego 60 kB). Gdybyśmy teraz na stronie mieli dziesięć obrazków i wszystkie nieskompresowane? Efekty możemy chyba dość łatwo przewidzieć – wolna, ociężała strona drenująca limity danych użytkowników na telefonach komórkowych.

## Grafika rastrowa i wektorowa

Grafika dzieli się na dwie podstawowe kategorie:

- grafika rastrowa,
- grafika wektorowa.

### Raster

Grafika rastrowa to grafika złożona z pikseli, czyli pojedynczych małych kwadratowych “pukncików”, które wyświetlane obok siebie tworzą widoczny dla nas obraz. Przykładami grafiki rastrowej są zdjęcia, czyli zdecydowana większość grafiki dostępnej obecnie w Internecie. Grafika taka charakteryzuje się dużą ilością i intensywnością barw. Im więcej pikseli znajduje się w takiej grafice, tym większy rozmiar będzie miał plik, w którym obrazek jest zapisany. Dlatego też zdjęcia wykonywane aparatami o bardzo dużej rozdzielczości (a w sumie obecnie tylko takie już spotykamy w nowych telefonach) będą posiadały duży rozmiar. Pliki takie należy kompresować przed użyciem na stronie.

Z drugiej jednak strony obraz posiadający małą rozdzielczość (małą liczbę pikseli) nie będzie wyglądał zbyt dobrze na dużych ekranach, ponieważ widoczne będą pojedyncze piksele, tak jak ma to miejsce w przykładzie poniżej:

<img alt="" src="/kurs/statyczna/img/nowoczesna-strona/piksele.png" />

Grafika o małej rozdzielczości oczywiście ma jeden znaczny plus – ma bardzo mały rozmiar. Będzie ona dobrym wyborem w przypadku gdy nasza grafika na charakter dekoracyjny i nie będzie nigdy powiększana (np. za pomocą CSS bądź atrybutów `width`/`height`). Powiększenie takiej grafiki spowoduje uwidocznienie pojedynczych pikseli i ogólnie niezbyt estetyczny wygląd strony. Dlatego też w takim przypadku należy stosować techniki poznane w poprzednich tematach i wyświetlać grafikę w zależności od tego, na jakim urządzeniu ma ona zostać wyświetlona.

O formatach grafik powiemy sobie nieco później, ale grafika rastrowa zapisywana jest w takich formatach jak `.jpg`, `.png`, `.gif`.

## Wektor

Grafika wektorowa pozbawiona jest pikseli. Wykorzystuje ona linie, punkty i wielokąty do reprezentowania obrazu. Najlepiej nadaje się do prostych kształtów geometrycznych i świetnie sprawdza się w przypadku logotypów i ikon. Grafika taka może być zmniejszana oraz powiększana bez zmiany jakości grafiki. Tego samego pliku możemy użyć do umieszczenia logo firmy na stronie, jak również do wydrukowania z niego wielkiej naklejki na skrzydło samolotu – grafika wektorowa nie straci nic na jakości.

Jak już wcześniej wspomniano, obrazek wektorowy reprezentowany jest przez kształty geometryczne, więc nie nadaje się on do zdjęć i kolorowych grafik zawierających dużo szczegółów. Najpopularniejszym formatem dla grafik wektorowych jest `.svg`.

Znalezienie odpowiedniego, pasującego do naszej strony pliku `.svg` (wektorowego) jest nieco trudniejsze niż znalezienie kolorowej grafiki. Do szukania plików wektorowych na moje strony osobiście używam strony [svgrepo](https://www.svgrepo.com/) i niemal zawsze znajduję interesujący mnie wektor 🙂. Możesz również zajrzeć na tę stronę, aby zobaczyć, jak wyglądają przykładowe grafiki wektorowe.

## Formaty plików graficznych

Pliki (głównie rastrowe) mogą być zapisywane w kilku formatach. Przyjrzyjmy się teraz pokrótce, czym charakteryzuje się każdy z nich.

<table>
	<thead><tr><th width="20%">Format pliku</th><th>Opis</th></tr></thead><tbody
		><tr
			><td>&nbsp;<strong>JPEG</strong> (<code>.jpg</code>, <code>.jpeg</code>) </td><td
				>Obecnie <strong>najpopularniejszy </strong>format plików. Stosowany w przypadku
				<strong>zdjęć </strong>i kolorowych grafik. Format ten jest tzw. formatem kompresji
				stratnej, czyli możemy tracić ostrość w takich obiektach jak diagramy lub wykresy. Używany
				głównie w<strong> grafikach</strong> <strong>wielokolorowych</strong>, gdzie znaczenie ma
				duże spektrum barw. Obsługiwany przez praktycznie wszystkie przeglądarki i jest to domyślny
				format wielu aparatów. Możliwość wykonania dobrej kompresji (duże zmniejszenie pliku nie
				powoduje dużego pogorszenia grafiki).
			</td></tr
		><tr
			><td><strong>PNG</strong> (<code>.png</code>)</td><td
				>Niemal równie <strong>popularny </strong>format jak JPEG, stosujący jednak konwersję
				<strong>bezstratną</strong>, dzięki czemu jakość grafiki będzie nieco lepsza (często kosztem
				wielkości pliku). PNG sprawdza się idealnie w przypadku grafik z małą ilością kolorów gdzie
				<strong>krawędzie </strong>powinny zostać <strong>ostre</strong>, <strong>wyraźne</strong>,
				<strong>nierozmyte </strong>(np. <em>screenshot</em> jakiegoś panelu administracyjnego).
				Rzadko używane w przypadku fotografii i grafik z dużą liczbą kolorów. <br />Najważniejszą
				jednak zaletą tego formatu jest możliwość stosowania <strong>przeźroczystego </strong>tła,
				co sprawdza się idealnie w przypadku logo bądź grafik, które mają znaleźć się nad inną
				zawartością i nie zasłaniać go własnym tłem.</td
			></tr
		><tr
			><td><strong>GIF</strong> (<code>.gif</code>)</td><td
				>Format ten przewidziany jest głównie do wyświetlania krótkich <strong>animacji</strong>,
				aczkolwiek można w tym formacie zapisać również statyczną grafikę. GIF jest w stanie
				wyświetlić jedynie <strong>256 </strong>kolorów (JPEG i PNG wyświetlają miliony kolorów) i
				zazwyczaj posiada duży rozmiar pliku. Ogólnie rzecz biorąc staram się unikać plików GIF na
				naszych stronach i zastępować je np. animacją CSS.
			</td></tr
		><tr
			><td><strong>WEBP</strong> (<code>.webp</code>)</td><td
				><strong>Najnowszy </strong>format wprowadzony przez Google w celu
				<strong>zastąpienia trzech powyższych</strong>
				standardów jednym. WEBP oferuje jakość grafiki na takim samym poziomie jak JPEG i PNG przy
				jednocześnie znacznym zmniejszeniu wielkości pliku. Mamy tutaj również możliwość
				zastosowania <strong>przeźroczystego </strong>tła oraz zapis <strong>animacji</strong>.
				Obecnie jest to jeden z <strong>najlepszych </strong>formatów do używania na naszych
				stronach.</td
			></tr
		><tr
			><td><strong>SVG</strong> (<code>.svg</code>)</td><td
				>Jedyny w tym porównaniu przedstawiciel <strong>grafiki wektorowej</strong>. Stosowany
				głównie do prostych grafik i ilustracji (np. logo). Zmniejszanie oraz powiększanie grafiki
				<strong>nie wpływa </strong>na jej jakość. Nie doświadczymy nigdy efektu “pikselizacji”.
				Małe rozmiary plików.</td
			></tr
		></tbody
	>
</table>

## Który wybrać?

To chyba najczęściej zadawane sobie pytanie podczas umieszczania grafiki na stronie. Pamiętajmy, że zawsze naszym celem będzie dostarczenie możliwie małego oraz możliwie najlepszego jakościowo obrazka. W przypadku gdy na grafice mamy bardzo dużą ilość kolorów i kształtów (np. zdjęcie kwiatów, łąki, grupy ludzi) wtedy najlepszym rozwiązaniem będzie JPEG. Co prawda nieco stracimy na jakości podczas konwersji, ale w zdecydowanej większości będzie to ciężko do zauważenia gołym okiem.

Z kolei, gdy na grafice mamy małą ilość kolorów bądź chcemy, aby dwa obiekty o zupełnie innych kolorach posiadały wyraźną i ostrą granicę między nimi, wybierzemy PNG. PNG również będzie naszym wyborem w przypadku, gdy chcemy mieć możliwość zastosowania przezroczystego tła.

GIF, nazywany często “językiem współczesnego internetu” jest niezwykle popularny z tego powodu, iż możemy zaprezentować na nim krótką animację. Plik GIF będzie zdecydowanie mniejszy niż plik wideo pokazujący dokładnie ten sam fragment. Dużym ograniczeniem formatu GIF jest możliwość wyświetlenia jedynie 256 kolorów (format ten powstawał w latach ’80 i wtedy po prostu więcej nie było potrzebne).

WEBP jest najnowszym formatem plików i zdecydowanie warto po niego sięgać, gdy na naszej stronie wyświetlamy znaczną liczbę obrazków. Plik ten nie jest jeszcze tak popularny, jak JPEG czy PNG więc musimy takie pliki niemal zawsze konwertować. Z racji tego, iż jest to stosunkowo “nowy” format, nie będzie on wspierany przez starsze przeglądarki.
