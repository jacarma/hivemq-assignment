export type Option = {
  label: string;
  value: string | number;
};

export default function Select<T>({
  className,
  options,
  label,
  id,
  value,
  onChange,
}: {
  className?: string;
  options: Option[];
  label: string;
  id: string;
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <fieldset className={className}>
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <select
        id={id}
        value={value as number}
        onChange={(e) => onChange(e.target.value as T)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {options.map(({ value: optionValue, label }) => (
          <option key={optionValue} value={optionValue}>
            {label}
          </option>
        ))}
      </select>
    </fieldset>
  );
}
