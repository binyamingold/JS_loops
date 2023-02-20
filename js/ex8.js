// תרגיל 8

// צרו ריבוע לפי מספר מהמשתמש


var UserGuess = prompt("Please enter a number of stars");

var star = "\n"


for (var i=0; i<UserGuess; i++){
    for (var j = 0; j<UserGuess; j++){
        star = star +"*";
    }
     star += '\n'    
    }
console.log(star);
