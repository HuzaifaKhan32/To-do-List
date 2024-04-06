import inquirer from "inquirer";
let shoppingList: string[] = [];
let todoList: string[] = [];
let doingCondition = true
while (doingCondition) {
    let question = await inquirer.prompt
        (
            [
                {
                    name: "ask",
                    type: "list",
                    message: "What would you like to make : ",
                    choices: ["Making a Shopping list", "Making a to-do list", "View to-do list", "View Shopping list", "Remove an item from Shopping list", "Remove a task from to-do list", "Exit"]
                }
            ]
        )
    if (question.ask == "Making a Shopping list") {
        let condition = true;
        while (condition) {
            let item = await inquirer.prompt
                (
                    [
                        {
                            name: "insert",
                            type: "input",
                            message: "Please the input the item which you want to add"
                        },
                        {
                            name: "surity",
                            type: "confirm",
                            message: "Do yuo like to add more to your shopping list"
                        }
                    ]
                )
            shoppingList.push(item.insert);
            condition = item.surity
        }
    } else if (question.ask == "Making a to-do list") {
        let condition = true;
        while (condition) {
            let item = await inquirer.prompt
                (
                    [
                        {
                            name: "insert",
                            type: "input",
                            message: "Please the input the item which you want to add"
                        },
                        {
                            name: "surity",
                            type: "confirm",
                            message: "Do yuo like to add more to your to-do list"
                        }
                    ]
                )
            todoList.push(item.insert);
            condition = item.surity
        }
    } else if (question.ask == "View Shopping list") {
        console.log("Your Shopping List:")
        for (let shop of shoppingList) {
            console.log(shop);
        }
    } else if (question.ask == "View to-do list") {
        console.log("Your Shopping List:")
        for (let task of todoList) {
            console.log(task);
        }
    } else if (question.ask == "Remove an item from Shopping list") {
        shoppingList.pop();
    } else if (question.ask == "Remove a task from to-do list") {
        todoList.pop();
    } else {
        doingCondition = false
    }
}