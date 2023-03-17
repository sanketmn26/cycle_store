import React from 'react'
import { NavLink } from 'react-router-dom';
import { useCart } from "react-use-cart";
import swal from 'sweetalert2';


function ProductCard(props) {

    const { addItem } = useCart();

    return (
        <>
            <div className="card col-3 border-0 mb-5 pcard" style={{ height: "22.5rem", width: "18rem" }}>
                <NavLink to={{ pathname: `/product/${props.product.id}` }}><img src={props.product.img[0]} className="card-img-top" alt="..." style={{ width: "250px", height: "200px", objectFit: "contain" }} /></NavLink>
                <div className="card-body position-relative">
                    <b className="text-secondary">{props.product.category} Bike</b>
                    <div className='h-10'>
                        <NavLink to={{ pathname: `/product/${props.product.id}` }} className="card-link"><h6 className="card-title" style={{ fontSize: "1.3rem" }}>{props.product.title}</h6></NavLink>
                    </div>
                    <b className="card-text text-dark">Rs.{props.product.price}</b>
                    <div className='position-absolute bottom-0'>
                        <NavLink to={{ pathname: `/product/${props.product.id}` }}><button className='btn rounded-0 text-light btn-sm fs-6 me-2'>Know More</button></NavLink>
                        <button className='btn rounded-0 text-light fs-6 btn-sm' onClick={() => {
                            addItem(props.product
                            );
                            swal.fire({
                                title: "Added to cart !",
                                icon: "success",
                                iconColor:"#AD198D",
                                showConfirmButton: false,
                                timer:1100,
                                customClass:'sweet',
                            });
                        }}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard;