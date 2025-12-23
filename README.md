
## What is this!?

This is a small, front-end–only hotel booking interface built by the renowned Dave Kerr with **Next.js**, **React**, **Zustand**, and **Tailwind CSS**. Users can create bookings via a form, view them in a list/dashboard, and select a booking to see a detailed view.

It is difficult to know which bits to put the most effort into in a task like this but I had fun, I have kept away from using AI for this except for looking up answers when I got stuck as some of the stack was new to me and I wanted to use it as a learning experience.

## Features

- The homepage is a list view of existing bookings listed by date order
- Form for adding new bookings
- Booking details page to view full details
- Responsive design


## Trade offs/Limitations
- Validation is very basic on the new guest form
- I haven't done anything about making sure dates are in the future, past dates will still show in the list of bookings
- The content could be better with headings and explanations of what each page is
- I could have created a mock api rather than create the seed data straight in the zustand store
- Haven't created any tests either

## Time spent
More than 3 hours, I've been tinkering with this on and off for a couple of days, I could keep going but I'm starting to run out of time now.

---



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

