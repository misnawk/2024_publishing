import { backendDate } from "./data.js";

backendDate;

//1. id, curreny, money, phone 만 콘솔로 가져오기
//2. animalName->{animal, car : {make, model, year}} 콘솔로
//3. ipaddress가 맨 마지막 세자리가 합이 10 이하이면, id, color만 콘솔로찍기
//4. TimeZone이 알파벳 모음으로 시작하면, {timezone,carmake,phone앞 세자리만 가져오기}
//5. money가 50000엔 이상이면, phone[하이폰제거]과 appName[대문자화하고] 가져오기

//1번
const a = backendDate.map(({ id, Currency, money, Phone }) => ({
  id,
  Currency,
  money,
  Phone,
}));
console.log(a);

//2번
const b = backendDate.map(
  ({ AnimalName, carMake, carModel, carModelYear }) => ({
    animal: AnimalName,
    car: { carMake, carModel, carModelYear },
  })
);
console.log(b);

//3번
const c = backendDate.filter(({ ipAddress }) => {
    const ipArr = [...ipAddress];
    
});
