

// src/Calculator.js
import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
    const [input, setInput] = useState('');

      const handleClick = (value) => {
          if (value === 'AC') {
                setDisplay('0');
                      setInput('');
                            return;
                                }

                                    if (value === '=') {
                                          try {
                                                  const result = eval(input);
                                                          setDisplay(result.toString());
                                                                  setInput(result.toString());
                                                                        } catch {
                                                                                setDisplay('Error');
                                                                                        setInput('');
                                                                                              }
                                                                                                    return;
                                                                                                        }

                                                                                                            if (value === '.' && display.includes('.')) return;
                                                                                                                if (value === '0' && display === '0') return;

                                                                                                                    setInput((prev) => (prev === '0' ? value : prev + value));
                                                                                                                        setDisplay((prev) => (prev === '0' ? value : prev + value));
                                                                                                                          };

                                                                                                                            return (
                                                                                                                                <div className="calculator">
                                                                                                                                      <div id="display">{display}</div>
                                                                                                                                            <button id="clear" onClick={() => handleClick('AC')}>AC</button>
                                                                                                                                            <button id="left" onClick={() => handleClick('(')}>(</button>
                                                                                                                                            <button id="right" onClick={() => handleClick(')')}>)</button>
                                                                                                                                            <button id="add" onClick={() => handleClick('+')}>+</button>
                                                                                                                                             <button id="one" onClick={() => handleClick('1')}>1</button>
                                                                                                                                                   <button id="two" onClick={() => handleClick('2')}>2</button>
                                                                                                                                                         <button id="three" onClick={() => handleClick('3')}>3</button>
                                                                                                                                                         <button id="divide" onClick={() => handleClick('/')}>÷</button>
                                                                                                                                                               <button id="four" onClick={() => handleClick('4')}>4</button>
                                                                                                                                                                     <button id="five" onClick={() => handleClick('5')}>5</button>
                                                                                                                                                                           <button id="six" onClick={() => handleClick('6')}>6</button>
                                                                                                                                                                           <button id="multiply" onClick={() => handleClick('*')}>×</button>
                                                                                                                                                                                 <button id="seven" onClick={() => handleClick('7')}>7</button>
                                                                                                                                                                                       <button id="eight" onClick={() => handleClick('8')}>8</button>
                                                                                                                                                                                             <button id="nine" onClick={() => handleClick('9')}>9</button>
                                                                                                                                                                                             <button id="subtract" onClick={() => handleClick('-')}>-</button>
                                                                                                                                                                                             <button id="decimal" onClick={() => handleClick('.')}>.</button>
                                                                                                                                                                                              <button id="zero" onClick={() => handleClick('0')}>0</button>
                                                                                                                                                                                              
                                                                                                                                                                                                <button id="equals" onClick={() => handleClick('=')}>=</button>

                                                                                                                                                                                                    </div>
                                                                                                                                                                                                      );
                                                                                                                                                                                                      };

                                                                                                                                                                                                      export default Calculator;



