<script setup>

</script>
<template>
    <div class="container box">
        <form>
            <div class="row">
                <h1>Control de medicamentos</h1>
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">Medicanto:</label>
                    <input type="text" class="form-control" id="inputCity">
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">Dosis:</label>
                    <input type="text" class="form-control">
                </div>
                <div class="col-md-2">
                    <label for="inputZip" class="form-label">Hora:</label>
                    <input type="text" class="form-control" id="inputZip">
                </div>
            </div>
            <br>
            <select class="form-select" aria-label="Default select example">
                <option selected>Despues de:</option>
                <option value="1">Desayuno</option>
                <option value="2">Comida</option>
                <option value="3">Cena </option>
                <option value="3">otro</option>
            </select>
            <br>
            <textarea type="text" class="form-control" placeholder="Alguna nota que quiera comentar a su doctor"></textarea>
            <br>
            <div>
                <button type="submit" class="btn btn-outline-success">Registrar</button>
            </div>
            
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

