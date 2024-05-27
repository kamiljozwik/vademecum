---
title: Responsywność
description: ''
order: 20
free: false
extra_links:
  - title: Learn CSS Media Query In 7 Minutes
    href: https://www.youtube.com/watch?v=yU7jJ3NbPdA
  - title: CSS Media Queries & Responsive Web Design tutorial for Beginners
    href: https://www.youtube.com/watch?v=69IbzTWg5PM
  - title: CSS breakpoints for responsive design
    href: https://blog.logrocket.com/css-breakpoints-responsive-design/
---

<script>
	import Vimeo from "$lib/components/ui/Vimeo.svelte";
	import Codepen from "$lib/components/ui/Codepen.svelte";
</script>

Pod koniec 2016 roku, po raz pierwszy w historii urządzenia mobilne wyprzedziły komputery stacjonarne pod względem procentowego użycia w Internecie. To znaczy, iż od kilku lat to właśnie telefony są przeważającymi urządzeniami służącymi do wyświetlania stron oraz aplikacji internetowych. Informacja ta ma bardzo duże znaczenie dla nas – twórców stron. Pisząc nową stronę, musimy pamiętać o tym, aby wyglądała on dobrze zarówno na dużym monitorze, jak i na małym ekranie smartfona. Tak przygotowaną stronę określa się mianem “responsywnej” a technikę tworzenia stron w taki sposób nazywany Responsive Web Design (RWD)

W jednej z poprzednich lekcji dotyczących Chrome DevTools pokazaliśmy sobie, w jaki sposób stosować przełącznik widoku responsywnego. Na poniższym materiale możemy zobaczyć jeszcze raz, gdzie ta funkcja się znajduje oraz omówimy kilka przykładowych responsywnych stron.

<Vimeo id="567193170" h="e9e3cea163" />

## Viewport

Jak widzieliśmy na powyższych przykładach, responsywność najbardziej objawia się podczas zmniejszania szerokości ekranu. Zmiana wysokości za dużo nam nie przeszkadza, gdyż użytkownicy są przyzwyczajeni do scrollowania ekranu góra/dół ↕.

Obszar przeglądarki, w którym wyświetlana jest strona internetowa określamy jako viewport. Na komputerach stacjonarnych i dużych monitorach, viewport będzie miał szerokość równą szerokości ekranu w pikselach, czyli na ekranie FullHD (1920 × 1080px), szerokość viewportu będzie równa 1920px. Jeżeli więc użyjemy jednej ze znanych nam już jednostek CSS – `vw` (viewport width), wtedy wyrażenie `100vw` będzie równe właśnie 1920px.

Sprawa ma się nieco inaczej w przypadku przeglądarek mobilnych (instalowanych na telefonach). Tutaj nie zawsze szerokość ekranu będzie determinowała szerokość viewportu. Niektóre przeglądarki ustawiają tę szerokość na stałą wartość równą 980px. Tak więc urządzenia mające mniejszy ekran (np. iPhone 5 mający ekran o szerokości 320px) będą musiały zmniejszyć wyświetlaną stronę w taki sposób, aby zmieściła się ona na całej szerokości ekranu. W efekcie taka strona będzie trudna do przeglądania i użytkownik będzie musiał powiększać ekran (zoomować), aby móc przeczytać dostępne na niej treści.

Rozwiązaniem tego problemu, jest meta tag (o meta tagach powiemy sobie więcej w jednej z kolejnych lekcji), który mówi przeglądarce o tym, aby wyświetlając stronę, jako szerokość viewportu zawsze ustawiała szerokość ekranu urządzenia, na którym jest wyświetlana. Znacznik ten wygląda następująco i umieszczany jest w nagłówku dokumentu (`<head>...<head>`):

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

Od teraz będziemy pewni, że niezależnie od tego, na jakim urządzeniu nasza strona zostanie wyświetlona, jej viewport będzie zawsze odpowiadał rozmiarowi urządzenia. A to z kolei pozwoli nam zmieniać wygląd strony za pomocą tzw. media queries. Zanim jednak przejdziemy do media queries, szybkie przypomnienie jednostek względnych (lub też “relatywnych”).

## Jednostki statyczne i relatywne

Jako że responsywna strona dostosowuje się do rozmiaru ekranu urządzenia, na którym jest wyświetlana, zdecydowanie zaleca się stosowanie jednostek relatywnych (głównie `%`, `vw`, `vh`) gdziekolwiek jest to możliwe. Dzięki temu nasza strona będzie zawsze dopasowywała się do aktualnego rozmiaru ekranu (viewportu).

<Codepen id="PoXXoyZ" />

Powyższy kod będzie zachowywał się następująco:

<Vimeo id="872062973" h="de22430853" />

## Media Queries

Media queries są techniką w CSS, która pozwala nam aplikować konkretne style CSS w zależności od tego, na jakim urządzeniu i na jak dużym ekranie wyświetlana jest nasza strona. Tylko tyle i aż tyle. Dzięki tej technice możemy aplikować na ten sam kod HTML różne style CSS w zależności od tego, czy wyświetlamy stronę na ekranie komputera, czy na ekranie telefonu. Składnia polecenia wygląda następująco:

<img alt="" src="/online/statyczna/img/nowoczesna-strona/mediaquery.png" />

Dwa słowa na temat każdego elementu powyższego wyrażenia.

### @media

Deklaracja rozpoczynająca tworzenie bloku media query.

### Rodzaj urządzenia

W tym miejscu podajemy rodzaj urządzenia, na którym mają zostać zaaplikowane style CSS. Wartość `screen` wskazuje na urządzenia z wyświetlaczem i będzie stanowiło prawdopodobnie 99% wszystkich napisanych przez nas deklaracji, aczkolwiek możemy tutaj użyć jeszcze następujących wartości:

- **all** – wszystkie dostępne urządzenia,
- **print** – strony, które są otwarte w trybie podglądu wydruku\*,
- **screen** – urządzenia z wyświetlaczem,
- **speach** – urządzenia czytające zawartość strony, tzw. screen readers.

\* Możesz zastanawiać się, kto dzisiaj drukuje strony internetowe 🤔? Nie zapominajmy o stronach zawierających plany podróży, bilety, przepisy, rozkłady jazdy. Jeżeli przypadnie nam pracować nad taką stroną, dobrze wiedzieć o tej funkcjonalności 🙂

### Operator

W media query możemy użyć trzech operatorów logicznych:

- **and** – wszystkie warunki muszą być spełnione,
- **,** (przecinek) – logiczne `or`, wystarczy, że jeden z warunków zostanie spełniony,
- **not** – zaprzeczenie, zazwyczaj używane wraz z `and` np. `@media screen and (not(max-width: 768px))`.

### Właściwość urządzenia

Po wybraniu rodzaju urządzenia możemy określić jakie właściwości tegoż urządzenia muszą być spełnione, aby zaaplikować nasz kod CSS. Lekcja ta poświęcona jest responsywności, więc najważniejszymi właściwościami dla nas będą `min(max)-width(height)`, lecz lista tych właściwości jest znacznie dłuższa i zawiera takie przydatne właściwości jak np.:

- **aspect-ratio** – stosunek szerokości ekranu do jego wysokości (np. `1:1`, `16:9`),
- **orientation** – na telefonach sposób, w jakim trzymane jest urządzenie (`portrait` lub `landscape`),
- **resolution** – rozdzielczość ekranu.

Na potrzeby tej lekcji skupimy się tylko na wymiarach ekranu. Jeżeli kogoś interesują pozostałe właściwości – odsyłam do strony gdzie można z nimi się szybko zapoznać: [CSS Media Features](https://www.quackit.com/css/css_media_features.cfm).

## Przykład

Choć może wydawać się to skomplikowane to media queries raz zrozumiane, nie będą nam już nigdy w przyszłości przysparzały problemów. Umieszczamy je w kodzie dokładnie tak, jak robimy to ze zwykłymi selektorami:

```css
@media screen and (min-width: 320px) and (max-width: 768px) {
	/* Style poniżej zostaną zastosowane tylko wtedy, gdy
  rozmiar ekranu będzie pomiędzy 320px a 768px */
	div {
		/* Style CSS */
	}
}
```

Zobaczmy jak to wygląda na przykładzie:

<Codepen id="wvRRajZ" />

Poniżej krótkie wyjaśnienie tego, jak zadziała powyższy kod i kilka wskazówek odnośnie do media query w DevTools:

<Vimeo id="567218499" h="b72a31cdfa" />

## Breakpoints

Tak jak wspomniałem w powyższym materiale, wybór breakpointów, na których będziemy zmieniać wygląd naszej strony, powinniśmy przemyśleć już na samym początku tworzenia strony internetowej. Nie powinno ich być za dużo – zazwyczaj trzy/cztery breakpointy w zupełności wystarczają.

Tworząc strony responsywne zazwyczaj działamy w takiej kolejności, iż najpierw tworzymy stronę na ekrany monitorów i następnie zwężając stronę, próbujemy dopasować stworzony już wygląd do mniejszych ekranów. Czasami jednak lepszym podejściem może być zaczęcie od drugiej strony i zaczęcie od tworzenia widoku na ekran telefonu i przy pomocy media query poprawiać widok na coraz to większe ekrany.

Podejście takie, szczególnie dzisiaj, gdzie smartfony stały się dominującą częścią rynku, jest coraz bardziej popularne określany mianem mobile first, czyli zaczynamy od strony na telefon i idziemy w stronę dużych ekranów. Ogólnie rzecz biorąc, zawsze łatwiej na stronie jest powiększać małe elementy niż je “upychać” na coraz to mniejszych ekranach.

<img alt="" src="/online/statyczna/img/nowoczesna-strona/mobilefirst.png" />

## 🕵️ Portfolio

Rozwijana przez nas strona p. Holmesa nie jest stroną responsywną. Otwarcie jej na urządzeniu innym niż monitor powoduje problemy z jej wyświetlaniem. Na szczęście wiemy już jak tworzyć strony responsywne, więc nic nie stoi na przeszkodzie, aby również tworzone przez nas portfolio zaczęło wyglądać równie dobrze na telefonach 📱
