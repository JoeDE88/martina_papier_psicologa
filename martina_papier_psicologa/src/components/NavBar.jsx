export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand logo" href="#">
            MPP
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <h2 className="bi">
            Menú
            </h2>
            {/* <i className="bi bi-list"></i> */}
          </button>
          <div
            className="collapse navbar-collapse justify-content-around"
            id="navbarTogglerDemo02"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <h5>
                <a className="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
                </h5>
              </li>
              <li className="nav-item">
                <h5>
                <a className="nav-link active" aria-current="page" href="#">
                  Sobre mi
                </a>
                </h5>
              </li>
              <li className="nav-item">
                <h5>
                <a className="nav-link active" aria-current="page" href="#">
                  Acompañamiento
                </a>
                </h5>
              </li>
              <li className="nav-item">
                <h5>
                <a className="nav-link active" aria-current="page" href="#">
                  Contacto
                </a>
                </h5>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
