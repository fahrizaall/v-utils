export function throttle<T extends (...args: any[]) => void>(
  fn: T,
  limit: number,
  { leading = true, trailing = false }: { leading?: boolean; trailing?: boolean } = {}
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  let timeout: ReturnType<typeof setTimeout> | null = null;
  return (...args) => {
    const now = Date.now();
    if (leading && lastCall === 0) {
      fn(...args);
      lastCall = now;
      return;
    }
    const remaining = limit - (now - lastCall);
    if (remaining <= 0) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      fn(...args);
      lastCall = now;
    }
    else if (trailing && !timeout) {
      timeout = setTimeout(() => {
        fn(...args);
        lastCall = leading ? Date.now() : 0;
        timeout = null;
      }, remaining);
    }
  };
}