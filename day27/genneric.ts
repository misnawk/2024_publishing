//generic : 입구컷

type Fruit_ = {
  name: string;
  kcal: number;
};

function getSomething<T>(something: T) {
  console.log(`${something}을 얻습니다.`);
}
getSomething<String>("과일");
getSomething<Number>(3);
getSomething<boolean>(true);
getSomething<string | number>(1);

const getSomething1 = <T>(something: T) => {
  console.log(`${something}을 얻습니다.`);
};
getSomething1<string>("탕후루루");
