class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        let node = new Node(val)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.length += 1
        return this
    }

    pop() {
        let last = this.tail
        if (!this.head) return undefined
        else if (!this.head.next) {
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
            last.prev = null
        }
        this.length--
        return last
    }

    shift() {
        let first = this.head
        if (!this.head) return undefined
        else if (!this.head.next) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            this.head.prev = null
            first.next = null
        }
        this.length--
        return first
    }

    unshift(val) {
        let node = new Node(val)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.head.prev = node
            node.next = this.head
            this.head = node
        }
        this.length++
        return this
    }

    get(index) {
        if (index < 0 || index >= this.length || !this.head) return undefined
        let i, node
        let mid = this.length / 2
        if (index < mid) {
            node = this.head
            i = 0
            while (i !== index) {
                node = node.next
                i++
            }
        } else {
            node = this.tail
            i = this.length - 1
            while (i !== index) {
                node = node.prev
                i--
            }
        }

        return node
    }

    replace(index, val) {
        let node = this.get(index)
        if (node) {
            node.val = val
            return true
        } else return false
    }

    insert(index, val) {
        if (index < 0 || index > this.length || !this.head) return undefined
        let newNode = new Node(val)
        if (index === 0) this.unshift(val)
        else if (index === this.length) this.push(val)
        else {
            let node = this.get(index - 1)
            node.next.prev = newNode
            newNode.next = node.next
            node.next = newNode
            newNode.prev = node
        }
        this.length++
    }

    show() {
        let arr = []
        let current = this.head
        while (current) {
            arr.push(current.val)
            current = current.next
        }

        console.log(arr)
    }

    remove(index) {
        if (index < 0 || index > this.length || !this.head) return undefined
        else if (index === 0) this.shift()
        else if (index === this.length - 1) this.pop()
        else {
            let node = this.get(index)
            let prevNode = node.prev
            let nextNode = node.next
            prevNode.next = nextNode
            nextNode.prev = prevNode
            node.prev = null
            node.next = null
            this.length--
            return node
        }
    }


}

let list = new LinkedList()

list.push(0)
list.push(1)
list.push(2)
list.push(3)
list.push(4)

list.show()