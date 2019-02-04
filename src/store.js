import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   
      testCem: [],
      testCemReversed: [],
      testCemRandom: [],

      testMil: [],
      testMilReversed: [],
      testMilRandom: [],

      testMilhao: [],
      testMilhaoReversed: [],
      testMilhaoRandom: []
  },
  mutations: {
    generateDataset() {
      let testCem = Array.from(Array(100), (x, index) => index + 1)
      let testCemReversed = JSON.parse(JSON.stringify(testCem)).reverse()
      let testCemRandom = Array.from(Array(100), (x, index) => Math.floor(Math.random() * (100 - 1) + 1))
      
      this.state.testCem = testCem
      this.state.testCemReversed = testCemReversed
      this.state.testCemRandom = testCemRandom

      let testMil = Array.from(Array(1000), (x, index) => index + 1)
      let testMilReversed = JSON.parse(JSON.stringify(testMil)).reverse()
      let testMilRandom = Array.from(Array(1000), (x, index) => Math.floor(Math.random() * (100 - 1) + 1))
      
      this.state.testMil = testMil
      this.state.testMilReversed = testMilReversed
      this.state.testMilRandom = testMilRandom


      let testMilhao = Array.from(Array(100000), (x, index) => index + 1)
      let testMilhaoReversed = JSON.parse(JSON.stringify(testMilhao)).reverse()
      let testMilhaoRandom = Array.from(Array(100000), (x, index) => Math.floor(Math.random() * (100 - 1) + 1))
      
      this.state.testMilhao = testMilhao
      this.state.testMilhaoReversed = testMilhaoReversed
      this.state.testMilhaoRandom = testMilhaoRandom
    }
  },
  actions: {

  }
})
