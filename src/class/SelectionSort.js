export default class SelectionSort {

    sort(array) {
        let temp
        for(let i=0; i<array.length; i++){
            let mi = i;
            for(let j = i + 1; j<array.length; j++) {
                if(array[j] < array[mi])
                    mi = j;
            }
            temp = array[i];
            array[i] = array[mi];
            array[mi] = temp;
        }

        return array
    }
}