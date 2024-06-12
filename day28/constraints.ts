//constraints[제약, 규제]

type MainColor = "Pink" | "Red" | "Orange";
type FontSize = 16 | 20;

type Warnbutton<T extends MainColor> = {
  backgroundColor: T;
  FontSize: FontSize;
};

const button: Warnbutton<"Pink"> = {
  backgroundColor: "Pink",
  FontSize: 16,
};

const newBtn = document.createElement("button");
newBtn.style.backgroundColor = button.backgroundColor;

//////////////////////////////////////////////////////////////////////////////////

type ID = string | number;
type Entity<T extends ID> = {
  id: T;
  password: string;
};

const admin: Entity<string> = {
  id: "koreaIT",
  password: "qwer",
};

///////////////////////////////////////////

//type assetion : 타입 단언

const box1 = document.querySelector(".box") as HTMLDivElement;
