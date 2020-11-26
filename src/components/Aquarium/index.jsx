import React from "react";
import "./style.css";

const Aquarium = React.memo((props) => {
  //This function returns a random number between two specific numbers
  function randomNumBetweenTwo(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  //This function returns a random num between 0 and n
  function randomNum(n) {
    return Math.floor(Math.random() * n + 1);
  }

  React.useEffect(() => {
    props.setTimer(10);
  }, [props.fishArr]);

  return (
    <div className="aquarium">
      {props.fishArr.map((elem) => {
        return (
          <img
            key={elem.id}
            className="fish"
            src={elem.img}
            style={{
              animationDuration: randomNumBetweenTwo(3, 10) + "s",
              marginTop: randomNum(500) + "px",
            }}
          />
        );
      })}
    </div>
  );
});
export default Aquarium;
