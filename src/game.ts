import { YourMetaName } from '../metas/yourmetaname/yourmetaname'
import { SampleCube } from '../metas/samplecube/samplecube'
import { ModelTemplate } from '../metas/modeltemplate/modeltemplate'
import { PackTemplate } from '../metas/packtemplate/packtemplate'

const yourmetanameLandOwnerData = {
  host_data: `
  {
    "cube": {
      "position": {"x":10, "y":1, "z":10},
      "rotation": {"x":0, "y":0, "z":0},
      "scale": {"x":2, "y":2, "z":2}
    }
  }`
}

/// --- Set up your meta system to test ---
engine.addSystem(new YourMetaName(null, yourmetanameLandOwnerData))


const samplecubeLandOwnerData = {
  host_data: `
  {
    "cube": {
      "position": {"x":12, "y":2, "z":4},
      "rotation": {"x":0, "y":0, "z":0},
      "scale": {"x":4, "y":4, "z":4}
    }
  }`
}

/// --- Set up your meta system to test ---
engine.addSystem(new SampleCube(null, samplecubeLandOwnerData))


const modeltemplateLandOwnerData = {
  host_data: `
  {
    "meta": {
      "position": {"x":8,"y":0.6,"z":8},
      "rotation": {"x":0,"y":0,"z":0},
      "scale": {"x":1.6,"y":1.6,"z":1.6}
    }
  }`
}

/// --- Set up your meta system to test ---
engine.addSystem(new ModelTemplate(null, modeltemplateLandOwnerData))


const packtemplateLandOwnerData = {
  host_data: `
  {
    "chair1": {
      "type": "chair",
      "position": {"x":8,"y":0.6,"z":5},
      "rotation": {"x":0,"y":0,"z":0},
      "scale": {"x":1.6,"y":1.6,"z":1.6}
    },
    "chair2": {
      "type": "chair",
      "position": {"x":4,"y":0.6,"z":5},
      "rotation": {"x":0,"y":180,"z":0},
      "scale": {"x":1.6,"y":1.6,"z":1.6}
    },
    "table1": {
      "type": "table",
      "position": {"x":6,"y":0,"z":5},
      "rotation": {"x":0,"y":0,"z":0},
      "scale": {"x":1,"y":1,"z":2}
    },
    "vase1": {
      "type": "vase",
      "position": {"x":6,"y":1.5,"z":5},
      "rotation": {"x":0,"y":0,"z":0},
      "scale": {"x":0.006,"y":0.006,"z":0.006}
    }
  }
  `
}

/// --- Set up your meta system to test ---
engine.addSystem(new PackTemplate(null, packtemplateLandOwnerData))
