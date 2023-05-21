import React from "react";

function ModalSummary(props: modalPropsConfig): JSX.Element {
  return (
    <>
      <div
        className={`fixed left-0 right-0 top-0 bottom-0 bg-black bg-opacity-50  z-50 ${
          props.open ? "flex" : "hidden"
        } justify-center items-center`}
        onClick={props.onClose}
      >
        <div
          className="w-4/5 h-5/6 bg-white rounded-xl flex flex-col p-2"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="flex justify-center items-center w-full h-1/12 font-semibold">
            Summary
          </div>
          <div className="flex justify-center items-start w-full h-10/12 text-sm p-4 text-justify overflow-y-auto">
            {props.summary}
          </div>
          <div className="flex justify-center items-center w-full h-1/12">
            <button
              onClick={props.onClose}
              className=" px-6 rounded   border-blue-400 text-sm shadow-sm font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalSummary;

interface modalPropsConfig {
  summary: string;
  open: boolean;
  onClose: () => void;
}
