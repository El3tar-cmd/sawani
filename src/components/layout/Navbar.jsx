import { useState } from "react";
import { useScrolled } from "../../hooks/useScrolled";
import { G } from "../../config/theme";
import { NAV } from "../../data/constants";
import { Btn } from "../ui/Btn";
import { useCart } from "../../context/CartContext";

export function Navbar({ onCart, active, onNav, mob }) {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  const { cart } = useCart();
  const count = cart.reduce((acc, curr) => acc + curr.qty, 0);

  const go = (id) => { onNav(id); setOpen(false); };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, width: "100%", zIndex: 1000,
        backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
        background: scrolled ? "rgba(8,13,11,.97)" : "rgba(8,13,11,.8)",
        borderBottom: `1px solid ${scrolled ? "rgba(200,155,60,.2)" : "rgba(200,155,60,.07)"}`,
        transition: "all .4s",
      }}>
        <div style={{ width: "92%", maxWidth: 1400, margin: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px 0" }}>

          {/* Logo */}
          <div onClick={() => go("home")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 12 }}>
            <img src="/logo.png" alt="Sawani Logo" style={{ height: mob ? 40 : 50, objectFit: "contain" }} />
            <div>
              <div style={{ color: G.gold, fontSize: mob ? 30 : 36, fontWeight: 900, lineHeight: 1 }}>سواني</div>
              <div style={{ color: G.goldD, fontSize: 9, letterSpacing: 6, fontFamily: "'Cinzel',serif" }}>SAWANI</div>
            </div>
          </div>

          {/* Desktop links */}
          {!mob && (
            <div style={{ display: "flex", gap: 26 }}>
              {NAV.map((n) => (
                <button key={n.id} onClick={() => go(n.id)} style={{
                  background: "none", border: "none", cursor: "pointer",
                  color: active === n.id ? G.gold : "#ddd4bf",
                  fontSize: 16, fontFamily: "'Cairo',sans-serif",
                  fontWeight: active === n.id ? 700 : 400,
                  borderBottom: active === n.id ? `2px solid ${G.gold}` : "2px solid transparent",
                  paddingBottom: 4, transition: "all .3s",
                }}>{n.label}</button>
              ))}
            </div>
          )}

          {/* Controls */}
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            {/* Cart */}
            <button onClick={onCart} style={{
              position: "relative", background: "rgba(200,155,60,.1)",
              border: `1px solid ${G.border}`, color: G.text,
              padding: mob ? "10px 12px" : "10px 18px", borderRadius: 14, cursor: "pointer",
              fontSize: 18, display: "flex", alignItems: "center", gap: 8,
              fontFamily: "'Cairo',sans-serif", fontWeight: 700,
            }}>
              🛒{!mob && <span style={{ fontSize: 15 }}>السلة</span>}
              {count > 0 && (
                <span style={{
                  position: "absolute", top: -8, right: -8,
                  background: G.gold, color: "#0B1210",
                  width: 22, height: 22, borderRadius: "50%",
                  fontSize: 12, fontWeight: 900,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>{count > 9 ? "9+" : count}</span>
              )}
            </button>

            {/* Desktop CTA */}
            {!mob && <Btn onClick={() => go("store")}>تسوق الآن</Btn>}

            {/* Hamburger */}
            {mob && (
              <button onClick={() => setOpen(!open)} style={{
                background: "rgba(200,155,60,.1)", border: `1px solid ${G.border}`,
                color: G.text, width: 44, height: 44, borderRadius: 14,
                cursor: "pointer", fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center",
              }}>{open ? "✕" : "☰"}</button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mob && open && (
        <div style={{
          position: "fixed", top: 72, left: 0, right: 0, zIndex: 999,
          background: "rgba(9,14,12,.98)", backdropFilter: "blur(20px)",
          borderBottom: `1px solid ${G.border}`, padding: "12px 24px 24px",
        }}>
          {NAV.map((n) => (
            <button key={n.id} onClick={() => go(n.id)} style={{
              display: "block", width: "100%", background: "none", border: "none",
              color: active === n.id ? G.gold : G.text, fontSize: 18,
              fontFamily: "'Cairo',sans-serif", fontWeight: active === n.id ? 700 : 400,
              padding: "14px 0", textAlign: "right", cursor: "pointer",
              borderBottom: `1px solid rgba(200,155,60,.07)`,
            }}>{n.label}</button>
          ))}
          <div style={{ marginTop: 16 }}><Btn onClick={() => go("store")} full>تسوق الآن 🌴</Btn></div>
        </div>
      )}
    </>
  );
}
