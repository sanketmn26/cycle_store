import { React, useState, useEffect, useRef } from 'react'
import Banner from '../Components/Banner';
import image from '../images/mountain-bike.jpeg';
import { data } from "../data";
import ProductCard from '../Components/ProductCard';
import { useParams, useNavigate } from 'react-router-dom';
import swal from 'sweetalert2';




function Shop() {

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  let params = useParams();

  let title = "All Bikes";
  let arr = [];
  let data1 = data;


  // below code is to render component when the URL parameter changes
  if (params.category != null) {
    data.map((element) => {
      if (params.category == element.category.toLowerCase()) {
        arr.push(element);

        title = element.category + " Bikes";
      }
    })
    data1 = arr;
  }

  // after change of parameter state changes with the help of useEffect
  useEffect(() => { setCate(data1); setTtl(title) }, [params.category]);


  const [cate, setCate] = useState(data1);
  const [ttl, setTtl] = useState(title)





  // function to list bicycles by search term
  const search_term = (event) => {
    event.preventDefault();

    let arr = [];
    let term = document.getElementById('search').value.trim();

    if (term != "") {

      title = `Results for "${term}"`;
      data.map((element) => {
        if (element.category.toLowerCase().search(term.toLowerCase()) != -1 || element.title.toLowerCase().search(term.toLowerCase()) != -1) {
          arr.push(element);

        }
      })

    }

    else if (term == "") {
      title = "All Bikes";
      arr = data;
    }


    setTtl(title);
    setCate(arr);

  }


  // function to filter by price

  const price_filter = () => {
    let arr = [];
    let min = document.getElementById('min').value;
    let max = document.getElementById('max').value;
    
    if (min == "Min" || max == "Max") {
      return;
    }
    
    title = `All Bikes in Rs.${min} to ${max}`;
    
    data.map((element) => {
      if (element.value >= parseInt(min) && element.value <= parseInt(max)) {
        arr.push(element);
      }
    })
    setCate(arr);
    setTtl(title);

    swal.fire({
      title: "Filter applied !",
      icon: "success",
      iconColor: "#AD198D",
      showConfirmButton: false,
      timer: 1000,
      customClass: 'sweet',
    });

  }



  // function to list bicycles by category
  const select_Category = () => {
    let radios = document.getElementsByName("flexRadioDefault");
    let arr = [];
    let checked = 0;
    
    
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        checked = 1;
        title = radios[i].value;
        break;
      }
      
      else if (!(radios[i].checked)) {
        title = "All Bikes";
        setTtl(title);
      }
    }
    
    if (checked == 1) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].category == title) {
          arr.push(data[i]);
        }
      }
      setCate(arr);
      setTtl(title + " Bikes");
      
      swal.fire({
        title: "Filter applied !",
        icon: "success",
        iconColor: "#AD198D",
        showConfirmButton: false,
        timer: 1000,
        customClass: 'sweet',
      });
      window.scrollTo(0, 0);
      // navigate('/shop');
    }

  }


  // function for reset all filters

  const filter_reset = () => {
    title = "All Bikes";
    document.getElementById('search').value = "";
    document.getElementById("min").selectedIndex = 0;
    document.getElementById("max").selectedIndex = 0;


    let radios = document.getElementsByName("flexRadioDefault");

    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        radios[i].checked = false;
        break;
      }
    }

    setCate(data);
    setTtl(title);

  }



  return (
    <>
      <Banner image={image} title="Bicycles" fs="5rem" />
      <div className='row container-fluid py-3 py-lg-5 px-0 mx-auto' style={{ width: "100%", backgroundColor: "#dfdfdf" }}>

        {/* Search bar to search products */}

        <div className='col-11 col-xl-3 col-lg-4 mx-lg-2 mx-auto'>
          <div className='row py-3 px-3' style={{ backgroundColor: "white" }}>
            <h3 className='mx-2 mx-xl-2'>Search</h3>
            <form>
              <input id="search" className="form-control mx-2" style={{ width: "90%" }} type="text" placeholder="search by name or brand" aria-label="default input example" minlength="3" required />
              <input type="submit" onClick={(event) => { search_term(event) }} className="col-4 btn rounded-1 text-light my-3 mx-2" />
              <button type="button" onClick={filter_reset} className="col-4 btn rounded-1 text-light my-3 mx-2">Reset</button>
            </form>
          </div>


          {/* Price range section */}

          <div className='row py-3 px-3 my-3' style={{ backgroundColor: "white" }}>
            <h3>Filter by price</h3>

            <div className='d-flex mt-2'>
              <select id="min" className="form-select form-select-sm" style={{ width: "40%" }} aria-label=".form-select-sm example">
                <option selected>Min</option>
                <option value="5000">Rs.5000</option>
                <option value="10000">Rs.20000</option>
                <option value="15000">Rs.15000</option>
                <option value="20000">Rs.20000</option>
                <option value="25000">Rs.25000</option>

              </select>
              <p className='pt-2'>&nbsp;to&nbsp;</p>
              <select id="max" className="form-select form-select-sm" style={{ width: "40%" }} aria-label=".form-select-sm example">
                <option selected>Max</option>
                <option value="100000">Rs.1 Lakh</option>
                <option value="200000">Rs.2 Lakh</option>
                <option value="300000">Rs.3 Lakh</option>
                <option value="400000">Rs.4 Lakh</option>
                <option value="500000">Rs.5 Lakh</option>
              </select>
            </div>

            <button type="button" onClick={price_filter} className="col-4 btn rounded-1 text-light my-3 mx-2">Apply</button>
            <button type="button" onClick={filter_reset} className="col-4 btn rounded-1 text-light my-3 mx-2">Reset</button>

          </div>



          {/* Filter by category */}

          <div className='row py-3 px-3 my-3' style={{ backgroundColor: "white" }}>
            <h3>Filter by Category</h3>

            <div className="form-check px-5">
              <input className="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="Road" />
              <label className="form-check-label fw-bold" htmlFor="flexRadioDefault1">Road Bikes</label>
            </div>
            <div className="form-check px-5">
              <input className="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="City" />
              <label className="form-check-label fw-bold" htmlFor="flexRadioDefault2">City Bikes</label>
            </div>
            <div className="form-check px-5">
              <input className="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault3" value="Mountain" />
              <label className="form-check-label fw-bold" htmlFor="flexRadioDefault3">Mountain Bikes</label>
            </div>
            <div className="form-check px-5">
              <input className="form-check-input " style={{ color: "black" }} type="radio" name="flexRadioDefault" id="flexRadioDefault4" value="Electric" />
              <label className="form-check-label fw-bold" htmlFor="flexRadioDefault4">Electric Bikes</label>
            </div>
            <button type="button" onClick={select_Category} className="col-4 btn rounded-1 text-light my-3 mx-2">Apply</button>
            <button type="button" onClick={filter_reset} className="col-4 btn rounded-1 text-light my-3 mx-2">Reset</button>


          </div>

        </div>




        {/* Product list section */}

        <div id="product-list" className=' ps-4 pe-2 py-3 col-12 col-lg mx-lg-2 mx-auto' style={{ backgroundColor: "white" }}>
          <div className='row mx-auto'>
            <div className='text-lg-start text-center'>
              <h1 style={{ fontSize: "60px" }}>{ttl}</h1>
              <p className='text-secondary fw-bold'>Showing {cate.length} results</p>
            </div>

            {
              cate.map((element) => {



                return (
                  <>
                    <ProductCard product={element} />
                  </>
                )

              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop;