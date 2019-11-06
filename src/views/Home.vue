<template>
<div id="home">
      <img alt="Curso Virtual logo" class="LogoPrincipal" src="@/assets/tutor.png">
      <h1 class="animated  zoomIn ">Bienvenido hoy serás un estudiante Virtual</h1>
      <router-link to="/Formulario">
        <a type="button" variant="primary" >
          <img  class="seguir" src="@/assets/seguir.svg" alt="seguir al formulario">
        </a></router-link>
</div>

</template>

<script>
export default {
  name: 'home'
}
</script>

<style media="screen">
#home {
background-color: #ef32;
padding: 20px;
text-align: center;
}
.LogoPrincipal{
  width: 10%;
  text-align: left;
}
</style>
