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

<style scoped>
        
    .diarioOficialFederacion{
        padding: 20px;
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