import { useState } from "react";

const colorButtons = [
  {
    title: "Red",
    hex: "red",
  },
  {
    title: "Green",
    hex: "green",
  },
  {
    title: "Blue",
    hex: "blue",
  },
  {
    title: "Olive",
    hex: "olive",
  },
  {
    title: "Gray",
    hex: "gray",
  },
  {
    title: "Yellow",
    hex: "yellow",
  },
  {
    title: "Pink",
    hex: "pink",
  },
  {
    title: "Purple",
    hex: "purple",
  },
  {
    title: "Lavender",
    hex: "lavender",
  },
  {
    title: "White",
    hex: "white",
  },
  {
    title: "Black",
    hex: "black",
  },
];

const App = () => {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-screen h-screen relative"
        style={{ backgroundColor: color }}>
        <div className="max-w-6xl w-full p-3 bg-white absolute bottom-14 left-1/2 -translate-x-1/2 rounded-xl flex gap-3 flex-wrap">
          {colorButtons.map((colorButton) => (
            <button
              key={colorButton.title}
              onClick={() => setColor(colorButton.hex)}
              style={{ backgroundColor: `${colorButton.hex}` }}
              className={`w-[90px] py-3 rounded-3xl ${
                colorButton.hex === "white" ? "text-black" : "text-white"
              }`}>
              {colorButton.title}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
