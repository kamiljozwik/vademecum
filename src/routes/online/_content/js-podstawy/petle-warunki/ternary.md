---
title: Ternary operator
description: ''
order: 40
free: false
extra_links:
  - title: Learn Ternary Operators In 9 Minutes
    href: https://www.youtube.com/watch?v=70GmtV-5Ggo
  - title: JavaScript TERNARY OPERATOR in 6 minutes!
    href: https://www.youtube.com/watch?v=atS_A9HHAVo
  - title: Ternary Operator in Javascript
    href: https://www.youtube.com/watch?v=ib8MHSMwtYg
---

Operator trójargumentowy, znany również jako `ternary operator` czy `conditional operator`, to jedna z najbardziej zwięzłych form zapisu instrukcji warunkowych w JavaScript. Jego ogólna składnia wygląda następująco:

```javascript
warunek ? wyrażenie1 : wyrażenie2;
```

Gdy `warunek` jest prawdziwy (`true`), wykonywane jest `wyrażenie1`. W przeciwnym razie, gdy `warunek` jest fałszywy (`false`), wykonuje się `wyrażenie2`.

Rozważmy prosty przykład:

```javascript
let wiek = 20;
let status = wiek >= 18 ? 'dorosły' : 'niepełnoletni';
```

W tym przypadku, jeśli `wiek` jest równy lub większy niż 18, `status` przyjmie wartość `"dorosły"`. W przeciwnym razie przyjmie wartość `"niepełnoletni"`.

## Zagnieżdżenia

Operator trójargumentowy może być również zagnieżdżony, co oznacza, że wyrażenie `wyrażenie1` lub `wyrażenie2` może być również operatorem trójargumentowym. Rozważmy następujący przykład:

```javascript
let wiek = 20;
let status = wiek >= 18 ? 'dorosły' : wiek >= 13 ? 'nastolatek' : 'dziecko';
```

W tym przypadku, jeśli `wiek` jest równy lub większy niż 18, `status` przyjmie wartość `"dorosły"`. W przeciwnym razie, jeśli `wiek` jest większy lub równy 13, `status` przyjmie wartość `"nastolatek"`. W przeciwnym razie przyjmie wartość `"dziecko"`.

Jak widać w powyższym przykładzie, operator trójargumentowy może być wielokrotnie zagnieżdżony, ale nie jest to zalecane, ponieważ może to znacznie pogorszyć czytelność kodu.

**Zalety:**

1. **Zwięzłość:** Ternary operator pozwala na zapisanie warunków w jednej linii, co może znacznie skrócić i uporządkować kod, szczególnie przy prostych warunkach.
2. **Czytelność:** Dla doświadczonych programistów, taki zapis może być bardziej czytelny niż tradycyjne instrukcje `if...else`.

**Ograniczenia:**

1. **Komplikacja:** Używanie zbyt wielu operatorów trójargumentowych w jednej linii może uczynić kod trudnym do zrozumienia.
2. **Nadużycie:** Nie powinno się nadużywać tego operatora, szczególnie w przypadku skomplikowanych warunków, gdzie lepszym wyborem będzie standardowe `if...else` lub `switch`.
