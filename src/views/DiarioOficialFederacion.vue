<template>
    <div class="diarioOficialFederacion">
        <div class="card">
            <div class="card-header">
                USD a MXN con DOF
            </div>
            
            <div class="card-body">
                <h5 class="card-title">Fecha de Última Modificación:</h5>
                <p class="card-text">{{date}}</p>
                <h3>${{rates}}</h3>
            </div>

            <div class="card-header">
                <form v-on:submit="getDateAPI">
                    <input type="submit" value="Actualizar" class="btn btn-outline-success">    
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    
    export default {

        data() {
            return {                
                date: '',
                rates: '',
            }
        },

        methods: {
            getDateAPI(e){
                e.preventDefault();
                
                    // Abrir un archivo json
                    const response = require('../banxico.json');

                    // Imprimir el resultado
                    console.log(response);

                    // Modificar los datos para que muestre en pantalla
                    this.date = response.fecha;
                    this.rates = response.cantidad;

                    // Guardar datos en localStorage
                    localStorage.setItem('fechaDOM', this.date);
                    localStorage.setItem('cantidadDOM', this.rates);


            }
        },

        created(){
            /* Created es un metodo para ejecutar simpre*/

            // Extrae datos de localStorage
            const flh = localStorage.getItem('fechaDOM');
            const clf = localStorage.getItem('cantidadDOM');

            // Si no hay datos, muestra mensaje que no hay
            // Solo resta que el usuario de click en el boton
            if(flh == '' || clf == ''){
                console.log('No hay datos en localStorage');
            }
            else{
                console.log('Hay datos en localStorage'); 
                // Si los hay, solamente reemplaza los datos
                // Y no es necesario generarlos nuevamente           
                this.date = flh;
                this.rates = clf;
            }
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