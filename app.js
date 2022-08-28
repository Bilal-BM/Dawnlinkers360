//1. Write a ts program to find maximum between two numbers.
var num1 = 100;
var num2 = 150;
if (num1 > num2) {
    console.log(num1, "is maximum");
}
else {
    console.log(num2, "is maximum");
}
//2. Write a ts program to find maximum between three numbers.
//Decelaration 
var n1 = prompt("Enter 1st Number");
var n2 = prompt("Enter 2nd Number");
var n3 = prompt("Enter 3rd Number");
//typeCasting
var no1 = parseInt(n1);
var no2 = parseInt(n2);
var no3 = parseInt(n3);
//Comparison
if (no1 > no2 && no1 > no3) {
    console.log(no1, "is maximum");
}
else if (no2 > no3) {
    console.log(no2, "is maximum");
}
else {
    console.log(no3, "is maximum");
}
//3. Write a ts program to check whether a number is negative, positive or zero.
//Decelaration 
var n1 = prompt("Enter the Number");
//Type casting
var no1 = parseInt(n1);
//Comparison
if (no1 > 0) {
    console.log(no1, "is Positve");
}
else {
    console.log(no1, "is Negative");
}
//4. Write a ts program to check whether a number is divisible by 5 and 11 or not.
var N1 = prompt("Enter the Number");
//Type casting
var No1 = parseInt(N1);
//Comparison
if (No1 % 5 == 0 && No1 % 11 == 0) {
    console.log(No1, "is divisible by 5 and 11");
}
else if (No1 % 5 == 0) {
    console.log(No1, "is divisible by 5");
}
else if (No1 % 11 == 0) {
    console.log(No1, "is divisible by 11");
}
else {
    console.log(No1, "is not divisible by 5 or by 11");
}
//5. Write a ts program to check whether a number is even or odd.
//Decelaration
var N1 = prompt("Enter the Number");
//Type casting
var No1 = parseInt(N1);
//Calculation
if (No1 % 2 == 0) {
    console.log(No1, "is an Even Number");
}
else {
    console.log(No1, "is an Odd Number");
}
//6. Write a ts program to check whether a year is leap year or not.
var N1 = prompt("Enter Year");
//Type casting
var No1 = parseInt(N1);
//Calculation
if (No1 % 4 == 0) {
    console.log(No1, "is an Leap Year");
}
else {
    console.log(No1, "is not an Leap Year");
}
//7. Write a ts program to check whether a character is alphabet or not.
var char = prompt("Enter the character");
if (char >= "A" && char <= "Z" || char >= "a" && char <= "z") {
    console.log(char, "is an Alphabet Character");
}
else {
    console.log(char, "is not an Alphabet Character");
}
//8. Write a ts program to input any alphabet and check whether it is vowel or consonant.
var letter = prompt("Enter the Alphabet Letter");
if (letter == "A" || letter == "a" || letter == "E" || letter == "e" || letter == "I" || letter == "i" || letter == "O" || letter == "o" || letter == "U" || letter == "u" || letter == "Y" || letter == "y") {
    console.log(letter, "is an vowel");
}
else {
    console.log(letter, "is an consonant");
}
//9. Write a ts program to input any character and check whether it is alphabet, digit or special character.
var char = prompt("Enter the character");
if (char >= "A" && char <= "Z" || char >= "a" && char <= "z") {
    console.log(char, "is an Alphabet Character");
}
else if (parseInt(char)) {
    console.log(char, "is an Numeric Character");
}
else {
    console.log(char, "is an Special Character");
}
