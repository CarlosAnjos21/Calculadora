export default function Botao({ children, onClick, classe, ariaLabel }) {
  const estilos = {
    numero: "bg-btn-num hover:brightness-125 text-white",
    igual: "bg-btn-igual hover:brightness-110 text-calc-dark",
    default: "bg-btn-default hover:bg-btn-hover text-gray-200"
  };

  return (
    <button 
      onClick={onClick}
      aria-label={ariaLabel || children}
      className={`
        ${estilos[classe] || estilos.default}
        h-14 sm:h-16 rounded-2xl text-xl font-semibold
        transition-all duration-150 active:scale-90
        cursor-pointer flex items-center justify-center
      `}
    >
      {children}
    </button>
  );
}