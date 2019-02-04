<template lang="pug">
  v-container#main
    v-layout(row)
      v-flex(md12)
        v-card(color="blue", dark)
          v-toolbar(color="blue darken-1", dark, flat)
            h3 Heap-Sort

          v-container
            v-layout(row, mb-4)
              v-flex(md12)
                h3 Representação dos dados
                //- strong Array Original: 
                //- p {{list_numbers}}
                //- br
                //- strong Array Ordenado:  
                //- p {{heap}}
                //- br
                strong Tempo para ordenar: 
                p {{heap_time}} ms
                br
                strong Tempo médio para ordenar:
                p {{ avg_time }} ms
            v-layout(row)
              v-flex(md3 mr-2)
                v-switch(label="Ordenação descendente", v-model="descendent", color="teal accent-4")

            v-layout(row)
              v-flex(md3 mr-2)
                v-text-field(
                  label="Número",
                  v-model="value",
                  color="yellow",
                  :error-messages="value_erro_message",
                  @keyup.enter="addToListNumbers",
                  append-icon="fa-plus"
                  box) 

              v-flex(md3 mr-2)
                  v-btn(
                    @click="generate"
                    color="teal accent-4"
                    depressed,
                    block,
                    large)
                    v-icon(left) fa-th
                    | Gerar array

              v-flex(md3 mr-2)
                v-btn(
                  @click="order"
                  color="teal accent-4"
                  depressed,
                  block,
                  large)
                  v-icon(left) fa-sort-numeric-asc
                  | Ordenar

              v-flex(md3 mr-2)
                v-btn(
                  @click="getAVGTime"
                  color="teal accent-4"
                  depressed,
                  block,
                  large)
                  v-icon(left) fa-clock-o
                  | Tempo Médio
            v-layout(row)    

  </div>
</template>

<script>
import HeapSort from '../class/HeapSort'
export default {
  name: 'HelloWorld',
  data () {
    return {
      list_numbers: [23,4,67,-8,90,54,21],
      heap: [],
      heap_time: 0,
      value: null,
      value_erro_message: '',
      descendent: false,
      avg_time: 0
    }
  },
  props: {
    msg: String
  },

  created() {
    this.$vuetify.theme.error = '#FFEB3B'
  },

  methods: {
    addToListNumbers() {
      let value = parseInt(this.value);
      if(typeof value == 'number' && !!value)
        if(!this.list_numbers.includes(value)) {
          this.list_numbers.push(value)
          this.value_erro_message = ''
        }
        else
          this.value_erro_message = "O valor não deve está presente no array"
      else
        this.value_erro_message = "O valor deve ser um número inteiro"
      this.value = null
    },

    order() {
      this.heap_time = 0
      let heapSort = new HeapSort(this.descendent)
      let vector = JSON.parse(JSON.stringify(this.list_numbers))
      let start_time = performance.now()
      this.heap =  heapSort.heapsort(vector)
      let end_time = performance.now()
      this.heap_time = end_time - start_time;
    },

    getAVGTime() {
      let times = []
      let heapSort = new HeapSort()
      let vector = JSON.parse(JSON.stringify(this.list_numbers))

      for(let i=0; i < 100; i++) {
        let start_time = performance.now()
        heapSort.heapsort(vector)
        let end_time = performance.now()
        let total_time = end_time - start_time
        times.push(total_time)
      }

      let sum = times.reduce((previous, current) => current += previous)
      this.avg_time = sum / times.length

    },
    
    generate(size) {
      this.list_numbers = []
      this.heap = []
      while(this.list_numbers.length < this.value){
          let number = Math.floor(Math.random()*this.value) + 1;
          if(this.list_numbers.indexOf(number) === -1) this.list_numbers.push(number);
      }
    }
  }
}
</script>