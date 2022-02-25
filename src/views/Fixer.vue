<template>
    <div class="fixer">
        <img alt="Vue logo" src="../assets/logo.png">
        <h1>Fixer</h1>
        <h3>{{message}}</h3>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                message: 'Hello Vue!'
            }
        },
        methods: {

            async apiFixer(){
                const response = await axios.get('http://data.fixer.io/api/latest?access_key=a047dec8343d84e4f5590a1db236e2ad');
                console.log(response.data);
            }

        },

        created(){
            /* Created es un metodo para ejecutar simpre*/
            this.apiFixer();
        }

    }
</script>