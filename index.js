
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];


function getUserNumberInput() {
    return parseInt(usrInput.value)
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
} 

function writeTolog(
    operationIdentifier,
    prevResult,
    operationalNumber,
    newResult,
) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationalNumber,
        result: newResult
    };
    logEntries.push(logEntry)
    console.log(logEntries)
    
}

function calculationResult (calculationType) {
    if (
        calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE'
        
    ) {
       return;
    }

    // if (
    //     calculationType === 'ADD' ||
    //     calculationType === 'SUBTRACT' ||
    //     calculationType === 'MULTIPLY' ||
    //     calculationType === 'DIVIDE'  
    //     ) {
    //         const enteredNumber = getUserNumberInput()
    //         const initialResult = currentResult;
    //         let mathOperator;
    //         if (calculationType === 'ADD') {
    //             currentResult += enteredNumber;
    //             mathOperator = '+'; 
    //         } else if (calculationType === 'SUBTRACT') {
    //             currentResult -= enteredNumber;
    //             mathOperator = '-'
    //         } else if (calculationType === 'MULTIPLY') {
    //             currentResult *= enteredNumber;
    //             mathOperator = '*'
    //         } else {
    //             currentResult /= enteredNumber;
    //             mathOperator = '/'
    //         }
        
    //         createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    //         writeTolog(calculationType, initialResult, enteredNumber, currentResult);
    //     }

    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+'; 
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-'
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*'
    } else {
        currentResult /= enteredNumber;
        mathOperator = '/'
    }

    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeTolog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculationResult('ADD')
};

function subtract() {
   calculationResult('SUBTRACT')
};

function multiply() {
   calculationResult('MULTIPLY')
};
  
    
function divide() {
    calculationResult('DIVIDE')
 
};

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)












