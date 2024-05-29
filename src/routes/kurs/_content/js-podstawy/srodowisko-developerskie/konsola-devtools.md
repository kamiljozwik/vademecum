---
title: Konsola DevTools
description: ''
order: 30
free: false
extra_links:
  - title: Run JavaScript in the Console
    href: https://developer.chrome.com/docs/devtools/console/javascript/
  - title: Using The Console
    href: https://www.youtube.com/watch?v=QY9G0UJNU8Q
---

Konsola w Narzędziach Deweloperskich przeglądarek internetowych, jak Chrome, Firefox czy Edge, to potężne narzędzie dla deweloperów JavaScript. Umożliwia ona szybkie testowanie fragmentów kodu JavaScript bezpośrednio w przeglądarce. Dzięki temu możesz pisać i uruchamiać krótki kod JavaScript bezpośrednio w przeglądarce, bez konieczności tworzenia plików czy instalowania edytora tekstowego.

Konsola może być przydatna w początkowych etapach nauki, kiedy chcesz szybko przetestować, jak działają różne funkcje i metody JavaScript. Jest również nieocenionym narzędziem do debugowania, które pozwala na szybkie lokalizowanie i naprawianie błędów w kodzie. Docelowo jednak będziesz używać konsoli głównie do eksperymentowania z kodem i testowania różnych rozwiązań bez konieczności edycji głównego kodu źródłowego.

## Podstawy użycia konsoli

- **Otwieranie konsoli:** Można to zrobić przez menu narzędzi deweloperskich przeglądarki lub używając skrótu klawiszowego (np. klawisz `F12` lub `Ctrl+Shift+I` w większości przeglądarek).
- **Pisanie i uruchamianie kodu:** Wpisujesz kod JavaScript bezpośrednio w konsoli i naciskasz `Enter`, aby go uruchomić.
- **Wyświetlanie Wyników:** Wyniki działania kodu są natychmiastowo wyświetlane w konsoli.

## Realne Zastosowania

- **Testowanie skryptów:** Szybkie sprawdzanie, jak działają małe fragmenty kodu.
- **Debugowanie:** Lokalizowanie i naprawianie błędów w kodzie.
- **Eksperymentowanie z kodem:** Próbowanie różnych podejść i rozwiązań bez konieczności edycji głównego kodu źródłowego.
- **Nauka i eksploracja:** Idealne miejsce do nauki nowych funkcji JavaScript i eksperymentowania z nimi.
- **Wyniki dla console.log:** Jeżeli w swoim kodzie używasz funkcji `console.log()`, to wyniki będą wyświetlane właśnie w tej konsoli.

## Przykład

Załóżmy, że chcesz przetestować funkcję, która sumuje liczby. Możesz szybko napisać i przetestować taką funkcję w konsoli:

```javascript
function sum(a, b) {
	return a + b;
}
console.log(sum(5, 3));
```

Po naciśnięciu `Enter`, konsola wyświetli wynik funkcji.

Sprawdź dodatkowe materiały, aby dowiedzieć się więcej o tym jak działa konsola DevTools.
