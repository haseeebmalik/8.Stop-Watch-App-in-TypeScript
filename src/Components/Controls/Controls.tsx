import React, { useState } from "react";
import "./Controls.css";
type Props = {
  setTimeInSeconds: Function;
};

function Controls(props: Props) {
  const { setTimeInSeconds } = props;
  const [intervalId, setIntervalId] = useState<number>(0);

  const handlePlayButton = () => {
    let interval: any = setInterval(() => {
      setTimeInSeconds((previousState1: number) => previousState1 + 1);
    }, 1000);

    setIntervalId(interval);
  };

  const handleStopButton = () => {
    clearInterval(intervalId);
  };

  const handleResetButton = () => {
    clearInterval(intervalId);
    setTimeInSeconds(0);
  };
  return (
    <div className="controls-container">
      <button onClick={handlePlayButton}>start</button>
      <button onClick={handleStopButton}>stop</button>
      <button onClick={handleResetButton}>reset</button>
    </div>
  );
}

export default Controls;
