<script setup>
</script>
<template>
<div class="container">
<form class="row g-3 needs-validation texto" novalidate>
 <h1>Registro del paciente diabetico</h1> 
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="validationCustom01" value="Mark" required>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Numero de Seguro Social</label>
    <input type="text" class="form-control" id="validationCustom02" value="Otto" required>
  </div>
  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Consultorio</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">#</span>
      <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">Tipo de Diabetes</label>
    <input type="text" class="form-control" id="validationCustom03" required>
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom04" class="form-label">Sexo</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-3">
    <label for="validationCustom05" class="form-label">Edad</label>
    <input type="text" class="form-control" id="validationCustom05" required>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
      <label class="form-check-label" for="invalidCheck">
      Es usted hipertenso
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-outline-success" type="submit">Registrar</button>
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

