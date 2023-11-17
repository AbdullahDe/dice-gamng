// buttons
const sheshBesh = document.querySelector('.btn--roll') 
const qaytadanBoshla = document.querySelector('.btn--new')
const ochkoniHisobla = document.querySelector('.btn--hold')

//dice rasm
const diceImg = document.querySelector('.dice')
diceImg.style.display = 'none'

//verible
let currentScore = 0
let activePlayer = 0
let score = [0, 0]
let gameower = true

const switchPlayer = ()=>{
	currentScore = 0
		document.getElementById(`current--${activePlayer}`).textContent = currentScore
		activePlayer = activePlayer === 0 ? 1 : 0
		document.querySelector('.player--0').classList.toggle('player--active')
		document.querySelector('.player--1').classList.toggle('player--active')
}

sheshBesh.addEventListener('click', ()=> {
	if(gameower){
	diceImg.style.display = 'block'

	const randomNumber = Math.floor( Math.random() * 6 + 1)
	diceImg.src = `./dice-${randomNumber}.png`

	if(randomNumber !== 1) {
	currentScore += randomNumber
	document.getElementById(`current--${activePlayer}`).textContent = currentScore
	}else {
		switchPlayer()
	}
}
})

//hold score

ochkoniHisobla.addEventListener('click', ()=>{
	if(gameower) {
	score[activePlayer] += currentScore
	document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer]
	if(currentScore==0){
		!switchPlayer()
	}
	if(score[activePlayer]>=100) {
		document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
		//winner
gameower = false
	}else{
		switchPlayer()
	}
}
})

//new game

qaytadanBoshla.addEventListener('click',()=>{
	currentScore = 0
  activePlayer = 0
  score = [0, 0]
	gameower = true
	document.getElementById(`current--0`).textContent = 0
	document.getElementById(`current--1`).textContent = 0
	document.getElementById(`score--0`).textCoscore = 0
	document.getElementById(`score--1`).textContent = 0
document.querySelector('.player--0').classList.remove('player--winner')
document.querySelector('.player--1').classList.remove('player--winner')
document.querySelector('.player--1').classList.remove('player--active')
document.querySelector('.player--0').classList.add('player--active')
})
// qale