import React from 'react';
import './App.css';
// import data from './data'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import ProductScreen from './components/ProductScreen';
import Footer from './components/Footer';
function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add('open');
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove('open');
  }
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>
              &#9776;
                </button>
            <Link to="/" >SBYkart</Link>
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
              <a className="menuItems" href={``}>Slipper</a>
            </li>
            <li>
              <a className="menuItems" href={``}>Notebooks</a>
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

          <h3>Contact Us</h3>
          <ul>
            <li>
              <a className="menuItems" href="tel:9960922747">+91-9960922747</a>

            </li>
            <li>
              <a className="menuItems" id="mailId" href="mailto:anilyadav@sbytechnocratesindia.com">anilyadav@sbytechnocratesindia.com</a>
            </li>
          </ul>
        </aside>


        <main className="main">
          <div className="content">
            <Route path="/product/:id" component={ProductScreen} />
            <Route path='/' exact={true} component={HomeScreen} />

          </div>
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
