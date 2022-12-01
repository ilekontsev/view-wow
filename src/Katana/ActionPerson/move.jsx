import { useEffect } from "react";

function Move({ preRender, createIcon, speed }) {
  let keys = {};
  let dt = 0;
  let currentFrame = 0;
  let lastFrame = currentFrame;
  let speedObject = speed || 0.6;
  let rotate = 0;

  const Vec2 = function (x, y) {
    this.x = x;
    this.y = y;

    this.add = function (other) {
      this.x += other.x;
      if (this.x < 0) {
        this.x = 0;
      } else if (this.x > window.innerWidth) {
        this.x = window.innerWidth;
      } else {
        this.x += other.x;
      }

      if (this.y < 0) {
        this.y = 0;
      } else if (this.y > window.innerHeight) {
        this.y = window.innerHeight;
      } else {
        this.y += other.y;
      }
      return this;
    };
    this.multScalar = function (scalar) {
      this.x *= +scalar;

      this.y *= +scalar;

      return this;
    };
  };

  const rect = {
    fillColor: "#f12",
    position: new Vec2(0, 0),
    velocity: new Vec2(0, 0),
    move: function (dt) {
      this.position.add(this.velocity.multScalar(dt));
    },
    stop: function () {
      this.velocity.x = 0;
      this.velocity.y = 0;
    },
    render: function () {
      createIcon({ x: this.position.x, y: this.position.y, rotate });
    },
  };

  useEffect(() => {
    window.onkeydown = function (event) {
      keys[event.keyCode] = true;
    };

    window.onkeyup = function (event) {
      keys[event.keyCode] = false;
    };

    window.onmousemove = function (event) {
    };

    requestAnimationFrame(renderScene);
  });

  const renderScene = () => {
    currentFrame = new Date();
    dt = currentFrame - lastFrame; 
    lastFrame = currentFrame;
    rect.stop();
    if (keys[37] || keys[65]) {
      rect.velocity.x = -speedObject;
    }
    if (keys[39] || keys[68]) {
      rect.velocity.x = speedObject;
    }
    if (keys[38] || keys[87]) {
      rect.velocity.y = -speedObject;
    }
    if (keys[40] || keys[83]) {
      rect.velocity.y = speedObject;
    }
    rect.move(dt);
    preRender(rect);
    requestAnimationFrame(renderScene);
  };
}

export default Move;
