<template>
    <div class="fixer">

        <div class="card ">
            <div class="card-header">
                USD a MXN con Fixer
            </div>
            
            <div class="card-body">
                <h5 class="card-title">Fecha de Última Modificación:</h5>
                <p class="card-text">{{date}}</p>
                <h3>${{rates}}</h3>
            </div>
            
            <div class="card-header">
                <form v-on:submit="apiFixer">
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

            async apiFixer(e){
                e.preventDefault();
                // Axios a la API
                const response = await axios.get('http://data.fixer.io/api/latest?access_key=4f32bdac3186eb5c64c36c75653718b9');
                //console.log(response.headers );

                // Se acceden a los datos de la API y se guardan en variables
                this.rates = response.data.rates['MXN'] / response.data.rates['USD'];                               
                this.date = response.headers['last-modified'];

                // Guardar los datos en localStorage
                localStorage.setItem('fechaFIX', this.date);
                localStorage.setItem('ratesFIX', this.rates);
            }

        },

        created(){
            /* Created es un metodo para ejecutar simpre*/
            // Extrae datos de localStorage
            const flh = localStorage.getItem('fechaFIX');
            const clf = localStorage.getItem('ratesFIX');

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
    .fixer{
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