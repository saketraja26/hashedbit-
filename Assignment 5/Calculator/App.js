function Calculator() {
    var [num1, setNum1] = React.useState('');
    var [num2, setNum2] = React.useState('');
    var [result, setResult] = React.useState('');

    function handleNum1Change(e) {
        setNum1(e.target.value);
    }

    function handleNum2Change(e) {
        setNum2(e.target.value);
    }

    function add() {
        var n1 = parseFloat(num1);
        var n2 = parseFloat(num2);
        var answer = n1 + n2;
        setResult('Result: ' + answer);
    }

    function subtract() {
        var n1 = parseFloat(num1);
        var n2 = parseFloat(num2);
        var answer = n1 - n2;
        setResult('Result: ' + answer);
    }

    function multiply() {
        var n1 = parseFloat(num1);
        var n2 = parseFloat(num2);
        var answer = n1 * n2;
        setResult('Result: ' + answer);
    }

    function divide() {
        var n1 = parseFloat(num1);
        var n2 = parseFloat(num2);

        if (n2 === 0) {
            setResult('Cannot divide by zero');
        } else {
            var answer = n1 / n2;
            setResult('Result: ' + answer);
        }
    }

    return (
        <div className="calculator">
            <h1>Calculator</h1>

            <input
                type="number"
                value={num1}
                onChange={handleNum1Change}
                placeholder="Enter first number"
            />

            <input
                type="number"
                value={num2}
                onChange={handleNum2Change}
                placeholder="Enter second number"
            />

            <div className="buttons">
                <button onClick={add}>Add (+)</button>
                <button onClick={subtract}>Subtract (-)</button>
                <button onClick={multiply}>Multiply (×)</button>
                <button onClick={divide}>Divide (÷)</button>
            </div>

            <div id="result">{result}</div>
        </div>
    );
}

var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Calculator />);
