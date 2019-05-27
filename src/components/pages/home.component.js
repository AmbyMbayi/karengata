import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Leader from '../../assets/images/leader.jpg';

export default class Home extends Component {
    render(){
        return(
         <div>
             <section className="main-section banner">
                <div></div>
                <div className="container">
                  <div>
                    <div className="banner-content">
                      
                      <h2>Karengata</h2>
                      <p>Seventh-Day Adventist Church</p>
                    </div>
                  </div>
                </div>
              </section>
              <hr/>
              
              <section className="main-section team">
                <div className="container">
                  <h2>Empowered in His Service</h2>
                  <h6>Servants of the Lord</h6>
                  <div className="team-leader-block clearfix">
                    <div className="team-leader-box">
                      <div className="team-leader">
                        <div className="team-leader-shadow"></div>
                        <img src={Leader} alt=""/>
                        
                      </div>
                      <h3>Pastor Muchoki</h3>
                      <span>Senior Pastor</span>
                      <p>+253459384573</p>
                    </div>
                    <div className="team-leader-box">
                      <div className="team-leader">
                        <div className="team-leader-shadow"></div>
                        <img src={Leader} alt=""/>
                       
                      </div>
                      <h3>Pastor Muchoki</h3>
                      <span>Senior Pastor</span>
                      <p>+253459384573</p>
                    </div>
                    <div className="team-leader-box">
                      <div className="team-leader">
                        <div className="team-leader-shadow"></div>
                        <img src={Leader} alt=""/>
                        
                      </div>
                      <h3>Pastor Muchoki</h3>
                      <span>Senior Pastor</span>
                      <p>+253459384573</p>
                    </div>
                    
                    
                  </div>
                </div>
              </section>
              
              <hr/>
              <section className="main-section feature">
                  <div className="container">
                    <div className="row">
                      <figure className="col-lg-5 col-sm-4">
                        <img src="" alt=""/>
                      </figure>
                      <div className="col-lg-7 col-sm-8 featured-work">
                          <h2>Our core Features</h2>
                          <p>Mission | Vision</p>
                          <div className="featured-box">
                              <div class="featured-box-col1">
                                <i className="fa fa-magic"></i>
                              </div>
                              <div className="featured-box-col2">
                                <h3>Mission</h3>
                                <p>The mission of the Seventh day Adventist Church is to 
                                  proclaim to all the people the everlasting Gospel in the 
                                  context of the Three angle Message of Rev 14:6-12 leading
                                  them to accept Jesus as Personal Saviour and to unite with
                                  His Church and Nurturing them in preparation of Christ's soon
                                  return</p>
                              </div>
                          </div>
                          <div className="featured-box">
                              <div class="featured-box-col1">
                                <i className="fa fa-magic"></i>
                              </div>
                              <div className="featured-box-col2">
                                <h3>The Vision</h3>
                                <p>As Karengata SDA Church, we are committed to Nurturing our members
                                  for excellence in worship, service and discipleship by creating,
                                  mobilizing resources and harnessing members' talents.</p>
                              </div>
                          </div>
                          <div className="featured-box">
                              <div class="featured-box-col1">
                                <i className="fa fa-magic"></i>
                              </div>
                              <div className="featured-box-col2">
                                <h3>The Vision</h3>
                                <p>Empowered and growing in Christ in a caring, loving Church family</p>
                              </div>
                          </div>
                      </div>
                    </div>
                  </div>
              </section>

              
              <hr/>
              <section className="main-section events">
                <div className="container">
                  <div>
                    <div>
                      <h2>Upcoming Sabbaths</h2>
                      <div className="row">
                        <div className="col-sm-3 card">
                          <h5>Elders Sabbath</h5>
                          <p>This sabbath will be 
                            led by our Elders. Keep them
                            in prayers</p>
                        </div>
                        <div className="col-sm-3 card">
                          <h5>Children Sabbath</h5>
                          <p>This sabbath will be 
                            led by our Elders. Keep them
                            in prayers</p>
                        </div>
                        <div className="col-sm-3 card">
                          <h5>AMO Sabbath</h5>
                          <p>This sabbath will be 
                            led by our Elders. Keep them
                            in prayers</p>
                        </div>
                        <div className="col-sm-3 card">
                          <h5>Holy Com Sabbath</h5>
                          <p>This sabbath will be 
                            led by our Elders. Keep them
                            in prayers</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <hr/>
            
              <footer className="footer text-center">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-3">
                      <h4 className="text-left">Newsletter</h4>
                      <p className="text-left">To get latest development info about us
                        kindly subscribe to the news letters below.
                      </p>
                      <form class="form-inline">
                        <div class="input-group mb-3">
                          <input type="text" class="form-control" placeholder="Email" aria-describedby="basic-addon2"/>
                          <div class="input-group-append">
                            <button class="input-group-text" id="basic-addon2">send</button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="col-sm-3">
                      <h4>Latest News</h4>
                      
                    </div>
                    <div className="col-sm-3">
                      <h4>Tags</h4>
                      
                    </div>
                    <div className="col-sm-3">
                      <h4 className="text-left">Address</h4>
                      <p className="text-left">Langata Road,after Bomas of Kenya Junction(Opposite Galleria)
                        P.O Box 258 Uhuru Gardens,
                        Nairobi-0057
                      </p>
                    </div>
                  </div>
                </div>
               
              </footer>
             <div className="copyright py-4 text-center text-white">
                <small>Copyright &copy; Karengata 2019</small>
              </div>
              
            </div>
         
        );
      }
}