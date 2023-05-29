import './flip.css'; // Import your CSS file for styling

export function About(){
    return (
      <section id="about">
      {/* About 01 */}
      <div id="about-01">
        <div className="content-box-lg">
          <div className="container">
            <div className="row">
              {/* About Left Side */}
              <div className="col-md-6 col-sm-6 wow slideInLeft" data-wow-duration="1s">
                <div id="about-left">
                  <div className="vertical-heading">
                    <h5>Who We Are</h5>
                    <h2>A <strong>Story</strong><br />About Us</h2>
                  </div>
                </div>
              </div>
              {/* About Right Side */}
              <div className="col-md-6 col-sm-6 wow slideInRight" data-wow-duration="1s">
                <div id="about-right">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente aspernatur harum libero et nostrum sequi consequatur, tempore accusamus ab esse, voluptatem laudantium voluptas rerum? Laborum id ad alias saepe nemo,alias saepe ne consequatur.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur asperiores ad culpa similique, ratione dicta. Cumque, officia. Velit et inventore hic, unde, eum ea! Vitae dolores culpa molestias, in ratione.</p>
                </div>
              </div>
            </div>
            {/* About Bottom  
             */}
            <div className="row">
              <div className="col-md-12 wow fadeInUp" data-wow-duration="2s">
                <div id="about-bottom">
                  
                  <img src="./media/auth/about2.jpg" alt="About Us" className="img-responsive" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About 01 Ends */}
  
        <div id="about-02">
        <section id="services" className="services">
      
      <div className="container">

        <div className="section-title">
          <h3>We do offer awesome <span>Services</span></h3>
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon"><i className="fa fa-pencil"></i></div>
              <h4 className="title"><a href="">Passion</a></h4>
              <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon"><i className="fa fa-eye"></i></div>
              <h4 className="title"><a href="">Vision</a></h4>
              <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon"><i className="fa fa-calendar"></i></div>
              <h4 className="title"><a href="">Magni Dolores</a></h4>
              <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon"><i  className="fa fa-rocket"></i></div>
              <h4 className="title"><a href="">Mission</a></h4>
              <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>

        </div>

      </div>
    </section>
        </div>
        </section>
      );
}