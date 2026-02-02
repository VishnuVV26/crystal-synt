This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

my-next-app/
├── app/                    # App Router (primary content)
│   ├── (auth)/            # Route group (doesn't affect URL)
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── register/
│   │       └── page.tsx
│   ├── (dashboard)/       # Another route group
│   │   ├── analytics/
│   │   │   └── page.tsx
│   │   └── settings/
│   │       └── page.tsx
│   ├── api/              # API routes
│   │   ├── users/
│   │   │   └── route.ts
│   │   └── posts/
│   │       └── route.ts
│   ├── blog/
│   │   ├── [slug]/       # Dynamic route
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   ├── loading.tsx       # Loading UI
│   ├── error.tsx         # Error boundary
│   ├── not-found.tsx     # 404 page
│   ├── global-error.tsx  # Global error
│   ├── template.tsx      # Re-rendering layout
│   ├── favicon.ico
│   └── robots.txt
├── components/           # Reusable components
│   ├── ui/              # UI components (buttons, cards)
│   ├── layout/          # Layout components
│   └── shared/          # Shared components
├── lib/                 # Utility functions, configurations
│   ├── utils.ts
│   └── constants.ts
├── hooks/               # Custom React hooks
├── types/               # TypeScript type definitions
├── services/            # API service functions
├── middleware.ts        # Middleware file
├── public/              # Static assets
│   ├── images/
│   ├── fonts/
│   └── icons/
├── styles/              # Global styles
│   ├── globals.css
│   └── components/
├── utils/               # Utility functions
├── config/              # Configuration files
├── store/               # State management (Zustand/Redux)
├── .env.local           # Environment variables
├── .env.development
├── .env.production
├── next.config.js       # Next.js configuration
├── package.json
├── tsconfig.json
├── tailwind.config.js   # Tailwind CSS config
├── postcss.config.js    # PostCSS config
├── eslint.config.js     # ESLint config
└── README.md