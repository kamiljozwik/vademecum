---
title: Destructuring
description: ''
order: 100
free: false
extra_links:
  - title: JS Destructuring in 100 Seconds
    href: https://www.youtube.com/watch?v=UgEaJBz3bjY
  - title: Object Destructuring in Detail
    href: https://www.youtube.com/watch?v=BQs0gTgFz04
---

"Destructuring" w JavaScript to technika umożliwiająca wyciąganie wartości z obiektów (oraz tablic) i przypisywanie ich do zmiennych w bardziej zwięzły sposób. Ta metoda znacznie upraszcza kod i czyni go bardziej czytelnym, szczególnie gdy pracujemy z obiektami o dużej złożoności.

Załóżmy, że mamy obiekt reprezentujący użytkownika:

```javascript
const user = {
	name: 'Jan Kowalski',
	age: 30,
	email: 'jan.kowalski@example.com'
};
```

Bez użycia destructuring, dostęp do tych właściwości wyglądałby tak:

```javascript
const name = user.name;
const age = user.age;
const email = user.email;
```

Dzięki destructuring, możemy to zrobić w jednej linii:

```javascript
const { name, age, email } = user;
```

### Destructuring z domyślnymi wartościami

Czasami możemy chcieć ustawić domyślne wartości dla niektórych właściwości, na wypadek gdyby nie były one dostępne w obiekcie. Destructuring znakomicie sobie z tym radzi:

```javascript
const { name, age, phone = 'brak danych' } = user;
```

Jeśli `user` nie zawiera właściwości `phone`, zmienna `phone` otrzyma wartość `'brak danych'`.

### Zmiana nazw zmiennych

Możemy również zmienić nazwy zmiennych podczas destructuring:

```javascript
const { name: userName, age: userAge } = user;
```

Teraz zamiast `name` i `age`, używamy `userName` i `userAge`.

## Głębszy destructuring

Destructuring może być stosowany rekurencyjnie, co pozwala na wydobywanie właściwości z zagnieżdżonych obiektów:

```javascript
const user = {
	name: 'Jan Kowalski',
	age: 30,
	contact: {
		email: 'jan.kowalski@example.com',
		phone: '123-456-789'
	}
};

const {
	name,
	contact: { email, phone }
} = user;

console.log(email); // Wynik: jan.kowalski@example
```

## Użycie z funkcjami

Destructuring jest szczególnie użyteczny w parametrach funkcji, gdy parametry są obiektami o wielu właściwościach. Zamiast przekazywać cały obiekt, możemy przekazać tylko te właściwości, których potrzebujemy:

```javascript
const user = {
	name: 'Jan Kowalski',
	age: 30,
	email: '',
	phone: '123-456-789'
};

function displayUser({ name, age, email }) {
	console.log(`Nazwa: ${name}, Wiek: ${age}, Email: ${email}`);
}

displayUser(user);
```
