<template>
  <q-page class="q-pa-md doc-container">
   
    
    <div class="column" style="height: 130px">
      
      <div class="col self-center">
        <img
      alt="Malteada logo"
      src="statics/whatshot.png"
    >
      </div>
      
     
    </div>

    <div class="column" style="height: 100px">
      
      <div class="col self-center">
       <q-chip outline  color="deep-orange" text-color="white" icon="storage" size="xl">
        Lista de malteadas
       </q-chip>
      </div>
      
     
    </div>


    <div class="column">
      
      <div class="col self-center">


 <q-card>
    
    <q-list bordered padding class="rounded-borders" style="max-width: 700px">



      <q-item clickable v-ripple v-if="Malteadas.length == 0">

      

        <q-item-section>
         <q-icon name="sentiment_very_dissatisfied" class="text-blue" style="font-size: 5.4em;" />
        </q-item-section>

        <q-item-section side>

          <q-item-label>No hay malteadas creadas</q-item-label>
          
        </q-item-section>

        
      </q-item>

      <q-item v-else clickable v-ripple v-for="malteada in Malteadas" :key="malteada.id" >

        <q-item-section side>
           <q-item-label lines="1" class="text-weight-medium"># {{malteada.id}} </q-item-label>
        </q-item-section>

        <q-item-section top>
          <q-item-label lines="1" class="text-weight-medium"> {{malteada.Nombre}} </q-item-label>
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1" class="text-weight-medium">Ingredientes</q-item-label>
          <q-item-label caption>
            <span v-for="frutas in malteada.Frutas">
              {{ frutas.label }},
            </span>
            <span>
              {{malteada.Liquidos.label}}
            </span>
            <span>
             y {{malteada.Proteinas}}.
            </span>
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-btn size="lg" flat dense round color="green" icon="favorite">{{ SumaDeValores(malteada.id) }}</q-btn>
        </q-item-section>

        <q-item-section side>
          <q-btn size="lg" flat dense round color="red" icon="whatshot">{{ malteada.Gusto }} %</q-btn>
        </q-item-section>
    

      </q-item>

     

      
  
    </q-list>
    </q-card>

        
      </div>
      
    
    </div>

   <q-page-sticky position="bottom-right" :offset="[18, 18]" @click="ABRIR_MODAL()">
         <q-tooltip v-model="showing" 
         content-class="bg-blue" 
         anchor="top left" 
         self="top middle" 
         content-style="font-size: 14px" 
         :offset="[30, 30]" 
         transition-show="rotate"
         transition-hide="rotate"
         >
         Prepara aqui!
        </q-tooltip>
        <q-btn fab-mini icon="add" color="blue" />
   </q-page-sticky>
    

    <CrearMalteada/>

  </q-page>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex' 

import CrearMalteada from '../components/CrearMalteada.vue'


export default {
  name: 'Listamalteadas',

  components: {

      CrearMalteada

  }, 
  
  data () {

    return {
      showing: false
    }
     
  },

created(){

   this.ShowTol()

  },

  computed: {

     ...mapState(['Malteadas']),
  },

  methods: {

    ...mapMutations(['ABRIR_MODAL']),

    ver()
    {

        let valores = [1, 2, 3, 4, 5]
        let suma = 0
        valores.forEach (function(valor){
        suma += valor

    })

    console.log(suma)
   
    },
    ShowTol(){
      if(this.Malteadas.length == 0)
      {
          this.showing = true

      }else{
          
          this.showing = false
      }
    },
    SumaDeValores(id){

       // console.log(id)
        let ItemMalt = this.Malteadas.filter(Malteada => Malteada.id == id);

        let LasFrutas = ItemMalt[0].Frutas   
        let Contador = ItemMalt[0].Frutas.length
        let suma = 0
        for (let i=0; i<Contador; i++) {
         // console.log(LasFrutas[i].value)
          suma += LasFrutas[i].value 
        }
        //console.log(suma)
        let ValorLiquido = ItemMalt[0].Liquidos.value
        //console.log(ValorLiquido)
        let FrutasMasLiquidoTotal = suma+ValorLiquido
        //console.log(FrutasMasLiquidoTotal)
        return FrutasMasLiquidoTotal

    },
   
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 500px
</style>