---
title: Praca z Gitem
description: ''
order: 20
free: false
extra_links:
  - title: CO TO JEST GIT? Instalacja i pierwsze repozytorium
    href: https://www.youtube.com/watch?v=b7ICJ93hnUg
---

Jak już można się domyślić, Git będzie nam najbardziej przydatny w momencie, gdy nad jednym projektem będzie współpracowało kilkoro programistów, jednak jest on również nieocenionym pomocnikiem w przypadku samodzielnej pracy.

W momencie rozpoczęcia nowego projektu będziemy pewnie posiadali dosłownie kilka pojedynczych plików i minimalną funkcjonalność naszej aplikacji. To, co jednak najważniejsze – nasza aplikacja w tym momencie działa w 100% sprawnie. Zakładając, że korzystamy w naszym projekcie z Gita (jak go dodać do projektu – o tym będzie później) to właśnie w tym momencie możemy zapisać stan naszego projektu. Dokładnie tak jak zrobilibyśmy w grze komputerowej – doszliśmy do pewnego momentu, nie chcemy utracić postępu w grze i w przypadku ewentualnej porażce móc zawsze bezpiecznie wrócić do miejsca zapisu i zacząć od nowa. To, co w nomenklaturze gier nazywane jest zapisem (bądź savem) w gicie ma nazwę commit. Tak więc chcąc zapisać postęp nad aktualną pracą będziemy commitować (w mowie potocznej używa się częściej określenia robić commita).

Powszechną praktyką jest tworzenie tzw. commita inicjującego tuż po rozpoczęciu pracy nad aplikacją. Jest to nasz taki punkt startowy. Pierwszy commit będzie nam też potrzebny, aby wysłać nasze pliki na serwer, ale o tym będzie więcej w następnej sekcji dotyczącej GitHuba. Mając już pierwszy zapis, możemy kontynuować naszą pracę. Za każdym razem, gdy dojdziemy do jakiegoś ważnego punktu, stworzymy jakąś ważną funkcjonalność, bądź będziemy zaczynać pracę nad czymś, co może popsuć naszą aplikację, wtedy będziemy commitować nasze aktualne postępy (w przypadku Gita często spotyka się z określeniem commitowanie zmian, co jest jednoznaczne z commitowaniem aktualnego postępu). Gdy coś nam nie wyjdzie, popsujemy aplikację, bądź stwierdzimy (albo klient stwierdzi), że w sumie aplikacja przed naszymi zmianami wyglądała bądź działała lepiej niż po zmianach, bez problemów możemy wrócić do jednego z wcześniejszych zapisów, wczytać go i kontynuować ponownie od tego miejsca.

Git wprowadza również pojęcie gałęzi (ang. branch). Domyślnie w naszym projekcie posiadamy jedną główną gałąź, która zwyczajowo nazywana jest master. Gdy zaczynamy pracę z Gitem i tworzymy nasze pierwsze commity, są one domyślnie umiejscowione na tej gałęzi.

<img src="/online/git-github/img/git/git1.png" alt="" />

To, co najważniejsze w gałęziach to możliwość tworzenia kolejnych gałęzi z gałęzi głównej. Co to znaczy? To jest dokładnie to, co byśmy zrobili, nie korzystając z Gita, a więc wspomniany już folder MójProjekt_v2. Chcemy coś do niego dodać, ale jednocześnie chcemy mieć cały czas pod ręką wersję oryginalną na wypadek, gdybyśmy coś popsuli, albo gdyby trzeba było do niej szybko wrócić. Dokładnie tym jest nowy branch w projekcie. Sami decydujemy, w którym momencie chcemy skopiować nasz obecny kod i dalej pracować już na nowym branchu. Graficznie, będzie to wyglądało tak:

<img src="/online/git-github/img/git/git2.png" alt="" />

dzimy, iż tworząc nową gałąź, po prostu kopiujemy cały kod, który mieliśmy zapisany w commicie tuż przed rozgałęzieniem. Nowo tworzony branch musi zostać odpowiednio nazwany – na powyższej grafice nazwaliśmy go “Nowe logo”, a więc posiadamy teraz dwa branche: “master “ oraz “Nowe logo”. Na nowym branchu możemy spokojnie robić, co nam się tylko podoba i zmiany tam wprowadzone w żaden sposób nie dotkną kodu na głównej gałęzi. W dalszym ciągu mamy również możliwość w dowolnym momencie powrotu do dowolnej z powyższych czerwonych kropek. Stworzenie nowej gałęzi nie oznacza, iż musimy teraz pracować tylko na niej. Możemy swobodnie przełączać się między gałęziami i wraz z każdym przełączeniem będzie zmieniała się zawartość naszych plików tak, aby pracować na kodzie, który jest dostępny na aktualnie wybranym przez nas branchu.

Praca na dwóch branchach wydaje się wygodna, ale jakby nie patrzeć na jednym branchu mamy teraz stworzone menu a na drugim dodaliśmy nowe logo. Co zrobić, żeby w końcu na naszej stronie internetowej zobaczyć obydwie te rzeczy na raz? Będziemy nasze gałęzie łączyć. A dokładnie rzecz ujmując, wszystkie zmiany, które do tej pory zrobiliśmy na gałęzi “Nowe logo” będziemy chcieli umieścić na gałęzi master. Dlaczego akurat w tę stronę? Otóż pracując nad projektem, musimy ustalić sobie wcześniej, która gałąź będzie naszą główną gałęzią trzymającą aktualny, pełny i działający kod naszej aplikacji. Najczęściej ta rola zostaje nadana gałęzi master, ponieważ jest ona z nami od samego początku i utarło się już tak, że właśnie master jest tą najważniejszą gałęzią w całym projekcie. To z mastera wszyscy tworzą nowe branche i to w masterze następnie umieszczają zmiany dokonane na innych gałęziach.

Istnieje kilka sposób na łączenie branchy, my poznamy najprostszą i chyba najbardziej popularną, czyli tzw. merge.

<img src="/online/git-github/img/git/git3.png" alt="" />

Łączenie gałęzi (i zmian w kodzie) jest dość prostą czynnością. Jak widać na powyższym obrazku wszystkie zmiany, które wprowadzimy na branchu “Nowe logo” zostaną umieszczone w masterze pod jednym commitem. Commit zostanie automatycznie utworzony przez Git podczas mergowania. Problemy pojawiają się wtedy, gdy podczas pracy nad logo oraz w commicie “dodanie menu” dokonamy zmian w tym samym pliku w tej samej linii kodu. Git wtedy nie będzie wiedział, którą wersję ma wybrać i zasygnalizuje nam tzw. konflikt. Wtedy mergowanie jest na chwile wstrzymane na czas rozwiązania konfliktu. Dostaniemy dokładną informację gdzie i jaki konflikt nastąpił i to już nasz obowiązek, aby konflikt taki rozwiązać, czyli otworzyć ten plik i albo wybrać jedną ze zmian i odrzucić drugą, albo samodzielnie poprawić ten fragment kodu.

Rozwiązywanie konfliktów potrafi być naprawdę bardzo uciążliwe, dlatego dobrą praktyką jest regularne aktualizowanie brancha, na którym pracujemy o nowe zmiany, które pojawiają się w masterze. Dzięki temu, jeżeli już konflikty wystąpią, będą dużo łatwiejsze do rozwiązania. Wszystko to zobaczymy niedługo w praktyce.

Na tym początkowym etapie nauki wszystko, co musimy wiedzieć o gicie to, w jaki sposób możemy tworzyć punkty kontrolne naszej pracy w postaci commitów, jak tworzyć rozgałęzienia, rozwiązywać konflikty i wracać do poprzedniego stanu kodu, gdy coś nam nie wyjdzie. Do tego dowiemy się również, czym jest GitHub i w jaki sposób tworzyć nasze programistyczne portfolio. Wiedzę teoretyczną już mamy, poznaliśmy trochę słownictwa, więc ruszamy teraz przetestować to wszystko w praktyce.

## Nie tylko kod

Jak może zauważyłeś, Git jest narzędziem, które bardzo dobrze radzi się z wersjonowaniem (czyli regularnym zapisem kolejnych wersji) plików tekstowych. Dlatego też jest tak popularne w programowaniu. Jego funkcjonalność nie zamyka się jednak tylko do plików zawierających kod. Równie dobrze możemy korzystać z Gita do wersjonowania plików typu txt, Word, Excel czy PowerPoint.
