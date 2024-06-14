import { CSSProperties } from "react";

export type CategoryButtonProps = { //타입을 지정
  color?: string; //String 타입일수도 있고 null일수도있다.
  content: string; // string 타입이다.
};

//categoryButton
const CategoryButton = ({ color = "gray", content }: CategoryButtonProps) => {
  const style: CSSProperties = {
    color,
  };
  return <div style={style}>{content}</div>;
};

export default CategoryButton;
