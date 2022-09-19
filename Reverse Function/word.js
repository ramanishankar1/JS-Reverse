var num = parseInt(prompt("Enter a number"))
var word;
var reverse = 0;
var lastdigit;
var x = '';
function rev(word) {
    if (word === 0) {
        console.log("Zero");
    }

    else if (word === 1) {
        console.log("one");
    }

    else if (word === 2) {
        console.log("two");
    }

    else if (word === 3) {
        console.log("three");
    }

    else if (word === 4) {
        console.log("four");
    }
    else if (word === 5) {
        console.log("five");
    }
    else if (word === 6) {
        console.log("six");
    }
    else if (word === 7) {
        console.log("seven");
    }
    else if (word === 8) {
        console.log("eight");
    }
    else if (word === 9) {
        console.log("nine");
    }
    return word;
}

while (num != 0) {
    lastdigit = num % 10;
    reverse = reverse * 10 + lastdigit;
    word = rev(lastdigit);
    x = word;
    num = Math.floor(num / 10);
   // console.log(x);
}

