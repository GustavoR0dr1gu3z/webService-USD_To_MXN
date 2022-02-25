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

<style scoped>
        
    .banxico{
        padding: 20px;
        display: flex;
        justify-content: center;
        text-align: center;
    }

</style>