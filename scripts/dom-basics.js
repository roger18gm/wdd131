const fullName = "Roger Galan";

console.log(fullName);

const h1 = document.querySelector("h1");

h1.innerHTML = "<em>" + fullName + "<em>";

const section = document.createElement("section");
const h2 = document.createElement("h2");
const p = document.createElement("p");

p.textContent = "This is a para in sec 3"
h2.textContent = "Section 33";

section.appendChild(h2);
section.appendChild(p);
document.body.appendChild(section);
