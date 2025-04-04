const rad_converter = Math.PI/180

function add(input1, input2){

    return input1 + input2

}

function subtract(input1, input2){

    return input1 - input2

}

function multiply(input1, input2){
    

    return input1 * input2

}

function divide(input1, input2){

    if (input2 === 0) {
        return NaN
    }

    return input1 / input2

}

function square(input1){

    return input1**2
}

function sqrt(input1){

    return Math.sqrt(input1);
}


function exponent(input1, input2){

    return input1**input2
}

function factorial(input1){
    if (!Number.isInteger(input1) || input1 < 0) {
        return NaN;
    }

    if(input1 == 0 || input1 == 1){
        return 1;
    }

    fact = 1
    for(let i = input1; i > 0; i--){
        fact = fact * i
        
    }

    return fact
}

function sin(input1){

    return Math.sin(input1*rad_converter)

}

function cos(input1){

    return Math.cos(input1*rad_converter)
    
}

function tan(input1){

    return Math.tan(input1*rad_converter)
    
}

