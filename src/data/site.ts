import {
  AppWindow,
  Blocks,
  Bot,
  Compass,
  Layers3,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import type { CaseCategory, CaseItem, Metric, NavItem, PriceItem, Service } from '../types';

export const telegramLink = 'https://t.me/Ivan_Lag';

export const navItems: NavItem[] = [
  { label: 'О нас', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Кейсы', href: '#cases' },
  { label: 'Цены', href: '#pricing' },
  { label: 'Контакт', href: '#contact' },
];

export const metrics: Metric[] = [
  { value: '3+', label: 'года в разработке' },
  { value: '30+', label: 'проектов' },
  { value: '5+', label: 'разработчиков' },
  { value: '100%', label: 'фокус на задаче' },
];

export const stack = [
  'Python',
  'Node.js',
  'React',
  'Telegram API',
  'PostgreSQL',
  'Figma',
  'Webflow',
];

export const services: Service[] = [
  {
    title: 'Сайты',
    description: 'Лендинги и корпоративные сайты с сильной подачей, понятным сценарием и аналитикой.',
    icon: AppWindow,
  },
  {
    title: 'Telegram-боты и автоворонки',
    description: 'Боты для продаж, регистрации, поддержки и прогрева аудитории без ручной рутины.',
    icon: Bot,
  },
  {
    title: 'Интеграции и автоматизация',
    description: 'Связываем CRM, таблицы, мессенджеры и внутренние процессы в одну рабочую систему.',
    icon: Compass,
  },
  {
    title: 'Мобильные приложения',
    description: 'MVP и клиентские приложения, которые позволяют быстро проверить гипотезу и выйти на рынок.',
    icon: Smartphone,
  },
];

export const caseFilters: CaseCategory[] = ['Все', 'Сайты', 'Боты', 'Автоматизация'];

export const cases: CaseItem[] = [
  {
    title: 'Villagio Estate',
    category: 'Сайты',
    description: 'Премиум-сайт с видеофоном, продуманной структурой подачи объектов и связкой с CRM.',
    stack: ['React', 'CRM', 'Video Hero'],
  },
  {
    title: 'Do Design',
    category: 'Сайты',
    description: 'B2B-сайт с акцентом на услуги, доверие к студии и быстрый переход к заявке.',
    stack: ['Landing', 'UX', 'Animation'],
  },
  {
    title: 'Алексей Алейников',
    category: 'Сайты',
    description: 'Сайт юриста с упором на доверие, экспертность и конверсию из органического трафика.',
    stack: ['Legal', 'SEO', 'Trust-first'],
  },
  {
    title: 'Telegram бот — тикет-система',
    category: 'Боты',
    description: 'Бот для приёма обращений, маршрутизации запросов и уведомлений внутри команды.',
    stack: ['Telegram API', 'Notifications', 'Support'],
  },
  {
    title: 'Парсер Avito',
    category: 'Автоматизация',
    description: 'Автоматический мониторинг недвижимости с фильтрацией, уведомлениями и экономией времени.',
    stack: ['Parser', 'Monitoring', 'Real Estate'],
  },
  {
    title: 'Автоворонка Telegram',
    category: 'Боты',
    description: 'Лид-магнит, прогрев и запись на консультацию в одном Telegram-сценарии.',
    stack: ['Funnel', 'Lead Magnet', 'CRM Sync'],
  },
  {
    title: 'Instagram бот',
    category: 'Боты',
    description: 'Рост подписчиков через выдачу лид-магнитов, автосообщения и простую сегментацию.',
    stack: ['DM Flow', 'Lead Capture', 'Analytics'],
  },
  {
    title: 'Бот регистрации на эфиры',
    category: 'Боты',
    description: 'Напоминания, регистрация и автоворонка после мероприятия без ручного сопровождения.',
    stack: ['Registration', 'Reminder', 'Retention'],
  },
  {
    title: 'Бот-календарь',
    category: 'Автоматизация',
    description: 'Запись событий через Telegram с быстрым управлением слотами и подтверждениями.',
    stack: ['Calendar', 'Booking', 'Telegram'],
  },
];

export const prices: PriceItem[] = [
  {
    title: 'Лендинг',
    price: 'от 5 000 ₽',
    description: 'Для быстрого запуска оффера, рекламы и теста спроса.',
  },
  {
    title: 'Корпоративный сайт',
    price: 'от 75 000 ₽',
    description: 'Для компаний, которым важны презентация, структура и доверие.',
  },
  {
    title: 'Telegram-бот',
    price: 'от 10 000 ₽',
    description: 'Для автоматизации заявок, поддержки и коммуникации.',
  },
  {
    title: 'ИИ-бот',
    price: 'от 50 000 ₽',
    description: 'Для консультаций, ассистентов и интеллектуальной обработки запросов.',
  },
  {
    title: 'Интеграции',
    price: 'от 15 000 ₽',
    description: 'Для соединения CRM, таблиц, ботов и внутренних сервисов.',
  },
  {
    title: 'MVP приложения',
    price: 'от 350 000 ₽',
    description: 'Для запуска продукта, проверки гипотез и первых пользователей.',
  },
];

export const trustPoints = [
  {
    icon: Blocks,
    title: 'Компактная команда',
    text: 'Без потери информации между менеджерами и разработкой.',
  },
  {
    icon: Layers3,
    title: 'Прозрачный процесс',
    text: 'Фиксируем этапы, приоритеты и понятные сроки без хаоса.',
  },
  {
    icon: ShieldCheck,
    title: 'Фокус на результате',
    text: 'Смотрим не только на код, но и на то, как решение работает для бизнеса.',
  },
  {
    icon: Sparkles,
    title: 'Сильная визуальная подача',
    text: 'Проектируем интерфейсы так, чтобы они выглядели дорого и продавали.',
  },
];

export const privacyContent = [
  'Мы можем собирать имя, контактные данные, ник в Telegram, а также технические данные браузера и устройства, необходимые для корректной работы сайта.',
  'Данные используются для связи с пользователем, обработки заявки, обсуждения проекта, улучшения качества сайта и пользовательского опыта.',
  'Мы принимаем разумные меры для защиты информации от утраты, несанкционированного доступа и распространения.',
  'Продолжая использовать сайт, пользователь подтверждает согласие с настоящей политикой конфиденциальности.',
  'По вопросам обработки данных можно связаться через Telegram: @Ivan_Lag.',
];

export const termsContent = [
  'Сайт носит информационный характер и предназначен для ознакомления с услугами агентства DevPair.',
  'Материалы сайта не являются публичной офертой. Итоговые сроки, стоимость и объём работ обсуждаются отдельно по каждому проекту.',
  'Отправка заявки или переход в Telegram не означает автоматического заключения договора.',
  'Ответственность сторон ограничивается рамками достигнутых договорённостей и оформленных соглашений.',
  'По всем вопросам использования сайта и услуг можно связаться через Telegram: @Ivan_Lag.',
];
