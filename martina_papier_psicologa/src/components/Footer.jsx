export default function Footer () {
  return (
    <footer className="footer">
      <div className="row">
        <h2 className="footer-font">MPP</h2>
        <p className="footer-font">
          <i class="bi bi-geo-alt-fill"></i>
          Madrid, España
        </p>
      </div>
      <div className="row">
        <h3 className="footer-font">Contacto</h3>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-lg-1 col-2 text-center">
          <a href="https://wa.me/34661484915">
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>
        <div className="col-lg-1 col-2 text-center">
          <a href="mailto:martinapapier@martinapapierpsicologa.com">
            <i className="bi bi-envelope"></i>
          </a>
        </div>
        <div className="col-lg-1 col-2 text-center">
          <a href="https://www.linkedin.com/in/martinapapier/?originalSubdomain=es">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
