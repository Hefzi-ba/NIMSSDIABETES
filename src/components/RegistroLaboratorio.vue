<script setup>
</script>
<template>
<div class="container box">
 
    <div class="card text-center perfil">
        <div class="card-header">
            Subir estudios realizados
        </div>
        <div class="card-body">
            <div class="row g-3">
                <div class="col-sm-7">
                    <label>Tipo de estudio:</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>selecciona el nombre del estudio realizado</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                
                <div class="col-sm-4">
                    <label>Subir estudio:</label>
                    <input type="file" class="form-control" placeholder="City" aria-label="City">
                </div>
                <div class="col-sm">
                    <label>Fecha</label>
                    <input type="text" class="form-control" placeholder="fecha" aria-label="Zip">
                 </div>
            </div>
         </div>
    </div>
  
</div>

</template>
<style scoped>
.texto{
  color: #000;
  font-family: sans-serif;
  font-size: larger;
}
.box{
    text-align: center;
    margin: 1%;
    font-family: sans-serif;
    font-size: large;
   
}
.perfil{
    margin: 1%;
}
</style>