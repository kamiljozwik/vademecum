---
title: BEM
description: ''
order: 20
free: false
extra_links:
  - title: You Probably Need BEM CSS in Your Life (Tutorial)
    href: https://www.youtube.com/watch?v=er1JEDuPbZQ
  - title: Why I use the BEM naming convention for my CSS
    href: https://www.youtube.com/watch?v=SLjHSVwXYq4
  - title: How to Organize CSS | Beginners BEM tutorial
    href: https://www.youtube.com/watch?v=MNPdifWAAa4
---

<script>
	import Codepen from "$lib/components/ui/Codepen.svelte";
</script>

Pisząc kod CSS, szczególnie w dużych projektach gdzie podobne sobie elementy powtarzamy na wielu podstronach, bardzo łatwo wpaść w pułapkę, w której nasze pliki CSS zawierają dziesiątki najróżniejszych klas, a selektory osiągają długość muru chińskiego.

Przychodzi więc nam w pewnym momencie do głowy myśl, aby jakoś standaryzować, uspójnić nowo tworzone klasy, aby były czytelne, łatwe do zrozumienia w przyszłości i podczas edytowania nie popsuły nam niczego na stronie. Nie jest to łatwe zadanie, więc najlepszym pomysłem będzie skorzystać z już gotowego i wielokrotnie sprawdzonego sposobu. Przykładem takiego standardu nazewnictwa klas w CSS jest m.in. BEM (skrót od “Block, Element, Modifier“).

## Czym jest BEM?

Jak wspomniałem już w poprzednim rozdziale, BEM jest standardem nazewnictwa klas w CSS. Ustala on pewne zasady, dzięki którym nasz kod CSS stanie się dużo czytelniejszy. BEM jest bardzo popularną metodyką w świecie frontend-owym, więc każda osoba zaznajomiona z tym podejściem będzie mogła szybko zrozumieć nasz kod, patrząc tylko na nazwy klas CSS.

BEM jest skrótem od nazw “Block, Element, Modifier“. Napisana przez nas klasa CSS, opisując dany znacznik HTML, powinna składać się maksymalnie z tych trzech elementów. Elementy te rozdzielane są znakami `__` (podwójne podkreślenie) w przypadku fragmentu “Element” oraz `--` (dwa myślniki) w przypadku fragmentu “Modifier”. Tak więc klasa taka będzie wyglądała następująco:

```css
<h2 class="block__element--modifier">Cześć</h2>
```

To tyle tytułem wstępu, odpowiedzmy sobie teraz na pytanie, co kryje się za tymi tajemniczymi określeniami.

<img alt="" src="/online/statyczna/img/zaawansowana-strona/bem.png" />

## Block

Block określa nam, gdzie zaczyna się w drzewie HTML nowy komponent. Przez komponent rozumiemy samodzielny i niezależny element na stronie, będący bazą, kontenerem dla pozostałych tagów HTML tworzących ten komponent. Blok jest więc rodzicem jednego, niezależnego od innych elementów na stronie, fragmentu kodu. Komponenty mogą być używane wielokrotnie w różnych częściach strony bądź na innych podstronach. Nazwa bloku powinna jasno określać jaką funkcję pełni on na stronie. Przykładem bloku może być przycisk, formularz, nawigacja. Każdy blok składa się z zagnieżdżonych w nim elementów.

```html
<!-- Klasa "form" tworzy nam nowy blok (kontener) -->
<form class="form">
	<!-- Zawartość formularza -->
</form>
```

## Element

Element jest nieodłącznym składnikiem bloku. Nie może on występować samodzielnie poza blokiem. Jego nazwa powinna jasno opisywać jego rolę w całym bloku. Klasa opisująca element składa się z nazwy bloku oraz nazwy samego elementu poprzedzonej dwoma podkreśleniami `__`.

```html
<!-- Klasa "form" tworzy nam nowy blok -->
<form class="form">
	<!-- Blok zazwyczaj składa się z wielu elementów -->
	<h2 class="form__title">Formularz kontaktowy</h2>
	<label class="form__label" for="surname">Nazwisko:</label>
	<input class="form__input" type="text" name="surname" />

	<label class="form__label" for="age">Wiek:</label>
	<input class="form__input" type="number" name="age" />

	<label class="form__label"
		>Przeczytałem regulamin:
		<!-- Elementy mogą być w sobie zagnieżdżone -->
		<input class="form__checkbox" type="checkbox" name="terms" />
	</label>

	<!-- Wewnątrz bloku może znajdować się kolejny blok.
  Tutaj tworzymy blok o nazwie "buttons-group" -->
	<div class="form__buttons buttons-group">
		<!-- Teraz poniższe elementy należą już do grupy "buttons-group" -->
		<button class="buttons-group__button" type="submit">Wyślij</button>
		<button class="buttons-group__button" type="reset">Anuluj</button>
	</div>
</form>
```

## Modifier

Modifier, czyli modyfikator, zmienia nam wygląd bądź zachowanie pojedynczych elementów. Dzięki niemu możemy nadawać poszczególnym fragmentom indywidualny kolor, rozmiar, zachowanie (np. przy najechaniu myszką). Modyfikatora możemy użyć zarówno na bloku, jak i na elemencie. Nazwę modyfikatora poprzedzamy dwoma myślnikami `--`. Oczywiście modyfikatora używamy tylko tam, gdzie go potrzebujemy. Nie jest on obowiązkowy. Modyfikator najczęściej jest używany do umieszczania dodatkowych właściwości bądź nadpisywania tych znajdujących się na elemencie.

```html
<!-- Klasa "form" tworzy nam nowy blok -->
<form class="form form--contact">
	<!-- Blok zazwyczaj składa się z wielu elementów -->
	<h2 class="form__title">Formularz kontaktowy</h2>
	<label class="form__label" for="surname">Nazwisko:</label>
	<input class="form__input" type="text" name="surname" />

	<label class="form__label" for="age">Wiek:</label>
	<!-- Pojedyńczym myślnikiem możemy rozdzielać nazwy dwu członowe -->
	<input class="form__input form__input--big-border" type="number" name="age" />

	<label class="form__label form__label--bold"
		>Przeczytałem regulamin:
		<!-- Elementy mogą być w sobie zagnieżdżone -->
		<input class="form__checkbox" type="checkbox" name="terms" />
	</label>

	<!-- Wewnątrz bloku może znajdować się kolejny blok.
  Tutaj tworzymy blok o nazwie "buttons-group" -->
	<div class="form__buttons buttons-group">
		<!-- Teraz poniższe elementy należą już do grupy "buttons-group" -->
		<button class="buttons-group__button buttons-group__button--send" type="submit">Wyślij</button>
		<button class="buttons-group__button buttons-group__button--cancel" type="reset">Anuluj</button>
	</div>
</form>
```

Zobaczmy, jak to wszystko będzie wyglądało po dopisaniu CSS. W poniższym przykładzie kod CSS jest umieszczony w nagłówku strony, ale dobrym pomysłem jest tworzyć pliki CSS zawierające kod dotyczący tylko jednego bloku i nazwać taki plik dokładnie tak jak ostylowany w nim blok.

<Codepen id="gOZZVBW" />

## Podstawowe zasady

Większość z rzeczy, które tutaj się pojawi, zostały już wymienione wcześniej. Jednak żeby mieć pewność, że nic nam nie umknęło, poniżej znajduje się lista podstawowych zasad, o których należy pamiętać podczas stosowania BEM:

- Elementy umieszczamy tylko na bloku. Nieprawidłową klasą będzie więc klasa `form__item__label`. Mamy tutaj element umieszczony na elemencie. Każdy element powinien być powiązany tylko z blokiem. Gdy zagnieżdżenia robią się zbyt duże, prawdopodobnie powinniśmy wydzielić nowy blok.
- Podczas stylowania CSS naszym selektorem powinna być tylko jedna klasa. Dzięki temu nie musimy martwić się kaskadowością. Przykładem źle napisanego selektora będzie `.form .form__input { ... }`
- Klasy powinny opisywać funkcję danego elementu, a nie jego wygląd. W naszym przykładzie w przypadku przycisków mogliśmy użyć modyfikatorów `--green` oraz `--red`, ale gdybyśmy w przyszłości zdecydowali się na to, aby przycisk wysyłający formularz miał kolor niebieski, musielibyśmy zmienić zarówno wartość `background-color`, jak i nazwę modyfikatora na `--blue`. W przypadku modyfikatora `--send` wystarczy zmiana wartości w CSS. Nazwa w dalszym ciągu jest poprawna.
- Podczas pisania stylów powinniśmy korzystać tylko z klas. Unikamy dodawania nazw znacznika HTML oraz klas. Ponownie nie mamy wtedy problemów z kaskadowością. Dodatkowo w razie potrzeby możemy zmienić strukturę HTML, ponieważ style nie są powiązane z tagami HTML. Nieprawidłowym zapisem byłby w takim razie selektor `div.buttons-group { ... }`.

Korzystanie z metodyki BEM przynosi nam wiele korzyści oraz znacząco poprawia jakość, oraz czytelność naszego kodu. Przyzwyczajenie się do takiego sposobu zapisu klas zajmuję trochę czasu, ale zdecydowanie warto go poświęcić. Jeżeli nie doceniasz jeszcze jego znaczenia, to na pewno zrobisz to, wracając po dłuższej przerwie do projektów, w których używałeś/używałaś BEM i tych, w których to Ty sam/sama decydowałeś/decydowałaś o nazewnictwie klas i tworzeniu selektorów 😉.

## 🕵️ Portfolio

Przepisywanie klas, które masz obecnie w swoim projekcie (jeżeli nie oszukujesz i systematycznie go rozwijasz 😉), będzie trochę mijało się z celem. Wykorzystaj BEM podczas ponownego tworzenie strony portfolio już po przerobieniu wszystkich lekcji.
