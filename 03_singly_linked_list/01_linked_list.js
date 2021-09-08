class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(x) {
        let node = new Node(x)
        if (!this.head) {
            this.head = node
            this.tail = this.head
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.length += 1
        return this
    }

    show() {
        let arr = []
        let current = this.head
        while (current) {
            arr.push(current.value)
            current = current.next
        }

        console.log(arr)
    }

    pop() {
        let pre = this.head
        if (!pre) return undefined
        if (!pre.next) {
            this.head = null
            this.tail = null
            this.length--
            return pre.value
        }

        while (pre.next.next) {
            pre = pre.next
        }

        let last = pre.next.value

        this.tail = pre
        pre.next = null
        this.length--

        return last
    }

    shift() {
        let prev = this.head
        if (!this.head) return undefined
        if (!prev.next) {
            this.head = null
            this.tail = null
            this.length--
            return prev.value
        }
        this.head = prev.next
        this.length--
        return prev.value
    }

    unshift(x) {
        let node = new Node(x)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            let current = this.head
            node.next = current
            this.head = node
        }
        this.length++
        return this
    }

    get(index) {
        if (!this.head || index < 0 || index >= this.length) return undefined
        let node = this.head
        if (index === 0) return node.value
        for (let i = 0; i < index; i++) {
            node = node.next
        }
        return node.value
    }

    replace(index, value) {
        if (!this.head || index < 0 || index >= this.length) return undefined
        if (index === 0) {
            this.head.value = value
        } else {
            let node = this.head
            for (let i = 0; i < index; i++) {
                node = node.next
            }
            node.value = value
        }
    }

    insert(index, value) {
        let newNode = new Node(value)
        if (!this.head || index < 0 || index > this.length) return undefined
        if (index === 0) this.unshift(value)
        else if (index === this.length) this.push(value)
        else {
            let node = this.head
            for (let i = 0; i < index - 1; i++) {
                node = node.next
            }
            let nextNode = node.next
            newNode.next = nextNode
            node.next = newNode
        }
        this.length++
    }

    remove(index) {
        if (!this.head || index < 0 || index >= this.length) return undefined
        if (index === 0) this.shift()
        else if (index === this.length - 1) this.pop()
        else {
            let node = this.head
            for (let i = 0; i < index - 1; i++) {
                node = node.next
            }
            let nextNode = node.next
            node.next = nextNode.next
        }
        this.length--
    }

    reverse() {
        let node = this.head
        this.head = this.tail
        this.tail = node

        let prev = null
        let next = null

        for (let i = 0; i < this.length; i++) {
            next = node.next
            node.next = prev
            prev = node
            node = next
        }

        return this
    }
}