import parse from "html-react-parser";
import { Link } from "react-router-dom";

const HeroBanner1 = ({
  subtitle,
  title,
  content,
  btnname,
  btnurl,
  btntwo,
  btn2url,
  cusimg,
  cusnumber,
  cuscontent,
  rating,
  ratingcon,
  img,
}) => {
  return (
    <section className="intro-section" id="inicio">
      <div className="intro-container-wrapper style1">
        <div className="container">
          <div className="intro-wrapper style1 fix">
            <div
              className="shape3 d-none d-xxl-block cir36"
              style={{
                background: "linear-gradient(135deg, #16539D 0%, #243D78 100%)",
                width: "120px", // ajusta el tamaño según lo necesites
                height: "120px",
                borderRadius: "50%",
                position: "absolute",
                zIndex: 1,
              }}
            ></div>
            <div className="container">
              <div className="row">
                <div className="col-xl-7 order-2 order-xl-1">
                  <div className="intro-content">
                    <div className="intro-section-title">
                      <div className="intro-subtitle">
                        {parse(subtitle)}{" "}
                        <img
                          src="/assets/images/icon/fireIcon.svg"
                          alt="icon"
                        />
                      </div>
                      <h1
                        className="intro-title wow fadeInUp"
                        data-wow-delay=".2s"
                      >
                        {title}
                      </h1>
                      <p
                        className="intro-desc wow fadeInUp"
                        data-wow-delay=".4s"
                      >
                        {content}
                      </p>
                    </div>
                    <div
                      className="btn-wrapper style1 wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      <Link className="theme-btn" to={btnurl}>
                        {btnname}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_11_22)">
                            <path
                              d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_11_22">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 order-1 order-xl-2">
                  <div className="intro-thumb">
                    <img
                      className="main-thumb img-custom-anim-right wow fadeInUp"
                      data-wow-delay=".4s"
                      src={img}
                      alt="thumb"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner1;
