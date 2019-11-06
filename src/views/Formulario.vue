<template>
  <div id="form">
    <b-form  @submit="onSubmit" @reset="onReset" v-if="show" >

      <b-form-group class="animated jello" id="ingreso-del-nombre" label="Escribe tu nombre aquí:" label-for="form.nombre">
        <b-form-input
          id="form.nombre"
          v-model="form.name"
          required
          placeholder="Tu nombre"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="ingreso-de-edad" :type="type" label="Escribe tu Edad:" label-for="form.edad">
        <b-form-input
          id="form.edad"
          type="number"
          min="5"
          pattern="^[5-100]+"
          v-model="form.edad"
          required
          placeholder="Tu Edad"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="ingreso-de-correo" label="Escribe tu Email:" label-for="form.correo">
        <b-form-input
          id="form.correo"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="ingrese-curso" label="Estas cursando:" label-for="form.curso">
        <b-form-select
          id="form.curso"
          v-model="form.curso"
          :options="cursos"
          required>
        <template v-slot:first>
          <option :value="null" disabled>-- Por favor seleccione un curso--</option>
        </template>
        </b-form-select>
      </b-form-group>

      <b-form-group id="ingrese-sexo" label="¿Tú eres?" required>
        <b-form-radio-group v-model="form.sexo" id="Sexo">
          <b-form-radio value="niño">Niño</b-form-radio>
          <b-form-radio value="niña">Niña</b-form-radio>
        </b-form-radio-group>
      </b-form-group>
      <b-button type="submit" variant="primary">Ingresar</b-button>
    </b-form>
    <!-- Continuar -->
      <a type="button" variant="primary" @click="$bvModal.show('Confirmar')">
        <img  class="seguir" src="@/assets/seguir.svg" alt="Continuar a Material de apoyo">
      </a>
    <b-modal id="Confirmar" hide-footer>
      <div class="d-block text-center">
        <h3>Completaste el primer registro!</h3>
      </div>
    <router-link to="/Descarga">Continuar</router-link>
    </b-modal>
    <!-- Reguresar -->
    <router-link to="/">
      <a type="button" variant="primary" >
        <img  class="regresar" src="@/assets/Regresar.svg" alt="regresar al Inicio">
      </a></router-link>
    <!-- Puede provar el funcionamiento del json para el envío de datos -->
    <!-- <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>
<script>
  export default {
    name:'Formulario',
    data() {
      return {
        form: {
          name: '',
          edad: '',
          email: '',
          curso: null,
          sexo: []
        },
        cursos: [ 'Técnica', 'Tecnología', 'Profesional', 'Posgrado'],
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
        this.form.email = ''
        this.form.name = ''
        this.form.edad = ''
        this.form.curso = null
        this.form.sexo = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
<style scoped>

.btn-primary{
  background-color: #da651d;
  border-color: #403a34;

}
#seguir {
  text-align: right;
}

form {
  text-align: center;
  padding: 60px 200px;
}

</style>
