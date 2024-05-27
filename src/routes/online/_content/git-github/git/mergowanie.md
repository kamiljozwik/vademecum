---
title: Mergowanie
description: ''
order: 90
video: https://player.vimeo.com/video/502542192?h=d7ad67a2c4
video_length: '09:59'
free: false
extra_links:
  - title: The EXTREMELY helpful guide to merge conflicts
    href: https://www.youtube.com/watch?v=HosPml1qkrg
---

W tej lekcji zobaczymy, w jaki sposób możemy mergować (łączyć) dwie różne gałęzie naszego projektu. Jak wspominaliśmy sobie w lekcji wprowadzającej, łączenie dwóch branchy jest bardzo proste do czasu, gdy nie wystąpią konflikty. Przez konflikty rozumiemy wykonanie zmiany w tym samym miejscu w pliku na dwóch różnych branchach, a następnie próba ich połączenia. Git nie ma pojęcia, która zmiana jest poprawna. Nie ma też znaczenia czas wykonania zmiany, więc nowsza zmiana wcale nie oznacza, że jest ważniejsza. Na szczęście VS Code bardzo fajnie pokazuje nam miejsca, w których nastąpiły konflikty i pomaga w ich rozwiązaniu. Po rozwiązaniu konfliktu należy jeszcze pamiętać, aby dokończyć commit odpowiednią komendą, gdyż konflikty wstrzymują commit i nie jest on automatycznie kontynuowany po ich rozwiązaniu.

Po zmergowanie dwóch branchy Git najczęściej automatycznie tworzy nowy commit (tzw. merge commit), który to zawiera zmiany przychodzące z mergowanej gałęzi (czyli tej, na której pracowaliśmy i chcemy teraz naszą pracę “złączyć” z aktualną wersją kodu). To czy merge commit zostanie utworzony, zależy od tego, jaką metodę mergowania wybierze Git. W tym kursie spotkamy się z dwiema popularnymi metodami mergowania – rekursywna oraz tzw. fast forward.

## Strategia rekursywna

Jest to najpopularniejszy sposób łączenia zmian. Zostaje wykorzystany wtedy, gdy pomiędzy punktem stworzeniem nowego brancha a miejscem jego mergowania występują inne commity. Te “inne commity” to mogą być zmiany wprowadzone do mastera podczas mergowania innych branchy bądź w wyniku ręcznego utworzenia nowych commitów na branchu master (zakładając, że mergujemy z brancha roboczego do mastera). W wyniku takiego łączenia branchy powstaje jeden dodatkowy tzw. merge commit zawierający wszystkie zmiany z brancha roboczego.

<img src="/online/git-github/img/git/recursive.png" alt="" />

## Fast forward

Szybki merge (fast-forward) zostanie użyty w sytuacji, gdy po stworzeniu nowej gałęzi z mastera, nie pojawiły się w nim inne commity. W tym przypadku commity z brancha roboczego są po prostu przenoszone na mastera i historia commitów wygląda tak, jak byśmy w ogóle nie tworzyli nowego brancha i commity te tworzyli bezpośrednio ma masterze. W wyniku tego łączenia nie powstaje merge commit.

<img src="/online/git-github/img/git/fastforward.png" alt="" />

### Komendy, które poznany w tej lekcji:

**git merge** – dołączanie (mergowanie) zmian z innego brancha do brancha, na którym aktualnie się znajdujemy.
