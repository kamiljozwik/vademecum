---
title: Dobre praktyki
description: ""
order: 30
---

W tej ostatniej już lekcji podsumuję kilka najważniejszych (moim zdaniem) dobrych praktyk, które pojawiały się w poprzednich lekcjach i o których zawsze warto pamiętać.

1. **Spójna komunikacja z zespołem**  
   Zanim rozpoczniesz adaptację nowego design systemu, upewnij się, że cały zespół jest na bieżąco z planami i rozumie cel migracji. Wprowadzenie nowego systemu powinno być omawiane z programistami, projektantami i innymi kluczowymi osobami. Regularne spotkania pomogą zapewnić, że wszyscy wiedzą, jak stosować nowy system i jakie zmiany wprowadza.

2. **Stopniowa migracja komponentów**  
   Zamiast przepisania wszystkiego od razu, lepiej jest podejść do migracji w sposób iteracyjny. Zacznij od najczęściej używanych komponentów i stopniowo przechodź do mniej istotnych. Zmniejszy to ryzyko wprowadzenia błędów w całej aplikacji, a także pozwoli na szybsze uzyskanie pierwszych efektów.

3. **Dokumentacja**  
   Stwórz lub zaktualizuj dokumentację design systemu tak, aby była łatwo dostępna dla każdego w zespole. Dokumentacja powinna zawierać:

   - Wytyczne dotyczące używania komponentów.
   - Przykłady integracji z istniejącym kodem.
   - Informacje o stylowaniu i dostosowywaniu komponentów.

   Dobrze przygotowana dokumentacja przyspiesza proces wdrażania nowego systemu, ponieważ zmniejsza liczbę pytań i niepewności w zespole.

4. **Testy jednostkowe i integracyjne dla komponentów**  
   Przy adaptacji nowego design systemu warto zainwestować czas w testowanie komponentów. Każdy komponent powinien mieć testy jednostkowe oraz integracyjne, które sprawdzają nie tylko jego działanie, ale także interakcje z innymi komponentami. Narzędzia takie jak `Jest` oraz `React Testing Library` (lub od niedawna dostępne testy wbudowane w Storybooka) są idealne do tego typu testów. Testowanie na poziomie komponentów pozwala szybciej wykryć potencjalne problemy podczas migracji.

5. **Modularność i ponowne używanie komponentów**  
   Istotną zasadą w adaptacji nowego design systemu jest modularność. Tworząc komponenty, warto skupić się na ich ponownym używaniu w różnych częściach aplikacji. Modularne komponenty są łatwiejsze do zarządzania i aktualizowania. Przy tworzeniu nowego design systemu upewnij się, że komponenty są wystarczająco elastyczne, aby można było je dostosować w zależności od kontekstu, w którym są używane.

6. **Storybook jako narzędzie do wizualizacji komponentów**  
   `Storybook` to doskonałe narzędzie do rozwijania i testowania komponentów UI. Używając go, możesz łatwo zobaczyć, jak nowe komponenty będą wyglądać i działać w różnych scenariuszach, zanim zostaną zintegrowane z całą aplikacją. Storybook pomaga również w budowaniu bibliotek komponentów, zapewniając, że każdy komponent jest dobrze udokumentowany i łatwy w użyciu.

7. **Automatyzacja stylowania i dostosowania wyglądu**  
   Warto zautomatyzować proces dostosowywania stylów za pomocą narzędzi takich jak `CSS Variables` lub `ThemeProvider` (np. z `styled-components` lub `emotion`). Dzięki temu możesz łatwo zarządzać globalnymi stylami, takimi jak kolory, czcionki czy odstępy. Używanie zmiennych sprawia, że design system staje się bardziej elastyczny i prosty do modyfikacji, bez konieczności ręcznego aktualizowania każdego komponentu.

8. **Systematyczne wprowadzanie zmian**  
   Podczas migracji zaleca się wprowadzać zmiany w design systemie zgodnie z zasadą „małych kroków”. Regularne commity i mniejsze PR-y pozwalają na łatwiejsze śledzenie postępów oraz szybkie wykrycie i rozwiązanie ewentualnych problemów. Duże zmiany, obejmujące wiele plików naraz, mogą być trudniejsze do zrozumienia i bardziej ryzykowne w kontekście potencjalnych konfliktów.

9. **Użycie `Design Tokens`**  
   `Design Tokens` to wartości przechowywane w formie zmiennych (np. kolory, odstępy, typografia), które pomagają w utrzymaniu spójności w całym projekcie. Tokeny mogą być używane do definiowania globalnych wartości, które mogą być łatwo modyfikowane w jednym miejscu i automatycznie zaktualizowane we wszystkich komponentach. Dzięki nim zarządzanie stylami i wyglądem staje się prostsze, a aktualizacje globalnych elementów (np. zmiana palety kolorów) są szybsze i mniej podatne na błędy.

10. **Regularna kontrola spójności**  
    Ważne jest, aby regularnie sprawdzać, czy komponenty w projekcie są zgodne z nowym design systemem. Używaj narzędzi do automatycznego testowania wizualnego (np. `Chromatic`) oraz przeprowadzaj ręczne audyty wizualne, aby upewnić się, że wszystkie zmiany są zgodne ze specyfikacją i że nie ma niepożądanych odstępstw od wytycznych nowego systemu.

11. **Regularne przeglądy kodu (code reviews)**  
    Podczas adaptacji nowego design systemu, dokładne code review upewniają nas, że każdy członek zespołu rozumie i stosuje zasady nowego systemu. Code review to także okazja do wychwycenia problemów i niezgodności z wytycznymi designu na wczesnym etapie, co zapobiega powstawaniu długów technicznych.

12. **Szkolenie zespołu**  
    Adaptacja nowego design systemu to nie tylko zmiany techniczne, ale także nauka dla zespołu. Zapewnij, aby wszyscy deweloperzy przeszli odpowiednie szkolenia, zapoznali się z nowymi narzędziami i zrozumieli założenia systemu. Szkolenia mogą obejmować warsztaty, dokumentację lub spotkania 🍻, gdzie omawiane są najważniejsze elementy nowego systemu.

13. **Równoległa praca z projektantami**  
    Projektanci mogą dostarczać komponenty zgodne z wytycznymi nowego design systemu, a deweloperzy mogą na bieżąco informować o ewentualnych trudnościach technicznych. Warto, aby projektanci korzystali z narzędzi takich jak Figma i umożliwiają łatwą współpracę między działami.

14. **Wczesne zaangażowanie QA (Quality Assurance)**  
    Wprowadzenie nowego design systemu może wiązać się z subtelnymi zmianami w interakcji i wyglądzie komponentów. Dlatego warto zaangażować zespół QA już na wczesnym etapie adaptacji, aby testowali zarówno funkcjonalność, jak i zgodność wizualną. Automatyzacja testów wizualnych i funkcjonalnych pomoże w utrzymaniu jakości na wysokim poziomie.

15. **Feature flags**  
    Podczas migracji do nowego design systemu warto korzystać z `feature flags`. Pozwala to na wprowadzenie nowych komponentów lub stylów stopniowo, bez wpływu na całą aplikację. Dzięki temu możesz testować nowe elementy w mniejszych częściach aplikacji lub na ograniczonej liczbie użytkowników przed pełnym wdrożeniem.

16. **Analiza wpływu na wydajność**  
    Każdy design system może wpływać na wydajność aplikacji, zwłaszcza w przypadku złożonych komponentów lub skomplikowanego stylowania. Warto regularnie monitorować wydajność aplikacji po wprowadzeniu nowych komponentów. Narzędzia takie jak `Lighthouse` lub `React Profiler` mogą pomóc w identyfikacji miejsc, gdzie nowy design system może negatywnie wpływać na szybkość renderowania czy ładowania strony.

17. **Unikanie nadmiernej złożoności komponentów**  
    Staraj się, aby każdy komponent w nowym design systemie był jak najbardziej prosty i jednoznaczny w użyciu. Zbyt skomplikowane komponenty trudniej jest utrzymywać i ponownie używać. Jeśli komponent wykonuje zbyt wiele zadań, rozważ podzielenie go na mniejsze, bardziej specyficzne elementy. Modułowość sprawia, że komponenty są bardziej elastyczne i łatwiej dostosowują się do różnych scenariuszy.

18. **Konsystencja w stylach**  
    Upewnij się, że wszystkie komponenty w nowym design systemie są spójne pod względem stylowania. Nawet drobne różnice w marginesach, rozmiarach czcionek czy kolorach mogą prowadzić do niespójności w wyglądzie aplikacji. Aby tego uniknąć, warto używać centralnie zdefiniowanych wartości stylów (np. `Design Tokens`), które są współdzielone między komponentami.

19. **Utrzymywanie zgodności z WCAG**  
    Podczas adaptacji nowego design systemu należy zwrócić szczególną uwagę na dostępność (accessibility). Każdy komponent powinien być zgodny z wytycznymi WCAG, aby aplikacja była dostępna dla wszystkich użytkowników, w tym osób z niepełnosprawnościami. Regularne testowanie komponentów pod kątem dostępności i współpraca z ekspertami ds. dostępności może pomóc w zachowaniu wysokich standardów.

20. **Retrospektywa po wdrożeniu**  
    Po zakończeniu adaptacji nowego design systemu warto przeprowadzić retrospektywę. Zbierz zespół i omówcie, co poszło dobrze, a co można poprawić w przyszłości. Taki feedback jest niezwykle cenny, ponieważ pozwala na udoskonalenie procesu i unikanie błędów przy kolejnych aktualizacjach systemu lub nowych projektach.

Powodzenia 🚀
