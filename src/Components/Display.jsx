export default function Display({ historico, display }) {
  return (
    <>
      <div className="historico">{historico}</div>
      <div className="display">{display}</div>
    </>
  );
}