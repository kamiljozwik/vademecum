---
title: Semantyka
description: ''
order: 60
free: false
extra_links:
  - title: Why & When to Use Semantic HTML Elements over Divs
    href: https://www.youtube.com/watch?v=bOUhq46fd5g
  - title: HTML 5 Semantics
    href: https://www.youtube.com/watch?v=kGW8Al_cga4
  - title: When to Use Semantic HTML Elements Instead of Divs
    href: https://www.youtube.com/watch?v=ZThq93Yuwd0
  - title: O semantyce słów kilka
    href: https://blog.comandeer.pl/o-semantyce-slow-kilka.html
---

Słowo "Semantyka" pojawiało się już kilkukrotnie w trakcie trwania tego kursu. W tej lekcji omówimy sobie dokładniej, czym tak w ogóle jest semantyka w odniesieniu do stron internetowych oraz HTML.

W kontekście HTML, semantyka oznacza używanie znaczników zgodnie z ich przeznaczeniem. Oznacza to, iż np. w celu umieszczenia na stronie nagłówka, używamy tagów `<h1..h6>`, w celu stworzenia listy korzystamy z `<ul>` lub `<ul>` itd. Dzięki temu układ naszej strony będzie uporządkowany i bardzo czytelny. Tylko… po co?

Niemal każdą stronę możemy zbudować, korzystając tylko ze znaczników `<div>` i ewentualnie `<input>` oraz odpowiednio napisanego CSS. Taka strona będzie jedynie dobrze wyglądała wizualnie i będzie użyteczna dla pełnosprawnego użytkownika (tzn. takiego bez problemów ze wzrokiem, ze sprawnymi obiema rękoma). Takie podejście do tworzenia stron jest jeszcze zrozumiałe w przypadku aplikacji biznesowych bądź administracyjnych. Tworzymy je na zlecenie pod konkretnych użytkowników. Takie strony/aplikacje również zazwyczaj są chronione hasłem i nie chcemy, aby wyświetlały się w listach wyszukiwania np. Google.

Sprawa wygląda inaczej w przypadku publicznie dostępnych stron typu blogi, wiadomości, sklepy internetowe, strony z informacjami o firmie itp. W takim przypadku nie wiemy dokładnie, kto będzie te strony odwiedzał oraz naszym celem będzie umieszczenie takich stron na jak najwyższej pozycji w wyszukiwarce. Tutaj semantyka będzie już miała dość spore znaczenie.

## Znaczenie semantyki

Stosowanie odpowiednich znaczników w odpowiednich miejscach na stronie przynosi wiele korzyści zarówno nam (twórcą tych stron), jak i użytkownikom. Przeanalizujmy sobie teraz, o jakich korzyściach tutaj mówimy.

### "Czysty" kod

Zaczniemy od najłatwiejszego przypadku, czyli utrzymanie strony. Edycja i rozwój projektu, który wypełniony jest divami i nic nieznaczącymi nazwami klas staje się w pewnym momencie prawdziwą udręką. Odpowiednia organizacja treści na stronie oraz stosowanie dodatkowych metodyk takich jak np. BEM (który to poznamy w jednej z przyszłych lekcji) spowoduje, że nasza praca będzie dużo bardziej profesjonalna i co najważniejsze – wygodna i przyjemna.

### Furtka bezpieczeństwa

Z poprzednich lekcji wiemy, iż każda przeglądarka posiada domyślne style dla sporej części tagów HTML. Dzięki temu czasami wystarczy jedynie dodać kilka linijek CSS, aby osiągnąć wygląd, jaki nas zadowala. Gdyby również z jakiegoś powodu nasze CSS przestały całkowicie działać (błąd na stronie, zły link, przypadkowe usunięcie pliku CSS itp.) to strona przygotowana przy użyciu odpowiednio dobranych znaczników będzie jeszcze "dość" czytelna i użytkownik, który akurat odwiedzi feralną stronę/podstronę i tak zrozumie, co na tej stronie się znajduje.

### RSS Readers i Reader View

Czytniki RSS są dość wygodnym sposobem na to, aby śledzić najnowsze wpisy z wielu blogów bądź stron informacyjnych. Często w takim czytniku mamy możliwość szybkiego przeczytania artykułu, który nas zainteresował. Skąd taki czytnik ma wiedzieć, co jest treścią artykułu? Wchodząc na różne blogi, widzimy zawsze sporo innych elementów strony takich jak nagłówek, nawigacje, jakieś reklamy, odnośniki do innych postów. Odpowiedzią oczywiście jest semantyka. Czytniki takie "wycinają" ze strony wszelkie niepotrzebne tagi i zostawiają tylko takie elementy jak `<main>`, `<article>` itp. Podobnie sprawa ma się z wszelkiego rodzaju dodatkami i rozszerzeniami typu Reader View (opcja ta jest wbudowana np. w firefoxa). Działają one w podobny sposób jak czytniki RSS i zostawiają na stronie tylko najbardziej wartościową część wpisu. W przypadku stron nieprzestrzegających zasad semantyki HTML – możemy zaprezentować użytkownikowi nie to, czego szukał.

### Dostępność

Nie możemy zapomnieć o tym, że z naszej strony mogą korzystać również osoby niepełnosprawne (np. niewidome bądź mające problemy z korzystaniem z myszki). Osoby takie często korzystają z czytników stron (treść strony jest czytana użytkownikowi). To czy czytnik zadziała prawidłowo i odpowiednio pokieruje niewidomą osobę po stronie, zależy w dużej mierze od tego, jak ta strona będzie skonstruowana. O dostępności powiemy sobie więcej w jednej z kolejnych lekcji.

### SEO (Search Engine Optimization)

Z naszych stron nie będą korzystali tylko ludzie, ale również wszelkiego rodzaju roboty indeksujące strony internetowe. To dzięki nim jesteśmy w stanie wyszukiwać interesujące nas strony w takich wyszukiwarkach jak Google. Roboty czytając naszą stronę "odnotowują" sobie jakiego rodzaju treści można na niej znaleźć i za pomocą odpowiednich algorytmów "wyliczają" jak wartościowa jest nasza strona. Robot nie widzi jak strona wygląda – jedyne co jest w stanie sprawdzić to kod HTML. Strona złożona z samych div-ów będzie dla robota całkowicie nieczytelna i mało wartościowa, dlatego też strona taka będzie pojawiała się dość daleko w wynikach wyszukiwania bądź może w ogóle tam się nie pojawić. Odpowiednio przygotowana strona, na której z kodu HTML jasno wynika, jak strona jest podzielona, jakie są tytuły poszczególnych sekcji, gdzie prowadzi nawigacja, będzie oceniona dużo lepiej. Dzięki temu nasza szansa na to, że ktoś odnajdzie naszą stronę w wyszukiwarce, znacznie wzrasta.

## Ważne znaczniki

W HTML praktycznie każdy znacznik ma jakieś znaczenie semantyczne. Istnieje jednak grupa tagów, które mają większe znaczenie w kontekście semantyki niż inne. Sporą część tagów z poniższej listy zdążyliśmy już poznać i w poprzednich lekcjach staraliśmy się ich używać "zgodnie ze sztuką", jednak zebranie ich teraz w jednym miejscu na pewno będzie bardzo przydatnym materiałem i dodatkowo odświeżeniem wiedzy 🙂

<table>
  <thead>
    <tr>
      <th>Znacznik HTML</th>
      <th>Opis</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>&lt;h1...h6&gt;</code></td>
      <td>
        Nagłówki na stronie. Znacznik <code>&lt;h1&gt;</code> powinien być użyty
        tylko raz i odzwierciedlać zawartość strony. Staramy nie pomijać się
        żadnego “poziomu” nagłówka, a więc po nagłówku
        <code>&lt;h2&gt;</code> powinniśmy użyć nagłówka
        <code>&lt;h3&gt;</code>, nie <code>&lt;h4&gt;</code>. Dobrym zwyczajem
        jest umieszczanie nagłówków w tagu <code>&lt;header&gt;</code>.
      </td>
    </tr>
    <tr>
      <td><code>&lt;abbr&gt;</code></td>
      <td>
        Wyjaśnienie skrótu użytego na stronie. Dzięki temu wyszukiwarki będą
        wiedziały co mieliśmy na myśli.
      </td>
    </tr>
    <tr>
      <td><code>&lt;hr&gt;</code></td>
      <td>
        Graficznie tag ten kreśli na ekranie linie, semantycznie – oddziela od
        siebie treść (np. zmiana tematu w rozdziale).
      </td>
    </tr>
    <tr>
      <td>
        <code>&lt;em&gt;</code>, <code>&lt;i&gt;</code> oraz
        <code>&lt;cite&gt;</code>
      </td>
      <td>
        W każdym przypadku na ekranie zobaczymy tekst napisany kursywą. W
        odniesieniu do semantyki użyjemy tych tagów odpowiednio do
        <code>em</code> – podkreślenia czegoś ważnego, <code>i</code> –
        przytoczenia czegoś obcego (np. obce słowo, definicja, wyrażenie
        techniczne) oraz <code>cite</code> – cytowanie bądź odwołanie się do
        innych zasobów.
      </td>
    </tr>
    <tr>
      <td><code>&lt;code&gt;</code></td>
      <td>
        <s>koń</s> <code>code</code> jaki jest, każdy widzi 🙂. Używając tego
        tagu dajemy robotom znać, że w środku znajduje się fragment kodu
        komputerowego.
      </td>
    </tr>
    <tr>
      <td><code>&lt;time&gt;</code></td>
      <td>
        Wewnątrz tego znacznika umieszczamy daty i godziny. Za pomocą atrybutu
        <code>datetime</code> możemy podać datę w formacie
        <a
          rel="noreferrer noopener"
          href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time"
          data-type="URL"
          data-id="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time"
          target="_blank"
          >rozumianym przez roboty</a
        >
        (czyli np. ISO).
      </td>
    </tr>
    <tr>
      <td><code>&lt;dfn&gt;</code></td>
      <td>
        Definicja – dzięki temu znacznikowi roboty wiedzą, że w danym fragmencie
        tekstu wyjaśniamy jakąś definicję. Taka strona będzie łatwiejsza do
        znalezienia przez osoby szukające właśnie tej konkretnej definicji.
      </td>
    </tr>
    <tr>
      <td><code>&lt;address&gt;</code></td>
      <td>
        Znacznik w którym umieszczamy dane adresowe. Mogą to być dane pełne dane
        adresowe firmy jak również dane dotyczące autora postu na blogu (np.
        jego email)
      </td>
    </tr>
    <tr>
      <td><code>&lt;blockquote&gt;</code> i <code>&lt;q&gt;</code></td>
      <td>
        Obydwa tagi służą do zamieszczania cytatów. Różnica jest jedynie w
        wyglądzie elementu na stronie, <code>blockquote</code> stosujemy do
        dłuższych, natomiast <code>q</code> do krótszych cytatów. W celu
        wskazania źródła cytatu (link, autor, tytuł książki itp.) możemy
        dodatkowo posłużyć się atrybutem <code>cite</code>.
      </td>
    </tr>
    <tr>
      <td><code>&lt;s&gt;</code></td>
      <td>
        Tekst umieszczony wewnątrz tego tagu zostanie wyświetlony jako
        przekreślony. Z semantycznego punktu widzenia informujemy roboty, że ten
        tekst nie jest już aktualny, ale z jakiegoś powodu chcemy zostawić go na
        stronie.
      </td>
    </tr>
    <tr>
      <td><code>&lt;del&gt;</code> oraz <code>&lt;ins&gt;</code></td>
      <td>
        W ten sposób informujemy o tym, że dany tekst został: <code>del</code> –
        usunięty (ale dalej jest widoczny na stronie jako tekst przekreślony)
        lub <code>ins</code> – dodany na stronie, renderowany z podkreśleniem.
        Dzięki temu możemy pokazywać w jaki sposób zmienia się np. regulamin
        strony. Za pomocą atrybutu <code>datetime</code> możemy dodatkowo podać
        informację kiedy taka zmiana miała miejsce.
      </td>
    </tr>
    <tr>
      <td><code>&lt;b&gt;</code> oraz <code>&lt;strong&gt;</code></td>
      <td>
        W obydwu przypadkach na stronie zobaczymy pogrubiony tekst, ale tylko
        <code>strong</code> posiada znaczenie semantyczne i oznacza, że dany
        fragment umieszczony w tych znacznikach jest celowo wyeksponowany z
        uwagi na to, że jest dość istotny w kontekście całego fragmentu.
        <code>b</code> służy głównie prezentacji, nie ma tak silnego znaczenia
        jak <code>strong</code>.
      </td>
    </tr>
    <tr>
      <td><code>&lt;mark&gt;</code></td>
      <td>
        Podobnie jak <code>strong</code> daje do zrozumienia, że tekst jest
        szczególnie ważny i powinien przyciągnąć uwagę użytkownika, ale zamiast
        pogrubiać czcionki, to domyślnie zaznacza fragment tekstu na żółto.
      </td>
    </tr>
    <tr>
      <td>
        <code>&lt;dl&gt;</code>, <code>&lt;dt&gt;</code> i
        <code>&lt;dd&gt;</code>
      </td>
      <td>
        Listy definicji, dzięki temu możemy stworzyć listę (listy) ważnych pojęć
        znajdujących się na naszej stronie. Definicje te będą łatwiejsze do
        wyszukania przez użytkowników.
      </td>
    </tr>
    <tr>
      <td><code>&lt;article&gt;</code></td>
      <td>
        Tekst przeznaczony do pojedynczego fragmentu na stronie. Może to być
        cały post, ale również dużo mniejsze elementy – ważne, aby były
        niezależne od innych elementów na stronie.
      </td>
    </tr>
    <tr>
      <td><code>&lt;aside&gt;</code></td>
      <td>
        Treść odbiegająca od głównej treści strony, artykułu, postu. Często
        umieszczana w <em>sidebarze</em>, może zawierać np. listę proponowanych
        postów.
      </td>
    </tr>
    <tr>
      <td><code>&lt;footer&gt;</code></td>
      <td>
        Stopka, czyli miejsce w którym możemy umieść wszelkie dodatkowe
        informacje (np. dane autora) każdej pojedynczej sekcji na stronie.
      </td>
    </tr>
    <tr>
      <td><code>&lt;section&gt;</code></td>
      <td>
        Podobnie jak <code>article</code> zawiera samodzielny, niezależny
        fragment strony, który nie do końca można “ubrać” w inny tag HTML.
      </td>
    </tr>
    <tr>
      <td><code>&lt;main&gt;</code></td>
      <td>
        Główna część strony. W przypadku bloga będzie to treść artykułu. Dzięki
        temu roboty wiedzą co jest najbardziej wartościową zawartością strony.
        Przydatne również we wcześniej już wspomnianych czytnikach stron.
      </td>
    </tr>
    <tr>
      <td><code>&lt;header&gt;</code></td>
      <td>
        Nagłówek pojedynczej sekcji na stronie. Możemy w nim umieścić tagi
        <code>h1..h6</code> wraz z innymi znacznikami, które mogą odnosić się do
        podtytułu bądź daty publikacji.
      </td>
    </tr>
    <tr>
      <td><code>&lt;nav&gt;</code></td>
      <td>
        Nawigacja. Wewnątrz tego znacznika umieszczamy linki nawigacyjne na
        stronie. Może wystapić wielokrotnie.
      </td>
    </tr>
    <tr>
      <td><code>&lt;ul&gt;</code> oraz <code>&lt;ol&gt;</code></td>
      <td>Listy numerowane i nienumerowane.</td>
    </tr>
  </tbody>
</table>

## A co ze znacznikami niesemantycznymi?

To, że powinniśmy dążyć do czystej i semantycznej strony, nie oznacza, iż powinniśmy całkowicie zapomnieć o znacznikach typu `<div>` lub `<span>`. Główną rolą tych znaczników jest grupowanie innych tagów w taki sposób, abyśmy mogli wygodnie i efektywnie stosować CSS na całe grupy znaczników.

Praktycznie niemożliwe jest zbudowanie, chodź lekko rozbudowanej strony tylko za pomocą znaczników semantycznych. Ich nadmiar może w niektórych sytuacjach przynieść w sumie więcej złego niż dobrego. Jeden artykuł powinien zawierać jeden nagłówek i kilka głównych sekcji. Jeżeli z kolei tworzymy na stronie coś, co ma tylko znaczenie estetyczne, spokojnie można to stworzyć divami.
