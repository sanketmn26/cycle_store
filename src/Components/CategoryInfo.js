import React from 'react';
import { NavLink } from 'react-router-dom';

function CategoryInfo(props) {
    return (
        <>
           <div id="main3" style={{backgroundImage:`url(${props.img})`}}>
                <div id="sub-main3" className="d-flex align-items-center">
                    <div id="main2" className="text-light col-lg-7 col-md-8 col-sm-10 col-12">
                        <h3 className="text-light my-3">Discover The Collection</h3>
                        <h2 className="lh-1 my-3" style={{ fontSize: "60px" }}>{props.info.type} Bikes</h2>
                        <p className="lh-5 my-4">{props.info.description}</p>
                        <p className="lh-1 mb-3"><i className="fa-solid fa-record-vinyl"></i>&nbsp; &nbsp;{props.info.specs[0]}</p>
                        <p className="lh-1 mb-3"><i className="fa-solid fa-record-vinyl"></i>&nbsp; &nbsp;{props.info.specs[1]}</p>
                        <p className="lh-1 mb-3"><i className="fa-solid fa-record-vinyl"></i>&nbsp; &nbsp;{props.info.specs[2]}</p>
                        <NavLink to={{ pathname: `/shop/${props.info.type.toLowerCase()}`}}><button type="button my-4" value={props.category} className="btn btn-lg rounded-1 text-light my-4">Explore</button></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryInfo