let myLibrary = []

let table= document.querySelector(".table-body");

function Book(name, author, pages, status){
	this.name = name
	this.author = author
	this.pages = pages
	this.status = status
	this.info= function() {
		return `${name} by ${author}, ${pages} pages, ${status}`
	}
}

Book.prototype.addBookToLibrary =function (){
	myLibrary.push(this);
}

Book.prototype.status_change =function (){
	if(this.status == "readed"){
		this.status = "not readed";
	}
	else if (this.status == "not readed"){
		this.status = "readed";
	}
}

function delete_book(id){
	
	let book_element =document.getElementById(id);
	 let book_id = parseInt(book_element);
	table.removeChild(book_element);
	myLibrary = myLibrary.filter(function(book,index){
		return book_id != index;
	});

}

function change_status(id){

	let book_element = parseInt(id);
	myLibrary.forEach( function(element,index){
		if (index == book_element){
			console.log(book_element)
			element.status_change();
		}
	});

	clear_render();
	Render();

}



for(i=0; i<3; i++){

	let hobbit = new Book(`hobbit${i}`, "jjr tolkien" , 257, "readed");

    hobbit.addBookToLibrary();
}

 

console.log(myLibrary);


function Render(){
	myLibrary.forEach(
		function (element,index) {
			if (!document.getElementById(`${index}`)){
			row = document.createElement("tr");
			row.id=`${index}`;
			table.appendChild(row);

			table_name = document.createElement("td");
			table_name.textContent = `${element["name"]}`;
			row.appendChild(table_name);

			table_author = document.createElement("td");
			table_author.textContent = `${element["author"]}`
			row.appendChild(table_author);

			table_pages = document.createElement("td");
			table_pages.textContent = `${element["pages"]}`
			row.appendChild(table_pages);

			table_status = document.createElement("td");
			table_status.textContent = `${element["status"]}`
			row.appendChild(table_status ); 

			status_button = document.createElement("button");
			status_button.textContent = "status"
			status_button.addEventListener("click", function(){change_status(this.parentNode.id); })
			row.appendChild(status_button); 

			delete_button = document.createElement("button");
			delete_button.textContent = "delete"
			delete_button.addEventListener("click", function(){delete_book(this.parentNode.id); })
			row.appendChild(delete_button); 
			}
			
		})
}

function clear_render(){
      myLibrary.forEach(
      	function(element,index){
      		row = document.getElementById(`${index}`);
      		table.removeChild(row);

      	})
}



Render();

let form = document.querySelector("#form");

let show_form_button = document.querySelector("#add_button");

show_form_button.addEventListener("click", function() {form.classList.remove("hidden");})

let addbook_button = document.querySelector("#add_book_button");

function Add_book(){
	let book_name =document.getElementById("book_name").value;
	let book_author =document.getElementById("book_author").value;
	let book_pages =parseInt(document.getElementById("book_pages").value);
	let book_status =document.getElementById("book_status") ? "readed" : "not readed" ;	
	var book = new Book(book_name, book_author, book_pages, book_status );
	console.log(book);
	book.addBookToLibrary();
	document.getElementById("book_name").value="";
	document.getElementById("book_author").value="";
	document.getElementById("book_pages").value="";
	
};

addbook_button.addEventListener("click", function(){Add_book(); form.classList.add("hidden"); Render();})