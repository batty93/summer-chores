summer-chores📝 
Project Overview

This project is the first part of a series of exercises designed to demonstrate different approaches to handling asynchronous JavaScript operations.The callbackVersion.js file simulates a person completing a series of summer chores. 
Because chores take time and the person may get tired, the tasks are executed asynchronously using nested callbacks (creating "callback hell") and setTimeout. The objective is to ensure the chores are completed in a strict sequential order, 
with a random chance of failure (falling asleep) after any chore, which immediately halts the entire process.

🛠️ Requirements and Setup

This project uses Node.js to execute the JavaScript file from the command line.PrerequisitesNode.js installed on your system.
InstallationClone the repository:Bashgit clone [Your Repository URL Here]
cd summer-chores

🏃 How to Run the Program

Execute the callbackVersion.js file using Node. The program will print the progress of the chores to the console, including time delays and whether the person successfully completes a task or falls asleep.Bashnode callbackVersion.js

Example Output (Success)Alex is starting to mow the yard... 🚜
(2000ms delay)
Alex mowed the yard.
Alex is starting to weed eat... 🌱
(1500ms delay)
Alex finished using the weed eater.
Alex is starting to trim the hedges... ✂️
(1000ms delay)
Alex finished trimming the hedges.
Alex is starting to collect wood... 🪵
(2500ms delay)
Alex finished collecting wood.
Alex is starting to water the garden... 💧
(500ms delay)
Alex finished watering the garden.

🎉 Alex finished all their chores!

Example Output (Failure)Alex is starting to mow the yard... 🚜

(2000ms delay)
Alex mowed the yard.
Alex is starting to weed eat... 🌱
(1500ms delay)
Alex fell asleep after mowing the yard.

💻 File DetailscallbackVersion.js

This file implements the chore simulation using the callback pattern.ChoreSimulated Time (ms)Callback RequirementMow the yard2000Never falls asleep. Calls weedEat.Weed eat1500May fall asleep after mowing. Calls trimHedges.
Trim hedges1000May fall asleep after weed eating. Calls collectWood.Collect wood2500May fall asleep after trimming. Calls waterGarden.Water garden500May fall asleep after collecting wood. Calls the final success log.

💡 Concepts Demonstrated

This exercise primarily focuses on the following JavaScript concepts:
-Asynchronous JavaScript: Using setTimeout to simulate time-consuming operations.
-Callbacks: Passing functions as arguments to ensure code runs only after an asynchronous task completes.
-Callback Hell (Pyramid of Doom): The issue of deeply nested callbacks, which makes code difficult to read and maintain, 
-serving as the motivation for future solutions (like Promises and Async/Await).
-Sequential Execution: Ensuring tasks run in a predefined order.
