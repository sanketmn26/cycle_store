import React from 'react';
import { useCart } from "react-use-cart";


function CartCard(props) {

    const { removeItem, updateItemQuantity } = useCart();
    return (
        <>
            <div className="card mb-3" style={{ width: "100%" }}>
                <div className="row g-0">
                    <div className="col-md-4 py-2 px-1" style={{ width: "25%" }}>
                        <img src={props.element.img[0]} className="img-fluid rounded-start my-1" alt="..." />
                    </div>
                    <div className="col-md-8 col-sm-7 col-8">
                        <div className="card-body py-1 px-2">
                            <h6 className="card-title">{props.element.title}</h6>
                            <b className="card-text text-dark" style={{ fontSize: "13px" }}>Rs.{props.element.price} &nbsp;X &nbsp;
                                <span className='text-dark border border-secondary px-1 py-1'>
                                    <span className='mx-1' onClick={() => updateItemQuantity(props.element.id, props.element.quantity + 1)}><i class="fa-solid fa-plus quantityUpdate"></i></span>
                                    <span className='mx-2'>{props.element.quantity}</span>
                                    <span className='mx-1' onClick={() => updateItemQuantity(props.element.id, props.element.quantity - 1)}><i class="fa-solid fa-minus quantityUpdate"></i></span>
                                </span>
                            </b>

                        </div>
                    </div>
                    <div className='col py-4 d-flex align-items-center justify-content-center'>
                        <i onClick={() => removeItem(props.element.id)} class="fa-regular fa-circle-xmark fs-5 text-danger py-1"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartCard