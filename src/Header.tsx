import React from "react";
import { changeColorDay } from "./util/Color";

const Header = () => {
  const [year, month, date] = new Date()
    .toLocaleString()
    .replaceAll(".", "")
    .split(" ");

  const day = new Date().getDate();
  return (
    <div>
      <span> 오늘 할일</span>
      <span style={{ color: changeColorDay(day) }}>
        {year} {month} {date}
      </span>
    </div>
  );
};

export default Header;
