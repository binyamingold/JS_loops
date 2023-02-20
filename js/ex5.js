// תרגיל 5

// .צרו "תוכנה" שיוצרת מערכים
// א. לפי המספר שמתקבל יווצר מערך של כל המספרים מאפס ועד כולל המספר המבוקש.
// ב. אם המשתמש לא סיפק מספר...תמשיכו לבקש ממנו עד שייתן מספר תקין.

var arrayOfNumbers = [];

var num = prompt ("Please enter a number to set the size of the array","");
if (num == 0  ){
    while (num == 0){
        num = prompt ("Please enter a number to set the size of the array","");
    }
}
if (num != 0  ){
    for (var index = 0; index <= num; index++){
        arrayOfNumbers.push(index);
    }
}
console.log(arrayOfNumbers);
    

