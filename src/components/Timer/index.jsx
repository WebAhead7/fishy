import React from "react";
import "./style.css";

const Timer = ({
  timer,
  setTimer,
  setFish,
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
<<<<<<< HEAD

    const interval = setInterval(intervalFunc, 1000 - level * 50);
=======
    
    const interval = setInterval(intervalFunc, Math.max(1000 - level * 40, 200));
    console.log("popo");
>>>>>>> 167ae3f71abc62c48cef0b0d414f7657ce1f9195

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
