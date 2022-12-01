import { useEffect, useState } from "react";
import Move from "../ActionPerson/move";

function Knight() {
  const [ctx, setCtx] = useState();

  useEffect(() => {
    createIcon();
  }, []);

  const createIcon = (position) => {
    const canvas = document.getElementById("knight");
    const ctxCanvas = canvas.getContext("2d");
    setCtx(ctxCanvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctxCanvas.clearRect(0, 0, 50, 50);
    ctxCanvas.translate(position?.x || 0,  position?.y || 0);
    ctxCanvas.rotate(position?.rotate || 0);
    ctxCanvas.translate(-position?.x || 0,  -position?.y || 0);
    ctxCanvas.beginPath();
    ctxCanvas.arc(position?.x || 0, position?.y || 0, 10, 0, Math.PI * 2);
    ctxCanvas.lineTo(position?.x || 0, position?.y || 0);
    ctxCanvas.closePath();
    ctxCanvas.stroke();
    setCtx(ctxCanvas);
  };

  const preRender = (callback) => {
    callback.render();
  };

  return (
    <div>
      {ctx && <Move preRender={preRender} createIcon={createIcon} />}
      <canvas id="knight"></canvas>
    </div>
  );
}

export default Knight;
