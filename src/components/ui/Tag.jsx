import { G } from "../../config/theme";

export function Tag({ children }) {
  return (
    <span style={{ color: G.goldD, fontSize: 10, letterSpacing: 4, fontFamily: "'Cinzel',serif", display: "block", marginBottom: 10 }}>
      {children}
    </span>
  );
}
