interface GridBackgroundProps {
  className?: string;
  opacity?: number;
  size?: number;
}

export function GridBackground({
  className = '',
  opacity = 0.12,
  size = 40,
}: GridBackgroundProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(to right, #0022ff ${opacity * 100}%, transparent ${opacity * 100}%),
          linear-gradient(to bottom, #0022ff ${opacity * 100}%, transparent ${opacity * 100}%)
        `,
        backgroundSize: `${size}px ${size}px`,
        backgroundPosition: '0 0',
      }}
    />
  );
}

export function GridBackgroundSVG({
  className = '',
  opacity = 0.15,
  size = 40,
}: GridBackgroundProps) {
  const color = `rgba(0,34,255,${opacity})`;
  const svgStr = `<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}'><path d='M ${size} 0 L 0 0 0 ${size}' fill='none' stroke='${color}' stroke-width='1'/></svg>`;
  const encoded = encodeURIComponent(svgStr);

  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,${encoded}")`,
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  );
}
