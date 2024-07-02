package Day01;

import java.util.Scanner;

public class Scan {
    public static void main(String[] args) {
       Scanner scanner  = new Scanner(System.in);

        System.out.println("당신의 나이는?");
        int age = scanner.nextInt();
//        System.out.println("당신의 나이는"+age +"이군요!");

        System.out.println("당신은 몇년생 인가요?");
        int year = scanner.nextInt();
        System.out.println("당신은" +year +"년 생이고"+ age+"살이군요!");


        scanner.nextLine(); //String
        scanner.nextDouble(); //double
    }
}
