import React, { useEffect, useState } from 'react';
import image from '../images/mountain-bike.jpeg';
import Banner from '../Components/Banner';
import { useCart } from "react-use-cart";
import { NavLink } from 'react-router-dom';
import swal from 'sweetalert2';
import Success from '../Components/Success';






function Checkout() {

  // this is only required for form validation demo
  useEffect(()=> {
    // alert("Enter 'First Name' only !");
      window.scrollTo(0, 0);
    },[]);

  const login = localStorage.getItem("loggedin");
  const [state, setState]  = useState(false);

  let product_total = 0;
  let subtotal = 0

  const {
    isEmpty,
    items,
  } = useCart();


  const validate = () => {

    let form = document.getElementById('checkout-form');

    if (form.checkValidity() === false) {

      form.reportValidity();
      swal.fire({
        title: "Please fill all reuired fields !",
        // html:"<b>Please fill out all reuired fields !</b>",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
        customClass: 'sweet',
      });
    }

    else {

     setState(true);
    }

  }


  if (isEmpty) {

    return (
      <>
        <Banner image={image} title="Checkout" fs="5rem" />
        <div id="main5" style={{ height: "auto" }} className="p-5 mx-auto ">
          <div className='container row mx-auto p-5' style={{ background: "white" }}>
            <h2>Checkout</h2>
            <hr />

            <div>
              <p className='fw-bold'>Your cart is currently empty</p>

              <div className='mx-0'>

                <NavLink to="/shop">
                  <button type="button" className="btn text-white btn-lg rounded-0 mx-auto my-2">Shop Now</button>
                </NavLink>

              </div>
            </div>
          </div>
        </div>

      </>
    )
  }

  return (
    <>
      <Banner image={image} title="Checkout" fs="5rem" />

      <div id="main5" style={{ height: "auto" }} className="p-3 p-md-5 mx-auto ">
        <div className='container row mx-auto p-3 p-md-5' style={{ background: "white" }}>
          <h2>Checkout</h2>
          <hr />
          <div className='col-12 col-lg-7'>
            <h4 className='my-3'>Billing Details</h4>
            <hr />

            <form id="checkout-form">
              <div className='row'>
                <div className='d-inline col-12 col-md-6'>
                  <label for="exampleFormControlInput1" className="form-label fw-bold mb-0">First Name<span className='text-danger'> *</span></label><br />
                  <input style={{ height: "3rem" }} type="text" className=" d-inline rounded-0 me-3 form-control mt-1 mb-3" id="exampleFormControlInput1" required />
                </div>

                <div className='d-inline col-12 col-md-6'>
                  <label for="exampleFormControlInput2" className="form-label fw-bold mb-0">Last Name<span className='text-danger'> *</span></label><br />
                  <input style={{ height: "3rem" }} type="text" className=" d-inline rounded-0 me-0 form-control mt-1 mb-3" id="exampleFormControlInput2" />
                </div>

              </div>

              <div className='col-12'>
                <label for="exampleFormControlInput3" className="form-label fw-bold mb-0">Company Name(Optional)</label><br />
                <input style={{ height: "3rem" }} type="text" className=" d-inline rounded-0 me-0 form-control mt-1 mb-3" id="exampleFormControlInput3" />
              </div>

              <div className='col-12'>
                <label for="exampleFormControlInput4" className="form-label fw-bold mb-0">Country/Region<span className='text-danger'> *</span></label><br />
                <input style={{ height: "3rem" }} type="text" className=" d-inline rounded-0 me-0 form-control mt-1 mb-3" id="exampleFormControlInput4" value="India" disabled />
              </div>

              <div className='col-12'>
                <label for="exampleFormControlInput5" className="form-label fw-bold mb-0">Street Address<span className='text-danger'> *</span></label><br />
                <input style={{ height: "3rem" }} type="text" className=" d-inline rounded-0 me-0 form-control mt-1 mb-3" id="exampleFormControlInput5" placeholder='House number and street name' />
              </div>

              <div className='col-12'>

                <input style={{ height: "3rem" }} type="text" className=" d-inline rounded-0 me-0 form-control mt-1 mb-3" id="exampleFormControlInput5" placeholder='Apartment, block' />
              </div>

              <div className='col-12'>
                <label for="exampleFormControlInput6" className="form-label fw-bold mb-0">Town/City<span className='text-danger'> *</span></label><br />
                <input style={{ height: "3rem" }} type="text" className=" d-inline rounded-0 me-0 form-control mt-1 mb-3" id="exampleFormControlInput6" />
              </div>

              <div className='col-12'>
                <label for="exampleFormControlInput7" className="form-label fw-bold mb-0">State<span className='text-danger'> *</span></label><br />
                <input style={{ height: "3rem" }} type="text" className=" d-inline rounded-0 me-0 form-control mt-1 mb-3" id="exampleFormControlInput7" />
              </div>

              <div className='col-12'>
                <label for="exampleFormControlInput8" className="form-label fw-bold mb-0">ZIP Code<span className='text-danger'> *</span></label><br />
                <input style={{ height: "3rem" }} type="number" pattern="[0-9]{6}" className=" d-inline rounded-0 me-0 form-control mt-1 mb-3" id="exampleFormControlInput8" />
              </div>

              <div className='col-12'>
                <label for="exampleFormControlInput9" className="form-label fw-bold mb-0">Phone<span className='text-danger'> *</span></label><br />
                <input style={{ height: "3rem" }} type="number" pattern="[0-9]{10}" className=" d-inline rounded-0 me-0 form-control mt-1 mb-3" id="exampleFormControlInput9" />
              </div>

              <div className='col-12'>
                <label for="exampleFormControlInput10" className="form-label fw-bold mb-0">Email Address<span className='text-danger'>*</span></label><br />
                <input style={{ height: "3rem" }} type="email" className=" d-inline rounded-0 me-0 form-control mt-1 mb-3" id="exampleFormControlInput10" />
              </div>

              <div className='col-12'>
                <label for="exampleFormControlInput10" className="form-label fw-bold mb-0">Order Notes(Optional)</label><br />
                <textarea rows='4' type="text" className=" d-inline rounded-0 me-0 form-control mt-1 mb-3" id="exampleFormControlInput10" />
              </div>
            </form>

          </div>

          <div className='col-12 col-lg-5 p-3'>
            <div className='border border-2 rounded-0 p-3'>
              <h4 className='my-3'>Your Order</h4>
              <hr className='border-1' />

              <div className='d-flex border-bottom border-1 px-1 '>
                <p className='col fw-bold'>Product</p>
                <p className='col fw-bold text-end'>Subtotal</p>
              </div>

              {
                items.map((element) => {

                  product_total = (parseFloat(element.value) * element.quantity);

                  subtotal += product_total;

                  product_total = product_total.toLocaleString('en-IN', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  });

                  return (
                    <>
                      <div className='d-flex border-bottom border-1 px-1 py-2'>
                        <p className='col fw-normal mb-1'>{element.title} &nbsp; <b className='fs-6'>x{element.quantity}</b></p>
                        <p className='col fw-normal text-end mb-1'>Rs.{product_total}</p>
                      </div>

                    </>

                  )
                }
                )}

              <div className='d-flex border-bottom border-1 px-1 py-3 '>
                <p className='col fw-bold mb-1 fs-5'>Total</p>
                <p className='col fw-bold text-end mb-1 fs-5'>Rs.{subtotal.toLocaleString('en-IN', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}</p>
              </div>

              {login == 1 &&
                <div className='mx-2'>

                  {/* <NavLink to="/checkout"> */}
                  <button type="button" onClick={validate} className="btn text-white btn-lg btn-block w-100 rounded-0 mx-auto my-2">Place Order</button>
                  {/* </NavLink> */}

                </div>
              }

              {login != 1 &&

                <div className='mx-2'>
                  {/* <NavLink to="/checkout"> */}
                  <span data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <button type="button" className="btn text-white btn-lg btn-block w-100 rounded-0 mx-auto my-2">Login to Proceed</button></span>
                  {/* </NavLink> */}

                </div>

              }

            </div>

          </div>

        </div>

      </div>

     <Success state={state}/>

    </>
  )
}

export default Checkout;