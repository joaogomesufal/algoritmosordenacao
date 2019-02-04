const {floor} = Math;

export default class MergeSort {
    
    sort(arr){
        let len = arr.length;
        if(len <2)
           return arr;
        let mid = floor(len/2),
            left = arr.slice(0,mid),
            right =arr.slice(mid);
        
        return this.merge(this.sort(left),this.sort(right));
    }
     
    merge(left, right){
        let result = [],
            lLen = left.length,
            rLen = right.length,
            l = 0,
            r = 0;
        while(l < lLen && r < rLen){
           if(left[l] < right[r]){
             result.push(left[l++]);
           }
           else{
             result.push(right[r++]);
          }
        }  
     
        return result.concat(left.slice(l)).concat(right.slice(r));
      }
}