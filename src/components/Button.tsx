import React, { useState, useEffect } from "react";

function Button(props: propsConfig): JSX.Element {
  const [imageSrc, setImageSrc] = useState();

  useEffect(() => {
    const importImage = async (): Promise<void> => {
      const importedImage = await import(`../assets/images/${props.name}.png`);
      setImageSrc(importedImage.default);
    };

    importImage().catch((error: string): void => {
      console.log(error);
    });
  }, []);

  return (
    <>
      <button
        onClick={props.onClick}
        className={`flex flex-col justify-center items-center ${
          props.name === "accept" ? "drop-shadow-accept" : "drop-shadow-reject"
        }`}
      >
        <img
          src={imageSrc}
          alt={props.name}
          className="w-14 h-14 md:w-16 md:h-16 "
        />
        <p className="md:block hidden"></p>
      </button>
    </>
  );
}

export default Button;

interface propsConfig {
  name: "accept" | "reject";
  onClick: () => void;
}
