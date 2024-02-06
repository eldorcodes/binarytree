class Node {
    constructor(value){
      this.value = value;
      this.right = null;
      this.left = null;
    }
  }
  class BinaryTree {
    constructor(){
      this.root = null;
    }
    insert(value){
      const newNode = new Node(value);
      if(!this.root){
        this.root = newNode;
      }else{
        let holdingPointer = this.root;
        while(true){
          if(value < holdingPointer.value){
            if(!holdingPointer.left){
              holdingPointer.left = newNode;
              return this;
            }
            holdingPointer = holdingPointer.left;
          }else{
            if(!holdingPointer.right){
              holdingPointer.right = newNode;
              return this;
            }
            holdingPointer = holdingPointer.right;
          }
        }
      }
    }
  }
  
  const tree = new BinaryTree();
  tree.insert(10);
  tree.insert(12);
  tree.insert(15);
  tree.insert(20);
  tree.insert(1);
  tree.insert(2);
  tree.insert(3);
  tree.insert(4);
  tree.insert(5);
  
  console.log(
    JSON.stringify(tree)
  );