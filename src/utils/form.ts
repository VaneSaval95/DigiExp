export function formToObject(form: HTMLFormElement) {
  const data = new FormData(form);
  const submitValue: Record<string, any> = {};

  for (const [key, value] of data.entries()) {
    submitValue[key] = value;
  }
  return submitValue;
}

