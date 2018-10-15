/*Búðu til vefsíðu með tveimur <input type=”text”/> 
reitum og einum takka. 
Það sem takkinn gerir er að setja inn nýtt div 
með textanum úr báðum input-unum 
(svipað og við gerðum með tix*/

var mainDiv = document.querySelector("#wrapper");
mainDiv.innerHTML = `
    <br> Name <input class="name" type="text"/>  
    <br> Home <input class="home" type="text"/> 
	<br> <button class="button">add Div</button>
	<div class="textDiv"></div>
`;
var button = document.querySelector(".button");
var nameInput = document.querySelector(".name");
var homeInput = document.querySelector(".home");
var textDiv = document.querySelector(".textDiv");

button.onclick = function(e) {
	console.log(nameInput.value + homeInput.value);
	var text = nameInput.value + homeInput.value; 
	var div = `<div>${text}</div>`;
	textDiv.innerHTML += div; 
};




