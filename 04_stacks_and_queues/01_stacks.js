class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class stack{
    constructor(){
        this.first = null
        this.last = null
        this.length = 0
    }

    push(value){
        const newNode = new Node(value)

        if(!this.first){
            this.first = newNode
            this.last = newNode
        }else{
            let first = this.first
            newNode.next = first
            this.first = newNode
        }

        return ++this.length
    }

    pop() {
        if(!this.first) return null
        let temp = this.first
        temp.next = null
        if(this.first === this.last) this.last = null
        this.first = this.first.next
        --this.length
        return temp
    }
}

let list = new stack()
list.push(12)
list.push(13)
list.push(14)
let popped = list.pop()
console.log(list)
console.log(popped)