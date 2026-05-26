import { create } from "zustand";

export const useGuestStore = create((set) => ({
  guests: [
    { id: 1, name: "Alan Partridge", checkIn: "2026-06-12", nights: 3000, guests: 1, notes: "Smells of cabbage" },
    { id: 2, name: "Lynn Benfield", checkIn: "2026-07-01", nights: 2, guests: 2, notes: "Sharing a room with her mum" },
    { id: 3, name: "Bob Mortimer", checkIn: "2026-11-20", nights: 5, guests: 1, notes: "Wants a room with a view of a lake" },
  ],

  addGuest: (newGuest) =>
    set((state) => {
      const lastId = state.guests.length
        ? Math.max(...state.guests.map((g) => g.id))
        : 0;

      const guestToAdd = { id: lastId + 1, ...newGuest };

      return { guests: [...state.guests, guestToAdd].sort((a, b) => a.checkIn.localeCompare(b.checkIn)) };
    }),
}));