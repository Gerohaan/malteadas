<template>
  <q-page class="q-pa-md doc-container">
   
    
    
    <div class="column" style="height: 170px">
      
      <div class="col self-center">
        <img
      alt="Malteada logo"
      src="statics/whatshot.png"
    >
      </div>
      
     
    </div>

    <div class="column" style="height: 120px">
      
      <div class="col self-center">
      <!-- <h5 class="text-italic">Crea tus malteadas</h5> -->
       <q-chip outline  color="deep-orange" text-color="white" icon="local_drink" size="xl">
        Gestionar
      </q-chip>
      </div>
      
     
    </div>

    <div class="column" style="height: 80px">
      
      <div class="col self-center">
      <q-btn outline rounded color="positive" align="between" label="Crear nueva malteada" icon="add_circle"  @click="ABRIR_MODAL()" />
      </div>
      
     
    </div>
    <div class="column" style="height: 80px">
      
      <div class="col self-center">
      <q-btn outline rounded color="light-blue-6" to="/Lista" align="between" label="Tu lista de malteadas" icon="menu"/>
      </div>
      
     
    </div>
   
  <CrearMalteada/>


  </q-page>
</template>

<script>
import { mapMutations } from 'vuex'

import CrearMalteada from '../components/CrearMalteada.vue'

export default {

  name: 'GestionMalteadas',

  
  components: {

      CrearMalteada

  }, 
  
  data () {

    return {
     
    }
     
  },


  methods: {

    ...mapMutations(['ABRIR_MODAL']),


  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>

