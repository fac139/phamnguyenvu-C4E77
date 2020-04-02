console.log("hello");
// câu điều kiện rẽ nhánh if/else //
// boolean (true/false) //

// const x = true; 
// các phép so sánh trong lập trình 
// >, < ,>=, <= , == , !=
 
// const x=5;
// console.log (x > 10);

// console.log (x == "5");

// ==, != thì nó không so sánh về kiểu dữ liệu mà nó so sánh giá trị 
// ===, !== thì nó so sánh cả 2 

// && (AND) , || (OR) , ! (Opposite)

// const x = 10 ;
// const y = 9;

// x < 10 && x!== 5;

//if/ else 

// if ( condition) {
//     //do sth
// }  else if(condition2) {
//     //do sth else 
// }else {
//     //do sth else 
// }

//practice1 //
let age = Number(prompt("Give me your age!!"));
if (age < 18){
    console.log("You cannot enter the bar");   
} else if ( 18 < age < 21 ){
    console.log (" You can go to the bar but you cannot drink");
}else {
    console.log("You can enter and drink")
}

//practice 2//
let age1 = Number(prompt("Give me your age!!"));
sqr_age = Math.sqrt(age1);
if (age1 < 0){
    console.log("Invalid number");
}else if (age1==21){
    console.log("Happy birthday");
}else if ((age1 % 2)== 1 ){
    console.log(" Age is odd");
}else if (sqr_age-Math.floor(sqr_age)==0);
    console.log(" Perfect square");

// DRY - don't repeat yourself 
// For loop ( vòng lặp )
// While 

// while (condition === true) {
//     //do sth
// }

//practice1 while loop//

// let i = 0;
// while(i  <= 20){
//     console.log(i);
//     i = i + 1;
// }

// let j = 0;
// while (j <= 10){
//     if ((j % 4)==0){
//         console.log(j);
//     }  
//     j = j+1;
// }

// let h = 30;
// while (h<=40){
//     if ((h%2)==1){
//         console.log(h);
//     }
//     h=h+1;
// }

// let k = 5;
// while (k <=50){
//     if (((k%3)==0) && ((k%5)==0)){
//     console.log(k);
// }
// k=k+1
// }
//
let v = 10 
let result = Math.floor(Math.random() * 10) + 1;
userInput= Number(prompt("Guess your number"));
while (v<=10){
    if (userInput < result){
        console.log("Too low");
        userInput= Number(prompt("Guess your number"));
    }
    else if ( userInput > result){
        console.log("Too high");
        userInput= Number(prompt("Guess your number"));
    }
    else{
        console.log("Congrat")
        break;
     }}

    // For loops
    //for(condition){
        //do sth
    //}

for (let i = 1; i<=5; i++){
    console.log(i);
}

//for practice

for (let i = 1; i<=10 ; i=i+2){
    console.log(i);
}

let sum = 0;
for (let j = 1 ; j <= 10; j++){
    sum=sum+j;}
console.log(sum);

let result1 = 1;
for (let k = 1; k<=5;k++) {
    result1=result1*k;}
console.log(result1);
