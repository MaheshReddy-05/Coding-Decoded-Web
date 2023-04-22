---
description: "Author: @MaheshReddy, @ganajayant, @skoden, @radojicic23 | https://leetcode.com/problems/two-sum/"
tags: [Array, Two Pointer, Hash Table]
---

# 0001 - Two Sum (Easy)

## Problem Link

https://leetcode.com/problems/two-sum/

## Problem Statement

Given an array of integers `nums` and an integer `target`, return _indices of the two numbers such that they add up to `target`_.

You may assume that each input would have _**exactly**_** one solution**, and you may not use the _same_ element twice.

You can return the answer in any order.

**Example 1:**

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

**Example 2:**

```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

**Example 3:**

```
Input: nums = [3,3], target = 6
Output: [0,1]
```

**Constraints:**

-   `2 <= nums.length <= 10^4`
-   `-10^9 <= nums[i] <= 10^9`
-   `-10^9 <= target <= 10^9`
-   **Only one valid answer exists.**

**Follow-up:** Can you come up with an algorithm that is less than `O(n^2)` time complexity?


## Check Out the Video Solution: 

<iframe width="900" height="500" src="https://www.youtube.com/embed/HrvcbD-UO5o?rel=0" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>


## Approach 1: Brute Force

Tthe goal is to find two numbers in an array that add up to a given target number. Since this is an easy problem, most of the time brute force solutions would work due to the loose constraints. However, this brute force solution gives $O(n^2)$ time complexity and $O(1)$ space complexity since it involves checking all possible pairs of numbers in the array and seeing if they add up to the target.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int n = (int) nums.size();
        for (int i = 0; i < n - 1; i++) {
            for (int j = i + 1; j < n; j++) {
                if (nums[i] + nums[j] == target) {
                    return {i, j};
                }
            }
        }
        return {-1, -1};
    }
};
```

</TabItem>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wingkwong"/>

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        n = len(nums)
        for i in range(n):
            for j in range(i + 1, n):
                if nums[i] + nums[j] == target:
                    return [i, j]
        return [-1, -1]
```

</TabItem>
<TabItem value="go" label="Go">
<SolutionAuthor name="@wingkwong"/>

```go
func twoSum(nums []int, target int) []int {
    n := len(nums)
    for i := 0; i < n; i++ {
        for j := i + 1; j < n; j++ {
            if nums[i] + nums[j] == target {
                return []int{i, j}
            }
        }
    }
    return []int{-1, -1}
}
```

</TabItem>
<TabItem value="java" label="Java">
<SolutionAuthor name="@ganajayant"/>

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++) {
            for (int j = 0; j < nums.length; j++) {
                if (i != j && nums[i] + nums[j] == target) {
                    return new int[]{i, j}
                }
            }
        }
        return new int[]{-1, -1};
    }
}
```

</TabItem>

<TabItem value="js" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
};
```

</TabItem>
</Tabs>
