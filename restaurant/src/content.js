

let title = (title) =>{
    let elem = document.createElement("h1");
    elem.textContent = `${title}`;
    return elem
    
}

let phrase = (phrase) =>{
   let elem = document.createElement("p");
   elem.textContent = `${phrase}`;
   return elem;
    
}

let img = (link) =>{
	let elem = document.createElement("img");
	elem.width = 700;
	elem.src = link;
	return elem;	
}



export {title, phrase, img};



