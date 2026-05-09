import { G } from "../../config/theme";
import { Btn } from "../../components/ui/Btn";

export function SuccessModal({ onClose }) {
  return (
    <>
      <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.85)", zIndex: 2998, backdropFilter: "blur(6px)" }} />
      <div style={{
        position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        width: "min(460px,92vw)", background: "#0c1411",
        border: `1px solid ${G.border}`, borderRadius: 32, padding: "48px 34px",
        zIndex: 2999, textAlign: "center", boxShadow: "0 40px 100px rgba(0,0,0,.85)",
      }}>
        <div style={{ fontSize: 72, marginBottom: 20 }}>🎉</div>
        <h2 style={{ fontSize: 26, fontWeight: 900, color: G.text, marginBottom: 12 }}>تم استلام طلبك!</h2>
        <p style={{ color: G.muted, fontSize: 16, lineHeight: 1.9, marginBottom: 32 }}>
          شكراً لثقتك في سواني 🌴<br />سيتواصل فريقنا معك خلال 24 ساعة.
        </p>
        <Btn onClick={onClose} full>العودة للتسوق</Btn>
      </div>
    </>
  );
}
