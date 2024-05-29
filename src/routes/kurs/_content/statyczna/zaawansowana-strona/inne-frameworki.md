---
title: Inne frameworki
description: ''
order: 140
free: false
extra_links:
  - title: Top CSS Frameworks to check out in 2021
    href: https://www.youtube.com/watch?v=N6SXu86bJ6I
    desc: Materiał z 2021, ale dużo do dzisiaj (4. kwartał 2023) w tym temacie się nie zmieniło 🙂
  - title: Tailwind in 100 Seconds
    href: https://www.youtube.com/watch?v=mr15Xzb1Ook
---

Bootstrap nie jest oczywiście jedynym frameworkiem, z którego możemy skorzystać podczas tworzenia naszych stron. Opcji tych jest znacznie więcej. Pozostałe frameworki w większości przypadków będą posiadała bardzo podobne funkcjonalności do Bootstrapa (czyli np. możliwość tworzenia responsywnych layoutów, bibliotekę gotowych komponentów itp.) i będą różniły się głównie finalnym wyglądem wybranego przez nas komponentu (np. przycisku czy karty).

W tym momencie może pojawić się pytanie – czemu korzystać z czegoś innego niż sprawdzony i bardzo popularny Bootstrap? Otóż popularność Bootstrapa powoduje również pewien problem. Tworząc nową stronę internetową, staramy się, aby wyróżniała się ona na tle setek innych stron o podobnej tematyce. Z dużym prawdopodobieństwem możemy przyjąć, że większość stron, z którymi będziemy rywalizować będzie stworzona właśnie przy pomocy Bootstrapa. Jeżeli my również skorzystamy z tego rozwiązania, to nasz projekt stanie się “po prostu kolejną stroną stworzoną w Bootstrapie”.

Bootstrap sprawdzi się bardzo dobrze w przypadku gdy musimy stworzyć stronę “na szybko”. Dzięki temu frameworkowi będziemy w stanie przygotować dość sprawnie i łatwo stronę, która dodatkowo będzie dobrze wyglądała. Mając już napisany kod HTML z klasami pochodzącymi z Bootstrapa nic nie stoi wtedy nam na przeszkodzie, aby stopniowo zastępować te klasy naszym własnym CSS i nadawać stronie indywidualnego wyglądu. Dużo wygodniej jest poprawiać coś, co już działa niż tworzyć wszystko całkowicie od zera. Szczególnie gdy jesteśmy na samym początku naszej przygody z frontendem i jeszcze “nie czujemy” tego, w jaki sposób tworzyć dobrze wyglądające elementy strony.

Jednak decyzja o tym, czy w naszym projekcie będziemy używać frameworka CSS czy też nie, należy tylko do twórcy strony i zależy od jego osobistych preferencji oraz znajomości poszczególnych frameworków 🙂

## Co poza Bootstrapem?

Kolejnym sposobem na to, aby skorzystać ze wszystkich dobrodziejstw, które dają nam frameworki i uniknąć Bootstrapowego wyglądu jest po prostu skorzystanie z innego rozwiązania 🙂. W poniżej liście zebrałem najciekawsze moim zdaniem frameworki CSS, których możemy użyć w naszej stronie równie łatwo, jak Bootstrapa.

## CDN

Na stronach frameworków CSS będziemy dość często spotykali się z określeniem CDN (Content Delivery Network). To właśnie za pomocą CDN dystrybuowane są m.in. pliki zawierające cały kod CSS przygotowany przez twórców danego frameworka. Nie wchodząc za bardzo w szczegóły, CDN możemy w dużym uproszczeniu zdefiniować jako bardzo szybkie serwery rozsiane po całym świecie, których zadaniem jest jak najszybsze dostarczanie użytkownikowi umieszczonych na nich treści. Jest to niezwykle kluczowe w przypadku takich plików jak właśnie pliki CSS. Jako że korzystamy z zewnętrznych plików, wygląd naszej strony będzie całkowicie zależny od szybkości i ciągłości działania serwerów CDN. Gdy taki serwer przestanie działać albo będzie działał bardzo wolno – nasza strona może wyświetlić się użytkownikowi bez żadnego stylowania. Na szczęście współcześnie serwery CDN są dość wiarygodne i bardzo rzadko doświadczamy związanych z nimi problemów.

## Material Design

Material Design jest dużym konkurentem Bootstrapa, więc o nim też wtrącę jeszcze dwa słowa. Jest to metodyka tworzenia wyglądu stron stworzona i używana przez Google. Celuje ona głównie w aplikacje mobilne, ale śmiało możemy z nich korzystać również w przypadku aplikacji webowych. Samo określenie Material design zawiera jedynie zalecenia jak wg. Google powinny wyglądać komponenty na stronach internetowych. Więcej informacji na ten temat znajdziemy na oficjalnej stronie [material.io](https://m3.material.io/). Informacje o tym, w jaki sposób możemy umieścić CSS implementujący Material Design znajdziemy na tej stronie [Material WEB](https://m2.material.io/develop/web/getting-started). Istnieje jeszcze jedna, również bardzo popularna implementacja standardów Material Design o nazwie [Materialize](https://materializecss.com). Tak więc, jeżeli chcesz, aby Twoja strona sprawiała wrażenie strony stworzonej przez Google, z całą pewnością możesz skorzystać z Material Design.

## Pozostałe frameworki

Poniżej zamieszczam listę ciekawych frameworków CSS, które może akurat wpasują się w Twoje gusta i aktualne potrzeby.

Wszystkie pozycje na poniżej liście możemy dodać do naszej strony za pomocą znacznika `<link>` oraz ewentualnie `<script>`. Dzięki temu możemy z nich korzystać dokładnie tak jak miało to miejsce w przypadku Bootstrapa.

- Tailwind [link](https://tailwindcss.com/) - o nim pewnie niedługo powstanie oddzielna lekcja
- Bulma [link](https://bulma.io/documentation/overview/start/)
- UIKit [link](https://getuikit.com/docs/installation)
- Spectre [link](https://picturepan2.github.io/spectre/getting-started/installation.html)
- Primer [link](https://primer.style/design/) – CSS używany przez GitHub
- PureCSS [link](https://purecss.io/)
- Milligram [link](https://milligram.io/)
- Skeleton [link](http://getskeleton.com/) – wymagane pobranie pliku CSS. Plik ten następnie importujemy za pomocą `<link>`.
- water.css [link](https://watercss.kognise.dev/) – framework stylujący znaczniki HTML. Nie musimy używać klas, piszemy jedynie kod HTML.
- MVP.CSS [link](https://andybrewer.github.io/mvp/) – podobnie jak wyżej, framework ten styluje bezpośrednio znaczniki HTML.
- [Bonus] NES.css [link](https://nostalgic-css.github.io/NES.css/) – stylowanie strony na wzór konsoli NES 🎮
- [Bonus] 98.css [link](https://jdan.github.io/98.css/) – stylowanie na wzór systemu Windows 98 👴
