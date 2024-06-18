export type TextProps = {
  Text: string;
};

export const Text = ({ Text }: TextProps) => {
  return <div>{Text}</div>;
};

export default Text;
