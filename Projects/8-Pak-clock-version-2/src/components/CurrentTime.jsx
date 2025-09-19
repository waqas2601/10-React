import { useEffect, useState } from "react";

let CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("Component unmounted, interval cleared");
    };
  }, []);
  return (
    <p>
      This is the current time: {time.toLocaleDateString()} --{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
