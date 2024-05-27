---
title: Znaczniki HTML
description: ''
order: 20
free: false
extra_links:
  - title: HTML Tag Basics
    href: https://www.youtube.com/watch?v=rOPKC49gTkk
---

W poprzednim rozdziale powiedzieliśmy sobie dwa słowa na temat tego, czym jest HTML i jakie były jego początki, ale nie widzieliśmy jeszcze ani jednego znacznika, więc czas najwyższy w końcu to zmienić.

Na samym początku powiedzmy sobie to jasno – HTML nie jest językiem programowania. Jest to język, w którym opisujemy, jak wygląda szkielet naszej strony internetowej. To tutaj pojawiają się wszystkie teksty, listy, tabelki, formularze, przyciski i wszystkie inne możliwe do znalezienia na stronie elementy.

Pisząc kod HTML, używamy tzw. znaczników (nazywanych również tagami). To właśnie znacznik decyduje o tym, czym będzie i jak zostanie wyświetlony dany element na stronie. Wszystkie znaczniki mają bardzo podobną składnię i kierują się tymi samymi zasadami. Ogólny schemat znacznika HTML pokazany został na poniższej grafice.

<img alt="" src="/online/statyczna/img/podstawy-html/znacznik.png" />

Na razie odpuścimy sobie atrybut znacznika i zajmiemy się samym znacznikiem / tagiem. Każdy znacznik umieszczony jest wewnątrz klamr `<>`. Każdy tag posiada swoją unikalną nazwę i to, co najważniejsze – każdy tag musi zostać poprawnie otwarty oraz zamknięty. Jest to dość popularny błąd wśród początkujących programistów, więc należy być tutaj bardzo uważnym.

W przypadku pełnego znacznika HTML, jego otwarcie następuje poprzez umieszczenie nazwy tagu wewnątrz poznanych już klamerek. Zamknięcie znacznika następuje poprzez powtórzenie nazwy i poprzedzenie go znakiem `/`. Wszystko to, co znajdzie się pomiędzy otwierającym oraz zamykającym tagiem jest to tzw. zawartość znacznika i zostanie ona wyświetlona na stronie. Przypomnę jeszcze raz – znacznik definiuje, jak zostanie coś wyświetlone na stronie, natomiast zawartość znacznika jest de facto tym, co na tej stronie się pojawi.

Na powyższej grafice widzimy jeszcze tzw. skrócony znacznik HTML. Będziemy go wykorzystywać w przypadku gdy nie będziemy musieli wyświetlić żadnego tekstu bądź wyświetlany tekst będzie zawarty w atrybucie znacznika. Do tego jeszcze na spokojnie dojdziemy w kolejnych lekcjach. Skrócony znacznik HTML jest tylko swego rodzaju uproszczeniem i jak najbardziej poprawnym zapisem jest użycie pełnego znacznika bez zawartości. W programowaniu jednak dążymy do tego, aby używać jak najczytelniejszego zapisu i znacznik skrócony jest w tym przypadku lepszym zapisem.

<img alt="" src="/online/statyczna/img/podstawy-html/equal.png" />

## Gdzie zapisywać kod HTML?

Kod HTML powinien zostać zapisywany w plikach tekstowych z rozszerzeniem `.html` bądź `.htm`, Gdy przeglądarka trafi na taki plik, będzie wiedziała, iż wewnątrz pliku będzie mogła znaleźć znaczniki, które powinna umieścić na ekranie. Proces umieszczania zawartości plików HTML na ekranie jest nazywany renderowaniem. Za każdym więc razem, gdy natrafimy na hasło w postaci “przycisk został wyrenderowany poprawnie”, wiemy iż chodzi o poprawne (zgodne z treścią pliku .html) wyświetlenie znacznika przycisku na ekranie.

Do tworzenia plików HTML możemy użyć dowolnego edytora tekstowego i dość często spotyka się osoby zaczynające swoją przygodę z HTML piszące swoje pierwsze bardzo proste strony w Notatniku i otwierające te pliki w przeglądarce. Nie ma oczywiście w tym nic złego, jednak pominiemy sobie te archaizmy i zaczniemy tworzyć strony dokładnie tak, jak będą one tworzone już w życiu zawodowym, czyli przy użyciu prostego serwera developerskiego oraz poznanego już w poprzednich lekcjach edytora VS Code.
