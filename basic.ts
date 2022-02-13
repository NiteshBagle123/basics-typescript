function add(num1: number, num2: number, result: boolean) {
    if(result) {
        console.log(num1 + num2);
    } else {
        return num1 + num2;
    }
}

let number1 = '1';
const  number2 = 2;
const printResult = true;

const result  = add(+number1, +number2, printResult);
console.log(result);


