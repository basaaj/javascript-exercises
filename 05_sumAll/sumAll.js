const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR';
    else if (a < 0 || b < 0) return 'ERROR';
    
    let sum = 0;
    let smallerNum = a;
    let largerNum = b;

    if (a > b) {
        largerNum = a;
        smallerNum = b;
    }

    for (let num = smallerNum; num <= largerNum; num++) {
        sum += num;
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
