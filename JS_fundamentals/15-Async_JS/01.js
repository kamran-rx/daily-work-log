// ## setInterval() and setTimeout() — JavaScript Notes

// setInterval()

//   * Repeatedly executes a function after a specified time interval.
//   * Syntax:

          //  code
//     setInterval(function () {
//         // code
//     }, time);
//     ---------------
//   * Time is in **milliseconds**.
//   * `1000 ms = 1 second`
//   * Example:

//     Code
//     setInterval(function () {
//         console.log("Hello");
//     }, 2000);
//     -------------------
//   Output:
//     Hello
//     Hello
//     Hello
//     ...
//     ```
//    It keeps running until it is stopped.
//    Every time `setInterval()` is called, it creates a **new timer**.
//    setInterval()` returns a "timer ID".
//    Store the ID in a variable if you want to stop the interval:

//     code
//     let interval = setInterval(...);
//     
//   Stop an interval using:

//     code
//     clearInterval(interval);
//     
//   clearInterval()` needs the ID of the interval you want to stop.

// setTimeout()
//    Executes a function **once** after a specified amount of time.
//    Syntax:

//     ```js
//     setTimeout(function () {
//         // code
//     }, time);
//     ```
//   * Example:

//     ```js
//     setTimeout(function () {
//         console.log("Hello");
//     }, 2000);
//     ```
//   * Output happens only once after 2 seconds:

//     ```
//     Hello
//     ```
//   * `setTimeout()` also returns a timer ID.
//   * Store the ID if you want to cancel it:

//     ```js
//     let timer = setTimeout(...);
//     ```
//   * Cancel it using:

//     ```js
//     clearTimeout(timer);
//     ```

// * **Difference between `setInterval()` and `setTimeout()`**

//   * `setInterval()` → runs repeatedly.
//   * `setTimeout()` → runs once.
//   * `setInterval()` → `clearInterval()`
//   * `setTimeout()` → `clearTimeout()`

// * **Timer ID**

//   * `setInterval()` and `setTimeout()` return an ID.
//   * Example:

//     ```js
//     let interval = setInterval(...);
//     ```
//   * The variable stores the ID of the timer.
//   * `clearInterval(interval)` uses that ID to find and stop the timer.

// * **Important: Every `setInterval()` creates a new timer**

//   * If you click Start twice:

//     ```code
//     interval = setInterval(...);
//     interval = setInterval(...);
//     ```
//   * Two timers are created.
//   * The variable only remembers the **latest timer ID**.
//   * The first timer can continue running.
//   * Therefore, multiple clicks on Start can create multiple intervals.

// * **Prevent multiple intervals**

//   * Use:

//     ```js
//     if (interval) return;
//     ```
//   * Meaning:

//     * If an interval already exists → exit the function.
//     * Don't create another interval.

// * **`return;`**

//   * `return;` without a value means:

//     * **Stop the current function immediately.**
//   * Example:

//     ```js
//     function test() {
//         console.log("A");
//         return;
//         console.log("B");
//     }
//     ```
//   * Only `A` runs.
//   * `B` never runs.

// * **`if (interval) return;`**

//   * Means:

//     ```
//     If interval exists → stop this function.
//     ```
//   * Useful for preventing multiple intervals.

// * **`if (!interval) return;`**

//   * `!` means **NOT**.
//   * Means:

//     ```
//     If interval does NOT exist → stop this function.
//     ```
//   * Useful when you don't want to continue if there is nothing to work with.

// * **  null  **

//   * `null` can be used to represent:

//     ```
//     There is currently no value / no timer ID.
//     ```
//   * Example:

//     ```code
//     interval = null;
//     ```
//   * `interval = null` does **not** stop the timer by itself.
//   * You stop the timer with:

//     ```code
//     clearInterval(interval);
//     ```
//   * Then you can clear the variable:

//     ```js
//     interval = null;
//     ```

// Common Start/Stop pattern

//   code
//   let interval;

//   start.addEventListener("click", function () {

//       if (interval) return;

//       interval = setInterval(function () {
//           // repeated code
//       }, 1000);

//   });

//   stop.addEventListener("click", function () {

//       clearInterval(interval);
//       interval = null;

//   });
//   ```

//Easy memory trick

//   setInterval   → repeat
//   clearInterval → stop repeating

//   setTimeout    → run once later
//   clearTimeout  → cancel it

//   return;       → exit function

//   null          → no current value
//   
