class Node {
  constructor(value) {
    this.id = `Tile-${value}`;
    this.value = value;
    this.width = 2 * value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;    
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);
    //Agregar el elemento solamente si la pila aún no está llena
    if (this.size !== this.maxSize && !this.top) {
      //Podemos agregar el elemento en la pila
      this.top = newNode;
    } else if (this.size !== this.maxSize && this.top) {
      newNode.next = this.top;
      this.top = newNode;
    } else {
      return console.log('Error: la pila está llena');
    }
    this.size++;
    return this;
  }
  
  peek() {
    if(!this.top){
      return null
    }
      return this.top.value
  }

  pop() {
    //1. Cuando no nos queden elementos en nuestra estructura de datos
    if (this.size === 0) {
      return null;
    }
    //2. Cuando tengamos elementos en nuestra estructura de datos
    const topNode = this.top;
    this.top = this.top.next;
    this.size--;
    return topNode;
  }

  traverse() {
    //Obtener una lista con todos los nodos de la pila
    let currentNode = this.top;
    let list = [];
    while (currentNode) {
      let tempNode = Object.assign({}, currentNode);
      tempNode.next = null;
      list.push(tempNode);
      currentNode = currentNode.next;
    }
    return list;
  }
}

export default Stack;
