var arr = [];
var a = 1;
while (a < 100) {
    a++;
    arr.push(a)
}

var b = 2;
var c = 2;
while (b <= 100) {
    b += c;
    arr.splice(arr.indexOf(b));
}

b = 4;
c = 3;
while (b < 100) {
    if (b % c === 0 && arr.indexOf(b) !== -1) {
        arr.splice(arr.indexOf(b), 1);
    } else {
        b++;
    }
}

b = 6;
c = 5;
while (b < 100) {
    if (b % c === 0 && arr.indexOf(b) !== -1) {
        arr.splice(arr.indexOf(b), 1);
    } else {
        b++;
    }
}

b = 8;
c = 7;
while (b < 100) {
    if (b % c === 0 && arr.indexOf(b) !== -1) {
        arr.splice(arr.indexOf(b), 1);
    } else {
        b++;
    }
}

console.log(arr);




