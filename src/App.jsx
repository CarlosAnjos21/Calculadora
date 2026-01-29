import Display from "./components/Display";
import Teclado from "./components/Teclado";
import useCalculadora from "./hooks/useCalculadora";

function App() {
  const calculadora = useCalculadora();

  return (
    <main className="min-h-screen flex justify-center items-start pt-10 sm:pt-20 px-4">
      <div className="w-full max-w-[440px] bg-calc-dark rounded-[2.5rem] p-6 shadow-2xl ring-1 ring-white/10 text-white backdrop-blur-sm">
        <header className="mb-6">
          <Display
            historico={calculadora.historico}
            display={calculadora.display}
          />
        </header>

        <section>
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

          <div className="w-32 h-1.5 bg-white/10 mx-auto mt-6 rounded-full" />
        </section>
      </div>
    </main>
  );
}

export default App;
