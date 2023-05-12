class StackArray {
  constructor(unique) {
    this.dataList = []
    this.topIndex = -1
  }

  push(_data) {
    this.dataList.push(_data)
    this.topIndex++
  }

  pop() {
    if (this.topIndex == -1) return

    let headData = this.dataList.splice(this.topIndex, 1)[0]
    this.topIndex--
    return headData
  }

  peek() {
    return this.dataList[this.topIndex]
  }

  isEmpty() {
    return this.dataList.length <= 0
  }

  print() {
    let printData = ''
    for (let i = this.topIndex; i >= 0; i--) {
      printData += this.dataList[i] + '->'
    }
    console.log(printData)
  }

  size() {
    return this.dataList.length
  }
}

let stack = new StackArray()

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

export default StackArray
