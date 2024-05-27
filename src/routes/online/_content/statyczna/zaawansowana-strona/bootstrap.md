---
title: Bootstrap
description: ''
order: 130
free: false
extra_links:
  - title: Bootstrap 5 Crash Course
    href: https://www.youtube.com/watch?v=Jyvffr3aCp0
  - title: Bootstrap 5 Tutorial
    href: https://www.youtube.com/playlist?list=PL4cUxeGkcC9joIM91nLzd_qaH_AimmdAR
---

<script>
	import Codepen from "$lib/components/ui/Codepen.svelte";
</script>

Bootstrap jest obecnie jednym z najpopularniejszych frameworków CSS. Na jego popularność składa się głównie jego już dość długa obecność w świecie frontendowym, jak również prostota użycia. Bootstrap dostępny jest pod adresem [getbootstrap.com](https://getbootstrap.com/).

Przy pomocy Bootstrapa możemy niezwykle szybko stworzyć responsywną stronę internetową, praktycznie nie pisząc żadnego kodu CSS. Jest to możliwe do osiągnięcia dzięki dziesiątkom już gotowych komponentów, których to możemy użyć na naszej stronie, umieszczając odpowiednie klasy CSS na napisanych przez nas tagach HTML. Komponentami tymi mogą być przyciski, nawigacje, listy, modale itp.

W tym temacie zapoznamy się z podstawami Bootstrapa i nauczymy się, w jaki sposób możemy używać go w naszych projektach.

## Instalacja

Jak już wcześniej wspomniałem, Bootstrap jest głównie frameworkiem CSS, jednak do prawidłowego działania wszystkich jego komponentów będziemy potrzebowali również nieco JavaScript. Podobnie jak robiliśmy to z innymi plikami, wszystkie style pochodzące z Bootstrap importujemy na stronę za pomocą znacznika `<link>`. Tym razem jednak w atrybucie href nie wskazujemy pliku CSS, który napisaliśmy sami i posiadamy go na naszym dysku. W tym przypadku będziemy korzystali z zewnętrznego pliku stworzonego przez twórców Bootstrapa i dostępnego w Internecie pod linkiem wskazanym w dokumentacji tegoż narzędzia. Plik JavaScript z kolei umieszczamy na samym końcu naszej strony, tuż przed zamykającym znacznikiem `</body>`. Poniżej znajduje się przykładowy schemat strony, która będzie mogła korzystać ze wszystkich dobrodziejstw oferowanych przez Bootstrap:

<Codepen id="MWZLwzw" />

W powyższym przykładzie widzimy, w jaki sposób możemy skorzystać ze stylowania dostępnego w Bootstrap. Wszytko, co musimy zrobić to jedynie poprawnie zaimportować pliki CSS oraz JS, a następnie umieszczać na znacznikach HTML odpowiednie wartości atrybutu class

Wszystkie najważniejsze informacje dotyczące tego w jaki sposób korzystać z Boostrapa możemy znaleźć w [oficjalnej dokumentacji](https://getbootstrap.com/docs). Przykładowo użyty w powyższym przykładzie przycisk możemy znaleźć [pod tym adresem](https://getbootstrap.com/docs/5.3/components/buttons/).
