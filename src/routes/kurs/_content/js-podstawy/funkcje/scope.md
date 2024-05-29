---
title: Scope i closures
description: ''
order: 60
free: false
extra_links:
  - title: Learn JavaScript Scoping In 10 Minutes
    href: https://www.youtube.com/watch?v=TkFN6e9ZDMw
  - title: Closures Explained in 100 Seconds // Tricky JavaScript Interview Prep 🎉
    href: https://www.youtube.com/watch?v=vKJpN5FAeF4
  - title: Learn Closures In 7 Minutes
    href: https://www.youtube.com/watch?v=3a0I8ICR1Vg
  - title: JavaScript Closures Tutorial (Explained in depth)
    href: https://www.youtube.com/watch?v=aHrvi2zTlaU
---

Zacznijmy od podstaw: w JavaScript istnieją dwa główne typy zakresów – **globalny** i **lokalny**. Zakres globalny to przestrzeń, gdzie zmienne są dostępne wszędzie i dla każdego fragmentu kodu.

```javascript
let globalVar = 'Jestem globalna';

function checkScope() {
	console.log(globalVar); // Wypisze: "Jestem globalna"
}

checkScope();
```

Z kolei zakres lokalny to przestrzeń wewnątrz funkcji, gdzie zmienne są dostępne tylko wewnątrz tej funkcji.

```javascript
function setLocalVar() {
	let localVar = 'Jestem lokalna';
	console.log(localVar); // Wypisze: "Jestem lokalna"
}

setLocalVar();
console.log(localVar); // Błąd: localVar is not defined
```

W tym kontekście ważne jest, aby pamiętać, że zmienne globalne mogą powodować konflikty i "zanieczyszczanie" przestrzeni nazw, więc ich użycie należy ograniczać.

## Zakres blokowy z `let` i `const`

ES6 wprowadził dwa nowe słowa kluczowe do deklarowania zmiennych: `let` i `const`, które pozwalają na tworzenie zmiennych o zakresie blokowym. Oznacza to, że zmienne te są dostępne tylko wewnątrz bloku (czyli wewnątrz klamr `{}`), w którym zostały zadeklarowane.

```javascript
function testBlockScope() {
	if (true) {
		let blockVar = 'Widoczna tylko w bloku';
		console.log(blockVar); // Wypisze: "Widoczna tylko w bloku"
	}
	console.log(blockVar); // Błąd: blockVar is not defined
}

console.log(blockVar); // Błąd: blockVar is not defined

testBlockScope();
```

## Domknięcia (`closures`)

Domknięcia to koncept w JavaScript, który pozwala funkcji pamiętać i uzyskiwać dostęp do zmiennych ze swojego tzw. zakresu leksykalnego, nawet po zakończeniu wykonania funkcji, w której te zmienne zostały zadeklarowane.

```javascript
function createCounter() {
	let counter = 0;
	return function () {
		counter++;
		console.log(counter);
	};
}

const myCounter = createCounter();
myCounter(); // Wypisze: 1
myCounter(); // Wypisze: 2
```

W powyższym przykładzie, nawet po zakończeniu działania funkcji `createCounter`, zmienna `counter` jest nadal dostępna dla funkcji zwróconej przez `createCounter`.

Domknięcia są szczególnie przydatne w tworzeniu funkcji typu "fabryka", ochronie danych przed nieautoryzowanym dostępem oraz w programowaniu asynchronicznym. Na przykład, możesz użyć domknięć do tworzenia prywatnych metod (metoda to funkcja zdefiniowana wewnątrz obiektu):

```javascript
function createPerson(name) {
	let age = 20;

	return {
		getName: function () {
			return name;
		},
		getAge: function () {
			return age;
		}
	};
}

let person = createPerson('Jan');
console.log(person.getName()); // Wypisze: "Jan"
console.log(person.age); // Undefined, zmienna "age" jest prywatna, dostępna tylko w zakresie funkcji "createPerson"
```

W tym przykładzie `age` jest prywatną zmienną, do której dostęp jest możliwy tylko przez funkcje zdefiniowane wewnątrz `createPerson`. Dzięki temu, możemy kontrolować sposób, w jaki dane są wykorzystywane i modyfikowane.

Zrozumienie zakresów i domknięć jest bardzo ważne dla efektywnego i bezpiecznego programowania w JavaScript. Pozwala to na lepszą kontrolę nad danymi i ich widocznością. Poza tym, istnieje naprawdę duże prawdopodobieństwo, że zostaniesz o to zapytany podczas rozmowy kwalifikacyjnej 😉
