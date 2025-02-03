export function removeEmptyValues(obj: Record<string, unknown>) {
  return Object.fromEntries(
    Object.entries(obj).filter(([, value]) => value !== null && value !== "")
  );
}
