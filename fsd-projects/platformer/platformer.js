$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "black"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid


    // TODO 2 - Create Platforms
      createPlatform(650, 400, 200, 20, "purple");
      createPlatform(650, 575, 200, 20, "purple");

      createPlatform(300, 400, 200, 20, "orange");
      createPlatform(300, 575, 200, 20, "orange");

      createPlatform(1000, 400, 200, 20, "green");
      createPlatform(1000, 575, 200, 20, "green");

    // TODO 3 - Create Collectables
      createCollectable("botwplate", 725, 300);
      createCollectable("tempura", 385, 300);
      createCollectable("govcheese", 1075, 300);

      createCollectable("baja", 725, 500);
      createCollectable("cfh", 385, 500);
      createCollectable("ctrcandy", 1075, 500);

    // TODO 4 - Create Cannons
      createCannon("top", 630, 1250);
      createCannon("top", 980, 1250);
    
      createCannon("right", 400, 1750);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
