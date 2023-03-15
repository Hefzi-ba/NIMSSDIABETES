<script setup>

</script>
<template>
    <div class="container box">
        <form>
            <div class="row">
                <h1>Control de glucosa</h1>
                <div class="col">
                    <label for="inputEmail4">Glucosa</label>
                    <input type="text" class="form-control" placeholder="Nivel de glucosa">
                </div>
                <div class="col">
                    <label for="inputPassword4">Fecha</label>
                    <input type="text" class="form-control" >
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <label for="inputState">Checado en:</label>
                    <select id="inputState" class="form-control">
                        <option selected>Ayunas</option>
                        <option>Despues de ingerir alimentos</option>
                    </select>
                </div>
                <div class="col">
                    <label for="inputCity">Notas</label>
                    <input type="text" placeholder="si hay algo importante que mencionar" class="form-control" id="inputCity">
                
                </div>
            </div>
            <div class="form-row box">
                <div class="form-group col-md-2">
                    <label for="inputZip">Presion arterial</label>
                    <input type="text" placeholder="opcional" class="form-control" id="inputZip">
                </div>
            </div>
            <button type="submit" class="btn btn-outline-success">Registrar</button>
        </form>
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
</style>

