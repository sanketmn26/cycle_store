import React from 'react';
import image from '../images/mountain-bike.jpeg';



function NoPage() {

  return (
    <>
      <div id="banner" style={{ height: "95vh", backgroundImage: `url(${image})` }}>
        <div id="sub-banner" className="text-center d-flex align-items-center">
          <div id="main2" className="text-light w-100">
            <h1 className="mt-4 text-center" style={{ fontSize: "100px" }}>404</h1>
            <h2>Oops! Page Not Found</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default NoPage;