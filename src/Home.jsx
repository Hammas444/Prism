import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div><div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Prism</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
  <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
  <link rel="stylesheet" type="text/css" href="style.css" />
  <style dangerouslySetInnerHTML={{__html: "\n\n#myBtn {\n  display: none; /* Hidden by default */\n  position: fixed; /* Fixed/sticky position */\n  bottom: 20px; /* Place the button at the bottom of the page */\n  right: 30px; /* Place the button 30px from the right */\n  z-index: 99; /* Make sure it does not overlap */\n  border: none; /* Remove borders */\n  outline: none; /* Remove outline */\n  background-color: rgb(219, 36, 76); /* Set a background color */\n  color: white; /* Text color */\n  cursor: pointer; /* Add a mouse pointer on hover */\n  padding: 15px; /* Some padding */\n  border-radius: 10px; /* Rounded corners */\n  font-size: 18px; /* Increase font size */\n}\n\n\n" }} />
  {/* <div className="container-fluid">
    <nav className="navbar fixed-top navbar-expand-lg navbar-  bg-transparent">     <div className="container-fluid">
        <a className="navbar-brand" href="index.html"><img src="images/nav logo.png" className="logo" /><span style={{fontFamily: '"Poppins", sans-serif', fontWeight: 700, color: '#ffd034', marginLeft: 5, fontSize: 30}} /></a>
        <span><button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><a className="btn btn-" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
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
          </div></span>
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
                <li><a className="dropdown-item" href="Drone.html" style={{color: 'black', fontFamily: '"Poppins", sans-serif', fontWeight: 500}}>Drone Photography</a></li>
                <li><a className="dropdown-item" href="Wildlife.html" style={{color: 'black', fontFamily: '"Poppins", sans-serif', fontWeight: 500}}>Wildlife Photography</a></li>
                <li><a className="dropdown-item" href="landscape.html" style={{color: 'black', fontFamily: '"Poppins", sans-serif', fontWeight: 500}}>Landscape Photography</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="Contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div> */}
  <button onclick="topFunction()" id="myBtn" title="Go to top"><i className="fa-solid fa-arrow-up" /></button>
  <section>
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="images/alif-ngoylung-jg-6ARMiaPM-unsplash.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption  d-md-block" style={{marginBottom: 40}}>
            <h1 style={{fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: 50}}>Prism Photography</h1>
            <p>A platform to see high resolution photos</p>
            <Link className="btn btn- btn-" to="Fimages" role="button" id="mainbutton">Go and Explore</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <br /><br /><br /><br />
  <div className="container">
    <div className="jumbotron">
      <h1 className="display-4 text-center" style={{color: 'rgb(0, 0, 0)', fontFamily: '"Baloo 2", cursive'}} data-aos="fade-up">Our Studio</h1>
      <p className="lead " style={{color: 'rgb(0, 0, 0)', textAlign: 'justify'}} data-aos="fade-up">Professional services in Photography and Cinematography. But, is that enough to describe us? We think, No.Then who are we? We are …
        A Brand, you deserve to benefit from.
        A Studio, where your dreams and emotions are brought to life.
        A Team, which believes and excels in making impossible, possible.Our team aspires to meet international standards and show excellence in every department of our business. We bear and promise uncompromised Commitment, Service, Quality and Innovation.We aim to initiate all the hard work and keep it simple and fun for our clients.</p>
      <center><a className="btn btn- btn-lg" href="About Us.html" role="button" style={{backgroundColor: '#DCE35B', borderRadius: '0%'}} data-aos="zoom-in">Learn More</a></center>
    </div></div>
  <br /><br />
  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="images/banner jpg.jpg" className="d-block w-100" alt="..." />
        <div className="carousel-caption  d-md-block" style={{marginBottom: 40}}>
        </div>
      </div>
    </div>
  </div>
  {/* <section   data-aos="fade-right">
  <div class="container"><h1 class="display-4 text-center" style="font-family: 'Baloo 2', cursive;
    color: black;">What we do</h1><p class="display-8 text-center" style="font-size: 20px;">the areas we are specialized in</p>
    <center><div class="row">
<div class="col-lg-4 col-sm-12 col-md-6">
  <div class="card mt-2" style="width: 18rem;border: none;">

    <div class="card-body"  style="background-color: #ffffff;">
      <a href="Drone.html"><div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    
        <div class="carousel-inner">
          <div class="carousel-item active">
          <img src="images/d4.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption  d-md-block" style="margin-bottom:40px ;">
              <h1 style="font-family: 'Poppins', sans-serif;font-weight:700 ;font-size:25px ;" >Drone Photography</h1>
             
            </div>
          </div>
        
        
        </div>
       
       
      </div></a>
   <br>
 
      <a href="Drone.html" class="btn btn-" style="background:linear-gradient(to right,#4568DC,#B06AB3) ;color:white ;border: none;border-radius:0% ;width:250px ;">

        Explore</a>
    </div>
  </div>
  
 
</div>
<div class="col-lg-4 col-sm-12 col-md-6">
  <div class="card mt-2" style="width: 18rem;border: none;">
   
    <div class="card-body"  >
      <a href="landscape.html"><div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    
        <div class="carousel-inner">
          <div class="carousel-item active">
           <img src="images/l10.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption  d-md-block" style="margin-bottom:40px ;">
              <h1 style="font-family: 'Poppins', sans-serif;font-weight:700 ;font-size:25px ;" >Landscape Photography</h1>
             
            </div>
          </div>
        
        
        </div>
       
       
      </div></a>
     <br>
  
      <a href="landscape.html" class="btn btn-" style="background:linear-gradient(to right,#4568DC,#B06AB3) ;color:white ;border: none;border-radius:0% ;width:250px ;" >Explore</a>
    </div>
  </div>
  
 
</div>
<div class="col-lg-4 col-sm-12 col-md-6">
  <div class="card mt-2" style="width: 18rem;border: none;">
  
   <div class="card-body"  >
    <a href="Wildlife.html"><div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="images/w5.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption  d-md-block" style="margin-bottom:40px ;">
            <h1 style="font-family: 'Poppins', sans-serif;font-weight:700 ;font-size:25px ;" >Wildlife Photography</h1>
           
          </div>
        </div>
      
      
      </div>
     
     
    </div></a>
  <br>
    <a href="Wildlife.html" class="btn btn-" style="background:linear-gradient(to right,#4568DC,#B06AB3) ;color:white ;border: none;border-radius:0% ;width:250px ;">Explore</a>
  </div>
  </div>
  
 
</div>
    </div></center>
  </div>
 </section> */}
  {/* <div class="jumbotron" style=" background: linear-gradient(to right,#76b852,#8DC26F);">
  <h1 class="display-4 text-center" style="color: rgb(255, 255, 255);" data-aos="fade-up">Why You Choose Us!</h1>
  <p class="lead text-center" style="color: white;" data-aos="fade-up">Professional services in Photography and Cinematography. But, is that enough to describe us?.Having 15+ years experience in Photography.  We are …

    A Brand, you deserve to benefit from.
    A Studio, where your dreams and emotions are brought to life.
    A Team, which believes and excels in making impossible, possible.</p><br><br>
 
</div> */}
  <br /><br /><br />
  {/* <section >
  <h1 class="display-4 text-center" style="color: black;font-family: 'Baloo 2', cursive;
  " data-aos="fade-up">Features</h1><br><br>
  <div class="container">
    <center><div class="row">
<div class="col-lg-4 col-md-6 col-sm-12 mt-2">
  <div class="card" style="width: 18rem;background-color:#606c88 ;" data-aos="fade-up">
    <div class="card-body">
      <h5 class="card-title" style="color:white;">Best Quality</h5>
      
      <p class="card-text" style="color: white;">We provide you the best HD quality photography</p>
     
    </div>
  </div>
</div>
  
<div class="col-lg-4 col-md-6 col-sm-12 mt-2">
<div class="card" style="width: 18rem;background-color: #D6A4A4;" data-aos="fade-up">
  <div class="card-body">
    <h5 class="card-title" style="color: rgb(255, 255, 255);" >Collection</h5>
    
    <p class="card-text" style="color: white;">We provide you the Collection of images of different categories </p>
   
  </div>
</div>
</div>
  
<div class="col-lg-4 col-md-6 col-sm-12 mt-2">
<div class="card" style="width: 18rem;background-color:#F09819;" data-aos="fade-up">
  <div class="card-body">
    <h5 class="card-title" style="color: white;">Brands</h5>
    
    <p class="card-text" style="color: white;">We use the best cameras for photography</p>
   
  </div>
</div>
    </div>
  
    </div></center>
  </div>
</section> */}
  {/* <section>
 <center> <video src="images/pexels-roman-odintsov-9733906.mp4"  autoplay loop muted type="video/mp4" style="width:80% ;border-radius: 2px;box-shadow:5px 5px 10px gray ;"></video></center>
</section> */}
  <br /><br /><br /><br />
  <section data-aos="fade-right">
    <h1 className="display-4 text-center" style={{fontFamily: '"Baloo 2", cursive', color: 'black'}}>Why Choose Us</h1><br /><br /><br />
    <div className="jumbotron jumbotron-fluid " style={{padding: '0 8%', backgroundColor: '#ffffff'}}>
      <div className="container">
        <div className="row" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gridGap: 30}}>
          <div className="service" style={{textAlign: 'center', cursor: 'pointer', padding: '25px 10px'}}>
            <i className="fa-solid fa-truck" style={{fontSize: 40, color: 'dodgerblue'}} />  
            <h3 style={{color: '#fd9620'}}>
            </h3>
            <h3 style={{color: 'black', fontFamily: '"Baloo 2", cursive'}}>     Fast  <br />Delivery</h3>
          </div>
          <div className="service" style={{textAlign: 'center', cursor: 'pointer', padding: '25px 10px'}}>
            <i className="fa-solid fa-wallet" style={{fontSize: 40, color: 'dodgerblue'}} />
            <h3 style={{color: '#fd9620'}}>
            </h3>
            <h3 style={{color: 'black', fontFamily: '"Baloo 2", cursive'}}>
              Secure <br /> Payment
            </h3>
          </div>
          <div className="service" style={{textAlign: 'center', cursor: 'pointer', padding: '25px 10px'}}>
            <i className="fa-sharp fa-solid fa-parachute-box" style={{fontSize: 40, color: 'dodgerblue'}} />
            <h3 style={{color: '#fd9620'}}>
            </h3>
            <h3 style={{color: 'black', fontFamily: '"Baloo 2", cursive'}}>
              30 Day <br />Easy Return
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  <br /><br />
  {/* <section >
<div class="container"><h1 class="display-2 text-center" style="font-family: 'Poppins', sans-serif; color:rgb(126, 14, 14);" data-aos="zoom-in">Gallery</h1></div>
<div class="container"><div class="row">
  <div class="col-lg-6 col-md-6 col-sm-12 mt-2">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-inner">
  <div class="carousel-item active">
   
    <img src="images/gal1.jpg" class="d-block w-100" alt="..." data-aos="zoom-in">
  </div>
 
     
</div>
    </div>

  </div>
  <div class="col-lg-6 col-md-6 col-sm-12 mt-2">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="images/gal2.jpg" class="d-block w-100" alt="..." data-aos="zoom-in">
  </div>
 
     
</div>
    </div>

  </div>

  <div class="col-lg-6 col-md-6 col-sm-12 mt-2">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="images/gal3.jpg" class="d-block w-100" alt="..." data-aos="zoom-in">
  </div>
 
     
</div>
    </div>

  </div>
  <div class="col-lg-6 col-md-6 col-sm-12 mt-2">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="images/gal4.jpg" class="d-block w-100" alt="..." data-aos="zoom-in">
  </div>
 
     
</div>
    </div>

  </div>
  <div class="col-lg-6 col-md-6 col-sm-12 mt-2">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="images/gal5.jpg" class="d-block w-100" alt="..." data-aos="zoom-in">
  </div>
 
     
</div>
    </div>

  </div>
  <div class="col-lg-6 col-md-6 col-sm-12 mt-2">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="images/gal6.jpg" class="d-block w-100" alt="..." data-aos="zoom-in">
  </div>
 
     
</div>
    </div>

  </div>
  <div class="col-lg-6 col-md-6 col-sm-12 mt-2">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="images/gal7.jpg" class="d-block w-100" alt="..." data-aos="zoom-in">
  </div>
 
     
</div>
    </div>

  </div>
  <div class="col-lg-6 col-md-6 col-sm-12 mt-2">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="images/gal8.jpg" class="d-block w-100" alt="..." data-aos="zoom-in">
  </div>
 
     
</div>
    </div>

  </div>
</div>
</div>



</section> */}
  <br />
  <br />
  <br />
  {/* <section>



<div class="container"><h1 class="display-4 text-center" style="font-family: 'Baloo 2', cursive;
  color:black;" data-aos="fade-up">Best Camera Brands...</h1><br><br>
  <div class="row">
    <div class="col-4" >
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <a href="https://www.hp.com/us-en/home.html"><img src="images/hp logo.jpg" class="d-block w-100" alt="..." data-aos="zoom-in" id="brand"></a>
    </div>
   
 
  </div>
</div>

    </div>

    <div class="col-4" >
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
     <a href="https://www.nikon.com/"> <img src="images/Nikon-logo-880x660.png" class="d-block w-100" alt="..." data-aos="zoom-in" id="brand"></a>
    </div>
   
 
  </div>
</div>

    </div>

    <div class="col-4" >
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
     <a href="https://www.sony.com/pk"> <img src="images/Sony_logo-880x660.png" class="d-block w-100" alt="..." data-aos="zoom-in" id="brand"></a>
    </div>
   
 
  </div>
</div>

    </div>
  </div>
</div>
<br><br>

<div class="container">
  <div class="row">
    <div class="col-4">
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
     <a href="https://shop.panasonic.com/"> <img src="images/panasonic.jpg" class="d-block w-100" alt="..." data-aos="zoom-in" id="brand"></a>
    </div>
   
 
  </div>
</div>

    </div>

    <div class="col-4" >
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <a href="https://www.usa.canon.com/internet/portal/us/home"><img src="images/Canon-logo-wordmark-880x660.png" class="d-block w-100" alt="..." data-aos="zoom-in" id="brand"></a>
    </div>
   
 
  </div>
</div>

    </div>

    <div class="col-4" >
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <a href="https://www.samsung.com/pk/"><img src="images/samsung.jpg" class="d-block w-100" alt="..." data-aos="zoom-in" id="brand"></a>
    </div>
   
 
  </div>
</div>

    </div>
  </div>
</div>







</section> */}
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

export default Home
