// CSSProperties를 react 라이브러리에서 import합니다.
import { CSSProperties } from "react";
// SNSIcon 및 SNSText 컴포넌트를 import합니다.
import SNSIcon, { SNSIconProps } from "./snsIcon";
import SNSText, { SNSTextProps } from "./snsText";

// 색상 상태 타입을 정의합니다.
type ColorStatus = {
  Facebook: "#1877F2";
  Google: "#ffffff";
  Apple: "#000000";
};

// SNSLogin 컴포넌트의 props 타입을 정의합니다.
type SNSLoginProps = {
  SNSIconP: SNSIconProps; // SNSIcon 컴포넌트에 전달될 props
  SNSTextP: SNSTextProps; // SNSText 컴포넌트에 전달될 props
  SNSColorP: keyof ColorStatus; // 색상 키
};

// SNSLogin 컴포넌트 정의
const SNSLogin = ({ SNSIconP, SNSTextP, SNSColorP }: SNSLoginProps) => {
  // 색상 객체를 정의합니다.
  const colorObj: ColorStatus = {
    Apple: "#000000",
    Facebook: "#1877F2",
    Google: "#ffffff",
  };

  // 스타일 객체를 정의합니다.
  const style: CSSProperties = {
    display: "flex",
    gap: "10px",
    borderRadius: "10px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    padding: "15px",
    backgroundColor: colorObj[SNSColorP], // 배경색은 SNSColorP 값에 따라 결정됩니다.
    width: "fit-content",
    color: "grey",
  };

  return (
    <div style={style}>
      <SNSIcon {...SNSIconP} /> {/* SNSIcon 컴포넌트를 렌더링 */}
      <SNSText {...SNSTextP} /> {/* SNSText 컴포넌트를 렌더링 */}
    </div>
  );
};

// SNSLogin 컴포넌트를 기본으로 export합니다.
export default SNSLogin;
