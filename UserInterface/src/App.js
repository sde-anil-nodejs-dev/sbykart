import React from 'react';
import './App.css';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add('open');
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove('open');
  }
  return (

    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>
            &#9776;
                </button>
          <a href="index.html">SBYkart</a>
        </div>
        <div className="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>

        </div>
      </header>

      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
          <li>
            <a className="menuItems" href={``}>Daily Items</a>
          </li>
          <li>
            <a className="menuItems" href={``}>Vegitables</a>
          </li>
          <li>
            <a className="menuItems" href={``}>Bakery</a>
          </li>
          <li>
            <a className="menuItems" href={``}>Oils</a>
          </li>
          <li>
            <a className="menuItems" href={``}>Dairy</a>
          </li>
        </ul>
        <h3>Customer Area</h3>
        <ul>
          <li>
            <a className="menuItems" href="signin.html">Sign In</a>

          </li>
          <li>
            <a className="menuItems" href="signup.html">Sign Up</a>
          </li>
        </ul>
      </aside>


      <main className="main">
        <div className="content">
          <ul className="products">
            <li>
              <div className="product">
                <img class="product-image" src="/images/products/food-basket.jpg" alt="" />
                <div class="product-name">
                  <a href="product.html">Vegitables</a>
                </div>
                <div class="product-brand">
                  SBYkart
                            </div>
                <div class="prduct-price">475 Rs.</div>
                <div class="product-rating">
                  4.5 Stars(20 reviews)
                </div>
              </div>
            </li>
            <li>
              <div className="product">
                <img class="product-image" src="/images/products/freshfood.jpg" alt="" />
                <div class="product-name">
                  <a href="product.html">Vegitables(Special)</a>
                </div>
                <div class="product-brand">
                  SBYkart
                            </div>
                <div class="prduct-price">900 Rs.</div>
                <div class="product-rating">
                  4.5 Stars(20 reviews)
                </div>
              </div>
            </li>
            <li>
              <div className="product">
                <img class="product-image" src="/images/products/food-basket.jpg" alt="" />
                <div class="product-name">
                  <a href="product.html">Vegitables</a>
                </div>
                <div class="product-brand">
                  SBYkart
                            </div>
                <div class="prduct-price">475 Rs.</div>
                <div class="product-rating">
                  4.5 Stars(20 reviews)
                </div>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <footer class="footer">
        SBYkart.com, All right reserved. Powered by SBY Technocrates India LLP.
        </footer>
    </div>

  );
}

export default App;
