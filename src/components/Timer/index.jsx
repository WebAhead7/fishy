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

  React.useEffect(() => {
    const intervalFunc = () => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          setFish((oldArr) => {
            return oldArr.slice(1, oldArr.length);
          });
        }
        return prevTimer - 1;
      });
    };

    const interval = setInterval(intervalFunc, 1000 - level * 50);

    // if (timerFlag) {
    //   timerFlag = false;
    //   return () => clearInterval(interval);
    // }

    return () => {
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
