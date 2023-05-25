import { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";

function Formheader() {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 1,
    seconds: 5,
  });

  useEffect(() => {
    const intervalId = setInterval(countdownHandler, 1000);

    return () => {
      clearInterval(intervalId); // Clear the interval when the component unmounts
    };
  }, []);

  const countdownHandler = () => {
    setTimeLeft((prevState) => {
      if (prevState.seconds > 0) {
        return {
          ...prevState,
          seconds: prevState.seconds - 1,
        };
      } else if (prevState.minutes > 0) {
        return {
          minutes: prevState.minutes - 1,
          seconds: 59,
        };
      } else {
        return prevState; // Timer has reached 0:00, no further updates needed
      }
    });
  };

  return (
    <div className="w-full flex items-center justify-between">
      <a href="" className="flex items-center gap-x-1.5">
        <img src={Logo} alt="logo" width={50} />
        <h5 className="font-semibold text-xl">
          AceCoin<span className="font-medium text-gray-500">Pay</span>
        </h5>
      </a>

      <div className="counter flex items-center gap-x-1">
        <div className="flex items-center">
          {String(timeLeft.minutes).split("").map((m) => (
            <span
              key={m}
              className="mx-[0.5px] text-lg font-medium px-2.5 h-10 rounded-md bg-gray-800 text-white flex items-center justify-center"
            >
              {m}
            </span>
          ))}
        </div>
        <span className="font-bold">:</span>
        <div className="flex items-center">
          {String(timeLeft.seconds).split("").map((s) => (
            <span
              key={s}
              className="mx-[0.5px] text-lg font-medium px-2.5 h-10 rounded-md bg-gray-800 text-white flex items-center justify-center"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Formheader;
