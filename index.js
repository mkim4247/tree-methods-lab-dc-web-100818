function inOrder(currentNode){
  if(currentNode.left){
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)
  if(currentNode.right){
    inOrder(currentNode.right)
  }
}

function findOrAdd(rootNode, newNode){
  let current = rootNode
  if(current.data === newNode.data){
    return true
  }
  if(newNode.data < rootNode.data){
    current = rootNode.left
    if(current){
      return findOrAdd(current, newNode)
    } else {
      rootNode.left = newNode
    }
  } else if(newNode.data > rootNode.data){
    current = rootNode.right
    if(current){
      return findOrAdd(current, newNode)
    } else {
      rootNode.right = newNode
    }
  }
}

function max(node){
  if(node.right){
    return max(node.right)
  } else{
    return node
  }
}

function min(node){
  if(node.left){
    return min(node.left)
  } else {
    return node
  }
}
