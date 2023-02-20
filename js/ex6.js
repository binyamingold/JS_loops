// תרגיל 6

// עם מערך התלמידים צרו "תוכנת חיפוש" שבה המשתמש מזין שם והתוכנה אומרת אם התלמיד נמצא במערך.

var myNames = [
    'avi',
    'benny',
    'nati',
    'chaim',
    'chana'
];

var UserGuess = prompt("Please enter a name to search").toLowerCase(); 

for (var i=0; i<myNames.length; i++){
    if (UserGuess === myNames[i]){
        console.log ("it's in!");
        alert("it's in!");
        break;
    }   
   
}

if (i === myNames.length){
    alert("it's not in.");
}