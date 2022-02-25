<template>
    <div class="banxico">
        <div class="card">
            <div class="card-header">
                USD a MXN con Banxico
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
    export default {

        data() {
            return {
                date: '',
                rates: '',
            }
        },

        methods: {

            async apiBanxico(){
                const token = '4918402b8c2e0877e744dbaabadf59807e6cd80333238c1ad479608e5140d84c'
                const response = await axios.get('https://www.banxico.org.mx/SieAPIRest/service/v1/series/SF43718/datos/oportuno?token=4918402b8c2e0877e744dbaabadf59807e6cd80333238c1ad479608e5140d84c');

                this.rates = response.data.bmx.series[0].datos[0].dato
                this.date = response.data.bmx.series[0].datos[0].fecha
            }

        },

        created(){
            /* Created es un metodo para ejecutar simpre*/
            //this.apiBanxico();
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