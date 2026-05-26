"use client";

import { useGuestStore } from "@/store/useGuestStore";
import Link from "next/link";
import Card from "@/app/components/Card";
import LinkBtn from "@/app/components/LinkBtn";
import formatDate from "@/app/helpers/formatDate";

export default function Home() {
  const guests = useGuestStore((s) => s.guests);

  return (
    <div id="dashboard">
      <Card>
        <table className="border-collapse w-full">
          <thead className="bg-lime-700 text-white">
            <tr>
              <th className="text-left p-2">Name</th>
              <th className="p-2">Check in</th>
              <th className="p-2 hidden sm:table-cell">Nights</th>
              <th className="p-2 hidden sm:table-cell">Guests</th>
              <th className="p-2 hidden sm:table-cell"><span className="sr-only">Actions</span></th>
            </tr>
          </thead>
          <tbody>
            {guests.map((guest) => (
              <tr key={guest.id} className="odd:bg-lime-200 even:bg-amber-100 text-center">
                <td className="p-2 text-left">
                  <span className="hidden sm:inline">{guest.name}</span>
                  <Link href={`/guest-details/${guest.id}`} className="underline inline sm:hidden">{guest.name}</Link>
                </td>
                <td className="p-2">{formatDate(guest.checkIn)}</td>
                <td className="p-2 hidden sm:table-cell">{guest.nights.toString()}</td>
                <td className="p-2 hidden sm:table-cell">{guest.guests.toString()}</td>
                <td className="p-2 hidden sm:table-cell">
                  <LinkBtn href={`/guest-details/${guest.id}`}>View details</LinkBtn>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={`p-2 ${ (guests.length % 2) === 0 ? "bg-lime-200" : "bg-amber-100" }`}>
          <LinkBtn href="/new-guest" className="w-full sm:w-auto">Add new booking</LinkBtn>
        </div>
      </Card>
    </div>
  );
}
 