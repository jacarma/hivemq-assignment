export default function Button({
  disabled,
  label,
  onClick,
}: {
  disabled?: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <div className="mt-4 col-span-2 text-right">
      <button
        type="button"
        disabled={disabled}
        className={`inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium 
      ${disabled ? 'bg-gray-200' : 'bg-amber-400'} text-white hover:bg-amber-500 border border-transparent 
        focus:outline-none focus-visible:ring focus-visible:ring-amber-300 focus-visible:ring-opacity-75 `}
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
      >
        {label}
      </button>
    </div>
  );
}
