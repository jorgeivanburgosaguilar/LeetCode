function divideArray(nums: number[], k: number): number[][] {
  nums.sort((a, b) => a - b);

  const result: number[][] = [];
  let currentGroup: number[] = [];

  for (const num of nums) {
    if (currentGroup.length === 0 || num - currentGroup[0] <= k) {
      currentGroup.push(num);
    } else if (currentGroup.length < 3) {
      return [];
    } else {
      result.push(currentGroup);
      currentGroup = [num];
    }

    if (currentGroup.length === 3) {
      result.push(currentGroup);
      currentGroup = [];
    }
  }

  if (currentGroup.length === 3) {
    result.push(currentGroup);
  } else if (currentGroup.length > 0) {
    return [];
  }

  return result;
}
