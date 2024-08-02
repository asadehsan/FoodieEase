import React, { useEffect, useState, useRef } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";

export default function Card(props) {
  const dispatch = useDispatchCart();
  const data = useCart();
  const priceRef = useRef();
  const options = props.options;
  const priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(priceOptions[0] || "");
  const [finalPrice, setFinalPrice] = useState(0);

  const handleAddToCart = async () => {
    let food = data.find(item => item.id === props.foodItem._id);

    if (food && food.size === size) {
      await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty });
    } else {
      await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size });
    }
  };

  useEffect(() => {
    setFinalPrice(qty * parseInt(options[size] || 0));
  }, [qty, size, options]);

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-inner">
          <div className="card-image-container">
            <img src={props.foodItem.img} alt="Food" className="card-image" />
          </div>
          <div className="card-content">
            <div className="card-title">{props.foodItem.name}</div>
            <div className="card-options">
              <div className="card-select-container">
                <select 
                  className="card-select" 
                  onChange={(e) => setQty(e.target.value)} 
                  value={qty}
                >
                  {Array.from(Array(6), (e, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
                </select>
              </div>
              <div className="card-select-container">
                <select 
                  className="card-select" 
                  ref={priceRef} 
                  onChange={(e) => setSize(e.target.value)} 
                  value={size}
                >
                  {priceOptions.map(data => <option key={data} value={data}>{data}</option>)}
                  {props.foodItem.name === "Starter" && !priceOptions.includes("Half") && <option value="half">Half</option>}
                  {props.foodItem.name === "Starter" && !priceOptions.includes("Full") && <option value="Full">Full</option>}
                  {props.foodItem.name === "Biryani/Rice" && !priceOptions.includes("Half") && <option value="half">Half</option>}
                  {props.foodItem.name === "Biryani/Rice" && !priceOptions.includes("Full") && <option value="Full">Full</option>}
                </select>
              </div>
              <div className="card-price">₹{finalPrice}/-</div>
            </div>
            <hr className="card-divider" />
            <button 
              className="card-button" 
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
