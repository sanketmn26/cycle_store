import React from 'react';
import { NavLink } from 'react-router-dom';
import { CartProvider, useCart } from "react-use-cart";
import CartCard from './CartCard';

function Cart() {

    const {
        isEmpty,
        items,
        totalUniqueItems
    } = useCart();

    let subtotal = 0;
    let subtotal_format="";

    if (isEmpty) {
        return (
            <>
                {/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button> */}

                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header px-2 py-3">
                        <p className="offcanvas-title text-dark fw-bold" id="offcanvasRightLabel">Shopping Cart</p>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <hr className='lh-1 mt-0' />
                    <div className="offcanvas-body d-flex align-items-center justify-content-center px-2">
                        <div id="cart-card ">
                            <p><b>Your cart is empty</b></p>
                        </div>
                    </div>
                </div>
            </>
        )
    }


    return (
        <>
            {/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button> */}

            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header px-2 py-3">
                    <p className="offcanvas-title text-dark fw-bold" id="offcanvasRightLabel">Shopping Cart ({totalUniqueItems})</p>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <hr className='lh-1 mt-0' />
                <div className="offcanvas-body px-2">

                    {items.map((element) => {

                        subtotal += parseFloat(element.value)*element.quantity;

                        // Conver number in comma format like Rs.300000 to Rs.3,00,000
                        subtotal_format = subtotal.toLocaleString('en-IN', {minimumFractionDigits: 2,
                        maximumFractionDigits: 2,})

                        return (
                            <>
                                <div id="cart-card">
                                   <CartCard element={element}/>
                                </div>
                            </>
                        );
                    })}

                </div>
                <div>
                    <hr />
                    <span><p className="offcanvas-title text-dark fw-bold px-2 d-inline-block" id="offcanvasRightLabel">Subtotal :</p></span>
                    <span className=''><p className='d-inline-block mb-0 fw-bold text-end col-lg-9 col-8'>Rs. {subtotal_format} </p></span>
                    <hr />
                    <div className='mx-2'>
                        <NavLink to="/checkout"><button type="button" data-bs-dismiss="offcanvas" class="btn text-white btn-lg btn-block w-100 rounded-0 mx-auto my-2">CHECKOUT</button></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;