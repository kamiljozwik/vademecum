---
title: Zewnętrzny plik
description: ""
order: 70
free: false
---

Jak już wspomniałem w poprzedniej lekcji, w przypadku zewnętrznego pliku składnia jest dokładnie taka sama jak w tagu `<style>` a jedyna różnica, to taka, że kod CSS należy umieścić w pliku `nazwaPliku.css`. Gdy to już zrobimy, to możemy taki plik ponownie załadować do naszego kodu HTML umieszczając odpowiedni znacznik w nagłówku `<head>`. Tym znacznikiem jest `<link>`. Znacznik ten może być używany do ładowania różnego rodzaju plików (np. CSS, JavaScript, czcionki itp.), ale w tej lekcji omówimy sobie, w jaki sposób używać go poprawnie z plikami CSS.

Tag `<link>` posiada dwa główne atrybuty, które musimy podać podczas jego wstawiania w nagłówku strony:

- **rel** – to właśnie za pomocą tego atrybutu informujemy przeglądarkę, jakiego rodzaju plik będziemy chcieli załadować. W przypadku CSS podajemy wartość `stylesheet`.
- **href** – tutaj podajemy lokalizację pliku. Jeżeli plik znajduje się w tym samym folderze (tym samym katalogu) co plik HTML, do którego ładujemy nasze style, to podajemy jedynie jego nazwę. W przeciwnym razie musimy podać pełną ścieżkę do pliku, np. `styles/buttons.css` – gdy w katalogu głównym posiadamy folder o nazwie `styles` i zawiera on interesujący nas plik `buttons.css`.

```html
<head>
  <link rel="stylesheet" href="nazwaPliku.css" />
  <link rel="stylesheet" href="folder/nazwaPliku.css" />
  <!-- Możemy użyc wielu tagów <link> i ładować tylko potrzebne nam pliki -->
</head>
```

Taki sposób pisania CSS pozwala nam na utrzymanie naszego kodu w zorganizowany i bardziej modularny sposób. Możemy tworzyć mniejsze pliki CSS i katalogować, układać je w czytelny dla nas sposób, np. umieszczając style dotyczące przycisków w innym pliku, niż style, które mają nam ozdobić tabele bądź tekst. Tak przygotowane pliki łatwiej jest edytować, wyszukiwać oraz umieszczać na stronie.

Kod, który mieliśmy w poprzedniej lekcji wewnątrz znacznika `style`, moglibyśmy zapisać w ten sposób jak na grafice poniżej (screen z VS Code). Efekt finalny ten sam, a czytelność znacznie większa.

[Pełna grafika](/kurs/statyczna/img/podstawy-css/externalFile.png)
<img alt="" src="/kurs/statyczna/img/podstawy-css/externalFile.png" />

## @import

Zewnętrzne pliki CSS pozwalają nam na znaczne uporządkowanie kodu i tworzenie stylów dla konkretnych elementów na naszej stronie. Minusem takiego podejścia jest konieczność importowania wszystkich tych plików za pomocą tagu `<link>` na każdą stronę, na której chcemy ich użyć. Istnieje jednak sposób na to, aby importować jedne pliki CSS do innych plików CSS. Dzięki temu możemy łączyć style w swego rodzaje bloki kodu CSS i używać ich w pliku HTML tylko za pomocą jednego znacznika `<link>`.

Tym sposobem jest deklaracja `@import`. W poniższym przykładzie pokazano, w jaki sposób możemy zaimportować dwa samodzielne pliki CSS do jednego, zbiorczego pliku, który następnie został użyty w kodzie HTML. Znaczniki z pliku `index.html` zostaną ostylowane wszystkimi stylami obecnymi w plikach `main.css`, `file1.css` oraz `file2.css`.

[Pełna grafika](/kurs/statyczna/img/podstawy-css/import.png)
<img alt="" src="/kurs/statyczna/img/podstawy-css/import.png" />

W wyniku wykonania powyższego kodu otrzymamy następujący wynik:

<img alt="" src="/kurs/statyczna/img/podstawy-css/import2.png" />
