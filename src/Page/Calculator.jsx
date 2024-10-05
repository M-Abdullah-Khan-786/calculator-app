// src/Calculator.js
import { useState } from 'react';
import { evaluate } from 'mathjs';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        setInput(input + value);
    };

    const handleEvaluate = () => {
        try {
            const evalResult = evaluate(input);
            setResult(evalResult);
            setInput(evalResult.toString());
        } catch (error) {
            setResult('Error');
            console.log(error)
        }
    };

    const handleClear = () => {
        setInput('');
        setResult('');
    };

    return (
        <div className="calculator">
            <div className="display">
                <div className="input">{input}</div>
                <div className="result">{result}</div>
            </div>
            <div className="buttons">
                <button onClick={() => handleButtonClick('1')}>1</button>
                <button onClick={() => handleButtonClick('2')}>2</button>
                <button onClick={() => handleButtonClick('3')}>3</button>
                <button onClick={() => handleButtonClick('+')}>+</button>
                <button onClick={() => handleButtonClick('4')}>4</button>
                <button onClick={() => handleButtonClick('5')}>5</button>
                <button onClick={() => handleButtonClick('6')}>6</button>
                <button onClick={() => handleButtonClick('-')}>-</button>
                <button onClick={() => handleButtonClick('7')}>7</button>
                <button onClick={() => handleButtonClick('8')}>8</button>
                <button onClick={() => handleButtonClick('9')}>9</button>
                <button onClick={() => handleButtonClick('*')}>*</button>
                <button onClick={() => handleButtonClick('0')}>0</button>
                <button onClick={() => handleButtonClick('.')}>,</button>
                <button onClick={handleEvaluate}>=</button>
                <button onClick={() => handleButtonClick('/')}>/</button>
                <button onClick={handleClear}>C</button>
            </div>
        </div>
    );
};

export default Calculator;
