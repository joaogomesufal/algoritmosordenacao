<template lang="pug">
  #home
    heap-sort
    quick-sort
    merge-sort
    selection-sort
    
</template>

<script>
  import HeapSort from '../components/HeapSort'
  import SelectionSort from '../components/SelectionSort'
  import MergeSort from '../components/MergeSort'
  import QuickSort from '../components/QuickSort'

  export default {
    components: {
      HeapSort,
      SelectionSort,
      MergeSort,
      QuickSort
    },

    created() {
      this.$store.commit('generateDataset')
    }
  }
</script>
