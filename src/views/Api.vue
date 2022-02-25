<template>
    <div class="api">

        <Fixer/>

    </div>
</template>

<script>
// 1er Paso: Importar el componente
import Fixer from './Fixer.vue'

// 2do Paso: Exportar el componente
export default {
  components: {
    Fixer,
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