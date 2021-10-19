class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    insert(value){
        let newNode = new Node(value)
        if(this.root === null){
            this.root = newNode
            return this
        }

        let current = this.root
        while(true) {
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode
                    return this
                }
                current = current.left
            }else if(value > current.value){
                if(current.right === null){
                    current.right = newNode
                    return this
                }
                current = current.right
            }else return undefined
        }
    }

    contains(value){
        if(this.root === null) return false
        let current = this.root

        while(current){
            if(current.value === value) return true
            else if (value < current.value) current = current.left
            else current = current.right
        }

        return false
    }
}

let tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
console.log(tree)

console.log(tree.contains(1))
console.log(tree.contains(11))