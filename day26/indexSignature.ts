type Coffe = {
  [key: string]: number; //키값을 문자로 밸류를 숫자로 지정한다.
};

type Person = {
  name: string;
  age: number;
  nation?: string; //물음표를 사용하면 NULL값일수도 있고 없을수도있다 라는 뜻.
};

const test: Coffe = {
  name: 1,
  shot: 2,
  kcal: 3,
};

const kim: Person = {
  name: "김씨",
  age: 22,
  nation: "한국",
};

type Unit = {
  [key: string]: string | number | null | undefined;
  name: string;
  hp: number;
  pet?: string;
};

interface Bread  {
  name: string;
  price: number;
}

type abc = keyof Bread; //'name' | 'price'
const apple: abc = "price";
