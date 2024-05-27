---
title: Edytor tekstowy
order: 30
free: true
extra_links:
  - title: VS Code in 100 Seconds
    href: https://www.youtube.com/watch?v=KMxo3T_MTvY
  - title: VS Code dla początkujących
    href: https://www.youtube.com/watch?v=be14TkvI5oY
  - title: Learn Visual Studio Code in 7min
    href: https://www.youtube.com/watch?v=B-s71n0dHUk
  - title: 25 VS Code Productivity Tips
    href: https://www.youtube.com/watch?v=ifTF3ags0XI
---

Wybór odpowiedniego edytora tekstowego to bardzo ważna sprawa w przypadku każdego języka programowania. Edytor taki znacznie różni się od znanych nam standardowych edytorów tekstu (takich jak np. “Notatnik” w Windowsie). W przypadku programowania główne funkcje takiego edytora tekstowego to:

- kolorowanie składni, dzięki czemu możemy łatwo odnaleźć się w dużym pliku tekstowym,
- podkreślanie, wskazywanie miejsc, w których najprawdopodobniej popełniliśmy błąd (tzw. linting),
- automatyczne formatowanie tekstu,
- zaznaczanie miejsc w kodzie, na których wykonywanie naszego programu powinno się kontrolowanie zatrzymać (tzw. debugowanie),
- podpowiadanie i auto uzupełnianie pisanego tekstu,
- łatwość wyszukiwania i nawigowania między wieloma otwartymi plikami,
- zintegrowany system kontroli wersji,
- wiele innych przydatnych funkcji zależnych od używanego języka programowania.

Do tego wszystkiego edytor powinien umożliwiać nam łatwe konfigurowanie czcionek, tła, kolorów i innych tym podobnych rzeczy, dzięki czemu możemy pracować w środowisku, które estetycznie nam odpowiada. Będziemy spędzali wiele godzin dziennie, patrząc właśnie na niego, więc warto zadbać o to, aby chociażby tekst był dla nas czytelny, albo kolory tła nie były zbyt jasne. W tym przypadku są to już preferencje indywidualne.

Wymagania stawiane edytorom tekstowym oraz coraz większy rozwój doprowadziły do tego, iż stworzono dla nich specjalne określenie: IDE (Integrated Development Environment). IDE różnią się od siebie w zależności od wykorzystywanego języka programowania. Część z nich posiada wbudowane kompilatory, zaawansowane debuggery, narzędzia ułatwiające tzw. deployment gotowych aplikacji na serwery i wiele innych przydatnych rzeczy. IDE więc jest czymś więcej niż tylko edytorem tekstowym (edytorem kodu) – jest całym zestawem funkcjonalności, które wykraczają znacznie poza edytowanie tekstu.

Na rynku istnieje obecnie wiele dobrze ocenianych edytorów tekstowych, ale od jakiegoś już czasu prym (szczególnie w świecie frontend-owym) wiedzie narzędzie stworzone przez Microsoft – [Visual Studio Code](https://code.visualstudio.com/).

<img alt="" src="/online/statyczna/img/wprowadzenie/vs-code.svg" width="150" />

Jest to dość lekki edytor, którego podstawowe funkcje możemy wzbogacać dzięki tzw. rozszerzeniom. Czym są rozszerzenia i jak z nich skorzystać dowiemy się z kolejnych lekcji tego kursu. Wraz z kolejnymi nowo poznawanymi technologiami będziemy dodawać i konfigurować kolejne rozszerzenia, aby być w pełni świadomym co i dlaczego tak właśnie działa.

Na chwilę obecną jedyne co musimy zrobić to zainstalować najnowszą wersję VS Code. Program możemy pobrać z tego linku: [pobierz VS Code](https://code.visualstudio.com/Download). Na stronie wybieramy wersję instalatora zgodną z naszą wersją systemu operacyjnego. Podczas instalacji możemy skorzystać z domyślnych ustawień podpowiadanych przez instalatora.

Jeżeli wszystko wykonamy poprawnie, powinniśmy mieć możliwość uruchomienia naszego nowego programu, z którym nie rozstaniemy się już do samego końca tego kursu. Sam VS Code będziemy lepiej poznawać i konfigurować już w trakcie pisanie kodu. Osoby, które nie miały jeszcze styczności z edytorem tekstowym innym niż notatnik, zachęcam do obejrzenia poniższej lekcji omawiającej podstawy korzystania z VS Code.

## Nie tylko VS Code

Być może masz już jakieś doświadczenie w programowaniu i osobiście wolisz korzystać z innego edytora (innego IDE), np. Atom lub WebStorm. W żadnym wypadku nie stoi to na przeszkodzie, aby kontynuować ten kurs. W dalszych lekcjach mogą pojawić się rozszerzenia VS Code, z których można korzystać, aby pisanie kodu było dużo łatwiejsze i przyjemniejsze. Prawdopodobnie Twój edytor również takowe funkcje będzie posiadał, jednak będziesz musiał poszukać ich na własną rękę. Główny cel tego kursu – nauka wszystkich najważniejszych technologii, które powinien znać twórca stron internetowych, nie jest uzależniony od używanego edytora lub IDE. Tak więc wybór należy do Ciebie 🙂
