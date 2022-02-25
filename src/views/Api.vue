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
}
</script>

<style scoped>

    .api{
        padding: 20px;
        display: flex;
        justify-content: center;
        text-align: center;
    }
</style>