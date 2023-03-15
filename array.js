const buildArray = function (nums) {
  const n = nums.length;
  const ans = new Array(n);
  for (let i = 0; i < n; i++) {
    ans[i] = nums[nums[i]];
    console.log(ans[i], "ans[i] 2");
  }
console.log(ans,"ans outside")
  return ans;
};

const arr = [0, 2, 1, 5, 3, 4];
console.log(buildArray(arr));
