import {title, phrase, img} from  './content';

import {contact} from './contact';

import {menu} from './menu';

let content = document.querySelector("#content");
let menu_button = document.querySelector("#menu");
let contact_button = document.querySelector("#contact");
let tab_content = null;
let tab = document.querySelector("#tab");





function remove_content(elem){
	
	if (elem != null ){
		tab.removeChild(elem);
	}
    
};

function menu_function(){
	this.classList.add("pressed");
	contact_button.classList.remove("pressed");
	tab_content = document.querySelector("#tab-content");
	remove_content(tab_content);
	tab.appendChild(menu());
};

function contact_function(){
	this.classList.add("pressed");
	menu_button.classList.remove("pressed");
	tab_content = document.querySelector("#tab-content");
	remove_content(tab_content);
	tab.appendChild(contact());
};




content.appendChild(title("funny animals restaurant"));
content.appendChild(phrase("Excelent  food with the best price"));
content.appendChild(img("https://cdn.weasyl.com/~melthecannibal/submissions/1279795/3281a5b6ad6763c1baab47c1191ac292e777dee163a14265dd56ae5da222e462/melthecannibal-stream-commissions-66-food-porn.png"));


menu_button.addEventListener("click", menu_function);
contact_button.addEventListener("click", contact_function);