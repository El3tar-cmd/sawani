import { G } from "../../config/theme";

export function IcBtn({ onClick, children, red = false }) {
  return (
    <button onClick={onClick} style={{
      background: red ? "rgba(220,80,80,.1)" : "rgba(200,155,60,.1)",
      border: `1px solid ${red ? "rgba(220,80,80,.2)" : G.border}`,
      color: red ? "#e06060" : G.text,
      width: 30, height: 30, borderRadius: 8, cursor: "pointer",
      fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      {children}
    </button>
  );
}
