const {floor} = Math;

export default class HeapSort {

  constructor(desc) {
    if(desc) {
      this.comparator = this.descendentComparator
    }
    else {
      this.comparator = this.ascendantComparator
    }
  }

  heapsort(array) {
    const count = array.length;
    let end = count - 1;
  
    this.heapify(array, this.comparator);
  
    while (end > 0) {
      this.swapElems(array, end, 0);
      end = end - 1;
      this.siftDown(array, 0, end, this.comparator);
    }
  
    return array;
  }
  
  ascendantComparator(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }

  descendentComparator(a, b) {
    return a < b ? 1 : a > b ? -1 : 0;
  }
  
  heapify(array, comparator) {
    //seta o início como a metade do array
    const count = array.length;
    let start = floor((count - 2) / 2);
    
    //em quanto o start for maior ou igual a zero
    while (start >= 0) {
      this.siftDown(array, start, count - 1, comparator);
      start = start - 1;
    }
  }
  
  siftDown(array, start, end, comparator) {
    // seta a rais com o indce de rais no momento
    let root = start;
    
    // em quanto houver filho da esquerda
    while (root * 2 + 1 <= end) {
      const lChild = root * 2 + 1;
      const rChild = lChild + 1;
      let swap = root;
  
      if (comparator(array[swap], array[lChild]) < 0) {
        swap = lChild;
      }
  
      if (rChild <= end && comparator(array[swap], array[rChild]) < 0) {
        swap = rChild;
      }
  
      if (swap === root) {
        return;
      }
  
      this.swapElems(array, root, swap);
      root = swap;
    }
  }
  
  //troca a por b e b por a
  swapElems(array, a, b) {
    const tmp = array[a];
    array[a] = array[b];
    array[b] = tmp;
  }
      
}