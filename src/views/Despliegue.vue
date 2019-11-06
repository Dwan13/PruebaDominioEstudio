<template>
  <div id="Despliegue">
    <section id="inicio">
      <img alt="Profesor" class="ImagenPersona" src="@/assets/tutor-circ.png">
      <p class="animated  bounceInRight">La educación virtual se caracteriza por ser: Haz clic en cada titulo</p>
    </section>
    <section id="cartas">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block href="#" v-b-toggle.accordion-1 variant="info">Oportuna</b-button>
        </b-card-header>
        <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ text1 }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block href="#" v-b-toggle.accordion-2 variant="info">Económica</b-button>
        </b-card-header>
        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ text2 }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block href="#" v-b-toggle.accordion-3 variant="info">Compatible</b-button>
        </b-card-header>
        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ text3 }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block href="#" v-b-toggle.accordion-4 variant="info">Innovadora</b-button>
        </b-card-header>
        <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ text4 }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block href="#" v-b-toggle.accordion-5 variant="info">Motivadora</b-button>
        </b-card-header>
        <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ text5 }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </section>
    <router-link to="/Preguntas">
      <a type="button" variant="primary" >
        <img  class="seguir" src="@/assets/seguir.svg" alt="seguir al cuestionario">
      </a></router-link>

      <router-link to="/Descarga">
        <a type="button" variant="primary" >
          <img  class="regresar" src="@/assets/Regresar.svg" alt="regresar a la Material de apoyo">
        </a></router-link>
  </div>


</template>
<script>
export default {
  name: "Despliegue",
  data: () => ({
    text1:`Para datos, textos, gráficos, sonido, voz e imágenes; también ofrece herramientas para la interacción (video conferencia, chat, foro, cuestionarios, etc.)`,
    text2:`Porque no es
necesario
desplazarse
hasta el centro
educativo, se
puede estudiar
desde cualquier
parte del mundo
a cualquier hora,
solamente se
requiere un
computador y
conexión a
internet.`,
    text3:`Con la
educación
presencial en
cumplimiento
del programa
académico.`,
    text4:`En el desarrollo
de nuevos
escenarios de
aprendizaje.

Permite al usuario
desarrollar un
proceso de
aprendizaje a su
propio ritmo y
según sus propias
exigencias.`,
    text5:`En el aprendizaje,
evita tener que
estar todo el
tiempo encerrado
en un salón de
clase.`
  })
}
</script>
<style scoped>
#cartas{
  padding: 30px 300px;
}
#cartas p{
color: #000;
}
div.card{
  padding: 0 0;

}

.seguir {
  text-align: right;
}
b-card{
  padding: 30px 300px;
}
</style>
