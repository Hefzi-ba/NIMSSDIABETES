<template>
    <div class="ap">
        <MenuAdmin/>
    </div>

</template>
<script>
import MenuAdmin from '../components/MenuAdmin.vue';

</script>
<style lang="scss">
:root{
    --sidebar-width:300px;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
.bodys{
    background-color: #fff;

}
.btns{
    cursor: pointer;
    appearance: none;
    border: none;
    outline:none;
    background:none;
}
.ap{
    display: flex;
    main{
        flex:1 1 0;
        padding:1.5 rem;
        @media (max-width:768px){
            padding-left: 6rem;
        }
    }
}
</style>