javascript
// Using getElementById
const myDiv = document.getElementById("myDiv");
console.log(myDiv.textContent); // Output: Hello, World!

// Using querySelector
const firstParagraph = document.querySelector(".paragraph");
console.log(firstParagraph.textContent); // Output: This is a paragraph.

// Using querySelectorAll
const allParagraphs = document.querySelectorAll(".paragraph");
allParagraphs.forEach(paragraph => {
    console.log(paragraph.textContent);
    // Outputs:
    // This is a paragraph.
    // Another paragraph.
    //inner text
const myDiv = document.getElementById("myDiv");
console.log(myDiv.innerText); // Output: Hello, World!

const firstParagraph = document.querySelector(".paragraph");
console.log(firstParagraph.innerText); // Output: This is a paragraph.
    
    

});