import { useInView } from "../../hooks/useInView";
import { G } from "../../config/theme";
import { Tag } from "../../components/ui/Tag";

export function About({ mob }) {
  const [ref, iv] = useInView();
  const stats = [{ v: "+15", l: "منتج مميز" }, { v: "100%", l: "جودة طبيعية" }, { v: "+500", l: "عميل راضٍ" }, { v: "5★", l: "تقييم متوسط" }];
  
  return (
    <section ref={ref} style={{ padding: "100px 0", background: "rgba(13,21,18,.6)", borderTop: `1px solid ${G.border}`, borderBottom: `1px solid ${G.border}` }}>
      <div style={{ width: "92%", maxWidth: 1400, margin: "auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr", gap: mob ? 44 : 70, alignItems: "center" }}>

          <div style={{ opacity: iv ? 1 : 0, transform: iv ? "none" : "translateX(-40px)", transition: "all .9s cubic-bezier(.16,1,.3,1)" }}>
            <div style={{ borderRadius: 34, overflow: "hidden", border: `1px solid ${G.border}`, boxShadow: "0 30px 80px rgba(0,0,0,.5)" }}>
              <img src="https://picsum.photos/seed/sawani-about-oasis/1000/700" alt="Story" style={{ width: "100%", height: mob ? 280 : 560, objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 12 }}>
              {stats.map(s => (
                <div key={s.l} style={{ background: G.card, border: `1px solid ${G.border}`, borderRadius: 18, padding: "20px 18px" }}>
                  <div style={{ fontSize: 34, color: G.gold, fontWeight: 900 }}>{s.v}</div>
                  <div style={{ color: G.muted, fontSize: 13, marginTop: 4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ opacity: iv ? 1 : 0, transform: iv ? "none" : "translateX(40px)", transition: "all .9s cubic-bezier(.16,1,.3,1) .15s" }}>
            <Tag>OUR STORY</Tag>
            <h2 style={{ fontSize: mob ? "clamp(32px,9vw,46px)" : "clamp(38px,5vw,60px)", fontWeight: 900, marginBottom: 22, lineHeight: 1.15, color: G.text }}>
              تراث الواحات <span style={{ color: G.gold }}>بروح عصرية</span>
            </h2>
            <p style={{ color: G.muted, fontSize: mob ? 15 : 17, lineHeight: 2.1, marginBottom: 18 }}>
              استُلهم اسم <strong style={{ color: G.goldL }}>"سواني"</strong> من أدوات استخراج المياه القديمة في الواحات — رمز الحياة والعطاء والعمل المستمر عبر الأجيال.
            </p>
            <p style={{ color: G.muted, fontSize: mob ? 15 : 17, lineHeight: 2.1, marginBottom: 30 }}>
              نُقدّم منتجات طبيعية 100% من الواحات البحرية مباشرةً لبيتك بجودة لا تُضاهى وبضمان رضا تام.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[["✅", "منتجات طبيعية 100% بلا إضافات"], ["🚚", "توصيل لجميع محافظات مصر"], ["🔄", "ضمان جودة أو استرداد كامل"]].map(([ic, lb]) => (
                <div key={lb} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 40, height: 40, background: "rgba(200,155,60,.1)", border: `1px solid ${G.border}`, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{ic}</div>
                  <span style={{ color: G.muted, fontSize: 15 }}>{lb}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
