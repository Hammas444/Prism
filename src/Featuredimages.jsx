import React from 'react'

const Featuredimages = () => {
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
  </nav> */}
  <button onclick="topFunction()" id="myBtn" title="Go to top"><i className="fa-solid fa-arrow-up" /></button>
  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="images/featured.jpg" className="d-block w-100" alt="..." />
        <div className="carousel-caption  d-md-block" style={{marginBottom: 40}}>
          <h1 style={{fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: 50}}>Featured Images</h1>
          <p>Some good collection of images</p>
        </div>
      </div>
    </div>
  </div>
  <br /><br /><br />
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-sm-12 col-md-6 mt-2">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/f1.jpg" className="d-block w-100" alt="..." data-aos="fade-up" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-sm-12 col-md-6 mt-2">
        <div className="jumbotron">
          <a className="btn btn- btn-lg" role="button" style={{backgroundColor: '#ffd034', borderRadius: 40}} data-aos="zoom-in">Istanbul,Turkey</a><br /><br />
          <p className="lead " style={{color: 'rgb(0, 0, 0)', textAlign: 'justify'}} data-aos="fade-up">The Blue Mosque in Istanbul, also known by its official name, the Sultan Ahmed Mosque, is an Ottoman-era historical imperial mosque located in Istanbul, Turkey.Blue Mosque was built as a copy of the Hagia Sophia. It was not until years later that architects realized that the two buildings were completely different in style.</p>
        </div>
      </div>
    </div>
  </div>
  <br /><br />
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-sm-12 col-md-6 mt-2">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/f2.jpg" className="d-block w-100" alt="..." data-aos="fade-up" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-sm-12 col-md-6 mt-2">
        <div className="jumbotron">
          <a className="btn btn- btn-lg" role="button" style={{backgroundColor: '#ffd034', borderRadius: 40}} data-aos="zoom-in">Gilgit,Pakistan</a><br /><br />
          <p className="lead " style={{color: 'rgb(0, 0, 0)', textAlign: 'justify'}} data-aos="fade-up">Rubab, robab or rabab is a lute-like musical instrument. The rubab is one of the national musical instruments of Afghanistan; and is also commonly used in Pakistan in areas inhabited by the Pashtun and Baloch, and also played by Sindhi people in Sindh, by Kashmiri people in Kashmir, and by the Punjabis of the Punjab.</p>
        </div>
      </div>
    </div>
  </div>
  <br /><br />
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-sm-12 col-md-6 mt-2">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/f3.jpg" className="d-block w-100" alt="..." data-aos="fade-up" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-sm-12 col-md-6 mt-2">
        <div className="jumbotron">
          <a className="btn btn- btn-lg" role="button" style={{backgroundColor: '#ffd034', borderRadius: 40}} data-aos="zoom-in">Hunza,Pakistan</a><br /><br />
          <p className="lead " style={{color: 'rgb(0, 0, 0)', textAlign: 'justify'}} data-aos="fade-up">The markhor is largely found in the Northern Areas of Pakistan especially in Chitral, Ghizar and Hunza regions. Markhors live at altitudes of 500 to 3,500 metres (1,600 to 11,000 feet) depending on season, summer is spent at higher altitudes and winter at lower altitudes. The Markhor is the national animal of Pakistan.</p>
        </div>
      </div>
    </div>
  </div>
  <br /><br />
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-sm-12 col-md-6 mt-2">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/f4.jpg" className="d-block w-100" alt="..." data-aos="fade-up" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-sm-12 col-md-6 mt-2">
        <div className="jumbotron">
          <a className="btn btn- btn-lg" role="button" style={{backgroundColor: '#ffd034', borderRadius: 40}} data-aos="zoom-in">Quetta,Pakistan</a><br /><br />
          <p className="lead " style={{color: 'rgb(0, 0, 0)', textAlign: 'justify'}} data-aos="fade-up">Hanna Lake is a lake in Urak Valley near Quetta, in Balochistan Province, in southwestern Pakistan. It is surrounded by mountains.The reservoir was constructed in 1894 during the British Colonial era on the land of local tribesmen, and is one of the main attractions in the city. It forms a great historical bridge wall between two mountains, the depths like battlements of a fort, for the storing of water.</p>
        </div>
      </div>
    </div>
  </div>
  <br /><br />
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-sm-12 col-md-6 mt-2">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/f5.jpg" className="d-block w-100" alt="..." data-aos="fade-up" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-sm-12 col-md-6 mt-2">
        <div className="jumbotron">
          <a className="btn btn- btn-lg" role="button" style={{backgroundColor: '#ffd034', borderRadius: 40}} data-aos="zoom-in">Malam Jabba,Pakistan</a><br /><br />
          <p className="lead " style={{color: 'rgb(0, 0, 0)', textAlign: 'justify'}} data-aos="fade-up">Malam Jabba  is a Hill Station and ski resort in the Hindu Kush mountain range nearly 40 km from Saidu Sharif in Swat Valley, Khyber Pakhtunkhwa Province of Pakistan. It is 314 km from Islamabad and 51 km from Saidu Sharif Airport.This place is famous for its breath-taking natural beauty, crystal-like streams, lush pine forests, ski resort, and a lot of other attractions.</p>
        </div>
      </div>
    </div>
  </div>
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

export default Featuredimages