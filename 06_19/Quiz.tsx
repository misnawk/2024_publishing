import { useState } from "react";

const quiz = () => {
  const [count, setcount] = useState<number>(0);

  const handleUP = () => {
    setcount((upPrev) => upPrev + 1);
  };

  const handleDown = () => {
    setcount((downPrev) => (downPrev > 0 ? downPrev - 1 : 0));
  };

  return (
    <div>
      <button onClick={handleUP}>+</button>
      {count}
      <button onClick={handleDown}>-</button>
    </div>
  );
};

export default quiz;
