<template lang="pug">
  v-container#main
    v-layout(row)
      v-flex(md12)
        v-card(color="blue", dark)
          v-toolbar(color="blue darken-1", dark, flat)
            h3 Heap-Sort

          v-container
            v-layout(row, mb-4)
              v-flex(md12, class="white", py-4)
                area-chart(
                  :data=`{
                    '100': testCemResultado, 
                    '1.000': testMilResultado,
                    '1.000.000': testMilhaoResultado
                  }`
                )

            v-layout(row, mb-4)
              v-flex(md4 mr-2)
                h3 Teste com array de 100 de números
                | {{ testCemResultado }} ms

              v-flex(md4 mr-2)
                h3 Teste com array de 1.000 de números
                | {{ testMilResultado }} ms

              v-flex(md4 mr-2)
                h3 Teste com array de 1.000.000 de números
                | {{ testMilhaoResultado }} ms
                
            v-layout(row)
              v-flex(md3 mr-2)
                v-switch(label="Ordenação descendente", v-model="descendent", color="teal accent-4")

            v-layout(row)
              v-flex(md3 mr-2)
                v-btn(
                  @click="test"
                  color="teal accent-4"
                  depressed,
                  block,
                  large)
                  v-icon(left) fa-sort-numeric-asc
                  | Testar
            v-layout(row)    

  </div>
</template>

<script>
import HeapSort from '../class/HeapSort'
export default {
  name: 'HelloWorld',
  data () {
    return {
      testCemResultado: 0,
      testMilResultado:0, 
      testMilhaoResultado: 0,
      descendent: false,
    }
  },
  props: {
    msg: String
  },

  created() {
    this.$vuetify.theme.error = '#FFEB3B'
  },

  methods: {

    test() {
      let order = new HeapSort(this.descendent)
      this.testCemResultado = this.getTime(order, this.datasetCem)
      this.testMilResultado = this.getTime(order, this.datasetMil)
      this.testMilhaoResultado = this.getTime(order, this.datasetMilhao)
    },

    getTime(order, data) {
      let times = []
      for(let i=0; i < 10; i++) {
        let start_time = performance.now()
        order.heapsort(data)
        let end_time = performance.now()
        times.push(end_time - start_time)
      }

      let sum = times.reduce((previous, current) => current += previous)
      return sum / times.length
    }
  },

  computed: {
    datasetCem() {
      return this.$store.state.testCem
    },

    datasetMil() {
      return this.$store.state.testMil
    },

    datasetMilhao() {
      return this.$store.state.testMilhao
    }
    
  }
}
</script>

<style>
  div#chart-1{
    color: "#fff" !important;
  }
</style>
