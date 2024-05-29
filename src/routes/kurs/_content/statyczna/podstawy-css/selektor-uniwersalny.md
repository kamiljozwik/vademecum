---
title: Selektor uniwersalny
description: ''
order: 130
free: false
---

W poprzednich tematach poznaliśmy kilka sposobów na tworzenie bardzo dokładnych i szczegółowych selektorów. Tym razem pójdziemy zupełnie w drugą stronę i poznamy selektor, który wybiera… wszystko 🙂.

Selektor uniwersalny (ang. universal selector) ma postać gwiazdki `*` i ma zastosowanie do wszystkich elementów na stronie. Możemy również oczywiście łączyć go z innymi poznanymi już wcześniej selektorami.

```css
* {
	/* Każdy element na stronie będzie miał czerwony kolor. */
	color: red;
}

* + * {
	/* Każdy element będący "dzieckiem" otrzyma górny odstęp (margin) równy 20px. */
	margin-top: 20px;
}
```

Selektor ten nie jest jakoś szczególnie często używany (z wyjątkiem właściwości `box-sizing`, ale o tym w dalszej części kursu), jednakże czasami potrafi okazać się niezwykle przydatny, więc zdecydowanie warto wiedzieć o jego istnieniu.
