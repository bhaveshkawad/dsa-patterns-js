/*
✅ Problem Statement:
Given an array of intervals `intervals` where `intervals[i] = [start, end]`,
merge all overlapping intervals and return an array of the merged intervals.

✅ Input:
intervals = [[1,3],[2,6],[8,10],[3,4],[15,18]]

✅ Output:
[[1,6],[8,10],[15,18]]

✅ Logic Explanation:
This problem is solved using the **Sorting + Greedy Merge** approach.

Steps:
1. If there are 0 or 1 intervals, return them directly.
2. Sort the intervals by their start time.
3. Initialize a `merged` array with the first interval.
4. Traverse remaining intervals one by one:
   - Compare the current interval with the last merged interval.
   - If current.start <= last.end:
     → Overlapping intervals → merge them by updating the end.
   - Else:
     → No overlap → push the current interval into `merged`.
5. Return the `merged` array.

The key idea:
👉 Always compare with the **last merged interval**, not all previous ones.

✅ Pattern Used:
Intervals Pattern (Sorting + Greedy)

✅ Time & Space Complexity:
Time: O(n log n)
- Sorting takes O(n log n)
- Single traversal takes O(n)

Space: O(n)
- Extra space for merged intervals
*/

{
  function mergeIntervalsOptimal (intervals) {
    if (intervals.length <= 1) return intervals

    // Step 1: Sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0])

    const merged = [intervals[0]]

    // Step 2: Traverse and merge
    for (let i = 1; i < intervals.length; i++) {
      const [currStart, currEnd] = intervals[i]
      const lastEnd = merged[merged.length - 1][1]

      if (currStart <= lastEnd) {
        // Overlapping → merge
        merged[merged.length - 1][1] = Math.max(lastEnd, currEnd)
      } else {
        // No overlap → push new interval
        merged.push(intervals[i])
      }
    }

    return merged
  }

  // Example usage:
  const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
  console.log(mergeIntervalsOptimal(intervals))
  // Output: [[1,6],[8,10],[15,18]]
}
