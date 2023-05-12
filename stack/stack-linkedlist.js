import LinkedList from '../linkedlist/linkedlist.js'

class StackLinkedlist {
  constructor(unique) {
    this.dataList = new LinkedList(unique ?? false)
  }

  push(_data) {
    this.dataList.insertFirst(_data)
  }

  pop() {
    let headData = this.dataList.head.data
    this.dataList.deleteHead()
    return headData
  }

  peek() {
    return this.dataList.head.data
  }

  isEmpty() {
    return this.dataList.length <= 0
  }

  print() {
    this.dataList.printList()
  }

  size() {
    return this.dataList.length
  }
}

let stack = new StackLinkedlist()

stack.push(11)
stack.push(22)
stack.push(33)

console.log('Peek:', stack.peek())
console.log('Size:', stack.size())
stack.print()

while (!stack.isEmpty()) {
  console.log('Size:', stack.size())
  stack.print()

  console.log('Pop:', stack.pop())
  console.log('Size:', stack.size())
  stack.print()
}

export default StackLinkedlist
