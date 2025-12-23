"use client";

import { useGuestStore } from "@/store/useGuestStore";
import { redirect } from "next/navigation";
import Card from "@/app/components/Card";
import LabeledInput from "@/app/components/LabeledInput";

export default function Home() {
  const addGuest = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const newGuest = {
      name: data.get("firstName") + " " + data.get("lastName"),
      checkIn: data.get("checkIn"),
      nights: parseInt(data.get("nights")),
      guests: parseInt(data.get("guests")),
      notes: data.get("notes"),
    };
    useGuestStore.getState().addGuest(newGuest);
    redirect("/");
  }

  return (
      <form onSubmit={(e) => addGuest(e)}>
        <Card>
          <LabeledInput fieldName="firstName" className="w-full sm:w-100">First name</LabeledInput>
          <LabeledInput fieldName="lastName" className="w-full sm:w-100">Last name</LabeledInput>
          <LabeledInput type="date" fieldName="checkIn" className="w-full sm:w-60">Check in</LabeledInput>
          <LabeledInput type="number" fieldName="nights" className="w-full sm:w-20">Number of nights</LabeledInput>
          <LabeledInput type="number" fieldName="guests" className="w-full sm:w-20">Number of guests</LabeledInput>
          <LabeledInput type="textarea" fieldName="notes" className="w-full">Notes</LabeledInput>

          <div className="odd:bg-lime-200 p-2 even:bg-amber-100">
            <button type="submit" className="rounded-lg bg-lime-700 p-2 text-white hover:bg-lime-800 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2">Add booking</button>
          </div>
        </Card>
      </form>
  );
}
 