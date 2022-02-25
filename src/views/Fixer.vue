<template>
    <div class="fixer">

        <div class="card ">
            <div class="card-header">
                USD a MXN con Fixer
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

            async apiFixer(){

                const response = await axios.get('http://data.fixer.io/api/latest?access_key=a047dec8343d84e4f5590a1db236e2ad');
                console.log(response.headers );

                this.rates = response.data.rates['MXN'];                       
                this.date = response.headers['last-modified'];


            }

        },

        created(){
            /* Created es un metodo para ejecutar simpre*/
            this.apiFixer();
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