<template>
    <div class="banxico">
        <div class="card">
            <div class="card-header">
                USD a MXN con Banxico
            </div>
            
            <div class="card-body">
                <h5 class="card-title">Fecha de Última Modificación:</h5>
                <p class="card-text">{{date}}</p>
                <h3>${{rates}}</h3>
            </div>

            <div class="card-header">
                <form v-on:submit="apiBanxico">
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

            async apiBanxico(e){
                e.preventDefault();

                // TOKEN Para acceder a la API                
                const token = '4918402b8c2e0877e744dbaabadf59807e6cd80333238c1ad479608e5140d84c'
                const response = await axios.get('https://www.banxico.org.mx/SieAPIRest/service/v1/series/SF43718/datos/oportuno?token=4918402b8c2e0877e744dbaabadf59807e6cd80333238c1ad479608e5140d84c');

                // Se acceden a los datos de la API y se guardan en variables
                this.rates = response.data.bmx.series[0].datos[0].dato
                this.date = response.data.bmx.series[0].datos[0].fecha

                // Guardar los datos en localStorage
                localStorage.setItem('fechaBAN', this.date);
                localStorage.setItem('ratesBAN', this.rates);

            }

        },

        created(){
            /* Created es un metodo para ejecutar simpre*/
            // Extrae datos de localStorage
            const flh = localStorage.getItem('fechaBAN');
            const clf = localStorage.getItem('ratesBAN');

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
        
    .banxico{
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