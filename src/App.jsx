import React from "react";
import Timer from "./components/Timer";
import Buttons from "./components/Buttons";
import Aquarium from "./components/Aquarium";

import "./App.css";

function App() {
  const [fish, setFish] = React.useState([]);
  const [timer, setTimer] = React.useState(100);

  return (
    <div>
      <div>
        <Timer />
        <Aquarium fishArr={fish} />
      </div>
      <div>
        <Buttons />
      </div>
    </div>
  );
}

export default App;
