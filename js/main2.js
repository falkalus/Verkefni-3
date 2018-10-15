/*Búðu til aðra vefsíðu með tveimur <input type=”text”/> 
reitum og einum takka. 
Það sem takkinn gerir er að setja inn nýtt div 
með textanum úr báðum input-unum 
(svipað og við gerðum með tix*/

var mainDiv = document.querySelector("#wrapper");
mainDiv.innerHTML = `
    <br> Name <input type="text"/>  
    <br> Home <input type="text"/> 
	<br> <button class="button">add Div</button>
`
