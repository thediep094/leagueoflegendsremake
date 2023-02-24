import React, { useEffect, useRef, useState } from "react";
function Button() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  useEffect(() => {
    if (!isHovering) {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          return;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Đặt màu cho đường vẽ
        ctx.strokeStyle = "#fff";

        // Vẽ đường viền
        ctx.beginPath();
        ctx.moveTo(15, 0);
        ctx.lineTo(195, 0);
        ctx.lineTo(195, 51);
        ctx.lineTo(180, 66);
        ctx.lineTo(0, 66);
        ctx.lineTo(0, 15);
        ctx.closePath();
        ctx.stroke();
      }
    } else {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          return;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Đặt màu cho đường vẽ
        ctx.strokeStyle = "#fff";
        // Vẽ đường viền
        ctx.beginPath();
        ctx.moveTo(15, 0);
        ctx.lineTo(195, 0);

        ctx.lineTo(195, 66);

        ctx.lineTo(180, 66);
        ctx.lineTo(0, 66);
        ctx.lineTo(0, 0);
        ctx.closePath();
        ctx.stroke();
      }
    }
  }, [isHovering]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  console.log(isHovering);
  return (
    <div
      className="button"
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <canvas
        ref={canvasRef}
        className="canvas-button"
        width={195}
        height={66}
        style={{
          transition: `all .3s ease-in-out`,
        }}
      />
    </div>
  );
}

export default Button;
