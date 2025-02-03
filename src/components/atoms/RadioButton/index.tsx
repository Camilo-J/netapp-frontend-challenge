import { Label } from "@radix-ui/react-label";
interface RadioButtonProps {
  id: string;
  name: string;
  value: string;
  label?: string;
  checked?: boolean;
  onChange: (value: string) => void;
  className?: string;
  disabled?: boolean;
}

export function RadioButton({
  id,
  name,
  value,
  onChange,
  className,
  label,
  disabled,
}: RadioButtonProps) {
  return (
    <div className="flex items-center space-x-2">
      <input
        id={id}
        type="radio"
        value={value || ""}
        name={name}
        className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ${
          className || ""
        }`}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      />
      <Label htmlFor={id} className="text-sm">
        {label}
      </Label>
    </div>
  );
}
