// 1. select parent
let container = document.getElementById("container")

// 2. Create new element
let newPara = document.createElement("p");

// 3. Add text
newPara.innerText = "This paragraph is created dynamically";

// 4. append to parent
container.appendChild(newPara)

let box = document.createElement("div")
box.innerText = "Some text"
box.setAttribute("class", "box")
document.body.appendChild(box);


// appendChild()
let div = document.createElement("div");
let p = document.createElement("p");

p.innerText = "Hello";

div.appendChild(p);

document.body.appendChild(div);


// append()
let div1 = document.createElement("div")
let p1 = document.createElement("p")
p1.innerText = "First paragraph"
let p2 = document.createElement("p")
p2.innerText = "Second Paragraph"
div1.append(p1, p2)
document.body.append(div1)

// remove elements
let element = document.querySelector("p");
element.remove();
