const fibonacci = function(num) {
    let theNum = Number(num);

    if (theNum === 0) return 0;
    if (theNum < 0) return "OOPS";

    let currNum = 1;
    let prevNum = 0;

    for (let i = 2; i <= theNum; i++) {
        let sum = prevNum + currNum;
        prevNum = currNum;
        currNum = sum;
    }

    return currNum;
};

// Do not edit below this line
module.exports = fibonacci;
