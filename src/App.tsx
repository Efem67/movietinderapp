import React from "react";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import useGetData from "./hooks/useGetData";

function App(): JSX.Element {
  const [data, isLoading, error] = useGetData();

  if (isLoading || error !== null) {
    return (
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <Navbar />
        {isLoading ? "Fetching data right now" : "ERROR: Can not fetch data"}
      </div>
    );
  } else {
    return (
      <div className="h-screen flex flex-col">
        <Navbar />
        <MainSection data={data} />
      </div>
    );
  }
}

export default App;
