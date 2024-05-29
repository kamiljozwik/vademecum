---
title: Grafika
description: ""
order: 80
free: false
extra_links:
  - title: Learn HTML images in 3 minutes
    href: https://www.youtube.com/watch?v=Hh_se2Zqsdk
  - title: IMG tag attributes
    href: https://www.youtube.com/watch?v=zZCSTAR-4w0
    desc: Omawiany na końcu materiału "srcset" jeszcze pojawi się w naszym kursie 😉
---

<script>
	import Codepen from "$lib/components/ui/Codepen.svelte";
</script>

Umiejętne umieszczanie grafik na stronie to jedna z ważniejszych umiejętności każdego frontend developera. Niewłaściwe użycie tagów graficznych może nieść za sobą wiele konsekwencji. Brak niektórych atrybutów opisujących grafikę może skutkować w pogorszeniu SEO. Ładowanie dużych grafik będzie powodowało wolne ładowanie się strony i stratę potencjalnych czytelników, którzy tak długo czekać nie zamierzają. Wyświetlanie tego samego obrazu na dużych ekranach monitorów Full HD i małych ekranach smartfonów spowoduje, że strona może stać się na jednym z tych urządzeń nieczytelna.

Jak widać, grafika potrafi mocno namieszać na naszych stronach. W tej lekcji nie będziemy wchodzić za bardzo we wszystkie szczegóły, a jedynie poznamy podstawowy tag, dzięki któremu wniesiemy nieco świeżości do naszych na razie bardzo prostych stron. W jednej z kolejnych lekcji wrócimy do tematów multimediów na stronie, natomiast lekcje poświęcone responsywności rozwiną zagadnienia dotyczące wyświetlania odpowiednich grafik w zależności od wielkości ekranu użytkownika.

## Znacznik `<img />`

Najbardziej popularnym i używanym niemal na wszystkich stronach tagiem jest `<img />` będący skrótem od angielskiego słowa image. Znacznik ten występuje tylko jako znacznik samozamykający (uproszczony), a więc nigdy nie używamy go w taki sposób: `<img>text</img>`. Jak w takim razie umieścić tam grafikę? W tym przypadku posłużymy się głównym atrybutem znacznika `<img />`, czyli `src`. Po raz kolejny jest to skrót od angielskiego słowa, tym razem source. Lekcja omawiająca atrybuty jeszcze przed nami, ale już kilka ich wystąpień w poprzednich lekcjach pozwoliły nam już nieco się z nimi zapoznać. Grafikę więc wyświetlamy, podając w atrybucie `src` link do odpowiedniego pliku:

```html
<img src="https://www.hosting.grafik.pl/zdjecie.jpg" />

<img src="naszPlik.jpg" />
```

Należy pamiętać, iż grafika wyświetli nam się w oryginalnym rozmiarze, więc ładując obraz o rozdzielczości 1920 × 1080 px na ekranie małego smartfonu zobaczymy tylko jej część. Sprawdźmy to teraz w praktyce. Jako źródła grafiki użyjemy linku do narzędzia generującego dla nas grafiki w dowolnie określonym rozmiarze. Jest to bardzo przydatne w sytuacji, gdy tworząc nową stronę, nie mamy jeszcze gotowych grafik, ale chcemy już coś umieścić na naszej witrynie, bądź gdy chcemy szybko przetestować jakiej wielkości obraz będzie najbardziej pasował w danym miejscu.

<Codepen id="yLGxgvR" />

Jak widać, coraz większe obrazy zaczynają już nieco psuć wygląd strony i dodawać paski do przesuwania strony w lewo i w prawo. Bez tego nie będziemy w stanie zobaczyć całej grafiki. Oczywiście dobrze przygotowany developer poradzi sobie bez problemu z wyświetlaniem grafiki w taki sposób, aby wyświetlała się ona jak najlepiej dla użytkownika. Spokojnie, my również tego się nauczymy, gdy będziemy omawiać tematy związane z responsywnością – do tego czasu musimy być po prostu uważni z dobieraniem grafik.

Możemy również umieszczać pliki znajdujące się na naszym komputerze. Zakładając, że plik znajduje się w tym samym katalogu (folderze) co nasz plik HTML, wtedy wystarczy w atrybucie src wpisać nazwę pliku:

<img alt="" src="/kurs/statyczna/img/podstawy-html/image.png" />

Czy to znaczy, że atrybut `src` raz przyjmuje adres URL, a raz nazwę pliku? Może to tak wyglądać na pierwszy rzut oka, jednak w rzeczywistości zawsze jest to adres URL. Gdy uruchomimy powyższą stronę za pomocą omawianego w poprzednich lekcjach Live Server, to tak naprawdę dla przeglądarki ta grafika będzie dostępna pod adresem `http://127.0.0.1:5500/rain.jpg` i to właśnie grafika z tego adresu będzie wyświetlona na stronie. Plik będzie serwowany z mini serwera, nie z naszego dysku. Możemy to sprawdzić, wklejając URL grafiki (podany wcześniej) w pasek adresu przeglądarki. Naszym oczom powinien ukazać się omawiany obrazek.

## Atrybuty

Najważniejszym atrybutem znacznika `<img />` jest `src`. To dzięki niemu przeglądarka wie, co ma nam wyświetlić na stronie. Istnieje jednak jeszcze kilka przydatnych atrybutów, o których należy wiedzieć:

### 👉 alt

Atrybut w którym podajemy opis tego co znajduje się na grafice. Tekst ten zostanie wyświetlony w przypadku gdy przeglądarka nie będzie w stanie wyświetlić obrazka, bo np. usunęliśmy go przypadkowo z serwera bądź zrobiliśmy literówkę w nazwie pliku. Dodatkowo, tekst ten będzie odczytany osobom niewidomym, które korzystają z czytników stron jak również pomoże on robotom indeksującym strony internetowe (np. Google) dowiedzieć się co znajduje się na grafice i podpowiadać ją w wynikach wyszukiwania. Nie musimy wpisywać żadnej wartości, jeżeli grafika na stronie jest jedynie czysto dekoracyjna i nie wnosi dodatkowych informacji w stosunku do głównej zawartości strony.

### 👉 width i height

Za pomocą tych atrybutów możemy ustawić wysokość oraz szerokość wyświetlanej grafiki. Jest to szczególnie wykorzystywane do “rezerwowania miejsca” dla grafiki, która jeszcze się nie pobrała. Dzięki temu grafika pojawi się w już przygotowanym miejscu i nie spowoduje “przeskakiwania” innych elementów strony, które zostałyby przesunięte po załadowaniu i wyświetleniu grafiki. Wysokość i szerokość grafiki można również ustawiać za pomocą CSS.

### 👉 title

Wartość tego atrybutu pojawi się w postaci małego tooltipa, który wyświetli się po najechaniu na grafikę myszką.

### 👉 loading

Atrybut, dzięki któremu poinstruujemy przeglądarkę w jaki sposób ma pobrać grafikę. Do naszej dyspozycji mamy dwie wartości:

- **eager** (domyślna wartość), czyli pobierz i wyświetl grafikę od razu podczas ładowania strony, nawet jeżeli grafika jest gdzieś daleko na stronie i nie jest widoczna dla użytkownika,
- **lazy**, czyli nie pobieraj grafiki od razu w przypadku gdy nie jest widoczna przez użytkownika (tzn. użytkownik musi trochę przescrollować stronę aby w końcu na nią trafić ) i pobierz ją dopiero wtedy, gdy użytkownik jest już niedaleko jej miejsca na stronie. Dzięki temu pierwsze załadowanie strony będzie znacznie szybsze i grafiki będą “dociągane” tylko gdy będą potrzebne.

W dalszej części kursu poznamy jeszcze dwa atrybuty – `srcset` oraz `sizes`. Wrócimy do nich przy okazji omawiania responsywności.

## Znacznik "figure"

W zależności od tego, jaką stronę będziemy tworzyli, możemy trafić na sytuację, w której będziemy chcieli umieścić pod grafiką jakiś jej krótki opis – tak jak ma to miejsce w grafice powyżej, która pokazuje screen ekranu z otwartym VS Code. Możemy to oczywiście zrobić, używając znacznika `<img />` i umieszczając pod nim jakiś znacznik tekstowy np. `<p>Opis grafiki</p>`. Wizualnie będzie to wyglądało całkiem dobrze, ale przeglądarka nie będzie wiedziała o tym, że wstawiony przez nas paragraf jest opisem zdjęcia. A takie informacje bardzo ułatwiają prezentację strony osobom, które korzystają z czytników oraz umożliwiają robotom zrozumienie, co dokładnie znajduje się na stronie.

Istnieje znacznie lepszy sposób na umieszczenie podpisu pod grafiką. Z pomocą przychodzą nam tutaj znaczniki `<figure>` oraz `<figcaption>`, które są stworzone właśnie do tego celu i powinniśmy ich używać w opisanej powyżej sytuacji. Dzięki temu w jasny sposób połączymy grafikę z jej opisem. Spójrzmy na przykład:

```html
<html>
  <head>
    <title>Grafika</title>
  </head>
  <body>
    <!-- Wewnątrz znacznika <figure> umieszczamy tag <img /> a pod nim
    dodatkowo <figcaption> -->
    <figure>
      <img src="https://picsum.photos/400/400" alt="Opis grafiki" />
      <figcaption>Tutaj umieszczamy tekst pod grafiką</figcaption>
    </figure>
  </body>
</html>
```

Tyle powinno nam na razie wystarczyć, aby tchnąć nieco życia w naszą stronę poprzez umieszczanie na niej grafik. Temat ten będziemy jeszcze kontynuowali w lekcji poświęconej responsywności, gdzie nauczymy się, w jaki sposób wyświetlać różne grafiki w zależności od wielkości ekranu osoby przeglądającej naszą stronę 💪
