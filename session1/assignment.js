//question 1 // 
// use typeof to check the variable's type
//  let 1value = 10; -> Lỗi vì tên biến bắt đầu bằng số 1;
//  let value 1 = 10; -> Lỗi vì chứa kí tự đặc biệt (dấu khoảng trắng);
//  let const = 10; -> Lỗi đặt tên biến trùng với keyword trong JS; 

//question 2//
let radius = prompt("Give me your radius");
radius1 = Number(radius);
let pinumber = 3.14;
pinumber1 = Number(pinumber);
let area= pinumber1 * radius1 * radius1;
console.log("The area of the circle is"+" "+area);

//question 3// 
let celsius = Number(prompt("Give me your celsius degree"));
let fahrenheit = (celsius*1.8) + 32 ;
console.log((celsius) ,"equals to", (fahrenheit) ,"degree");