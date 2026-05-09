import { useState } from "react";
import { useInView } from "../../hooks/useInView";
import { G } from "../../config/theme";
import { Head } from "../../components/ui/Head";
import { Input } from "../../components/ui/Input";
import { Btn } from "../../components/ui/Btn";

export function Contact({ mob }) {
  const [ref, iv] = useInView();
  const [f, setF] = useState({ name: "", email: "", msg: "" });
  const [sent, setSent] = useState(false);

  const send = () => {
    if (!f.name || !f.msg) return;
    setSent(true);
    setTimeout(() => { setSent(false); setF({ name: "", email: "", msg: "" }); }, 4000);
  };

  return (
    <section ref={ref} style={{ padding: "100px 0" }}>
      <div style={{ width: "92%", maxWidth: 900, margin: "auto" }}>
        <Head tag="CONTACT US" title="تواصل معنا" sub="نسعد بخدمتك والرد على استفساراتك في أقرب وقت." iv={iv} />

        <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr", gap: 36, opacity: iv ? 1 : 0, transform: iv ? "none" : "translateY(28px)", transition: "all .8s ease .2s" }}>
          {/* Info */}
          <div>
            {[["📍", "الموقع", "الواحات البحرية، محافظة الجيزة — مصر"], ["📞", "الهاتف", "+20 100 000 0000"], ["📧", "البريد", "info@sawani-eg.com"], ["📲", "واتساب", "متاح 24/7 للطلبات"]].map(([ic, t, v]) => (
              <div key={t} style={{ display: "flex", gap: 16, marginBottom: 26, alignItems: "flex-start" }}>
                <div style={{ width: 46, height: 46, background: "rgba(200,155,60,.1)", border: `1px solid ${G.border}`, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{ic}</div>
                <div>
                  <div style={{ color: G.gold, fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{t}</div>
                  <div style={{ color: G.muted, fontSize: 15, lineHeight: 1.7 }}>{v}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div style={{ background: G.card, border: `1px solid ${G.border}`, borderRadius: 26, padding: "28px 24px" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "36px 0" }}>
                <div style={{ fontSize: 56, marginBottom: 14 }}>✅</div>
                <h3 style={{ color: G.text, fontSize: 22, fontWeight: 900, marginBottom: 8 }}>تم الإرسال!</h3>
                <p style={{ color: G.muted }}>سنتواصل معك قريباً</p>
              </div>
            ) : (
              <>
                <h3 style={{ fontSize: 19, fontWeight: 800, color: G.text, marginBottom: 20 }}>أرسل رسالة</h3>
                <Input val={f.name} onChange={e => setF({ ...f, name: e.target.value })} placeholder="اسمك *" />
                <Input val={f.email} onChange={e => setF({ ...f, email: e.target.value })} placeholder="بريدك الإلكتروني" type="email" />
                <Input val={f.msg} onChange={e => setF({ ...f, msg: e.target.value })} placeholder="رسالتك *" rows={4} />
                <Btn onClick={send} full>إرسال الرسالة ✉️</Btn>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
