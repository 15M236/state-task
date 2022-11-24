import { useContext , React } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context";
import './Style.css';

export default function NavBar() {
  const context = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >NavBar
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#!">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                About
              </a>
            </li>
            <li className="nav-item dropdown"></li>
          </ul>
          <form className="d-flex">
            <button
              onClick={() => navigate("/cartList")}
              className="btn btn-outline-dark"
              type="submit"
            >
              <i className="bi-cart-fill me-1"></i>
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">
                {context.cartList.length}
              </span>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
