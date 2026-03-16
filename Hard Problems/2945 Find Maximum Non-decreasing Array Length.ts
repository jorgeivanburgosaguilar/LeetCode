function findMaximumLength(nums: number[]): number {
  const n = nums.length;
  let stk: [number, number, number][] = [[0, 0, 0]];
  let pre = 0;
  let res = 0;

  for (let i = 0, j = 0; i < n; i++) {
    pre += nums[i];
    j = Math.min(j, stk.length - 1);
    while (j + 1 < stk.length && pre >= stk[j + 1][0]) j++;

    const [val, pre_pre, pre_dp] = stk[j];
    const cur_dp = pre_dp + 1;
    res = cur_dp;

    const last = pre - pre_pre;
    while (stk.length > 0 && stk[stk.length - 1][0] >= last + pre) stk.pop();
    stk.push([last + pre, pre, cur_dp]);
  }

  return res;
}
