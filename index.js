/* ===== 1. Understanding merge sort =====
Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40
[21, 1, 26, 45, 29, 28, 2, 9] // [16, 49, 39, 27, 43, 34, 46, 40]
[21, 1, 26, 45] [29, 28, 2, 9] // [16, 49, 39, 27] [43, 34, 46, 40]
[21, 1] [26,45] [29, 28] [2, 9] // [16, 49] [29, 27] [43, 34] [46, 40]
[21] [1] [26] [45] [29] [28] [2] [9] // [16] [49] [29] [27] [43] [34] [46] [40]

- What is the resulting list that will be sorted after 3 recursive calls to mergesort?
A: [21, 1]
- What is the resulting list that will be sorted after 16 recursive calls to mergesort?
A: [16, 49, 39, 27, 43, 34, 46, 40]
- What are the first 2 lists to be merged?
A: [21] & [1]
- Which two lists would be merged on the 7th merge?
A: [1, 21, 26, 45] && [2, 9, 28, 29]
*/

/* ===== 2. Understanding quicksort =====
1) Suppose you are debugging a quicksort implementation that is supposed to sort an array in ascending order. After the first partition step has been completed, the contents of the array is in the following order: 3 9 1 14 17 24 22 20. Which of the following statements is correct about the partition step? Explain your answer.
-The pivot could have been 17, but could not have been 14
-The pivot could have been either 14 or 17
A: This statement is correct. All of the values to the left of 14 and 17 are less than 14 and 17.
-Neither 14 nor 17 could have been the pivot
-The pivot could have been 14, but could not have been 17

2) Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the resulting list after the second partitioning according to the quicksort algorithm.
-When using the last item on the list as a pivot(12)
A: 10, 3, 9, 12, 14, 17, 13, 15, 19, 16 >> 3, 9, 10, 12, 14, 13, 15, 16, 17, 19
-When using the first item on the list as a pivot(14)
A: 3, 9, 10, 12, 13, 14, 15, 16, 17, 19 >> 10, 3, 9, 12, 13, 14, 14, 16, 17, 19
*/