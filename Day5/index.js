const sumAndDouble = (...rest) => {
    let sum = rest.reduce((acc, cur) => {return acc + cur});
    let double = rest.map((elm) => {return elm * 2})
    return {sum , double}
}

console.log(sumAndDouble(1,2,3,4));