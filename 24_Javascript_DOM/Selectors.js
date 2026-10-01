// ============================================================
// 1. getElementById()
// ============================================================

// Selects ONE element using its id
const heading = document.getElementById("heading");


// ============================================================
// 2. getElementsByClassName()
// ============================================================

// Selects ALL elements having the given class
// Returns an HTMLCollection
const boxes = document.getElementsByClassName("box");


// ============================================================
// 3. getElementsByTagName()
// ============================================================

// Selects ALL elements with the given tag name
// Returns an HTMLCollection
const paragraphs = document.getElementsByTagName("p");
const arr = Array.from(paragraphs)

// ============================================================
// 4. getElementsByName()
// ============================================================

// Selects elements whose "name" attribute matches
// Returns a NodeList
const inputs = document.getElementsByName("username");


// ============================================================
// 5. querySelector()
// ============================================================

// Selects the FIRST element matching a CSS selector

const firstBox = document.querySelector(".box");

const firstHeading = document.querySelector("#heading");

const firstParagraph = document.querySelector("p");


// ============================================================
// 6. querySelectorAll()
// ============================================================

// Selects ALL elements matching a CSS selector
// Returns a NodeList

const allBoxes = document.querySelectorAll(".box");

const allParagraphs = document.querySelectorAll("p");

allBoxes.forEach(function(l) {
    l.style.color = "blue";
})


// ============================================================
// CSS SELECTORS WITH querySelector()
// / querySelectorAll()
// ============================================================


// Select by ID
document.querySelector("#heading");


// Select by class
document.querySelector(".box");


// Select by tag
document.querySelector("p");


// Select by multiple classes
document.querySelector(".box.active");


// Select element inside another element
document.querySelector(".container .box");


// Select direct child
document.querySelector(".container > .box");


// Select elements having an attribute
document.querySelector("[type='text']");


// Select elements having an attribute (without specific value)
document.querySelector("[required]");


// Select by attribute starting with a value
document.querySelector("[class^='box']");


// Select by attribute ending with a value
document.querySelector("[class$='box']");


// Select by attribute containing a value
document.querySelector("[class*='box']");


// Select multiple different elements
document.querySelector("h1, p, button");


// Select the first child
document.querySelector(".container :first-child");


// Select the last child
document.querySelector(".container :last-child");


// Select the nth child
document.querySelector(".container :nth-child(2)");


// Select even children
document.querySelectorAll(".container :nth-child(even)");


// Select odd children
document.querySelectorAll(".container :nth-child(odd)");


// Select elements with a specific class
document.querySelectorAll("div.box");


// ============================================================
// RELATIVE SELECTORS
// ============================================================


// First matching element
document.querySelector("div");


// All matching elements
document.querySelectorAll("div");


// ============================================================
// DOM TRAVERSAL SELECTORS
// ============================================================

const element = document.querySelector(".box");


// Parent element
element.parentElement;


// Parent node
element.parentNode;


// First child element
element.firstElementChild;


// Last child element
element.lastElementChild;


// All child elements
element.children;


// First child node
element.firstChild;


// Last child node
element.lastChild;


// Next sibling element
element.nextElementSibling;


// Previous sibling element
element.previousElementSibling;


// Next sibling node
element.nextSibling;


// Previous sibling node
element.previousSibling;


// ============================================================
// FINDING ELEMENTS RELATIVE TO AN ELEMENT
// ============================================================


// Find first matching descendant
element.querySelector(".child");


// Find all matching descendants
element.querySelectorAll(".child");


// Check if an element matches a CSS selector
element.matches(".box");


// Find the closest ancestor/self matching selector
element.closest(".container");


// ============================================================
// DOCUMENT-LEVEL SPECIAL SELECTORS
// ============================================================


// <html> element
document.documentElement;


// <head> element
document.head;


// <body> element
document.body;


// All elements in the document
document.all;


// ============================================================
// QUICK SUMMARY
// ============================================================

// ID
document.getElementById("id");

// Class
document.getElementsByClassName("class");

// Tag
document.getElementsByTagName("p");

// Name attribute
document.getElementsByName("name");

// First CSS match
document.querySelector(".class");

// All CSS matches
document.querySelectorAll(".class");


// ============================================================
// MOST IMPORTANT ONES TO ACTUALLY REMEMBER
// ============================================================

// 1. ID
document.getElementById("id");

// 2. FIRST matching CSS selector
document.querySelector(".class");

// 3. ALL matching CSS selectors
document.querySelectorAll(".class");

// 4. Parent
element.parentElement;

// 5. Children
element.children;

// 6. Next element
element.nextElementSibling;

// 7. Previous element
element.previousElementSibling;

// 8. Closest matching element
element.closest(".container");
