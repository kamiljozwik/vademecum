---
title: Kompozycja
description: ""
order: 10
extra_links:
  - title: What is "Composition" in React.js, Angular or Vue Apps?
    href: https://www.youtube.com/watch?v=of7isf3YBZ4
  - title: Un-Suck Your React Components
    href: https://www.youtube.com/watch?v=vPRdY87_SH0
  - title: Compound Components in React (Design Patterns)
    href: https://www.youtube.com/watch?v=N_WgBU3S9W8
---

Kompozycja komponentów to fundament skutecznego rozwoju bibliotek komponentów. Chodzi o sposób, w jaki mniejsze, prostsze komponenty są łączone w bardziej złożone struktury. Dzięki dobrze przemyślanej kompozycji możemy tworzyć elastyczne, wielokrotnego użytku komponenty, które są łatwe do utrzymania i rozszerzania.

## Zasady kompozycji komponentów

### 1. Pojedyncza odpowiedzialność

Każdy komponent powinien mieć jedną, dobrze zdefiniowaną odpowiedzialność. Oznacza to, że powinien wykonywać jedno zadanie i robić to dobrze. Na przykład, komponent `Button` powinien zajmować się wyłącznie renderowaniem przycisku i obsługą kliknięcia, a nie powinien zawierać logiki związanej z formularzem.

### 2. Kompozycja zamiast `props`

W React'cie preferujemy kompozycję nad dziedziczeniem. Oznacza to, że zamiast tworzyć skomplikowane hierarchie, łączymy proste komponenty w bardziej złożone. Na przykład, formularz logowania może być zbudowany z komponentów `Input`, `Button` i `Form`.

### 3. Przekazywanie dzieci (`children`)

Komponenty powinny być projektowane w taki sposób, aby mogły przekazywać i renderować swoje dzieci (`children`). Dzięki temu możemy tworzyć bardziej elastyczne struktury. Na przykład, komponent `Card` może renderować dowolne dzieci, co pozwala na tworzenie kart z różną zawartością.

### 4. Komponenty wyższego rzędu (`higher-order components`, HOC)

HOC to funkcje, które przyjmują komponent jako argument i zwracają nowy komponent z rozszerzoną funkcjonalnością. Używamy ich, gdy chcemy dodać wspólną logikę do wielu komponentów. Na przykład, HOC może dodawać funkcjonalność autoryzacji do różnych widoków.

### 5. `render props`

Render props to technika, która polega na przekazywaniu funkcji jako prop do komponentu, która pozwala na kontrolowanie, co ma być renderowane. Jest to użyteczne, gdy chcemy podzielić logikę i renderowanie. Na przykład, komponent `MouseTracker` może używać render props do śledzenia pozycji kursora i renderowania różnych elementów w zależności od jego pozycji.

💁 Mała uwaga - dzisiaj już dużo rzadziej spotykamy użycie `HOC` oraz `render props`. Dużo częściej teraz korzystamy z `hooków`, ale na pewno warto wiedzieć czym są i jak działają `HOC` oraz `render props`.

## Przykład kompozycji w React

```jsx
const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

const Input = ({ value, onChange }) => (
  <input value={value} onChange={onChange} />
);

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Logika logowania
  };

  return (
    <form>
      <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <Button onClick={handleLogin}>
        <span>Text</span>
      </Button>
    </form>
  );
};
```

W powyższym przykładzie, `LoginForm` jest złożony z prostych komponentów `Button` i `Input`. Każdy z tych komponentów ma jedną odpowiedzialność, co czyni je łatwymi do zarządzania i testowania.

## Zalety kompozycji komponentów:

- **Reużywalność**: Komponenty mogą być używane w różnych częściach aplikacji.
- **Łatwość utrzymania**: Mniejsze komponenty są łatwiejsze do zrozumienia, debugowania i testowania.
- **Elastyczność**: Możliwość łatwego modyfikowania i rozszerzania funkcjonalności bez zmiany istniejącej logiki.
