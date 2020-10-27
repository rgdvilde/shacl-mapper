  <template> 
    <div id="ShaclMapper">
    <div class="container">
      <form>
        <div class="form-group">
          <label>Target</label>
          <select v-model="targetClass" class="form-control">
            <option v-for="uri in targetShapes" :value="uri">{{ uri }}</option>
          </select>
        </div>
      </form>> 

      <hr>
      <div class="row">
        <div class="col-sm">
          <vue-json-pretty
            :path="'res'"
            :data="endpointData">
          </vue-json-pretty>
        </div>
        <div class="col-sm">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" id="home-tab" data-toggle="tab" href="#form" role="tab"
             aria-controls="home" aria-selected="true">Form</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="profile-tab" data-toggle="tab" href="#shapes" role="tab"
             aria-controls="profile" aria-selected="false">Shapes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="contact-tab" data-toggle="tab" href="#data" role="tab"
             aria-controls="contact" aria-selected="false">Data</a>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">

        <div class="tab-pane show active" id="form" role="tabpanel" aria-labelledby="form-tab">
          <shacl-form :shapesGraphText="shapesGraphText"
                      :targetClass="targetClass"
                      :options="options"
                      :endpointData="endpointdata"
                      ref="shaclForm"
                      @update="onUpdate"
                      @load="onLoad"></shacl-form>
          <button @click.prevent="validate" class="btn btn-warning">
            Validate
          </button>
        </div>

        <div class="tab-pane" id="shapes" role="tabpanel" aria-labelledby="shapes-tab">
          <div class="card text-left">
            <div class="card-body">
              <pre v-text="shapesGraphText"></pre>
            </div>
          </div>
        </div>

        <div class="tab-pane" id="data" role="tabpanel" aria-labelledby="data-tab">
          <div class="card text-left">
            <div class="card-body">
              <pre v-text="dataText"></pre>
            </div>
          </div>
        </div>

      </div>
      </div>
      </div>
    </div>
    </div>
    </template>


<script>
import * as $rdf from 'rdflib'
import ShaclForm from './ShaclForm';
import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'

export default {
  name: 'ShaclMapper',
  props: {
    shapesGraphText: String,
    options: Object,
    endpointData: Object
  },
  data() {
    return {
      shapeFileUri: document.location.origin + '/ngsi.ttl',
      targetClass: '',
      dataText: '',
      shapesGraph: $rdf.graph(),
      targetShapes: [],
      endpointdata: {},
      url: 'https://data.stad.gent/api/records/1.0/search/?dataset=donkey-republic-deelfietsen-stations-locaties&q=',
    }
  },
  mounted() {
  },
  methods: {
    validate() {
      console.log(this.$refs)
      this.$refs.shaclForm.validate()
    },
    onUpdate(graph) {
      const serializer = $rdf.Serializer(graph)
      this.dataText = serializer.statementsToN3(graph.statements)

    },
    onLoad(shapes) {
      this.targetShapes = shapes
    }
  },
  components: {
    ShaclForm,
    VueJsonPretty
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>