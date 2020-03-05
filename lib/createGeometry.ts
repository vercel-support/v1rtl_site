import * as THREE from 'three'

export function createGeometry() {
  var geometry = new THREE.BoxBufferGeometry(1, 1, 1, 2, 2, 2)

  // create an empty array to  hold targets for the attribute we want to morph
  // morphing positions and normals is supported
  geometry.morphAttributes.position = []

  // the original positions of the cube's vertices
  var positions = geometry.attributes.position.array

  // for the first morph target we'll move the cube's vertices onto the surface of a sphere
  var spherePositions = []

  // for the second morph target, we'll twist the cubes vertices
  var twistPositions = []
  var direction = new THREE.Vector3(1, 0, 0).normalize()
  var vertex = new THREE.Vector3()

  for (var i = 0; i < positions.length; i += 3) {
    var x = positions[i]
    var y = positions[i + 1]
    var z = positions[i + 2]

    spherePositions.push(
      x * Math.sqrt(1 - (y * y) / 2 - (z * z) / 2 + (y * y * z * z) / 3),
      y * Math.sqrt(1 - (z * z) / 2 - (x * x) / 2 + (z * z * x * x) / 3),
      z * Math.sqrt(1 - (x * x) / 2 - (y * y) / 2 + (x * x * y * y) / 3)
    )

    // stretch along the x-axis so we can see the twist better
    vertex.set(x * 2, y, z)

    vertex.applyAxisAngle(direction, (Math.PI * x) / 2).toArray(twistPositions, twistPositions.length)
  }

  // add the spherical positions as the first morph target
  geometry.morphAttributes.position[0] = new THREE.Float32BufferAttribute(spherePositions, 3)

  // add the twisted positions as the second morph target
  geometry.morphAttributes.position[1] = new THREE.Float32BufferAttribute(twistPositions, 3)

  return geometry
}
