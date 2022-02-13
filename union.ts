
// union types
function add(input1: number | string, input2: number | string) {
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        return input1 + input2;
    } else {
        return `${input1}${input2}`;
    }
}

add(1,2);

// literal types
function add1(input1: number | string, input2: number | string, resultConversion: '1' | '2') {
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        return input1 + input2;
    } else {
        return `${input1}${input2}`;
    }
}

add1(1,2, '1');

// types aliases
type Combinable = 'as-Number' | 'as-String';
function add1(input1: number | string, input2: number | string, resultConversion: Combinable) {
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        return input1 + input2;
    } else {
        return `${input1}${input2}`;
    }
}

add1(1,2, 'as-Number');
