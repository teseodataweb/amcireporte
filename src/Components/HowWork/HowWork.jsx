import SectionTitle from "../Common/SectionTitle";

const HowWork = () => {
  return (
    <section className="work-process-section section-padding fix" id="proyectos">
      <div className="work-process-container-wrapper style1">
        <div className="container">
          <div className="section-title text-center mxw-565 mx-auto">
            <SectionTitle
              SubTitle="Cómo funciona"
              Title="Descarga el Reporte en 3 Pasos y Transforma Tu Estrategia Comercial"
            ></SectionTitle>
          </div>
          <div className="work-process-wrapper style1">
            <div className="shape">
              <img
                src="/assets/images/shape/workProcessShape1_1.png"
                alt="shape"
              />
            </div>
            <div className="row">
              <div className="col-xl-4">
                <div
                  className="work-process-box style1 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="step">PASO 01</div>
                  <div className="title">SOLICITA EL REPORTE</div>
                  <div className="text">Regístrate en segundos</div>
                </div>
              </div>
              <div className="col-xl-4">
                <div
                  className="work-process-box style1 child2 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="step">PASO 02</div>
                  <div className="title">RECÍBELO AL INSTANTE</div>
                  <div className="text">Prueba una Demo Instantanea</div>
                </div>
              </div>
              <div className="col-xl-4">
                <div
                  className="work-process-box style1 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="step">PASO 03</div>
                  <div className="title">CONSULTA AL REPORTE COMPLETO</div>
                  <div className="text">
                  Completa tu pago y recibe el informe completo.
                  </div>
                  <div className="maginBottom"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWork;
