// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let userNumber = Number(prompt(`Type your number`));
if (userNumber % 2 === 0 ){alert(`number is even`)}
else {alert(`number is odd`)}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let firstNumber = Number(prompt(`Your first number`));
let secondNumber = Number(prompt(`Your second number`));
if(firstNumber > secondNumber){alert(`max value is ${firstNumber}`)}
else{alert(`max value is ${secondNumber}`)}

// 3. Convert the above code using`?` terniary operator

// let firstNumber = Number(prompt(`Your first number`));
// let secondNumber = Number(prompt(`Your second number`));

firstNumber >= secondNumber ? alert(`max value is ${firstNumber}`) : alert(`max value is ${secondNumber}`)

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

let houseName = String(prompt(`Write your House Name`));
switch (houseName){
case "stark" :  alert(` Winter is coming`); break;
case "lannister" : alert(` A lannister always pays his debt`); break;
default : alert(` All men must die`)}

// 5. Convert the above code using`?` terniary operator

houseName === "stark" ?  alert(` Winter is coming`) :  houseName === "lannister" ?  alert(` A lannister always pays his debt`) :  alert(` All men must die`)

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let monthNumber = Number(prompt(`Write the number of the month(1-12)`));
switch (monthNumber)
{
  case 1 : alert(`No of days in the month is 31 `); break;
  case 2 : alert(`No of days in the month is 28 `); break;
  case 3 : alert(`No of days in the month is 31 `); break;
  case 4 : alert(`No of days in the month is 30`); break;
  case 5 : alert(`No of days in the month is 31 `); break;
  case 6 : alert(`No of days in the month is 30 `); break;
  case 7 : alert(`No of days in the month is 31 `); break;
  case 8 : alert(`No of days in the month is 31 `); break;
  case 9 : alert(`No of days in the month is 30 `); break;
  case 10 : alert(`No of days in the month is 31 `); break;
  case 11 : alert(`No of days in the month is 30 `); break;
  case 12 : alert(`No of days in the month is 31 `); break;
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

let userSalary = Number(prompt(`Your expected salary`));
let tax1 = (userSalary * 10) /100
let tax2 = (userSalary * 20) /100
let tax3 = (userSalary * 30) /100

switch (true)
{
  case userSalary <= 20000 : alert(` Your in-hand amount is ${userSalary - tax1}`); break;
  case userSalary <= 40000 : alert(` Your in-hand amount is  ${userSalary - tax2}`);break;
  case userSalary >= 50000 : alert(` Your in-hand amount is  ${userSalary - tax3}`);break;
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

let marks = Number(prompt(`Mention your marks`));
if (marks > 80 && marks < 100){alert(`Grade A`)}
else if(marks > 50 && marks < 80){alert(`Grade B`)}
else if (marks > 30 && marks < 50){alert(`Grade C`)}
else if (marks > 0){alert(`Grade D`)}
else {alert(`Marks can't be greater than 100`)}

switch (true)
{
  case marks > 80 && marks < 100 : alert(`Grade A`);break;
  case marks > 50 && marks < 80 : alert(`Grade B`); break;
  case marks > 30 && marks < 50  : alert(`Grade C`);break;
  case marks > 0  : alert(`Grade D`);break;
  default : alert(`Marks can't be greater than 100`)
}



/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weather = prompt(`weather outside today`);
if (weather === "sunny"){alert(`Wear a T-shirt`)}
else if (weather === "rainy"){alert(`Don't forget to take your raincoat`)}
else if (weather === "hot"){ alert(`Get a hanky`)}
else if (weather === "freezing"){alert(`Get your sweeter on`)}
else {alert(`Not a valid input`)}

switch (weather)
{
  case weather === "sunny" : alert(`Wear a T-shirt`);break;
  case weather === "rainy" : alert(`Don't forget to take your raincoat`);break;
  case weather === "hot" :  alert(`Get a hanky`);break;
  case weather === "freezing" : alert(`Get your sweeter on`);break;
  default : alert(`Not a valid input`)
}
