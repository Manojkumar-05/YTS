"use client";
import { CardStack } from "./ui-comp/card-stack";
import { cn } from "@/lib/utils";

export function Cardz() {
  return (
    <div className="mt-[5rem] flex flex-col gap-20 items-center justify-center w-full">
      <p className="text-2xl font-bold">Our Products</p>
      <CardStack items={CARDS} />
    </div>
  );
}

const CARDS = [
  {
    id: 0,
    name: "MULTI-FEATURES SHOVEL (MANVETTI) USING IoT",
    content: (
      <p>
        A versatile, IoT-enabled shovel designed for agricultural use, providing
        real-time data and enhanced functionality to streamline farming tasks.
      </p>
    ),
  },
  {
    id: 1,
    name: "ARTIFICIAL INTELLIGENCE BASED MICROPIPETTE FOR LABORATORY USAGE",

    content: (
      <p>
        A precision micropipette powered by artificial intelligence, ensuring
        accurate and efficient liquid handling for laboratory applications.
      </p>
    ),
  },
  {
    id: 2,
    name: "AUTOMATIC FINGER MILLET SEED REMOVER USING ARTIFICIAL INTELLIGENCE",

    content: (
      <p>
        An AI-driven device that automates the removal of finger millet seeds,
        improving productivity and reducing manual labor in agricultural
        processes.
      </p>
    ),
  },
  {
    id: 3,
    name: "TRANSMISSION LINE BREAKAGE AND FAULT DETECTION USING IoT",

    content: (
      <p>
        A sophisticated IoT solution for monitoring transmission lines, enabling
        rapid detection and response to breakages and faults, ensuring reliable
        power distribution.    </p>
    ),
  },
  {
    id: 4,
    name: "AUTOMATIC PEARL MILLET SEED REMOVER USING ARTIFICIAL INTELLIGENCE",

    content: (
      <p>
        An intelligent machine designed to automatically remove pearl millet
        seeds, increasing efficiency and reducing the need for manual
        intervention in agriculture.
      </p>
    ),
  },
];
