const newParagraph = document.createElement("p");
newParagraph.innerText = "Added wtih Javasscript!";
document.body.appendChild(newParagraph);

const newPhoto = document.createElement("img");
newPhoto.setAttribute("src", "https://picsum.photos/200");
newPhoto.setAttribute("alt", "Random Generated Image.");
document.body.appendChild(newPhoto);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One Fish</li><li>Two fish</><li>Red Fish</li><li>Blue Fish</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement("section");
newSection.innerHTML = "<h2>DOM Basics</h2><p>This was added through Javascript</p>";
document.body.appendChild(newSection);