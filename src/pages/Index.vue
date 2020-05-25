<template>
  <q-page class="q-pa-md doc-container">
   
    <div class="column" style="height: 120px">
    </div>
    
    <div class="column" style="height: 150px">
      
      <div class="col self-center">
        <img
      alt="Malteada logo"
      src="statics/whatshot.png"
    >
      </div>
      
     
    </div>

    <div class="column" style="height: 100px">
      
      <div class="col self-center">
        <q-chip outline  color="deep-orange" text-color="white" icon="local_drink" size="xl">
           <h5 class="text-italic">Tu malteada favorita</h5>
        </q-chip>
      
      </div>
      
     
    </div>

    <div class="column" style="height: 100px">
      
      <div class="col self-center">
      <q-btn outline rounded color="info" to="/gestion" align="between" label="Comencemos" icon="arrow_forward"/>
      </div>
      
     
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
