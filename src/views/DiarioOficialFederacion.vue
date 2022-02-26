<template>
    <div class="diarioOficialFederacion">
        <div class="card">
            <div class="card-header">
                USD a MXN con Diario Oficial de Federación
            </div>
            
            <div class="card-body">
                <h5 class="card-title">Fecha de Última Modificación:</h5>
                <p class="card-text">{{date}}</p>
                <button disabled="disabled">${{rates}}</button>
            </div>
        </div>
    </div>
</template>

<script>
    //const cheerion = require('cheerio');    
    export default {

        data() {
            return {                
                date: '',
                rates: '',
            }
        },

        methods: {
            getDateAPI(){
                // Abrir un archivo json
                const response = require('../banxico.json');

                // Imprimir el resultado
                console.log(response);

                // Modificar los datos para que muestre en pantalla
                this.date = response.fecha;
                this.rates = response.cantidad;

            }
        },

        created(){
            /* Created es un metodo para ejecutar simpre*/
            this.getDateAPI();
        }

    }

</script>



<style scoped>
        
    .diarioOficialFederacion{
        padding-top: 20px;
        display: flex;
        justify-content: center;
        text-align: center;
    }

    .card{
        /*contorno*/
        border: 1px solid rgb(140, 135, 135);
        /*borde redondeado*/
        border-radius: 5px;    
    }

</style>