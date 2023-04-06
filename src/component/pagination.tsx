import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export default function Example() {
  let [num, setNum] = useState(1);
  let [cur, setCur] = useState(1);

  const items = [
    { page: num },
    { page: num + 1 },
    { page: num + 2 },
    { page: num + 3 },
    { page: num + 4 },
  ];
  function Next() {
    setNum(++num);
  }
  function Back() {
    num > 1 && setNum(--num);
  }
  return (
    <div className="flex rounded-lg p-10 container mx-auto">
      <button
        onClick={Back}
        className="h-12 border-2 border-r-0 border-blue-800
                px-4 rounded-l-lg hover:bg-blue-600 text-blue hover:text-white"
      >
        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
      </button>
      {items.map((pg, i) => (
        <button
          key={i}
          onClick={() => setCur(pg.page)}
          className={`h-12 border-2 border-r-0 border-blue-800
          px-4 rounded-l-lg hover:bg-blue-600 text-blue  hover:text-white ${
            cur === pg.page && "bg-blue-600 text-white"
          }`}
        >
          {pg.page}
        </button>
      ))}
      <button
        onClick={Next}
        className="h-12 border-2 border-r-0 border-blue-800
        px-4 rounded-l-lg hover:bg-blue-600 text-blue hover:text-white"
      >
        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
}
