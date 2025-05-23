const Footer = () => {
  return (
    <footer className="footer-section position-relative">
      <div className="footer-widgets-wrapper style1 fix">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-2 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <a href="#inicio">
                    <img
                      src="/assets/images/icon/logo/amci.webp"
                      alt="logo-img"
                    />
                  </a>
                </div>
                <div className="footer-content">
                  <p>
                    Somos una Asociación Mexicana comprometida en promover la
                    formalización de la industria concretera independiente,
                    proyectada como un organismo que representa a productores y
                    proveedores en materia del concreto y la construcción.
                  </p>
                </div>
              </div>
              <div className="single-footer-widget">
                <div className="widget-head">
                  <img
                    src="/assets/images/icon/logo/teseo.webp"
                    alt="logo-img"
                  />
                </div>
                <div className="footer-content">
                  <p>
                    Firma de análisis estratégico que desarrolla soluciones
                    basadas en datos para organizaciones que enfrentan retos
                    complejos y dinámicos.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-2 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="widget-head enterText">
                  <h3>Secciones</h3>
                </div>
                <ul className="list-area enterText">
                  <li>
                    <a href="#inicio">Home</a>
                  </li>
                  <li>
                    <a href="#acercaDe">Acerca de</a>
                  </li>
                  <li>
                    <a href="#proyectos">Cómo funciona</a>
                  </li>
                </ul>
              </div>
              <div className="single-footer-widget centerObject">
                <div className="footer-content">
                  <div class="store-links">
                    <div class="apple">
                      <a href="#contacto">Descargar reporte</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="single-footer-widget">
                <div className="contact-box">
                  <div className="subtitle">Información de contacto AMCI</div>
                  <div className="widget-head">
                    ASOSIACION MEXICANA DE CONCRETERO INDEPENDIENTES
                  </div>
                  <ul
                    className="footer-contact-list"
                    style={{ listStyle: "none", padding: 0, margin: 0 }}
                  >
                    <li
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 8,
                      }}
                    >
                      <i
                        className="bi bi-telephone-fill"
                        style={{ fontSize: 20, marginRight: 10 }}
                      ></i>
                      <span>81 1804 4452 / 81 1804 1943</span>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 8,
                      }}
                    >
                      <i
                        className="bi bi-envelope-fill"
                        style={{ fontSize: 20, marginRight: 10 }}
                      ></i>
                      <a
                        href="mailto:administrador@amciac.org"
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        administrador@amciac.org
                      </a>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 8,
                      }}
                    >
                      <i
                        className="bi bi-globe"
                        style={{ fontSize: 20, marginRight: 10 }}
                      ></i>
                      <a
                        href="https://www.amciac.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        www.amciac.org
                      </a>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 8,
                      }}
                    >
                      <i
                        className="bi bi-instagram"
                        style={{ fontSize: 20, marginRight: 10 }}
                      ></i>
                      <a
                        href="https://instagram.com/amci.ac"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        amci.ac
                      </a>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 8,
                      }}
                    >
                      <i
                        className="bi bi-linkedin"
                        style={{ fontSize: 20, marginRight: 10 }}
                      ></i>
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "inherit",
                          textDecoration: "none",
                          fontWeight: "bold",
                        }}
                      >
                        Asociación Mexicana de Concreteros Independientes
                      </a>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 8,
                      }}
                    >
                      <i
                        className="bi bi-facebook"
                        style={{ fontSize: 20, marginRight: 10 }}
                      ></i>
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "inherit",
                          textDecoration: "none",
                          fontWeight: "bold",
                        }}
                      >
                        Asociación Mexicana de Concreteros Independientes - AMCI
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="single-footer-widget">
                <div className="contact-box">
                  <div className="subtitle">Información de contacto TESEO</div>
                  <div className="widget-head">TESEO Data Lab</div>
                  <ul
                    className="footer-contact-list"
                    style={{ listStyle: "none", padding: 0, margin: 0 }}
                  >
                    <li
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 8,
                      }}
                    >
                      <i
                        className="bi bi-telephone-fill"
                        style={{ fontSize: 20, marginRight: 10 }}
                      ></i>
                      <span>771 330 6407</span>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 8,
                      }}
                    >
                      <i
                        className="bi bi-envelope-fill"
                        style={{ fontSize: 20, marginRight: 10 }}
                      ></i>
                      <a
                        href="mailto:contacto@teseodata.com"
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        contacto@teseodata.com
                      </a>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 8,
                      }}
                    >
                      <i
                        className="bi bi-globe"
                        style={{ fontSize: 20, marginRight: 10 }}
                      ></i>
                      <a
                        href="https://www.teseodata.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        www.teseodata.com
                      </a>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 8,
                      }}
                    >
                      <i
                        className="bi bi-instagram"
                        style={{ fontSize: 20, marginRight: 10 }}
                      ></i>
                      <a
                        href="https://instagram.com/teseo_data"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        teseo_data
                      </a>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 8,
                      }}
                    >
                      <i
                        className="bi bi-linkedin"
                        style={{ fontSize: 20, marginRight: 10 }}
                      ></i>
                      <a
                        href="https://www.linkedin.com/company/teseo-data-lab"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        Teseo Data Lab
                      </a>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 8,
                      }}
                    >
                      <i
                        className="bi bi-facebook"
                        style={{ fontSize: 20, marginRight: 10 }}
                      ></i>
                      <a
                        href="https://www.facebook.com/teseodata"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        Teseo
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
