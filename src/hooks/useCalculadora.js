import { useState } from 'react';

export default function useCalculadora() {
  const [display, setDisplay] = useState('0');
  const [historico, setHistorico] = useState('');

  // Auxiliar para formatar números (ex: troca ponto por vírgula na exibição)
  const formatarParaDisplay = (valor) => valor.replace(/\./g, ',');

  const handleNumero = (num) => {
    setDisplay(prev => (prev === '0' && num !== ',' ? num : prev + num));
  };

  const handleOperador = (op) => {
    // Evita múltiplos operadores seguidos
    const ultimoCaractere = display.slice(-1);
    if (['+', '−', '×', '÷'].includes(ultimoCaractere)) return;
    setDisplay(prev => prev + op);
  };

  const handleResultado = () => {
    try {
      // Normaliza para cálculo JS
      const expressao = display
        .replace(/,/g, '.')
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/−/g, '-');
      
      const resultado = eval(expressao);
      
      // Limita casas decimais para não quebrar o layout
      const resultadoFormatado = Number.isInteger(resultado) 
        ? resultado.toString() 
        : parseFloat(resultado.toFixed(8)).toString();

      setHistorico(`${display} =`);
      setDisplay(resultadoFormatado.replace(/\./g, ','));
    } catch {
      setDisplay('Erro');
    }
  };

  // Funções matemáticas diretas
  const executarImediato = (fn) => {
    const atual = parseFloat(display.replace(',', '.'));
    const resultado = fn(atual);
    setDisplay(resultado.toString().replace('.', ','));
  };

  return {
    display,
    historico,
    handleNumero,
    handleOperador,
    handleResultado,
    handleClear: () => { setDisplay('0'); setHistorico(''); },
    handleDelete: () => setDisplay(prev => prev.length > 1 ? prev.slice(0, -1) : '0'),
    handlePorcentagem: () => executarImediato(n => n / 100),
    handleInverterSinal: () => executarImediato(n => n * -1),
    handleRaiz: () => executarImediato(n => Math.sqrt(n)),
    handleQuadrado: () => executarImediato(n => n ** 2),
    handleInverso: () => executarImediato(n => 1 / n),
  };
}