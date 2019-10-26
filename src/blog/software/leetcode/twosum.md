---
author: "Olivier"
date: "2018-12-24"
category: "Software"
title: "Python blog"
description: "Search 2 numbers in an array that add up to a target value"
cover: "./leetcode-logo.png"
tags: ["leetcode", "python", "javascript"]
lang: "en"
---

# Problem
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

# Example
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

# Solution

Python...

```python
class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        indexes = range(len(nums))
        for i in indexes:
            sums = [nums[i] + n for n in nums]
            try:
                target_index = sums.index(target)
                if target_index != i:
                    return [i, target_index]
            except :
                print('Could not find target')
```

JavaScript...

```javascript
var twoSum = function(nums, target) {
    for (let i=0; i<nums.length; i++) {
        let sums = nums.map(x => x + nums[i])
        let target_index = sums.indexOf(target)
        if ((target_index !== -1) && (target_index !== i)) {
            return [i, target_index]      
        }
    }
}
```