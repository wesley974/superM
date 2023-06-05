import {NavLink} from 'react-router-dom';

export default function Navbar({cart}) {
  const cartCount = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand">
        SuperM
      </NavLink>
      <ul>
        <li className="nav-item">
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about">
            About us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="nav-item nav-cart btn btn-accent">
            Cart ({cartCount})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
