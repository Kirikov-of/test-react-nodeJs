import React from "react";

function Timer() {
  const [timer, setTimer] = React.useState(900);
  const [change, setChange] = React.useState(true);
  const [free, setFree] = React.useState(300);

  let t = React.useRef();
  let f = React.useRef();

  const padTime = (time) => {
    return String(time).length === 1 ? `0${time}` : `${time}`;
  };

  const format = (time) => {
    const minutes = Math.floor(time / 60);

    const seconds = time % 60;

    return `${minutes}:${padTime(seconds)}`;
  };

  React.useEffect(() => {
    if (timer < 900) {
      t = setTimeout(() => setTimer((c) => c - 1), 1000);
    }

    if (!timer) {
      clearTimeout(t);
      f = setTimeout(() => setFree((c) => c - 1), 1000);
    }

    if (!free) {
      clearTimeout(f);
    }
  }, [timer, free]);

  const toggleState = () => {
    if (change) {
      setTimeout(() => setTimer((c) => c - 1), 1000);
      setChange(false);
    } else {
      clearTimeout(t);
      setChange(true);
    }
  };

  return (
    <div
      className="app__timer"
      style={{ backgroundColor: timer ? "#f05a5a" : "#43bd5e" }}
    >
      <div className="app__time">
        <h1>{timer > 0 ? format(timer) : format(free)}</h1>
      </div>
      {change ? (
        <button
          className="app__time--start"
          onClick={() => toggleState()}
          disabled={!timer || timer < timer}
        >
          Старт
        </button>
      ) : (
        <button
          className="app__time--stop"
          onClick={() => toggleState()}
          disabled={!timer}
        >
          Пауза
        </button>
      )}

      <button
        className="app__time--restart"
        onClick={() => {
          setTimer(900);
          setFree(300);
          setChange(true);
          clearInterval(f);
        }}
        disabled={!change && timer !== 0}
      >
        Рестарт
      </button>
    </div>
  );
}

export default Timer;
