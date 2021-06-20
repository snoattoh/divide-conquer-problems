const findFirstValue = require("./helper-functions").findFirstValue;
const findLastValue = require("./helper-functions").findLastValue;
//still needed to reference the solution, not for adding the value, but for having the idea to just find the last occurence...

function sortedFrequency(arr, val) {

    let idx = findFirstValue(arr, val);
    console.log(idx);
    if(idx == -1) return idx;
    let lastIdx = findLastValue(arr,val);
    console.log(lastIdx);
    return lastIdx - idx + 1;
 

}

module.exports = sortedFrequency