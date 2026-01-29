import Botao from "./Botao";

export default function Teclado({
  handlePorcentagem,
  handleClear,
  handleDelete,
  handleInverso,
  handleQuadrado,
  handleRaiz,
  handleOperador,
  handleNumero,
  handleInverterSinal,
  handleResultado
}) {
  return (
    /* grid: Ativa o modo grid
      grid-cols-4: Cria 4 colunas iguais
      gap-1: Espaçamento entre os botões
      sm:gap-2: Aumenta o espaçamento em telas maiores
    */
    <div className="grid grid-cols-4 gap-1 sm:gap-2">
      {/* Linha 1 */}
      <Botao onClick={handlePorcentagem}>%</Botao>
      <Botao onClick={handleClear}>CE</Botao>
      <Botao onClick={handleClear}>C</Botao>
      <Botao onClick={handleDelete}>←</Botao>

      {/* Linha 2 */}
      <Botao onClick={handleInverso}>¹/x</Botao>
      <Botao onClick={handleQuadrado}>x²</Botao>
      <Botao onClick={handleRaiz}>√x</Botao>
      <Botao onClick={() => handleOperador('÷')}>÷</Botao>

      {/* Linha 3 */}
      <Botao classe="numero" onClick={() => handleNumero('7')}>7</Botao>
      <Botao classe="numero" onClick={() => handleNumero('8')}>8</Botao>
      <Botao classe="numero" onClick={() => handleNumero('9')}>9</Botao>
      <Botao onClick={() => handleOperador('×')}>×</Botao>

      {/* Linha 4 */}
      <Botao classe="numero" onClick={() => handleNumero('4')}>4</Botao>
      <Botao classe="numero" onClick={() => handleNumero('5')}>5</Botao>
      <Botao classe="numero" onClick={() => handleNumero('6')}>6</Botao>
      <Botao onClick={() => handleOperador('−')}>−</Botao>

      {/* Linha 5 */}
      <Botao classe="numero" onClick={() => handleNumero('1')}>1</Botao>
      <Botao classe="numero" onClick={() => handleNumero('2')}>2</Botao>
      <Botao classe="numero" onClick={() => handleNumero('3')}>3</Botao>
      <Botao onClick={() => handleOperador('+')}>+</Botao>

      {/* Linha 6 */}
      <Botao onClick={handleInverterSinal}>+/-</Botao>
      <Botao classe="numero" onClick={() => handleNumero('0')}>0</Botao>
      <Botao onClick={() => handleNumero(',')}>,</Botao>
      <Botao classe="igual" onClick={handleResultado}>=</Botao>
    </div>
  );
}