import React from "react";
import "./style.css";

const Timer = ({
  timer,
  setTimer,
  fishArr,
  setFish,
  timerFlag,
  setTimerFlag,
  level,
}) => {
  //setInterval

  console.log("HERE IS THE LEVEL:", level);
  React.useEffect(() => {
    console.log("YYYYYYYYYYYYYY", timer);

    const intervalFunc = () => {
      setTimer((prevTimer) => {
        console.log(prevTimer);
        if (prevTimer === 0) {
          setFish((oldArr) => {
            return oldArr.slice(1, oldArr.length);
          });
        }
        return prevTimer - 1;
      });
    };

    const interval = setInterval(
      intervalFunc,
      1000 - level * fishArr.length * 100
    );
    console.log("popo");

    // if (timerFlag) {
    //   timerFlag = false;
    //   return () => clearInterval(interval);
    // }

    return () => {
      console.log("mar7aba ");
      clearInterval(interval);
    };
  }, [level]);

  return (
    <div className="TimingScale">
      <progress max="10" value={timer}></progress>
    </div>
  );
};

export default Timer;
