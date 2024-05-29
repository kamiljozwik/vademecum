---
title: Instalacja
description: ''
order: 40
video: https://player.vimeo.com/video/497778133?h=1a37b5502a
video_length: '10:19'
free: false
extra_links:
  - title: How to Install and Use Git on Windows 11
    href: https://nerdschalk.com/how-to-install-and-use-git-on-windows-11/
---

W tej lekcji zainstalujemy Gita na naszych komputerach oraz dokonamy jego pierwszej konfiguracji. Dla osób, które nie miały jeszcze styczności z wierszem poleceń, pokażemy również podstawowe komendy, które mogą się przydać podczas dalszej nauki.

Link do pobrania Gita (instalacja będzie omówiona w materiale video): [https://git-scm.com/downloads](https://git-scm.com/downloads)

## Flagi 🚩

Podczas przerabiania materiałów z tego kursu (jak również doczytując pewne zagadnienia w Internecie) natkniemy się na określenie “flaga”. Szybko wyjaśnijmy sobie, co ona oznacza.

Flagi znajdują zastosowanie w przypadku korzystania z komend w wierszu poleceń i w dużym uproszczeniu, ich główną rolą jest doprecyzowanie, co chcemy danym poleceniem osiągnąć, bądź jakie dodatkowe informacje chcemy przekazać do wpisywanego polecenia. Zapisujemy je za pomocą jednego bądź dwóch “myślników” oraz nazwy flagi (flagi występują w postaci pojedynczych liter, jak i całych słów). Pomiędzy myślnikiem a nazwą nie wstawiamy spacji.

Przykładowo, gdybyśmy posiadali system, w którym wpisanie polecenia `show users` w wierszu poleceń pokazywałoby wszystkich użytkowników, to takie polecenie prawdopodobnie umożliwiałoby podanie flag w stylu `-adult` bądź `-name`. Takie polecenia wyglądałyby następująco:

- **show users** – pokazanie listy wszystkich użytkowników.
- **show users -adult** – pokazanie jedynie dorosłych użytkowników.
- **show users -name "Jan"** – pokazanie jedynie użytkowników o imieniu Jan.
- **show users -name "Jan" -adult** – pokazanie jedynie dorosłych użytkowników o imieniu Jan.

## Komendy, które poznany w tej lekcji:

- **git config --global** – podstawowa konfiguracja Git. To tutaj podajemy naszą nazwę użytkownika oraz e-mail.
- **git --version** – sprawdzenie zainstalowanej wersji Git.

### BONUS: Podstawowe komendy wiersza poleceń

- **cd** (ang. chanage directory) – poruszanie się po folderach na naszym dysku.
- **dir** (ang. directory) – wyświetlenie zawartości folderu.
- **mkdir** (ang. make directory) – stworzenie folderu.
- **rmdir** (ang. make directory) – usunięcie folderu.
- **explorer** – otworzenie folderu w oknie eksploratora Windows.
- **code** – otworzenie VS Code.
- **cls** – wyczyszczenie okna wiersza poleceń.
