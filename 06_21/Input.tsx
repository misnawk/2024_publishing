import { log } from "console";
import { CSSProperties, ChangeEvent, useState } from "react";
import { Color } from "./PillButton";

export type InputProps = {
  placeholoder?: string;
  inputType?: "text" | "password";
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ placeholoder = "", inputType = "text" }: InputProps) => {
  const style: CSSProperties = {
    border: "1px solid bla  ck",
    outline: "none",
    backgroundColor: "#f5f5f5",
    color: "#242424",
    padding: "16px",
    fontSize: "20px",
    width: "80%",
  };

  const [input, setInput] = useState<string>("");

  //input에 글을 쓰면 콘솔에 나오도록 하시오.
  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => e.target.value);
  };

  return (
    <input
      onChange={handleOnchange}
      placeholder={placeholoder}
      style={style}
      type={inputType}
    />
  );
};
export default Input;
