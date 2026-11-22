"use client";

import React, { useEffect, useRef } from "react";

interface DitherShaderProps {
  className?: string;
  children?: React.ReactNode;
}

export const DitherShader: React.FC<DitherShaderProps> = ({
  className = "",
  children,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { antialias: false, alpha: false });
    if (!gl) return;

    // Vertex Shader
    const vsSource = `
      attribute vec2 position;
      varying vec2 vUv;
      void main() {
        vUv = position * 0.5 + 0.5;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Fragment Shader with 8x8 Bayer Matrix and animated electric blue wave field
    const fsSource = `
      precision highp float;
      varying vec2 vUv;
      uniform vec2 u_resolution;
      uniform float u_time;

      // 8x8 Bayer Dither Matrix lookup
      float bayer8(vec2 uv) {
        int x = int(mod(uv.x, 8.0));
        int y = int(mod(uv.y, 8.0));
        int index = x + y * 8;

        // Standard 8x8 Bayer Matrix normalized values
        if (index == 0) return 0.0 / 64.0;
        if (index == 1) return 32.0 / 64.0;
        if (index == 2) return 8.0 / 64.0;
        if (index == 3) return 40.0 / 64.0;
        if (index == 4) return 2.0 / 64.0;
        if (index == 5) return 34.0 / 64.0;
        if (index == 6) return 10.0 / 64.0;
        if (index == 7) return 42.0 / 64.0;

        if (index == 8) return 48.0 / 64.0;
        if (index == 9) return 16.0 / 64.0;
        if (index == 10) return 56.0 / 64.0;
        if (index == 11) return 24.0 / 64.0;
        if (index == 12) return 50.0 / 64.0;
        if (index == 13) return 18.0 / 64.0;
        if (index == 14) return 58.0 / 64.0;
        if (index == 15) return 26.0 / 64.0;

        if (index == 16) return 12.0 / 64.0;
        if (index == 17) return 44.0 / 64.0;
        if (index == 18) return 4.0 / 64.0;
        if (index == 19) return 36.0 / 64.0;
        if (index == 20) return 14.0 / 64.0;
        if (index == 21) return 46.0 / 64.0;
        if (index == 22) return 6.0 / 64.0;
        if (index == 23) return 38.0 / 64.0;

        if (index == 24) return 60.0 / 64.0;
        if (index == 25) return 28.0 / 64.0;
        if (index == 26) return 52.0 / 64.0;
        if (index == 27) return 20.0 / 64.0;
        if (index == 28) return 62.0 / 64.0;
        if (index == 29) return 30.0 / 64.0;
        if (index == 30) return 54.0 / 64.0;
        if (index == 31) return 22.0 / 64.0;

        if (index == 32) return 3.0 / 64.0;
        if (index == 33) return 35.0 / 64.0;
        if (index == 34) return 11.0 / 64.0;
        if (index == 35) return 43.0 / 64.0;
        if (index == 36) return 1.0 / 64.0;
        if (index == 37) return 33.0 / 64.0;
        if (index == 38) return 9.0 / 64.0;
        if (index == 39) return 41.0 / 64.0;

        if (index == 40) return 51.0 / 64.0;
        if (index == 41) return 19.0 / 64.0;
        if (index == 42) return 59.0 / 64.0;
        if (index == 43) return 27.0 / 64.0;
        if (index == 44) return 49.0 / 64.0;
        if (index == 45) return 17.0 / 64.0;
        if (index == 46) return 57.0 / 64.0;
        if (index == 47) return 25.0 / 64.0;

        if (index == 48) return 15.0 / 64.0;
        if (index == 49) return 47.0 / 64.0;
        if (index == 50) return 7.0 / 64.0;
        if (index == 51) return 39.0 / 64.0;
        if (index == 52) return 13.0 / 64.0;
        if (index == 53) return 45.0 / 64.0;
        if (index == 54) return 5.0 / 64.0;
        if (index == 55) return 37.0 / 64.0;

        if (index == 56) return 63.0 / 64.0;
        if (index == 57) return 31.0 / 64.0;
        if (index == 58) return 55.0 / 64.0;
        if (index == 59) return 23.0 / 64.0;
        if (index == 60) return 61.0 / 64.0;
        if (index == 61) return 29.0 / 64.0;
        if (index == 62) return 53.0 / 64.0;
        return 21.0 / 64.0;
      }

      void main() {
        // Pixelate for crisp dither effect (pixel size = 3.0)
        float pixelSize = 3.0;
        vec2 fragCoord = floor(gl_FragCoord.xy / pixelSize);

        vec2 uv = (fragCoord * pixelSize) / u_resolution.xy;
        vec2 centeredUv = (uv - 0.5) * vec2(u_resolution.x / u_resolution.y, 1.0);

        // Animated organic wave calculation
        float dist = length(centeredUv);
        float wave1 = sin(dist * 6.0 - u_time * 0.8) * 0.25;
        float wave2 = cos(centeredUv.x * 5.0 + u_time * 0.5) * 0.2;
        float wave3 = sin(centeredUv.y * 7.0 - u_time * 0.6) * 0.15;
        
        float lum = 0.5 + wave1 + wave2 + wave3;
        lum = clamp(lum, 0.05, 0.95);

        // Bayer threshold
        float threshold = bayer8(fragCoord);

        // Aceternity Electric Blue Palette:
        // Deep Electric Blue to Vibrant Cyan/Light Cobalt
        vec3 darkBlue = vec3(0.08, 0.24, 0.95);    // #143DF2
        vec3 brightBlue = vec3(0.24, 0.52, 1.0);   // #3D85FF
        vec3 lightBlue = vec3(0.68, 0.85, 1.0);    // #AED9FF
        vec3 deepNavy = vec3(0.04, 0.12, 0.68);     // #0A1FAE

        vec3 color;
        if (lum > threshold) {
          color = mix(brightBlue, lightBlue, smoothstep(0.4, 0.9, lum));
        } else {
          color = mix(deepNavy, darkBlue, smoothstep(0.1, 0.6, lum));
        }

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = createShader(gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Quad geometry
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const positionLocation = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
    const timeLocation = gl.getUniformLocation(program, "u_time");

    let animationFrameId: number;
    let startTime = performance.now();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
    };

    resize();
    window.addEventListener("resize", resize);

    const render = (time: number) => {
      const elapsed = (time - startTime) * 0.001;
      gl.uniform1f(timeLocation, elapsed);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buffer);
    };
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background Dither Shader Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none block"
      />

      {/* Content Placed Over Dither Shader */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};

