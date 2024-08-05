import { CardStack } from "./ui-comp/card-stack";

export function Cardz() {
  return (
    <div className="mt-[5rem] flex flex-col gap-10 items-center justify-center w-full">
      <p className="text-2xl font-bold text-black">Our Products</p>
      <CardStack items={CARDS} />
    </div>
  );
}

const CARDS = [
  {
    id: 0,
    name: "Multi-features shovel (Manvetti) using IoT",
    content: (
      <p>
        A versatile, IoT-enabled shovel designed for agricultural use, providing
        real-time data and enhanced functionality to streamline farming tasks.
      </p>
    ),
  },
  {
    id: 1,
    name: "Artificial intelligence based micropipette for laboratory usage",
    content: (
      <p>
        A precision micropipette powered by artificial intelligence, ensuring
        accurate and efficient liquid handling for laboratory applications.
      </p>
    ),
  },
  {
    id: 2,
    name: "Automatic finger millet seed remover using artificial intelligence",
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
    name: "Transmission line breakage and fault detection using IoT",
    content: (
      <p>
        A sophisticated IoT solution for monitoring transmission lines, enabling
        rapid detection and response to breakages and faults, ensuring reliable
        power distribution.
      </p>
    ),
  },
  {
    id: 4,
    name: "Automatic pearl millet seed remover using artificial intelligence",
    content: (
      <p>
        An intelligent machine designed to automatically remove pearl millet
        seeds, increasing efficiency and reducing the need for manual
        intervention in agriculture.
      </p>
    ),
  },
];
