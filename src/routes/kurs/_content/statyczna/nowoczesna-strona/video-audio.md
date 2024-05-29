---
title: Wideo i audio
description: ""
order: 60
free: false
extra_links:
  - title: Learn HTML audio in 5 minutes!
    href: https://www.youtube.com/watch?v=uof_zYxtnp0
  - title: HOW TO INSERT VIDEOS INTO YOUR WEBSITE
    href: https://www.youtube.com/watch?v=bXfXdJs6J7k
    desc: Wideo zawiera również szczyptę JavaScript 😉
  - title: Learn HTML video in 2 minutes
    href: https://www.youtube.com/watch?v=Ki_0iES2cGI
---

<script>
	import Vimeo from "$lib/components/video/Vimeo.svelte";
</script>

Wiemy już jak dodawać na naszą stronę grafikę, spójrzmy więc teraz w jaki sposób możemy umieszczać na niej zarówno wideo, jak i audio. Na szczęście możemy to zrobić bardzo łatwo za pomocą tagów `<video>` oraz… `<audio>` 🙂

## Video 🎬

Najprostszym przykładem wyświetlenia pliku wideo na stronie jest poniższy fragment kodu:

```html
<!-- Atrybut "src" działa analogicznie do <img alt="">, natomaist "controls" 
wyświetla panel sterowania odtwarzaniem (np. przycisk play, stop itd.) -->
<video src="plik.mp4" controls>
  <!-- Poniższa zawartość wyświetli się w sytuacji, gdy przeglądarka 
  użytkownika nie wspiera znacznika <video>.  -->
  <p>
    Nie możemy odtworzyć pliku w Twojej przeglądarce. Możesz go
    <a href="plik.mp4" download>pobrać</a> na swoje urządzenie.
  </p>
</video>
```

Umieszczanie plików wideo potrafi jednak sprawić więcej problemów niż umieszczanie grafiki. Obrazki są relatywnie łatwe do wyświetlenia przez przeglądarkę, jednak w przypadku wideo do gry wchodzi jeszcze jeden element (jeżeli dorastałeś w latach ’90 to na pewno znasz to słowo 🙂) – kodeki.

Nie wchodząc za bardzo w szczegóły, przeglądarka osoby odwiedzającej stronę może nie być w stanie odtworzyć filmu w wybranym przez nas formacie. Rozwiązaniem tego problemu jest skorzystanie ze znaczników `<source>` i umieszczenie filmu w kilku różnych formatach. Przeglądarka, sprawdzając atrybut type, będzie wiedziała, czy jest w stanie odtworzyć dany plik. Jeżeli nie, sprawdzi inne dostępne formaty i wybierze ten, do którego posiada kodeki.

```html
<!-- Używając <source> razem z <video>, nie umieszczamy "src" na znaczniku video -->
<video controls>
  <!-- Podając typ pliku w atrybucie "type" znacznie ułatwiamy przeglądarce podjęcie właściwej decyzji o
tym, czy powinna próbować odtworzyć podany plik. -->
  <source src="plik.mp4" type="video/mp4" />
  <source src="plik.webm" type="video/webm" />
  <p>
    Nie możemy odtworzyć pliku w Twojej przeglądarce. Możesz go
    <a href="plik.mp4" download>pobrać</a> na swoje urządzenie.
  </p>
</video>
```

Współcześnie, przygotowanie plików w formacie `.mp4` oraz `.webm` powinno wystarczyć na to, aby wideo odtworzyło się poprawnie na większości przeglądarkach.

## Atrybuty

Znacznik `<video>` posiada jeszcze kilka przydatnych atrybutów, z których możemy skorzystać:

<table>
  <thead>
    <tr>
      <th width="20%">Nazwa atrybutu</th>
      <th>Opis</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>width / height</strong></td>
      <td>
        Wysokość oraz szerokość wideo. Odtwarzany plik zachowa zawsze swoją
        proporcję obrazu (ang. <em>aspect ratio</em>) (np. 4:3 lub 16:9)
      </td>
    </tr>
    <tr>
      <td><strong>autoplay</strong></td>
      <td>Uruchomienie wideo od razu po załadowaniu strony.</td>
    </tr>
    <tr>
      <td><strong>loop</strong></td>
      <td>Zapętlenie odtwarzania.</td>
    </tr>
    <tr>
      <td><strong>muted</strong></td>
      <td>Odtwarzanie wideo z domyślnie wyłączonym dźwiękiem.</td>
    </tr>
    <tr>
      <td><strong>poster</strong></td>
      <td>
        Adres URL grafiki, która będzie wyświetlana przed rozpoczęciem
        odtwarzania.
      </td>
    </tr>
    <tr>
      <td><strong>preload</strong></td>
      <td>
        Określenie kiedy plik powinien zostać pobrany z serwera. Dostępne
        wartości to:<br />– <strong>none</strong>: plik nie jest pobierany do
        pamięci przeglądarki podczas ładowania strony i zacznie być pobierany
        pobierany dopiero po uruchomieniu odtwarzania,<br />–
        <strong>metada</strong>: przeglądarka pobiera tylko informacje o pliku
        (np. jego długość) a sam plik zostanie pobrany dopiero podczas
        rozpoczęcia pobierania,<br />– <strong>auto</strong>: cały plik jest
        pobierany i zapisywany w pamięci przeglądarki podczas ładowania strony,
        więc będzie mógł być szybko odtworzony (jeżeli jednak użytkownik na to
        się nie zdecyduje, niepotrzebnie pobieraliśmy ten plik).
      </td>
    </tr>
  </tbody>
</table>

## Online video providers (OVP)

Pliki wideo zazwyczaj są dość duże (od kilku do kilkuset MB). Umieszczanie wielu dużych plików na naszym serwerze i następnie wysyłanie ich do przeglądarek naszych użytkowników może być bardzo obciążające dla serwera. W dodatku większość serwisów, na których umieszczamy nasze strony internetowe, mają pewne ograniczenia w kwestii zużywanego transferu. Jeżeli hostowane przez nas pliki są znacznych rozmiarów oraz są bardzo często odtwarzane (taki w sumie jest ich cel), to może okazać się, że bardzo szybko wyczerpiemy przyznany nam transfer i nasza strona przestanie działać, albo będzie działała bardzo wolno. Jest to ograniczenie, które z pewnością należy bardzo dokładnie sprawdzić.

W przypadku mniejszych, kilku sekundowych filmów marketingowych umieszczonych na stronach typu “portfolio” bądź “wizytówka firmy” być może nigdy nie będziemy mieli z tym problemów, jednak w innych przypadkach warto rozważyć skorzystanie z usług platform, które umożliwiają profesjonalne hostowanie plików wideo – tzw. online video providers. Obraz wideo wysyłany z takiego źródła będzie na pewno dobrze skompresowany i dostępny w wielu rozdzielczościach (serwisy te konwertują przesłany przez nas plik do kilku mniejszych rozdzielczości, dzięki czemu użytkownik telefonu na słabym łączu 3G może oglądać film płynnie w mniejszej rozdzielczości).

Przykładami najpopularniejszych obecnie OVP są:

- **YouTube** – tego gracza chyba nie muszę nikomu przedstawiać 🙂, każdy film, który wyślemy na YouTube, możemy następnie umieścić na naszej stronie. Darmowe i nieograniczone miejsce.
- **Vimeo** – serwis ([link](https://vimeo.com/)), z którego osobiście korzystam do umieszczania w nim wideo lekcji dostępnych na frontschool.pl. Rozwiązanie dla nieco bardziej wymagających użytkowników, którzy nie chcą prezentować logo firmy hostingowej oraz mieć nieco więcej kontroli nad własnymi filmami. W ofercie znajdziemy zarówno darmowe, jak i płatne plany.
- **Dailymotion** – ([link](www.dailymotion.com)) alternatywa dla YouTube.

Liczba OVP jest dość szeroka, więc warto spędzić trochę czasu na znalezienie i wybranie tego, który będzie nam najbardziej pasował.

W niemal każdym przypadku, po wysłaniu naszego wideo na serwer OVP, otrzymamy w odpowiedzi fragment HTML (najczęściej będzie to `<iframe>`, który poznamy w następnym rozdziale), który wystarczy następnie wkleić do naszego kodu HTML.

Poniżej dwa przykłady z YouTube, jak i z Vimeo:

<Vimeo id="872088364" h="8333ccf98b" />

## Audio 🎵

Umieszczanie plików audio jest niezwykle podobne do umieszczania plików wideo. Możemy to zrobić zarówno z, jak i bez znaczników `<source>`:

```html
<audio src="plik.mp3" controls>
  <p>
    Nie możemy odtworzyć pliku w Twojej przeglądarce. Możesz go
    <a href="plik.mp3" download>pobrać</a> na swoje urządzenie.
  </p>
</audio>

<audio controls>
  <source src="plik.mp3" type="audio/mp3" />
  <source src="plik.ogg" type="audio/ogg" />
  <p>
    Nie możemy odtworzyć pliku w Twojej przeglądarce. Możesz go
    <a href="plik.mp3" download>pobrać</a> na swoje urządzenie.
  </p>
</audio>
```

Znacznik `<audio>` został już również okrojony z kilku atrybutów, których mogliśmy użyć z `<video>`. Atrybuty nieobsługiwane przez tag `<audio>` to `width` i `height` oraz `poster`. Przy pliku audio wyświetlamy tylko odtwarzacz zawierający przyciski play, stop itp. więc wymienione atrybuty nie mają na niego wpływu.

Podobnie jak w przypadku wideo, tak w przypadku dźwięku warto rozważyć skorzystanie z serwisu oferującego hosting plików audio i umieszczanie na stronie jedynie odnośnika do pliku znajdującego się na innym serwerze. W przypadku plików audio najpopularniejszym obecnie rozwiązaniem jest [SoundCloud](https://soundcloud.com/).

Zanim jednak dodasz muzykę na swoją stronę, przemyśl, czy na pewno jest to dobra opcja, gdyż większość użytkowników nie przepada za automatycznie uruchamiającą się muzyką na stronie 🙂

## 🕵️ Porfolio

Czy dodałeś już podstronę z galerią zdjęć? Jeżeli tak, to teraz śmiało możesz uzupełnić ją o materiały audio oraz wideo. Jeżeli nie, to możesz dodać ją teraz 🙂
