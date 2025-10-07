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
