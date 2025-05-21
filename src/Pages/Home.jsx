import About1 from "../Components/About/About1";
import Blog1 from "../Components/Blog/Blog1";
import Brand1 from "../Components/Brand/Brand1";
import Choose1 from "../Components/Choose/Choose1";
import Counter1 from "../Components/Counter/Counter1";
import Cta1 from "../Components/Cta/Cta1";
import Faq1 from "../Components/Faq/Faq1";
import Feature1 from "../Components/Feature/Feature1";
import Feature2 from "../Components/Feature/Feature2";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
import HowWork from "../Components/HowWork/HowWork";
import Pricing1 from "../Components/Pricing/Pricing1";
import Testimonial from "../Components/Testimonial/Testimonial";

const Home = () => (
  <div>
    <HeroBanner1
      subtitle="<span>📢 ¡Nuevo!</span>Perspectivas Estratégicas para el Sector Concretero 2025"
      title="Entiende el Futuro del Concreto en México Hoy"
      content="Descubre el primer análisis especializado del mercado de concreto en México desde la perspectiva de los concreteros independientes. El Reporte AMCI 2025 combina inteligencia de datos, proyecciones regionales, factores económicos clave y oportunidades estratégicas que te permitirán tomar mejores decisiones, anticiparte al cambio y fortalecer tu operación."
      btnname="📥 Descargar Reporte"
      btnurl="#"
      btntwo="Learn More"
      btn2url="/about"
      cusimg="/assets/images/intro/introProfileThumb1_1.png"
      cusnumber="2,291"
      cuscontent="Happy Customers"
      rating="4.8/5"
      ratingcon="Rating"
      img="/assets/images/intro/introThumb1_1.png"
    ></HeroBanner1>
    {/* <Brand1></Brand1> */}
    <About1
      img1="/assets/images/about/aboutThumb1_1.png"
      img2="/assets/images/about/aboutThumb1_2.png"
      subtitle="📘 Acerca del Reporte AMCI"
      title="El Primer Reporte Estratégico Hecho Por y Para Concreteros Independientes"
      content={
        <>
          El Reporte AMCI 2025 es una publicación desarrollada en conjunto por
          la Asociación Mexicana de Concreteros Independientes (AMCI) y Teseo
          Data Lab, que ofrece la visión más completa y actualizada del mercado
          del concreto en México.
          <br />
          Analiza más de 3 millones de datos integrados, identificando
          tendencias, riesgos, regiones clave y oportunidades estratégicas para
          concreteros, constructores, desarrolladores y proveedores del sector.
        </>
      }
      FeatureList={[
        "📊 Proyecciones de consumo, precios y crecimiento regional.",
        "📍 Mapa de oportunidades para concreteros independientes.",
        "🛠️ Factores económicos, políticos y técnicos que impactan el mercado.",
        "🧠 Modelo analítico con respaldo de IA aplicada al sector construcción",
      ]}
      btnname="📥 Descargar Reporte"
      btnurl="#"
    ></About1>
    <HowWork></HowWork>
    {/* <Choose1
            subtitle="App Advantage"
            title="Get Benefit By Using Trending Apps"
            content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly"
            FeatureList={[
                "Friendly Design",
                "SEO Optimized",
            ]}
            FeatureList2={[
                "Cloud Storage",
                "Strong Security",
            ]}
            btnname="Download App"
            btnurl="/about"
        ></Choose1> */}
    <Feature1></Feature1>
    {/* <Counter1></Counter1> */}
    {/* <Faq1></Faq1> */}
    {/* <Testimonial></Testimonial> */}
    {/* <Feature2></Feature2> */}
    <Pricing1></Pricing1>
    {/* <Cta1
            subtitle="Our App"
            title="Download our app and start your free trail to get started today!"
            content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised"
            btnurl1="https://play.google.com/store"
            btnurl2="https://www.apple.com/store"
            img="/assets/images/cta/ctaThumb1_1.png"
        ></Cta1> */}
    {/* <Blog1></Blog1> */}
  </div>
);

export default Home;
