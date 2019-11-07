<template>
  <div id="app">
    <a class="button" @onclick="mostrar" title="Suspender audio">
      <img  class="icon_audio" src="@/assets/altavoz.png" alt="Incluir audio">
    </a>
    <b-navbar toggleable="md" type="light" variant="warning" >
      <b-container>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand :to="{name:'home'}">Curso Virtual</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <b-nav-item :to="{name:'formulario'}">Formulario</b-nav-item>
            <b-nav-item :to="{name:'descarga'}">Material de apoyo</b-nav-item>
            <b-nav-item :to="{name:'despliegue'}">Educación Virtual</b-nav-item>
            <b-nav-item :to="{name:'preguntas'}">Cuestionario</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <router-view/>

  </div>
</template>

<script>
export default {
  name:'home',
  methods: {
    mostrar (audioEscucha){
      audioEscucha = document.getElementById("icon_audio");
      if (audioEscucha.style.display == "none") {
          document.getElementById("icon_audio").style.display=="block";
        }else{
          document.getElementById("escuchicon_audioar").style.display=="none";
        }
   }
 }
}

</script>

<style media="screen">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  padding:0 0px;

}
#inicio {
padding: 30px 0;
background-color: #ef32;
text-align: center;
}
#inicio b-p{
  font-size: 15px;
  color: #17a2b8;
}
template{
  padding:0 30px;

}
div{
  padding: 0 30px;
}
h1{
    color: #17a2b8;
}

p{
  font-size: large;
  color: #17a2b8;
}
.btn-primary{
  background-color: #da651d;
  border-color: #403a34;
}
.icon_audio{
  width: 2%;
  position: fixed;
  top: 10%;
  left: 95%;
}
.seguir{
  width: 2%;
  position: fixed;
  top: 50%;
  left: 95%;
}
.regresar{
  width: 2%;
  position: fixed;
  top: 50%;
  left: 3%;
}
@media screen and (min-width: 780px) and (max-width: 1040px) {
.zoomIn{
  font-size: 2.0rem;
}
.seguir{
  top:20%;
}
}
@media screen and (min-width: 481px) and (max-width: 781px) {
  .zoomIn{
    font-size: 1.8rem;
  }
  .seguir{
    top:19%;
  }

}@media screen and (max-width: 480px) {
  .zoomIn{
    font-size: 1.1rem;
  }
  .seguir{
    top:18%;
  }
}

</style>
