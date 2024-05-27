---
title: Pętle "while"
description: ''
order: 50
free: false
extra_links:
  - title: While Loops
    href: https://www.youtube.com/watch?v=PpbFyLTtpWI
  - title: While/do while loop
    href: https://www.youtube.com/watch?v=gTdesbu8nyo
    desc: W video jest mowa również o tablicach - do nich jeszcze wrócimy
---

Pętla `while` w JavaScript jest podstawową strukturą kontrolną używaną do wielokrotnego wykonywania bloku kodu, dopóki określony warunek jest spełniony. Struktura pętli `while` wygląda następująco:

```javascript
while (warunek) {
	// Kod do wykonania
}
```

**Jak to działa:**  
Na początku, sprawdzany jest `warunek`. Jeśli warunek jest `true`, kod wewnątrz pętli jest wykonany. Następnie, warunek jest ponownie oceniany i proces się powtarza. Jeśli warunek będzie `false`, pętla się zakończy.

**Przykład użycia:**  
Załóżmy, że chcemy wyświetlić liczby od 1 do 5. Możemy to zrobić tak:

```javascript
let liczba = 1;

// sprawdzamy, czy liczba jest mniejsza lub równa 5
while (liczba <= 5) {
	console.log(liczba);
	liczba++; // zwiększamy zmienną "liczba" o 1
}
```

Jako wynik powyższego kodu otrzymamy w konsoli liczby od 1 do 5.

## Pętla `do-while`

Pętla `do-while` jest podobna do pętli `while`, ale z kluczową różnicą: kod wewnątrz pętli `do-while` jest zawsze wykonany co najmniej raz, niezależnie od warunku.

Struktura pętli `do-while`:

```javascript
do {
	// Kod do wykonania
} while (warunek);
```

**Jak to działa:**  
Najpierw wykonuje się kod wewnątrz bloku `do`. Dopiero potem jest sprawdzany `warunek` w `while`. Jeśli warunek jest `true`, kod w bloku `do` jest wykonany ponownie.

**Przykład użycia:**  
Wyobraźmy sobie sytuację, gdzie chcemy poprosić użytkownika o wprowadzenie liczby, ale co najmniej raz musimy wyświetlić komunikat:

```javascript
let liczba;

do {
	liczba = prompt('Podaj liczbę większą od 10'); // czym jest "prompt" dowiemy się w dalszej części kursu. Na razie wystarczy wiedzieć, że pozwala on na wyświetlenie okna dialogowego z możliwością wprowadzenia danych przez użytkownika
} while (liczba <= 10);
```

Powyższy kod wyświetli okno dialogowe z komunikatem "Podaj liczbę większą od 10". Następnie, jeśli użytkownik wprowadzi liczbę mniejszą lub równą 10, komunikat zostanie wyświetlony ponownie. Proces będzie się powtarzał, dopóki użytkownik nie wprowadzi liczby większej od 10.

## Kiedy używać `while` a kiedy `do-while`

- **Użyj `while`,** gdy nie jesteś pewien, ile razy kod powinien być wykonany, ale warunek początkowy jest istotny.
- **Użyj `do-while`,** gdy kod musi być wykonany co najmniej raz, ale dalsze wykonanie zależy od warunku.

## Praktyczne porady

- **Unikaj nieskończonych pętli:** Upewnij się, że warunek w pętli `while` lub `do-while` w końcu stanie się `false`. Nieskończone pętle mogą spowodować zawieszenie się programu.
- **Aktualizuj warunek:** W kodzie pętli, zawsze zmieniaj zmienną warunkową, aby zapewnić zakończenie pętli.
- **Dokładność warunku:** Upewnij się, że Twój warunek jest precyzyjnie zdefiniowany, aby uniknąć nieoczekiwanego zachowania.
- **Debugowanie:** Jeśli napotkasz problemy z pętlą, dodaj `console.log` w pętli, aby śledzić, jak zmieniają się wartości i zachowanie pętli.
