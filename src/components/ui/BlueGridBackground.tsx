import React from "react";

interface BlueGridBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  overlayClassName?: string;
  glow?: boolean;
}

export function BlueGridBackground({
  children,
  className = "",
  overlayClassName = "",
  glow = true,
}: BlueGridBackgroundProps) {
  return (
    <div className={`bg-brand relative w-full overflow-hidden ${className}`}>
      {/* Blueprint Grid Lines Overlay - Full Bleed */}
      <div
        className={`bg-grid-pattern pointer-events-none absolute inset-0 z-0 opacity-70 ${overlayClassName}`}
      />
      {glow && (
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_0%,rgba(40,114,255,0.35),rgba(0,59,226,0))]" />
      )}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
