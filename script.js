//your code here

const textElement = document.querySelector("#evaluatedText");
const h3Element = document.querySelector("#wordCount");

function handleInput(e) {
    const sentence = e.target.value;
	
	const match = sentence.match(/\S+/ig);
	const count = match.lenght ? match.length : 0; 
	//alert(match);
	h3Element.textContent = count;
}
textElement.addEventListener('input', handleInput );



