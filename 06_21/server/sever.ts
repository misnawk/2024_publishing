const express = require("express");
const app = express();
const cors = require("cors");


//1.get:[데이터 가져오기] 2.post[데이터 보내기]
app.post("/api/student", (req: any, res: any) => {
  const { name } = req.body;
  console.log(name);
});

app.listen(3001, () => {
  console.log("서버시작함ㅅㄱ");
});
