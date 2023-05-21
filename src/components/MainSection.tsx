import React, { useState } from "react";
import RemainingPhotos from "./RemainingPhotos";
import BigPhoto from "./BigPhoto";
import Summary from "./Summary";
import {
  type optionConfig,
  type importDataConfig,
} from "../interfaces/Interfaces";

function MainSection(props: { data: importDataConfig[] }): JSX.Element {
  const [dataArr, setdataArr] = useState<importDataConfig[]>(props.data);

  const makePutReq = async (args: optionConfig): Promise<void> => {
    const url = `http://localhost:5000/recommendations/${args.movieId}/${args.option}`;
    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  const optionChose = async (args: optionConfig): Promise<void> => {
    const newData: importDataConfig[] = dataArr.filter(
      (movie) => movie.id !== args.movieId
    );

    setdataArr(newData);
    await makePutReq(args);
  };

  if (dataArr.length > 0) {
    return (
      <>
        <div className="flex flex-col-reverse flex-grow md:flex-row font-quicksand overflow-hidden p-4">
          <RemainingPhotos
            data={dataArr.map((el) => ({ id: el.id, imageURL: el.imageURL }))}
          />
          <BigPhoto
            data={dataArr}
            onOptionChose={(args: optionConfig) => {
              optionChose({ option: args.option, movieId: args.movieId }).catch(
                (e) => {
                  console.log(e);
                }
              );
            }}
          />
          <Summary summ={dataArr[dataArr.length - 1].summary} />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="w-full h-full flex justify-center items-center font-quicksand text-2xl">
          Movies to watch are over
        </div>
      </>
    );
  }
}

export default MainSection;
