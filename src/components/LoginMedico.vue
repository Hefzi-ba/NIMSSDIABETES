<script setup>
</script>
<template>
<form class="box">
  <h1>Bievenido Personal de salud</h1>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Nombre:</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Contraseña:</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <router-link to="/menuadmin">
        <button type="submit" class="btn btn-outline-success texto">Iniciar</button>
  </router-link>
  
   
  <br>

  
</form>  
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