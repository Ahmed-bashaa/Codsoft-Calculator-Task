function deleteOne() {
    let currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
}

function clearAll() {
    document.getElementById('display').value = '';
}

function insert(character) {
    document.getElementById('display').value += character;
}


function calculateExpression(expression) {
    try {
       
        expression = expression.replace(/\s+/g, '');
 
        let result = new Function('return ' + expression)();
        
        if (isNaN(result)) {
            throw new Error("Invalid Expression");
        }

        return result;
    } catch (error) {
        throw new Error("Invalid Expression");
    }
}

function calculate() {
    let expression = document.getElementById('display').value;

    try {
        let result = calculateExpression(expression);
        document.getElementById('display').value = result;

    } catch (error) {
        document.getElementById('display').value = 'Error';
        setTimeout(clearAll, 2500); 
    }
}
