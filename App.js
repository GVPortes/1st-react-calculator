import React, {useState, useEffect } from 'react';
import './App.css';

function App() {
const [primeiroNum, setPrimeiroNum] = useState(0);
const [segundoNum, setSegundoNum] = useState(0);
const [results, setResults] = useState(0);
const [operation, setOperation] = useState('soma');

const calcular = () => {
  if (operation === "soma")
    return Number(primeiroNum) + Number(segundoNum);
  else if (operation === "subtracao")
    return Number(primeiroNum) - Number(segundoNum);
  else if (operation === "multiplicacao")
    return Number(primeiroNum) * Number(segundoNum);
  else if (operation === "divisao")
    return Number(primeiroNum) / Number(segundoNum);
}

useEffect(() => {
  setResults(calcular());
}, [primeiroNum, segundoNum, operation]);


  return (
    <div className="App">
      <h1>Calculadora React</h1>
      <label>Insira um número</label>
      <input 
      type="number"
      value = {primeiroNum}
      onChange={(e)=> setPrimeiroNum(e.target.value)}/>

      <label>Insira outro número</label>
      <input
      type="number"
      value={segundoNum}
      onChange={(e)=> setSegundoNum(e.target.value)}/>
      

      <select onChange={(e)=> setOperation(e.target.value)}>
        <option value="soma">Soma</option>
        <option value="subtracao">Subtração</option>
        <option value="multiplicacao">Multiplicação</option>
        <option value="divisao">Divisão</option>
      </select>

      <label>O resultado da operação é: {results}</label>
    </div>
  );
}

export default App;
