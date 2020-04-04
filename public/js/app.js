// create a score boared
// when clicked count 
// ex:
// 1) comp: w
// 1) player: w a 
// 2) comp: w a s
// 2) player: w a s w
// 4) comp: w a s w s d a
// if player 4) is worng, show as score 3
// when arrow is clicked, change corresponding img to a star for .5 sec function chosenImg()

// display init imgs
const leftDiv = $("#left")
const leftImg = $("<img class='image'>").attr("src", "public/img/left.png");
leftDiv.append(leftImg)

const upDiv = $("#up")
const upImg = $("<img class='image'>").attr("src", "public/img/up.png");
upDiv.append(upImg)

const rightDiv = $("#right")
const rightImg = $("<img class='image'>").attr("src", "public/img/right.png");
rightDiv.append(rightImg)

const downDiv = $("#down")
const downImg = $("<img class='image'>").attr("src", "public/img/down.png");
downDiv.append(downImg)

// display current score boared
let score = 0;
const scoreDiv = $("#score");
scoreDiv.html(`Current Score: ${score}`)

// display high score
let highScore = 0
const highScoreDiv = $("#high-score");
highScoreDiv.html(`High Score: ${highScore}`)


// on click, 1++ if correct
// on click, end game if !correct

//create comp
// assign arrow or wasd to numbers 1,2,3,4
// random select number
// when number is selected, chosenImg()
