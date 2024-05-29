---
title: Node.js
description: ''
order: 50
free: false
extra_links:
  - title: How to Install Node.js on Window 11
    href: https://www.youtube.com/watch?v=06X51c6WHsQ
---

Node.js jest środowiskiem uruchomieniowym JavaScript poza przeglądarką, które pozwala na uruchamianie skryptów JS na serwerze lub w środowisku lokalnym (czyli na naszym sprzęcie). Korzystając z Node.js niemal zawsze będziemy również korzystać z [npm](https://www.npmjs.com/) (Node Package Manager), czyli menedżera pakietów dla Node.js, który ułatwia zarządzanie zależnościami i bibliotekami. Na npm przyjdzie jeszcze czas, ale na razie skupmy się głównie na Node.js. Będzie nam on potrzebny do uruchamiania kodu JS na naszych komputerach.

## Instalacja Node.js

- **Pobranie Instalatora:**
  - Odwiedź stronę [Node.js](https://nodejs.org/).
  - Pobierz instalator odpowiedni dla Twojego systemu operacyjnego (zalecana jest wersja LTS).
- **Proces Instalacji:**
  - Uruchom pobrany plik instalacyjny.
  - Postępuj zgodnie z instrukcjami na ekranie. Upewnij się, że opcja instalacji NPM (przyda nam się później) i dodanie Node.js do zmiennej środowiskowej `PATH` jest zaznaczona.
- **Weryfikacja Instalacji:**
  - Po zakończeniu instalacji, otwórz terminal (np. cmd lub PowerShell w Windows).
  - Wpisz `node -v` i `npm -v`, aby sprawdzić, czy instalacja przebiegła pomyślnie. Powinny zostać wyświetlone wersje zainstalowanego Node.js i NPM.

## Pierwsze Kroki z Node.js i NPM

- **Tworzenie Prostego Skryptu JavaScript:**
  - Utwórz nowy plik tekstowy i nazwij go `script.js`.
  - Otwórz go w wybranym przez Ciebie edytorze tekstowym i wpisz prosty kod JavaScript, np.
    ```js
    console.log('Witaj, Node.js!');
    ```
- **Uruchamianie Skryptu:**
  - W terminalu przejdź do katalogu, w którym znajduje się plik `script.js`. Użyj komendy `cd C://ścieżka/do/katalogu`.
  - Wpisz w terminalu:
    ```bash
    node script.js
    ```
    i naciśnij `Enter`.
  - Powinieneś zobaczyć w terminalu wynik działania skryptu, w tym przypadku **Witaj, Node.js!**.

Jeżeli wszystko przebiegło prawidłowo, to jesteś już gotowy do tego, żeby zacząć pisać swój własny kod JavaScript 🎉

Ten sam kod możesz oczywiście pisać również w konsoli DevTools, ale możliwość zapisywania kodu w plikach pozwoli Ci później wracać do Twoich notatek i możemy być całkowicie niezależni od przeglądarki.
