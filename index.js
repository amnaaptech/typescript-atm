import inquirer from "inquirer";
//intialized our balance and pin code 
let mybalance = 5000;
let myPin = 1234;
//print to welcome message
console.log("welcome to Amna - ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Entre your pin code:"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Pin is Correct , Loging Successfully!");
    // console.log(`Current Account Balance is ${mybalance}`);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation:",
            choices: ["Withdraw Amount", "Check your Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw Amount") {
        let AmountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Entre the amount to withdraw:"
            }
        ]);
        if (AmountAns.amount > mybalance) {
            console.log("Insufficient Balance");
        }
        else {
            mybalance -= AmountAns.amount;
            console.log(`${AmountAns.amount} Withdraw Sucessfully!`);
            console.log(`Your Remaining Balance is: ${mybalance}`);
        }
    }
    else if (operationAns.operation === "Check your Balance") {
        console.log(`Your Account Balance is: ${mybalance}`);
    }
}
else {
    console.log("Pin is incorrect, Try Again");
}
