import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CustomInputProps {
  name: string;
  placeholder: string;
  defaultValue: string;
  required: boolean;
  label: string;
  disabled?: boolean;
}

export function CustomInput({
  defaultValue,
  name,
  placeholder,
  required,
  label,
  disabled,
}: CustomInputProps) {
  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
        disabled={disabled}
      />
    </div>
  );
}
