import React from "react";
import "./slotm.css";

function SlotM(props) {
  //   let x = "😄";
  //   let y = "😄";
  //   let z = "😄";
  let x = props.x;
  let y = props.y;
  let z = props.z;

  if (x === y && y === z) {
    return (
      <>
        <div className="slotstyle">
          <h1 className="slotheading">
            {x} {y} {z}
          </h1>
          <h1>This is Matching</h1>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="slotstyle">
          <h1>
            {x} {y} {z}
          </h1>
          <h1>This is Not Matching</h1>
        </div>
      </>
    );
  }
}
export { SlotM };
