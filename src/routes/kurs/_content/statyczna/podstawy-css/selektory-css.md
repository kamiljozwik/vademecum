---
title: Selektory CSS
description: ''
order: 90
free: false
---

W poprzednich lekcjach omówiliśmy sobie, czym jest CSS i w jaki sposób możemy umieścić go na stronie. We wszystkich tych lekcjach pojawiały się tzw. selektory CSS. Zapewne po tych kilku przykładach, które mieliśmy okazję już zobaczyć, mniej więcej wiemy już, jaka jest ich rola, a także jak ich używać. W tej lekcji usystematyzujemy sobie tę wiedzę i poznamy najpopularniejsze sposoby tworzenia selektorów.

Selektor wybiera nam z drzewa HTML element, na którym zostaną zaaplikowane napisane przez nas style CSS. Style te najczęściej znajdują się w innym pliku niż kod HTML, więc selektory muszą być dość dokładne w określeniu tego, jaki element będą “upiększać” 💅.

Najczęściej wybieranymi przez nas elementami na stronie będą:

- konkretny **tag HTML** – wybieramy go podając jego nawę,
- atrybut **class** – używany do stylowania wielu elementów tym samym kodem CSS,
- atrybut **id** – jako że nie możemy mieć dwóch takich samych wartości dla atrybutu id, możemy w ten sposób wybrać bardzo dokładnie jeden konkretny element na stronie,
- dowolny **atrybut tagu** – poza atrybutami class oraz id, które są najczęściej używane w selektorach, możemy użyć dowolnego atrybutu obecnego na znaczniku HTML.

Niekiedy również będziemy chcieli wybrać za pomocą selektorów np. co drugi element listy, tag, nad którym aktualnie znajduje się kursor, bądź wstawić małą ikonkę przed lub za wybranym znacznikiem. W takim przypadku nasz selektor nieco się komplikuje i musimy skorzystać z tzw. pseudo klas, bądź pseudo elementów.

Nauki jak widać, jest dość sporo, ale selektory są kluczowym elementem CSS, więc warto naprawdę zagłębić się w poniższe lekcje i trenować pisanie tak wielu selektorów, aż w końcu będziemy czuli się z nimi bardzo pewnie.
