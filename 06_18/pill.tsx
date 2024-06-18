import { CSSProperties } from "react";
import Circle, { Color } from "./pillCircle";
import Text, { TextProps } from "./pillText";

type PillProps = {
  CircleColor: Color;
  TextContent: TextProps;
};

const Pill = ({ CircleColor, TextContent }: PillProps) => {
  const style: CSSProperties = {
    border: "1px solid #E0E0E0",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    gap: "3px",
    width: "150px",
  };

  return (
    <div style={style}>
      <Circle backgroundColor={CircleColor} />
      <Text Text={TextContent.Text} />
      <Circle hasCancel={true} />
    </div>
  );
};
export default Pill;
