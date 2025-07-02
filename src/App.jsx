import './styles/App.css';
import Display from './components/Display';
import Teclado from './components/Teclado';
import useCalculadora from './hooks/useCalculadora';

function App() {
  const calculadora = useCalculadora();

  return (
    <div className="calculadora">
      <Display historico={calculadora.historico} display={calculadora.display} />
      <Teclado
        handlePorcentagem={calculadora.handlePorcentagem}
        handleClear={calculadora.handleClear}
        handleDelete={calculadora.handleDelete}
        handleInverso={calculadora.handleInverso}
        handleQuadrado={calculadora.handleQuadrado}
        handleRaiz={calculadora.handleRaiz}
        handleOperador={calculadora.handleOperador}
        handleNumero={calculadora.handleNumero}
        handleInverterSinal={calculadora.handleInverterSinal}
        handleResultado={calculadora.handleResultado}
      />
    </div>
  );
}

export default App;