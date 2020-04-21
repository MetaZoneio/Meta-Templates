import { YourMetaName } from '../metas/yourmetaname/yourmetaname'
import { SampleCube } from '../metas/samplecube/samplecube'

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
      "position": {"x":4, "y":2, "z":4},
      "scale": {"x":4, "y":4, "z":4},
      "rotation": {"x":0, "y":0, "z":0}
    }
  }`
}

/// --- Set up your meta system to test ---
engine.addSystem(new SampleCube(null, samplecubeLandOwnerData))
