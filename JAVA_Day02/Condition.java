package JAVA_Day02;

import java.util.Scanner;

public class Condition {
    //제어문 : 프로그램 실행 순서 제어
    //조건문 : (if switch=>obj)
    //반복문 : (for, while)
    public static void main(String[] args) {
//        int age = 13;
//        if (age > 20) {
//            if (age == 17) {
//                System.out.println("고1입니다.");
//
//            }
//            System.out.println("성인입니다.");
//        } else if (age > 13) {
//            System.out.println("청소년입니다.");
//        } else {
//            System.out.println("미성년자 입니다.");
//        }
//    }


        //정수를 입력 받고, 양의 홀수, 양의 음수, 0 , 음의 홀수, 음의 짝수
        //나타내는 프로그램

        System.out.println("정수를 입력하세요");

        Scanner scanner = new Scanner(System.in);

        int num = scanner.nextInt();

        if (num % 2 == 0 & num > 0) {
            System.out.println("양의 짝수");
        } else if (num % 2 == 0 & num < 0) {
            System.out.println("음의 짝수");
        } else if (num % 2 == 1 & num > 0) {
            System.out.println("양의 홀수");
        } else if (num % 2 == 0 & num < 0) {
            System.out.println("음의 홀수");
        }
        else {
            System.out.println("0");
        }
    }
}