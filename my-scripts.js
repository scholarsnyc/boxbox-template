var canvasElem = document.getElementById("game");
var world = boxbox.createWorld(canvasElem);

world.createEntity({
  name: "ball",
  shape: "circle",
  radius: 1,
  density: 4,
  x: 2,
  onKeyDown: function(e) {
    this.applyImpulse(200, 60);
  }
});