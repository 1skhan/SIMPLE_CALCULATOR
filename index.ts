#! /usr/bin/env node

import inquirer from "inquirer";

const asnwer = await inquirer.prompt([
 { message: "Enter fist number", type: "number", name: "fisrtNumber" },
 { message: "entersecond number",type: "number",name:  'secondNUMBER'},
 {                                       

    message:"Select one of the operators to perform operation",
    type:"list",
    name: "operator",
    choices:["addition","subtraction","multiplication","Division"],

 }
]);

//conditionl statement
if (asnwer.operator === "Addition"){ 
    console.log(asnwer.fisrtNumber +asnwer.secondNUMBER);
} else if(asnwer.operator ==="subtraction"){                
    console.log(asnwer.fisrtNumber -asnwer.secondNUMBER);
}else if(asnwer.operator ==="multiplication"){                
    console.log(asnwer.fisrtNumber *asnwer.secondNUMBER);
}else if(asnwer.operator ==="Division"){                
    console.log(asnwer.fisrtNumber /asnwer.secondNUMBER);
}   else{
    console.log("please seect valid operator")
    
}