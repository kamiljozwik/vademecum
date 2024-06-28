---
title: Struktura komponentów
description: ""
order: 40
extra_links:
  - title: React Folder Structure in 5 Steps
    href: https://www.robinwieruch.de/react-folder-structure/
  - title: How To Structure React Projects
    href: https://blog.webdevsimplified.com/2022-07/react-folder-structure/
  - title: Folder Structures in React Projects
    href: https://dev.to/itswillt/folder-structures-in-react-projects-3dp8
---

Prawidłowa struktura komponentów i folderów oraz jasne konwencje nazewnictwa są niesamowicie ważne dla utrzymania czytelności i "zarządzalności" kodu w bibliotekach UI. Dobrze przemyślana struktura ułatwia nawigację po kodzie oraz jego utrzymanie i rozwój.

Istnieją niezliczone podejścia do tego w jaki sposób należy katalogować komponenty UI w projektach. W tej lekcji przyjrzymy się kilku popularnym rozwiązaniom.

### Struktura modułowa

Struktura modułowa polega na organizacji komponentów w foldery na podstawie ich funkcji lub obszarów aplikacji. Dzięki temu komponenty są łatwe do znalezienia i zarządzania. Jest to najprostsza i chyba najczęściej spotykana struktura.

```
src/
|-- components/
|   |-- Button/
|   |   |-- Button.jsx
|   |   |-- Button.test.js
|   |   |-- Button.styles.js
|   |-- Input/
|   |   |-- Input.jsx
|   |   |-- Input.test.js
|   |   |-- Input.styles.js
|   |-- Form/
|   |   |-- Form.jsx
|   |   |-- Form.test.js
|   |   |-- Form.styles.js
|-- pages/
|   |-- Home/
|   |   |-- Home.jsx
|   |   |-- Home.test.js
|   |   |-- Home.styles.js
|   |-- About/
|   |   |-- About.jsx
|   |   |-- About.test.js
|   |   |-- About.styles.js
|-- utils/
|   |-- api.js
|   |-- helpers.js
```

### Struktura typu "Atomic Design"

Struktura typu "Atomic Design" opiera się na koncepcji [projektowania atomowego](https://bradfrost.com/blog/post/atomic-web-design/), gdzie komponenty są organizowane w kategorie takie jak atomy, cząsteczki, organizmy, szablony i strony.

```
src/
|-- components/
|   |-- atoms/
|   |   |-- Button/
|   |   |   |-- Button.jsx
|   |   |   |-- Button.test.js
|   |   |   |-- Button.styles.js
|   |-- molecules/
|   |   |-- FormField/
|   |   |   |-- FormField.jsx
|   |   |   |-- FormField.test.js
|   |   |   |-- FormField.styles.js
|   |-- organisms/
|   |   |-- Form/
|   |   |   |-- Form.jsx
|   |   |   |-- Form.test.js
|   |   |   |-- Form.styles.js
|-- templates/
|   |-- LoginTemplate/
|   |   |-- LoginTemplate.jsx
|   |   |-- LoginTemplate.test.js
|   |   |-- LoginTemplate.styles.js
|-- pages/
|   |-- HomePage/
|   |   |-- HomePage.jsx
|   |   |-- HomePage.test.js
|   |   |-- HomePage.styles.js
|-- utils/
|   |-- api.js
|   |-- helpers.js
```

## Konwencje nazewnictwa

- **Nazewnictwo plików**

  Stosowanie spójnych konwencji nazewnictwa plików ułatwia orientację w projekcie. Oto kilka rekomendacji:

  - Komponenty: Używaj PascalCase dla nazw plików komponentów (np. `Button.jsx`, `FormField.jsx`).
  - Testy: Używaj rozszerzenia `.test.js` lub `.spec.js` dla plików testowych (np. `Button.test.js`).
  - Style: Używaj rozszerzenia `.styles.js` dla plików z definicjami stylów (np. `Button.styles.js`).

- **Nazewnictwo komponentów**

  Komponenty w React powinny być nazwane za pomocą PascalCase, co jest zgodne z konwencją JavaScript dla klas.

- **Nazewnictwo props**

  Propsy powinny być nazwane jasno i opisowo, aby od razu było wiadomo, do czego służą. Używaj camelCase dla nazw propsów.

- **Nazewnictwo funkcji**

  Nazwy funkcji powinny być opisowe i wskazywać, co dana funkcja robi. Używaj camelCase.

- **Nazewnictwo zmiennych**

  Nazwy zmiennych powinny być opisowe i zrozumiałe. Używaj camelCase dla nazw zmiennych.

Jak wszyscy wiemy, jedną z najtrudniejszych rzeczy w programowaniu jest nazywanie rzeczy, więc sprawdź również dodatkowe materiały, aby znaleźć swoją idealną strukturę oraz konwencje 👇
