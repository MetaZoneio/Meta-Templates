import { YourMetaName } from '../metas/yourmetaname/yourmetaname'
import { SampleCube } from '../metas/samplecube/samplecube'
import { ModelTemplate } from '../metas/modeltemplate/modeltemplate'
import { PackTemplate } from '../metas/packtemplate/packtemplate'

const yourmetanameLandOwnerData = {
  metadata: `
  {
    "cube": {
      "position": {"x":10, "y":1, "z":10},
      "scale": {"x":2, "y":2, "z":2},
      "rotation": {"x":0, "y":0, "z":0}
    }
  }`
}

/// --- Set up your meta system to test ---
engine.addSystem(new YourMetaName(null, yourmetanameLandOwnerData))


const samplecubeLandOwnerData = {
  metadata: `
  {
    "cube": {
      "position": {"x":12, "y":2, "z":4},
      "scale": {"x":4, "y":4, "z":4},
      "rotation": {"x":0, "y":0, "z":0}
    }
  }`
}

/// --- Set up your meta system to test ---
engine.addSystem(new SampleCube(null, samplecubeLandOwnerData))


const modeltemplateLandOwnerData = {
  metadata: `
  {
    "meta": {
      "position": {"x":8,"y":0.6,"z":8},
      "scale": {"x":1.6,"y":1.6,"z":1.6},
      "rotation": {"x":0,"y":0,"z":0}
    }
  }`
}

/// --- Set up your meta system to test ---
engine.addSystem(new ModelTemplate(null, modeltemplateLandOwnerData))


const packtemplateLandOwnerData = {
  metadata: `
  {
    "chair1": {
      "type": "chair",
      "position": {"x":8,"y":0.6,"z":5},
      "scale": {"x":1.6,"y":1.6,"z":1.6},
      "rotation": {"x":0,"y":0,"z":0}
    },
    "chair2": {
      "type": "chair",
      "position": {"x":4,"y":0.6,"z":5},
      "scale": {"x":1.6,"y":1.6,"z":1.6},
      "rotation": {"x":0,"y":180,"z":0}
    },
    "table1": {
      "type": "table",
      "position": {"x":6,"y":0,"z":5},
      "scale": {"x":1,"y":1,"z":2},
      "rotation": {"x":0,"y":0,"z":0}
    },
    "vase1": {
      "type": "vase",
      "position": {"x":6,"y":1.5,"z":5},
      "scale": {"x":0.006,"y":0.006,"z":0.006},
      "rotation": {"x":0,"y":0,"z":0}
    }
  }
  `
}

/// --- Set up your meta system to test ---
engine.addSystem(new PackTemplate(null, packtemplateLandOwnerData))
