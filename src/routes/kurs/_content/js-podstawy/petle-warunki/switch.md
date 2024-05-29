---
title: Wyrażenie "switch"
description: ''
order: 30
free: true
extra_links:
  - title: Learn Switch Statements In 7 Minutes
    href: https://www.youtube.com/watch?v=2gE2K8i5tvs
---

Instrukcja `switch` w JavaScript jest alternatywą dla wielokrotnych instrukcji `if-else`. Umożliwia ona wybranie wykonania określonego bloku kodu na podstawie wartości zmiennej lub wyrażenia. Składnia `switch` jest bardziej przejrzysta i czytelna przy dużej liczbie warunków.

## Jak działa `switch`

Struktura `switch` porównuje wartość wyrażenia z wartościami podanymi w przypadkach (`case`). Gdy znajdzie dopasowanie, wykonuje kod powiązany z tym przypadkiem. Opcjonalnie, możemy dodać przypadek `default`, który zostanie wykonany, gdy żaden z przypadków `case` nie pasuje.

## Składnia

Podstawowa składnia instrukcji `switch` wygląda następująco:

```javascript
switch (wyrażenie) {
	case wartość1:
		// kod do wykonania, gdy wyrażenie === wartość1
		break; // przerywa instrukcję switch
	case wartość2:
		// kod do wykonania, gdy wyrażenie === wartość2
		break;
	// itd.
	default:
	// kod do wykonania, gdy żaden przypadek nie pasuje
}
```

## Przykład

Załóżmy, że tworzymy prostą grę, w której gracz wybiera opcję z menu:

```javascript
let wyborGracza = 'Zapisz grę';

switch (wyborGracza) {
	case 'Rozpocznij grę':
		console.log('Rozpoczynanie nowej gry...');
		break;
	case 'Wznów grę':
		console.log('Wznawianie gry...');
		break;
	case 'Zapisz grę':
		console.log('Zapisywanie gry...');
		break;
	default:
		console.log('Nieznana opcja.');
}
```

Tak więc w sytuacji, gdy mamy wiele warunków, które zależą od wartości jednej zmiennej lub wyrażenia, `switch` jest zwykle bardziej przejrzysty niż wielokrotne `if-else`. Jest to szczególnie przydatne, gdy mamy do czynienia z wieloma różnymi wartościami, które wymagają różnych akcji.

## Dobre praktyki

1. **Używaj `break`**: Po każdym przypadku `case` użyj `break`, aby zapobiec przypadkowemu "prześlizgnięciu" do kolejnego przypadku.
2. **Przypadek `default`**: Zawsze warto mieć przypadek `default`, nawet jeśli jest on pusty. Zapewnia to, że kod jest przygotowany na nieoczekiwane wartości.
3. **Czytelność**: Używaj `switch`, gdy ma to sens dla czytelności i struktury kodu. Nie jest to zawsze najlepsze rozwiązanie, szczególnie gdy warunki są skomplikowane lub nie opierają się tylko na równości.

## switch (true)

Przydatnym i często spotykanym sposobem wykorzystania `switch` jest zapis `switch (true)`. Wtedy w blokach `case` możemy umieścić warunki i uruchomić ten, który ma wartość `true`. Przykład:

```javascript
let liczba = 5;

switch (true) {
	case liczba < 0:
		console.log('Liczba jest mniejsza od zera.');
		break;
	case liczba > 0:
		console.log('Liczba jest większa od zera.');
		break;
	default:
		console.log('Liczba jest równa zero.');
}
```
