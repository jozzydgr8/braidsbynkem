import braidsByNkem from '../assets/braidsbynkem-transparent.png'
export const Navbar = () => {

  return (
    <nav className="navbar bg-dark navbar-expand-lg" data-bs-theme='dark'>
      <div className="container-fluid">
        <img className='navbar-brand' src={braidsByNkem} alt='logo' />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href={`/`} className="nav-link active">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a href={'#service'} className="nav-link">
              pricing
              </a>
            </li>

            <li className="nav-item">
              <a href='https://wa.link/ioxpj7' target='_blank' className='nav-link' >
                Send a message
              </a>
            </li>

            

            {/* <li className="nav-item">
              <a href="https://wa.link/ubp14t" target="_blank" rel="noreferrer">
                <button className="btn">Contact </button>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}