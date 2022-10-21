// 練習1 【let/const差別 & template string 】

const player = "Coco"
const opponent = "Vic"
const game = 'AmazingFighter'
let points = 0
let hasWon = false

points += 100
hasWon = true

if(hasWon) {
  console.log(`${player} got ${points} points and won the game! `)
}else{
  console.log(`the winner is ${opponent} ! ${player} lose the game`)
}

// 練習2 【列出陣列】

let mySongs = ['so right', 'lemon', 'crystal snow']

function logArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

logArray(mySongs)

// 練習3 【localStorage】

// localStorage.setItem('color', 'purple')
let result = localStorage.getItem('color')
console.log(result)

// 練習4 【addEventListener & object in array】

// --- html --- 
{/* <button id='btn-el'>LOG SCORE</button> */}

let data = [
  {
    player: 'Coco',
    score: 29
  },
  {
    player: 'Lucy',
    score: 26
  }
]

let btnEl = document.getElementById('btn-el') 
btnEl.addEventListener('click', function(){
  console.log(data[0].score) //use dot.notation
})