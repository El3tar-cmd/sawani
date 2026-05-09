import { G } from "../../config/theme";
import { NAV } from "../../data/constants";

export function Footer({ onNav }) {
  return (
    <footer style={{ background: "#090d0b", borderTop: `1px solid ${G.border}`, padding: "64px 0 32px" }}>
      <div style={{ width: "92%", maxWidth: 1400, margin: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 36, marginBottom: 44 }}>
          <div style={{ maxWidth: 300 }}>
            <div style={{ color: G.gold, fontSize: 42, fontWeight: 900, lineHeight: 1 }}>سواني</div>
            <div style={{ color: G.goldD, fontSize: 9, letterSpacing: 6, fontFamily: "'Cinzel',serif", marginTop: 4, marginBottom: 14 }}>SAWANI</div>
            <p style={{ color: G.dim, fontSize: 14, lineHeight: 1.9 }}>علامة مصرية فاخرة من قلب الواحات — تمور، دواجن، وإنتاج حيواني طبيعي 100%</p>
          </div>
          <div>
            <h4 style={{ color: G.gold, fontSize: 15, fontWeight: 800, marginBottom: 16 }}>روابط</h4>
            {NAV.map(n => (
              <button key={n.id} onClick={() => onNav(n.id)} style={{ display: "block", background: "none", border: "none", color: G.dim, fontSize: 14, fontFamily: "'Cairo',sans-serif", marginBottom: 10, cursor: "pointer", padding: 0, textAlign: "right" }}
                onMouseEnter={e => e.currentTarget.style.color = G.gold} onMouseLeave={e => e.currentTarget.style.color = G.dim}
              >{n.label}</button>
            ))}
          </div>
          <div>
            <h4 style={{ color: G.gold, fontSize: 15, fontWeight: 800, marginBottom: 16 }}>منتجاتنا</h4>
            {["التمور الفاخرة", "الدواجن البلدي", "اللحوم الطازجة", "منتجات الألبان"].map(l => (
              <div key={l} style={{ color: G.dim, fontSize: 14, marginBottom: 10 }}>{l}</div>
            ))}
          </div>
          <div>
            <h4 style={{ color: G.gold, fontSize: 15, fontWeight: 800, marginBottom: 16 }}>تواصل</h4>
            <p style={{ color: G.dim, fontSize: 14, marginBottom: 10 }}>📍 الواحات البحرية، مصر</p>
            <p style={{ color: G.dim, fontSize: 14, marginBottom: 10 }}>📞 +20 100 000 0000</p>
            <p style={{ color: G.dim, fontSize: 14 }}>📧 info@sawani-eg.com</p>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(200,155,60,.07)", paddingTop: 22, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
          <span style={{ color: G.dim, fontSize: 12 }}>© 2026 SAWANI — Luxury Heritage Agricultural Brand</span>
          <span style={{ color: G.dim, fontSize: 12, fontFamily: "'Cinzel',serif", letterSpacing: 2 }}>MADE IN EGYPT 🇪🇬</span>
        </div>
      </div>
    </footer>
  );
}
