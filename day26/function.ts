//옵셔널 파라미터
function greet(name: string, greeting?: string): string {
  return `${greeting}, ${name}! : 'Hello,${name}!'`;
}

console.log(greet("강민석", "안녕"));
