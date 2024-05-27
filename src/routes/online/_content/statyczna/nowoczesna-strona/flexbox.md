---
title: Flexbox
description: ''
order: 80
free: false
extra_links:
  - title: CSS Flexbox in 100 Seconds
    href: https://www.youtube.com/watch?v=K74l26pE4YA
---

`Flex` jest kolejną, po `block`, `inline-block` oraz `inline` wartością, której możemy użyć z właściwością `display`. Jak pamiętamy wszystko, co wyświetlamy na stronie, jest dla CSS “pudełkiem” (box), więc ten sposób wyświetlania określamy mianem Flexbox.

Flexbox ma na celu zapewnienie bardziej efektywnego sposobu układania, wyrównywania i dystrybucji przestrzeni pomiędzy elementami wewnątrz rodzica, nawet jeśli ich rozmiar jest nieznany lub dynamiczny (stąd słowo flex). Główną ideą flexbox jest danie kontenerowi (rodzicowi) możliwość zmiany szerokości, wysokości oraz kolejności jego elementów (dzieci), aby jak najlepiej wypełnić dostępną przestrzeń (głównie po to, aby dostosować się do wszystkich rozmiarów ekranu). Kontener `flex` rozszerza elementy, aby wypełnić dostępną wolną przestrzeń lub kurczy je, aby nadal mieściły się wewnątrz rodzica i nie były wyświetlane poza nim.

O flexbox należy myśleć jak o całym module, a nie pojedynczej właściwości CSS, dlatego też podzielimy tę lekcję na dwie części i w pierwszej kolejności skupimy się na tym, w jaki sposób pracować z kontenerem, czyli rodzicem elementów, które będziemy chcieli w nim pozycjonować. Następnie przejdziemy już do samych elementów (dzieci) i sprawdzimy co jeszcze możemy osiągnąć dodając do nich kolejne właściwości flexboxa.

Flexbox sprawdza się świetnie przy tworzeniu responsywnych stron. Dzięki niemu możemy znacznie ograniczyć (a w niektórych przypadkach nawet całkowicie wyeliminować) liczę breakpoint-ów oraz bloków `media-query`. Poza tym dzięki flexbox wyrównywanie elementów w pionie i poziomie (co w CSS potrafi przysporzyć naprawdę dużo problemów) stanie się dziecinnie łatwe.
