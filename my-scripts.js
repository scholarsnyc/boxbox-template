var canvasElem = document.getElementById("game");
var world = boxbox.createWorld(canvasElem);

var ball = world.createEntity({
  name: "ball",
  shape: "circle",
  radius: 2,
  color: 'red',
  borderColor: 'pink',
  borderWidth: 15,
  density: 5,
  restitution: .3,
  x: 10,
  y: 6,
  onKeyDown: function(e) {
    console.log(e.keyCode);
    if (e.keyCode === 38) {
      this.applyImpulse(200, 0);
    } else if (e.keyCode === 39) {
      this.applyImpulse(200, 90);
    } else if (e.keyCode === 37) {
      this.applyImpulse(200, 270);
    }
  }
});

var ground = world.createEntity({
  name: "ground",
  shape: "square",
  type: "static",
  color: "blue",
  width: 20,
  height: 1.5,
  y: 13
});



function createThreeBlocks(x) {
  
  var block = {
    name: "block",
    shape: "square",
    color: "brown",
    x: x,
    density: 1000,
    width: 1,
    height: 1,
  };
  
  world.createEntity(block, {
    y: 2,
  });

  world.createEntity(block, {
    y: 7,
  });

  world.createEntity(block, {
    y: 10,
  });
}

createThreeBlocks(5);
createThreeBlocks(10);
createThreeBlocks(15);