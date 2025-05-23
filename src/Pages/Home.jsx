import About1 from "../Components/About/About1";
import Feature1 from "../Components/Feature/Feature1";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
import HowWork from "../Components/HowWork/HowWork";
import Pricing1 from "../Components/Pricing/Pricing1";

const Home = () => (
  <div>
    <HeroBanner1
      subtitle="<span>📢 ¡Nuevo!</span>Perspectivas Estratégicas para el Sector Concretero 2025"
      title="Entiende el Futuro del Concreto en México"
      content="Descubre el primer análisis especializado del mercado de concreto en México desde la perspectiva de los concreteros independientes. El Reporte AMCI 2025 combina inteligencia de datos, proyecciones regionales, factores económicos clave y oportunidades estratégicas que te permitirán tomar mejores decisiones, anticiparte al cambio y fortalecer tu operación."
      btnname="Descargar Reporte"
      btnurl="#contacto"
      btntwo="Learn More"
      btn2url="/about"
      cusimg="/assets/images/intro/introProfileThumb1_1.png"
      cusnumber="2,291"
      cuscontent="Happy Customers"
      rating="4.8/5"
      ratingcon="Rating"
      img="/assets/images/intro/introThumb1_1.png"
    ></HeroBanner1>
    <About1
      img1="/assets/images/about/aboutThumb1_1.png"
      img2="/assets/images/about/aboutThumb1_2.png"
      subtitle="Acerca del Reporte AMCI"
      title="El Primer Reporte Hecho Por y Para Concreteros"
      content={
        <>
          El Reporte AMCI 2025 es un desarrollo en conjunto por AMCI y Teseo
          Data Lab.
          <br />
          Analiza más de 3 millones de datos integrados, identificando
          tendencias, riesgos, regiones clave y oportunidades estratégicas para
          concreteros, constructores, desarrolladores y proveedores del sector.
        </>
      }
      FeatureList={[
        "Proyecciones de consumo, precios y crecimiento regional.",
        "Mapa de oportunidades.",
        "Qué tipo de factores impactan el mercado.",
        "Modelo analítico con respaldo de IA aplicada al sector construcción",
      ]}
      btnname="Descargar Reporte"
      btnurl="#contacto"
    ></About1>
    <HowWork></HowWork>
    <Feature1></Feature1>
    <Pricing1></Pricing1>
  </div>
);

export default Home;
