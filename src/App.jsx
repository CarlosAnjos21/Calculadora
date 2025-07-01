import { useState } from 'react';
import './styles/App.css';

function App() {
  const [display, setDisplay] = useState('0');
  const [operacao, setOperacao] = useState('');
  const [historico, setHistorico] = useState('');

  const operadores = ['+', '−', '×', '÷'];

  const handleNumero = (numero) => {
    setDisplay((prev) => (prev === '0' ? numero : prev + numero));
    setOperacao((prev) => prev + numero);
  };

  const handleOperador = (op) => {
    if (operacao === '') return;
    const ultimo = operacao.slice(-1);
    if (operadores.includes(ultimo)) {
      const nova = operacao.slice(0, -1) + op;
      setDisplay(nova);
      setOperacao(nova);
    } else {
      const nova = operacao + op;
      setDisplay(nova);
      setOperacao(nova);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setOperacao('');
    setHistorico('');
  };

  const handleDelete = () => {
    setDisplay((prev) => (prev.length > 1 ? prev.slice(0, -1) : '0'));
    setOperacao((prev) => prev.slice(0, -1));
  };

  const handleResultado = () => {
    try {
      const expressao = operacao
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/−/g, '-')
        .replace(/,/g, '.');

      const resultado = eval(expressao);
      setHistorico(operacao);
      setDisplay(resultado.toString());
      setOperacao(resultado.toString());
    } catch {
      setDisplay('Erro');
    }
  };

  const handlePorcentagem = () => {
    const valor = parseFloat(display) / 100;
    setDisplay(valor.toString());
    setOperacao(valor.toString());
  };

  const handleInverterSinal = () => {
    const valor = parseFloat(display) * -1;
    setDisplay(valor.toString());
    setOperacao(valor.toString());
  };

  const handleRaiz = () => {
    const valor = Math.sqrt(parseFloat(display));
    setDisplay(valor.toString());
    setOperacao(valor.toString());
  };

  const handleQuadrado = () => {
    const valor = Math.pow(parseFloat(display), 2);
    setDisplay(valor.toString());
    setOperacao(valor.toString());
  };

  const handleInverso = () => {
    const valor = 1 / parseFloat(display);
    setDisplay(valor.toString());
    setOperacao(valor.toString());
  };

  return (
    <div className="calculadora">
      <div className="historico">{historico}</div>
      <div className="display">{display}</div>

      <div className="linha">
        <button onClick={handlePorcentagem}>%</button>
        <button onClick={handleClear}>CE</button>
        <button onClick={handleClear}>C</button>
        <button onClick={handleDelete}>←</button>
      </div>

      <div className="linha">
        <button onClick={handleInverso}>¹/x</button>
        <button onClick={handleQuadrado}>x²</button>
        <button onClick={handleRaiz}>√x</button>
        <button onClick={() => handleOperador('÷')}>÷</button>
      </div>

      <div className="linha">
        <button className="numero" onClick={() => handleNumero('7')}>7</button>
        <button className="numero" onClick={() => handleNumero('8')}>8</button>
        <button className="numero" onClick={() => handleNumero('9')}>9</button>
        <button onClick={() => handleOperador('×')}>×</button>
      </div>

      <div className="linha">
        <button className="numero" onClick={() => handleNumero('4')}>4</button>
        <button className="numero" onClick={() => handleNumero('5')}>5</button>
        <button className="numero" onClick={() => handleNumero('6')}>6</button>
        <button onClick={() => handleOperador('−')}>−</button>
      </div>

      <div className="linha">
        <button className="numero" onClick={() => handleNumero('1')}>1</button>
        <button className="numero" onClick={() => handleNumero('2')}>2</button>
        <button className="numero" onClick={() => handleNumero('3')}>3</button>
        <button onClick={() => handleOperador('+')}>+</button>
      </div>

      <div className="linha">
        <button onClick={handleInverterSinal}>+/-</button>
        <button className="numero" onClick={() => handleNumero('0')}>0</button>
        <button onClick={() => handleNumero(',')}>,</button>
        <button className="igual" onClick={handleResultado}>=</button>
      </div>
    </div>
  );
}

export default App;