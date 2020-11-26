import React from "react";
import "./style.css";

const Timer = ({ timer, setTimer, setFish, level }) => {
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

    const interval = setInterval(
      intervalFunc,
      Math.max(1000 - level * 40, 200)
    );

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
