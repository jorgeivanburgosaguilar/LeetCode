function sequentialDigits(low: number, high: number): number[] {
  const result: number[] = [];

  function generateSequential(startDigit: number, currentNum: number): void {
    if (startDigit > 9) return;

    if (currentNum >= low && currentNum <= high) {
      result.push(currentNum);
    }

    return generateSequential(startDigit + 1, currentNum * 10 + startDigit + 1);
  }

  function trampoline(fn: () => any): any {
    let acc = fn;
    while (typeof acc === "function") {
      acc = acc();
    }
    return acc;
  }

  for (let startDigit = 1; startDigit <= 9; startDigit++) {
    trampoline(() => generateSequential(startDigit, startDigit));
  }

  return result.sort((a, b) => a - b);
}
