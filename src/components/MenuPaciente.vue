<script setup>

</script>
<template>

<div class="container con">
    <div class="row row-cols-2 row-cols-md-3 g-4">
        <router-link class=" texto btn" to="/registroglucosa">
            <div class="col">
                <div class="card fondo">
                    <img src="../assets/donation.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Registrar glucosa</h5>
                    </div>
                </div>
            </div>
        </router-link>
        <router-link class=" texto btn" to="/registromedicamento">
            <div class="col">
                <div class="card fondo">
                    <img src="../assets/drogas.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Control de medicamentos</h5>
                    </div>
                </div>
            </div>
        </router-link>
        <router-link class=" texto btn" to="/registroalimenticio">
            <div class="col">
                <div class="card fondo">
                    <img src="../assets/dieta.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Control alimenticio</h5>
                    </div>
                </div>
            </div>
        </router-link>
        <router-link class=" texto btn" to="/registrolaboratorio">
            <div class="col">
                <div class="card fondo">
                    <img src="../assets/prescripcion.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Estudios realizados</h5>
                    </div>
                </div>
            </div>
        </router-link>
        
    </div>
</div>
</template>
<style scoped>
.con{
  padding: 2%;
  margin: 2%;

}
.texto{
  font-family: sans-serif;
  color: black;
  text-align: center;
  font-size: large;
  text-decoration: none;
  
}
.fondo{
    background-color:#2e6346;
    color: #fff;
}
.img{
    height: 1%;
}
</style>