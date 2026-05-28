# Rules: UI Design & Components

## 🎨 Цветовая палитра

### Primary Colors
- **Background**: `#0A0A0A` (Tailwind: bg-dark)
- **Accent**: `#C8A882` (Tailwind: accent-warm)
- **Text**: `#FFFFFF` (Tailwind: text-white)

### Secondary Colors
- **Muted text**: `#6B6B6B` (Tailwind: text-muted)
- **Border**: `#1A1A1A` (Tailwind: border-subtle)
- **Hover**: `#D4B5A0` (Tailwind: accent-light) — lighter accent
- **Success**: `#10B981` (Tailwind: success)
- **Error**: `#EF4444` (Tailwind: error)
- **Warning**: `#F59E0B` (Tailwind: warning)

### Tailwind Config
```javascript
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        dark: '#0A0A0A',
        'accent-warm': '#C8A882',
        'accent-light': '#D4B5A0',
        text: '#FFFFFF',
        muted: '#6B6B6B',
        'border-subtle': '#1A1A1A',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
};
```

## 🔤 Типография

### Шрифты
- **Playfair Display**: h1, h2, h3, title, display text
- **Inter**: body, buttons, labels, captions

### Font Sizes & Weights
| Элемент | Size | Weight | Font |
|---------|------|--------|------|
| h1 | 48-64px | 600 | Playfair |
| h2 | 36-48px | 600 | Playfair |
| h3 | 24-32px | 600 | Playfair |
| body | 14-16px | 400 | Inter |
| small | 12-14px | 400 | Inter |
| label | 12px | 600 | Inter |

### Tailwind Classes
```typescript
// h1
<h1 className="font-display text-5xl md:text-6xl font-semibold">Title</h1>

// h2
<h2 className="font-display text-3xl md:text-4xl font-semibold">Subtitle</h2>

// body
<p className="font-sans text-base leading-relaxed">Text content</p>

// label
<label className="font-sans text-xs font-semibold uppercase">Label</label>
```

## 📐 Spacing & Layout

### Spacing Scale
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px

### Container
```typescript
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* content */}
</div>
```

### Grid & Flex
```typescript
// 2-column grid
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

// 3-column grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Flexbox
<div className="flex items-center justify-between gap-4">
```

## 🎬 Анимации (Framer Motion)

### Установка
```bash
npm install framer-motion
```

### Основные анимации
```typescript
import { motion } from 'framer-motion';

// Fade In
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>

// Slide Up
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>

// Scale On Hover
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>

// Stagger Container
<motion.div
  initial="hidden"
  whileInView="visible"
  variants={{
    visible: { transition: { staggerChildren: 0.1 } },
  }}
>
  {items.map((item) => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {item.name}
    </motion.div>
  ))}
</motion.div>
```

## 🧩 shadcn/ui Components

### Установленные компоненты
```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
npx shadcn-ui@latest add select
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add tabs
npx shadcn-ui@latest add accordion
npx shadcn-ui@latest add form
npx shadcn-ui@latest add badge
npx shadcn-ui@latest add toast
```

### Button примеры
```typescript
import { Button } from '@/components/ui/button';

// Primary
<Button>Record Now</Button>

// Outline
<Button variant="outline">Learn More</Button>

// Ghost
<Button variant="ghost">Cancel</Button>

// Disabled
<Button disabled>Loading...</Button>
```

### Input примеры
```typescript
import { Input } from '@/components/ui/input';

<Input
  type="email"
  placeholder="your@email.com"
  className="bg-dark text-white placeholder-muted border-border-subtle"
/>
```

## 📱 Responsive Design

### Breakpoints
- sm: 640px (mobile landscape)
- md: 768px (tablet)
- lg: 1024px (desktop)
- xl: 1280px (large desktop)

### Mobile-First Approach
```typescript
// ✅ Правильно
<div className="text-base sm:text-lg md:text-xl lg:text-2xl">

// ❌ Неправильно
<div className="text-2xl md:text-xl sm:text-base">
```

## 🌙 Dark Theme

### Tailwind Dark Mode (по умолчанию на проекте)
```typescript
// tailwind.config.ts
module.exports = {
  darkMode: 'class', // или 'media'
  theme: {
    extend: {
      colors: {
        dark: '#0A0A0A',
      },
    },
  },
};
```

### Использование
```typescript
// Элементы с тёмной темой по умолчанию
<div className="bg-dark text-white">
  {/* контент */}
</div>

// Контрастные элементы
<div className="bg-dark border border-border-subtle rounded-lg p-6">
```

## 🎨 Custom Components (примеры)

### Card Component
```typescript
interface CardProps {
  className?: string;
  children: ReactNode;
}

export function Card({ className = '', children }: CardProps) {
  return (
    <div className={`bg-dark border border-border-subtle rounded-lg p-6 ${className}`}>
      {children}
    </div>
  );
}
```

### Service Card Component
```typescript
interface ServiceCardProps {
  image: string;
  name: string;
  price: number;
  duration: number;
  onBook: () => void;
}

export function ServiceCard({ image, name, price, duration, onBook }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-dark rounded-lg overflow-hidden"
    >
      <Image src={image} alt={name} width={300} height={300} />
      <div className="p-4">
        <h3 className="font-display text-xl font-semibold text-white">{name}</h3>
        <p className="text-accent-warm">${price} • {duration} min</p>
        <Button onClick={onBook} className="mt-4 w-full">Book Now</Button>
      </div>
    </motion.div>
  );
}
```

## ✨ Effects & Polish

### Shadows
- **sm**: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
- **md**: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
- **lg**: 0 10px 15px -3px rgba(0, 0, 0, 0.1)

### Borders & Radius
- Border radius: 8px (default), 12px (lg elements)
- Border width: 1px (default), 2px (focus states)

### Transitions
```typescript
// Tailwind transitions
className="transition duration-300 ease-in-out hover:bg-accent-warm"

// Custom transitions (globals.css)
@layer components {
  .smooth-transition {
    @apply transition duration-300 ease-in-out;
  }
}
```

---
**Связанные rules**: code-style.md, database.md
