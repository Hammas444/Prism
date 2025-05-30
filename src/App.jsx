
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Featuredimages from './Featuredimages';
import { useEffect, useState } from 'react';
import Drone from './Drone';
import Landscape from './Landscape';
import Wildlife from './Wildlife';

function App() {

const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
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
                    <a className="nav-link " aria-current="page" href="/" style={{color: 'black'}}>Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="/About" style={{color: 'black'}}>About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Fimages" style={{color: 'black'}}>Featured Images</a>
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
                    <a className="nav-link " aria-current="page" href="/Contact" style={{color: 'black'}}>Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div></span>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{display: 'none'}}>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="/About">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Fimages">Featured Images</a>
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
     


 <div className="container-fluid">
     



<nav
  className={`navbar fixed-top navbar-expand-lg ${
    scroll ? 'scrolled-navbar' : 'transparent-navbar'
  }`}
>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
      <span
        style={{
          fontFamily: '"Pacifico", cursive',
          color: scroll ? '#f87721' : '#ffffff',
          marginLeft: 5,
          fontSize: 20,
        }}
      >
        Prism
      </span>
    </Link>

    {/* TOGGLER BUTTON (Only visible on mobile) */}
    <button
      className="navbar-toggler d-lg-none"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasExample"
      aria-controls="offcanvasExample"
      aria-label="Toggle navigation"
    >
      <i className="fa-solid fa-bars" style={{ color: '#ffd034' }} />
    </button>

    {/* DESKTOP NAV LINKS */}
    <div className="collapse navbar-collapse d-none d-lg-block" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 desktop-nav">
        <li className="nav-item">
          <Link className="nav-link " to="/" style={{ color: scroll ? '#000' : '#fff' }}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/About" style={{ color: scroll ? '#000' : '#fff' }}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/Contact" style={{ color: scroll ? '#000' : '#fff' }}>
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/Fimages" style={{ color: scroll ? '#000' : '#fff' }}>
            Featured
          </Link>
        </li>
<li className="nav-item dropdown">
  <a
    className="nav-link dropdown-toggle"
    href="#"
    id="menuDropdown"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
    style={{ color: scroll ? '#000' : '#fff' }}
  >
    Collections
  </a>
  <ul className="dropdown-menu" aria-labelledby="menuDropdown">
    <li><Link className="dropdown-item" to="/Drone">Drone</Link></li>
    <li><Link className="dropdown-item" to="/Landscape">Landscape</Link></li>
    <li><Link className="dropdown-item" to="/Wildlife">Wildlife</Link></li>
  </ul>
</li>


      </ul>
    </div>
  </div>

  {/* OFFCANVAS NAV LINKS */}
  <div
    className="offcanvas offcanvas-start d-lg-none"
    tabIndex={-1}
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
    style={{ backgroundColor: '#ffffff' }}
  >
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasExampleLabel">
        <span
          style={{
            fontFamily: '"Pacifico", cursive',
            color: '#f87721',
            marginLeft: 5,
            fontSize: 20,
          }}
        >
          Prism
        </span>
      </h5>
      <button
        type="button"
        className="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    <div className="offcanvas-body">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 offcanvas-nav">
        <li className="nav-item">
          <Link className="nav-link offcanvas-link" to="/" style={{ color: scroll ? '#000' : '#000' }}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link offcanvas-link" to="/About" style={{ color: scroll ? '#000' : '#000' }}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link offcanvas-link" to="/Contact" style={{ color: scroll ? '#000' : '#000' }}>
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link offcanvas-link" to="/Fimages" style={{ color: scroll ? '#000' : '#000' }}>
            Featured
          </Link>
        </li>
        <li className="nav-item">
  <div className="dropdown">
    <a
      className="nav-link dropdown-toggle"
      href="#"
      id="offcanvasMenuDropdown"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      style={{ color: scroll ? '#000' : '#000' }}
    >
      Collections
    </a>
    <ul className="dropdown-menu" aria-labelledby="offcanvasMenuDropdown">
    <li><Link className="dropdown-item" to="/Drone">Drone</Link></li>
    <li><Link className="dropdown-item" to="/Landscape">Landscape</Link></li>
    <li><Link className="dropdown-item" to="/Wildlife">Wildlife</Link></li>
    </ul>
  </div>
</li>

      </ul>
    </div>
  </div>
</nav>



    </div>



<Router>
<Routes>

<Route path='/' element={<Home/>}/>
<Route path='/About' element={<About/>}/>
<Route path='/Contact' element={<Contact/>}/>
<Route path='/Fimages' element={<Featuredimages/>}/>
<Route path='/Drone' element={<Drone/>} />
<Route path='/Landscape' element={<Landscape/>}/>
<Route path='/Wildlife' element={<Wildlife/>}/>
</Routes>
</Router>


<div className="container-fluid" style={{backgroundColor: 'chocolate'}}>
    <footer className="py-5">
      <div className="row">
        <div className="col-6 col-md-2 mb-3">
          <h3 style={{color: '#fcf373'}}>Section</h3>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 " style={{color: '#ffffff'}}>Home</Link></li>
            <li className="nav-item mb-2"><Link to="/Fimages" className="nav-link p-0 " style={{color: '#ffffff'}}>Featured Images</Link></li>
          </ul>
        </div>
        <div className="col-6 col-md-2 mb-3">
          <h3 style={{color: '#fcf373'}}>Section</h3>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to="/Drone" className="nav-link p-0 " style={{color: '#ffffff'}}>Drone Photography</Link></li>
            <li className="nav-item mb-2"><Link to="/Wildlife" className="nav-link p-0 " style={{color: '#ffffff'}}>Wildlife Photography</Link></li>
            <li className="nav-item mb-2"><Link to="/Landscape" className="nav-link p-0 " style={{color: '#ffffff'}}>Landscape Photography</Link></li>
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
  </div>


    </>
  )
}

export default App


