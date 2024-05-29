---
title: Znacznik <style>
description: ""
order: 60
free: false
extra_links:
  - title: Inline & Embedded Styles
    href: https://www.youtube.com/watch?v=jpjzhva3owA
---

<script>
	import Codepen from "$lib/components/ui/Codepen.svelte";
</script>

O ile w poprzednim przypadku używaliśmy atrybutu, tak teraz będziemy korzystać już z całego tagu `<style>`. Znacznik ten powinien znaleźć się w sekcji `<head>` naszego dokumentu. Tak jak w przypadku tagów tekstowych, tak również tutaj wewnątrz otwierającego i zamykającego znacznika `<style>` umieszczamy zwykły tekst, który to zawiera już wszystkie elementy bloku CSS, a więc również selektor.

<img alt="" src="/kurs/statyczna/img/podstawy-css/style.png" />

<Codepen id="KKbxBwy" />

W przypadku tagu `<style>` mamy już do czynienia z pełnoprawnym kodem CSS. Dzięki takiemu zapisowi możemy pisać kod HTML niezależnie od kodu CSS. Taki zapis jest również dużo bardziej czytelny i co najważniejsze, korzystamy tutaj z selektorów, a więc jednym blokiem możemy ostylować wiele tagów HTML. W powyższym przykładzie jako selektorów używaliśmy tylko znaczników HTML, jednak w kolejnych lekcjach nauczymy jak się tworzyć dużo bardziej złożone, i co za tym idzie, dużo bardziej funkcjonalne selektory.

Umieszczanie CSS za pomocą tagów `<style>` już wygląda dużo czytelniej niż inline CSS, jednak w przypadku dużych stron, gdzie duża liczba tagów HTML będzie implikowała dużą liczbę linii kodu CSS, pisanie tego wszystkiego w jednym pliku może w pewnym momencie być bardzo niewygodne. W tym przypadku skorzystamy z ostatniej metody, czyli osobny plik na kod CSS. Składnia kodu i sposób jego pisania jest dokładnie taki sam jak w przypadku tagu `<style>`. Możemy więc po prostu skopiować to, co mamy w tej lekcji i wkleić do osobnego pliku.
