// 15 LeetCode-style Array & String problems in TypeScript

// ---------------------- EASY ----------------------

// 1. Two Sum
 function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement)!, i];
    map.set(nums[i], i);
  }
  return [];
}

// 2. Best Time to Buy and Sell Stock
 function maxProfit(prices: number[]): number {
  let min = prices[0], profit = 0;
  for (const price of prices) {
    min = Math.min(min, price);
    profit = Math.max(profit, price - min);
  }
  return profit;
}

// 3. Maximum Subarray
 function maxSubArray(nums: number[]): number {
  let current = nums[0], maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]);
    maxSum = Math.max(maxSum, current);
  }
  return maxSum;
}

// 4. Move Zeroes
 function moveZeroes(nums: number[]): void {
  let insertPos = 0;
  for (const num of nums) if (num !== 0) nums[insertPos++] = num;
  while (insertPos < nums.length) nums[insertPos++] = 0;
}

// 5. Merge Sorted Arrays
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1, j = n - 1, k = m + n - 1;
  while (j >= 0) {
    nums1[k--] = i >= 0 && nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
  }
}

// 6. Remove Duplicates from Sorted Array
 function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) nums[k++] = nums[i];
  }
  return k;
}

// 7. Valid Anagram
 function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  return s.split("").sort().join("") === t.split("").sort().join("");
}

// 8. Palindrome String
 function isPalindrome(s: string): boolean {
  const clean = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return clean === clean.split("").reverse().join("");
}

// 9. Plus One
 function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
}

// 10. Intersection of Two Arrays II
 function intersect(nums1: number[], nums2: number[]): number[] {
  const map = new Map<number, number>(), res: number[] = [];
  for (const n of nums1) map.set(n, (map.get(n) || 0) + 1);
  for (const n of nums2) {
    if (map.get(n)) {
      res.push(n);
      map.set(n, map.get(n)! - 1);
    }
  }
  return res;
}

// ---------------------- MEDIUM ----------------------

// 11. Longest Substring Without Repeating Characters
 function lengthOfLongestSubstring(s: string): number {
  const set = new Set<string>();
  let left = 0, maxLen = 0;
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) set.delete(s[left++]);
    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}

// 12. 3Sum
 function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const res: number[][] = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let l = i + 1, r = nums.length - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum === 0) {
        res.push([nums[i], nums[l], nums[r]]);
        while (nums[l] === nums[l + 1]) l++;
        while (nums[r] === nums[r - 1]) r--;
        l++; r--;
      } else if (sum < 0) l++;
      else r--;
    }
  }
  return res;
}

// 13. Group Anagrams
 function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();
  for (const str of strs) {
    const key = str.split("").sort().join("");
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(str);
  }
  return Array.from(map.values());
}

// 14. Product of Array Except Self
 function productExceptSelf(nums: number[]): number[] {
  const res = Array(nums.length).fill(1);
  let prefix = 1, suffix = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix;
    prefix *= nums[i];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= suffix;
    suffix *= nums[i];
  }
  return res;
}

// 15. Longest Palindromic Substring
 function longestPalindrome(s: string): string {
  let start = 0, end = 0;
  const expand = (l: number, r: number) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--; r++;
    }
    return [l + 1, r - 1];
  };
  for (let i = 0; i < s.length; i++) {
    const [l1, r1] = expand(i, i);
    const [l2, r2] = expand(i, i + 1);
    if (r1 - l1 > end - start) [start, end] = [l1, r1];
    if (r2 - l2 > end - start) [start, end] = [l2, r2];
  }
  return s.slice(start, end + 1);
}
// 15 New LeetCode-style Array & String Problems in TypeScript

// ---------------------- EASY ----------------------

// 1. Contains Duplicate
 function containsDuplicate(nums: number[]): boolean {
  return new Set(nums).size !== nums.length;
}

// 2. Single Number
 function singleNumber(nums: number[]): number {
  return nums.reduce((a, b) => a ^ b, 0);
}

// 3. Maximum Product of Two Elements
 function maxProduct(nums: number[]): number {
  nums.sort((a, b) => b - a);
  return (nums[0] - 1) * (nums[1] - 1);
}

// 4. Count of Even Numbers
 function countEvens(nums: number[]): number {
  return nums.filter(n => n % 2 === 0).length;
}

// 5. Find All Numbers Disappeared in an Array
 function findDisappearedNumbers(nums: number[]): number[] {
  const set = new Set(nums);
  return Array.from({ length: nums.length }, (_, i) => i + 1).filter(n => !set.has(n));
}

// 6. Reverse String
 function reverseString(s: string[]): void {
  let l = 0, r = s.length - 1;
  while (l < r) [s[l], s[r]] = [s[r], s[l]], l++, r--;
}

// 7. Reverse Words in a String III
 function reverseWords(s: string): string {
  return s.split(' ').map(w => w.split('').reverse().join('')).join(' ');
}

// 8. Implement strStr()
 function strStr(haystack: string, needle: string): number {
  return haystack.indexOf(needle);
}

// 9. Length of Last Word
 function lengthOfLastWord(s: string): number {
  return s.trim().split(' ').pop()!.length;
}

// 10. Shuffle the Array
 function shuffle(nums: number[], n: number): number[] {
  const result: number[] = [];
  for (let i = 0; i < n; i++) {
    result.push(nums[i], nums[i + n]);
  }
  return result;
}

// ---------------------- MEDIUM ----------------------

// 11. Sort Colors (Dutch National Flag)
 function sortColors(nums: number[]): void {
  let low = 0, mid = 0, high = nums.length - 1;
  while (mid <= high) {
    if (nums[mid] === 0) [nums[low++], nums[mid++]] = [nums[mid], nums[low]];
    else if (nums[mid] === 1) mid++;
    else [nums[mid], nums[high--]] = [nums[high], nums[mid]];
  }
}

// 12. Spiral Matrix
 function spiralOrder(matrix: number[][]): number[] {
  const res: number[] = [];
  let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) res.push(matrix[top][i]);
    top++;
    for (let i = top; i <= bottom; i++) res.push(matrix[i][right]);
    right--;
    if (top <= bottom) for (let i = right; i >= left; i--) res.push(matrix[bottom][i]);
    bottom--;
    if (left <= right) for (let i = bottom; i >= top; i--) res.push(matrix[i][left]);
    left++;
  }
  return res;
}

// 13. Rotate Image
 function rotate(matrix: number[][]): void {
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  for (const row of matrix) row.reverse();
}

// 14. Increasing Triplet Subsequence
 function increasingTriplet(nums: number[]): boolean {
  let first = Infinity, second = Infinity;
  for (const n of nums) {
    if (n <= first) first = n;
    else if (n <= second) second = n;
    else return true;
  }
  return false;
}

// 15. Set Matrix Zeroes
 function setZeroes(matrix: number[][]): void {
  const rows = new Set<number>(), cols = new Set<number>();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i);
        cols.add(j);
      }
    }
  }
  for (const r of rows) for (let j = 0; j < matrix[0].length; j++) matrix[r][j] = 0;
  for (const c of cols) for (let i = 0; i < matrix.length; i++) matrix[i][c] = 0;
}