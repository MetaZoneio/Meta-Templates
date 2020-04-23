
export class ModelTemplate implements ISystem {
  META_ID = 0 // Change to your MetaZone meta number identifier

  api = null
  host = null

  /// --- Lets make a 3D model ---
  modelEntity = null

  /**
   * Initial scene setup, create all objects in the constructor.
   *
   * @param api          Used to call MetaZone API endpoints.
   * @param host_data    Very first
   */
  constructor(api, host_data) {
    // Save api
    this.api = api;



    ///////// Your static scene assets ///////////
    // Initialize all scene entities here

    /// --- Lets spawn a 3d model ---
    this.modelEntity = new Entity()
    this.modelEntity.addComponent(new GLTFShape('metas/modeltemplate/models/model.glb'))
    this.modelEntity.addComponent(new Transform({
      position: new Vector3(0, 2, 0)
    }))
    engine.addEntity(this.modelEntity)

    ///////// Your static scene assets ///////////



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
  refreshHost(host_data) {
    // Save host info
    this.host = host_data

    // Parse metadata
    if(this.host.metadata) {
      let metadata = JSON.parse(this.host.metadata)

      ///////// Your landowner adjustable content ///////////
      // You decide which of your creation's entities the landowner can adjust.

      /// --- Lets adjust our 3d model ---
      this.modelEntity.getComponent(Transform).position.set(
        metadata.meta.position.x,
        metadata.meta.position.y,
        metadata.meta.position.z
      )
      this.modelEntity.getComponent(Transform).scale.set(
        metadata.meta.scale.x,
        metadata.meta.scale.y,
        metadata.meta.scale.z
      )
      this.modelEntity.getComponent(Transform).rotation.setEuler(
        metadata.meta.rotation.x,
        metadata.meta.rotation.y,
        metadata.meta.rotation.z
      )

      ///////// Your landowner adjustable content ///////////
    }
  }

}
