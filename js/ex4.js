//תרגיל 4

// 4.צרו לולאת while שתעצור רק אם המשתמש רושם STOP


var answer = "";

while (answer != "stop") {
    answer = prompt("Enter STOP to continue").toLowerCase();
    if (answer === 'stop') {
        alert("Click OK to continue");
    } else {
        alert("that's not it...");
    }
}

