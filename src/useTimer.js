import { useState, useRef } from "react";
import Split from "./Split";
const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);

  const { setSplits } = Split()
  const isStart = useRef(true);
  const active = useRef();
  const refInterval = useRef(0);

  const startTimer = () => {
    isStart.current = true;
    active.current.disabled = true;
    refInterval.current = setInterval(() => {
      if (isStart) {
        setTime((time) => time + 1)
      }
    }, 1000)
  };
  const stopTimer = () => {
    active.current.disabled = false;
    isStart.current = false;
    clearInterval(refInterval.current);
  };
  const resetTimer = () => {
    setTime(0);
    isStart.current = false;
    clearInterval(refInterval.current);
    active.current.disabled = false;
    setSplits([])
  };



  return { time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;
