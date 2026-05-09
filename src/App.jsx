import { useState } from "react";
import { useWidth } from "./hooks/useWidth";
import { CartProvider } from "./context/CartContext";

// Layout
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

// Features
import { Hero } from "./features/home/Hero";
import { Store } from "./features/store/Store";
import { About } from "./features/home/About";
import { Contact } from "./features/home/Contact";
import { CartSidebar } from "./features/cart/CartSidebar";
import { OrderModal } from "./features/cart/OrderModal";
import { SuccessModal } from "./features/cart/SuccessModal";

function AppContent() {
  const width = useWidth();
  const mob = width < 768;

  const [active, setActive] = useState("home");
  const [cartOpen, setCartOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const goTo = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar onCart={() => setCartOpen(true)} active={active} onNav={goTo} mob={mob} />

      {cartOpen && (
        <CartSidebar
          onClose={() => setCartOpen(false)}
          onOrder={() => { setCartOpen(false); setOrderOpen(true); }}
          mob={mob}
        />
      )}

      {orderOpen && (
        <OrderModal
          onClose={() => setOrderOpen(false)}
          onSuccess={() => { setOrderOpen(false); setOrderSuccess(true); }}
        />
      )}

      {orderSuccess && (
        <SuccessModal onClose={() => setOrderSuccess(false)} />
      )}

      <main>
        <div id="home"><Hero onNav={goTo} mob={mob} /></div>
        <div id="store"><Store mob={mob} /></div>
        <div id="about"><About mob={mob} /></div>
        <div id="contact"><Contact mob={mob} /></div>
      </main>

      <Footer onNav={goTo} />
    </>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
