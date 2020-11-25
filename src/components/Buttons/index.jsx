import React from "react";
import { v4 } from "uuid";
import "./style.css";
// creating a component(function) for the buttons, we have 2 buttons:
// 1. feed button-> increases the timer with 20.
// 2. add fish button -> adds an elemnt to the array of fish

// props from the app.js file: timer (var), setTimer, setFish
// in app.js <Buttons timer={timer}, setTimer={setTimer}, setfish ={setFish}
const fishImages = ["/images/fish.gif", "/images/fish2.gif"];
//let countFish = 5; //number of fish user can add

const Buttons = (props) => {
  const handleTimer = () => {
    props.setTimerFlag(true);
    props.setTimer((oldTimer) => {
      if (oldTimer >= 8) {
        return 10;
      } else {
        return oldTimer + 2;
      }
    });
  };

  const handleFish = () => {
    const img = fishImages[0];
    const id = v4();
    props.setFish((oldArrFish) => {
      return oldArrFish.concat({
        id: id,
        img: img,
      });
    });
    props.setLevel((oldLevel) => {
      oldLevel = props.fishArr.length;
      return oldLevel;
    });
  };

  return (
    <div className="buttons-section">
      <button className="button" onClick={handleTimer}>
        Feed
      </button>
      <button className="button" onClick={handleFish}>
        Add Fish
      </button>
    </div>
  );
};

export default Buttons;
