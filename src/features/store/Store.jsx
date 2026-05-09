import { useState } from "react";
import { useInView } from "../../hooks/useInView";
import { PRODUCTS, CATS } from "../../data/constants";
import { G } from "../../config/theme";
import { Head } from "../../components/ui/Head";
import { PCard } from "./PCard";

export function Store({ mob }) {
  const [ref, iv] = useInView();
  const [cat, setCat] = useState("الكل");

  const list = cat === "الكل" ? PRODUCTS : PRODUCTS.filter(p => p.cat === cat);

  return (
    <section ref={ref} style={{ padding: "100px 0" }}>
      <div style={{ width: "92%", maxWidth: 1400, margin: "auto" }}>
        <Head tag="PREMIUM PRODUCTS" title="منتجاتنا" sub="كل منتج يحمل قصة أصالة وعناية من الواحة حتى يصل إليك." iv={iv} />

        {/* Filter */}
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
          {CATS.map((c) => (
            <button key={c} onClick={() => setCat(c)} style={{
              background: cat === c ? `linear-gradient(135deg,${G.gold},${G.goldL})` : "rgba(200,155,60,.07)",
              color: cat === c ? "#0B1210" : G.muted,
              border: `1px solid ${cat === c ? "transparent" : G.border}`,
              padding: "10px 22px", borderRadius: 40, fontWeight: 700,
              fontSize: 15, fontFamily: "'Cairo',sans-serif", cursor: "pointer", transition: "all .3s",
            }}>{c}</button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "repeat(auto-fill,minmax(320px,1fr))", gap: 26 }}>
          {list.map((p, i) => (
            <PCard key={p.id} p={p} delay={i * 0.09} iv={iv} />
          ))}
        </div>
      </div>
    </section>
  );
}
