---
title: iframe
description: ""
order: 30
free: false
extra_links:
  - title: Learn HTML iframes in 3 minutes
    href: https://www.youtube.com/watch?v=aRGdDy18qfY
---

<script>
	import Codepen from "$lib/components/ui/Codepen.svelte";
</script>

Znacznik `<iframe>` jest znacznikiem, który bardzo różni się od pozostałych poznanych w tym kursie tagów HTML. Otóż za jego pomocą mamy możliwość umieścić na naszej stronie treści znajdujące się na innych stronach. Tymi treściami mogą być zarówno filmy z YouTube, posty z Facebooka, widżety pogodowe, jak i całe strony internetowe. Przykładami tak umieszczanych elementów mogą być:

- reklamy,
- filmy YouTube,
- Google Maps,
- posty z Facebooka,
- widżety pogodowe,
- całe strony internetowe.

Technicznie rzecz ujmując, umieszczamy na naszej stronie “obcy” kod HTML / CSS / JavaScript. Treści umieszczane na naszej stronie za pomocą `<iframe>` są niezależne od tego, co znajduje się na naszej stronie, czyli np. nasze pliki CSS nie wpłyną na wygląd elementu pochodzącego z `<iframe>` i vice versa.

## Znacznik iframe

Najważniejszym oraz wymaganym atrybutem tagu `<iframe>` jest `src`. To właśnie za jego pomocą wskazujemy, co chcemy wyświetlić w ramce (iframe jest skrótem od inline frame, czyli “liniowa ramka”). Jako wartość tego atrybutu najczęściej będziemy podawali adres URL docelowej strony, ale również możemy podać lokalny adres strony z naszego projektu:

<Codepen id="xxmmvNb" />

## Sandbox

Domyślnie wszystko to, co jest zaimplementowane na stronie osadzanej za pomocą `<iframe>`, może wykonać się na naszej stronie. Możemy to nieco ograniczyć za pomocą atrybutu `sandbox`. Jako jego wartość należy podać funkcjonalności, na które zezwalamy obcej stronie. Przykładowymi wartościami mogą być:

- **allow-modals** – zezwolenie na otwieranie okienek modalnych,
- **allow-scripts** – zezwolenie na użycie JavaScript.

W przypadku gdy jako wartość podamy pusty string, wtedy praktycznie nie zezwalamy na nic innego, niż tylko wyświetlenie HTML/CSS.

Pełna lista dostępnych wartości atrybutu sandbox dostępna jest na stronie MDN – [sandbox](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe).

## Allow

Podobnie jak w poprzednim przypadku, atrybut `allow` umożliwia nam na współdzielenie zasobów urządzenia, z którego korzysta użytkownik naszej strony. Do zasobów tych należą poniższe funkcjonalności / czujniki wbudowane w urządzenie, na którym otwarta jest przeglądarka (angielskie nazwy są wartościami, których możemy użyć na omawianym atrybucie):

- **Accelerometer** – pomiar prędkości,
- **Ambient light sensor** – pomiar natężenia światła,
- **Autoplay** – automatycznie odtwarzanie mediów,
- **Camera** – dostęp do aparatu,
- **Encrypted media** – umożliwienia odtwarzania zaszyfrowanych materiałów audio i wideo,
- **Fullscreen** – tryb pełnoekranowy (np. wideo z YouTube),
- **Geolocation** – położenie (GPS),
- **Gyroscope** – dostęp do żyroskopu,
- **Magnetometer** – dostęp do magnetometru,
- **Microphone** – dostęp do mikrofonu,
- **PaymentRequest** – dostęp do płatności online,
- **Picture-in-picture** – odtwarzanie wideo w trybie “obraz w obrazie”,
- **USB** – dostęp do portu USB.

## Referrer

W momencie, gdy umieścimy na naszej stronie inną stronę za pomocą `<iframe>`, osadzana strona (a bardziej jej właściciel) dowie się, kto jej używa. Mówiąc “kto”, mamy na myśli informację, z jakiego adresu URL zostało wywołane żądanie wyświetlenia strony w `<iframe>`. Mamy jednak możliwość ukrycia tej informacji przed właścicielem osadzanej strony za pomocą atrybutu `referrerpolicy`. Najczęściej używaną tutaj wartością będzie `no-referrer`, czyli całkowite ukrycie informacji. Możemy również wysłać częściowe informacje o naszej witrynie, używając innych wartości dostępnych dla `referrerpolicy`.

Właściciele niektórych stron mogą nie zezwolić na to, żeby ich strona była umieszczana w ramkach poprzez odpowiednie skonfigurowanie swoich serwerów webowych. Przykładem takiej strony jest google.com:

<Codepen id="KKbJPPr" />

## Bezpieczeństwo

Korzystając z `<iframe>`, musimy pamiętać, iż umieszczamy na naszej stronie kod, który nie został przez nas napisany i musimy zaufać, iż osadzana przez nas strona jest bezpieczna i nie będzie próbowała np. ukraść danych naszych użytkowników, podszywając się pod aplikację banku, bądź przekierowując ich na inne, niebezpieczne strony.

Mamy oczywiście do dyspozycji takie atrybuty jak `sandbox` czy `allow`, jednak w dalszym ciągu należy być bardzo ostrożnym i nie umieszczać na stronie linków, których działania nie jesteśmy do końca pewni.

## Przykład

Dla przykładu zamieszczam dwa kody `<iframe>` automatycznie wygenerowane przez Facebooka oraz YouTube. Kod ten skopiowany jest dokładnie tak, jak wygenerowały go powyższe strony, więc widzimy również kilka atrybutów, które współcześnie raczej nie są obsługiwane, ale zostały zachowane ze względu na kompatybilność ze starszymi urządzeniami.

Pełną listę atrybutów znajdziemy na wspominanej już wcześniej [stronie MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe).

<Codepen id="ZEVwzEN" />

## DevTools

Na samym początku tej lekcji wspomnieliśmy, że użycie `<iframe>` to tak naprawdę umieszczenie strony HTML w innej stronie HTML. Możemy o tym bardzo dobrze się przekonać, sprawdzając w DevTools, jak wygląda drzewo HTML z powyższego przykładu:

<img alt="" src="/kurs/statyczna/img/zaawansowana-strona/iframe.png" />
