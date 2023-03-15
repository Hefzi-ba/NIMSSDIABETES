<script setup>

</script>
<template>
    <div class="container box">
        <form class="">
            <h1>Registro de alimentacion y observaciones</h1>
            <div class="mb-3">
                <label for="validationTextarea" class="form-label">Variaciones que haya sufrido su alimentacion:</label>
                <textarea class="form-control" id="validationTextarea" placeholder="Introduce aqui aspectos importantes de tu alimentacion que influyan en el proceso de control" required></textarea>
                
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">Nivel de glucosa despues de la alimentacion y tipo de alimentacion:</label>
                
                <div class="row">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Glucosas" aria-label="First name">
                    </div>
                    <div class="col">
                        <select id="inputState" class="form-select">
                        <option selected>Comida realizada</option>
                        <option>Desayuno</option>
                        <option>Comida</option>
                        <option>Cena</option>
                        <option>Colación</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <div class="row">
                    <div class="col">
                        <label>Hora:</label>
                        <input type="text" class="form-control" placeholder="Hora en que se realizo el chequeo" aria-label="First name">
                    </div>
                    <div class="col">
                        <label>Si tienes una dieta proporcionala a tu doctor:</label>
                        <input type="file" class="form-control" aria-label="file example" required>
                        <div class="invalid-feedback">Puede ser una fotografía</div>
                    </div>
                </div>
            </div>
            
            
           

            <div class="mb-3">
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

