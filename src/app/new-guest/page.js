"use client";

import Card from "@/app/components/Card";
import LabeledInput from "@/app/components/LabeledInput";
import { redirect } from "next/navigation";
import { useGuestStore } from "@/store/useGuestStore";
import router from "next/router";
import { useState } from "react";

export default function Home() {
  const [errors, setErrors] = useState({});


  const addGuest = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const firstName = String(data.get("firstName") ?? "").trim();
    const lastName  = String(data.get("lastName") ?? "").trim();
    const checkIn   = String(data.get("checkIn") ?? "").trim();
    const nightsRaw = String(data.get("nights") ?? "").trim();
    const guestsRaw = String(data.get("guests") ?? "").trim();
    const notes     = String(data.get("notes") ?? "").trim();
    const nights = Number.parseInt(nightsRaw, 10);
    const guests = Number.parseInt(guestsRaw, 10);

    const currentErrors = {};
    if (!firstName) currentErrors.firstName = "Enter a first name";
    if (!lastName) currentErrors.lastName = "Enter a last name";
    if (!checkIn) currentErrors.checkIn = "Select a check-in date";
    if (!Number.isInteger(nights) || nights <= 0) currentErrors.nights = "Enter nights (1 or more)";
    if (!Number.isInteger(guests) || guests <= 0) currentErrors.guests = "Enter guests (1 or more)";

    setErrors(currentErrors);

    if (Object.keys(currentErrors).length > 0) return;

    const newGuest = {
      name: `${firstName} ${lastName}`,
      checkIn,
      nights,
      guests,
      notes,
    };

    useGuestStore.getState().addGuest(newGuest);
    router.push("/");
  }

  return (
      <form onSubmit={(e) => addGuest(e)}>
        <Card>
          <LabeledInput fieldName="firstName" className="w-full sm:w-100" error={errors?.firstName}>First name</LabeledInput>
          <LabeledInput fieldName="lastName" className="w-full sm:w-100" error={errors?.lastName}>Last name</LabeledInput>
          <LabeledInput type="date" fieldName="checkIn" className="w-full sm:w-60" error={errors?.checkIn}>Check in</LabeledInput>
          <LabeledInput type="number" fieldName="nights" className="w-full sm:w-20" error={errors?.nights}>Number of nights</LabeledInput>
          <LabeledInput type="number" fieldName="guests" className="w-full sm:w-20" error={errors?.guests}>Number of guests</LabeledInput>
          <LabeledInput type="textarea" fieldName="notes" className="w-full" error={errors?.notes}>Notes</LabeledInput>

          <div className="odd:bg-lime-200 p-2 even:bg-amber-100">
            <button type="submit" className="rounded-lg bg-lime-700 p-2 text-white hover:bg-lime-800 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2">Add booking</button>
          </div>
        </Card>
      </form>
  );
}
 