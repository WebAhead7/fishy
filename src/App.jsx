import React from "react";
import Timer from "./components/Timer";
import Buttons from "./components/Buttons";
import Aquarium from "./components/Aquarium";
import "./App.css";

const gameover = new Audio("/sounds/gameover.mp3");

function App() {
  //const [id, setId] = React.useState(0);
  const [img, setImage] = React.useState("/images/fish.gif");
  const [fish, setFish] = React.useState([{ id: 0, img }]);
  const [timer, setTimer] = React.useState(10);
  const [level, setLevel] = React.useState(0);

  const [timerFlag, setTimerFlag] = React.useState(false);

  //This function returns a random num between 0 and n
  function randomNum(n) {
    return Math.floor(Math.random() * n + 1);
  }

  if (fish.length !== 0) {
    return (
      <div className="forAll">
        <div className="TA">
          <Timer
            timerFlag={timerFlag}
            setTimerFlag={setTimerFlag}
            timer={timer}
            setTimer={setTimer}
            fishArr={fish}
            setFish={setFish}
            level={level}
          />
        </div>
        <div>
          <Aquarium fishArr={fish} setTimer={setTimer} />
          <Buttons
            setTimerFlag={setTimerFlag}
            setTimer={setTimer}
            setFish={setFish}
            setImage={setImage}
            randomFunc={randomNum}
            setLevel={setLevel}
            fishArr={fish}
          />
        </div>
      </div>
    );
  } else {
    gameover.play();

    return (
      <div>
        <h1>Game Over :(</h1>
        <button onClick={() => (window.location = "/")}>Play Again</button>
      </div>
    );
  }
}

export default App;
