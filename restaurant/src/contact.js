let contact = () =>{
	
	let elem = document.createElement("div");
	elem.id = "tab-content";
	let text = document.createElement("p");
	text.textContent = "this is the contact part";
	elem.appendChild(text);
	return elem;
	
}




export {contact};