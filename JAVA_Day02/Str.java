package JAVA_Day02;

public class Str {
    public static void main(String[] args) {


        // 상수풀
        /*
        * 자바 상수 풀은 상수 값을 저장하는 메모리 영역입니다.
        주로 런타임 상수 풀과 문자열 상수 풀이 있습니다.
        상수 풀을 사용하면 메모리를 절약하고 성능을 향상시킬 수 있습니다.
        문자열 상수 풀은 동일한 문자열 리터럴을 공유하여 메모리를 효율적으로 사용합니다.
        * */
        String name = "umm";
        String name1 = "umm";

        System.out.println(name == name1);

        String name2 = new String ("kim");
        String name3 = new String("kim");

        System.out.println(name2 == name3);
    }
}
