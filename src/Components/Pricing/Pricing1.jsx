import { useState } from "react";

const Pricing1 = () => {
  const [bannerVisible, setBannerVisible] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    empresa: "",
    codigoPostal: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let key in form) {
      formData.append(key, form[key]);
    }

    fetch("https://script.google.com/macros/s/AKfycbzViv_zVZI7a-NZMc20VfHaHTttQpNxwZqoPtmVSK5SnPt_pWO_5igM1kNG_fZ5ITuK/exec", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.text())
      .then((text) => {
        if (text === "OK") {
          setBannerVisible(true);
          setForm({
            nombre: "",
            correo: "",
            telefono: "",
            empresa: "",
            codigoPostal: "",
          });
        }
      })
      .catch((error) => {
        console.error("Error al enviar a Apps Script:", error);
      });
  };

  return (
    <section className="pricing-section section-padding pt-0 fix" id="contacto">
      <div className="container">
        <div className="section-title text-center mxw-685 mx-auto">
          <h2 className="title">Regístrate Ahora</h2>
          <p className="text">
            Reporte Completo: Perspectivas del Mercado de Concreto en México 2025
          </p>
        </div>

        <div className="pricing-wrapper style1">
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane active">
              <div className="row gy-5 justify-content-center">
                <div className="col-lg-6">
                  <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-white">
                    <div className="mb-3">
                      <label className="form-label">Nombre</label>
                      <input
                        type="text"
                        className="form-control"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Correo electrónico</label>
                      <input
                        type="email"
                        className="form-control"
                        name="correo"
                        value={form.correo}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Teléfono</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="telefono"
                        value={form.telefono}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Empresa</label>
                      <input
                        type="text"
                        className="form-control"
                        name="empresa"
                        value={form.empresa}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Código Postal</label>
                      <input
                        type="number"
                        className="form-control"
                        name="codigoPostal"
                        value={form.codigoPostal}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <button type="submit" className="theme-btn w-100">
                      Solicitar Reporte
                    </button>
                  </form>

                  {bannerVisible && (
                    <div className="alert alert-success mt-4" role="alert">
                      Gracias por registrarte. En breve recibirás indicaciones para poder obtener tu reporte.
                    </div>
                  )}
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
