import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../assets/images/logo.png';

export default class Home extends Component {
    render(){
        return(
         <div>
             <section>
                <div></div>
                <div className="container">
                  <div>
                    <div className="banner-content">
                      
                      <h1>Karengata</h1>
                      <p>Seventh-Day Adventist Church</p>
                    </div>
                  </div>
                </div>
              </section>
    
              <section>
                <div className="container">
                  <div>
                    <div>
                      <div>
                        <h1>Empowered for His Service</h1>
                        <div className="row">
                          <div className="col-sm-3 card" >
                              <img  className="card-img-top" src={Logo} alt="pic1"/>
                              <div className="card-body">
                                <h5 className="card-title">Stanley Muchoki</h5>
                                  <p className="card-text">Senior Pastor
                                    +254716402525
                                  </p>
                              </div>
                          </div>
                          <div className="col-sm-3 card" >
                              <img  className="card-img-top" src={Logo} alt="pic1"/>
                              <div className="card-body">
                                <h5 className="card-title">Collins Oyamo</h5>
                                  <p className="card-text">Associate Pastor <br/>
                                    +254 723 696 659
                                  </p>
                              </div>
                          </div>
                          <div className="col-sm-3 card" >
                              <img  className="card-img-top" src={Logo} alt="pic1"/>
                              <div className="card-body">
                                <h5 className="card-title">Moses Nyang'iye</h5>
                                  <p className="card-text">Head Elder <br/>
                                    +254 724 417 899
                                  </p>
                              </div>
                          </div>
                          <div className="col-sm-3 card" >
                              <img  className="card-img-top" src={Logo} alt="pic1"/>
                              <div className="card-body">
                                <h5 className="card-title">Ruth Masika</h5>
                                  <p className="card-text">Church Administrator <br/>
                                    +254 724 417 899
                                  </p>
                              </div>
                          </div>
                       </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <hr/>
              <section>
                <div>
                  <div>
                    <div>
                      <h1>Our core Features</h1>
                    </div>
                  </div>
                </div>
              </section>
              <hr/>
              <section>
                <div>
                  <div>
                    <div>
                      <h1>Upcoming Sabbaths</h1>
                      <div className="row">
                        <div className="col-sm-3">
                          <h5>Elders Sabbath</h5>
                          <p>This sabbath will be 
                            led by our Elders.</p>
                        </div>
                        <div className="col-sm-3">
                          <h5>Children Sabbath</h5>
                        </div>
                        <div className="col-sm-3">
                          <h5>AMO Sabbath</h5>
                        </div>
                        <div className="col-sm-3">
                          <h5>Holy Com Sabbath</h5>
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