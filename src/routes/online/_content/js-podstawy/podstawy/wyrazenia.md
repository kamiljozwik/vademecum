---
title: Wyrażenia
description: ''
order: 50
free: false
extra_links:
  - title: The Difference between JS Expressions and Statements
    href: https://www.youtube.com/watch?v=zoNiiYRsQQI
  - title: Expressions vs. Statements in JS
    href: https://www.youtube.com/watch?v=WVyCrI1cHi8
---

Wyrażenia w JavaScript to fragmenty kodu, które zwracają wartość. Każde wyrażenie należy do jednego z dwóch typów: wyrażeń z wartościami (przykład: `2 + 2`) lub wyrażeń, które wykonują jakieś działanie, ale także zwracają wartość (przykład: przypisanie wartości zmiennej).

## Typy Wyrażeń

1. **Wyrażenia arytmetyczne**: Wyrażają operacje matematyczne i zwracają numeryczne wyniki.

   ```javascript
   let suma = 10 + 5; // wynosi 15
   ```

2. **Wyrażenia lańcuchowe (stringowe)**: Dotyczą operacji na stringach.

   ```javascript
   let powitanie = 'Witaj, ' + 'świecie!'; // "Witaj, świecie!"
   ```

3. **Wyrażenia logiczne**: Zwracają wartość logiczną (prawda/fałsz) w oparciu o dane operacje logiczne.

   ```javascript
   let warunek = 5 > 3 && 3 < 4; // true
   ```

4. **Wyrażenia z operatorem przypisania**: Przypisują wartości do zmiennych.

   ```javascript
   let liczba = 5; // Przypisanie wartości 5 do zmiennej liczba
   ```

5. **Wyrażenia funkcyjne**: Definiują funkcje (funkcje jeszcze przed nami).

   ```javascript
   let powiedzWitaj = function (imie) {
   	return `Witaj, ${imie}!`;
   };
   ```

6. **Ternary expression**: Skrócona forma instrukcji warunkowej `if-else` (to również jeszcze przed nami)
   ```javascript
   let status = wiek >= 18 ? 'dorosły' : 'nieletni';
   ```

## Priorytet Operatorów

W wyrażeniach, operatory mają różny priorytet, co wpływa na kolejność ich wykonania. Na przykład, operacje mnożenia i dzielenia mają wyższy priorytet niż dodawanie i odejmowanie.

### Przykład:

```javascript
let wynik = 10 + 5 * 2; // wynosi 20, nie 30
```

## Wyrażenia a Instrukcje

Różnica między wyrażeniem a instrukcją jest subtelna: wyrażenie zawsze zwraca wartość, natomiast instrukcja wykonuje jakąś akcję. Czasem linia kodu może być zarówno wyrażeniem, jak i instrukcją (np. przypisanie wartości zmiennej).

Wyrażenia są używane w codziennym programowaniu do obliczeń, przetwarzania danych, manipulowania wartościami zmiennych i wielu innych zadań. Na przykład, możesz używać wyrażeń arytmetycznych do obliczenia ceny po rabacie czy wyrażeń logicznych do sprawdzenia, czy użytkownik ma dostęp do określonej części aplikacji.
