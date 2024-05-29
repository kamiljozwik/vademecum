---
title: Nagłówek
description: ""
order: 10
free: false
extra_links:
  - title: Learn HTML meta tags in 3 minutes
    href: https://www.youtube.com/watch?v=bi5bfH_gVWE
  - title: Meta Tags and The Head of HTML Documents
    href: https://www.youtube.com/watch?v=pJRP1G5bsUE
  - title: What is Open Graph and how can it help my website with social media?
    href: https://www.youtube.com/watch?v=QwEQKM4YRnU
---

W takcie tego kursu już wielokrotnie wykorzystywaliśmy znacznik nagłówka `<head>` w celu umieszczenia w nim tytułu dokumentu (znacznik `<title>`), importowania plików CSS (znacznik `<meta>`) oraz bezpośredniego osadzania CSS (znacznik `<style>`). W tej lekcji rozwiniemy temat nagłówka dokumentu i powiemy sobie, jakie inne przydatne tagi możemy w nim umieścić.

Dla przypomnienia, znaczniki w nagłówku oraz znajdujące się w nich dane nie są wyświetlane na stronie. W nagłówku umieszczamy dodatkowe dane, które opisują oraz niejako konfigurują naszą stronę. Owa konfiguracja odbywa się najczęściej za pomocą tagów `<meta>` oraz odpowiednim ustawieniu wartości ich właściwości. To właśnie od znacznika `<meta>`, dane znajdujące się w nagłówku często nazywamy “metadanymi”.

Poza `<meta>` w nagłówku znajdziemy również poniższe znaczniki:

- **link**
- **title**
- **style**
- **script**
- **noscript**

## Podstawowe znaczniki

Zaczniemy od znaczników, które powinniśmy umieszczać niemal na każdej nowo tworzonej stronie. Znaczniki te są dodawana w VS Code, gdy skorzystamy z Emmeta i za jego pomocą utworzymy pusty szablon HTML:

```html
<head>
  <!-- Ustawiamy sposób kodowania znaków na stronie. UTF-8 jest standardem 
  i powinniśmy używać go w większości przypadków. -->
  <meta charset="UTF-8" />
  <!-- W przypadku otwarcia strony na przeglądarce IE 8/9/10
  (czyli bardzo starej), wymuszamy renderowanie strony za pomocą
  najnowszego dostępnego dla tych przeglądarek silnika.  -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <!-- Ustawiamy w jaki sposób strona ma zostać wyświetlona na urządzeniach
  mobilnych. "width=device-width" oznacza, iż wartość viewportu powinna zostać
  ustawiona na wartość równą szerokości ekranu. "initial-scale=1.0" z kolei oznacza,
  iż strona nie powinna zostać pomniejszana na urządzenaich z małym ekranem. -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- Tytuł dokumentu - wyświetlany również na zakładce w przeglądarce. -->
  <title>Document</title>
</head>
```

## Przydatne znaczniki

```html
<head>
  <!-- Bazowy adres URL, którego należy użyć dla wszystkich względnych adresów.
  Jeżeli przykładowo na naszej stronie umieścimy link <a href="/kontakt">,
  będzie on wskazywał na "https://example.com/kontakt" -->
  <base href="https://example.com" />
  <!-- Znany nam już sposób na importowanie plików do dokumentu HTML. -->
  <link rel="stylesheet" href="styles.css" />
  <!-- Znany nam już sposób na umieszczanie CSS w dokumencie. -->
  <style>
    div {
      color: red;
    }
  </style>
  <!-- Poniższe znaczniki dotyczą nieomawianego w tym kursie JavaScript. -->
  <!-- Uruchomienie kodu JavaScript z pliku. -->
  <script src="script.js"></script>
  <!-- Umieszczenie kodu JavaScript (podobnie jak CSS), wewnątrz pliku HTML -->
  <script>
    // kod JavaScript
  </script>
  <!-- Jeżeli nasza strona korzysta głównie z JavaScript, to użytkonik który
  w swojej przeglądarce zablokuje możliwość wykonywania kodu JavScript może
  nic na naszej stronie nie zobaczyć. Dzięki poniższemu znacznikowi możemy
  pokazać użytkownikowi stosowną informację albo prośbę o uruchomienie JavaScript -->
  <noscript>
    <!-- Kod HTML wyświetlony w przypadku, gdy użytkownik zablokował
    JavaScript na stronie. -->
  </noscript>
</head>
```

## Facebook Open Graph

Jeżeli kiedykolwiek zastanawialiście się, jak generowane są podglądy linków wklejanych do posta lub komentarza, to już będziecie znali odpowiedź. Facebook sprawdza metadane strony i poszukuje w nich specyficznych danych zaczynających się od og:. Są to tak zwane znaczniki open graph. To na ich podstawie Facebook generuje wspomniany już podgląd. Jeżeli więc chcemy, aby link do naszej strony wyglądał poprawnie, nie możemy o nich zapomnieć. -->

<img alt="" src="/kurs/statyczna/img/zaawansowana-strona/capture.png" />

Jeżeli chcemy sprawdzić, jak dany link wygląda na FB, możemy użyć do tego celu narzędzia udostępnionego przez Facebook – [debugger](https://developers.facebook.com/tools/debug). Uwaga – link musiał już kiedykolwiek znaleźć się na Facebooku.

### Znaczniki Open Graph:

```html
<head>
  <!-- Jeżeli stworzyliśmy na FB aplikację, tutaj podajemy jej ID.
  Niestey HTML i CSS nie wystarczą do tworzenia takich aplikacji 🙂 -->
  <meta property="fb:app_id" content="123456789" />
  <!-- Link do którego zostaniemy przekierowani po kliknięciu.  -->
  <meta property="og:url" content="https://example.com/page.html" />
  <!-- Typ strony. Najczęściej użyjemy tutaj "article" dla posta na blogu
  lub "website" dla normalnej strony. -->
  <meta property="og:type" content="website" />
  <!-- Tytuł strony. Jeżeli nic tu nie ustawimy, to FB użyje tagu <title> -->
  <meta property="og:title" content="Tytuł strony" />
  <!-- Jeden z najważniejszych tagów, czyli grafika, która pojawi się na
  FB i będzie przyciągała uwage przeglądających. -->
  <meta property="og:image" content="https://example.com/image.jpg" />
  <!-- Opis tego co znajduje się na grafice. -->
  <meta
    property="og:image:alt"
    content="Opis tego co znajduje się na grafice"
  />
  <!-- Opis strony -->
  <meta property="og:description" content="Opis strony" />
  <!-- Jeżeli dana strona jest częścią większej platformy, wtedy tutaj możemy
  umieścić nazwę platformy/strony głównej. 
  Np. dla pojedynczej aukcji na Allegro, ta wartość może mieć wartość "Allegro". -->
  <meta property="og:site_name" content="Nazwa Strony" />
  <!-- Informacje lokalizacyjne w formacie język_Terytorium -->
  <meta property="og:locale" content="pl_PL" />
</head>
```

Pełną dokumentację Open Graph znajdziemy pod tym linkiem: [The Open Graph protocol](https://ogp.me/).

## X (ex. twitter) Card

Podobnie jak w przypadku Facebooka, Twitter wymaga specyficznych dla siebie metadanych w celu poprawnego wyświetlania linków na jego stronie.

```html
<head>
  <!-- Rodzaj użytej karty na Twitterze.
  Dozwolone wartości: "summary", "summary_large_image", "app", "player" -->
  <meta name="twitter:card" content="summary" />
  <!-- Link do określonej strony na Twitterze. -->
  <meta name="twitter:site" content="@nazwa_strony" />
  <!-- Link do określonej osoby na Twitterze. -->
  <meta name="twitter:creator" content="@nazwa_konta" />
  <!-- Link do którego ma prowadzić karta po jej klknięciu. -->
  <meta name="twitter:url" content="https://example.com/post.html" />
  <!-- Tytuł karty. -->
  <meta name="twitter:title" content="Tytuł karty" />
  <!-- Opis karty. -->
  <meta name="twitter:description" content="Opis karty" />
  <!-- Grafika na karcie. -->
  <meta name="twitter:image" content="https://example.com/image.jpg" />
  <!-- Opis grafiki na karcie. -->
  <meta
    name="twitter:image:alt"
    content="Opis tego co znajduje się na karcie"
  />
</head>
```

W tej lekcji omówiliśmy sobie tylko najbardziej użyteczne metadane występujące w nagłówku strony. Myślę, że pokrywają one niemal wszystkie znaczniki, które przyjdzie nam używać podczas tworzenia naszych pierwszych stron internetowych.

## 🕵️ Portfolio

Nagłówek naszego portfolio jest dość ubogi i zawiera jedynie najbardziej podstawowe znaczniki. Rozbuduj go o poznane w tej lekcji tagi i nie zapomnij o umieszczeniu tagów `og:***`. Gdy już dowiemy się jak hostować naszą stronę i będziemy posiadali jej adres URL, wtedy możemy stworzyć sobie jakąś testową grupę na Facebooku i tam wkleić link do strony. Ciekawe, czy uda Ci się wygenerować ładną kartę podglądu linku 🙂
