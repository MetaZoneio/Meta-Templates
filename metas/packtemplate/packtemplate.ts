
export class PackTemplate implements ISystem {
  META_ID = 0

  api = null
  host = null

  // Library of assets
  library = {
    'chair': {
      src: 'metas/packtemplate/models/chair.glb',
      model: null
    },
    'table': {
      src: 'metas/packtemplate/models/table.glb',
      model: null
    },
    'vase': {
      src: 'metas/packtemplate/models/vase.glb',
      model: null
    }
  }

  // List of loaded items as key value pairs
  items = {}

  /**
   * Initial scene setup, create all objects in the constructor.
   *
   * @param api          Used to call MetaZone API endpoints.
   * @param host_data    Very first
   */
  constructor(api, host_data) {
    // Save api
    this.api = api;


    // Note: your initial loading code goes here


    // Initial host data
    this.refreshHost(host_data)
  }

  /**
   * A Decentraland provided function where you should put your code that
   * repeats over and over.
   *
   * @param dt     Delta time since last update
   */
  update(dt: number) {
    // Note: your code that repeats goes here
  }

  /**
   * A MetaZone provided function that contains data customized by the
   * landowner on the MetaZone.io system. This gets called every minute when it
   * is deployed live. During testing its called once in the game.ts file.
   *
   * @param host_data    Data sent from the MetaZone backend to update your Meta
   */
  refreshHost(host: Object) {
    // Save host info
    this.host = host

    // Parse metadata
    if(this.host.host_data) {
      let host_data = JSON.parse(this.host.host_data)

      //
      const keys = Object.keys(host_data)
      for(let i=0; i<keys.length; i++) {
        let metaItem = host_data[keys[i]];

        // Retrieve existing item
        if(this.items.hasOwnProperty(keys[i])) {
          log('Update Asset: ',metaItem)

          // Retrieve existing entity
          let itemEntity = this.items[keys[i]]
          // Position
          itemEntity.getComponent(Transform).position.set(metaItem.position.x,metaItem.position.y,metaItem.position.z)
          // Rotation
          itemEntity.getComponent(Transform).rotation.setEuler(metaItem.rotation.x,metaItem.rotation.y,metaItem.rotation.z)
          // Scale
          itemEntity.getComponent(Transform).scale.set(metaItem.scale.x,metaItem.scale.y,metaItem.scale.z)
        }
        // Create new item
        else if(this.library.hasOwnProperty(metaItem.type)) {
          log('Create Asset: ',metaItem)

          // No 3d model loaded yet
          if(!this.library[metaItem.type].model) {
            // Load the 3d model to asset library
            this.library[metaItem.type].model = new GLTFShape(this.library[metaItem.type].src)
          }

          // Create item
          let itemEntity = new Entity()
          itemEntity.addComponent(new Transform({
            position: new Vector3(metaItem.position.x,metaItem.position.y,metaItem.position.z),
            rotation: Quaternion.Euler(metaItem.rotation.x,metaItem.rotation.y,metaItem.rotation.z),
            scale: new Vector3(metaItem.scale.x,metaItem.scale.y,metaItem.scale.z)
          }))
          itemEntity.addComponent(this.library[metaItem.type].model)
          engine.addEntity(itemEntity)

          // Store as key value pair
          this.items[keys[i]] = itemEntity
        }
      }

    }

  }

}
