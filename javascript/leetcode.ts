// 7 Nov
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

// 8 Nov
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

// 9 Nov
// ---------------------- EASY ----------------------

// 1. Majority Element
function majorityElement(nums: number[]): number {
  let count = 0, candidate = 0;
  for (const num of nums) {
    if (count === 0) candidate = num;
    count += num === candidate ? 1 : -1;
  }
  return candidate;
}

// 2. Missing Number
function missingNumber(nums: number[]): number {
  const n = nums.length;
  const expected = (n * (n + 1)) / 2;
  const actual = nums.reduce((a, b) => a + b, 0);
  return expected - actual;
}

// 3. Third Maximum Number
function thirdMax(nums: number[]): number {
  const set = Array.from(new Set(nums)).sort((a, b) => b - a);
  return set[2] ?? set[0];
}

// 4. Intersection of Two Arrays
function intersection(nums1: number[], nums2: number[]): number[] {
  return Array.from(new Set(nums1.filter(n => nums2.includes(n))));
}

// 5. Move Zeroes (In-place)
function moveZeroesSimple(nums: number[]): void {
  let idx = 0;
  for (const num of nums) if (num !== 0) nums[idx++] = num;
  while (idx < nums.length) nums[idx++] = 0;
}

// 6. Valid Parentheses
function isValid(s: string): boolean {
  const stack: string[] = [];
  const map: Record<string, string> = { ")": "(", "}": "{", "]": "[" };
  for (const c of s) {
    if (["(", "{", "["].includes(c)) stack.push(c);
    else if (stack.pop() !== map[c]) return false;
  }
  return stack.length === 0;
}

// 7. Ransom Note
function canConstruct(ransomNote: string, magazine: string): boolean {
  const map = new Map<string, number>();
  for (const c of magazine) map.set(c, (map.get(c) || 0) + 1);
  for (const c of ransomNote) {
    if (!map.get(c)) return false;
    map.set(c, map.get(c)! - 1);
  }
  return true;
}

// 8. First Unique Character in a String
function firstUniqChar(s: string): number {
  const map = new Map<string, number>();
  for (const c of s) map.set(c, (map.get(c) || 0) + 1);
  for (let i = 0; i < s.length; i++) if (map.get(s[i]) === 1) return i;
  return -1;
}

// 9. Valid Palindrome II (Allow one deletion)
function validPalindrome(s: string): boolean {
  const isPal = (l: number, r: number): boolean => {
    while (l < r) if (s[l++] !== s[r--]) return false;
    return true;
  };
  let l = 0, r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) return isPal(l + 1, r) || isPal(l, r - 1);
    l++; r--;
  }
  return true;
}

// 10. Toeplitz Matrix
function isToeplitzMatrix(matrix: number[][]): boolean {
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[0].length - 1; j++) {
      if (matrix[i][j] !== matrix[i + 1][j + 1]) return false;
    }
  }
  return true;
}

// ---------------------- MEDIUM ----------------------

// 11. Container With Most Water
function maxArea(height: number[]): number {
  let l = 0, r = height.length - 1, max = 0;
  while (l < r) {
    const area = Math.min(height[l], height[r]) * (r - l);
    max = Math.max(max, area);
    if (height[l] < height[r]) l++;
    else r--;
  }
  return max;
}

// 12. Jump Game
function canJump(nums: number[]): boolean {
  let reach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > reach) return false;
    reach = Math.max(reach, i + nums[i]);
  }
  return true;
}

// 13. Subarray Sum Equals K
function subarraySum(nums: number[], k: number): number {
  const map = new Map<number, number>([[0, 1]]);
  let sum = 0, count = 0;
  for (const n of nums) {
    sum += n;
    if (map.has(sum - k)) count += map.get(sum - k)!;
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
}

// 14. Find Minimum in Rotated Sorted Array
function findMin(nums: number[]): number {
  let l = 0, r = nums.length - 1;
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] > nums[r]) l = mid + 1;
    else r = mid;
  }
  return nums[l];
}

// 15. Longest Consecutive Sequence
function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);
  let longest = 0;
  for (const num of set) {
    if (!set.has(num - 1)) {
      let curr = num, streak = 1;
      while (set.has(curr + 1)) {
        curr++;
        streak++;
      }
      longest = Math.max(longest, streak);
    }
  }
  return longest;
}
