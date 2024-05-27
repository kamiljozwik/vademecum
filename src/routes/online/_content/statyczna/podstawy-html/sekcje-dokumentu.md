---
title: Sekcje dokumentu
description: ''
order: 60
free: true
extra_links:
  - title: Why & When to Use Semantic HTML Elements over Divs
    href: https://www.youtube.com/watch?v=bOUhq46fd5g
  - title: When to use Section vs Article vs Div in Html?
    href: https://www.youtube.com/watch?v=swWeWesZVZU
---

Przeglądając strony internetowe, bardzo często możemy zauważyć pewien schemat w umiejscowieniu elementów na stronie. Nagłówek, logo, nawigacja, artykuły, stopka – zazwyczaj znajdują się w tych samych miejscach. Otwierając różne blogi, czy też strony będące wizytówką firmy na pewno bez problemu odnajdziecie wspomniane przeze mnie elementy.

Tak jak w przypadku tagów tekstu (nagłówek, pogrubienie, itp.) tak również w przypadku pewnych całych elementów na stronie posiadamy odpowiednie tagi HTML. Użycie różnych znaczników dla tego samego tekstu skutkowało w innym wyglądzie tego tekstu. Tymczasem tagi dzielące stronę na pojedyncze sekcje nie wnoszą żadnego wizualnego aspektu. Po co więc ich używać? Po pierwsze, odpowiednio podzielony dokument jest dużo łatwiejszy do używania przez osoby niepełnosprawne korzystające np. z czytników stron (screen readers). Kolejna rzecz to pozycjonowanie, tzw. SEO (Search Engine Optimization) oraz łatwiejsze stylowanie strony za pomocą CSS.

## Semantyka

Przeglądarki internetowe takie jak Google posiadają narzędzia (tzw. roboty), które ciągle przeglądają strony internetowe. Na podstawie popularności strony oraz jej tzw. semantyki określają, jak wysoko taka strona ma się pojawić w wynikach wyszukiwania. Tutaj pojawiło się słowo kluczowe – semantyka. Jest to właśnie odpowiednie używanie znaczników HTML. Robot czytający stronę nie widzi ekranu oraz całej warstwy graficznej naszej pracy. Przegląda on tylko i wyłącznie kod HTML – jeżeli na podstawie użytych znaczników jest w stanie określić, jak wygląda strona i co się na niej znajduje, wtedy przyznaje jej więcej punktów. Dlatego też widząc, iż strona posiada nagłówek, kilka występujących po sobie artykułów, nawigację oraz stopkę, będzie mógł ją przyrównać do znanego mu wzorca strony i ocenić ją jako wartościową witrynę. Jeżeli natomiast na stronie wystąpi kilkanaście głównych nagłówków `<h1>`, nie będzie żadnej nawigacji, każdy tekst i każdy fragment strony będzie umieszczony zawsze w tych samych znacznikach – wygląda to trochę jak śmietnik, i tak również zostanie ocenione. Strona taka raczej nie znajdzie się na pierwszej stronie wyszukiwania.

Semantyka jest bardzo ważnym i często ignorowanym, zapominanym elementem podczas tworzenia stron. Na temat semantyki powiemy sobie więcej w oddzielnej lekcji, gdy już będziemy znali większość popularnych znaczników.

## Tagi strukturalne

Omawianych tutaj znaczników jest znacznie mniej niż tych z poprzedniej lekcji. Tym razem nie będziemy ich porównywać na wspólnej stronie, gdyż tak jak wspomniałem – nie wnoszą one żadnych wizualnych zmian. Ich głównym celem jest grupowanie innych znaczników.

### 👉 article

Znacznika `<article>` użyjemy w przypadku, gdy będziemy chcieli umieścić na stronie element, który jest całkowicie niezależny od reszty strony, czyli nie powinien zawierać nawigacji po stronie, logo, sidebaru itp. reużywalnych elementów. Sama nazwa może już sugerować, jakie jest jego przeznaczenie. Będzie on zawierał w sobie inne znaczniki, które razem będą tworzyły treść artykułu, relacji, postu na blogu, krótkiej informacji, karty produktu itp. O `<article>` możemy trochę myśleć jak o takim małym, mniej ważnym znaczniku `<body>`, którego jednak możemy mieć więcej niż jeden na stronie. Każdy artykuł powinien posiadać nagłówek oraz tytuł. Możemy posiadać wiele znaczników `<article>` na jednej stronie.

```html
<!-- Pojedynczy <article> na stronie a'la post na blogu -->
<body>
	<h1>Witaj na blogu</h1>
	<article>
		<h2>Czym jest semantyka?</h2>
		<p>W tym atyykule dowiesz się więcej na temat semantyki</p>
		<p>Semantyka jest bardzo ważnym elementem w świecie HTML....</p>
	</article>
</body>

<!-- <article> użyty wielokrotnie na stronie -->
<body>
	<h1>Serwis z wiadomościami ze świata</h1>
	<article>
		<h2>Znaczny spadek kursu złotówki</h2>
		<p>Aktualny kurs euro wynosi ...</p>
	</article>
	<article>
		<h2>Spotkanie z prezydentem</h2>
		<p>Prezydent USA spotkał się z ....</p>
	</article>
</body>
```

### 👉 section

Powyższy znacznik jest używany do podzielenia naszej strony na mniejsze części – tzw. sekcje. Możemy używać go podobnie jak tagu `<article>`, jednak najczęściej będzie nam on dzielił artykuły oznaczone za pomocą `<article>` na mniejsze sekcje. W przypadku sekcji jest wskazane, ale nie wymagane, używać tagów nagłówka `<h1>...<h6>`. Gdy mamy wrażenie, że nasza strona będzie lepiej opisana za pomocą sekcji niż artykułów, nic nie stoi na przeszkodzie, żeby używać sekcji i nie posiadać żadnego tagu `<article>`.

```html
<!-- <article> podzielony na sekcje -->
<body>
	<h1>Witaj na blogu</h1>
	<article>
		<h2>Czym jest semantyka?</h2>
		<p>W tym artykule dowiesz się więcej na temat semantyki</p>
		<section>
			<h3>Historia HTML</h3>
			<p>HTML powstał w ....</p>
		</section>
		<section>
			<h3>Semantyczne znaczniki HTML</h3>
			<p>Jednymi z najważniejszych znaczników semantycznych są nagłówki....</p>
		</section>
	</article>
</body>

<!-- samodzielne <section> -->
<body>
	<h1>Salon samochodowy</h1>
	<section>
		<h2>Limuzyny</h2>
		<p>Poniżej znajdują się zdjęcia dostępnych limuzyn</p>
	</section>
	<section>
		<h2>Cabrio</h2>
		<p>Poczuj wiatr we włosach w naszych cabrio!</p>
	</section>
</body>
```

### 👉 div oraz span

Znaczniki, które mogą być użyty zawsze i wszędzie. Są to ogólne znacznik grupujące. Nie mają one żadnego znaczenia semantycznego. Na stronach najczęściej używany, aby grupować elementy w celu łatwiejszego używania CSS. Miejscem, w którym znaczniki te występują najczęściej, są aplikacje internetowe takie jak np. panele administratora. Zawierają one mnóstwo wykresów, danych, przycisków, przełączników itp. Naprawdę ciężko w takim przypadku operować dwoma pozostałym poznanymi już wcześniej tagami. Panele administratora również najczęściej wymagają zalogowania, więc roboty czytające strony i tak nie będą miały tam dostępu, więc semantyka w takim przypadku nie jest aż tak istotna.

```html
<!-- Będzie działać, ale unikamy takiego podejścia -->
<!-- Pod kątem SEO ta strona jest nic nie warta -->
<body>
	<div>Witaj na blogu</div>
	<div>
		<div>Czym jest semantyka?</div>
		<div>W tym atyykule dowiesz się więcej na temat semantyki</div>
		<div>
			<div>Znacznik div</div>
			<div>wyświetla tekst w nowych liniach.</div>
		</div>
		<div>
			<span>Znacznik span</span>
			<span>wyświetla tekst w tej samej linii.</span>
		</div>
	</div>
</body>
```

### 👉 nav

Wystąpienie tego znacznika na stronie mówi nam o tym, iż w tej części dokumentu znajdziemy linki / odnośniki to innych elementów na stronie lub innych podstron naszej witryny. To, w jaki sposób umieścimy same linki leży już po naszej stronie – mogą to być po prostu tagi odnośnika (tag `<a>` – niedługo go poznamy) bądź całe listy. Ważna uwaga – nie umieszczamy wszystkich linków występujących na naszej stronie wewnątrz tego znacznika. `<nav>` ma dość ważne znaczenie w przypadku przeglądania strony przez osoby niepełnosprawne, więc powinien on być użyty tylko tam, gdzie faktycznie mamy linki umożliwiające nawigowanie się po naszej stronie.

```html
<!-- Bardzo prosta nawigacja -->
<body>
	<nav><a href="#">HTML</a> | <a href="#">CSS</a> | <a href="#">JavaScript</a> |</nav>
</body>

<!-- Nawigacja wewnątrz znaczników listy -->
<!-- Listy poznamy już niedługo -->
<body>
	<nav>
		<ul>
			<li><a href="#">Home</a></li>
			<li><a href="#">Blog</a></li>
		</ul>
	</nav>
</body>
```

### 👉 aside

Tag `<aside>` pozwala nam na umieszczeniu w dokumencie treści niezwiązanych z główną treścią dokumentu / artykułu. Może to być jakaś mała dodatkowa nawigacja, cytat, bądź reklamy. Z punktu widzenia semantyki HTML `<aside>` wskazuje na to, że faktycznie coś dodajemy w tym konkretnym miejscu, ale nie jest to ważne z punktu widzenia głównego wątku. Jeśli daną treść można usunąć i nie zmieni to w żaden sposób sensu treści głównej, to można to uznać za `<aside>`.

```html
<!-- Wtrącenie dodatkowej informacji -->
<body>
	<article>
		<h2>Co zwiedzić w Warszawie?</h2>
		<p>Największe atrakcją w Warszawie jest ...</p>
		<aside>
			<p>Zobacz rekomendowane przez nas restauracje...</p>
		</aside>
		<p>Kolejną ciekawą atrakcją jest...</p>
	</article>
</body>

<!-- Wtrącenie dodatkowej nawigacji -->
<body>
	<article>
		<h2>Największe atrakcje Warszawy</h2>
	</article>
	<article>
		<h2>Największe atrakcje Krakowa</h2>
	</article>
	<aside>Zobacz posty z poprzednich miesięcy</aside>
</body>
```

### 👉 header

Tag określający, iż w tym miejscu znajdzie się wprowadzenie do artykułu, posta bądź danej sekcji strony. Najczęściej wewnątrz tego znacznika będziemy umieszczać nagłówki `<h1>...<h6>`, grafikę, informacje o autorze, dacie publikacji itp.

```html
<!-- Dodanie nagłówka do artykułu -->
<body>
	<h1>Podróże małe i duże</h1>
	<article>
		<header>
			<h2>Moja wycieczka do Włoch</h2>
			<span>Autor: Jan Nowak</span>
		</header>
		<p>Podróż rozpocząłem od złapania autostopu...</p>
	</article>
</body>
```

### 👉 main

Znacznik `<main>` jest pewnego rodzaju uzupełnieniem znacznika `<body>`. Podobnie jak `<body>` może zostać użyty tylko raz w całym dokumencie i oznacza on miejsce, w którym znajdzie się najważniejsza część (najważniejsza treść) strony bądź główna funkcjonalność naszej aplikacji.

```html
<!-- Przykład użycia <main> -->
<body>
	<header>
		<h1>Portal miłośników wędkarstwa</h1>
	</header>
	<nav>
		<!-- Nawigacja po portalu -->
	</nav>
	<main>
		<article>
			<header>
				<h2>Jak łowić ryby</h2>
				<span>Autor: Stefan Okoń</span>
			</header>
			<p>Jak stare chińskie przysłowie mówi - wędka, nie ryba!</p>
		</article>
	</main>
	<aside>Kup Pan wędkę.</aside>
</body>
```

### 👉 address

Jeżeli chcemy umieścić nas naszej stronie dane kontaktowe, to `<address>` jest odpowiednim tagiem do tego celu.

```html
<!-- Przykład użycia <address> -->
<body>
	<section>
		<h2>Kontakt:</h2>
		<address>
			<!-- Poniższych tagów <a> jeszcze nie poznaliśmy -->
			<!-- ale kliknięcie w nr telefonu może Cię zaskoczyć :) -->
			<a href="mailto:kam@dev.com">Kam Dev</a><br />
			<a href="tel:+13115552368">(48) 112233</a>
		</address>
	</section>
</body>
```

### 👉 hgroup

Znacznik grupujący nagłówki `<h1>...<h6>`. Będzie przydatny w przypadku gdy chcemy umieścić podtytuł rozdziału bądź wskazać, iż opisywana rzecz jest częścią jakiegoś większego tematu.

```html
<!-- Przykład grupowania nagłówków -->
<body>
	<section>
		<hgroup>
			<h1>Kurs HTML</h1>
			<h2>Część pierwsza - podstawy</h2>
		</hgroup>
		<p>HTML składa się z tzw. tagów...</p>
	</section>
</body>
```

### 👉 footer

Stopka naszej strony, artykułu lub sekcji. Może wystąpić kilkukrotnie na stronie, ale zawsze tylko jeden raz wewnątrz jednego tagu grupującego, np. `<section>`, `<article>`, `<body>`. W przypadku stopki dla całej strony możemy tam umieścić dane kontaktowe bądź możliwość zapisu do newslettera. Stopka artykułu, postu, sekcji itp. elementów może zawierać informacje dotyczące autora, praw autorskich bądź linki do innych stron.

```html
<!-- Przykład użycia <footer> -->
<body>
	<header>
		<h1>To be or not to be</h1>
	</header>
	<article>
		<h2>To be</h2>
		<footer>
			<p>Author: John Doe</p>
			<a href="/about/john">About author</a>
		</footer>
	</article>
	<footer>
		<p>Contact us...</p>
	</footer>
</body>
```

Dla ułatwienia wszystkie powyższe tagi zebrałem w krótkim podsumowaniu ([pełny rozmiar](/online/statyczna/img/podstawy-html/sekcje.png)):

<img alt="" src="/online/statyczna/img/podstawy-html/sekcje.png" />
