console.log("hello");

//bai 4:
// let mesage = "code the change";
// console.log(mesage);
// let studentCount = 0;
// console.log(studentCount);

//bai5:
// //a
// let mesage = `coding may not be easy, but fun`;
// console.log(mesage);
// //b
// let studentCount = 16;
// console.log(studentCount);
// //c
// console.log(toLowerCase(masege));
// //d
// studentCount = studentCount +1;
// console.log(studentCount);
//bai6:
// alert("You look beautifull today");
//bai 7
// let name = prompt("Hi there, your name please");
// alert(name);
//bai8
// let firstName = prompt("Enter your first name");
// let name = prompt("Enter your last name");
// alert(firstName+name);
//bai 9
// let area =  prompt("Enter side length of the square");
// area = area * area;
// alert(area);
//bai 10
// let area =  prompt("Enter the radius of the circle");
// area = (area*area)*3.14;
// alert(area);
//bai11
// let celsius = Number(prompt("Enter the temperature in Celsius"));
// let fahrenheit = 0;
// fahrenheit = celsius*1.8+32;
// alert(fahrenheit);
//bai12
// //a
// for(let i = 0; i< 7; i++){
//     console.log(i);
// }
// b
// let n = Number(prompt("Enter a number"));
// for(let i = 0; i<n; i++){
//     console.log(i);
// }
// c
// let n = Number(prompt("Enter n"));
// for(let i = 3; i<n; i++){
//     console.log(i);
// }
// d
// let n = Number(prompt("Enter n"));
// let c = Number(prompt("Enter c"));
// for(i = c; i< n; i++){
//     console.log(i);
// }
// f
// let n = Number(prompt("Enter n"));
// let c = Number(prompt("Enter c"));
// for(i = c; i< n; i++){
//     if(i%2==0){
//         console.log(i);
//     } 
// }
// bai13
// let n = Number(prompt("Enter n"));
// let factorial = 1;
// for(let i=1; i<=n; i++){
//     factorial *= i;
// }alert(`the factorial of 5 is`+ factorial);
// bai14
// let age = Number(prompt("How old are you?"));
// if(age<14){
//     alert("enough to iew this content");
// }else{
//     alert("enjoy");
// }
//bai 15

// for(let i=0; i<=9; i++){
//     let a = Number(prompt("Enter a"));
//     if(a <= 4){
//         alert("Lower half");
//     }else{
//         alert("Higher half");
//     }
// }
// bai16
    // let a = Number(prompt("Enter a"));
    // let x =  Number(prompt("Enter x"));
    // if(x < a/2 ){
    //     alert("Lower half");
    // }else{
    //     alert("Higher half");
    // }
// bai17
// let x =  Number(prompt("Enter x"));
// if(x%2==0){
//     alert(x+"is an even number");
// }else{
//     alert(x+"is an odd number");
// }
//bai18
//a
// for(let i=0; i<6; i++){
//     if(i<3){
//         console.log("L");
//     }else{
//         console.log("H");
//     }
// }
//b
// let x =  Number(prompt("Enter x"));
// for(let i=0; i<x; i++){
//     if(i<3+0.5){
//         console.log("L");
//     }else{
//         console.log("H");
//     }
// }
//c
// for(let i =0; i<8; i++){
//     if(i%2==0){
//        console.log("0");
//     }else{
//         console.log("1");
//     }
// }
// d
// let n =  Number(prompt("Enter n"));
// for(let i =0; i<n; i++){
//     if(i%2==0){
//        console.log("0");
//     }else{
//         console.log("1");
//     }
// }
// bai 19
// let kg = prompt("Your weight in kg?");
// let cm = prompt("Your height in cm?");
// let bmi;
// cm = cm/100.00;
// bmi = kg / (cm*cm);
// alert("Your BMI is"+bmi);
// if(bmi<16){
//     alert("Severely underweight");
// }else if(16<bmi<18.5){
//     alert("Underweight ");
// }else if(18.5<bmi<25){
//     alert("Normal");
// }else if(25<bmi<30){
//     alert("Overweight ");
// }else{
//     alert("Obese");
// }