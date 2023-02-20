//תרגיל 2

// 2. לוח הכפל מתוחכם:
// צרו את לוח הכפל באמצעות  JAVASCRIPT. הדגישו (באמצעות javascript) את המספרים 50,100,72

// for console
var i = 0;
var j = 0;
var multiplicationTable = []

for (i = 1; i <= 10; i++) {
    var row = {};
    for (j = 1; j <= 10; j++) {
        var res = i * j;
        if (res === 50) {
            row[j] = '*50*';
        }
        else if (res === 72) {
            row[j] = '*72*';
        }
        else if (res === 100) {
            row[j] = '*100*';
        }
        else {
            row[j] = res;
        }
    }
    row[' '] = i;
    multiplicationTable.push(row);
}
console.table(multiplicationTable);

// for HTML


var i;
document.write('<table border="1" cellpadding="3">');

for (i = 1; i <= 100; i++) {
    if (i + 1 % 10 == 0){
        document.write("<tr>")
    }

    document.write('<td align="right" ');
    if (i === 50 || i === 72 || i === 100) {
        document.write(" bgcolor='red'");
    }
    document.write(">" + i + "</td>");
    if (i % 10 == 0){
        document.write("</tr>");
    }
}

