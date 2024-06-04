// Q1
// let x=5;
// console.log(-5 * 3);         
// console.log("JavaScript" + 50);
// console.log(17 % 5);           
// console.log(5 % 17);          
// console.log(5 / 10);           
// console.log(4 === '4');        
// console.log(4 != 5);         
// console.log(7 <= 8);           
// console.log("Hello" + 5);      
// console.log(Math.ceil(x) - Math.floor(x)); 
// console.log(Math.pow(x, 2));
// document.writeln("hello");

// Q2
// let num=prompt("enter the number");
// alert("your entered"+num);

// Q3
// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");

// if (num1 < num2) {
//     alert(num1 + ", " + num2);
// } else {
//     alert(num2 + ", " + num1);
// }

// Q4
// let num3 = prompt("Enter the first number:");
// let num4 = prompt("Enter the second number:");

// Q5
// if (num3 > num4) {
//     alert("the large number "+num3);
// } else {
//     alert("the large number "+num4);
// }

// Q6
// let number = prompt("Enter a number between 1 and 9:");

// switch (Number(number)){
//     case 1:
//         alert("one");
//         break;
//     case 2:
//         alert("tow");
//         break;
//     case 3:
//         alert("three");
//         break;
//     case 4:
//         alert("four");
//         break;
//     case 5:
//         alert("five");
//         break;
//     case 6:
//         alert("six");
//         break;
//     case 7:
//         alert("seven");
//         break;
//     case 8:
//         alert("eight");
//         break;
//     case 9:
//         alert("nine");
//         break;
//     default:
//         console.log("Please try again");
// }

// Q7
// for (let i = 0; i <= 5; i++) {
//     alert(i);
// }

// Q8
// let x=" "
// for(let i=0; i<=5; i++){

//     x+=i + " ";
// }
// alert(x);

// Q9
// let multiples = "";
// for (let i = 0; i <= 20; i++) {
//     if (i % 3 === 0) {
//         multiples += i + " ";
//     }
// }
// alert(multiples);

// Q10
// let condition=true;
// let range=prompt("enter the number between 0 and 100")
// while(condition){
//     if(range>=0 && range<=100){
//         alert(range);
//         break;}
//     else
//     range=prompt("please enter the number between 0 and 100");

// }

// Q11
sum=0;
let num=prompt("enter the number for sum")
for(let i=0; i<=num; i++){
    sum+=i;
}
alert("the sumation is = "+sum);