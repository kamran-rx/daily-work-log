//      DOM 
//   DOM = Document Object Model.
//    Browser represents HTML as a "tree of nodes".
//  * Example:
//     Document
//     └── html
//         └── body
//             ├── div
//             ├── p
//             └── button
//     ```

// Node

//   A node is a piece of the DOM tree.
//    Types of nodes include:

//      Element
//      Text
//      Comment
//      Document
//   Every Element is a Node, but not every Node is an Element.**
//   * Example:

//     ```html
//     <div>Hello</div>
//     ```

//     * <div> * → Element + Node
//     * "Hello" * → Text + Node

// *Element*

//   * An Element represents an HTML tag.
//   * Examples:

//     * `<div>`
//     * `<p>`
//     * `<h1>`
//     * `<button>`
//   * Element is a type of Node.

// * **NodeList**

//   * NodeList = collection of Nodes.
//   * Commonly returned by:

//     ```js
//     document.querySelectorAll(".box");
//     ```
//   * Looks like an Array:

//     ```js
//     boxes[0];
//     boxes.length;
//     ```
//   * But it is **NOT an Array**:

//     ```js
//     Array.isArray(boxes); // false
//     ```

// * **HTMLCollection**

//   * HTMLCollection = collection of HTML Elements.
//   * Commonly returned by:

//     ```js
//     document.getElementsByClassName("box");
//     document.getElementsByTagName("div");
//     ```
//   * Also looks like an Array but is **NOT an Array**.

// * **NodeList vs HTMLCollection**

//   * NodeList:

//     * Collection of Nodes.
//     * `querySelectorAll()` → NodeList.
//   * HTMLCollection:

//     * Collection of HTML Elements.
//     * `getElementsByClassName()` → HTMLCollection.
//     * `getElementsByTagName()` → HTMLCollection.

// * **Selecting by ID**

//   ```js
//   const title = document.getElementById("title");
//   ```

//   * Selects an element by its ID.
//   * Returns a single element.

// * **Selecting by Class**

//   ```js
//   const boxes = document.getElementsByClassName("box");
//   ```

//   * Returns an HTMLCollection.

// * **Selecting by Tag**

//   ```js
//   const paragraphs = document.getElementsByTagName("p");
//   ```

//   * Returns an HTMLCollection.

// * **`querySelector()`**

//   * Uses CSS selectors.
//   * Returns the **first matching element**.

//   ```js
//   document.querySelector(".box");
//   document.querySelector("#title");
//   document.querySelector("p");
//   ```

//   * Can use complex CSS selectors:

//   ```js
//   document.querySelector(".container .box");
//   document.querySelector(".container > .box");
//   document.querySelector("input[type='text']");
//   document.querySelector("[data-id='123']");
//   ```

// * **`querySelectorAll()`**

//   * Uses CSS selectors.
//   * Returns **all matching elements**.
//   * Returns a NodeList.

//   ```js
//   const boxes = document.querySelectorAll(".box");
//   ```

// * **`querySelector()` vs `querySelectorAll()`**

//   ```js
//   document.querySelector(".box");
//   ```

//   * First matching `.box`.

//   ```js
//   document.querySelectorAll(".box");
//   ```

//   * All matching `.box` elements.

// * **Selecting inside another element**

//   * You can search inside a specific element instead of the whole document.

//   ```js
//   const container = document.querySelector(".container");

//   const boxes = container.querySelectorAll(".box");
//   ```

//   * Searches for `.box` **only inside `.container`**.
//   * This:

//     ```js
//     document.querySelectorAll(".box");
//     ```

//     searches the whole document.
//   * While this:

//     ```js
//     container.querySelectorAll(".box");
//     ```

//     searches only inside `container`.

// * **Selecting a specific element from a NodeList**

//   * NodeLists can be accessed using indexes.
//   * JavaScript indexes start at `0`.

//   ```text
//   1st → [0]
//   2nd → [1]
//   3rd → [2]
//   4th → [3]
//   5th → [4]
//   ```

//   * Example:

//     ```js
//     const boxes = document.querySelectorAll(".box");

//     boxes[0]; // 1st box
//     boxes[1]; // 2nd box
//     boxes[2]; // 3rd box
//     boxes[3]; // 4th box
//     boxes[4]; // 5th box
//     ```

// * **Directly selecting the 4th `.box`**

//   ```js
//   const box4 = document.querySelectorAll(".box")[3];
//   ```

//   * `[3]` means the 4th element because indexing starts at `0`.

// * **Directly selecting the 5th `.box`**

//   ```js
//   const box5 = document.querySelectorAll(".box")[4];
//   ```

// * **Main mental model**

//   ```text
//   DOM
//   ↓
//   Tree of Nodes
//   ↓
//   Elements are one type of Node
//   ↓
//   Selection methods find Elements
//   ↓
//   Some methods return collections
//   ↓
//   NodeList / HTMLCollection
//   ```

// * **Most important APIs to remember**

//   ```js
//   document.getElementById("id");
//   document.getElementsByClassName("class");
//   document.getElementsByTagName("div");
//   document.querySelector(".box");
//   document.querySelectorAll(".box");
//   ```

// * **Quick return-value cheat sheet**

//   ```text
//   getElementById()          → Element
//   getElementsByClassName()  → HTMLCollection
//   getElementsByTagName()     → HTMLCollection
//   querySelector()            → Element
//   querySelectorAll()         → NodeList
//   ```
