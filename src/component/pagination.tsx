import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const Example = ({ pages = [1], cur = 1, nextPage, prevPage, setCur }: any) => {
  return (
    <div className="p-20 mx-auto flex rounde-lg font-semibold">
      <button
        onClick={prevPage}
        className="h-12 border-2 border-r-0 border-grey-600
                px-4 rounded-l-lg hover:bg-grey-500 hover:bg-slate-400"
      >
        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
      </button>
      {pages.map((pg: number) => (
        <button
          key={pg}
          onClick={setCur}
          className={`h-12 border-2 border-r-0 border-grey-600
              w-12 to-blue-950 ${cur === pg && "bg-slate-400 "}`}
        >
          {pg}
        </button>
      ))}
      <button
        onClick={nextPage}
        className="h-12 border-2 border-r-0 border-grey-600
                px-4 rounded-l-lg hover:bg-slate-400"
      >
        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
};
export default Example;
