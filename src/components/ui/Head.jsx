import { G } from "../../config/theme";
import { Tag } from "./Tag";

export function Head({ tag, title, sub, iv }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 60, opacity: iv ? 1 : 0, transform: iv ? "none" : "translateY(28px)", transition: "all .7s cubic-bezier(.16,1,.3,1)" }}>
      <Tag>{tag}</Tag>
      <h2 style={{ fontSize: "clamp(32px,5vw,54px)", fontWeight: 900, color: G.text, marginBottom: 14 }}>{title}</h2>
      {sub && <p style={{ color: G.muted, fontSize: 17, maxWidth: 660, margin: "0 auto", lineHeight: 1.9 }}>{sub}</p>}
    </div>
  );
}
