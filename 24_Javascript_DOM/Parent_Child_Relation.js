// ==========================================
// DOM — PARENT / CHILD / SIBLING NAVIGATION
// ==========================================

// Example HTML:
//
// <div id="parent">
//     <p id="child1">Hello</p>
//     <p id="child2">World</p>
// </div>

const parent = document.querySelector("#parent");
const child1 = document.querySelector("#child1");
const child2 = document.querySelector("#child2");


// ---------- PARENT ----------

// Parent element
child1.parentElement;

// Parent node (can be any type of Node)
child1.parentNode;


// ---------- CHILDREN ----------

// All child ELEMENTS
parent.children;

// All child NODES (includes text nodes, comments, etc.)
parent.childNodes;

// First child ELEMENT
parent.firstElementChild;

// Last child ELEMENT
parent.lastElementChild;

// First child NODE
parent.firstChild;

// Last child NODE
parent.lastChild;

// Specific child ELEMENT by index
parent.children[0];
parent.children[1];


// ---------- SIBLINGS ----------

// Next sibling ELEMENT
child1.nextElementSibling;

// Previous sibling ELEMENT
child2.previousElementSibling;

// Next sibling NODE
child1.nextSibling;

// Previous sibling NODE
child2.previousSibling;


// ==========================================
// QUICK MEMORY MAP
// ==========================================

//                parent
//              /        \
//          child1       child2
//             ↕            ↕
//
// child1.parentElement       → parent
// parent.children            → [child1, child2]
// parent.firstElementChild   → child1
// parent.lastElementChild    → child2
// child1.nextElementSibling  → child2
// child2.previousElementSibling → child1


// ==========================================
// ELEMENT vs NODE
// ==========================================

// Element versions → only HTML elements
parent.children
parent.firstElementChild
parent.lastElementChild
child1.nextElementSibling
child2.previousElementSibling

// Node versions → can include text/comment nodes
parent.childNodes
parent.firstChild
parent.lastChild
child1.nextSibling
child2.previousSibling
