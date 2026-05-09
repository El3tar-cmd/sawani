import { useState } from "react";
import { G } from "../../config/theme";

export function Btn({ onClick, children, outline = false, sm = false, full = false, green = false, disabled = false }) {
  const [h, setH] = useState(false);
  
  const bg = green
    ? "linear-gradient(135deg,#2d8c4a,#4caf70)"
    : outline
      ? h ? "rgba(200,155,60,0.12)" : "transparent"
      : `linear-gradient(135deg,${G.gold},${G.goldL})`;
      
  return (
    <button
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 7,
        background: bg,
        color: outline ? G.text : "#0B1210",
        border: outline ? `1px solid ${G.border}` : "none",
        padding: sm ? "10px 18px" : "15px 30px",
        borderRadius: sm ? 12 : 16,
        fontWeight: 800, fontSize: sm ? 14 : 16,
        fontFamily: "'Cairo',sans-serif", cursor: disabled ? "default" : "pointer",
        transition: "all .3s",
        transform: h && !disabled ? "translateY(-3px)" : "none",
        boxShadow: h && !outline && !disabled ? "0 12px 35px rgba(200,155,60,.3)" : "none",
        width: full ? "100%" : "auto",
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {children}
    </button>
  );
}
