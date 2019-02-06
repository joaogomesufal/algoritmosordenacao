<template lang="pug">
  v-container(fluid)#main
    v-layout(row)
      v-flex(md12)
        v-card(color="blue", dark)
          v-toolbar(color="blue darken-1", dark, flat)
            h3 Quick Sort

          v-container(fluid)
            v-layout(row, mb-4)
              v-flex(md4, class="white", py-2, mr-2)
                h4(class="black--text") Array Ordenado Asc.
                area-chart(
                  :data=`{
                    '100': testCemResultado, 
                    '1.000': testMilResultado,
                    '1.000.000': testMilhaoResultado
                  }`
                )

              v-flex(md4, class="white", py-2, mr-2)
                h4(class="black--text") Array Ordenado Desc.
                area-chart(
                  :data=`{
                    '100': testCemReversedResultado, 
                    '1.000': testMilReversedResultado,
                    '1.000.000': testMilhaoReversedResultado
                  }`
                )

              v-flex(md4, class="white", py-2, mr-2)
                h4(class="black--text") Array Ordenado Random.
                area-chart(
                  :data=`{
                    '100': testCemRandomResultado, 
                    '1.000': testMilRandomResultado,
                    '1.000.000': testMilhaoRandomResultado
                  }`
                )

            v-layout(row, mb-4)
              v-flex(md4 mr-2)
                h3 Teste com array de 100 de números
                | Ordenado Asc: {{ testCemResultado }} ms 
                br
                | Ordenado Desc: {{ testCemReversedResultado }} ms
                br
                | Desordenado: {{ testCemRandomResultado }} ms

              v-flex(md4 mr-2)
                h3 Teste com array de 1.000 de números
                | Ordenado Asc: {{ testMilResultado }} ms 
                br
                | Ordenado Desc: {{ testMilReversedResultado }} ms
                br
                | Desordenado: {{ testMilRandomResultado }} ms

              v-flex(md4 mr-2)
                h3 Teste com array de 1.000.000 de números
                | Ordenado Asc: {{ testMilhaoResultado }} ms 
                br
                | Ordenado Desc: {{ testMilhaoReversedResultado }} ms
                br
                | Desordenado: {{ testMilhaoRandomResultado }} ms

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

  </div>
</template>

<script>
import QuickSort from '../class/QuickSort'
export default {
  name: 'QuickSort',
 data () {
    return {
      testCemResultado: 0,
      testMilResultado:0, 
      testMilhaoResultado: 0,

      testCemReversedResultado: 0,
      testMilReversedResultado:0, 
      testMilhaoReversedResultado: 0,

      testCemRandomResultado: 0,
      testMilRandomResultado:0, 
      testMilhaoRandomResultado: 0,
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
      let order = new QuickSort()
      this.testCemResultado = this.getTime(order, this.datasetCem)
      this.testMilResultado = this.getTime(order, this.datasetMil)
      this.testMilhaoResultado = this.getTime(order, this.datasetMilhao)

      this.testCemReversedResultado = this.getTime(order, this.datasetCemReversed)
      this.testMilReversedResultado = this.getTime(order, this.datasetMilReversed)
      this.testMilhaoReversedResultado = this.getTime(order, this.datasetMilhaoReversed)

      this.testCemRandomResultado = this.getTime(order, this.datasetCemRandom)
      this.testMilRandomResultado = this.getTime(order, this.datasetMilRandom)
      this.testMilhaoRandomResultado = this.getTime(order, this.datasetMilhaoRandom)
    },

    getTime(order, data) {
      let times = []
      for(let i=0; i < 10; i++) {
        let start_time = performance.now()
        order.sort(data)
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
    },

    datasetCemReversed() {
      return this.$store.state.testCemReversed
    },

    datasetMilReversed() {
      return this.$store.state.testMilReversed
    },

    datasetMilhaoReversed() {
      return this.$store.state.testMilhaoReversed
    },


    datasetCemRandom() {
      return this.$store.state.testCemRandom
    },

    datasetMilRandom() {
      return this.$store.state.testMilRandom
    },

    datasetMilhaoRandom() {
      return this.$store.state.testMilhaoRandom
    }
    
  }
}
</script>