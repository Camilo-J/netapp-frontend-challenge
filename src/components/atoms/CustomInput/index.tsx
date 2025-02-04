import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CustomInputProps {
  id: string;
  name: string;
  placeholder: string;
  defaultValue: string;
  required: boolean;
  label: string;
  type?: string;
  disabled?: boolean;
}

export function CustomInput({
  defaultValue,
  name,
  id,
  placeholder,
  required,
  label,
  disabled,
  type = "text",
}: CustomInputProps) {
  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
        disabled={disabled}
        autoComplete="on"
      />
    </div>
  );
}
