---
title: Atomic Design
description: ""
order: 30
extra_links:
  - title: Atomic Design
    href: https://atomicdesign.bradfrost.com/table-of-contents/
  - title: Atomic Design - What is it and why is it important?
    href: https://www.youtube.com/watch?v=Yi-A20x2dcA
  - title: Atomic Design - How To Make Web and UI Design Easier
    href: https://www.youtube.com/watch?v=W3A33dmp17E
---

Projektowanie atomowe to metodologia opracowana przez Brada Frosta (linki na końcu lekcji), która pozwala na tworzenie bardziej spójnych, skalowalnych i reużywalnych komponentów. Proponuje ona patrzenie na Design System jak na zestaw klocków LEGO, gdzie najmniejsze elementy można łączyć w coraz większe i bardziej złożone struktury.

## Pięć poziomów projektowania atomowego:

### ▶️ Atomy (`atoms`)

Atomami są najmniejsze, niepodzielne elementy interfejsu użytkownika, takie jak pola tekstowe, ikony, nagłówki czy kolory. Są one fundamentem, na którym buduje się bardziej złożone komponenty.

### ▶️ Cząsteczki (`molecules`)

Cząsteczki to połączenia dwóch lub więcej atomów, które razem tworzą funkcjonalne jednostki. Mogą to być np. formularze logowania składające się z pola tekstowego i przycisku.

Przykładem może być formularz logowania składający się z etykiety (`<label />`), pola tekstowego (`<input />`) i przycisku (`<button />`).

### ▶️ Organizmy (`organisms`)

Organizmy to bardziej złożone komponenty składające się z cząsteczek i atomów. Są to większe elementy interfejsu, takie jak nagłówki, stopki czy karty produktowe.

### ▶️ Szablony (`templates`)

Szablony to układy organizmów na stronie. Definiują strukturę strony i sposób, w jaki różne organizmy są rozmieszczone. Szablony nie zawierają jeszcze konkretnej treści, ale pokazują, jak będą wyglądać poszczególne sekcje strony.

### ▶️ Strony (`pages`)

Strony to szablony wypełnione konkretną treścią. Są to gotowe do użytku widoki, które użytkownicy widzą w przeglądarce. Strony pokazują, jak szablony działają w praktyce z rzeczywistymi danymi.

## Zalety projektowania atomowego:

- **Spójność**: Używanie tych samych atomów i cząsteczek w różnych częściach aplikacji zapewnia spójny wygląd i działanie.
- **Reużywalność**: Komponenty zbudowane na zasadach projektowania atomowego można łatwo ponownie wykorzystać w różnych miejscach aplikacji.
- **Skalowalność**: Dzięki modularnej strukturze, projektowanie atomowe ułatwia skalowanie aplikacji i dodawanie nowych funkcji.

## Zastosowanie projektowania atomowego w praktyce:

- **Tworzenie atomów**: Zacznij od stworzenia podstawowych elementów, takich jak proste przyciski, pola tekstowe i ikony. Ustal dla nich spójne zasady stylizacji.
- **Łączenie atomów w cząsteczki**: Połącz atomy w bardziej złożone komponenty, takie jak formularze czy grupy przycisków.
- **Budowanie organizmów**: Twórz większe jednostki, takie jak karty produktowe czy nagłówki, składając cząsteczki i atomy.
- **Definiowanie szablonów**: Określ układy stron, rozmieszczając organizmy w odpowiednich miejscach.
- **Tworzenie stron**: Wypełnij szablony rzeczywistą treścią, aby stworzyć gotowe widoki aplikacji.

Projektowanie atomowe pozwala na bardziej zorganizowane i przemyślane podejście do tworzenia systemów projektowania. Dzięki niemu możesz budować interfejsy użytkownika, które są nie tylko estetyczne, ale także łatwe do utrzymania i rozbudowy.
