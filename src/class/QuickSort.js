export default class QuickSort {

    sort(arr, left = 0, right = arr.length - 1) {
        let len = arr.length,
            index
      
        if(len > 1) {
      
          index = this.partition(arr, left, right)
      
          if(left < index - 1) {
            this.sort(arr, left, index - 1)
          } 
      
          if(index < right) {
            this.sort(arr, index, right)
          }
      
        }
      
        return arr
      
      }
      
      partition(arr, left, right) {
        let middle = Math.floor((right + left) / 2),
            pivot = arr[middle],
            i = left,                 // Start pointer at the first item in the array
            j = right                 // Start pointer at the last item in the array
      
        while(i <= j) {
      
          // Move left pointer to the right until the value at the
          // left is greater than the pivot value
          while(arr[i] < pivot) {
            i++
          }
      
          // Move right pointer to the left until the value at the
          // right is less than the pivot value
          while(arr[j] > pivot) {
            j--
          }
      
          // If the left pointer is less than or equal to the 
          // right pointer, then swap values
          if(i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]  // ES6 destructuring swap
            i++
            j--
          }
        }
      
        return i
      
      }
         
}