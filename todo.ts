#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation"

const sleep = ()=>{
    return new Promise((resolve) => {
        setTimeout(resolve,2000);
    })
}
async function welcome() {
    let rainbow = chalkAnimation.rainbow("      <<<<<Welcome to TODO List Maker>>>>>")
    await sleep();
    rainbow.stop()
}
await welcome();
let todo : string[] = [];
let loop = true;

while (loop) {
    const answer :{
        TODO : string,
        AddMore : boolean,
    } =await inquirer.prompt([
        {
            type : "input",
            name : "TODO",
            message : " What do you want to add in Todo ?",
        },
        {
            type : "confirm",
            name : "AddMore",
            message : "Do you want o add more in your todo list",
            default : false,
        }
    ]) 
    const {TODO,AddMore} = answer;
    loop =AddMore;
    if (TODO) {
        todo.push(TODO)
    }else{
        console.log("Kindly Add Valid Input");
        
    }
}
if (todo.length > 0) {
    console.log("Your Todo List is :");
    
    todo.forEach(todo => {
        console.log(todo);
        
    });
}