import { useState } from 'react';

export default function useCalculadora() {
  const [display, setDisplay] = useState('0');
  const [historico, setHistorico] = useState('');

  const handleNumero = (numero) => {
    setDisplay((prev) => {
      if (prev === '0') {
        return numero;
      } else {
        return prev + numero;
      }
    });
  };

  const handleOperador = (op) => {
    setDisplay((prev) => prev + op);
  };

  const handleClear = () => {
    setDisplay('0');
    setHistorico('');
  };

  const handleDelete = () => {
    setDisplay((prev) => (prev.length > 1 ? prev.slice(0, -1) : '0'));
  };
  const handleResultado = () => {
    try {
      // Substitui operadores por símbolos JavaScript
      const expressao = display
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/−/g, '-');
      const resultado = eval(expressao);
      setHistorico(display + ' =');
      setDisplay(resultado.toString());
    } catch {
      setDisplay('Erro');
    }
  };

  const handlePorcentagem = () => {
    setDisplay((prev) => (parseFloat(prev) / 100).toString());
  };
   const handleInverterSinal = () => {
    setDisplay((prev) => (parseFloat(prev) * -1).toString());
  };

  const handleRaiz = () => {
    setDisplay((prev) => Math.sqrt(parseFloat(prev)).toString());
  };

  const handleQuadrado = () => {
    setDisplay((prev) => (Math.pow(parseFloat(prev), 2)).toString());
  };

  const handleInverso = () => {
    setDisplay((prev) => (1 / parseFloat(prev)).toString());
  };

  return {
    display,
    historico,
    handleNumero,
    handleOperador,
    handleClear,
    handleDelete,
    handleResultado,
    handlePorcentagem,
    handleInverterSinal,
    handleRaiz,
    handleQuadrado,
    handleInverso
  };
}