export default function Botao({ children, onClick, classe }) {
  return (
    <button className={classe} onClick={onClick}>
      {children}
    </button>
  );
}