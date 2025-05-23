import { useState } from "react";

const Pricing1 = () => {
  const [isActive, setIsActive] = useState('monthly');
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
    // Aquí puedes agregar la lógica para enviar el formulario
    alert("Formulario enviado:\n" + JSON.stringify(form, null, 2));
  };

  return (
    <section className="pricing-section section-padding pt-0 fix" id="contacto">
      <div className="container">
        <div className="section-title text-center mxw-685 mx-auto">
          <h2 className="title">Adquiere el Reporte AMCI 2025 y Toma Decisiones con Datos Reales</h2>
          <p className="text">
            Reporte Completo: Perspectivas del Mercado de Concreto en México 2025
          </p>
        </div>
        <div className="pricing-wrapper style1">
          <div className="tab-section d-flex justify-content-center align-items-center"></div>
          <div className="tab-content" id="pills-tabContent">
            <div className={`tab-pane ${isActive === 'monthly' ? 'active' : ''}`} id="pills-monthly" role="tabpanel"
              aria-labelledby="pills-monthly-tab">
              <div className="row gy-5 justify-content-center">
                <div className="col-lg-6">
                  <form className="p-4 shadow rounded bg-white" onSubmit={handleSubmit}>
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