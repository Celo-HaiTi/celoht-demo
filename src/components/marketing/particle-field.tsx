"use client";

import { useEffect, useRef } from "react";

/**
 * Signature hero element: a field of nodes representing the Agent
 * Network / Celo blockchain. Nodes drift slowly and connect when close,
 * occasionally tracing a rising path across the canvas, a quiet nod to
 * the ascending-bar arrow in the CeloHT mark, rendered as behavior
 * rather than a literal shape. Respects prefers-reduced-motion by
 * freezing on the first frame.
 */
export function ParticleField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let raf = 0;

    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      rising: boolean;
    }

    const NODE_COUNT = 46;
    const nodes: Node[] = [];

    function resize() {
      if (!canvas) return;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      ctx!.scale(devicePixelRatio, devicePixelRatio);
    }

    function seed() {
      nodes.length = 0;
      for (let i = 0; i < NODE_COUNT; i++) {
        const rising = Math.random() < 0.35;
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.15,
          vy: rising ? -0.12 - Math.random() * 0.1 : (Math.random() - 0.5) * 0.15,
          rising,
        });
      }
    }

    function step() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0) n.x = width;
        if (n.x > width) n.x = 0;
        if (n.y < -10) n.y = height + 10;
        if (n.y > height + 10) n.y = -10;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]!;
          const b = nodes[j]!;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const opacity = (1 - dist / 120) * (a.rising && b.rising ? 0.45 : 0.15);
            ctx.strokeStyle = a.rising && b.rising ? `rgba(217,148,31,${opacity})` : `rgba(53,208,127,${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.fillStyle = n.rising ? "rgba(217,148,31,0.85)" : "rgba(53,208,127,0.6)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.rising ? 2 : 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduceMotion) raf = requestAnimationFrame(step);
    }

    resize();
    seed();
    step();

    const onResize = () => {
      resize();
      seed();
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
