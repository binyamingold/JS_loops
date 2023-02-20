// תרגיל 9

// ציירו משולש כזה באמצעות לולאה וקונסולים.
// (**אתגר** ייצרו באמצעות לולאה אחת)

// *
// **
// ***
// ****
// ***
// **
// *


var height = 7



for(var i = 0; i <= height ; i++){
    var len
    // להוסיף כוכביות
    if (i < ((height/2))){
        len = i;
        console.log('*'.repeat(len))
    }
    // להוריד כוכביות
    else{
        len = height-i+1;
        console.log('*'.repeat(len))
    }

}
