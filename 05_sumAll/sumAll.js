const sumAll = function(lowerNum, higherNum) {
    let finalSum = 0;

    if (lowerNum < 0 
        || higherNum < 0 
        || lowerNum === null 
        || higherNum === null
        || !Number.isInteger(lowerNum)
        || !Number.isInteger(higherNum)) {
        return 'ERROR';
    }
    // in case user passes higher number as first argument
    if (lowerNum > higherNum) {
        for (let i = higherNum; i <= lowerNum; i++) {
            finalSum += i;
        }
    } else {
        for (let i = lowerNum; i <= higherNum; i++) {
            finalSum += i;
        }
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
