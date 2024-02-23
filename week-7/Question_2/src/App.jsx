import React from "react";
import "./App.css";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { colorFamily } from "./atoms";

function ColorButton({ id, color }) {
  const setValue = useSetRecoilState(colorFamily(0));

  function buttonClick() {
    setValue({ id });
  }
  let textColor =
    color.toLowerCase() === "black" ||
    color.toLowerCase() === "red" ||
    color.toLowerCase() === "blue"
      ? "white"
      : "black";

  return (
    <button
      onClick={buttonClick}
      style={{
        backgroundColor: color,
        color: textColor,
        border: "none",
        borderRadius: "10px",
        width: "100px",
        cursor: "pointer",
        height: "30px",
        marginRight: "20px",
      }}
    >
      {color}
    </button>
  );
}

function App() {
  const [value] = useRecoilState(colorFamily(0));

  return (
    <>
      <ColorDiv id={value.id} />
      <div className="buttonDiv">
        <ColorButton id={1} color="Red" />
        <ColorButton id={2} color="Yellow" />
        <ColorButton id={3} color="Black" />
        <ColorButton id={4} color="Purple" />
        <ColorButton id={5} color="Green" />
        <ColorButton id={6} color="Blue" />
        <ColorButton id={7} color="Orange" />
      </div>
    </>
  );
}

function ColorDiv({ id }) {
  const value = useRecoilValue(colorFamily(id));
  return (
    <div
      style={{
        backgroundColor: value.color,
        width: "100vw",
        height: "100vh",
      }}
    ></div>
  );
}

export default App;
