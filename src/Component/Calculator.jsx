import React, {useState, useEffect} from 'react'
import {Main, 
        Screen, 
        Previous, 
        Current} from "./Calculator.style"
import ButtonGrid from './ButtonGrid'

const Calculator = () => {

  const [currentvalue, setCurrentvalue] = useState("");
  const [previousvalue, setPreviousvalue] = useState("");
  const [justEvaluated, setJustEvaluated] = useState(false);

  // function used to take the value from the button and displayed on the screen as a current value
  const ValueHandler = (value) => {
    
    // it stop the user to write something like this 2++3
    const operator = "+-*/";
    const isOperators = operator.includes(value);
    const lastChar = currentvalue.slice(-1);

    if(justEvaluated === true){
      // start the new calculation if the user pressed the number and the dot after the (= answer)
      if(!isNaN(value) || value === "."){
        setPreviousvalue("");
        setCurrentvalue(value);
      }
      else{
        // continues the appending into the existing result if user pressed the operator after the (= answer)
        setCurrentvalue(currentvalue + value);
      }
      // in the end set the state again to false
      setJustEvaluated(false);
      return;
    }
    // prevent adding multiple . in the equation
    if(value === "."){
      let token = currentvalue.split(/[+\-*/]/);
      let lastPart = token[token.length - 1];
      if(lastPart.includes(".")){
        return;
      }
    } 
    // prevent multiple operators in a row
    if(isOperators && operator.includes(lastChar)){
      return;
    }

    // prevent starting of the expression with an operator except minus
    if(currentvalue === "" && isOperators && value !== "-"){
      return;
    }
    
    // normall input handling (if the user not pressed the = )
    setCurrentvalue(currentvalue + value);
  };

  // function used to clear the values from the screen on the click of the AC button
  const clearHandler = () => {
    setCurrentvalue("");
    setPreviousvalue("");
  };

  // functon used to clear the last typed number from the screen
  const backHandler = () => {
    if(currentvalue === ""){
      setPreviousvalue("");
      return;
    }
    setCurrentvalue(prev => prev.slice(0,-1));
  };

  // function used to perform the operation when the user click on the equall button
  const equalHandler = () => {
    const tokens = currentvalue.match(/(\d+\.?\d*|\+|\-|\*|\/)/g);
    let i = 0;
    while(i < tokens.length){
      if( tokens[i] === "/" || tokens[i] === "*"){
        let left = parseFloat(tokens[i-1]);
        let right = parseFloat(tokens[i+1]);

        let result;

        if(tokens[i] === "*"){
          result = left * right;
        }
        else{
          result = left / right;
        }

        // replace the tokens[i-1] to [i+1] with the result value.
        tokens.splice(i-1,3,result.toString());

        // reset i to start again
        i = 0; //important line
      }

      // repeat the same logic for the + and -
      else{
        i++;//important
      }
    }

    i = 0;
  while (i < tokens.length) {
    if (tokens[i] === "+" || tokens[i] === "-") {
      const left = parseFloat(tokens[i - 1]);
      const right = parseFloat(tokens[i + 1]);
      let result;

      if (tokens[i] === "+") {
        result = left + right;
      } else {
        result = left - right;
      }

      // Replace the operation with the result
      tokens.splice(i - 1, 3, result.toString());
      i = 0;
    } else {
      i++;
    }
  }
    const answer = tokens[0];
    setPreviousvalue(currentvalue);
    setCurrentvalue(answer);
    // it was to set the calculator after the user pressed the = 
    setJustEvaluated(true);
  };

  return (
    <>
     <Main>
        <Screen>
            <Previous>{previousvalue}</Previous>
            <Current>{currentvalue}</Current>
        </Screen>
        <ButtonGrid 
        ValueHandler = {ValueHandler} 
        clearHandler = {clearHandler}
        backHandler  = {backHandler}
        equalHandler = {equalHandler}
        />
     </Main>
    </>
  )
}

export default Calculator