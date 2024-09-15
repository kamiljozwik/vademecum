---
title: Monorepo
description: ""
order: 20
extra_links:
  - title: Monorepos - How the Pros Scale Huge Software Projects
    href: https://www.youtube.com/watch?v=9iU_IE6vnJ8
  - title: Soo...what is Nx?
    href: https://www.youtube.com/watch?v=-_4WMl-Fn0w
  - title: Turborepo in 2 Minutes
    href: https://www.youtube.com/watch?v=vE3LOHU0OV8
  - title: Why I’m using a monorepo with Yarn workspaces
    href: https://www.youtube.com/watch?v=YXbgs-RKIEQ
  - title: Monorepo vs polyrepo (polski podcast)
    href: https://www.youtube.com/watch?v=7FcbTBtlxqs
---

Monorepozytoria to podejście do zarządzania kodem, gdzie wiele projektów znajduje się w jednym repozytorium. Zarządzanie monorepo może być skomplikowane, ale odpowiednie narzędzia mogą znacząco ułatwić ten proces.

W kontekście biblioteki komponentów, monorepo umożliwia przechowywanie kodu naszej biblioteki w jednym miejscu z konsumującymi ją aplikacjami (lub aplikacją).

Korzystanie z podejścia monorepo nie jest oczywiście wymagane podczas budowania Design Systemu. Równie dobrze możemy publikować nowe wersje naszej biblioteki na `npm` i stamtąd pobierać je do aplikacji, ale zdecydowanie warto wiedzieć, że można tego uniknąć.

Poniżej znajdziemy najpopularniejsze obecnie narzędzia służące do zarządzania monorepo.

## Nx

[Nx](https://nx.dev/) to narzędzie które umożliwia łatwe zarządzanie wieloma projektami i bibliotekami w jednym repozytorium, zapewniając przy tym wydajne narzędzia do budowania, testowania, wdrażania i automatycznego generowania kodu.

### Zalety Nx:

- **Workspace**: Możliwość zarządzania wieloma aplikacjami i bibliotekami w jednym repozytorium.
- **Dependency Graph**: Graficzne przedstawienie zależności między projektami, co ułatwia ich zrozumienie i zarządzanie nimi.
- **Code Generation**: Narzędzia do automatycznego generowania kodu.
- **Cache**: Wbudowany cache, który znacząco przyspiesza budowanie i testowanie.

## Lerna

[Lerna](https://lerna.js.org/) to jedno z najstarszych i najbardziej dojrzałych narzędzi do zarządzania monorepo (głównie JavaScript i TypeScript), jednak w pewnym momencie swojego życia przestało być rozwijane i [trafiło pod skrzydła](https://blog.nrwl.io/lerna-is-dead-long-live-lerna-61259f97dbd9) tej samej firmy, która stworzyła `Nx`.

### Zalety Lerna:

- **Bootstrap**: Automatyczna instalacja zależności między pakietami.
- **Versioning**: Automatyczne wersjonowanie pakietów, co ułatwia zarządzanie wydaniami.
- **Publishing**: Ułatwione publikowanie pakietów do `npm`.
- **Hoisting**: Optymalizacja instalacji zależności, co zmniejsza czas instalacji i wielkość `node_modules`.

## Turborepo

[Turborepo](https://turbo.build/) to najnowsze narzędzie do zarządzania monorepo stworzone przez firmę Vercel. Jest zoptymalizowane pod kątem wydajności, oferuje zaawansowane funkcje do zarządzania zależnościami i oczywiście bardzo dobrze integruje się z Next.js.

### Zalety Turborepo:

- **Remote Caching**: Zdalne cache'owanie wyników budowania, co przyspiesza proces CI/CD.
- **Incremental Builds**: Budowanie tylko tych części kodu, które uległy zmianie.
- **Parallel Execution**: Wykonywanie zadań równolegle, co skraca czas budowania.
- **Flexible Configuration**: Możliwość dostosowania konfiguracji do specyficznych potrzeb projektu.

## Bazel

[Bazel](https://bazel.build/) to narzędzie do budowania monorepozytoriów stworzone przez Google. Jest bardzo wydajne i skalowalne, ale może być bardziej skomplikowane w konfiguracji niż inne narzędzia.

### Zalety Bazel:

- **Performance**: Bardzo szybkie budowanie dzięki zaawansowanemu cache'owaniu i równoległemu wykonywaniu zadań.
- **Scalability**: Doskonale radzi sobie z bardzo dużymi projektami.
- **Flexibility**: Możliwość budowania różnych typów projektów (np. Java, C++, JavaScript) w jednym repozytorium.

## Yarn Workspaces

[Yarn Workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/) to funkcja menedżera pakietów Yarn, która umożliwia zarządzanie wieloma pakietami w jednym repozytorium. Jest to prostsze rozwiązanie niż `Lerna` czy `Nx`, ale może okazać się wystarczające dla mniejszych projektów.

### Zalety Yarn Workspaces:

- **Simplicity**: Łatwość konfiguracji i użycia.
- **Efficiency**: Optymalizacja instalacji zależności, co zmniejsza czas instalacji i wielkość `node_modules`.
- **Compatibility**: Możliwość używania z innymi narzędziami do zarządzania monorepozytoriami.

Wybór odpowiedniego narzędzia do zarządzania monorepo zależy od specyfiki projektu i potrzeb zespołu. Pamiętaj, aby wybrać to narzędzie, które najlepiej wspiera procesy zarządzania kodem, budowania, testowania i wdrażania w Twoim projekcie.
