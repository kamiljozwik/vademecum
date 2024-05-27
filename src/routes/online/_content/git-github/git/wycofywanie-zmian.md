---
title: Wycofywanie zmian
description: ''
order: 70
video: https://player.vimeo.com/video/502542689?h=448b09dfb9
video_length: '08:29'
free: false
---

Z własnego doświadczenia wiem, że zaczynając przygodę z Gitem, do lekcji dotyczącej przywracania zmian wraca się wyjątkowo często. Postarajmy się więc skupić i naprawdę zrozumieć tę lekcję, aby uniknąć bardzo kosztownych błędów w przyszłości.

Git pozwala nam przywracać zmiany na trzy różne sposoby:

✅ **Checkout** – jest to najbezpieczniejszy sposób przywracania zmian. W tym przypadku możemy cofnąć się do dowolnego commita i zobaczyć jak nasz kod wyglądał właśnie w tym punkcie. Nie możemy nic dodać, usunąć bądź zmienić w kodzie. Jesteśmy w swego rodzaju trybie “tylko do odczytu”.

⚠ **Revert** – jest to sposób w dalszym ciągu dość bezpieczny, ponieważ nie usuwamy niczego z naszego repozytorium. Przy użyciu revert możemy wybrać jeden commit z historii i usunąć wszystkie zmiany, które on wprowadził poprzez stworzenia kolejnego commita, który robi wszystko to co wybrany przez nas commita, ale odwrotnie. Jeżeli w commicie którego chcemy się pozbyć, usunęliśmy jakąś linię, to teraz ją dodamy, jeżeli zmieniliśmy tekst z “Moje konto” na “Mój profil“, to teraz znowu zmienimy z “Mój Profil” na “Moje konto” itd. Stary commit zostaje w historii, możemy do niego zawsze wrócić. Nowy commit automatycznie odwraca wszystkie zmiany zrobione w starym commicie. Należy jednak pamiętać, iż możemy tutaj natknąć się na konflikt. Jeżeli po commicie który chcemy odwrócić, ktoś dokonał zmian w tych samych miejscach, automatyczne odwrócenie może okazać się niemożliwe i będziemy musieli rozwiązać konflikt samodzielnie.

❗ **Reset** – najbardziej niebezpieczny sposób na przywracanie zmian, ponieważ potencjalnie możemy usunąć część naszego kodu i już go nie odzyskać. Niebezpieczny nie znaczy unikany czy nieużywany. Jak najbardziej ta komenda jest regularnie używana, należy tylko dwa razy pomyśleć, zanim się ją wykona. Za pomocą reset wybieramy jeden commit w historii i wracamy do niego usuwając po drodze wszystkie commity, jakie dzielą nasz obecny stan (nasz najnowszy commit) od wybranego przez nas commita w historii. Mimo iż zostaną usunięte wszystkie commity, nie zostaną usunięte zmiany przez nie wprowadzone. Wszystkie pliki z tymi zmianami będą dalej w naszej przestrzeni roboczej i będziemy mogli je dodać do poczekalni i ponownie commitować. Jest to dobry sposób na to, aby kilka małych commitów zamienić na jeden większy commit. Istnieje również możliwość usunięcia wszystkich commitów i niezostawianie zmian. Stanie się tak, gdy użyjemy flagi --hard. Wtedy jest pozamiatane – tracimy wszystkie commity oraz wszystkie zmiany, które te commity wprowadzały.

### Komendy, które poznany w tej lekcji:

- **git checkout** – powrót do wybranego commita w trybie tylko do odczytu.
- **git revert** – przywrócenie zmian jednego commita z historii poprzez stworzenie nowego commita, który “odwraca” (ang. revert) wszystkie zmiany wprowadzone w wybranym przez nas commicie z historii.
- **git reset** – permanentne usunięcie commitów do wybranego miejsca w historii.
- **git restore** – Usunięcie wszystkich zmian znajdujących się w pliku lub plikach
