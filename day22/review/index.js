const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Alice", age: 30 },
  { id: 3, name: "Alice", age: 35 },
];

const Kim = { name: "김민재", age: 27, position: "center back" };
const { name: koreaName, position: soccerPosition } = Kim;

const koreaDefender = {
  koreaName,
  soccerPosition,
};

console.log(koreaDefender);

//1.renaming
users.map(({ id: userId, name: userName, age: userAge }) => ({
  userId,
  userName,
  userAge,
}));
