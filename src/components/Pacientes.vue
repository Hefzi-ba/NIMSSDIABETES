<script setup>
import MenuAdmin from './MenuAdmin.vue';
</script>
<template>
    
    <div class="cont">
        <MenuAdmin/>
        <div class="container mt-3">
            <h2>Listado de pacientes</h2>
            <p>Reportes de pacientes y sus registros</p>            
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Nss</th>
                    <th>Signos vitales</th>
                    <th>Glucosa</th>
                    <th>Alimentacion</th>
                    <th>Medicamentos</th>
                    <th>Estudios</th>
                    <th>Eliminar</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>John</td>
                    <td>09876</td>
                    <td class="text-center"><i class="bi bi-heart-pulse btn btn-outline-success"></i></td>
                    <td class="text-center"><i class="bi bi-moisture btn btn-outline-success"></i></td>
                    <td class="text-center"><i class="bi bi-apple btn btn-outline-success"></i></td>
                    <td class="text-center"><i class="bi bi-capsule btn btn-outline-success"></i></td>
                    <td class="text-center"><i class="bi bi-clipboard2-data btn btn-outline-success"></i></td>
                    <td class="text-center"><i class="bi bi-trash-fill btn btn-danger"></i></td>
                    <!--el punto es que sean botones desplegables-->
                    
                </tr>
                </tbody>
            </table>
            </div>
    </div>
    

</template>
<style scoped>
    .cont{
        display: flex;
    }
</style>