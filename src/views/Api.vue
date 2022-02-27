<template>
    <div class="api">

        <Fixer/>
        <Banxico/>
        <DiarioOficialFederacion/>

    </div>
</template>

<script>
// 1er Paso: Importar el componente
import Fixer from './Fixer.vue'
import Banxico from './Banxico.vue'
import DiarioOficialFederacion from './DiarioOficialFederacion.vue'

// 2do Paso: Exportar el componente
export default {
  components: {
    Fixer,
    Banxico,
    DiarioOficialFederacion,
  },

  data() {
    return {
      //
    }
  },

  methods: {
    //
  },

  created() {

  },
}
</script>

<style scoped>

    .api{
        padding-top: 50px;
        display: flex;
        justify-content: space-around;
        text-align: center;        
        flex-direction: row;        
    }
</style>