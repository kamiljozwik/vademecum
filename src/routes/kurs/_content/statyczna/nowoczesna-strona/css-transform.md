---
title: CSS Transform
description: ""
order: 130
video: https://player.vimeo.com/video/567475891?h=3c21e30a1e
video_length: "10:51"
free: false
extra_links:
  - title: Learn CSS Transform In 15 Minutes
    href: https://www.youtube.com/watch?v=rzD-cPhq02E
  - title: CSS Transform Is Dead! Use This Instead
    href: https://www.youtube.com/watch?v=416MT-VmJdI
    desc: Wygodniejsza składnia dla CSS transform
---

Animacja w głównej mierze polega na poruszaniu, przemieszczaniu, obracaniu oraz zmianie wielkości. Wszystkie te rzeczy możemy wykonać za pomocą jednej właściwości CSS – transform. Spójrzmy na najbardziej przydatne wartości jakich możemy w tym przypadku użyć:

- **translate(X, Y)** – przesuwanie elementów góra/dół, np. `translate(10px, 2px)`,
- **rotate(kąt)** – obracanie elementów o określony kąt, np. `rotate(20deg)`,
- **scale(skala)** – powiększanie/pomniejszanie elementów, np. `scale(2)`.

Położenie każdego z elementów na stronie możemy zmieniać w trzech płaszczyznach, czyli względem osi X, Y oraz Z. Z tego powodu każda z powyżej wymienionych wartości występuje jeszcze w wersjach z nazwą osi na końcu. Przykładowo wartość rotateY oznacza obrót wokół osi Y, scaleX oznacza powiększenie/zmniejszenie tylko względem osi X. Wszystkie te przypadki zaprezentowane zostaną na przykładzie. Przypomnijmy sobie również, w jaki sposób rozmieszczone są osie względem okna przeglądarki:

<img alt="" src="/kurs/statyczna/img/nowoczesna-strona/transform.png" />
