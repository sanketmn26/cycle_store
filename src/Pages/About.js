import React, {useEffect} from 'react';
import { data } from '../data';
import { NavLink } from 'react-router-dom';
import img from '../images/mountain-bike.jpeg';
import img2 from '../images/bicycle-2.jpeg';
import poster from '../images/about-movie.jpeg';
import img2002 from '../images/2002.jpeg';
import img2004 from '../images/2004.jpeg';
import img2005 from '../images/2005.jpeg';
import img20052 from '../images/2005-2.jpeg';
import img2008 from '../images/2008.jpeg';
import imgtoday from '../images/today.jpeg';
import video from '../videos/CAAD13_Race_Bikes.mp4';



function About() {

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <>

      <div className='my-0' id="banner" style={{ height: "auto", backgroundImage: `url(${img})` }}>
        <div id="sub-banner" style={{ height: "auto" }} className="py-5">
          <div id="main2" className="text-light w-100">
            <h1 className="mt-4 text-center py-5 text-light" style={{ fontSize: `95px` }}>Who We Are</h1>
          </div>

          <div className='w-100 d-flex justify-content-center'>
            <video className='about-vdo' style={{ width: "70%" }} loop controls poster={poster} >
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <div className=" main4 mb-5 pt-2">
        <h1 className="my-5 text-center" style={{ fontSize: "70px" }}>Explore the stories</h1>

        {/* Row 1 images */}

        <div className="row container-lg mx-auto text-light px-0 py-0">

          <div className='col-12 col-md-4 ps-lg-0 ps-md-2'>

            <div className="col about position-relative mx-auto px-0" style={{ height: "14rem", backgroundImage: `linear-gradient(to bottom, rgba(15, 15, 15, 0.5) 20%, rgb(22, 22, 22) 90%),url(${img2002})` }}>
              <div className="position-absolute bottom-0 pb-3 px-3">
                <h4>Get on & Go!</h4>
                <h4 style={{color:"#AD198D"}}>2002</h4>
              </div>
              <div className="position-absolute overlay">
                <div className="position-absolute bottom-0 pb-3 px-3">
                  <h4>Get on & Go!</h4>
                  <h4 style={{color:"#AD198D"}}>2002</h4>
                </div>
              </div>
            </div>

            <div className="col about position-relative mx-auto px-0 mt-3" style={{ height: "14rem", backgroundImage: `linear-gradient(to bottom, rgba(15, 15, 15, 0.5) 20%, rgb(22, 22, 22) 90%),url(${img2004})` }}>
              <div className="position-absolute bottom-0 pb-3 px-3">
                <h4>First Garage & Shop</h4>
                <h4 style={{color:"#AD198D"}}>2004</h4>
              </div>
              <div className="position-absolute overlay">
                <div className="position-absolute bottom-0 pb-3 px-3">
                  <h4>First Garage & Shop</h4>
                  <h4 style={{color:"#AD198D"}}>2004</h4>
                </div>
              </div>
            </div>
          </div>

          <div className=' col-md-8 col-12 px-lg-0 pe-md-2 mt-3 mt-md-0'>
            <div className="col about position-relative mx-auto px-0" style={{ height: "29rem", backgroundImage: `linear-gradient(to bottom, rgba(15, 15, 15, 0.5) 20%, rgb(22, 22, 22) 90%),url(${img2005})` }}>
              <div className="position-absolute bottom-0 pb-3 px-3">
                <h4>First Cycle Launched</h4>
                <h4 style={{color:"#AD198D"}}>2005</h4>
              </div>
              <div className="position-absolute overlay">
                <div className="position-absolute bottom-0 pb-3 px-3">
                  <h4>First Cycle Launched</h4>
                  <h4 style={{color:"#AD198D"}}>2005</h4>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Row 2 images */}
        <div className="row container-lg mx-auto text-light px-0 mt-3">

          <div className='col-md-8 col-12 '>
            <div className="col about position-relative mx-auto px-0" style={{ height: "29rem", backgroundImage: `linear-gradient(to bottom, rgba(15, 15, 15, 0.5) 20%, rgb(22, 22, 22) 90%),url(${img20052})` }}>
              <div className="position-absolute bottom-0 pb-3 px-3">
                <h4>First #GoEcoBiking Event
                </h4>
                <h4 style={{color:"#AD198D"}}>2005</h4>
              </div>
              <div className="position-absolute overlay">
                <div className="position-absolute bottom-0 pb-3 px-3">
                  <h4>First #GoEcoBiking Event</h4>
                  <h4 style={{color:"#AD198D"}}>2005</h4>
                </div>
              </div>
            </div>
          </div>

          <div className='px-lg-0 pe-md-2 col-12 col-md-4 ps-lg-0 ps-md-2 mt-3 mt-md-0'>

            <div className="col about position-relative mx-auto px-0" style={{ height: "14rem", backgroundImage: `linear-gradient(to bottom, rgba(15, 15, 15, 0.5) 20%, rgb(22, 22, 22) 90%),url(${img2008})` }}>
              <div className="position-absolute bottom-0 pb-3 px-3">
                <h4>100+ Service Networks</h4>
                <h4 style={{color:"#AD198D"}}>2008</h4>
              </div>
              <div className="position-absolute overlay">
                <div className="position-absolute bottom-0 pb-3 px-3">
                  <h4>100+ Service Networks</h4>
                  <h4 style={{color:"#AD198D"}}>2008</h4>
                </div>
              </div>
            </div>

            <div className="col about position-relative mx-auto px-0 mt-3" style={{ height: "14rem", backgroundImage: `linear-gradient(to bottom, rgba(15, 15, 15, 0.5) 20%, rgb(22, 22, 22) 90%),url(${imgtoday})` }}>
              <div className="position-absolute bottom-0 pb-3 px-3">
                <h4>50+ Models & Accessories</h4>
                <h4 style={{color:"#AD198D"}}>Today</h4>
              </div>
              <div className="position-absolute overlay">
                <div className="position-absolute bottom-0 pb-3 px-3">
                  <h4>50+ Models & Accessories</h4>
                  <h4 style={{color:"#AD198D"}}>Today</h4>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div className='container-xl mx-auto px-0 pt-1 pb-3 mb-5'>
        <h1 className="my-5 text-center" style={{ fontSize: "70px" }}>Our Process</h1>

        <div className='row'>
          <div className='col-8 col-md-5 col-lg-3 mt-lg-1 my-3 mx-auto'>
            <h4 style={{color:"#AD198D"}}>01.</h4>
            <h4 className='text-dark'>Research</h4>
            <b className='text-secondary'>Our company continually develops and adds new features that the customer values.</b>
          </div>
          <div className='col-8 col-md-5 col-lg-3 mt-lg-1 my-3 mx-auto'>
            <h4 style={{color:"#AD198D"}}>02.</h4>
            <h4 className='text-dark'>Idea & Concept</h4>
            <b className='text-secondary'>Our company continually develops and adds new features that the customer values.</b>
          </div>
          <div className='col-8 col-md-5 col-lg-3 mt-lg-1 my-3 mx-auto'>
            <h4 style={{color:"#AD198D"}}>03.</h4>
            <h4 className='text-dark'>Design & Production​</h4>
            <b className='text-secondary'>One of the biggest benefits of our production strategy is its ability to produce custommade bicycles for customers.</b>
          </div>
          <div className='col-8 col-md-5 col-lg-3 mt-lg-1 my-3 mx-auto'>
            <h4 style={{color:"#AD198D"}}>04.</h4>
            <h4 className='text-dark'>Sales & Service</h4>
            <b className='text-secondary'>Strategy is to sale products from specialty bicycle store to provide better knowledge and services customers.</b>
          </div>
        </div>

      </div>


      {/* Bottom shop now featured bike */}
      <div id="main3" className="bottom-div1" style={{ backgroundImage: `url(${img2})` }}>
        <div id="sub-main3" className="bottom-div1 d-flex align-items-center">
          <div id="main2" className=" bottom-div w-75 text-light mx-auto text-center">
            <h3 className="text-light my-3 mx-auto text-center">The All New</h3>
            <h2 className="lh-1 my-3" style={{ fontSize: "60px" }}>{data[14].title}</h2>
            <p className="lh-5 my-4">{data[14].descripton}</p>
            <div className='mx-auto text-center'>
            {/* <p className="lh-1 mb-2"><i class="fa-solid fa-record-vinyl"></i>&nbsp; &nbsp;{data[14].specs[0]}</p>
            <p className="lh-1 mb-2"><i class="fa-solid fa-record-vinyl"></i>&nbsp; &nbsp;{data[14].specs[1]}</p>
            <p className="lh-1 mb-2"><i class="fa-solid fa-record-vinyl"></i>&nbsp; &nbsp;{data[14].specs[2]}</p> */}
            </div>
            <NavLink to={{ pathname: `/product/${data[14].id}` }}><button type="button" value={data[14].category} className="btn btn-lg rounded-1 text-light my-4">Shop Now</button></NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;