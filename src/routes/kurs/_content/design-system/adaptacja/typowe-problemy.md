---
title: Typowe problemy
description: ""
order: 20
---

W trakcie adaptacji nowego Design Systemu w projekcie można napotkać różnorodne problemy, które są specyficzne dla tego procesu. W przeciwieństwie do bardziej ogólnych wyzwań z poprzedniej lekcji, te problemy często wynikają z technicznych detali implementacji oraz współistnienia starego i nowego systemu.

Jak zawsze jednak, zrozumienie tych problemów i przygotowanie się na nie, pozwoli Ci uniknąć wielu błędów i ułatwi proces adaptacji nowego systemu designu.

### Typowe problemy:

1. **Problemy z zależnościami**  
   Nowy system designu często wymaga zaktualizowania lub dodania nowych zależności, takich jak biblioteki do stylowania (`styled-components`, `emotion`), narzędzia do budowy komponentów czy dodatkowe narzędzia pomocnicze. W starszych projektach mogą wystąpić konflikty z istniejącymi wersjami bibliotek.

2. **Niekompatybilność z istniejącymi komponentami**  
   Adaptacja nowego systemu designu może ujawnić problemy z niekompatybilnością istniejących komponentów. Na przykład, komponenty oparte na starszym podejściu do stylowania (np. CSS Modules) mogą nie współpracować z komponentami z nowego systemu, które wykorzystują `CSS-in-JS`. W efekcie mogą pojawić się problemy ze spójnością stylów, kolizje klas CSS, czy nawet błędy wizualne.

3. **Brak wsparcia dla starszych przeglądarek**  
   Nowe systemy designu często korzystają z nowoczesnych technologii i funkcji CSS, takich jak `grid`, `flexbox`, `custom properties (CSS variables)`, czy nowoczesne API JavaScript. Jeżeli Twoja aplikacja musi wspierać starsze przeglądarki (np. Internet Explorer), mogą pojawić się problemy z renderowaniem, a nawet z funkcjonalnością komponentów. W takiej sytuacji konieczne może być dodanie polifillów lub stworzenie dodatkowych stylów dla starszych wersji przeglądarek.

4. **Niedopasowanie do systemu siatki (grid system)**  
   Jeżeli istniejący projekt korzysta z niestandardowego systemu siatki lub frameworka CSS (np. `Bootstrap`), a nowy system designu ma własny, może dojść do kolizji w układzie strony. Elementy mogą być niepoprawnie wyrównane, a struktura layoutu może ulec zaburzeniu. Często wymaga to przemyślenia struktury layoutu na nowo lub stworzenia dedykowanych modyfikacji komponentów układu.

5. **Złożoność nadpisywania stylów**  
   Nowe komponenty z design systemu często mają swoje domyślne style, co może powodować problemy, gdy istniejące komponenty w projekcie wymagają specyficznego wyglądu. Nadpisywanie stylów komponentów może być tutaj trudniejsze, zwłaszcza gdy korzystają one z dynamicznych klas CSS lub generatorów unikalnych identyfikatorów klas.

6. **Problemy z wersjonowaniem komponentów**  
   Kiedy adaptujesz nowy system designu, istnieje ryzyko, że komponenty będą rozwijały się niezależnie od siebie, co może prowadzić do niezgodności w różnych częściach aplikacji. W projektach z dużymi zespołami, brak spójnego wersjonowania komponentów wprowadza chaos – na przykład, jeden zespół może korzystać z przestarzałej wersji przycisków, podczas gdy inny zespół już korzysta z najnowszej. Ważne jest, aby śledzić wersjonowanie i odpowiednio zarządzać zależnościami w repozytorium.

7. **Błędy wynikające z różnic w specyfikacji API**  
   W przypadku gdy nowy system designu wprowadza zmiany w interfejsie API komponentów (np. inne propsy w React), istnieje ryzyko, że starszy kod będzie korzystał z nieaktualnych lub niewspieranych już właściwości komponentów. Może to prowadzić do błędów w aplikacji, które będą trudne do zidentyfikowania bez odpowiednich testów jednostkowych lub integracyjnych.

8. **Spadek wydajności**  
   Nowoczesne design systemy często dodają więcej złożoności do komponentów, co może wpłynąć na wydajność renderowania aplikacji. Na przykład systemy oparte na `CSS-in-JS` mogą generować dodatkowy narzut związany z obliczaniem i generowaniem stylów w trakcie renderowania. Może to prowadzić do spadku wydajności, zwłaszcza w większych aplikacjach z dużą liczbą dynamicznych komponentów.

Rozwiązując te typowe problemy krok po kroku, możliwe jest płynne wdrożenie nowego systemu designu, minimalizując ryzyko problemów z integracją i jakością końcowego produktu.
