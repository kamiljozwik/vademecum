---
title: DevTools i CSS
description: ''
order: 30
video: https://player.vimeo.com/video/527018317?h=0682ca2ac4
video_length: '09:09'
free: false
---

Tworząc szkielet naszej strony tylko za pomocą HTML, możemy zauważyć, iż niektóre tagi są wyświetlane inaczej niż zwykły tekst. Dzieje się tak, ponieważ przeglądarki posiadają wbudowane domyślne style CSS, które są używane w przypadku gdy nie używamy żadnego kodu CSS. Najlepszym przykładem będą tutaj nagłówki `h1...h6`. Tag `<h1>` posiada zdecydowanie większą oraz grubszą czcionkę niż tag `<h4>`. Jest to wynik zastosowania domyślnych stylów przeglądarki.

W poniższym materiale zobaczymy jak za pomocą DevTools sprawdzić jaki kod CSS aktualnie odpowiada za wygląd wybranego przez nas elementu na stronie. Poznamy też sposób na to, jak przetestować nowe style, zanim zapiszemy je w pliku CSS.

Warto również tutaj zaznaczyć, iż domyślne style nie znikają w momencie, gdy na jakiś element nałożymy nasze własne style. Tak więc gdy zdecydujemy się zmienić kolor czcionki na przykład dla nagłówków `h1...h6`, to ich rozmiar oraz grubość się nie zmienią. Zmieni się jedynie ich kolor. Jedynym sposobem na pozbycie się domyślnego stylowania jest nadpisanie aktualnego stylu, czyli użycie tej samej właściwości CSS, jaka jest ustawiona domyślnie, jednak z inną wartością. Wszystkie domyślne style (pary `właściwość: wartość` ) dla każdego tagu HTML można sprawdzić w bardzo przydatnym narzędziu [Browser Default Styles](https://browserdefaultstyles.com/).
