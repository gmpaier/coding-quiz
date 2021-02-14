This document is for brainstorming questions to be used in homework 4, coding-quiz. 

1. Choose the statement which is the opposite of the following (i >= 8 && i <= 20)
    (!i < 8 || !i > 20)

2. Is the following statement true or false? ("2" == 2)
    True, because double equal compares value but not type

3. Is the following true or false? ("2" < "12")
    False, becuase values are compared as strings, and "1" is less than "2"

4. Is the following true or false? (2 < "12")
    True, because values are compared not types, and 12 is more than 2

5. Which of the following is not a primitive? (string, boolean, array, undefined)
    array

6. In javascript, every function is also a(n) (argument, method, parameter, operator)
    method

7. What will the following display. var x = true - 5; console.log(x);
    -4

8. The following is a for loop
        var x = [];
        var fruits = ["apple", "pear", "banana", "mango", "peach", "orange"];
        for (var i = fruits.length; i == 0 ; i-=2){
            x.push(fruits[i]);
        }
        console.log(x.toString());
    What does the console display?
     undefined,peach,banana

9. At the end of this code, what is the value of x?
        var x = 10;
        {
            var x = 2;
        }
        console.log(x);
     2

10. At the end of this code, what is the value of x?
        var x = 10
        {
            let x = 2;
        }
        console.log(x);
     10

11. What will the following code display?
        var x = 12 + "Ten"
        console.log(x);
     12Ten

12. What will the following code display?
        function myFunction(){
            return 12%5;
        }
        console.log(myFunction);
     function myFunction(){return 12%5;}

13. Is this true or false? var x = 0; boolean(x);
     false because x holds no value

14. Is this true or false? var x = 6; boolean(x);
     true because x holds value (6)


Topics: 
- Code read, "What will this display?"
- Definitions
- Comparitors
- Syntax
- Local vs Global variables

