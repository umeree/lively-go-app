export function streamDescValidator(desc) {
  if (!desc) return "stream description can't be empty.";
  if (desc.length < 5)
    return 'Stream description must be at least 5 characters long.';
  return '';
}
