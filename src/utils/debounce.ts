// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const debounce = (func: Function, delay: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: unknown[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};
