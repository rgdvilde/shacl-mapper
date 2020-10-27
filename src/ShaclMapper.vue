  <template> 
    <div id="ShaclMapper">
    <div class="container">
      <form>
        <div class="form-group">
          <label>Target</label>
          <select v-model="targetClass" class="form-control" @input="test">
            <option v-for="uri in targetShapes" :value="uri">{{ uri }}</option>
          </select>
        </div>
      </form>
    <div :class="mergedOptions.styles.field">
    <label for="cars" :class="mergedOptions.styles.label">Filetype</label>
    <select id="filetypelist" name="filetypelist" form="filetyplist" v-model="filetype" @input="onUpdate">
      <option value="json">Json</option>
    </select>
    </div>
    <div :class="mergedOptions.styles.field">
      <label :class="mergedOptions.styles.label">
        Iterator
      </label>
      <div :class="mergedOptions.styles.inputColumn">
        <input :class="mergedOptions.styles.input" v-model="iteratorText" @input="onUpdate"/>
      </div>
    </div>
    <div :class="mergedOptions.styles.field">
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="toggleEndpoint">
        <label class="form-check-label" for="exampleCheck1">Toggle Endpoint</label>
      </div>
    </div>
      <hr>
      <div class="row">
        <div class="col-sm" v-if="toggleEndpoint">
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
                      :targetShapes="targetShapes"
                      :options="options"
                      :endpointData="endpointdata"
                      :iteratorText="iteratorText"
                      :filetype="filetype"
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
import defaultOptions from './lib/options'

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
      mergedOptions: defaultOptions,
      targetClass: '',
      dataText: '',
      iteratorText: '$',
      filetype: 'json',      
      shapesGraph: $rdf.graph(),
      targetShapes: [],
      endpointdata: {},
      url: 'https://data.stad.gent/api/records/1.0/search/?dataset=donkey-republic-deelfietsen-stations-locaties&q=',
      toggleEndpoint: true
    }
  },
  mounted() {
  },
  methods: {
    validate() {
      this.$refs.shaclForm.validate()
    },
    onUpdate(graph) {
      const serializer = $rdf.Serializer(graph)
      this.dataText = serializer.statementsToN3(graph.statements)

    },
    onLoad(shapes) {
      this.targetShapes = shapes
    },
    test() {
      console.log(this.targetClass)
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