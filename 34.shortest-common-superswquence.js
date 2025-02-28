/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function (str1, str2) {
  const m = str1.length;
  const n = str2.length;

  const dp = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  let i = m,
    j = n;
  let result = [];

  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      result.push(str1[i - 1]);
      i--;
      j--;
    } else if (dp[i - 1][j] >= dp[i][j - 1]) {
      result.push(str1[i - 1]);
      i--;
    } else {
      result.push(str2[j - 1]);
      j--;
    }
  }

  while (i > 0) result.push(str1[--i]);
  while (j > 0) result.push(str2[--j]);

  return result.reverse().join("");
};
