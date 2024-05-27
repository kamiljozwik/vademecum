---
title: 'throw'
description: ''
order: 40
free: false
extra_links:
  - title: JavaScript - Throw vs. Return Error
    href: https://www.youtube.com/watch?v=d7ZaxCCl5C8
---

Rola słowa kluczowego `throw` jest z jednej strony prosta, ale fundamentalna: umożliwia przerwanie normalnego przepływu wykonania kodu i wygenerowanie błędu. Jest to swoisty mechanizm alarmowy, który sygnalizuje, że coś poszło nie tak.

Użycie `throw` jest dość łatwe:

```javascript
function checkAge(age) {
	if (age < 18) {
		throw new Error('Wiek musi być większy lub równy 18'); // Nasz kod "Rzuca błąd"
	}
	// Reszta logiki funkcji
}
```

W tym przykładzie, jeśli `age` jest mniejszy niż 18, funkcja przerwie swoje wykonanie, rzucając błąd. Użycie `new Error()` tworzy nowy obiekt błędu z podanym komunikatem.

Użycie `throw` pozwala na jasne zaznaczenie, gdzie i dlaczego doszło do problemu. Ułatwia to debugowanie kodu, ponieważ dostarcza informacji o naturze błędu. Jest to szczególnie ważne w większych aplikacjach, gdzie śledzenie błędów może być trudne.

## Tworzenie Własnych Typów Błędów

Choć JavaScript dostarcza kilka wbudowanych typów błędów, takich jak `Error`, `TypeError`, `RangeError` itd., czasami potrzebujemy czegoś więcej - własnych typów błędów, które będą lepiej opisywać specyficzne sytuacje w naszej aplikacji.

Tworzenie własnego typu błędu wymaga rozszerzenia wbudowanego obiektu `Error`. Oto przykład:

```javascript
class UserError extends Error {
	constructor(message) {
		super(message);
		this.name = 'UserError';
	}
}

function validateUser(user) {
	if (!user.name) {
		throw new UserError('Brak nazwy użytkownika');
	}
	// Reszta logiki walidacji
}
```

W tym przykładzie stworzyliśmy nowy typ błędu `UserError`. Dzięki temu możemy rzucać błędy, które są bardziej znaczące w kontekście naszej aplikacji.

Definiowanie własnych typów błędów ma kilka zalet:

- **Zwiększa czytelność**: Kiedy błąd zostanie rzucony, od razu wiemy, z jakim rodzajem problemu mamy do czynienia.
- **Ułatwia obsługę błędów**: Możemy łatwiej obsłużyć specyficzne błędy w blokach `try...catch` dzięki identyfikacji typu błędu.
- **Umożliwia precyzyjne raportowanie**: W systemach monitorujących błędy możemy dokładnie śledzić, jakie rodzaje błędów pojawiają się najczęściej.

W swojej codziennej pracy raczej nie za często będziesz tworzyć własne typy błędów, jednak warto wiedzieć, że jest to możliwe i jakie korzyści może to przynieść.
