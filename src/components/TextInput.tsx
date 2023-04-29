export type InputProps = {
  label: string;
  id: string;
  placeholder?: string;
  autoComplete?: string;
  type?: 'text' | 'password' | 'textarea';
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
};

export default function TextInput({
  label,
  id,
  placeholder,
  autoComplete,
  type,
  className,
  value,
  onChange,
  disabled,
}: InputProps) {
  return (
    <fieldset className={className}>
      <label htmlFor={id} className="text-xs font-medium text-gray-700">
        {label}
      </label>
      {type !== 'textarea' && (
        <input
          id={id}
          disabled={disabled}
          value={value ?? ''}
          onChange={(e) => onChange?.(e.target.value)}
          type={type ?? 'text'}
          placeholder={placeholder ?? label}
          autoComplete={autoComplete}
          className={getInputClasses(disabled)}
        />
      )}
      {type === 'textarea' && (
        <textarea
          id={id}
          disabled={disabled}
          value={value ?? ''}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder ?? label}
          autoComplete={autoComplete}
          className={getInputClasses(disabled)}
          rows={5}
        />
      )}
    </fieldset>
  );
}

export function getInputClasses(disabled = false) {
  return `mt-1 block w-full rounded-md text-sm 
  text-gray-700 placeholder:text-gray-500 border border-gray-400 
  focus-visible:border-transparent focus:outline-none focus-visible:ring focus-visible:ring-amber-400 focus-visible:ring-opacity-75 
  ${disabled ? 'bg-gray-100' : 'bg-white'}`;
}
