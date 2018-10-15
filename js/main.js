var mainDiv = document.querySelector("#main");
mainDiv.innerHTML = `
	<h1>Smelltu á hnappinn:</h1>
	<button>Regnbogi</button>
`;
var button = document.querySelector("button");

function randomColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);

document.body.style.background = bgColor;

}

button.onclick = randomColor;
