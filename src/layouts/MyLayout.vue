<template>
  <q-layout view="hhh LpR ffr">

    <q-header reveal elevated class="bg-primary text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>

          <q-chip square color="primary" text-color="red" icon="whatshot" size="20px">
           Variedades de Malteadas
          </q-chip>
          
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="left" side="left" overlay behavior="mobile" elevated>
      
      

         <q-img src="statics/whatshot2.png" class="imgfondolat" style="height: 150px">
            <div class="absolute-bottom bg-transparent">
            <q-icon name="deck" class="text-warning" style="font-size: 4.4em;" />
          </div>
          </q-img>
         
         <q-list bordered padding class="rounded-borders text-blue">
      <q-item
        clickable
        v-ripple
        :active="link === 'home'"
        @click="link = 'home'"
        active-class="my-menu-link" 
        to="/" exact
      >
        <q-item-section avatar>
          <q-icon name="home" />
        </q-item-section>

        <q-item-section>Inicio</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'favorite_border'"
        @click="link = 'favorite_border'"
        active-class="my-menu-link" 
        to="gestion" exact
      >
        <q-item-section avatar>
          <q-icon name="favorite_border" />
        </q-item-section>

        <q-item-section>Gestion de Malteadas</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'list'"
        @click="link = 'list'"
        active-class="my-menu-link" 
        to="Lista" exact
      >
        <q-item-section avatar>
          <q-icon name="list" />
        </q-item-section>

        <q-item-section>Lista de Malteadas</q-item-section>
      </q-item>

      <q-separator spaced />

      <q-item
        clickable
        v-ripple
        :active="link === 'help'"
        @click="link = 'help'"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="help" />
        </q-item-section>

        <q-item-section>Ayuda</q-item-section>
      </q-item>
    </q-list>


    </q-drawer>

    <q-page-container>
         <transition name="fade" mode="out-in">
            <router-view />
         </transition>
    </q-page-container>

    <q-footer reveal elevated class="bg-primary text-black">
      <q-toolbar>
        <q-toolbar-title>
          
         
        </q-toolbar-title>
        <q-chip square color="red" text-color="white" icon-right="email">
        gero.delfin@gmail.com
        </q-chip>
         
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false,
      link: 'inbox'
    }
  }
}
</script>
<style lang="scss">
   .header-image {
        height: 100%;
        z-index: -2;
        opacity: 0.3;
        filter: grayscale(100%)
      }
    .imgfondolat {
        opacity: 1;
      }
    .fade-enter-active,
      .fade-leave-active {
        transition: opacity .5s
      }
  
      .fade-enter,
      .fade-leave-to {
        opacity: 0
      }
</style>
<style lang="sass">
.my-menu-link
  color: white
  background: #F2C037
</style>


