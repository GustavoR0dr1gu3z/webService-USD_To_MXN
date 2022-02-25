<template>

  <div id="nav">
    <Navbar/>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>


    <router-view/>

  </div>

</template>


<script>
// 1er Paso: Importar el componente
import Navbar from './components/Navbar.vue'

// 2do Paso: Exportar el componente
export default {
  components: {
    Navbar,
  },
}
</script>