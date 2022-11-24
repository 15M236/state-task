import { useContext , useState} from "react";
import { CartContext } from "../Context";
import './Style.css';
export default function Product(props) {
  const { category, price  } = props.value;
  const context = useContext(CartContext);
  const [flag , setFlag] = useState("enabled");

  return (
    
    <div className="col mb-5">
      <div className="card h-100">
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{category}</h5>
            {price}
          </div>
          <span><i class="far fa-star"></i></span>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button className="btn btn-outline-dark mt-auto" id="button-card" 
              onClick={() => {
                context.addToCart(props.value)
                setFlag("remove")
              } }
            >
              {flag}
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}
