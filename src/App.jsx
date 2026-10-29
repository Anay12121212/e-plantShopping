import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';
import { selectCartCount } from './CartSlice.jsx';

function Navbar({ page, setPage }) {
  const cartCount = useSelector(selectCartCount);

  return (
    <header className="navbar">
      <button className="brand" onClick={() => setPage('home')} aria-label="Paradise Nursery home">
        <span className="brand-mark" aria-hidden="true">❧</span>
        <span>Paradise <strong>Nursery</strong></span>
      </button>
      <nav className="nav-links" aria-label="Main navigation">
        <button className={page === 'home' ? 'nav-link active' : 'nav-link'} onClick={() => setPage('home')}>Home</button>
        <button className={page === 'plants' ? 'nav-link active' : 'nav-link'} onClick={() => setPage('plants')}>Plants</button>
        <button className={page === 'cart' ? 'nav-link active' : 'nav-link'} onClick={() => setPage('cart')}>Cart</button>
        <button className="cart-icon-button" onClick={() => setPage('cart')} aria-label={`Shopping cart, ${cartCount} items`}>
          <span aria-hidden="true">🛒</span>
          <span className="cart-count">{cartCount}</span>
        </button>
      </nav>
    </header>
  );
}

export default function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="app-shell">
      <Navbar page={page} setPage={setPage} />
      {page === 'home' && (
        <main>
          <section className="hero">
            <div className="hero-overlay" />
            <div className="hero-content">
              <p className="eyebrow hero-eyebrow">BRING NATURE HOME</p>
              <h1>Paradise<br /><span>Nursery</span></h1>
              <p className="hero-subtitle">
                Find your green moment. Discover plants that make every space feel alive.
              </p>
              <button className="primary-button" onClick={() => setPage('plants')}>
                Get Started <span aria-hidden="true">→</span>
              </button>
            </div>
            <div className="hero-note"><span>✦</span> A greener home starts here</div>
          </section>
          <AboutUs />
          <section className="home-cta">
            <div>
              <p className="eyebrow">YOUR NEXT FAVORITE PLANT</p>
              <h2>Make room for something green.</h2>
            </div>
            <button className="primary-button" onClick={() => setPage('plants')}>Explore Plants <span aria-hidden="true">→</span></button>
          </section>
        </main>
      )}
      {page === 'plants' && <ProductList />}
      {page === 'cart' && <CartItem onContinueShopping={() => setPage('plants')} />}
      <footer className="site-footer">
        <span className="footer-brand">❧ Paradise Nursery</span>
        <span>Grow a little happiness every day.</span>
      </footer>
    </div>
  );
}
