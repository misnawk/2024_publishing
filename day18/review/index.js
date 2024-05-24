// 기본 : String, number,null, undefined,boolean
// 참조 : array, element, object, function

// 기본타입 변환 : String()/"", Number()/123, Boolean()/!!,
// 참조 타입변환 : Array()/[], Function()/()=>{}, object()/{}

// 1. function name (x,y){return ?}
// 2. [화살표함수] const name = (x) => {return ?}
// 3. [익명함수(이름없는)함수]
// [1. 일회성, 2.이벤트성]
// 3-1 function (){}
// 3-2 ()=>{}

const arr = Array(1000)
  .fill(1) // 1로 가득채운다
  .map((v, i) => i);

const airplane = {
  name: "보잉704",
  company: "에어서울",
  passengers: 200,
  airport: {
    start: "인천공항",
    end: "나리타공항",
  },    
};


