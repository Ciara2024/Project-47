class Lnk {
  constructor(bodyA, bodyB) {
    var lastlink = bodyA.body.Bodies.length - 2;
    this.link = Constraint.create({
      bodyA: bodyA.body.Bodies[lastlink],
      pointA: { x: 0, y: 0 },
      bodyB: bodyB.body,
      pointB: { x: 0, y: 0 },
      length: 10,
      stiffness: 0.8
    });

    World.add(world, this.link);
  }
  dettach() {
    World.remove(world, this.link);
  }
}
