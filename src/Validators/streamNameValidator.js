export function streamNameValidator(name) {
  if (!name) return "stream Name can't be empty.";
  if (name.length < 5) return 'Stream Name must be at least 5 characters long.';
  return '';
}
