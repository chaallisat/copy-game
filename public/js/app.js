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
// display current score boared
const score = $("#score");
// display high score
const highScore = $("#high-score");
highScore.html("0")
// on click, 1++ if correct
// on click, end game if !correct

//create comp
// assign arrow or wasd to numbers 1,2,3,4
// random select number
// when number is selected, chosenImg()
