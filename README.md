# Stop. Eat . Go

Premium restaurant website built with Next.js App Router, TypeScript, Tailwind CSS, shadcn-style UI primitives, Framer Motion, `react-hook-form`, and `zod`.

## Stack

- Next.js 14 App Router
- React 18
- TypeScript
- Tailwind CSS
- Radix UI based shadcn-style components
- Framer Motion
- react-hook-form + zod
- lucide-react

## Run locally

```bash
npm install
npm run dev
```

If you run this project from a Windows folder path containing `&`, npm may need PowerShell as the script shell. In that case, run `npm config set script-shell powershell.exe` locally on your machine instead of committing that setting to the repo.

## Main routes

- `/` Home
- `/menu` Menu
- `/order` Order Online
- `/reservations` Reservations
- `/gallery` Gallery
- `/about` About
- `/contact` Contact

## Mock APIs

- `POST /api/orders`
- `POST /api/reservations`
- `POST /api/inquiries`

Each endpoint stores submissions in an in-memory array and returns a reference id such as `SEG-O-1234`.

## Edit content

- Menu items and prices: [data/menu.ts](/d:/Web/Stop%20Eat%20%26%20Go/data/menu.ts)
- Best sellers: [data/bestSellers.ts](/d:/Web/Stop%20Eat%20%26%20Go/data/bestSellers.ts)
- Testimonials: [data/testimonials.ts](/d:/Web/Stop%20Eat%20%26%20Go/data/testimonials.ts)
- FAQs: [data/faqs.ts](/d:/Web/Stop%20Eat%20%26%20Go/data/faqs.ts)
- Branch details and hours: [data/branches.ts](/d:/Web/Stop%20Eat%20%26%20Go/data/branches.ts)
- Brand details and image URLs: [lib/constants.ts](/d:/Web/Stop%20Eat%20%26%20Go/lib/constants.ts)

## Notes

- Remote images come from Unsplash and Pexels through centralized constants.
- Image failures fall back to a branded gradient block.
- Cart state is stored in local storage for a smoother ordering experience during browsing.
