
<template>
  <aside  :class="`${is_expanded && 'is-expanded'}`">
      <div class="logo">
          <img src="../assets/brand-imss-digital.png" alt="Vue"/>
      </div>
      <div class="menu-toggle-wrap ">
          <button class="menu-toggle btn" @click="ToggleMenu">
              <span class="material-icons"><i class="bi bi-chevron-double-right"></i></span>
          </button>
      </div>
      <h3>Menu</h3>
      <div class="menu">
          <router-link class="button" to="/pacientes">
              <span class="material-icons"><i class="bi bi-person-rolodex"></i></span>
              <span class="text">Pacientes</span>
          </router-link>
          
          <router-link class="button" to="/glucosageneral">
              <span class="material-icons"><i class="bi bi-graph-down"></i></span>
              <span class="text">Reportes generales de glucosa</span>
          </router-link>
          <router-link class="button" to="/actualizacionesad">
              <span class="material-icons"><i class="bi bi-upload"></i></span>
              <span class="text">Actualizaciones</span>
          </router-link>
          
      </div>
      <div class="flex"></div>
          <div class="menu">
              <router-link class="button" to="/">
                  <span class="material-icons"><i class="bi bi-person-circle"></i></span>
                  <span class="text">User</span>
              </router-link>
          </div>
      
  </aside>
</template>
<script setup>
import { ref } from 'vue'

  const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

  const ToggleMenu = () => {
      is_expanded.value = !is_expanded.value
      localStorage.getItem("is_expanded", is_expanded.value)
  }
</script>
<style lang="scss" scoped>
aside{
  display: flex;
  flex-direction: column;
  width: calc(2rem + 32px);
  min-height: 100vh;
  overflow: hidden;
  padding: 1rem;

  background-color: #13322B;;
  color:#eee;

  transition:0.2s ease-out;

  .flex{
      flex: 1 1 0;
  }
  .logo{
      margin-bottom: 1rem;
      img{
          width:2rem;
      }
  }
  .menu-toggle-wrap{
      display: flex;
      justify-content: flex-end;
      margin-bottom: 1rem;

      position: relative;
      top:0;
      transition:0.2s ease-out;

      .menu-toggle{
          transition: 0.2s ease-out;
          .material-icons{
              font-size: 1.5rem;
              color: #eee;
              transition: 0.2s ease-out;
          }
          &:hover{
              color:#4ede8e;
              transform:translateX(0.5rem);
          }
      }
  } 
  &.is-expanded{
      width: 250px;
      .menu-toggle-wrap{
          top: -3rem;
          .menu-toggle{
              transform: rotate(-180deg);
          }
      }
      
      h3, .button .text{
          opacity: 1;
     
      }
      .button{
          .material-icons{
              margin-right: 1rem;
          }
      }
  }

  @media(max-width:768px){
      position: fixed;
      z-index: 99;
  }
}
h3, .button .text{
  opacity: 0;
  transition: 0.3s ease-out;
}
h3{
  color:gray;
  font-size: 0.875rem;
  text-transform: uppercase;
}
.menu{
  margin: 0 -1rem;
  .button{
      display: flex;
      align-items: center;
      text-decoration: none;

      padding: 0.5rem 1rem;
      transition: 0.2s ease-out;

      .material-icons{
          font-size: 2rem;
          color: #eee;
          transition: 0.2s ease-out;
      }
      .text{
          color: #eee;
          transition: 0.2s ease-out;
      }
      &:hover, &.router-link-exact-active{
          background-color:#13322B;
          .material-icons, .text{
              color:var(--primary);
          }
      }
      &.router-link-exact-active{
              border-right: 5px solid #eee;
      }
  }
}
</style>