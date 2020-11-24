import React from "react";

import "./style.css";
// creating a component(function) for the buttons, we have 2 buttons:
// 1. feed button-> increases the timer with 20.
// 2. add fish button -> adds an elemnt to the array of fish

// props from the app.js file: timer (var), setTimer, setFish
// in app.js <Buttons timer={timer}, setTimer={setTimer}, setfish ={setFish}

const countFish = 5; //number of fish user can add
const Buttons = (props) => {
  const handleTimer = () => {
    props.setTimer((oldTimer) => {
      if (oldTimer >= 80) {
        return 100;
      } else {
        return oldTimer + 20;
      }
    });
  };

  const handleFish = () => {
    props.setFish = (oldArrFish) => {
      if (countFish >= 0 && countFish <= 5) {
        countFish--;
        return oldArrFish.push("fish");
      }
    };
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
