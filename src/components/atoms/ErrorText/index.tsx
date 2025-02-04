interface ErrorTextProps {
  message: string;
}

export function ErrorText({ message }: ErrorTextProps) {
  return (
    <div className="flex justify-center mt-4">
      <p className="text-red-500 text-sm">{message}</p>
    </div>
  );
}
