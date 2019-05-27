import React ,{Component } from 'react'
import './pages.css';

export default class Contact extends Component{
    render(){
        return(
            <div>
                <section className='contact-us'>
                    <div className="container">
                        <h2>Talk to Us</h2>
                    </div>
                </section>
                <div className="container">
                    <section>
                        <div className="row">
                            <div className="col-lg-6 col-sm-7">
                                <div className="contact-info-box address clearfix">
                                    <h3><i className="icon-map-marker"></i>Address:</h3>
                                    <span>karengata</span>
                                </div>
                                <div className="contact-info-box phone clearfix">
                                    <h3><i className="fa fa-phone"></i></h3>
                                    <span>+254716042525</span>
                                </div>
                                <div className="contact-info-box email clearfix">
                                    <h3><i className="fa fa-pencil"></i>Email:</h3>
                                    <span>karengata@admin.info</span>
                                </div>
                                <div className="contact-info-box hours clearfix">
                                    <h3><i className="fa fa-clock-o"></i>Hours:</h3>
                                    <span>
                                        <strong>Monday- Thurday:</strong>10am -6pm <br/>
                                        <strong>Friday:</strong>visit <br/>
                                        <strong>Saturday - Sunday</strong>Sabbath

                                        </span>
                                </div>
                                <ul className="social-link">
                                    <li className="twitter">
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                    </li>
                                    <li className="facebook">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                    </li>
                                    <li className="twitter">
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-sm-5">
                                <div className="form">
                              
                                    <form action="" className="contactForm">
                                        <div className="form-group">
                                            <input type="text" className="form-control input-text" placeholder="Name"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control input-text" placeholder="Email"/>
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control input-text text-area" name="message" id="" placeholder="Message" rows="5"></textarea>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary" >Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}