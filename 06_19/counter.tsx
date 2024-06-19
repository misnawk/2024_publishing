import { useState } from "react";

type Ummprops = {};

const Counter = () => {
  //useState 초기값
  const [num, setNum] = useState(0);
  const handleClick = () => {
    setNum((prev) => prev + 1);
  };
  return <div onClick={handleClick}>{num}</div>;
};

export default Counter;
