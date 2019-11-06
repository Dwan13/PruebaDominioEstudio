<template>
  <div id="Material">
    <template>
      <section id="inicio" >
        <img alt="Profesor" class="ImagenPersona" src="@/assets/tutor-circ.png">
        <p class="animated  bounceInRight ">Para comenzar, lo invito a acceder a cualquiera de nuestros materiales que aparecen a continuación</p>
      </section>
        <section id="Descarga">
          <b-row>
            <b-col cols="12" md="6" lg="6">
              <p class="Material">Observe un video de 10 minutos sobre Cultura Virtual</p>
            
              <br>
              <b-embed
              type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/AoQYKdF3NKc?rel=0"
              allowfullscreen
              class="embed-responsive-item"
              ></b-embed>
            </b-col>
            <b-col cols="12" md="6" lg="6">
              <p class="Material">Puede descargar un PDF de 199 páginas,dónde se realiza una introducción a la Cultura Virtual</p>

              <br>
              <a href="https://www.dropbox.com/transfer/cap_pid_ft%3AAAAAAHpkEpGEjastU4g05ETm6oSvKE6t_EWi4TzI18dqZG80he5aSQo" target="_blank" title="Descargar Ednografia Virtual">
                <img class="animated infinite heartBeat" src="@/assets/CarpetaDescarga.svg" alt="Descargar Ednografia Virtual">
              </a>
            </b-col>
          </b-row>
        </section>
        <router-link to="/Despliegue">
          <a type="button" variant="primary" >
            <img  class="seguir" src="@/assets/seguir.svg" alt="seguir a la Información">
          </a></router-link>

          <router-link to="/Formulario">
            <a type="button" variant="primary" >
              <img  class="regresar" src="@/assets/Regresar.svg" alt="regresar al Formulario">
            </a></router-link>
    </template>

  </div>
</template>
<script>
export default {
  name: 'Encuesta'
}
</script>
<style scoped>
#Descarga{
  padding: 10px 230px;
  text-align: center;
}
.bounceInRight{

}
 .Material {
  font-size: 15px;
  font-family: cursive;
  color: #000;
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
}
.heartBeat{
  width: 130px;
}

</style>
