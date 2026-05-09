import { G } from "../../config/theme";
import { Btn } from "../../components/ui/Btn";
import { IcBtn } from "../../components/ui/IcBtn";
import { useCart } from "../../context/CartContext";

export function CartSidebar({ onClose, onOrder, mob }) {
  const { cart, updateQty, removeItem } = useCart();
  const total = cart.reduce((s, i) => s + i.product.price * i.qty, 0);

  return (
    <>
      <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.7)", zIndex: 1998, backdropFilter: "blur(4px)" }} />
      <div style={{
        position: "fixed", top: 0, right: 0,
        width: mob ? "100vw" : 420, height: "100vh",
        background: "#0c1411", borderLeft: `1px solid ${G.border}`,
        zIndex: 1999, display: "flex", flexDirection: "column",
        boxShadow: "-20px 0 60px rgba(0,0,0,.6)",
      }}>
        {/* Header */}
        <div style={{ padding: "22px 26px", borderBottom: `1px solid ${G.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 900, color: G.text }}>سلة الطلبات 🛒</h2>
            <p style={{ color: G.muted, fontSize: 13 }}>{cart.reduce((s, i) => s + i.qty, 0)} قطعة</p>
          </div>
          <button onClick={onClose} style={{ background: "rgba(200,155,60,.1)", border: `1px solid ${G.border}`, color: G.text, width: 40, height: 40, borderRadius: 12, cursor: "pointer", fontSize: 16 }}>✕</button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: "auto", padding: "18px 26px" }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: "center", paddingTop: 80 }}>
              <div style={{ fontSize: 64, marginBottom: 16 }}>🛒</div>
              <p style={{ color: G.muted, fontSize: 17 }}>السلة فارغة</p>
              <p style={{ color: G.dim, fontSize: 14, marginTop: 8 }}>أضف منتجات من المتجر</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.product.id} style={{
                background: G.card, border: `1px solid ${G.border}`,
                borderRadius: 20, padding: "16px 18px", marginBottom: 12,
                display: "flex", gap: 14, alignItems: "center",
              }}>
                <div style={{ fontSize: 34, flexShrink: 0 }}>{item.product.emoji}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: G.text, marginBottom: 4, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.product.title}</div>
                  <div style={{ color: G.gold, fontWeight: 900, fontSize: 16 }}>{(item.product.price * item.qty).toLocaleString("ar-EG")} EGP</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <IcBtn onClick={() => updateQty(item.product.id, item.qty - 1)}>−</IcBtn>
                  <span style={{ fontSize: 15, fontWeight: 700, color: G.text, minWidth: 22, textAlign: "center" }}>{item.qty}</span>
                  <IcBtn onClick={() => updateQty(item.product.id, item.qty + 1)}>+</IcBtn>
                  <IcBtn onClick={() => removeItem(item.product.id)} red>🗑</IcBtn>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div style={{ padding: "18px 26px", borderTop: `1px solid ${G.border}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <span style={{ color: G.muted, fontSize: 16 }}>الإجمالي</span>
              <span style={{ color: G.gold, fontWeight: 900, fontSize: 24 }}>{total.toLocaleString("ar-EG")} EGP</span>
            </div>
            <Btn onClick={onOrder} full>إتمام الطلب 🚀</Btn>
          </div>
        )}
      </div>
    </>
  );
}
