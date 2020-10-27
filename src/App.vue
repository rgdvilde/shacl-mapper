<template>
  <div id="app">

    <div class="container">
      <h1>Shacl-Mapper</h1>
      <form>
        <div class="form-group">
          <label>Shapes Graph</label>
          <div class="input-group">
            <input v-model="shapeFileUri" class="form-control"/>
            <div class="input-group-append">
              <button class="btn btn-primary" v-on:click.prevent="loadShapes">Load</button>
            </div>
          </div>
          <div class="input-group">
            <input v-model="url" class="form-control"/>
            <div class="input-group-append">
              <button class="btn btn-primary" v-on:click.prevent="loadEndpoint">Load</button>
            </div>
          </div>
        </div>
      </form>
      <shacl-mapper :shapesGraphText="shapesText"
      :options="options"
      :endpointData="endpointdata"
        />
    </div>
</div>
</template>

<script>
import axios from 'axios'
import * as $rdf from 'rdflib'
import ShaclMapper from './ShaclMapper'

export default {
  data() {
    return {
      shapeFileUri: document.location.origin + '/ngsi.ttl',
      targetClass: '',
      shapesText: '',
      dataText: '',
      shapesGraph: $rdf.graph(),
      targetShapes: [],
      options: {},
      endpointdata: {},
      url: 'https://data.stad.gent/api/records/1.0/search/?dataset=donkey-republic-deelfietsen-stations-locaties&q=',
    }
  },
  mounted() {
    this.loadShapes()
    this.loadEndpoint()
  },
  methods: {
    onLoad(shapes) {
      this.targetShapes = shapes
    },
    loadShapes() {
      this.shapesGraph = $rdf.graph();
      axios.get(this.shapeFileUri).then(response => {
        this.shapesText = response.data
      }).catch(e => {
        alert('failed to load ' + this.shapeFileUri + '\n' + e)
      })
    },
    loadEndpoint() {
      axios.get(this.url).then(response => {
        this.endpointdata = response.data
      }).catch(e => {
        alert('failed to load ' + this.url + '\n' + e)
      })
    }
  },
  components: {
    ShaclMapper
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
