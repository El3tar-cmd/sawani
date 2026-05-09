import { G } from "../../config/theme";

export function Input({ val, onChange, placeholder, type = "text", rows }) {
  const s = {
    width: "100%", background: "rgba(255,255,255,.04)",
    border: `1px solid ${G.border}`, borderRadius: 14,
    padding: "13px 16px", color: G.text, fontSize: 15,
    fontFamily: "'Cairo',sans-serif", direction: "rtl",
    display: "block", marginBottom: 14,
    transition: "border-color .3s",
  };
  
  return rows
    ? <textarea value={val} onChange={onChange} placeholder={placeholder} rows={rows} style={{ ...s, resize: "vertical" }} />
    : <input type={type} value={val} onChange={onChange} placeholder={placeholder} style={s} />;
}
