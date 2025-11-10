# ГО "Спільний будинок"

Односторінковий сайт для благодійної організації "Спільний будинок", яка займається допомогою людям, що потребують продуктів харчування.

## Технології

- **Next.js 14** - React фреймворк для серверного рендерингу
- **React 18** - Бібліотека для створення інтерфейсів
- **TypeScript** - Типізована надбудова над JavaScript
- **Tailwind CSS** - Utility-first CSS фреймворк
- **Leaflet** - Інтерактивні карти
- **Lucide React** - Сучасні іконки

## Особливості

- ✅ Адаптивний дизайн (mobile-first)
- ✅ Теплі пастельні кольори
- ✅ Форма для волонтерів
- ✅ Форма для отримувачів допомоги
- ✅ Інтерактивна карта з місцем видачі продуктів
- ✅ Секція для донатів з QR-кодом ПриватБанку
- ✅ Smooth scroll навігація
- ✅ Анімації при наведенні

## Встановлення

1. Встановіть залежності:

```bash
npm install
```

2. Запустіть development сервер:

```bash
npm run dev
```

3. Відкрийте [http://localhost:3000](http://localhost:3000) в браузері

## Структура проекту

```
.
├── app/
│   ├── layout.tsx          # Головний layout
│   ├── page.tsx            # Головна сторінка
│   └── globals.css         # Глобальні стилі
├── components/
│   ├── Header.tsx          # Шапка з навігацією
│   ├── Hero.tsx            # Головна секція
│   ├── About.tsx           # Про організацію
│   ├── Impact.tsx          # Досягнення
│   ├── HowToHelp.tsx       # Як допомогти
│   ├── Donate.tsx          # Секція донатів
│   ├── VolunteerForm.tsx   # Форма волонтера
│   ├── HelpRequestForm.tsx # Форма отримання допомоги
│   ├── LocationMap.tsx     # Карта з локацією
│   ├── Contact.tsx         # Контакти
│   └── Footer.tsx          # Підвал
├── public/                 # Статичні файли
├── package.json
└── tailwind.config.js
```

## Додавання QR коду

Щоб додати QR код ПриватБанку:

1. Збережіть зображення QR коду в папку `public/` (наприклад, `public/qr-code.png`)
2. Відкрийте файл `components/Donate.tsx`
3. Замініть placeholder на:

```tsx
<img 
  src="/qr-code.png" 
  alt="QR код для донатів" 
  className="w-64 h-64 rounded-xl shadow-lg"
/>
```

## Налаштування

### Зміна контактів

Відредагуйте компоненти:
- `components/Header.tsx` - назва організації
- `components/Contact.tsx` - контактна інформація
- `components/Footer.tsx` - футер

### Зміна координат карти

У файлі `components/LocationMap.tsx` змініть координати:

```tsx
const position: [number, number] = [50.4265807, 30.5383858]
```

### Зміна кольорової схеми

Відредагуйте `tailwind.config.js` для зміни кольорової палітри.

## Build для production

```bash
npm run build
npm start
```

## Контакти організації

- **Адреса:** м. Київ, бульвар Лесі Українки, 28
- **Телефон:** +38 (068) 248-11-67
- **Email:** jointhome@ukr.net

---

Створено з ❤️ для допомоги людям

