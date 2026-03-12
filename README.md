
# Hotel Booking Demo

A front-end hotel booking interface built with **Next.js**, **React**, **Zustand**, and **Tailwind CSS**.

🔗 **[Live demo](https://your-vercel-url-here.vercel.app)** ← *(update this once deployed)*

Built as a portfolio project to demonstrate working with a modern React stack. I deliberately avoided using AI to write the code — I wanted the experience of working through a new stack myself, only looking things up when stuck.

## Features

- Dashboard listing all bookings, sorted by check-in date
- Form for adding new bookings with client-side validation
- Booking detail page
- Responsive layout (mobile and desktop)
- State managed with Zustand

## Tech

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [Zustand](https://zustand-demo.pmnd.rs/) for state management
- [Tailwind CSS](https://tailwindcss.com/) for styling

## Trade-offs and known limitations

- Validation is basic — no check that check-in dates are in the future
- Seed data lives directly in the Zustand store rather than a mock API layer
- No tests written
- UI copy is minimal — pages would benefit from better headings and context

## Getting Started

### Prerequisites
- Node.js
- npm (or your preferred package manager)

### Install
```bash
npm install
```

### Run locally
```bash
npm run dev
```

Open the app at:
- `http://localhost:3000`

### Lint
```bash
npm run lint
```

### Build (production)
```bash
npm run build
npm run start
```


