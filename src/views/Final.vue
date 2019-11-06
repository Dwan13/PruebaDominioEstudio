<template >
  <div id="fin">
    <img alt="Profesor" class="ImagenPersona" src="@/assets/tutor-circ.png">
    <p class="animated rotateInUpRight">GRACIAS</p>
    <b-button  variant="primary" to="/">
      Regresar a la página principal
    </b-button>
  </div>

</template>
<script>
export default {
  name: "fin",
  data: () => ({

  })
}
</script>
<style scoped>

#fin{
  text-align: center;
  background-color: rgba(40, 167, 69, 0.25);
}
.rotateInUpRight{
  font-size: 200px;
  color: #ffb500c4;
}
.btn-primary{
  background-color: #d7ff07ad;
  color:#000;
}
.ImagenPersona{
  padding-top: 30px;
}
</style>
