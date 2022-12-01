import { useEffect, useState } from "react";
import "./Home.scss";
import Knight from "../../Katana/Classes/Knight";

function Home() {
  const [size, setSize] = useState(0);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  function animate() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(100, 100, size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.stroke();
  }
  window.requestAnimationFrame(animate);

  return (
    <div className="gameField">
      <canvas id="canvas"></canvas>
      <Knight />
    </div>
  );
}

export default Home;
