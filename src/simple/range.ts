export function range(start: number, end: number, step = 1): number[] {
  if (step === 0) throw new Error('step cannot be zero');
  const result: number[] = [];
  const dir = start <= end ? 1 : -1;
  
  for (let i = start; dir === 1 ? i <= end : i >= end; i += step * dir) {
    result.push(i);
  }
  return result;
}