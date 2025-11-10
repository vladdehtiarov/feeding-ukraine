# Часто задавані питання (FAQ)

## Загальні питання

### Як запустити проект?

```bash
# 1. Встановіть залежності
npm install

# 2. Запустіть dev сервер
npm run dev

# 3. Відкрийте в браузері
# http://localhost:3000
```

### Як зібрати проект для production?

```bash
npm run build
npm start
```

### Чому карта не відображається?

1. Переконайтесь, що встановлені всі залежності: `npm install`
2. Перевірте чи імпортується `leaflet.css` в `app/layout.tsx`
3. Очистіть кеш браузера (Ctrl+Shift+R або Cmd+Shift+R)

### Чому форми не відправляють дані?

Зараз форми тільки виводять дані в консоль. Для реальної відправки потрібно:
- Налаштувати EmailJS (найпростіше)
- Створити API endpoint (складніше)
- Використати сторонній сервіс типу Formspree

Детальніше в файлі `INSTRUCTIONS.md`

## Технічні питання

### Помилка: "Module not found: Can't resolve 'leaflet'"

Рішення:
```bash
npm install leaflet react-leaflet @types/leaflet
```

### Помилка: "window is not defined"

Це нормально для SSR в Next.js. Карта вже налаштована для динамічного завантаження тільки на клієнті.

### Як змінити порт dev сервера?

```bash
npm run dev -- -p 3001
# або
PORT=3001 npm run dev
```

### Як додати Google Analytics?

1. Створіть обліковий запис GA
2. Отримайте ID (G-XXXXXXXXXX)
3. Додайте в `.env.local`:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```
4. Додайте скрипт в `app/layout.tsx`

## Дизайн та стилі

### Як змінити кольори?

Редагуйте `tailwind.config.js` в секції `theme.extend.colors`

### Як додати власний шрифт?

1. Завантажте шрифт у `public/fonts/`
2. Додайте `@font-face` в `app/globals.css`
3. Використовуйте в Tailwind конфігурації

### Як додати анімації?

Можна використовувати:
- CSS animations в `globals.css`
- Tailwind animate utilities
- Бібліотеки типу Framer Motion

## Контент

### Як додати більше секцій?

1. Створіть новий компонент в `components/`
2. Імпортуйте в `app/page.tsx`
3. Додайте в навігацію `components/Header.tsx`

### Як додати галерею фото?

Можна використати:
- react-image-gallery
- next/image з Grid layout
- lightbox бібліотеки

### Як додати блог?

Можна:
- Використати MDX файли
- Інтегрувати з Contentful/Strapi
- Створити папку `app/blog/` з динамічними роутами

## Розгортання

### Де безкоштовно захостити сайт?

Рекомендовані платформи:
- **Vercel** (найкраще для Next.js) - [vercel.com](https://vercel.com)
- **Netlify** - [netlify.com](https://netlify.com)
- **Cloudflare Pages** - [pages.cloudflare.com](https://pages.cloudflare.com)
- **GitHub Pages** (треба експорт) - [pages.github.com](https://pages.github.com)

### Як підключити власний домен?

1. Купіть домен (наприклад на nic.ua)
2. В налаштуваннях хостингу додайте custom domain
3. Налаштуйте DNS records у вашого реєстратора

### Чи потрібна база даних?

Для базового сайту - ні. Але якщо хочете зберігати заявки:
- Безкоштовні варіанти: Supabase, PlanetScale, MongoDB Atlas
- Можна інтегрувати з Google Sheets

## Безпека

### Як захистити форми від спаму?

Можна додати:
- Google reCAPTCHA
- hCaptcha
- Honeypot поля

### Чи безпечно зберігати API ключі?

- Для клієнтських ключів (NEXT_PUBLIC_*) - так
- Для серверних - використовуйте .env.local (не коммітьте в git!)

## Оптимізація

### Як прискорити завантаження?

1. Використовуйте next/image для зображень
2. Lazy loading для важких компонентів
3. Мініфікуйте CSS/JS (автоматично в production)
4. Оптимізуйте зображення (WebP формат)

### Як покращити SEO?

1. Додайте meta tags в `app/layout.tsx`
2. Створіть `sitemap.xml` та `robots.txt`
3. Використовуйте семантичний HTML
4. Додайте Open Graph tags

## Підтримка та оновлення

### Як оновити залежності?

```bash
# Перевірити оновлення
npm outdated

# Оновити все
npm update

# Або використати
npx npm-check-updates -u
npm install
```

### Де шукати допомогу?

- Документація Next.js: [nextjs.org/docs](https://nextjs.org/docs)
- React документація: [react.dev](https://react.dev)
- Tailwind CSS: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- Stack Overflow для конкретних помилок

---

**Не знайшли відповідь?**
Створіть issue в GitHub репозиторії проекту або зверніться до розробника.

