"use client";

import { useGuestStore } from "@/store/useGuestStore";
import { useParams } from "next/navigation";
import Card from "@/app/components/Card";
import formatDate from "@/app/helpers/formatDate";

export default function Home() {
  const {id} = useParams(); 
  const guest = useGuestStore((s) => s.guests.find((g) => g.id.toString() === id));

  if (!guest) {
    return <p>Unable to find guest details</p>;
  }

  return (
      <Card>
        <p className="odd:bg-lime-200 even:bg-amber-100 p-2">
          <strong>Name: </strong>{guest.name}
        </p>
        <p className="odd:bg-lime-200 even:bg-amber-100 p-2">
          <strong>Check-in date: </strong>{formatDate(guest.checkIn)}
        </p>
        <p className="odd:bg-lime-200 even:bg-amber-100 p-2">
          <strong>Number of nights: </strong>{guest.nights.toString()}
        </p>
        <p className="odd:bg-lime-200 even:bg-amber-100 p-2">
          <strong>Number of guests: </strong>{guest.guests.toString()}
        </p>
        <p className="odd:bg-lime-200 even:bg-amber-100 p-2">
          <strong>Notes: </strong>{guest.notes ? guest.notes : "None"}
        </p>
      </Card>
  );
}
 