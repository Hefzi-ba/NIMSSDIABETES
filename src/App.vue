<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <nav class="navbar navi texto">
    <div class="container">
      <router-link class="navbar-brand texto" to="/">
        Diabet-IMSS
        <!--
          <img 
        src="@/assets/brand-imss-digital.png" 
        alt="Bootstrap" width="80" 
        height="34">
        -->
      </router-link>
        <div>
          <router-link class="btn btn-outline-light me-2" to="/login">Iniciar</router-link>
          <router-link class="btn btn-outline-light me-2"  to="/about">Registrar</router-link>
        </div>
    </div>
  </nav>


   <RouterView />

 <footer class="footer">
  IMSS | imss digital
 </footer>
</template>

<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #2e6346;
  color: white;
  text-align: center;
  font-family: sans-serif;
}
.navi{
  background-color: #2e6346;
}
.texto{
  color: #fff;
  font-family: sans-serif;
}
</style>
