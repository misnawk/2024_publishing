const user = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charile", age: 35 },
];

const a = user.map((v) => ({ name: v.name }));
const b = user.map((v) => ({ name: v.name, age: v.age }));
const c = user.map(({ name, age }) => ({ name, age }));
const d = user.map(({ name: nickName, age: koreaAge }) => ({
  nickName,
  koreaAge,
}));
const e = user.map(({ name, age }) => ({ nickName: name, koreaAge: age }));

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
