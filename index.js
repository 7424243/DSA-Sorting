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