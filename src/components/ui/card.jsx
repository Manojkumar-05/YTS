"use client";
import { CardStack } from "./ui-comp/card-stack";
import { cn } from "@/lib/utils";

export function Cardz() {
  return (
    <div className="mt-[5rem] flex flex-col gap-10 items-center justify-center w-full">
      <p className="text-xl font-medium">Our Products </p>
      <CardStack items={CARDS} />
    </div>
  );
}

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <p>
        These cards are amazing,I want to use them in my project. Framer motion
        is a godsend ngl tbh fam 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <p>
        I dont like this Twitter thing, deleting it right away because yolo.
        Instead, I would like to call itX.com so that it can easily be confused
        with adult sites.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of Fight Club is that you do not talk about fight club.
        The second rule of Fight club is that you DO NOT TALK about fight club.
      </p>
    ),
  },
];
