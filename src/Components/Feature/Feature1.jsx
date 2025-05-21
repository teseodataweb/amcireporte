import FeatureCard from "../Card/FeatureCard";
import SectionTitle from "../Common/SectionTitle";

const Feature1 = () => {
    return (
        <section className="wcu-section section-padding fix">
            <div className="wcu-container-wrapper style1">
                <div className="container">
                    <div className="section-title text-center mxw-685 mx-auto wow fadeInUp" data-wow-delay=".2s">
                        <SectionTitle
                            SubTitle="📌 ¿Por qué descargar este reporte?"
                            Title="Una Herramienta Esencial para Tomar Decisiones en el Sector del Concreto"
                        ></SectionTitle>                       
                    </div>
                    <div className="wcu-wrapper style1">
                        <div className="row gy-5 d-flex justify-content-center">
                            <div className="col-xl-4 d-flex justify-content-center">
                                <div className="wcu-content">
                                    <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_1.svg"
                                        title="Análisis de Mercado por Región"
                                        content="Conoce el comportamiento del consumo y precios del concreto en el norte, centro, sur y bajío de México."
                                    ></FeatureCard>
                                     <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_2.svg"
                                        title="Oportunidades para Concreteros"
                                        content="Identifica zonas con alta demanda donde los concreteros independientes pueden competir y crecer."
                                    ></FeatureCard>    
                                      <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_3.svg"
                                        title="Proyecciones Estratégicas hasta 2032"
                                        content="Accede a estimaciones sobre producción, consumo y valor del mercado para anticiparte al cambio."
                                    ></FeatureCard> 
                                </div>
                            </div>
                            <div className="col-xl-4 d-flex justify-content-center">
                                <div className="wcu-thumb wow fadeInUp" data-wow-delay=".2s">
                                    <div className="main-thumb wow bounceInUp" data-wow-delay=".6s"><img
                                            src="/assets/images/wcu/wcuThumb1_1.png" alt="thumb" /></div>
                                    <div className="shape"><img src="/assets/images/shape/wcuThumbShape1_1.png" alt="shape" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 d-flex justify-content-center justify-content-xl-end">
                                <div className="wcu-content">
                                    <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_4.svg"
                                        title="Factores Económicos Críticos"
                                        content="Inflación, costos logísticos, financiamiento y normativas ambientales explicados con claridad."
                                    ></FeatureCard>
                                    <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_5.svg"
                                        title="Inteligencia Artificial Aplicada"
                                        content="El reporte utiliza modelos de análisis avanzados desarrollados por Teseo Data Lab, especializados en construcción."
                                    ></FeatureCard>                            
                                    <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_6.svg"
                                        title="Úsalo como Base de Estrategia"
                                        content="Ideal para justificar decisiones comerciales, desarrollar propuestas, buscar inversión o definir territorios."
                                    ></FeatureCard> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature1;