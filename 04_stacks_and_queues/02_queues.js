class Node {
    constructor(val){
        this.value = val
        this.next = null
    }
}

class Queue{
    constructor(){
        this.first = null
        this.last = null
        this.length = 0
    }

    enqueue(val){
        const newNode = new Node(val)

        if(!this.first){
            this.first = newNode
            this.last = newNode
        }else{
            this.last.next = newNode
            this.last = newNode
        }

        return ++this.length
    }

    dequeue(){
        if(!this.first) return null
        let temp = this.first
        temp.next = null
        if(this.first === this.last) this.last = null
        this.first = this.first.next
        --this.length
        return temp
    }
}

let q = new Queue()
q.enqueue(0)
q.enqueue(1)
q.enqueue(2)

console.log(q)