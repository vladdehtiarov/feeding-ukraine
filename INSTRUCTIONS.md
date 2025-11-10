# Інструкції по налаштуванню сайту

## 1. Додавання QR коду для донатів

### Крок 1: Отримайте QR код
1. Зайдіть в додаток ПриватБанк
2. Перейдіть в розділ "Платежі" → "Переказ за QR"
3. Створіть QR код для вашої картки або рахунку
4. Збережіть зображення QR коду

### Крок 2: Додайте QR код на сайт
1. Збережіть файл QR коду в папку `public/` з назвою `qr-code.png`
2. Відкрийте файл `components/Donate.tsx`
3. Знайдіть рядок з коментарем `{/* QR Code Placeholder */}`
4. Замініть блок з placeholder на:

```tsx
<div className="bg-gradient-to-br from-warm-100 to-peach-100 rounded-2xl p-12 mb-6 flex items-center justify-center">
  <img 
    src="/qr-code.png" 
    alt="QR код для донатів" 
    className="w-64 h-64 rounded-xl shadow-lg"
  />
</div>
```

## 2. Зміна банківських реквізитів

Відкрийте файл `components/Donate.tsx` та знайдіть секцію "Банківські реквізити". Замініть:
- ЄДРПОУ
- IBAN
- МФО
- Номер картки (в секції "Або переведіть вручну")

## 3. Налаштування карти

Якщо адреса організації відрізняється від зазначеної:

1. Знайдіть координати вашої адреси на [Google Maps](https://www.google.com/maps)
2. Відкрийте `components/LocationMap.tsx`
3. Змініть координати:

```tsx
const position: [number, number] = [ваша_широта, ваша_довгота]
```

## 4. Оновлення контактної інформації

### Файли для редагування:
- `components/Header.tsx` - назва в шапці
- `components/Contact.tsx` - вся контактна інформація
- `components/Footer.tsx` - контакти в футері
- `components/LocationMap.tsx` - адреса на карті

## 5. Зміна кольорової схеми

Якщо хочете змінити кольори:

1. Відкрийте `tailwind.config.js`
2. Змініть значення в секції `colors`:
   - `primary` - основний помаранчевий колір
   - `warm` - теплий жовтий колір
   - `peach` - персиковий колір

## 6. Налаштування форм

Форми зараз відправляють дані в console.log. Для реальної роботи:

### Варіант 1: Email (простіше)
Використайте сервіс типу [EmailJS](https://www.emailjs.com/) або [Formspree](https://formspree.io/)

### Варіант 2: Backend (складніше, але надійніше)
1. Створіть API endpoints в Next.js (папка `app/api/`)
2. Налаштуйте базу даних
3. Змініть функції `handleSubmit` в компонентах форм

### Приклад для EmailJS:

```typescript
import emailjs from '@emailjs/browser'

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault()
  
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    )
    setIsSubmitted(true)
  } catch (error) {
    console.error('Error:', error)
  }
}
```

## 7. Розгортання на хостинг

### Рекомендовані платформи (безкоштовні):

#### Vercel (найкраще для Next.js)
1. Зареєструйтесь на [vercel.com](https://vercel.com)
2. Підключіть ваш GitHub репозиторій
3. Натисніть "Deploy"

#### Netlify
1. Зареєструйтесь на [netlify.com](https://netlify.com)
2. Підключіть репозиторій
3. Build command: `npm run build`
4. Publish directory: `.next`

## 8. Додавання фото та зображень

Всі зображення зберігайте в папці `public/`:
- `public/logo.png` - логотип організації
- `public/photos/` - фото діяльності
- `public/certificates/` - сертифікати та нагороди

## Підтримка

Якщо виникли питання:
1. Перегляньте документацію Next.js: [nextjs.org/docs](https://nextjs.org/docs)
2. Документацію Tailwind CSS: [tailwindcss.com](https://tailwindcss.com)
3. Документацію React Leaflet: [react-leaflet.js.org](https://react-leaflet.js.org)

---

**Увага!** Після будь-яких змін перезапустіть dev сервер:
```bash
# Зупиніть сервер (Ctrl+C)
npm run dev
```

