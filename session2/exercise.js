//exercise1//
// inputValue=Number(prompt("Enter your number"));
// result = 1
// if (inputValue > 0){
//     for (let k = 1; k<= inputValue; k++){
//         result= result * k;
//     }
// console.log(result)    ;
// }else{
//     console.log("Invalid number");
// }


//exercise2 //

// inputName=prompt("Enter your name");
// inputAge=Number(prompt("Enter your age"));
// if (inputAge<18){
//     console.log("You are not allowed to enter this website");
// }else{
//     answer=prompt("Do you want to login to this website?");
//     if (answer=="yes"){
//         console.log(inputName + " " + "has successfully login to the page");   
//     }else if(answer=="no"){
//         console.log(inputName +" "+"has logged out this page");
//     }
// }

//exercise 3//
// input_userName=prompt("What is your username?");
// input_password=prompt("Your password?");
// let username= ("admin");
// let password= ("admin");
// if ((username=input_userName)&&(password=input_password)){
//     console.log("Login successfully");
// }else if ((username!=input_userName)&&(password=input_password)){
//     console.log("Wrong username");
// }else if ((username=input_userName)&&(password!=input_password)){
//     console.log("Wrong password");
// }else if ((username!=input_userName)&&(password!=input_password)){
//     console.log("Wrong both of them");
// }
   
//exercise 4//
// realname=prompt("Enter your name");
// var a = prompt("Enter your birthmonth");
// var b = "";
// switch(a){
//     case 1: b= ("january" || "ferbuary" || "march");
//     break;
//     case 2: b= ("april" || "may" || "june");
//     break;
//     case 3: b= ("july" || "august" || "september");
//     break;
//     case 4: b= ("october" || "november" || "december");
//     break;
// }
// if (a==1){
//     console.log(realname+ " "+ "was born in spring");
// }else if (a==2){
//     console.log(realname+ " "+ "was born in summer");
// }else if (a==3){
//     console.log(realname+ " "+ "was born in autumn");
// }else if (a==4){
//     console.log(realname+ " "+ "was born in winter");
// }

// exercise 5//
// while (true){
// let a =Number(prompt("enter your parameters"));
// let b =Number(prompt("enter your second parameters"));
// let c =Number(prompt("enter your third parameters"));
// let triangle=(b*b)-(4*a*c);
// if (triangle>0){
//     console.log("the first result is"+ " "+ (-b+(Math.sqrt(triangle)))/(2*a));
//     console.log("and the second result is"+" "+ (-b-(Math.sqrt(triangle)))/(2*a));
// }
// else if (triangle==0){
//     console.log("the only result is"+" "+ ((-b)/(2*a)));
// }else{
//     console.log("Invalid result");
// }
// answer=prompt("Do you want to continue?");
// if (answer=="yes"){
//     continue
// }else if (answer){
//     break
// }
// }
//exercise 6//
// console.log("hello");
// const randomStr=prompt("Enter a string");
// const long=randomStr.length;
// for (let i =-1;i=(-(long));i=i-1){
//     console.log(randomStr[i]);
// }



