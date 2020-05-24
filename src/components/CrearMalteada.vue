<template>
  <div>
   
<q-dialog v-model="medium" persistent>
               <q-card style="width: 400px; max-width: 100vw;">
                <q-toolbar class="bg-light-blue-7 text-white shadow-9">
                  <q-btn flat round dense icon="add_circle"/>
                  <q-toolbar-title>
                    Nueva Malteada
                  </q-toolbar-title>
                  <q-btn dense flat icon="close" @click="CerrarVentana()">
                    <q-tooltip content-class="bg-white text-light-blue-7">Cerrar</q-tooltip>
                  </q-btn>
                </q-toolbar>
                <q-card-section>
                 
                </q-card-section>

                <q-card-section class="q-pt-none">
                  <q-input 
                  v-focus 
                  outlined 
                  color="teal" 
                  ref="Nombre" 
                  v-model="NombreMalteada" 
                  :rules="[ val => val.length <= 20 || 'Por favor use maximo 20 caracteres']" 
                  label="Nombre de la malteada" />
                </q-card-section>
                
             <q-card-section class="q-pt-none">
              

                  <q-select 
                  color="positive" 
                  ref="frutas" 
                  outlined 
                  bottom-slots 
                  v-model="frutasMalteada" 
                  :options="LFrutas" 
                  multiple 
                  label="Frutas">
                   

                  <template v-slot:hint>
                    Puede incluir mas de un elemento.
                  </template>

                  <template v-slot:append>
                    <q-btn round dense flat icon="add" @click.add />
                  </template>
               </q-select>


                </q-card-section>

                <q-card-section class="q-pt-none">

                  <q-select outlined color="purple-12" 
                   v-model="liquidosMalteada" 
                   :options="Lliquidos" 
                   label="Liquidos"  
                   ref="liquidos"
                   />
            
                 
                 
                </q-card-section>

                <q-card-section class="q-pt-none">

                  <q-select outlined color="cyan" 
                   v-model="proteinasMalteada" 
                   :options="LProteinas" 
                   label="Proteina"  
                   ref="proteinas"
                   />

                </q-card-section>

                <q-card-section class="q-pt-none">
                  <q-input outlined 
                  color="pink-11" 
                  mask="###"
                  v-model="gustoMalteada" 
                  label="Gusto"
                  ref="Gusto">
                  <template v-slot:prepend>
                    <img src="statics/icons/porcentaje.png"/>
                  </template>
                  
                  </q-input>
                </q-card-section>
                
                <q-card-actions align="right">
                  
                  <q-btn flat label="Crear" color="light-blue-7" @click="CrearMalteada()"/>
                </q-card-actions>
              </q-card>
</q-dialog>


  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'


export default {

  name: 'CrearMalteada',

  
  data () {

    return {
     
    }
     
  },
  
  directives: {
    focus: {
      // 
      inserted: function (el) {
        el.focus()
      }
    }
  },

  computed: {
 
   ...mapState(['Malteadas', 'medium', 'Nombre','Gusto','frutas','LFrutas','liquidos','Lliquidos','proteinas', 'LProteinas']),

   NombreMalteada: {

       get () {

        return this.Nombre

       },

       set (value) {

        this.NOMBRE_MALTEADA(value)

       }
     },

   frutasMalteada: {

       get () {

        return this.frutas
        
       },

       set (value) {

        this.FRUTAS_MALTEADA(value)

       }
     },

  
   liquidosMalteada: {

       get () {

        return this.liquidos
        
       },

       set (value) {

        this.LIQUIDOS_MALTEADA(value) 

       }

     }, 

    proteinasMalteada: {

       get () {

        return this.proteinas
        
       },

       set (value) {

        this.PROTEINAS_MALTEADA(value) 

       }

     },

    gustoMalteada: {

       get () {

        return this.Gusto
        
       },

       set (value) {

        this.GUSTO_MALTEADA(value) 

       }

     },

  },

  methods: {

    ...mapMutations(['CERRAR_MODAL', 'NOMBRE_MALTEADA', 'FRUTAS_MALTEADA', 'LIQUIDOS_MALTEADA', 'PROTEINAS_MALTEADA', 'GUSTO_MALTEADA', 'CREAR_MALTEADA']),


    CerrarVentana(){

      this.$q.dialog({
        title: 'Abandonas?',
        message: 'Se perderan los valores que ya hayas seleccionado.',
        ok: {
          push: true,
          color: 'positive'
        },
        cancel: {
          push: true,
          color: 'negative'
        },
        persistent: true
      }).onOk(() => {
        
        this.CERRAR_MODAL()

      }).onCancel(() => {
       
      }).onDismiss(() => {
        
      })
      

    },
    CrearMalteada() {
     
      if(this.Nombre.length == 0)
      {
        this.$q.notify({
        type: 'negative',
        message: `No ha indicado el nombre de la malteada.`
       })
       this.$refs.Nombre.focus();

      } else if(this.frutas.length == 0)
      {
        this.$q.notify({
        type: 'negative',
        message: `Selecciona al menos una fruta.`
       })
      this.$refs.frutas.focus();

      } else if(this.liquidos.length == 0) 
      {
        this.$q.notify({
        type: 'negative',
        message: `Selecciona un liquido.`
       })
       this.$refs.liquidos.focus();

      } else if(this.proteinas.length == 0)
      {

        this.$q.notify({
        type: 'negative',
        message: `Selecciona una proteina.`
       })
       this.$refs.proteinas.focus();

      } else if(this.Gusto.length == 0)
      {
        this.$q.notify({
        type: 'negative',
        message: `Indica el porcentaje del gusto.`
       })
       this.$refs.Gusto.focus();

      }else{
          
      
        this.CREAR_MALTEADA({ 

          Nombre: this.NombreMalteada, 
          frutas: this.frutasMalteada , 
          liquidos: this.liquidosMalteada , 
          proteinas: this.proteinasMalteada , 
          Gusto: this.gustoMalteada

        })

      }
    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>

