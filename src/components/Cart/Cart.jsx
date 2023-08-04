import "./Cart.scss";
import { useContext } from "react";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import { Context } from "../../utils/context";

const Cart = ({ setShowCart }) => {
    const { cartItems, cartSubtotal } = useContext(Context);
    return (
        <div className="cart-panel">
            <div className="opac-layer" onClick={() => setShowCart(false)}></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Panier</span>
                    <span className="close-btn" onClick={() => setShowCart(false)}>
                        <MdClose />
                        <span className="text">Fermer</span>
                    </span>
                </div>

                {!cartItems?.length && (<div className="empty-cart">
                    <BsCartX />
                    <span>Aucun produit dans le panier.</span>
                    <button className="return-cta">Retour à la boutique</button>
                </div>)}

                {!!cartItems?.length && (<>
                    <CartItem />
                    <div className="cart-footer">
                        <div className="subtotal">
                            <span className="text">Total :</span>
                            <span className="text total">{cartSubtotal}&euro;</span>
                        </div>
                        <div className="button">
                            <button className="checkout-cta">Valider</button>
                        </div>
                    </div>
                </>)}
            </div>
        </div>
    );
};

export default Cart;
