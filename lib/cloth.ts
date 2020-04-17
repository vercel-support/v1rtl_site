import { Vector3 } from 'three'
const { cos, sin } = Math

const DAMPING = 0.03
const DRAG = 1 - DAMPING
const restDistance = 25
const wind = true
const TIMESTEP = 18 / 1000
const TIMESTEP_SQ = TIMESTEP * TIMESTEP

type Plane = (u: number, v: number) => Vector3

const plane: (width: number, height: number) => Plane = (width, height) => (u, v) =>
  new Vector3((u - 0.5) * width, (v + 0.5) * height, 0)

class Particle {
  tmp: Vector3
  tmp2: Vector3
  position: Vector3
  previous: Vector3
  original: Vector3
  a: Vector3
  mass: number
  invMass: number
  drag: number

  constructor(x: number, y: number, z: number, mass: number, drag: number, clothFunction: Plane) {
    this.position = clothFunction(x, y)
    this.previous = clothFunction(x, y)
    this.original = clothFunction(x, y)
    this.a = new Vector3(0, 0, 0)
    this.mass = mass
    this.invMass = 1 / mass
    this.drag = drag
    this.tmp = new Vector3()
    this.tmp2 = new Vector3()
  }

  addForce(force: Vector3) {
    this.tmp2.copy(force).multiplyScalar(this.invMass)
    this.a.add(this.tmp2)
  }

  integrate(timesq: number) {
    const newPos = this.tmp.subVectors(this.position, this.previous)
    newPos.multiplyScalar(this.drag).add(this.position)
    newPos.add(this.a.multiplyScalar(timesq))

    this.tmp = this.previous
    this.previous = this.position
    this.position = newPos

    this.a.set(0, 0, 0)
  }
}

export class Cloth {
  w: number
  h: number
  lastTime: any
  pins: number[]
  tmpForce: Vector3
  diff: Vector3
  clothFunction: Plane
  windForce: Vector3
  mass: number
  gravity: Vector3
  particles: Particle[]
  constrains: any[]

  constructor(w = 10, h = 10) {
    this.w = w
    this.h = h
    this.lastTime = null
    this.pins = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    this.tmpForce = new Vector3()
    this.diff = new Vector3()
    this.clothFunction = plane(restDistance * this.w, restDistance * this.h)
    this.windForce = new Vector3(0, 0, 0)

    const GRAVITY = 981 * 1.4
    this.mass = 0.1
    this.gravity = new Vector3(0, -GRAVITY, 0).multiplyScalar(this.mass)

    this.createParticles()
    this.createConstraints()
  }

  index = (u: number, v: number) => u + v * (this.w + 1)

  createParticles() {
    this.particles = []

    for (let v = 0; v <= this.h; v++) {
      for (let u = 0; u <= this.w; u++) {
        this.particles.push(new Particle(u / this.w, v / this.h, 0, this.mass, DRAG, this.clothFunction))
      }
    }
  }

  createConstraints() {
    this.constrains = []

    let u: number, v: number

    for (v = 0; v < this.h; v++) {
      for (u = 0; u < this.w; u++) {
        this.constrains.push([this.particles[this.index(u, v)], this.particles[this.index(u, v + 1)], restDistance])

        this.constrains.push([this.particles[this.index(u, v)], this.particles[this.index(u + 1, v)], restDistance])
      }
    }

    for (u = this.w, v = 0; v < this.h; v++) {
      this.constrains.push([this.particles[this.index(u, v)], this.particles[this.index(u, v + 1)], restDistance])
    }

    for (v = this.h, u = 0; u < this.w; u++) {
      this.constrains.push([this.particles[this.index(u, v)], this.particles[this.index(u + 1, v)], restDistance])
    }
  }

  simulate(time: number, clothGeometry) {
    if (!this.lastTime) {
      this.lastTime = time
      return
    }

    this.windForce
      .set(sin(time / 2000), cos(time / 3000), sin(time / 1000))
      .normalize()
      .multiplyScalar(cos(time / 7000) * 20 + 40)

    this.simulateAerodynamics(clothGeometry)
    this.satisfyConstrains()
    this.pinConstrains()
  }

  simulateAerodynamics(clothGeometry) {
    if (wind) {
      let face
      let normal: Vector3
      const faces = clothGeometry.faces

      for (let i = 0; i < faces.length; i++) {
        face = faces[i]
        normal = face.normal

        this.tmpForce
          .copy(normal)
          .normalize()
          .multiplyScalar(normal.dot(this.windForce))

        this.particles[face.a].addForce(this.tmpForce)
        this.particles[face.b].addForce(this.tmpForce)
        this.particles[face.c].addForce(this.tmpForce)
      }
    }

    this.particles.map((particle) => {
      particle.addForce(this.gravity)
      particle.integrate(TIMESTEP_SQ)
    })
  }

  satisfyConstrains() {
    for (const constrain of this.constrains) {
      const p1 = constrain[0]
      const p2 = constrain[1]
      const distance = constrain[2]

      this.diff.subVectors(p2.position, p1.position)

      const currentDist = this.diff.length()
      if (currentDist === 0) return

      const correction = this.diff.multiplyScalar(1 - distance / currentDist)
      const correctionHalf = correction.multiplyScalar(0.5)

      p1.position.add(correctionHalf)
      p2.position.sub(correctionHalf)
    }
  }
  pinConstrains() {
    for (const xy of this.pins) {
      const p = this.particles[xy]
      p.position.copy(p.original)
      p.previous.copy(p.original)
    }
  }
}
