-- alter table reactspring.students modify column id INT auto_INCREMENT;
-- 
-- select * from reactspring.students s ;
-- 
-- insert into reactspring.students (name,age,grade,major) values("준식이",23,3,"컴퓨터공학과");
-- 
-- select*from reactspring.students s where grade=3 and major="정치학";
-- select*from reactspring.students s where major="언어학" or major="컴퓨터공학";
-- select * from reactspring.students s where not grade = 4; 
-- select * from reactspring.students s where age between 20 and 30;
-- select * from reactspring.students s where major in('컴퓨터공학과','언어학');

-- select * from reactspring.students s where name like '문%'; -- 문으로 시작하는 이름
-- select * from reactspring.students s where name like '문__'; -- 문으로 시작하는 3글자 이름

-- 짧퀴
-- 1. 나이가 25세인 이상인 학생의 이름과 나이를 조회하시오.
-- select name,age from reactspring.students s where age >=25;
-- 
-- -- 2. 전공이 '컴퓨터공학'인 학생의 이름과 학년을 조회하시오.
-- select name,grade from reactspring.students s where major in('컴퓨터공학');
-- 
-- -- 3. 학년이 3이상인 학생의 이름과 전공을 조회하시오.
-- select name,major from reactspring.students where grade >=3;
-- 
-- -- 4. 나이가 20대인 학생의 이름과 나이를 조회하시오.
-- select name,age from reactspring.students where age between 20 and 29;
-- 
-- -- 5. 전공이 '경영학' 또는 '경제학'인 학생의 이름과 전공을 조회하시오.
-- select name, major from reactspring.students where major='경영학' or major ='경제학';
-- 
-- select name, major from reactspring.students where id= 1001;
-- 
-- update students set major = '컴퓨터공학' where id=1001;


select*from reactspring.students 
where major ='컴퓨터공학'
order by grade desc;
;

















