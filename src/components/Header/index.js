// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="header-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="header-logo"
      />
      <div className="nav-links-card">
        <li className="nav-link-text">Home</li>
        <li className="nav-link-text">Products</li>
        <li className="nav-link-text">Cart</li>
        <button className="logout-button" type="button">
          Logout
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
        className="logout-img"
      />
    </div>

    <div className="icons-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="nav home"
        className="icon-img"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="nav products"
        className="icon-img"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
        className="icon-img"
      />
    </div>
  </nav>
)
export default Header
