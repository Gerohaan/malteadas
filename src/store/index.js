import Vue from 'vue'
import Vuex from 'vuex'
import { Notify } from 'quasar'


Vue.use(Vuex)

export default new Vuex.Store({

  state: {


    Malteadas: [],
    medium: false,
    Nombre: '',
    Gusto: '',
    frutas: [],
    LFrutas: [
      {
        label: 'Watermelon',
        value: 6
      },
      {
        label: 'Strawberry',
        value: 5
      },
      {
        label: 'Pineapple',
        value: 8
      },
      {
        label: 'Orange',
        value: 10
      },
      {
        label: 'Kiwi',
        value: 7
      },
      {
        label: 'Banana',
        value: 9
      },
      {
        label: 'Limes',
        value: 4
      }
    ],
    liquidos: [],
    Lliquidos: [
      {
        label: 'Leche',
        value: 4
      },
      {
        label: 'Agua',
        value: 0
      },
      {
        label: 'Agua de coco',
        value: 2
      },
      {
        label: 'Leche de soya',
        value: 3
      },
      {
        label: 'Leche de almendra',
        value: 1
      },
    ],
    proteinas: [],
    LProteinas: ['Vainilla', 'Chocolate', 'Coco', 'Caramelo', 'Sin sabor']



  },
  mutations: {

    ABRIR_MODAL: (state) => {

      state.medium = true

   },

    CERRAR_MODAL: (state) => {

        state.Nombre = '',
        state.frutas = [],
        state.liquidos = [],
        state.proteinas = '',
        state.Gusto = '',
        state.medium = false
    },

    NOMBRE_MALTEADA: (state, payload) => {

      state.Nombre = payload

    },

    FRUTAS_MALTEADA: (state, payload) => {

      state.frutas = payload

    },

    LIQUIDOS_MALTEADA: (state, payload) => {

      state.liquidos = payload

    },

    PROTEINAS_MALTEADA: (state, payload) => {

      state.proteinas = payload

    },

    GUSTO_MALTEADA: (state, payload) => {

      state.Gusto = payload

    },

    CREAR_MALTEADA: (state, payload) => {

      let TotalMalt = state.Malteadas.length+1

      let nuevaMalteada = {
      id: TotalMalt,
      Nombre: payload.Nombre,
      Frutas: payload.frutas,
      Liquidos: payload.liquidos,
      Proteinas: payload.proteinas,
      Gusto: payload.Gusto
    }

      state.Malteadas.unshift(nuevaMalteada)
    

      Notify.create({
      type: 'positive',
      message: `Genial!! Creaste tu malteada.`
      })
        
      state.Nombre = '',
      state.frutas = [],
      state.liquidos = [],
      state.proteinas = '',
      state.Gusto = '',
      state.medium = false

  

    }



  },
  getters: {
  
},
  actions: {


  }
 
})


