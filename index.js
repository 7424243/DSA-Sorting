const LinkedList = require('./LinkedList')

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

/* ===== 3. Implementing quicksort =====
Write a function qSort that sorts a dataset using the quicksort algorithm. The dataset to sort is: 89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5.
*/
function qSort(array, start=0, end = array.length) {
    if (start >= end) {
      return array
    }
    const middle = partition(array, start, end)
    array = qSort(array, start, middle)
    array = qSort(array, middle + 1, end)
    return array
  }
function partition(array, start, end) {
    const pivot = array[end - 1]
    let j = start
    for (var i = start; i < end - 1; i++) {
      if (array[i] <= pivot) {
        swap(array, i, j)
        j++
      }
    }
    swap(array, end - 1, j)
    return j
  }
function swap(array, i, j) {
    const tmp = array[i]
    array[i] = array[j]
    array[j] = tmp
}
const ARRAY = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]
console.log(qSort(ARRAY))//output is orderer array

/* ===== 4. Implementing merge sort =====
Write a function mSort that sorts the dataset above using the merge sort algorithm.
*/
function mergeSort(array) {
    if(array.length <= 1) {
        return array
    }
    const middle = Math.floor(array.length / 2)
    let left = array.slice(0, middle)
    let right = array.slice(middle, array.length)
    left = mergeSort(left)
    right = mergeSort(right)
    return merge(left, right, array)
}
function merge(left, right, array) {
    let leftIndex = 0
    let rightIndex = 0
    let outputIndex = 0
    while(leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++]
        } else {
            array[outputIndex++] = right[rightIndex++]
        }
    }
    for(let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i]
    }
    for(let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i]
    }
    return array
}
console.log(mergeSort(ARRAY))

/* ===== 5. =====
Given a Linked List, sort the linked list using merge sort. You will need your linked list class from previous lesson to create the list and use all of its supplemental functions to solve this problem.
*/
function display(SLL) {
    let currNode = SLL.head
    while(currNode !== null) {
        console.log(currNode.value)
        currNode = currNode.next
    }
}
function mergeSortList(list) {
    let currNode = list.head
    if(currNode.next === null) {
        return list
    }
    let length = 1
    while(currNode.next !==null) {
        length++
        currNode = currNode.next
    }
    const middle = Math.floor(length / 2)
    let leftList = splitList(list, 0, middle)
    let rightList = splitList(list, middle, length)
    leftList = mergeSortList(leftList)
    rightList = mergeSortList(rightList)
    return mergeLists(leftList, rightList)
}
function splitList(list, start, end) {
    let currNode = list.head
    if(currNode === null) {
        return
    }
    const returnList = new LinkedList()
    let i = 0
    while(currNode !== null) {
        if(i >= start && i < end) {
            returnList.insertLast(currNode.value)
        }
        i++
        currNode = currNode.next
    }
    return returnList
}
function mergeLists(leftList, rightList) {
    const mergedList = new LinkedList()
    let currLeft = leftList.head
    let currRight = rightList.head
    while(currLeft && currRight) {
        if(currLeft.value <= currRight.value) {
            mergedList.insertLast(currLeft.value)
            currLeft = currLeft.next
        } else {
            mergedList.insertLast(currRight.value)
            currRight = currRight.next
        }
    }
    while(currLeft) {
        mergedList.insertLast(currLeft.value)
        currLeft = currLeft.next
    }
    while(currRight) {
        mergedList.insertLast(currRight.value)
        currRight = currRight.next
    }
    return mergedList
}
function main() {
    let list = new LinkedList()
    list.insertFirst(4)
    list.insertLast(5)
    list.insertLast(1)
    list.insertLast(3)
    list.insertLast(0)
    const sorted = mergeSortList(list)
    display(sorted)
}
main()//output: [0, 1, 3, 4, 5]

/* ===== 6. Bucket sort ======
Write an O(n) algorithm to sort an array of integers, where you know in advance what the lowest and highest values are. You can't use arr.splice(), shift() or unshift() for this exercise.
*/
function bucketSort(array, min, max) {
    let lowestIndex = array.indexOf(min)
    console.log('lowest', lowestIndex)
    swap(array, array[0], array[lowestIndex])
    let highestIndex = array.indexOf(max)
    console.log('highest', highestIndex)
    swap(array, highestIndex, array.length-1)
    console.log(array)
    for(let i = 1; i < array.length - 2; i++) {
        if(array[i] > array[i + 1]) {
            swap(array, i, i + 1)
            console.log(array)
        }
    }
    return array
}
console.log(bucketSort([4, 7, 2, 8, 0, 3], 0, 8))//output: [ 0, 2, 3, 4, 7, 8 ]

/* ===== 7. Sort in place =====
Write an algorithm to shuffle an array into a random order in place (i.e., without creating a new array).
*/
function shuffle(array) {
    for(let i = 0; i < array.length; i++) {
        swap(array, i, Math.floor(Math.random() * array.length))
    }
    return array
}
console.log(shuffle([1, 2, 3, 4, 5, 6, 7]))//output: [1, 5, 7, 6, 3, 2, 4]