# Rules: Code Style & Standards

## 📝 TypeScript
- **strict mode**: true (в tsconfig.json)
- **Типы**: всегда явно указывайте типы для функций и переменных
- **Интерфейсы**: используйте interface для объектов, type для union/tuple
- **never any**: избегайте 'any', используйте 'unknown' или точный тип

### Правила TypeScript
```typescript
// ✅ Правильно
interface User { id: string; name: string; }
const getUser = (id: string): User => { /* ... */ }

// ❌ Неправильно
const getUser = (id) => { /* ... */ }  // no types
const data: any = /* ... */             // avoid any
```

## ⚛️ React & Next.js
- **Функциональные компоненты** (no class components)
- **React 19 Server Components** (используй в /app директории)
- **Client Components**: добавляй 'use client' только когда нужны hooks
- **Props типы**: через TypeScript interface
- **Naming**: PascalCase для компонентов (MyButton.tsx), camelCase для функций

### Структура компонента
```typescript
'use client';

import type { ReactNode } from 'react';

interface MyButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export default function MyButton({ children, onClick }: MyButtonProps) {
  return (
    <button onClick={onClick} className="btn">
      {children}
    </button>
  );
}
```

## 🎨 Tailwind CSS v4
- **No arbitrary values** if possible (используй design tokens)
- **Color palette**: #0A0A0A (bg-dark), #C8A882 (accent), #FFFFFF (text)
- **Spacing**: используй scale: xs, sm, md, lg, xl
- **Responsive**: mobile-first approach (sm:, md:, lg:)
- **Custom config**: в tailwind.config.ts

### Цветовые токены (tailwind.config.ts)
```javascript
colors: {
  dark: '#0A0A0A',
  accent: '#C8A882',
  text: '#FFFFFF',
  muted: '#6B6B6B',
}
```

### Пример использования
```typescript
// ✅ Правильно
<div className="bg-dark text-text p-6 lg:p-8">
  <h1 className="text-2xl md:text-4xl font-display">Title</h1>
</div>

// ❌ Неправильно
<div className="bg-[#0A0A0A] text-white px-[24px]">
```

## 🔤 Шрифты
- **Заголовки (h1-h3)**: `font-display` (Playfair Display)
- **Основной текст**: `font-sans` (Inter)
- **Font weights**: 400 (regular), 600 (semibold), 700 (bold)

## 📂 File Organization
```
src/
├── app/                  # Next.js App Router
├── components/
│   ├── ui/              # shadcn/ui компоненты
│   ├── layout/          # Header, Footer, Sidebar
│   ├── sections/        # Page sections
│   └── forms/           # Form компоненты
├── lib/
│   ├── supabase/       # Supabase конфиг
│   ├── types.ts        # TypeScript типы
│   ├── constants.ts    # Constants
│   └── utils.ts        # Helper функции
├── hooks/              # Custom hooks
└── styles/             # Global CSS
```

## 🔗 Imports
- **Absolute imports**: используй @/ alias (настроено в tsconfig)
- **Порядок**: 1. React, 2. Next.js, 3. внешние, 4. локальные

```typescript
// ✅ Правильно
import type { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/lib/utils';

// ❌ Неправильно
import { formatDate } from '../../../lib/utils';
import React from 'react';
```

## 📋 Naming Conventions
- **Components**: PascalCase (ServiceCard.tsx)
- **Functions/variables**: camelCase (getServices)
- **Constants**: UPPER_SNAKE_CASE (MAX_BOOKING_DAYS)
- **Private functions**: \_privateFunction

## ✨ Code Quality
- **ESLint**: запускай `npm run lint`
- **Prettier**: автоматическое форматирование
- **No console.logs**: используй logger для production
- **Comments**: только для сложной логики
- **Functions**: max 50 строк (преобразуй в подфункции)

## 🚀 Performance
- **Next Image**: используй для всех фото
- **Code splitting**: lazy import для больших компонентов
- **Memoization**: React.memo для дорогих компонентов
- **useCallback**: для обработчиков событий в зависимостях

```typescript
import Image from 'next/image';
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('@/components/Heavy'), {
  loading: () => <div>Loading...</div>
});
```

## 🛡️ Error Handling
- Try-catch в API routes
- Graceful fallbacks в UI
- Error boundary компоненты
- Логирование ошибок

## 📱 Accessibility
- **Semantic HTML**: используй <button>, <nav>, <article>
- **ARIA labels**: где нужно
- **Keyboard navigation**: все интерактивное доступно через Tab
- **Color contrast**: >= 4.5:1 для текста

---
**Связанные rules**: database.md, ui-design.md
