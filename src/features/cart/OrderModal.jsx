import { useState } from "react";
import { G } from "../../config/theme";
import { WA } from "../../data/constants";
import { Input } from "../../components/ui/Input";
import { Btn } from "../../components/ui/Btn";
import { useCart } from "../../context/CartContext";

export function OrderModal({ onClose, onSuccess }) {
  const { cart } = useCart();
  const [f, setF] = useState({ name: "", phone: "", address: "", notes: "" });
  const [err, setErr] = useState({});
  const [loading, setLoading] = useState(false);
  
  const total = cart.reduce((s, i) => s + i.product.price * i.qty, 0);

  const validate = () => {
    const e = {};
    if (!f.name.trim()) e.name = "الاسم مطلوب";
    if (!/^[\d\s+\-]{10,}$/.test(f.phone)) e.phone = "رقم هاتف غير صحيح";
    if (!f.address.trim()) e.address = "العنوان مطلوب";
    setErr(e);
    return !Object.keys(e).length;
  };

  const sendWA = () => {
    if (!validate()) return;
    const lines = cart.map(i => `• ${i.product.title} × ${i.qty} = ${(i.product.price * i.qty).toLocaleString("ar-EG")} EGP`).join("\n");
    const msg = `🌴 *طلب جديد — سواني*\n\n👤 ${f.name}\n📞 ${f.phone}\n📍 ${f.address}\n\n🛒 *المنتجات:*\n${lines}\n\n💰 *الإجمالي: ${total.toLocaleString("ar-EG")} EGP*${f.notes ? `\n\n📝 ${f.notes}` : ""}`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, "_blank");
    setTimeout(onSuccess, 800);
  };

  const sendForm = () => {
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); onSuccess(); }, 1800);
  };

  const field = (label, key, ph, type = "text", rows) => (
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: "block", color: G.muted, fontSize: 13, marginBottom: 6, fontWeight: 600 }}>{label}</label>
      <Input val={f[key]} onChange={(e) => setF({ ...f, [key]: e.target.value })} placeholder={ph} type={type} rows={rows} />
      {err[key] && <p style={{ color: "#e06060", fontSize: 12, marginTop: -8, marginBottom: 8 }}>{err[key]}</p>}
    </div>
  );

  return (
    <>
      <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.85)", zIndex: 2998, backdropFilter: "blur(6px)" }} />
      <div style={{
        position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        width: "min(560px,95vw)", maxHeight: "92vh", overflowY: "auto",
        background: "#0c1411", border: `1px solid ${G.border}`, borderRadius: 32,
        padding: "34px 30px", zIndex: 2999,
        boxShadow: "0 40px 100px rgba(0,0,0,.85)",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 26 }}>
          <div>
            <h2 style={{ fontSize: 24, fontWeight: 900, color: G.text, marginBottom: 4 }}>إتمام الطلب</h2>
            <p style={{ color: G.muted, fontSize: 13 }}>الإجمالي: <strong style={{ color: G.gold }}>{total.toLocaleString("ar-EG")} EGP</strong></p>
          </div>
          <button onClick={onClose} style={{ background: "rgba(200,155,60,.1)", border: `1px solid ${G.border}`, color: G.text, width: 40, height: 40, borderRadius: 12, cursor: "pointer", fontSize: 16, flexShrink: 0 }}>✕</button>
        </div>

        {field("الاسم الكامل *", "name", "مثال: أحمد محمد")}
        {field("رقم الهاتف *", "phone", "+20 100 000 0000", "tel")}
        {field("العنوان التفصيلي *", "address", "المحافظة، المدينة، الشارع...", "text", 3)}
        {field("ملاحظات إضافية", "notes", "أي تعليمات خاصة...", "text", 2)}

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 8 }}>
          <Btn onClick={sendWA} full>📲 واتساب</Btn>
          <Btn onClick={sendForm} full outline disabled={loading}>{loading ? "⏳ جاري..." : "✉️ إرسال"}</Btn>
        </div>

        <p style={{ textAlign: "center", color: G.dim, fontSize: 12, marginTop: 16 }}>سيتم التواصل خلال 24 ساعة لتأكيد طلبك</p>
      </div>
    </>
  );
}
