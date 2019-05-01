const Gameboard = (()=> {
	let board = [[null,null,null],[null,null,null],[null,null,null]];

	const Player = (sym) =>{
		const  symbol = sym;

		const  won = `Player ${symbol} Won`;

		return {symbol: symbol, won: won}
	};

	const get_board = () => board;

	const x = Player("X");

	const o = Player("O");

	const put_symbol = (player,posx, posy) => {
		if (board[posx][posy]== null){board[posx][posy] = player.symbol;};
	};

	const check_victory = (p)=>{	
		let player = p.symbol		
		if (board.some(function(element){return element[0] == player && element[1] == player && element[2] == player})
						){return true}
		else if(board[0][0]== player && board[1][0]== player && board[2][0]== player){return true}
		else if(board[0][2]== player && board[1][2]== player && board[2][2]== player){return true}
		else if(board[0][0]== player && board[1][1]== player && board[2][2]== player){return true}
		else if(board[0][2]== player && board[1][1]== player && board[2][0]== player){return true}
		else if(board[0][1]== player && board[1][1]== player && board[2][1]== player){return true}
		else {return false};
	};

	const check_tie = ()=>{
		if(board.every(element_array => {
			return element_array.every(element =>{ return element!= null})
			}) && !check_victory(Gameboard.x) && !check_victory(Gameboard.o) ){return true}
		else{return false};
	};

	const remove_symbols = () => {board = [[null,null,null],[null,null,null],[null,null,null]];};

	return {get_board: get_board, x: x, o: o, put_symbol: put_symbol,remove_symbols: remove_symbols ,check_victory: check_victory, check_tie: check_tie}
})();


const Displaycontroller = (() => {
	const squares = document.querySelectorAll("button");

	const remove_squares_handler  = ()=>{ squares };


	function toggable(click_obj){
						let button = click_obj.target;
						player = click_obj.target.player;
						//console.log(player);
						//console.log(button);
	 			 		button.textContent = `${player.symbol}`;
	 			 		posx = button.id.split("-")[0];
	 					posy = button.id.split("-")[1];
	 			 		Gameboard.put_symbol(player, posx, posy);
		 			 	button.classList.remove("non-pressed");
			 			button.classList.add("pressed");
			 			play(player);
	};	

	

	const press_squares = (current_player) =>{
		//let player = current_player;

				


	 	squares.forEach(button => {
	 		button.player = current_player;

	 		if(button.className=="non-pressed"){
	 			 	button.addEventListener("click", toggable);
	 		};
	 	});	

	 		
	};

	const remove_squares_events = (current_player) =>{

		squares.forEach(button => {
			button.removeEventListener("click", toggable);
		}); 

	 		
	};


	const display_victory = (player) => {
		alert(player.won);
	};

	const display_tie = () => {
		alert("tie");
	};

	const clear = ()=>{
		squares.forEach(button =>{
			button.textContent = "";
			button.classList.remove("pressed");
			button.classList.add("non-pressed");
		});
		Gameboard.remove_symbols();
	};
	

	 return {squares: squares, press_squares: press_squares, display_victory: display_victory,display_tie:display_tie ,clear:clear, remove_squares_events: remove_squares_events}
})();




function play(player=Gameboard.x){
	if(player.symbol!="X"){
		console.log("im x");
		Displaycontroller.remove_squares_events(Gameboard.o);
		Displaycontroller.press_squares(Gameboard.x);

		if(Gameboard.check_victory(Gameboard.o)){
			Displaycontroller.display_victory(Gameboard.o);
			Displaycontroller.clear();	
			play();
		}
		else if(Gameboard.check_tie()){
			Displaycontroller.display_tie();
			Displaycontroller.clear();	
			play();
		}
		
	}
	else{
		console.log("im o");
		Displaycontroller.remove_squares_events(Gameboard.x);
		Displaycontroller.press_squares(Gameboard.o);

		if(Gameboard.check_victory(Gameboard.x)){
			Displaycontroller.display_victory(Gameboard.x);
			Displaycontroller.clear();		
			play();
		}
		else if(Gameboard.check_tie()){
			Displaycontroller.display_tie();
			Displaycontroller.clear();	
			play();
		}
		
	}
}



play();

