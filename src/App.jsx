import React from "react";
import Timer from "./components/Timer";
import Buttons from "./components/Buttons";
import Aquarium from "./components/Aquarium";

import "./App.css";

function App() {
  return (
    <div>
      <div>
        <Timer />
        <Aquarium />
      </div>
      <div>
        <Buttons />
      </div>
    </div>
  );
}

export default App;
