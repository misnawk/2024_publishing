package JAVA_Day02;

import java.util.Scanner;

public class Review {
    public static void main(String[] args) {
        // 한 변의 길이를 입력받고, 정사각형의 넓이 구하는 프로그램

        Scanner scanner = new Scanner(System.in);


        System.out.println("한변의 길이를 입력하세요");
        int a = scanner.nextInt();

        int result = a * a;

        System.out.println("넓이는" + result);

    }
}

// 컨트롤 + 알트 + l 자동정렬
// 컨트롤 + w 영역전개
// 컨트롤 + 쉬프트 코드이동
// 컨트롤 w + 알트 + j 똑같은 애들 찾아서 선택