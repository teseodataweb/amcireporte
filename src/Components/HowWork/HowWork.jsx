import SectionTitle from "../Common/SectionTitle";

const HowWork = () => {
    return (
        <section className="work-process-section section-padding fix">
            <div className="work-process-container-wrapper style1">
                <div className="container">
                    <div className="section-title text-center mxw-565 mx-auto">
                        <SectionTitle
                            SubTitle="📥 Cómo funciona"
                            Title="Descarga el Reporte en 3 Pasos y Transforma Tu Estrategia Comercial"
                        ></SectionTitle>
                    </div>
                    <div className="work-process-wrapper style1">
                        <div className="shape"><img src="/assets/images/shape/workProcessShape1_1.png" alt="shape" /></div>
                        <div className="row">
                            <div className="col-xl-4">
                                <div className="work-process-box style1 wow fadeInUp" data-wow-delay=".2s">
                                    <div className="step">PASO 01</div>
                                    <div className="title">Solicita el reporte</div>
                                    <div className="text">Rellena un breve formulario con tu nombre, empresa y correo electrónico.</div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="work-process-box style1 child2 wow fadeInUp" data-wow-delay=".4s">
                                    <div className="step">PASO 02</div>
                                    <div className="title">Recíbelo directamente en tu correo</div>
                                    <div className="text">En segundos tendrás acceso al reporte completo en formato PDF, listo para consulta o presentación.</div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="work-process-box style1 wow fadeInUp" data-wow-delay=".6s">
                                    <div className="step">PASO 03</div>
                                    <div className="title">Explora, analiza y aplica</div>
                                    <div className="text">Utiliza las gráficas, mapas y proyecciones para ajustar tu estrategia y descubrir nuevas oportunidades.</div>
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