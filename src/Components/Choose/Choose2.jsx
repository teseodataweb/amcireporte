
const Choose2 = ({img1,img2,img3,subtitle,title,content,boximg1,boxtitle1,boxcontent1,boximg2,boxtitle2,boxcontent2}) => {
    return (
        <section className="wcu-section">
        <div className="wcu-container-wrapper style2">
            <div className="container">
                <div className="wcu-wrapper style2  section-padding fix">
                    <div className="container">
                        <div className="row gy-5 gx-60 d-flex align-items-center">
                            <div className="col-xl-6">
                                <div className="wcu-thumb">
                                    <div className="main-thumb img-custom-anim-right wow fadeInUp" data-wow-delay=".4s">
                                        <img src={img1} alt="thumb" />
                                    </div>
                                    <div className="thumb2 float-bob-y"><img src={img2}
                                            alt="thumb" /></div>
                                    <div className="thumb3 float-bob-x"><img src={img3}
                                            alt="thumb" /></div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="wcu-content">
                                    <div className="section-title">
                                        <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                                            {subtitle} <img src="/assets/images/icon/fireIcon.svg"
                                                alt="icon" />
                                        </div>
                                        <h2 className="title wow fadeInUp" data-wow-delay=".4s">{title}</h2>
                                        <p className="text1 wow fadeInUp" data-wow-delay=".6s">{content}
                                        </p>
                                    </div>
                                    <div className="fancy-box style3 mb-20 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="icon">
                                            <img src={boximg1} alt="icon" />
                                        </div>
                                        <div className="content">
                                            <h4>{boxtitle1}</h4>
                                            <p className="text">{boxcontent1}</p>
                                        </div>
                                    </div>
                                    <div className="fancy-box style3 wow fadeInUp" data-wow-delay=".6s">
                                        <div className="icon">
                                            <img src={boximg2} alt="icon" />
                                        </div>
                                        <div className="content">
                                            <h4>{boxtitle2}</h4>
                                            <p className="text">{boxcontent2}</p>
                                        </div>
                                    </div>
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

export default Choose2;