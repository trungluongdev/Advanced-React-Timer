import useTimer from "./useTimer";
import { formatTime } from "./formatTime";
import Split from "./Split";
function App() {
  const { time, startTimer, stopTimer, resetTimer, active } = useTimer(0);
  const { splits, addSplit, setSplits } = Split()


  const splitTimer = () => {
    addSplit(time);
  };

  const handleClear = () => {
    setSplits([])
  }
  return (
    <div className="App container">
      <h1>Updated Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{formatTime(time)}</p>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button
            className="button"
            ref={active}
            onClick={startTimer}
          >
            Start
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
          <button className="button" onClick={splitTimer}>
            Split
          </button>
        </div>
        <div className="split__wrapper">
          {splits.map((split, index) => (
            <p key={index}>{split}</p>
          ))}
        </div>
        <button className="button " onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
