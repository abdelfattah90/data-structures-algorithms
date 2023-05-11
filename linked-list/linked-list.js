// LINKEDLISTNODE CLASS
class LinkedListNode {
  data
  next
  constructor(_data) {
    this.data = _data
    this.next = null
  }
}

// LINKEDLISTITERATOR CLASS
class LinkedListIterator {
  currentNode
  constructor(node) {
    this.currentNode = node
  }

  data() {
    if (this.currentNode == null) return null
    return this.currentNode.data
  }

  next() {
    if (this.currentNode != null) {
      this.currentNode = this.currentNode.next
    }

    return this
  }

  current() {
    return this.currentNode
  }
}

// LINKEDLIST CLASS
class LinkedList {
  head
  tail
  unique
  length
  constructor(unique) {
    this.head = null
    this.tail = null
    this.unique = unique ?? false
    this.length = 0
  }
  begin() {
    return new LinkedListIterator(this.head)
  }
  printList() {
    let printDate = ''
    for (
      let iterator = this.begin();
      iterator.current() != null;
      iterator.next()
    ) {
      printDate += iterator.data() + ' -> '
    }
    console.log(printDate)
  }

  // IS EXIST
  isExist(_data) {
    if (this.find(_data)) {
      return true
    } else {
      return false
    }
  }

  // FIND
  find(_data) {
    for (
      let iterator = this.begin();
      iterator.current() != null;
      iterator.next()
    ) {
      if (iterator.data() == _data) {
        return iterator.current()
      }
    }
    return null
  }

  // FIND PARENT
  findParent(node) {
    for (
      let iterator = this.begin();
      iterator.current() != null;
      iterator.next()
    ) {
      if (iterator.current().next == node) {
        return iterator.current()
      }
    }
    return null
  }

  // IF CAN INSERT
  ifCanInsert(_data) {
    if (this.unique && this.isExist(_data)) {
      console.log(_data, '.. Already exist!')
      return false
    } else {
      return true
    }
  }

  // INSERT LAST
  insertLast(_data) {
    if (!this.ifCanInsert(_data)) return

    let newNode = new LinkedListNode(_data)
    if (this.head == null) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
  }

  // INSERRT AFTER
  insertAfter(node_data, _data) {
    if (!this.ifCanInsert(_data)) return

    let node = this.find(node_data)
    let newNode = new LinkedListNode(_data)
    newNode.next = node.next
    node.next = newNode
    if (this.tail == node) {
      this.tail = newNode
    }
    this.length++
  }

  // INSERT BEFORE
  insertBefore(node_data, _data) {
    if (!this.ifCanInsert(_data)) return

    let node = this.find(node_data)
    let newNode = new LinkedListNode(_data)
    newNode.next = node

    let parent = this.findParent(node)
    if (parent == null) {
      this.head = newNode
    } else {
      parent.next = newNode
    }
    this.length++
  }

  // DELETE NODE
  deleteNode(node_data) {
    let node = this.find(node_data)
    if (node == null) return
    if (this.head == this.tail) {
      this.head = null
      this.tail = null
    } else if (this.head == node) {
      this.head = node.next
    } else {
      let parent = this.findParent(node)
      if (this.tail == node) {
        this.tail = parent
      } else {
        parent.next == node.next
      }
    }
    node = null
    this.length--
  }
}

let list = new LinkedList(true)
list.insertLast(1)
list.insertLast(2)
list.insertLast(3)
list.insertLast(3)
list.printList()
console.log('Lenght: ', list.length)
