package JAVA_Day02;

public class Condition1 {
    public static void main(String[] args) {

        String day = "월";
        
        switch (day){   // 정수, 문자열
            case"월":
                System.out.println("월요병 걸리는날");
                break;
            case"화":
                System.out.println("화요병 걸리는날");
                break;
            case"수":
                System.out.println("수요병 걸리는날");
                break;
            case"목":
                System.out.println("목요병 걸리는날");
                break;
            case"금":
                System.out.println("금요일 해피해피");
                break;
            default:
                System.out.println("주말임 ㅅㄱ");
                break;
        }
    }
}
