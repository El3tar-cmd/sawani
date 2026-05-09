import { useState, useEffect } from "react";
import { G } from "../../config/theme";
import { Btn } from "../../components/ui/Btn";
import { Tag } from "../../components/ui/Tag";

export function Hero({ onNav, mob }) {
  const [rdy, setRdy] = useState(false);
  useEffect(() => { const t = setTimeout(() => setRdy(true), 80); return () => clearTimeout(t); }, []);

  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: mob ? 96 : 120, paddingBottom: 60, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle,rgba(200,155,60,.13),transparent 70%)", top: -250, right: -250, filter: "blur(50px)" }} />
        <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(200,155,60,.07),transparent 70%)", bottom: -100, left: -100, filter: "blur(40px)" }} />
      </div>

      <div style={{ width: "92%", maxWidth: 1400, margin: "auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr", gap: mob ? 44 : 70, alignItems: "center" }}>

          {/* Text */}
          <div style={{ opacity: rdy ? 1 : 0, transform: rdy ? "none" : "translateY(40px)", transition: "all .9s cubic-bezier(.16,1,.3,1)", order: mob ? 2 : 1 }}>
            <div style={{ display: "inline-block", background: "rgba(200,155,60,.08)", border: `1px solid rgba(200,155,60,.25)`, padding: "10px 20px", borderRadius: 40, color: "#dcbc72", marginBottom: 26, fontSize: 14 }}>
              ✦ هوية مستوحاة من الواحات المصرية
            </div>
            <h1 style={{ fontSize: mob ? "clamp(40px,11vw,56px)" : "clamp(50px,7vw,84px)", lineHeight: 1.1, marginBottom: 22, fontWeight: 900, color: G.text }}>
              من قلب <span style={{ color: G.gold }}>الواحات</span><br />نزرع الخير
            </h1>
            <p style={{ color: G.muted, fontSize: mob ? 16 : 19, marginBottom: 36, lineHeight: 2 }}>
              علامة مصرية فاخرة في التمور والإنتاج الحيواني والدواجن — جودة طبيعية 100% تصل لبيتك.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Btn onClick={() => onNav("store")}>تسوق الآن 🛒</Btn>
              <Btn onClick={() => onNav("about")} outline>عن سواني</Btn>
            </div>

            {/* Trust badges */}
            <div style={{ display: "flex", gap: 20, marginTop: 36, flexWrap: "wrap" }}>
              {[["✅", "طبيعي 100%"], ["🚚", "توصيل سريع"], ["🔄", "استبدال مضمون"]].map(([ic, lb]) => (
                <div key={lb} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <span style={{ fontSize: 18 }}>{ic}</span>
                  <span style={{ color: G.muted, fontSize: 13 }}>{lb}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div style={{ opacity: rdy ? 1 : 0, transform: rdy ? "none" : "translateY(50px)", transition: "all 1s cubic-bezier(.16,1,.3,1) .15s", position: "relative", order: mob ? 1 : 2 }}>
            <div style={{ borderRadius: mob ? 24 : 36, overflow: "hidden", border: `1px solid ${G.border}`, boxShadow: "0 40px 100px rgba(0,0,0,.6)" }}>
              <img
                src="https://picsum.photos/seed/sawani-hero-oasis/1200/700"
                alt="Sawani"
                style={{ width: "100%", height: mob ? 320 : 600, objectFit: "cover", display: "block" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(11,18,16,.4) 0%,transparent 50%)" }} />
            </div>

            {!mob && (
              <div style={{
                position: "absolute", bottom: 24, right: 24,
                background: "rgba(8,13,11,.8)", backdropFilter: "blur(20px)",
                padding: "20px 24px", borderRadius: 22,
                border: `1px solid ${G.border}`, maxWidth: 270,
              }}>
                <Tag>LUXURY HERITAGE</Tag>
                <div style={{ fontSize: 19, fontWeight: 700, marginBottom: 6, color: G.text }}>Sawani Oasis</div>
                <div style={{ color: G.muted, fontSize: 13, lineHeight: 1.7 }}>منتجات مستوحاة من روح الواحات المصرية الأصيلة</div>
              </div>
            )}

            <div style={{
              position: "absolute", top: 18, left: 18,
              background: `linear-gradient(135deg,${G.gold},${G.goldL})`,
              color: "#0B1210", fontWeight: 900, fontSize: 12,
              padding: "7px 14px", borderRadius: 10,
            }}>Premium Quality ✓</div>
          </div>
        </div>
      </div>
    </section>
  );
}
