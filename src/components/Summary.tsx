import React from "react";

function Summary(props: { summ: string }): JSX.Element {
  return (
    <>
      <div className="hidden flex-col w-3/12  md:flex justify-center">
        <div className="h-4/6 w-full items-center justify-center flex flex-col">
          <p className="hidden md:block">Summary</p>
          <div className="flex flex-grow p-2 w-full overflow-y-auto">
            <p className="text-sm">{props.summ}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Summary;
