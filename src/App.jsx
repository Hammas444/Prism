import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
      setScroll(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Submitted!");
  };

  return (
    <Router>
      <>
        {/* Navbar */}
        <div className="container-fluid">
          <nav className={`navbar fixed-top navbar-expand-lg ${scroll ? 'scrolled-navbar' : 'transparent-navbar'}`}>
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                <span style={{
                  fontFamily: '"Pacifico", cursive',
                  color: scroll ? '#f87721' : '#ffffff',
                  marginLeft: 5,
                  fontSize: 20,
                }}>
                  Prism
                </span>
              </Link>

              {/* Mobile Toggler */}
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

              {/* Desktop Nav */}
              <div className="collapse navbar-collapse d-none d-lg-block" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 desktop-nav">
                  <li className="nav-item"><Link className="nav-link" to="/" style={{ color: scroll ? '#000' : '#fff' }}>Home</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/About" style={{ color: scroll ? '#000' : '#fff' }}>About</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/Contact" style={{ color: scroll ? '#000' : '#fff' }}>Contact</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/Fimages" style={{ color: scroll ? '#000' : '#fff' }}>Featured</Link></li>
                  <li className="nav-item dropdown">
                    <button
                      className="nav-link dropdown-toggle btn btn-link"
                      id="menuDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ color: scroll ? '#000' : '#fff', textDecoration: 'none' }}
                    >
                      Collections
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="menuDropdown">
                      <li><Link className="dropdown-item" to="/Drone">Drone</Link></li>
                      <li><Link className="dropdown-item" to="/Landscape">Landscape</Link></li>
                      <li><Link className="dropdown-item" to="/Wildlife">Wildlife</Link></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            {/* Offcanvas Nav */}
            <div
              className="offcanvas offcanvas-start d-lg-none"
              tabIndex={-1}
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
              style={{ backgroundColor: '#ffffff' }}
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                  <span style={{ fontFamily: '"Pacifico", cursive', color: '#f87721', marginLeft: 5, fontSize: 20 }}>
                    Prism
                  </span>
                </h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 offcanvas-nav">
                  <li className="nav-item"><Link className="nav-link offcanvas-link" to="/">Home</Link></li>
                  <li className="nav-item"><Link className="nav-link offcanvas-link" to="/About">About</Link></li>
                  <li className="nav-item"><Link className="nav-link offcanvas-link" to="/Contact">Contact</Link></li>
                  <li className="nav-item"><Link className="nav-link offcanvas-link" to="/Fimages">Featured</Link></li>
                  <li className="nav-item dropdown">
                    <button
                      className="nav-link dropdown-toggle btn btn-link"
                      id="offcanvasMenuDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ color: '#000', textDecoration: 'none' }}
                    >
                      Collections
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="offcanvasMenuDropdown">
                      <li><Link className="dropdown-item" to="/Drone">Drone</Link></li>
                      <li><Link className="dropdown-item" to="/Landscape">Landscape</Link></li>
                      <li><Link className="dropdown-item" to="/Wildlife">Wildlife</Link></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        {/* Routes */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Fimages' element={<Featuredimages />} />
          <Route path='/Drone' element={<Drone />} />
          <Route path='/Landscape' element={<Landscape />} />
          <Route path='/Wildlife' element={<Wildlife />} />
        </Routes>

        {/* Footer */}
        <div className="container-fluid" style={{ backgroundColor: 'chocolate' }}>
          <footer className="py-5">
            <div className="row">
              <div className="col-6 col-md-2 mb-3">
                <h3 style={{ color: '#fcf373' }}>Section</h3>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><Link to="/" className="nav-link p-0" style={{ color: '#ffffff' }}>Home</Link></li>
                  <li className="nav-item mb-2"><Link to="/Fimages" className="nav-link p-0" style={{ color: '#ffffff' }}>Featured Images</Link></li>
                </ul>
              </div>
              <div className="col-6 col-md-2 mb-3">
                <h3 style={{ color: '#fcf373' }}>Section</h3>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><Link to="/Drone" className="nav-link p-0" style={{ color: '#ffffff' }}>Drone Photography</Link></li>
                  <li className="nav-item mb-2"><Link to="/Wildlife" className="nav-link p-0" style={{ color: '#ffffff' }}>Wildlife Photography</Link></li>
                  <li className="nav-item mb-2"><Link to="/Landscape" className="nav-link p-0" style={{ color: '#ffffff' }}>Landscape Photography</Link></li>
                </ul>
              </div>
              <div className="col-md-5 offset-md-1 mb-3">
                <form onSubmit={handleFormSubmit}>
                  <h1 style={{ color: '#fcf373' }}>Need Help In Photography?</h1>
                  <p style={{ color: 'white' }}>You can easily get in touch with us.</p>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label" style={{ color: 'white' }}>Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: 'white' }}>Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" required />
                  </div>
                  <center>
                    <button type="submit" className="btn" style={{ borderRadius: '0%', backgroundColor: '#ffd034' }}>
                      Submit
                    </button>
                  </center>
                </form>
              </div>
            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
              <p style={{ color: 'white' }}>© 2022 Company, Inc. All rights reserved.</p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3"><a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f" style={{ fontSize: 30, color: '#ffffff' }} /></a></li>
                <li className="ms-3"><a href="https://twitter.com/i/flow/login"><i className="fa-brands fa-twitter" style={{ fontSize: 30, color: '#ffffff' }} /></a></li>
                <li className="ms-3"><a href="https://www.instagram.com/?hl=en"><i className="fa-brands fa-instagram" style={{ fontSize: 30, color: '#ffffff' }} /></a></li>
              </ul>
            </div>
          </footer>
        </div>
      </>
    </Router>
  );
}

export default App;
