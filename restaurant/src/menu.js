let menu = () =>{

	
	let elem = document.createElement("ul");
	elem.id = "tab-content";
	let li1 = document.createElement("li");
	li1.textContent = "food";
	elem.appendChild(li1);
	let li2 = document.createElement("li");
	li2.textContent = "more food";
	elem.appendChild(li2);
	return elem;
}

export {menu};