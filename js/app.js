const game = () => {
	let playerScore = 0;
	let computerScore = 0;
	let moves = 0;

	const playGame = () => {
		const rockBtn = document.querySelector('.rock');
		const paperBtn = document.querySelector('.paper');
		const scissorBtn = document.querySelector('.scissor');
		const playerOptions = [rockBtn,paperBtn,scissorBtn];
		const computerOptions = ['rock','paper','scissors']
		
		playerOptions.forEach(option => {
			option.addEventListener('click',function(){

				const movesLeft = document.querySelector('.movesleft');
				moves++;
				movesLeft.innerText = `Moves Left: ${10-moves}`;
				
				const choiceNumber = Math.floor(Math.random()*3);
				const computerChoice = computerOptions[choiceNumber];

				winner(this.innerText,computerChoice)

				if(moves == 10){
					gameOver(playerOptions,movesLeft);
				}
			})
		})
	}

	const winner = (player,computer) => {
		const result = document.querySelector('.result');
		const playerScoreBoard = document.querySelector('.player-count');
		const computerScoreBoard = document.querySelector('.computer-count');
		player = player.toLowerCase();
		computer = computer.toLowerCase();
		if(player === computer){
			result.innerHTML = '<p class="subtitle is-5 has-text-centered has-text-info has-text-weight-semibold">Tie</p>';
		}
		else if(player == 'rock'){
			if(computer == 'paper'){
				result.innerHTML = '<p class="subtitle is-5 has-text-centered has-text-info has-text-weight-semibold">Computer Won</p>';
				computerScore++;
				computerScoreBoard.textContent = computerScore;

			}else{
				result.innerHTML = '<p class="subtitle is-5 has-text-centered has-text-info has-text-weight-semibold">Player Won</p>';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'scissors'){
			if(computer == 'rock'){
				result.innerHTML = '<p class="subtitle is-5 has-text-centered has-text-info has-text-weight-semibold">Computer Won</p>';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.innerHTML = '<p class="subtitle is-5 has-text-centered has-text-info has-text-weight-semibold">Player Won</p>';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'paper'){
			if(computer == 'scissors'){
				result.innerHTML = '<p class="subtitle is-5 has-text-centered has-text-info has-text-weight-semibold">Computer Won</p>';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.innerHTML = '<p class="subtitle is-5 has-text-centered has-text-info has-text-weight-semibold">Player Won</p>';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
	}

	const gameOver = (playerOptions,movesLeft) => {

		const chooseMove = document.querySelector('.move');
		const result = document.querySelector('.result');
		const reloadBtn = document.querySelector('.reload');

		playerOptions.forEach(option => {
			option.style.display = 'none';
		})

		chooseMove.innerHTML = '<p class="title is-4 has-text-centered pb-2 has-text-weight-bold">Game Over!!!</p>';
		movesLeft.style.display = 'none';

		if(playerScore > computerScore){
			result.innerHTML = '<p class="subtitle is-5 has-text-weight-semibold has-text-centered">You Won.</p>';
		}
		else if(playerScore < computerScore){
			result.innerHTML = '<p class="subtitle is-5 has-text-weight-semibold has-text-centered">You Lost.</p>';
		}
		else{
			result.innerHTML = '<p class="subtitle is-5 has-text-weight-semibold has-text-centered">Its Tie.</p>';
		}
		reloadBtn.innerHTML = '<button class="button is-success is-fullwidth is-outlined">Restart</button>';
		reloadBtn.addEventListener('click',() => {
			window.location.reload();
		})
	}
	playGame();
}

game();