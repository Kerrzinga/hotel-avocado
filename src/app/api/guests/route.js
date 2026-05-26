  const guests = [
    { id: 1, name: "Alan Partridge", checkIn: "2026-06-12", nights: 3000, guests: 1, notes: "Smells of cabbage" },
    { id: 2, name: "Lynn Benfield", checkIn: "2026-07-01", nights: 2, guests: 2, notes: "Sharing a room with her mum" },
    { id: 3, name: "Bob Mortimer", checkIn: "2026-11-20", nights: 5, guests: 1, notes: "Wants a room with a view of a lake" },
  ];

  export async function GET() {
    await new Promise((r) => setTimeout(r, 300));
    return Response.json(guests);
  }