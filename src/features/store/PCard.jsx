import { useState } from "react";
import { G } from "../../config/theme";
import { Btn } from "../../components/ui/Btn";
import { useCart } from "../../context/CartContext";

export function PCard({ p, delay, iv }) {
  const [h, setH] = useState(false);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(p);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: G.card, border: `1px solid ${h ? G.bHov : G.border}`,
        borderRadius: 26, overflow: "hidden",
        opacity: iv ? 1 : 0,
        transform: iv ? (h ? "translateY(-8px)" : "none") : "translateY(50px)",
        transition: `opacity .7s ease ${delay}s, transform .4s ease, border-color .3s`,
        boxShadow: h ? "0 30px 70px rgba(0,0,0,.4)" : "none",
      }}
    >
      <div style={{ position: "relative", overflow: "hidden", height: 250 }}>
        <img
          src={p.img}
          alt={p.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", transform: h ? "scale(1.06)" : "scale(1)", transition: "transform .5s ease", display: "block" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(13,21,18,.65) 0%,transparent 55%)" }} />
        <div style={{
          position: "absolute", top: 13, right: 13,
          background: "rgba(8,13,11,.8)", backdropFilter: "blur(8px)",
          border: `1px solid ${G.border}`, color: G.goldD,
          fontSize: 10, letterSpacing: 3, padding: "5px 10px",
          borderRadius: 8, fontFamily: "'Cinzel',serif",
        }}>{p.tag}</div>
        <div style={{ position: "absolute", top: 13, left: 13, fontSize: 26 }}>{p.emoji}</div>
      </div>

      <div style={{ padding: "20px 22px 24px" }}>
        <h3 style={{ fontSize: 21, fontWeight: 800, color: G.text, marginBottom: 7 }}>{p.title}</h3>
        <p style={{ color: G.muted, fontSize: 14, lineHeight: 1.8, marginBottom: 18 }}>{p.desc}</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <span style={{ color: G.gold, fontWeight: 900, fontSize: 24 }}>{p.price.toLocaleString("ar-EG")}</span>
            <span style={{ color: G.dim, fontSize: 12, marginRight: 5 }}>EGP / {p.unit}</span>
          </div>
          <Btn onClick={handleAdd} sm green={added}>
            {added ? "✓ تمت" : "+ أضف للسلة"}
          </Btn>
        </div>
      </div>
    </div>
  );
}
