import React from "react";
import "./slot.css";
import { SlotM } from "./SlotM";

function Slot() {
  return (
    <div>
      <h1 className="heading_style">
        🎰 Welcome to
        <span style={{ fontWeight: "bolder" }}> Slot Machine Game</span>
        🎰
      </h1>
      <div className="slotmachine" style={{ backgroundColor: "lightgrey" }}>
        <SlotM x="🎅" y="🎅" z="🎅"></SlotM>
        <SlotM x="🎅" y="🎅" z="😄"></SlotM>
        <SlotM x="🍎" y="🍎" z="🍎"></SlotM>
      </div>
    </div>
  );
}
export { Slot };
