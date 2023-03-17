import React from 'react'

function Banner(props) {
    return (
        <>
            <div id="banner" style={{ backgroundImage: `url(${props.image})` }}>
                <div id="sub-banner" className="d-flex align-items-center">
                    <div id="main2" className="text-light w-100">
                        <h1 className="mt-4 text-center" style={{ fontSize:`${props.fs}` }}>{props.title}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;