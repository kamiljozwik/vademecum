---
title: Odbieranie danych
description: ''
order: 110
free: false
extra_links:
  - title: Send emails from a HTML Contact Form
    href: https://www.youtube.com/watch?v=r4RQ38EoLds
  - title: How do you Submit an HTML Form?
    href: https://www.youtube.com/watch?v=TCEgdiN0A8s
---

<script>
	import Vimeo from "$lib/components/ui/Vimeo.svelte";
  import Codepen from "$lib/components/ui/Codepen.svelte";
</script>

Skoro wiemy już tak dużo na temat tworzenia formularzy, to przyszedł czas na wysyłanie zebranych za ich pomocą danych. Żeby tego dokonać, należy umieścić znacznik `<input type="submit">` bądź `<button type="submit">`. W ten sposób umieścimy w naszym formularzu przycisk, który uruchomi wysyłanie formularza i po poprawnym wysłaniu odświeży stronę. Tylko gdzie te dane są wysyłane?

Tutaj wykraczamy nieco po strefę HTML/CSS i wkraczamy do świata backendu, czyli tej niewidocznej części aplikacji służącej m.in. właśnie do przechowywania danych. Tag `<form>` akceptuje dwa atrybuty, dzięki którym możemy określić, na jaki adres chcemy wysłać dane z formularza i za pomocą jakiej metody HTTP. Nie będziemy w tym kursie zagłębiać się w zapytania sieciowe, ale najczęściej będziemy wykorzystywali metodę POST.

Jako że nie posiadamy własnego serwera do przetwarzania formularzy, musimy skorzystać z jakiegoś gotowego rozwiązania. Na potrzeby tego przykładu skorzystamy z platformy [formspree](https://formspree.io/). Dzięki niej będziemy mieli możliwość przeglądać dane wysłane za pomocą formularza na naszej stronie, jak również otrzymywać te dane bezpośrednio na naszą skrzynkę pocztową. Darmowy plan pozwala na odbieranie 50 przesłań z formularza miesięcznie, więc spokojnie powinno to wystarczyć do nauki.

W pierwszej kolejności musimy stworzyć konto na formspree.io i potwierdzić nasz adres e-mail. Potwierdzenie adresu jest wymagane i bez tego nie będziemy w stanie utworzyć formularza. Gdy już nasze konto będzie potwierdzone, możemy przejść do tworzenia nowego formularza. Proces ten jest pokazany w poniższym wideo (UI aplikacji może się nieco różnić od tego, co widzimy na filmie, ale sam proces tworzenia formularza jest taki sam):

<Vimeo id="567193091" h="55f3befe1c" />

Jak możemy zauważyć na wideo, po stworzeniu nowego formularza mamy od razu wygenerowany podstawowy szablon formularza z uzupełnionymi atrybutami `action` oraz `method`, więc możemy go sobie łatwo skopiować.

W przypadku formspree po wysłaniu formularza zobaczymy krótkie podziękowanie za przesłanie danych i przycisk pozwalający na powrót na stronę. Jest to zachowanie, które zaimplementowało formspree i w przypadku innych platform zachowanie to może nieco się różnić.

Przykładowy formularz (pamiętajcie o limicie w darmowym koncie 🙂)

<Codepen id="OJrrJvM" />

## Przechowywanie danych

Formspree jest tylko jedną z wielu dostępnych platform do przechowywania danych z formularzy w przypadku, gdy nie posiadamy własnego backendu bądź nie chcemy używać JavaScript. Poniżej znajduje się kilka innych przykładowych platform działających podobnie do formspree:

- [formkeep](https://formkeep.com/)
- [formcake](https://formcake.com/)
- [formsubmit](https://formsubmit.co/)
- [fieldgoal](https://fieldgoal.io/)
- [usebasin](https://usebasin.com/)
- [formcarry](https://formcarry.com/)

## 🕵️ Portfolio

Na stronie portfolio naszego detektywa znajdują się linki do dwóch stron (“Zgłoś sprawę” i “Kontakt”), na których z powodzeniem możemy spróbować umieścić formularze. Formularz zgłaszania sprawy może być nieco bardziej rozbudowany, natomiast formularze kontaktowe powinny być jak najłatwiejsze i jak najczytelniejsze, aby użytkownik nie miał żadnych problemów z jego wypełnieniem.
