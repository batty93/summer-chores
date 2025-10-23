# Summer Chores Project: Exploring Asynchronous JavaScript

This project demonstrates the evolution of **asynchronous control flow** in JavaScript by simulating a person completing a sequence of summer chores. Each chore is an asynchronous task that must be completed in a strict sequential order. The person performing the chores has a random chance of **falling asleep** after any task, which immediately halts the process.

The project showcases the transition from traditional callback-based code to modern Promise-based solutions.

---

## 🛠️ Project Structure and Concepts

The project contains three versions of the chore program, each demonstrating a different stage in asynchronous JavaScript development:

| File Name | Asynchronous Method | Key Concept Demonstrated |
| :--- | :--- | :--- |
| `callbackVersion.js` | **Callbacks** | **Callback Hell** (Pyramid of Doom). Deeply nested code for sequential execution. |
| `promiseVersion.js` | **Promises** (`.then()`, `.catch()`) | **Promise Chaining** for cleaner, linear flow and centralized error management. |
| `asyncAwaitVersion.js` | **Async/Await** (`try...catch`) | The most modern solution, offering a **synchronous-looking** way to manage asynchronous code. |

### The Chore Sequence

All versions execute the same sequential chore list:

1.  **Mow Yard** (2000ms) - *Never Fails*
2.  **Weed Eat** (1500ms) - *May Fail*
3.  **Trim Hedges** (1000ms) - *May Fail*
4.  **Collect Wood** (2500ms) - *May Fail*
5.  **Water Garden** (500ms) - *May Fail*

---

## 🏃 How to Run the Program

This project uses **Node.js** to execute the JavaScript files from the command line.

### Prerequisites

* Node.js must be installed on your system.

### Installation

1.  Clone the repository:
    ```bash
    git clone [Your Repository URL Here]
    cd summer-chores
    ```

### Execution

Run any of the three versions using the `node` command:

```bash
# 1. Run the original Callback version
node callbackVersion.js

# 2. Run the current Promise version (for this assignment)
node promiseVersion.js

# 3. Run the final Async/Await version
node asyncAwaitVersion.js