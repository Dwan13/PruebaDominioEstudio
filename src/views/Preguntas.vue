<template>
  <div id="preguntas">
    <section id="inicio">
      <img alt="Profesor" class="ImagenPersona" src="@/assets/tutor-circ.png">
      <p class="animated  bounceInRight">Selecciona la respuesta que considere correcta.</p>
    </section>
    <div class="SelMultiple">
    <b-form   @submit="onSubmit" @reset="onReset">
      <b-form-group label="La cultura virutal es" id="selecciono-cultura">
        <b-form-radio-group v-model="form.cultura"  name="radio-validation1" id="cultura" stacked required>
          <b-form-radio  v-model="checked1[0]" value="a1" v-bind:class="{bien:checked1[0]}" >La cultura que está emergiendo del uso de las TIC’s para la comunicación, el entretenimiento y el mercadeo electrónico.</b-form-radio>
          <b-form-radio  v-model="checked1[1]" value="b1" v-bind:class="{mal:checked1[1]}" >La cultura de los videojuegos y el chat</b-form-radio>
          <b-form-radio  v-model="checked1[2]" value="c1" v-bind:class="{mal:checked1[2]}" >La cultura de los ingenieros de Sistemas</b-form-radio>
        </b-form-radio-group>
      </b-form-group>
      <b-form-group label="La educación virtual permite" id="selecciono-education">
        <b-form-radio-group v-model="form.education" name="radio-validation2" id="education" stacked required>
          <b-form-radio  v-model="checked2[0]" value="a2" v-bind:class="{mal:checked2[0]}" >Estudiar menos tiempo.</b-form-radio>
          <b-form-radio  v-model="checked2[1]" value="b2" v-bind:class="{mal:checked2[1]}" >Acceso desde cualquier lugar con conexión a Internet.</b-form-radio>
          <b-form-radio  v-model="checked2[2]" value="c2" v-bind:class="{bien:checked2[2]}">La individualidad necesaria para el aprendizaje autónomo y la interacción necesaria para el aprendizaje colaborativo.</b-form-radio>
        </b-form-radio-group>
      </b-form-group>
      <b-form-group label="Las TIC’s" id="selecciono-tic">
        <b-form-radio-group v-model="form.tic" name="radio-validation3" id="tic" stacked required>
          <b-form-radio  v-model="checked3[0]" value="a3" v-bind:class="{mal:checked3[0]}" >Posibilitan ahorro de tiempo y dinero.</b-form-radio>
          <b-form-radio  v-model="checked3[1]" value="b3" v-bind:class="{mal:checked3[1]}" >Posibilitan acceso desde cualquier lugar con conexión a Internet.</b-form-radio>
          <b-form-radio  v-model="checked3[2]" value="c3" v-bind:class="{bien:checked3[2]}" >Posibilitan interactuar en nuevas experiencias comerciales, sociales, culturales y académicas.</b-form-radio>
        </b-form-radio-group>
      </b-form-group>
      <b-button   class="corregir" variant="primary" type="submit" @click="comprobar">
          Continuar
      </b-button>
    </b-form>
      <br>
    <div v-if="mensaje===true">
      <b-alert show variant="success">
          <h4 class="alert-heading">Gran trabajo!</h4>
          <p>
          Muy bien, Felicidades has completado correctamente el cuestionario.
          </p>
          <hr>
          <p class="mb-0">
            Personas como tú llegarán muy lejos, sigue así.
          </p>
        </b-alert>
    </div>
    <div v-if="mensaje===false">
      <p class="animated  bounceInRight">Intentalo de nuevo</p>
    </div>

    </div>
    <router-link to="/Despliegue">
      <a type="button" variant="primary" >
        <img  class="regresar" src="@/assets/Regresar.svg" alt="regresar a la Información">
      </a></router-link>

    <b-button class="seguir" variant="primary"  to="/final" :disabled="verificar">
      <img  src="@/assets/seguir.svg" alt="Terminar">
    </b-button>


  </div>
</template>
<script>
export default {
  name: "preguntas",
  data() {
    return{
      form:{
        cultura: [],
        education:[],
        tic:[],
      },
      checked1: [],
      checked2: [],
      checked3: [],
      mensaje: null,
      verificar:true,
      show: true
    }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))

      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.cultura= []
        this.form.education= []
        this.form.tic = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      comprobar() {
        if (
        this.checked1[0]=='a1' &&
        this.checked2[2]=='c2' &&
        this.checked3[2]=='c3')
        {
          this.mensaje = true;
          this.verificar= false;
          }
          else {
          this.mensaje = false;
          this.verificar= true;
        }

      }

    },
}
</script>
<style  scoped>

.seguir {
  width: 4.2%;
  background-color: #fff;
  border-color: #fff;
}
.SelMultiple{
  padding-top: 30px;
  padding-left: 300px;
  font-size:70%;
}
.bien{
  color: greenyellow;
}
.mal{
  color: crimson;
}
.corregir {
  background-color: #da651d;
  border-color: #403a34;
}

</style>
