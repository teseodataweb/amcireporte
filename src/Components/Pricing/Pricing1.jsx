import { useState } from "react";

const Pricing1 = () => {
  return (
    <section className="pricing-section section-padding pt-0 fix" id="contacto">
      <div className="container">
        <div className="section-title text-center mxw-685 mx-auto">
          <h2 className="title">Adquiere el Reporte AMCI 2025</h2>
          <p className="text">
            Reporte Completo: Perspectivas del Mercado de Concreto en México 2025
          </p>
        </div>

        <div className="pricing-wrapper style1">
          <div className="tab-section d-flex justify-content-center align-items-center"></div>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane active" id="pills-monthly" role="tabpanel" aria-labelledby="pills-monthly-tab">
              <div className="row gy-5 justify-content-center">
                <div className="col-lg-6">
                  <form
                    name="contacto"
                    method="POST"
                    action="https://script.google.com/macros/s/AKfycbzViv_zVZI7a-NZMc20VfHaHTttQpNxwZqoPtmVSK5SnPt_pWO_5igM1kNG_fZ5ITuK/exec"
                    className="p-4 shadow rounded bg-white"
                    target="_blank" // esto evita que la página actual recargue
                  >
                    <div className="mb-3">
                      <label className="form-label">Nombre</label>
                      <input type="text" className="form-control" name="nombre" required />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Correo electrónico</label>
                      <input type="email" className="form-control" name="correo" required />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Teléfono</label>
                      <input type="tel" className="form-control" name="telefono" required />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Empresa</label>
                      <input type="text" className="form-control" name="empresa" required />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Código Postal</label>
                      <input type="number" className="form-control" name="codigoPostal" required />
                    </div>

                    <button type="submit" className="theme-btn w-100">
                      Solicitar Reporte
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing1;
