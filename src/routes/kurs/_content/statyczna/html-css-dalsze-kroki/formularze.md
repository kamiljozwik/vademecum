---
title: Formularze
description: ''
order: 100
free: false
extra_links:
  - title: Learn HTML Forms In 25 Minutes
    href: https://www.youtube.com/watch?v=fNcJuPIZ2WE
  - title: Learn HTML forms in 8 minutes
    href: https://www.youtube.com/watch?v=2O8pkybH6po
  - title: HTML Forms and Inputs
    href: https://www.youtube.com/watch?v=frAGrGN00OA
    desc: Przesyłanie danych z formularza będzie poruszone również w kolejnej lekcji.
  - title: HOW TO CREATE & STYLE FORMS IN HTML
    href: https://www.youtube.com/watch?v=qelcFC6B_Nw
  - title: HTML Forms
    href: https://www.youtube.com/watch?v=YwbIeMlxZAU
---

<script>
	import Codepen from "$lib/components/ui/Codepen.svelte";
</script>

Formularze są nieodzowną częścią niemal każdej strony internetowej. Używamy ich w celu pozyskania dodatkowych danych od osób odwiedzających naszą stronę. Tymi danymi może być zarówno zwykła wiadomość tekstowa, jak i złożenie zamówienia bądź rezerwacji. Poprawnie przygotowany i dobrze wyglądający formularz na pewno zachęci użytkowników do tego, aby z niego skorzystali, natomiast odpowiedni dobór znaczników oraz atrybutów spowoduje, że otrzymamy wszystkie interesujące nas dane.

Przyjrzyjmy się więc, z czego składa się formularz, jakie daje nam on możliwości i w jaki sposób w ogóle wysyłać dane, abyśmy mieli możliwość ich przeglądania.

## Formularz

Formularz tworzymy za pomocą tagu `<form>...</form>`. Wewnątrz tego znacznika będziemy umieszczać wszelkiego rodzaju pola do wprowadzania danych przez użytkownika. To właśnie te dane zostaną następnie przesłane do nas. O samym przesyłaniu danych powiemy sobie w oddzielnym temacie. Teraz skupmy się na tym, w jaki sposób dane te możemy pozyskać.

## input

Najczęściej używanym przez nas tagiem będzie `<input />`. Użyty bez żadnych atrybutów pozwoli nam na wprowadzenie dowolnego tekstu z naszej klawiatury. Jednak wartość z takiego znacznika nie zostanie umieszczona w wysyłanych danych. W tym celu, na znaczniku musimy umieścić atrybut name. To właśnie pod tą nazwą znajdziemy dane wprowadzone przez użytkownika.

Jeżeli chcemy poinformować użytkownika, jakiego rodzaju danych od niego potrzebujemy, możemy skorzystać z tagu `<label>`. Znacznik ten łączymy z konkretnym inputem poprzez umieszczenie tagu `<input>` jako dziecka znacznika `<label>`, bądź poprzez użycie atrybutu for wskazującego na atrybut id inputa. Będzie to dobrze widoczne w poniższym przykładzie.

Opcjonalnie możemy również skorzystać z atrybutu placeholder, który to dokładniej podpowie użytkownikowi, jakich informacji od niego oczekujemy.

<Codepen id="qBLLBqM" />

Jednym z najważniejszych atrybutów dostępnych na tym znaczniku jest atrybut `type`. Dzięki niemu możemy kompletnie zmienić zachowanie naszego pola tekstowego i tym samym być bardziej precyzji co do tego, jakich wartości oczekujemy.

Najbardziej przydatne wartości atrybutu `type`, to:

- **text** – wartość domyślna, dowolny ciąg znaków.
- **email** – adres e-mail, przeglądarka poinformuje użytkownika, gdy ten poda e-mail w niewłaściwym formacie.
- **password** – wpisywany tekst nie będzie widoczny.
- **number** – użytkownik będzie mógł wpisać jedynie wartości liczbowe.
- **file** – zamieszczenie pliku z dysku użytkownika.
- **radio** – pole jednokrotnego wyboru.
- **checkbox** – pole wielokrotnego wyboru.
- **date** – wybór daty.
- **time** – wybór czasu.
- **datetime**-local – wybór daty i godziny.
- **color** – wybór koloru.
- **range** – wybór zakresu.
- **tel** – wpisanie numeru telefonu. Na urządzeniach mobilnych zamiast pełnej klawiatury wyświetli się klawiatura numeryczna.
- **url** – podanie adresu strony internetowej.

Wszystkie powyższe przypadki zostały zebrane w jednym zbiorczym przykładzie. Polecam spróbować wpisywać niepoprawne wartości, aby zobaczyć, jak działa domyślna walidacja przeglądarki. Listę wszystkich dostępnych atrybutów oraz wartości atrybutu `type` można znaleźć na [stronie MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input).

Atrybuty, które domyślnie wykonują podstawową walidację, np. `email` lub `number` otrzymują pseudo-klasę `:invalid` w momencie, gdy walidacja wskażę błąd (np. wpiszemy user@gmail w polu z atrybutem `email` bądź wpiszemy większą wartość liczbową niż dozwolona w polu z atrybutem `number`). Możemy skorzystać z tej klasy i odpowiednio oznaczać pola formularza, które posiadają błędy.

<Codepen id="RwEEwKm" />

## Walidacja pól formularza

W poprzednim przykładzie powiedzieliśmy sobie już o walidacji wykonywanej na podstawie atrybutu `type`. Jest to domyślna walidacja i pewnie wystarczy ona w większości przypadków. Posiadamy jednak jeszcze kilka dodatkowych atrybutów z których możemy skorzystać przy walidacji formularza:

- `required` – umieszczenie tego atrybutu oznacza, iż dane pole musi zostać wypełnione bądź zaznaczone.
- `min` / `max` – minimalna i maksymalna wartość liczbowa.
- `minlength` / `maxlength` – minimalna i maksymalna ilość znaków w polach tekstowych.
- `pattern` – atrybut przyjmujący jako wartość wyrażenie regularne (regular expression), które musi zostać spełnione przez wpisany ciąg znaków.

## Wyrażenia regularne

Wyrażenia regularne (ang: regular expression), nazywane również potocznie “regEx-ami”, pozwalają nam bardzo dokładnie określić format, w jakim oczekujemy otrzymać dane. Przykładowo za ich pomocą możemy wymusić na użytkowniku podanie kodu pocztowego w formacie XX-XXX (czyli np. 09-533) bądź numeru telefonu w formacie XXX-XXX-XXX. Wyrażenia regularne dają nam niezwykłą swobodę w określeniu formatu, jednak ich użycie potrafi sprawić nieco kłopotów.

W tym kursie nie będziemy zagłębiać się w temat wyrażeń regularnych, ale osobom zainteresowanym tym tematem polecam zapoznać się z poniższymi linkami:

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp?retiredLocale=pl)
- [regexone](https://regexone.com/)
- [Regular Expressions Basics](https://ryanstutorials.net/regular-expressions-tutorial/regular-expressions-basics.php)
- [regex101](https://regex101.com/) (narzędzie do testowania wyrażeń typu RegEx)
- [gist](https://gist.github.com/jacksonfdam/3000275)

Jak już wcześniej wspomnieliśmy, pola formularza, które nie przejdą walidacji i będą zawierały błędne dane możemy łatwo ostylować za pomocą CSS używając pseudo klasy `:invalid`. Oczywiście istnieje też pseudo klasa `:valid`, która jest powiązana z polami posiadającymi poprawnie wprowadzone dane. Co więcej, jeżeli zdecydujemy się na użycie atrybutu `required`, wtedy znacznik otrzyma kolejną pseudo klasę – `:required`.

Widzimy więc, iż możemy przygotować formularz w taki sposób, iż użytkownik będzie mógł korzystać z niego dość komfortowo i być informowany o popełnianych przez niego błędach. Jest to dość istotne, ponieważ formularz posiadający, chociażby jedno błędne pole, nie zostanie wysłany do czasu jego poprawienia.

<Codepen id="OJrrJmP" />

## textarea

Kolejnym znacznikiem, którego możemy użyć w formularzu jest `<textarea>`. Różni się ona od tagu `<input>` tym, iż służy głównie do wprowadzania długiego, wieloliniowego tekstu. Za pomocą atrybutów rows (wiersze) oraz cols (kolumny) możemy ustalać rozmiar dostępnego pola tekstowego.

<Codepen id="rNooNmp" />

## select

Za pomocą tagu `<select>` możemy stworzyć listę rozwijaną i dać użytkownikowi możliwość wyboru jednej z opcji. Dostępne do wyboru opcje umieszczamy w znaczniku `<option value="wartość">`. Podczas przesyłania formularza przesłana zostanie wartość umieszczona w atrybucie value tagu `<option>`. Dodatkowo mamy możliwość grupowania opcji za pomocą tagu `<optgroup label="nazwaGrupy">`.

<Codepen id="YzddzVM" />
