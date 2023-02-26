//your code here

const textElement = document.querySelector("#evaluatedText");
const h3Element = document.querySelector("#wordCount");

function handleInput(e) {
    const sentence = e.target.value;
	
	const match = sentence.match(/\S+/ig).length;
	//alert(match);
	h3Element.textContent = match;
}
textElement.addEventListener('input', handleInput );



