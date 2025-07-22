
import blossomLogo from '../asset/blossomdelightlogo.png'
function Navbar() {
  return (
  <>
  <nav className="navbar navbar-expand-lg " data-bs-theme='dark'>
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img  src={blossomLogo} alt="blossom delight brand" /> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>

       <li className="nav-item">
          <a className="nav-link" href="#about">About Us</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="https://theblossomcakes.com" target='_blank' rel='noreferrer'>Blossom Cakes</a>
        </li>
        
        <li className="nav-item">
          <a href="https://wa.link/5n26d2" rel="noreferrer" target="_blank"><button className="btn btn-danger">Message Us</button></a>
        
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar