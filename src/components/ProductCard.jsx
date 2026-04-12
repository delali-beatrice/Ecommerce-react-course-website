import {Link} from "react-router-dom"
import { useCart } from "../context/CartContext";

function ProductCard ({product}) {
    const {addToCart, cartItems} = useCart();
    const productInCart = cartItems.find((item) => item.id === product.id);

    const productQuantityLabel = productInCart 
        ? `(${productInCart.quantity})` 
        : "";
    return (
        <div>
            <div className="product-card">
                <img 
                    alt={product.name}
                    src={product.image} 
                    className="product-card-image"
                />
                    <div className="product-card-content">
                        <h3 className="product-card-name">{product.name}</h3>
                        <p className="product-card-price">${product.price}</p>
                        <div className="product-card-actions">
                            <Link className="btn btn-secondary" to={`/products/${product.id}`}>
                                View Details
                            </Link>
                            <button 
                                className="btn btn-primary" 
                                onClick={() => addToCart(product.id)}
                            >
                                Add to Cart {productQuantityLabel}
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default ProductCard;