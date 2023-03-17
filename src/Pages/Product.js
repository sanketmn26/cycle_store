import { useEffect, React } from 'react'
import image from '../images/mountain-bike.jpeg';
import Banner from '../Components/Banner';
import { data } from '../data';
import { useParams } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import ProductCard from '../Components/ProductCard';
import swal from 'sweetalert2';




function Product() {

  const {addItem} = useCart();
  const params = useParams();
  const data1 = data[params.id - 1];


  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <>
      <Banner image={image} title={data1.title} fs="60px" />
      <div className='row container-fluid py-5 mx-auto' style={{ width: "100%", backgroundColor: "#dfdfdf" }}>
        <div className="row container mx-auto px-3 py-3 px-lg-5 py-lg-5" style={{ width: "95%", backgroundColor: "white" }}>



          {/* Image carousal */}
          <div id="carouselExampleIndicators" className="col-12 col-lg-8 carousel slide mx-auto mb-lg-2 mb-5">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner" >
              <div className="carousel-item active">
                <img src={data1.img[0]} className="d-block mx-auto" style={{ height: "400px", objectFit: "contain" }} alt="..." />
              </div>
              <div className="carousel-item">
                <img src={data1.img[1]} className="d-block mx-auto" style={{ height: "400px", objectFit: "contain" }} alt="..." />
              </div>
              <div className="carousel-item">
                <img src={data1.img[2]} className="d-block mx-auto" style={{ height: "400px", objectFit: "contain" }} alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          {/* Information section */}
          <div className='col-12 col-lg-4 px-1'>
            <b className="text-secondary">{data1.category} Bike</b>
            <h2 className="card-title">{data1.title}</h2>
            <div className='my-3'>
              <p className="card-text text-dark d-inline" style={{fontWeight:"900", color:"#4b4f58", fontSize: "30px" }}> Rs.{data1.price} </p>
              <b className='text-dark'> & free shipping</b>
            </div>
            <p className='fw-bold'>{data1.descripton}</p>
            <h4 className="lh-4 mt-4 mb-3">Specifications :</h4>
            <p className="lh-1 mb-2 fw-bold"><i class="fa-solid fa-record-vinyl"></i>&nbsp; &nbsp;{data1.specs[0]}</p>
            <p className="lh-1 mb-2 fw-bold"><i class="fa-solid fa-record-vinyl"></i>&nbsp; &nbsp;{data1.specs[1]}</p>
            <p className="lh-1 mb-2 fw-bold"><i class="fa-solid fa-record-vinyl"></i>&nbsp; &nbsp;{data1.specs[2]}</p>
            <p className="lh-1 mb-2 fw-bold"><i class="fa-solid fa-record-vinyl"></i>&nbsp; &nbsp;{data1.specs[3]}</p>
            <button className='btn rounded-0 text-light btn-lg my-3' onClick={() => {addItem(data1);
            swal.fire({
              title: "Added to cart!",
              icon: "success",
              iconColor:"#AD198D",
              showConfirmButton: false,
              timer:1100,
              customClass:'sweet',
          });
            
            }}>Add to Cart</button>


          </div>

        <div className="row mt-5 px-0 mx-auto">
            <h3 className='text-md-start text-center'>Related Products</h3>
            {
              data.map((element)=>{
                if(data1.category==element.category)
                {
                  return(
                  <ProductCard product={element}/>
                  );
                }
              })
            }
        </div>
        </div>
      </div>
    </>
  )
}

export default Product