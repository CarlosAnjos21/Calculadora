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
    <>
      <div className="linha">
        <Botao onClick={handlePorcentagem}>%</Botao>
        <Botao onClick={handleClear}>CE</Botao>
        <Botao onClick={handleClear}>C</Botao>
        <Botao onClick={handleDelete}>←</Botao>
      </div>

      <div className="linha">
        <Botao onClick={handleInverso}>¹/x</Botao>
        <Botao onClick={handleQuadrado}>x²</Botao>
        <Botao onClick={handleRaiz}>√x</Botao>
        <Botao onClick={() => handleOperador('÷')}>÷</Botao>
      </div>

      <div className="linha">
        <Botao classe="numero" onClick={() => handleNumero('7')}>7</Botao>
        <Botao classe="numero" onClick={() => handleNumero('8')}>8</Botao>
        <Botao classe="numero" onClick={() => handleNumero('9')}>9</Botao>
        <Botao onClick={() => handleOperador('×')}>×</Botao>
      </div>

      <div className="linha">
        <Botao classe="numero" onClick={() => handleNumero('4')}>4</Botao>
        <Botao classe="numero" onClick={() => handleNumero('5')}>5</Botao>
        <Botao classe="numero" onClick={() => handleNumero('6')}>6</Botao>
        <Botao onClick={() => handleOperador('−')}>−</Botao>
      </div>

      <div className="linha">
        <Botao classe="numero" onClick={() => handleNumero('1')}>1</Botao>
        <Botao classe="numero" onClick={() => handleNumero('2')}>2</Botao>
        <Botao classe="numero" onClick={() => handleNumero('3')}>3</Botao>
        <Botao onClick={() => handleOperador('+')}>+</Botao>
      </div>

      <div className="linha">
        <Botao onClick={handleInverterSinal}>+/-</Botao>
        <Botao classe="numero" onClick={() => handleNumero('0')}>0</Botao>
        <Botao onClick={() => handleNumero(',')}>,</Botao>
        <Botao classe="igual" onClick={handleResultado}>=</Botao>
      </div>
    </>
  );
}