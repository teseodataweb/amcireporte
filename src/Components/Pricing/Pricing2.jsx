import { useState } from "react";
import PricingCard from "../Card/PricingCard";

const Pricing2 = () => {

    const [isActive, setIsActive] = useState('monthly');

    return (
        <section className="pricing-section fix">
        <div className="container">
            <div className="section-title text-center mxw-685 mx-auto">
                <div className="subtitle">
                Plan Comercial <img src="/assets/images/icon/fireIcon.svg" alt="icon" />
                </div>
                <h2 className="title">¿Afiliado AMCI o externo? Tenemos un plan para ti</h2>
                <p className="text">Consulta las opciones de acceso y obtén tu reporte con análisis, gráficas y datos estratégicos para tu empresa.
                </p>
            </div>
            <div className="pricing-wrapper style1">
                <div className="tab-content" id="pills-tabContent">
                    <div className={`tab-pane ${isActive === 'monthly' ? 'active' : ''}`} id="pills-monthly" role="tabpanel"
                        aria-labelledby="pills-monthly-tab">
                        <div className="row gy-5">

                            <PricingCard
                                name="Acceso Preferente AMCI"
                                price="$10,000 MXN"
                                monthly="Único Pago"
                                content="Tarifa exclusiva para miembros activos de AMCI. Accede al reporte completo con datos estratégicos, mapas, gráficas y oportunidades clave del sector."
                                FeatureList={[
                                    "Acceso inmediato al reporte",
                                    "Consultoria Gratuita",
                                ]} 
                            ></PricingCard>

                            <PricingCard
                                name="Acceso General al Reporte"
                                price="$35,000 MXN"
                                monthly="Único Pago"
                                content="Versión completa del reporte para profesionales, consultores o empresas sin afiliación. Ideal para estudios de mercado, análisis comercial o planeación estratégica."
                                FeatureList={[
                                    "Acceso inmediato al reporte",
                                    "Asesoría de interpretación",
                                ]} 
                            ></PricingCard>

                        </div>
                    </div>
                    <div className={`tab-pane ${isActive === 'yearly' ? 'active' : ''}`} id="pills-yearly" role="tabpanel" aria-labelledby="pills-yearly-tab">
                        <div className="row gy-5">

                        <PricingCard
                                name="Basic Plan"
                                price="$34.99"
                                monthly="Per Month"
                                content="There are many variations of passages of Lorem Ipsum available, but the majority"
                                FeatureList={[
                                    "7 days free access",
                                    "Maximum of 5 collaborators",
                                    "Cloud backup 1GB",
                                    "Maximum 50 tasks per week",
                                    "Updates for 1 Year",
                                ]} 
                                btnname="Get You Free plan"
                                btnurl="/pricing"
                            ></PricingCard>

                            <PricingCard
                                name="Standard Plan"
                                price="$64.99"
                                monthly="Per Month"
                                content="There are many variations of passages of Lorem Ipsum available, but the majority"
                                FeatureList={[
                                    "7 days free access",
                                    "Maximum of 5 collaborators",
                                    "Cloud backup 1GB",
                                    "Maximum 50 tasks per week",
                                    "Updates for 1 Year",
                                ]} 
                                btnname="Get You Free plan"
                                btnurl="/pricing"
                            ></PricingCard>

                            <PricingCard
                                name="Premium Plan Plan"
                                price="$84.99"
                                monthly="Per Month"
                                content="There are many variations of passages of Lorem Ipsum available, but the majority"
                                FeatureList={[
                                    "7 days free access",
                                    "Maximum of 5 collaborators",
                                    "Cloud backup 1GB",
                                    "Maximum 50 tasks per week",
                                    "Updates for 1 Year",
                                ]} 
                                btnname="Get You Free plan"
                                btnurl="/pricing"
                            ></PricingCard>                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Pricing2;