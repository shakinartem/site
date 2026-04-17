# DevPair Site

Статический landing page агентства разработки DevPair на `React + TypeScript + Vite + Tailwind CSS + Framer Motion`, готовый к публикации на GitHub Pages.

## Что внутри

- Одностраничный premium/minimal лендинг
- Секции: hero, о нас, услуги, кейсы с фильтрацией, цены, CTA, footer
- Юридические тексты в статичных модальных окнах
- Cookie banner с хранением согласия в `localStorage`
- Адаптивная вёрстка, плавный скролл и scroll reveal анимации
- SEO-мета-теги, Open Graph и favicon
- GitHub Actions workflow для автодеплоя

## Структура проекта

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── favicon.svg
│   └── og-preview.svg
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx
│   │   ├── BackToTop.tsx
│   │   ├── CasesSection.tsx
│   │   ├── CookieNotice.tsx
│   │   ├── CtaSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── LegalModal.tsx
│   │   ├── Navbar.tsx
│   │   ├── PricingSection.tsx
│   │   ├── Reveal.tsx
│   │   ├── SectionHeading.tsx
│   │   └── ServicesSection.tsx
│   ├── data/
│   │   └── site.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── types.ts
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Установка зависимостей

```bash
npm install
```

## Локальный запуск

```bash
npm run dev
```

## Сборка production-версии

```bash
npm run build
```

После сборки готовая статическая версия лежит в папке `dist/`.

## Где поменять base path для GitHub Pages

Файл: `vite.config.ts`

```ts
const githubPagesBase = '/devpair-site/';
```

Если ваш репозиторий называется иначе, замените `'/devpair-site/'` на путь вашего репозитория, например:

```ts
const githubPagesBase = '/my-repo-name/';
```

Для локальной разработки Vite автоматически использует `/`, а для production build — значение `githubPagesBase`.

## Деплой на GitHub Pages

1. Запушьте проект в GitHub-репозиторий.
2. Проверьте `base` в `vite.config.ts`.
3. Убедитесь, что основной branch называется `main` или скорректируйте `.github/workflows/deploy.yml`.
4. В настройках GitHub репозитория откройте `Settings → Pages`.
5. В `Build and deployment` выберите `GitHub Actions`.
6. После пуша workflow сам соберёт проект и опубликует папку `dist`.

## Используемый стек

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Важные замечания

- Проект полностью статический и не использует backend.
- Форма отправки не подключена: основной CTA ведёт в Telegram `@Ivan_Lag`.
- Юридические страницы реализованы как статичные модальные окна, что максимально надёжно для GitHub Pages и не требует роутинга или серверной части.
