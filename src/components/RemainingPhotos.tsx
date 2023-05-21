import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function RemainingPhotos(props: propsRemainingPhotosConfig): JSX.Element {
  return (
    <>
      <div className="w-full h-1/6 flex flex-col md:h-full md:w-3/12 justify-center">
        <div className="h-4/6 w-full items-center justify-center flex flex-col">
          <p className="text-sm md:text-base">Remaining</p>
          <div className="flex flex-grow w-full flex-row md:flex-col items-center justify-center md:justify-start p-2">
            <AnimatePresence>
              {props.data.map((movie, index: number) => (
                <motion.img
                  key={movie.id}
                  src={movie.imageURL}
                  alt="Movie"
                  className={`w-12 h-16 md:w-24 md:h-28 rounded ${
                    index === 0 ? "ml-0" : "-ml-8 md:ml-0 md:-mt-14"
                  } ${
                    index === props.data.length - 1
                      ? "rotate-6 md:rotate-3"
                      : "rotate-0 blur-xs"
                  }`}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.2 },
                  }}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}

export default RemainingPhotos;
interface propsRemainingPhotosConfig {
  data: Array<{
    id: string;
    imageURL: string;
  }>;
}
