export default function Display({ historico, display }) {
  return (
    <div className="flex flex-col items-end justify-center bg-calc-display p-4 rounded-xl mb-4 h-28">
      <div className="text-gray-400 text-sm h-6 uppercase tracking-wider">{historico}</div>
      <div className="text-white text-4xl sm:text-5xl font-light truncate w-full text-right">
        {display}
      </div>
    </div>
  );
}