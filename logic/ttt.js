let game = {
    user: '',
    computer: '',
    currentPlayer: '',
    moves: 1
}

document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        // Selectors
        let xChoice = document.getElementById("x");
        let oChoice = document.getElementById("o");
        let modalEl = document.getElementById("modal");
        let gamePieces = document.getElementsByClassName("game-piece");
        //Listener functions
        
        function firstMove() {
            gamePieces[4].innerHTML = game.computer;
            gamePieces[4].removeEventListener("click", icon);
        }

        function setPlayer(player) {
            game.currentPlayer = player;
        }

        function setComputerX() {
            game.computer = "x";
        }

        function setComputerO() {
            game.computer = "o"
        }

        function setUserX() {
            game.user = "x";
            setComputerO();
            modalEl.classList.toggle("hide");
            firstMove();
            setPlayer("user");
        }

        function setUserO() {
            game.user = "o"
            setComputerX();
            modalEl.classList.toggle("hide");
            firstMove();
            setPlayer("user");
        }

 
        //Listeners
        xChoice.addEventListener("click", setUserX);
        oChoice.addEventListener("click", setUserO);

        // onClick isn't best practice, adding event listeners to all game pieces
        
        


        function addOnClickToElements(elements, listener) {
            for(let i = 0; i < elements.length; i++) {
                elements[i].addEventListener("click", listener)
            }
        }

        addOnClickToElements(gamePieces, icon);

        function reset() {
            console.log("reset called");
            for(var x = 0; x < gamePieces.length; x++) {
                gamePieces[x].innerHTML = "";
            }
            game.moves = 1;
            
            let winners = document.getElementsByClassName("win");
            for(var i = 0; i < winners.length; i++) {
                winners[i].classList.remove("win");
            }
            addOnClickToElements(gamePieces, icon);

            setTimeout(firstMove, 200)
        }

        function computerAI() {
            
            switch (true) {
                
                case document.getElementById("one").innerHTML != game.user && document.getElementById("one").innerHTML != game.computer:
                    icon("one");
                    break;
                case document.getElementById("two").innerHTML != game.user && document.getElementById("two").innerHTML != game.computer:
                    icon("two");
                    break;
                case document.getElementById("three").innerHTML != game.user && document.getElementById("three").innerHTML != game.computer:
                    icon("three");
                    break;
                case document.getElementById("four").innerHTML != game.user && document.getElementById("four").innerHTML != game.computer:
                    icon("four");
                    break;
                case document.getElementById("five").innerHTML != game.user && document.getElementById("five").innerHTML != game.computer:
                    icon("five");
                    break;
                case document.getElementById("six").innerHTML != game.user && document.getElementById("six").innerHTML != game.computer:
                    icon("six");
                    break;
                case document.getElementById("seven").innerHTML != game.user && document.getElementById("seven").innerHTML != game.computer:
                    icon("seven");
                    break;
                case document.getElementById("eight").innerHTML != game.user && document.getElementById("eight").innerHTML != game.computer:
                    icon("eight");
                    break;
                case document.getElementById("nine").innerHTML != game.user && document.getElementById("nine").innerHTML != game.computer:
                    icon("nine");
                    break;
            }
        }

        function draw() {
            if(game.moves == 9) {
                setTimeout(reset, 1000)
            }
        }

        function removeListeners () {
            for(var i = 0; i < gamePieces.length; i++) {
                gamePieces[i].removeEventListener("click", icon);
            }
        }
        
        function show(x, y, z) {
            let xEl = document.getElementById(x);
            let yEl = document.getElementById(y);
            let zEl = document.getElementById(z);
            console.log(xEl, yEl, zEl)
            xEl.classList.add("win");
            yEl.classList.add("win");
            zEl.classList.add("win");
            removeListeners();
            setTimeout(reset, 1500);
        }

        function gameStatus() {
            let playerPiece;

            if(game.currentPlayer == "user") {
                playerPiece = game.user;
            } else {
                playerPiece = game.computer;
            }
            
            switch (true) {
                case document.getElementById("one").innerHTML === playerPiece && document.getElementById("two".innerHTML) === playerPiece &&
                document.getElementById("three").innerHTML === playerPiece:
                    show('one', 'two', 'three');
                    break;
                case document.getElementById("four").innerHTML === playerPiece && document.getElementById("five").innerHTML === playerPiece &&
                document.getElementById("six").innerHTML === playerPiece:
                    show("four", "five", "six");
                    break;
                case document.getElementById("seven").innerHTML === playerPiece && document.getElementById("eight").innerHTML === playerPiece &&
                document.getElementById("nine").innerHTML === playerPiece:
                    show("seven", "eight", "nine");
                    break;
                case document.getElementById("one").innerHTML === playerPiece && document.getElementById("four").innerHTML === playerPiece &&
                document.getElementById("seven").innerHTML === playerPiece:
                    show("one", "four", "seven");
                    break;
                case document.getElementById("two").innerHTML === playerPiece && document.getElementById("five").innerHTML === playerPiece &&
                document.getElementById("eight").innerHTML === playerPiece:
                    show("two", "five", "eight");
                    break;
                case document.getElementById("three").innerHTML === playerPiece && document.getElementById("six").innerHTML === playerPiece &&
                document.getElementById("nine").innerHTML === game.currentPlayer:
                    show("third", "six", "nine");
                    break;
                case document.getElementById("one").innerHTML === playerPiece && document.getElementById("five").innerHTML === playerPiece &&
                document.getElementById("nine").innerHTML === playerPiece:
                    show('one', 'five', 'nine');
                    break;
                case document.getElementById("three").innerHTML === playerPiece && document.getElementById("five").innerHTML === playerPiece &&
                document.getElementById("seven").innerHTML === playerPiece:
                    show('three', 'five', 'seven');
                    break;
                default:
                    draw();
            }
            
        }

        // most of the games functionality
        function icon() {
            if(typeof arguments[0] == "string") {
                let element = document.getElementById(arguments[0]);
                if (game.currentPlayer == "user") {
                    element.innerHTML = game.user;
                    element.removeEventListener("click", icon);
                    gameStatus();
                    setPlayer("computer");
                } else if (game.currentPlayer == "computer") {
                    element.innerHTML = game.computer;
                    element.removeEventListener("click", icon);
                    gameStatus();
                    setPlayer("user");
                }
            } else {
                if (game.currentPlayer == "user") {
                    document.getElementById(this.id).innerHTML = game.user;
                    this.removeEventListener("click", icon);
                    gameStatus();
                    setPlayer("computer");
                } else if (game.currentPlayer == "computer") {
                    document.getElementById(this.id).innerHTML = game.computer;
                    this.removeEventListener("click", icon);
                    gameStatus();
                    setPlayer("user");
                }
            }
            

            

            game.moves++
            console.log("game moves:", game.moves)
            draw();

            if (game.currentPlayer == "computer") {
                computerAI();
            }
        }
        
        // function icon(id) {
        //     console.log(id);
        // }
        // Game logic
        // while(game.moves < 10) {
            
        // }





    }
}
