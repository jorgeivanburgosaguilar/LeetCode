function maxSumAfterPartitioning(arr: number[], k: number): number {
  const n = arr.length;
  const dp: number[] = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    let currentMax = 0;
    for (let j = 1; j <= Math.min(i, k); j++) {
      currentMax = Math.max(currentMax, arr[i - j]);
      dp[i] = Math.max(dp[i], dp[i - j] + currentMax * j);
    }
  }

  return dp[n];
}
