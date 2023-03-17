
import { React, useEffect } from 'react';
import CategoryInfo from '../Components/CategoryInfo';
import { data, category } from '../data';
import cityBike from '../images/city-bike.jpg';
import roadBike from '../images/road-bike.jpeg';
import mountainBike from '../images/mountain-bike.jpeg';
import electricBike from '../images/electric-bike.jpg';
import specs1 from '../images/specs-1.jpeg';
import specs2 from '../images/specs-2.jpeg';
import specs3 from '../images/specs-3.jpeg';
import specs4 from '../images/specs-4.jpeg';
import specs5 from '../images/specs-5.jpeg';
import ProductCard from '../Components/ProductCard';
import img2 from '../images/bicycle-2.jpeg';
import video from '../videos/Topstone_Born_to_Roam.mp4';
import { NavLink } from 'react-router-dom';
import poster from '../images/video-poster.jpg';


function Home() {

    useEffect(() => {
        window.scrollTo(0, 0)
    })


    return (
        <>
            <div id="main" className="d-flex align-items-center">
                <div id="main2" className="text-light col-12 col-lg-6 col-md-6">
                    <h2 className="text-light mt-5">Newly Launched</h2>
                    <h1 className="lh-1" style={{ fontSize: "60px" }}>{data[14].title}</h1>
                    <h3 className="lh-5 mt-4 mb-3">Specifications :</h3>
                    <p className="lh-1 mb-2"><i class="fa-solid fa-record-vinyl"></i>&nbsp; &nbsp;{data[14].specs[0]}</p>
                    <p className="lh-1 mb-2"><i class="fa-solid fa-record-vinyl"></i>&nbsp; &nbsp;{data[14].specs[1]}</p>
                    <p className="lh-1 mb-2"><i class="fa-solid fa-record-vinyl"></i>&nbsp; &nbsp;{data[14].specs[2]}</p>
                    <NavLink to={{ pathname: `/product/${data[14].id}` }}><button type="button" value={data[14].category} className="btn btn-lg rounded-1 text-light my-4">Know More</button></NavLink>
                </div>
            </div>

            <div className="w-100 h-auto mb-4 pt-4">
                <h1 className="my-4 text-center" style={{ fontSize: "5rem" }}>New arrivals</h1>
                <div className="row container-fluid justify-content-center mx-auto">
                    {
                        data.map((element) => {
                            if (element.new == 1) {
                                return (
                                    <>
                                        <ProductCard product={element} />

                                    </>
                                )
                            }
                        })
                    }
                </div>
            </div>

            {/* passing props from "category" data */}
            <CategoryInfo img={roadBike} info={category[category.map(e => e.type).indexOf("Road")]} />
            <CategoryInfo img={mountainBike} info={category[category.map(e => e.type).indexOf("Mountain")]} />
            <CategoryInfo img={cityBike} info={category[category.map(e => e.type).indexOf("City")]} />
            <CategoryInfo img={electricBike} info={category[category.map(e => e.type).indexOf("Electric")]} />

            <div className="main4 mb-5 pt-4">
                <h1 className="my-5 text-center" style={{ fontSize: "70px" }}>Why Choose Us?</h1>

                <div className="row container-xl mx-auto text-light mx-auto ps-0 pe-0">
                    <div className="col-12 col-lg col-md specs position-relative mx-2 my-2 ps-0" style={{ height: "280px", backgroundImage: `linear-gradient(to bottom, rgba(15, 15, 15, 0.5) 20%, rgb(22, 22, 22) 90%),url(${specs1})` }}>
                        <div className="position-absolute bottom-0 pb-3 px-3">
                            <h3>Original Products</h3>
                            <p>Original products with pan India warranty. Fully fitted ready to ride
                                out of the box. Bicycle service at home.</p>
                        </div>

                        <div className="position-absolute overlay">
                            <div className='position-absolute bottom-0 pb-3 px-3'>
                                <h3>Original Products</h3>
                                <p>Original products with pan India warranty. Fully fitted ready to ride
                                    out of the box. Bicycle service at home.</p>
                            </div>
                        </div>

                    </div>



                    <div className="col-12 col-lg col-md specs position-relative mx-2 my-2 ps-0" style={{ height: "280px", backgroundImage: `linear-gradient(to bottom, rgba(15, 15, 15, 0.5) 20%, rgb(22, 22, 22) 90%),url(${specs2})` }}>
                        <div className="position-absolute bottom-0 pb-3 px-3">
                            <h3>Lifetime Warrenty</h3>
                            <p>Shop with confidence and get your bicycle delivered Fully Fitted Ready to Ride, right at your doorstep.</p>
                        </div>

                        <div className="position-absolute overlay">
                            <div className="position-absolute bottom-0 pb-3 px-3">
                                <h3>Lifetime Warrenty</h3>
                                <p>Shop with confidence and get your bicycle delivered Fully Fitted Ready to Ride, right at your doorstep.</p>
                            </div>

                        </div>

                    </div>
                </div>


                <div className="row container-xl mx-auto text-light mt-1 ps-0 pe-0">
                    <div className="col-12 col-lg col-md specs position-relative mx-2 my-2 ps-0" style={{ height: "180px", backgroundImage: `linear-gradient(to bottom, rgba(15, 15, 15, 0.5) 20%, rgb(22, 22, 22) 90%),url(${specs3})` }}>
                        <div className="position-absolute bottom-0 pb-3 px-3">
                            <h4>Biggest Service Network</h4>
                        </div>
                        <div className="position-absolute overlay">
                            <div className="position-absolute bottom-0 pb-3 px-3">
                                <h4>Biggest Service Network</h4>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 col-lg col-md specs position-relative mx-2 my-2 ps-0" style={{ height: "180px", backgroundImage: `linear-gradient(to bottom, rgba(15, 15, 15, 0.5) 20%, rgb(22, 22, 22) 90%),url(${specs4})` }}>
                        <div className="position-absolute bottom-0 pb-3 px-3">
                            <h4>99% Assembled Delivery</h4>
                        </div>
                        <div className="position-absolute overlay">
                            <div className="position-absolute bottom-0 pb-3 px-3">
                                <h4>99% Assembled Delivery</h4>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 col-lg col-md specs position-relative mx-2 my-2 ps-0" style={{ height: "180px", backgroundImage: `linear-gradient(to bottom, rgba(15, 15, 15, 0.5) 20%, rgb(22, 22, 22) 90%),url(${specs5})` }}>
                        <div className="position-absolute bottom-0 pb-3 px-3">
                            <h4>Free First Bike Service</h4>
                        </div>
                        <div className="position-absolute overlay">
                            <div className="position-absolute bottom-0 pb-3 px-3">
                                <h4>Free First Bike Service</h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div id="yt-video-div" className="pt-3 pb-5">
                <h1 className="mt-4 mb-5 text-center" style={{ fontSize: "70px" }}>Join #GoEcoBiking Programme</h1>
                <div className="container-fluid col-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10 mx-auto ">

                    <video id="yt-video" className='mx-auto' style={{ width: "100%" }} src={video} controls poster={poster} >
                    </video>

                </div>

            </div>

            {/* Bottom shop now featured bike */}
            <div id="main3" className="bottom-div1" style={{ backgroundImage: `url(${img2})` }}>
                <div id="sub-main3" className=" bottom-div1 d-flex align-items-center">
                    <div id="main2" className="bottom-div w-75 text-light mx-auto text-center">
                        <h3 className="text-light my-3 mx-auto text-center">The All New</h3>
                        <h2 className="lh-1 my-3" style={{ fontSize: "60px" }}>{data[14].title}</h2>
                        <p className="lh-5 my-4">{data[14].descripton}</p>
                        {/* <p className="lh-1 mb-2"><i class="fa-solid fa-record-vinyl"></i>&nbsp; &nbsp;{data[14].specs[0]}</p>
            <p className="lh-1 mb-2"><i class="fa-solid fa-record-vinyl"></i>&nbsp; &nbsp;{data[14].specs[1]}</p>
            <p className="lh-1 mb-2"><i class="fa-solid fa-record-vinyl"></i>&nbsp; &nbsp;{data[14].specs[2]}</p> */}
                        <NavLink to={{ pathname: `/product/${data[14].id}` }}><button type="button" value={data[14].category} className="btn btn-lg rounded-1 text-light my-4">Shop Now</button></NavLink>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home