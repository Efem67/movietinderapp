import React, { useState, useEffect } from "react";
import Button from "./Button";
import info from "../assets/images/info.png";
import ModalSummary from "./ModalSummary";
import { type optionConfig } from "../interfaces/Interfaces";
import { motion, AnimatePresence } from "framer-motion";

function BigPhoto(props: propsBigPhotoConfig): JSX.Element {
  const [openSummaryModal, setOpenSummaryModal] = useState(false);
  const [dragInfo, setDragInfo] = useState(0);
  const [displayingMovie, setDisplayingMovie] = useState(
    props.data[props.data.length - 1]
  );

  useEffect(() => {
    const currentMovie = props.data[props.data.length - 1];
    setDisplayingMovie(currentMovie);
  });

  const rejectMovie = (): void => {
    props.onOptionChose({
      option: "reject",
      movieId: displayingMovie.id,
    });
  };
  const acceptMovie = (): void => {
    props.onOptionChose({
      option: "accept",
      movieId: displayingMovie.id,
    });
  };

  return (
    <>
      <div className="flex flex-col w-full h-5/6 md:w-6/12 md:h-full">
        <div className="h-1/12 w-full justify-center items-center flex flex-col text-center">
          <div className="flex flex-col  w-full">
            <p className="text-xl truncate">{`${displayingMovie.title}`}</p>
            <p className="text-xl">{`(${displayingMovie.rating}/10)`}</p>
          </div>
        </div>
        <div className="h-9/12 w-full justify-center items-center flex relative">
          <div
            className={`h-11/12 w-full justify-center items-center flex relative`}
          >
            <div className="flex justify-center">
              <AnimatePresence>
                {props.data.map((movie, index) => (
                  <motion.img
                    key={movie.id}
                    src={movie.imageURL}
                    alt="Movie"
                    drag="x"
                    whileDrag={{ rotate: dragInfo / 110 }}
                    dragConstraints={{ left: 0, right: 0 }}
                    onDrag={(event, info) => {
                      setDragInfo(info.offset.x);
                    }}
                    onDragEnd={(event, info) => {
                      setDragInfo(0);
                      if (info.offset.x > 80) acceptMovie();
                      else if (info.offset.x < -80) rejectMovie();
                    }}
                    className="absolute top-0  h-full rounded-2xl cursor-pointer"
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
        <button
          onClick={() => {
            setOpenSummaryModal(true);
          }}
          className="w-full flex justify-center items-center"
        >
          <img
            src={info}
            alt="logo"
            className="h-5 w-5 rounded-2xl md:hidden flex"
          />
        </button>
        <div className="h-2/12 w-full justify-center items-start flex gap-10">
          <Button name="reject" onClick={rejectMovie} />
          <Button name="accept" onClick={acceptMovie} />
        </div>
      </div>
      <ModalSummary
        onClose={() => {
          setOpenSummaryModal(false);
        }}
        open={openSummaryModal}
        summary={displayingMovie.summary}
      ></ModalSummary>
    </>
  );
}

export default BigPhoto;

interface propsBigPhotoConfig {
  data: Array<{
    id: string;
    imageURL: string;
    title: string;
    summary: string;
    rating: number;
  }>;
  onOptionChose: (args: optionConfig) => void;
}
