---
title: Nawigacja
description: ''
order: 40
free: false
extra_links:
  - title: HTML Links
    href: https://www.youtube.com/watch?v=D9I_dJDiIu0
  - title: Learn HTML hyperlinks in 3 minutes
    href: https://www.youtube.com/watch?v=gOioxltfh48
  - title: How to Add Links in HTML code
    href: https://www.youtube.com/watch?v=iMj-TbN7ydg
---

<script>
	import Codepen from "$lib/components/ui/Codepen.svelte";
</script>

Z linkami zetknęliśmy się już wielokrotnie podczas poprzednich lekcji, ale dopiero teraz będziemy mieli okazję zapoznać się z nimi dużo dokładniej.

Nawigację w HTML realizujemy za pomocą tagu `<a href="tutaj_link">...</a>`. Link na tym tagu możemy umieścić na trzy różne sposoby:

- pełen adres URL, np. `<a href="https://frontstack.pl">Blog</a>`,
- adres relatywny `<a href="about.html">O mnie</a>`,
- konkretne miejsce na stronie (poprzez podanie wartości atrybutu `id`): `<a href="#about">O mnie</a>`

Podanie pełnego adresu jest dość intuicyjne – po kliknięciu użytkownik zostanie przeniesiony pod nowy adres.

W przypadku adresów relatywnych przeglądarka przekierowuje użytkownika na wskazaną podstronę, używając głównego adresu strony (tzw. domeny). Adresów relatywnych będziemy głównie używać w przypadku nawigowania po naszych podstronach, czyli np. podczas przechodzenia ze strony głównej (tzw. landing page) do strony z formularzem kontaktowym, do strony “o mnie”, cennika itp. Jako wartość atrybutu `href` w takiej sytuacji ustawiamy po prostu link do pliku HTML, w którym znajduje się treść danej strony, np.:

```html
<a href="about.html">O mnie</a>
<a href="price.html">Cennik</a>
<a href="/pages/team.html">Zespół</a>
<a href="index.html">Powrót do strony głównej</a>
```

Link wskazujący w atrybucie `href` wartość `id` innego elementu na stronie, po kliknięciu przekieruje nas na ten właśnie element. Przekierowanie będzie natychmiastowe, więc nasza strony “skoczy” do określonego miejsca. Jeżeli chcemy osiągnąć przyjemny efekt płynnego przejścia do konkretnego elementu na stronie, możemy skorzystać z przydatnej właściwości CSS:

```css
html {
	scroll-behavior: smooth;
}
```

## Otwarcie linku na nowej karcie

Jeżeli chcemy otworzyć link w nowej zakładce, może to zrobić umieszczając dodatkowy atrybut` target="\_blank"`. Ze względów bezpieczeństwa mocno zaleca się dodawania również atrybutu `rel="noopener noreferrer"`. Dzięki temu strona w nowo otwartej zakładce nie będzie mogła za pomocą JavaScript manipulować strony pierwotnej (tej, na której kliknęliśmy link). JavaScript jest poza zakresem tego kursu, więc wystarczy pamiętać o tym dodatkowym atrybucie.

Podsumowując, bezpieczne użycie tagu `<a>` do otwierania zakładek w nowej karcie powinno wyglądać następująco:

```html
<a href="https://frontstack.pl" target="_blank" rel="noopener noreferrer"> Blog </a>
```

Otwieranie linków w nowej zakładce jest tematem dość dyskusyjnym i ogólnie powinniśmy nawigować po stronie tylko w jednej zakładce, ale czasami zdarzają się sytuacje, gdzie przeniesienie użytkownika na nową zakładkę będzie miało więcej sensu (np. na stronie odtwarzany jest jakiś film bądź piosenka, lub użytkownik wypełnia formularz i nie chcemy usunąć mu niezapisanych zmian).

## Pobieranie plików

Tagu `<a>` możemy również używać do pobierania plików. W poprzednich lekcjach, podczas pracy nad stylami CSS tworzyliśmy osobne foldery w głównym katalogu projektu, w których umieszczane były pliki CSS bądź grafiki. Jeżeli na naszej stronie chcemy mieć np. możliwość pobrania cennika naszych usług w formacie .PDF, możemy stworzyć dla takich plików kolejny osobny folder (np. “downloads“) i odwoływać się do nich za pomocą atrybutu `href` użytego razem z atrybutem `download`:

```html
<a href="/downloads/cennik.pdf" download>Pobierz cennik</a>
```

## Zawartość tagu

W powyższych przykładach, jako zawartość tagu `<a>` umieszczaliśmy jakiś prosty tekst. Nic nie stoi na przeszkodzie, aby jako “dzieci” używać również innych znaczników. Przykładem mogą być tutaj grafiki (np. tagi `<img alt="">` lub `<svg>`) lub całe fragmenty strony (np. karta z cennikiem).

```html
<!-- Link będący grafiką: -->
<a href="/sklep/monitory/lg">
	<img alt="" src="img/logo-lg.jpg" />
</a>

<!-- Cały fragment HTML będacy linkiem: -->
<a href="/cennik/pakiet-gold">
	<div class="pakiet pakiet-gold">
		<h2>Pakiet Gold</h2>
		<img alt="" src="img/gold.png" />
		<p>1000 PLN</p>
	</div>
</a>
```

## CSS

Style CSS może aplikować bezpośrednio na tag `<a>`, jak również możemy stylować pięć różnych stanów, w jakich może znaleźć się nasz link:

- `:link` – stylowanie linków, które jeszcze nie zostały kliknięte (styl ten zniknie po kliknięciu w link),
- `:visited` – stylowanie linków, które użytkownik już poprzednio kliknął,
- `:hover` – style używane w momencie, gdy kursor myszy najedzie nad link,
- `:active` – styl użyty w momencie kliknięcia w link (stan, w którym przycisk myszy jest cały czas wciśnięty bądź na ekranie telefonu palec ciągle przyciska link),
- `:focus` – bardzo ważny styl, używany w momencie, gdy będziemy nawigować po stronie za pomocą tabulatora i natrafimy na link. Więcej o tym powiemy sobie w lekcji poświęconej dostępności (accessibility).

W celu optymalnej stylizacji wszystkich tych stanów powinniśmy ustawiać te style w kolejności **LVHA** (`:link` — `:visited` — `:hover` — `:active`). Pseudo klasa `:focus` jest zazwyczaj ustawiana przed lub po pseudo klasie `:hover`.

W poniższym przykładzie zebrane jest większość omówionych w tej lekcji przypadków użycia tagu `<a>`.

<Codepen id="xxmQLvE" />

## 🕵️ Portfolio

Na stronie portfolio realizowanej dla naszego detektywa możemy znaleźć puste linki do stron “Zgłoś sprawę” oraz “Kontakt”. W tym momencie możesz spróbować rozbudować to portfolio o nowe podstrony i stworzyć do nich odpowiednie linki.
