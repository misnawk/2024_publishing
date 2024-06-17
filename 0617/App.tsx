// SNSLogin 컴포넌트를 import합니다. 경로는 대소문자까지 정확히 일치해야 합니다.
import SNSLogin from "./sns/snsLogin";

// Font Awesome 아이콘을 import합니다. FaApple과 FaFacebook은 각각 Apple과 Facebook의 아이콘입니다.
import { FaApple, FaFacebook } from "react-icons/fa";

// App 컴포넌트 정의
function App() {
  return (
    <div className="App">
      {/* Apple SNS 로그인 버튼 */}
      <SNSLogin
        SNSTextP={{ sns: "Apple" }} // SNSText 컴포넌트에 전달될 props
        SNSIconP={{ Icon: FaApple }} // SNSIcon 컴포넌트에 전달될 props
        SNSColorP="Apple" // SNSLogin 컴포넌트의 배경색을 결정하는 색상 키
      />
      {/* Facebook SNS 로그인 버튼 */}
      <SNSLogin
        SNSTextP={{ sns: "Facebook" }} // SNSText 컴포넌트에 전달될 props
        SNSIconP={{ Icon: FaFacebook }} // SNSIcon 컴포넌트에 전달될 props
        SNSColorP="Facebook" // SNSLogin 컴포넌트의 배경색을 결정하는 색상 키
      />
    </div>
  );
}

// App 컴포넌트를 기본으로 export합니다.
export default App;
