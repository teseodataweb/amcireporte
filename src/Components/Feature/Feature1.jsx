import FeatureCard from "../Card/FeatureCard";
import SectionTitle from "../Common/SectionTitle";

const Feature1 = () => {
    return (
        <section className="wcu-section section-padding fix">
            <div className="wcu-container-wrapper style1">
                <div className="container">
                    <div className="section-title text-center mxw-685 mx-auto wow fadeInUp" data-wow-delay=".2s">
                        <SectionTitle
                            SubTitle="¿Por qué descargar este reporte?"
                            Title="Una Herramienta Esencial para Tomar Decisiones en el Sector del Concreto"
                        ></SectionTitle>                       
                    </div>
                    <div className="wcu-wrapper style1">
                        <div className="row gy-5 d-flex justify-content-center">
                            <div className="col-xl-4 d-flex justify-content-center">
                                <div className="wcu-content">
                                    <FeatureCard
                                        img="/assets/images/icon/nuevos/analisis.webp"
                                        title="Análisis de Mercado"
                                        content="Conoce el comportamiento del consumo y precios en norte, centro, sur y bajío de México."
                                    ></FeatureCard>
                                     <FeatureCard
                                        img="/assets/images/icon/nuevos/oportunidades.webp"
                                        title="Oportunidades"
                                        content="Identifica zonas con alta demanda donde puedes competir y crecer."
                                    ></FeatureCard>    
                                      <FeatureCard
                                        img="/assets/images/icon/nuevos/proyecciones.webp"
                                        title="Proyecciones Estratégicas hasta 2032"
                                        content="Accede a estimaciones sobre producción, consumo y valor del mercado"
                                    ></FeatureCard> 
                                </div>
                            </div>
                            <div className="col-xl-4 d-flex justify-content-center">
                                <div className="wcu-thumb wow fadeInUp centerObject" data-wow-delay=".2s">
                                    <div className="main-thumb wow bounceInUp" data-wow-delay=".6s"><img
                                            src="/assets/images/img/tableta2.webp" alt="thumb" /></div>
                                </div>
                            </div>
                            <div className="col-xl-4 d-flex justify-content-center justify-content-xl-end">
                                <div className="wcu-content">
                                    <FeatureCard
                                        img="/assets/images/icon/nuevos/factores.webp"
                                        title="Factores Económicos Críticos"
                                        content="Inflación, costos logísticos, financiamiento y normativas ambientales"
                                    ></FeatureCard>
                                    <FeatureCard
                                        img="/assets/images/icon/nuevos/ia.webp"
                                        title="IA Aplicada"
                                        content="Se utilizan modelos de análisis avanzados, especializados en construcción."
                                    ></FeatureCard>                            
                                    <FeatureCard
                                        img="/assets/images/icon/nuevos/estrategia.webp"
                                        title="Base de Estrategia"
                                        content="Justifica decisiones comerciales, busca inversiones o define territorios."
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