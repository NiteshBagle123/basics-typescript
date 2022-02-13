function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number) {
    console.log(`Result: ${num}`);
}

printResult(1);

// function types
let combinedValues: (num: number) => void;

combinedValues = printResult;

// callbacks function

function addHandler(n1: number, n2: number, cb: (num: number) => void) {
    return cb(n1 + n2);
}

addHandler(1, 2, (result) => {
    console.log(result);
});
