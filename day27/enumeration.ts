//enumeration.ts 나열한다는 뜻

enum Direciton {
  East,
  West,
  South,
  North,
}

const dir: Direciton = Direciton.East;
console.log(dir);

enum HttpStatus {
  Ok,
  NotFound,
}
const response: HttpStatus = HttpStatus.Ok;

enum Status {
  Pending,
  InProgress,
  Completed,
  Failed,
}

const getStatus = (status: Status): string => {
  switch (status) {
    case Status.Pending:
      return "작업대기중";
    case Status.InProgress:
      return "작업진행중";
    case Status.Completed:
      return "작업완료";
    case Status.Failed:
      return "작업 실패";
    default:
      return "알 수 없는 상태";
  }
};
