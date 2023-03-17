import React, {useEffect} from 'react';
import image from '../images/about-movie.jpeg';
import Banner from '../Components/Banner';


function Contact() {

  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <>
      <Banner image={image} title="Contact Us" fs="5rem" />

      <div className='mb-3'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2102830207837!2d73.87470671420405!3d18.519397174045196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1fc99add0e7%3A0x525237c24b315be3!2sDecathlon%20SGS%20Mall!5e0!3m2!1sen!2sin!4v1678293306853!5m2!1sen!2sin" style={{ width: "100%", height: "25rem", border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>


      <div className='container-fluid mx-auto py-5 mb-3' style={{ height: "auto" }}>

        <div className='row'>
          <div className='col-8 col-lg col-md-5 col-sm-5 my-4 mx-auto text-center'>
            <h4 style={{ color: "#AD198D" }}><i class="fa-solid fa-truck"></i></h4>
            <h4 className='text-dark'>1800 755 6021</h4>
            <b className='text-secondary'>Sales Related Enquiries</b>
          </div>
          <div className='col-8 col-lg col-md-5 col-sm-5 my-4 mx-auto text-center'>
            <h4 style={{ color: "#AD198D" }}><i class="fa-solid fa-toolbox"></i></h4>
            <h4 className='text-dark'>1800 755 6022</h4>
            <b className='text-secondary'>Service Related Enquiries</b>
          </div>
          <div className='col-8 col-lg col-md-5 col-sm-5 my-4 mx-auto text-center'>
            <h4 style={{ color: "#AD198D" }}><i class="fa-solid fa-store"></i></h4>
            <h4 className='text-dark'>1800 755 6023</h4>
            <b className='text-secondary'>Dealership Related Enquiries</b>
          </div>
          <div className='col-8 col-lg col-md-5 col-sm-5 my-4 mx-auto text-center'>
            <h4 style={{ color: "#AD198D" }}><i class="fa-solid fa-envelope"></i></h4>
            <h4 className='text-dark'>support@cycle-shop.com</h4>
            <b className='text-secondary'>Reach Out To Us Via Email</b>
          </div>
        </div>

      </div>

      <div id="main6" className="py-5 mx-auto ">

        <div className='row container mx-auto'>
        <div className='col-12 col-lg-6 container p-5' style={{ backgroundColor: "white" }}>
          <h2>Lets Get In Touch</h2>
          <div class="my-3">
            <div className='row mx-auto'>
            <input style={{ height: "3rem", backgroundColor: "whitesmoke" }} type="text" className="col-10 col-md col-lg d-inline rounded-0 me-md-2 form-control my-3" id="exampleFormControlInput1" placeholder="First Name" />

            <input style={{ height: "3rem", backgroundColor: "whitesmoke" }} type="text" className="col-10 col-md col-lg d-inline rounded-0 form-control my-3" id="exampleFormControlInput1" placeholder="Last Name" />

            </div>

            <input style={{ height: "3rem", backgroundColor: "whitesmoke" }} type="email" className="col-12 col-lg rounded-0  form-control my-3" id="exampleFormControlInput1" placeholder="Enter email address" />

            <textarea style={{ backgroundColor: "whitesmoke" }} rows="8" className=" rounded-0 me-3 form-control my-3" id="exampleFormControlInput1" placeholder="Enter your message" />

            <input style={{ height: "3rem", backgroundColor: "whitesmoke" }} type="button" className="btn rounded-0 me-3 form-control w-50 my-3 text-white" id="exampleFormControlInput1" value="SEND MESSAGE" />
          </div>
        </div>

        <div className='col container p-lg-5 my-5 mx-2 my-sm-5 mx-sm-5 mb-0 mb-sm-0 mb-md-0'>
        <h2>Contact Details</h2>

        <div className='col my-5'>
        <h4 >Our Hours</h4>
        <b className='text-dark'>10:00 AM – 22.00 PM</b><br/>
        <b className='text-dark'>Monday – Friday</b>
        </div>

        <div className='col my-5'>
        <h4>Location</h4>
        <b className='text-dark'>Cycle-Shop, Pune, 411041 India</b>
        </div>

        <div className='col my-5'>
        <h4>Contact Us</h4>
        <b className='text-dark'>Phone: 1800 755 6020</b><br/>
        <b className='text-dark'>Email: support@cycle-shop.com</b>
        </div>



        </div>

        </div>
      </div>

    </>

  )
}

export default Contact;