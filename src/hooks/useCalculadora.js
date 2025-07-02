import { useState } from 'react';

export default function useCalculadora() {
  const [display, setDisplay] = useState('0');
  const [operacao, setOperacao] = useState('');
  const [historico, setHistorico] = useState('');

  const operadores = ['+', '−', '×', '÷'];

  const handleNumero = (numero) => { /* igual */ };
  const handleOperador = (op) => { /* igual */ };
  const handleClear = () => { /* igual */ };
  const handleDelete = () => { /* igual */ };
  const handleResultado = () => { /* igual */ };
  const handlePorcentagem = () => { /* igual */ };
  const handleInverterSinal = () => { /* igual */ };
  const handleRaiz = () => { /* igual */ };
  const handleQuadrado = () => { /* igual */ };
  const handleInverso = () => { /* igual */ };

  return {
    display,
    operacao,
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