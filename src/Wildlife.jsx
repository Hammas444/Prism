import React from 'react'

const Wildlife = () => {
  return (
    <div><div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Prism</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
  <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
  <link rel="stylesheet" type="text/css" href="style.css" />
  <style dangerouslySetInnerHTML={{__html: "\n\n      #myBtn {\n        display: none; /* Hidden by default */\n        position: fixed; /* Fixed/sticky position */\n        bottom: 20px; /* Place the button at the bottom of the page */\n        right: 30px; /* Place the button 30px from the right */\n        z-index: 99; /* Make sure it does not overlap */\n        border: none; /* Remove borders */\n        outline: none; /* Remove outline */\n        background-color: rgb(219, 36, 76); /* Set a background color */\n        color: white; /* Text color */\n        cursor: pointer; /* Add a mouse pointer on hover */\n        padding: 15px; /* Some padding */\n        border-radius: 10px; /* Rounded corners */\n        font-size: 18px; /* Increase font size */\n      }\n      \n      \n      " }} />
  {/* <nav className="navbar fixed-top navbar-expand-lg navbar-  bg-transparent">     <div className="container-fluid">
      <a className="navbar-brand" href="index.html"><img src="images/nav logo.png" className="logo" /><span style={{fontFamily: '"Poppins", sans-serif', fontWeight: 700, color: '#ffd034', marginLeft: 5, fontSize: 30}} /></a>
      <span> <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><a className="btn btn-" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
            <i className="fa-solid fa-bars" style={{color: '#ffd034'}} />
          </a>
        </button><button className="btn btn-" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        </button>
        <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{backgroundColor: '#ffffff'}}>
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel"><img src="images/nav logo.png" className="logo" /></h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div className="offcanvas-body">
            <div>
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="index.html" style={{color: 'black'}}>Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="About Us.html" style={{color: 'black'}}>About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Featuredimages.html" style={{color: 'black'}}>Featured Images</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: 'black', fontFamily: '"Poppins", sans-serif', fontWeight: 500}}>
                    Categories
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="Drone.html" style={{color: 'black', fontFamily: '"Poppins", sans-serif', fontWeight: 500}}>Drone Photography</a></li>
                    <li><a className="dropdown-item" href="Wildlife.html" style={{color: 'black', fontFamily: '"Poppins", sans-serif', fontWeight: 500}}>Wildlife Photography</a></li>
                    <li><a className="dropdown-item" href="landscape.html" style={{color: 'black', fontFamily: '"Poppins", sans-serif', fontWeight: 500}}>Landscape Photography</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="Contact.html" style={{color: 'black'}}>Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </span>
      <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{display: 'none'}}>
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="index.html">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="About Us.html">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Featuredimages.html">Featured Images</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: 'rgb(255, 255, 255)', fontFamily: '"Poppins", sans-serif', fontWeight: 500}}>
              Categories
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="Drone.html" style={{color: 'rgb(0, 0, 0)', fontFamily: '"Poppins", sans-serif', fontWeight: 500}}>Drone Photography</a></li>
              <li><a className="dropdown-item" href="Wildlife.html" style={{color: 'rgb(0, 0, 0)', fontFamily: '"Poppins", sans-serif', fontWeight: 500}}>Wildlife Photography</a></li>
              <li><a className="dropdown-item" href="landscape.html" style={{color: 'black', fontFamily: '"Poppins", sans-serif', fontWeight: 500}}>Landscape Photography</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="Contact.html">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav> */}
  <button onclick="topFunction()" id="myBtn" title="Go to top"><i className="fa-solid fa-arrow-up" /></button>
  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="images/wild.jpg" className="d-block w-100" alt="..." />
        <div className="carousel-caption   d-md-block" style={{marginBottom: 40}}>
          <h1 className="display-4 text-center" style={{fontWeight: 700, fontFamily: '"Poppins", sans-serif', color: '#ffd034'}}>Wildlife Photography</h1>
          <p>We Offer the best quality photography and provide world's best services</p>
        </div>
      </div>
    </div>
  </div>
  <br /><br /><br />
  <br /><br /><br /> <br /><br /> 
  <section>
    <div className="container"><h1 className="display-4 text-center" style={{fontFamily: '"Merienda", cursive', color: 'dodgerblue'}} data-aos="fade-up">Collection</h1>
      <div className="row">
        <div className="col-lg-6 col-sm-12 col-md-6">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/w1.jpg" className="d-block w-100" alt="..." data-aos="fade-up" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/w2.jpg" className="d-block w-100" alt="..." data-aos="fade-up" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-sm-12 col-md-6">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/w3.jpg" className="d-block w-100" alt="..." data-aos="fade-up" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/w4.jpg" className="d-block w-100" alt="..." data-aos="fade-up" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div  id="div3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-6">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="images/w5.jpg" className="d-block w-100" alt="..." data-aos="fade-up" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="images/w6.jpg" className="d-block w-100" alt="..." data-aos="fade-up" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-6">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="images/w7.jpg" className="d-block w-100" alt="..." data-aos="fade-up" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="images/w8.jpg" className="d-block w-100" alt="..." data-aos="fade-up" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-6">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="images/w9.jpg" className="d-block w-100" alt="..." data-aos="fade-up" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="images/w10.jpg" className="d-block w-100" alt="..." data-aos="fade-up" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></div>
  </section>
  <br />
  <section>
    <div  id="div4">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-6">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="images/w11.jpg" className="d-block w-100" alt="..." data-aos="fade-up" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="images/w12.jpg" className="d-block w-100" alt="..." data-aos="fade-up" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-6">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="images/w13.jpg" className="d-block w-100" alt="..." data-aos="fade-up" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="images/w14.jpg" className="d-block w-100" alt="..." data-aos="fade-up" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-6">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="images/w15.jpg" className="d-block w-100" alt="..." data-aos="fade-up" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="images/w16.jpg" className="d-block w-100" alt="..." data-aos="fade-up" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-6">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="images/w17.jpg" className="d-block w-100" alt="..." data-aos="fade-up" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="images/w18.jpg" className="d-block w-100" alt="..." data-aos="fade-up" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-6">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="images/w19.jpg" className="d-block w-100" alt="..." data-aos="fade-up" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="images/w20.jpg" className="d-block w-100" alt="..." data-aos="fade-up" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></div>
  </section>
  {/* <center><a className="btn btn- btn-lg" role="button" style={{backgroundColor: '#ffd034', borderRadius: 40, letterSpacing: 2}} onclick="button2()" id="b2">See All</a></center> */}
  <br /><br /><br />
  {/* <div className="container-fluid" style={{backgroundColor: '#19815e'}}>
    <footer className="py-5">
      <div className="row">
        <div className="col-6 col-md-2 mb-3">
          <h3 style={{color: '#fcf373'}}>Section</h3>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="index.html" className="nav-link p-0 " style={{color: '#ffffff'}}>Home</a></li>
            <li className="nav-item mb-2"><a href className="nav-link p-0 " style={{color: '#ffffff'}}>Featured Images</a></li>
          </ul>
        </div>
        <div className="col-6 col-md-2 mb-3">
          <h3 style={{color: '#fcf373'}}>Section</h3>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="Drone.html" className="nav-link p-0 " style={{color: '#ffffff'}}>Drone Photography</a></li>
            <li className="nav-item mb-2"><a href="Wildlife.html" className="nav-link p-0 " style={{color: '#ffffff'}}>Wildlife Photography</a></li>
            <li className="nav-item mb-2"><a href="landscape.html" className="nav-link p-0 " style={{color: '#ffffff'}}>Landscape Photography</a></li>
          </ul>
        </div>
        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h1 style={{color: '#fcf373'}}>Need Help In Photography?</h1>
            <p style={{color: 'white'}}>You can easily get in touch with us.</p>
          </form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label" style={{color: 'white'}}>Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{borderRadius: '0%'}} />
            <div id="emailHelp" className="form-text" style={{color: 'rgb(160, 160, 160)'}} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label" style={{color: 'white'}}>Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" style={{borderRadius: '0%'}} />
          </div>
          <center> <button type="submit" className="btn btn-" style={{borderRadius: '0%', backgroundColor: '#ffd034'}} onclick="sub()">Submit</button></center>
        </div>
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p style={{color: 'white'}}>© 2022 Company, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3"><a className="link-dark" href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f" style={{fontSize: 30, color: '#ffffff'}} /></a></li>
          <li className="ms-3"><a className="link-dark" href="https://twitter.com/i/flow/login"><i className="fa-brands fa-twitter" style={{fontSize: 30, color: '#ffffff'}} /></a></li>
          <li className="ms-3"><a className="link-dark" href="https://www.instagram.com/?hl=en"><i className="fa-brands fa-instagram" style={{fontSize: 30, color: '#ffffff'}} /></a></li>
        </ul>
      </div>
    </footer>
  </div> */}
</div>
</div>
  )
}

export default Wildlife