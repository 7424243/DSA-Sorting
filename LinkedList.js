class _Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}
class LinkedList {
    constructor() {
        this.head = null
    }
    //O(1)
    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }
    //O(n)
    insertLast(item) {
        if(this.head === null) {
            this.insertFirst(item)
        } else {
            let tempNode = this.head
            while(tempNode.next !== null) {
                tempNode = tempNode.next
            }
            tempNode.next = new _Node(item, null)
        }        
    }
    //Implement a function called insertBefore() in the class that inserts a new node before a given node containing a key.
    //O(n)
    insertBefore(key, value) {
        if(this.head === null) {
            this.head = new _Node(value, this.head)
        } else {
            let currNode = this.head
            let prevNode = this.head
            while(currNode !== null && currNode.value !== key) {
                prevNode = currNode
                currNode = currNode.next
            }
            prevNode.next = new _Node(value, currNode)
        }
    }
    //Implement a function called insertAfter() in the class that inserts a new node after a node containing the key.
    //O(n)
    insertAfter(key, value) {
        if(this.head === null) {
            this.head = new _Node(value, this.head)
        }
        let currNode = this.head
        while(currNode !== null & currNode.value !== key) {
            currNode = currNode.next
        }
        currNode.next = new _Node(value, currNode.next)
    }
    //Implement a function called insertAt() that inserts an item at a specific position in the linked list.
    //O(n)
    insertAt(item, position) {
        if(this.head === null) {
            this.head = new _Node(item, this.head)
        }
        let currNode = this.head
        let count = 0
        while(count < position - 1) {
            currNode = currNode.next
            count++
        }
        currNode.next = new _Node(item, currNode.next)
    }
    //O(n)
    find(item) {
        let currNode = this.head
        if(!this.head) {
            return null
        }
        while(currNode.value !== item) {
            if(currNode.next === null) {
                return null
            } else {
                currNode = currNode.next
            }
        }
        return currNode
    }
    //best: O(1)
    //Avg. & worst: O(n)
    remove(item) {
        if(!this.head) {
            return null
        }
        if(this.head.value === item) {
            this.head = this.head.next
            return
        }
        let currNode = this.head
        let previousNode = this.head
        while((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode
            currNode = currNode.next
        }
        if(currNode === null) {
            console.log('Item not found')
            return
        }
        previousNode.next = currNode.next
    }
}

module.exports = LinkedList