import React, { Component } from 'react';

import Image1 from '../../assets/images/image1.jpg';
import Image2 from '../../assets/images/image2.jpg';

export default class Index extends Component{
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8  text-left">
                            <img class="card-img-top" src={Image1} />
                            <h3>What is Lorem Ipsum?</h3>
                            <small>posted by Unknown | featured, great, men, women,</small><br/>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer 
                                took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic 
                                typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                                with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                                recently with desktop publishing software like Aldus PageMaker including 
                                versions of Lorem Ipsum.</p>
                                
                        </div>
                        <div className="col-sm-4">
                            <div>
                                <h3>Latest posts</h3>
                                <img class="card-img-top" src={Image2} />
                                <a href="">What is Lorem Ipsum?</a>
                            </div>
                        
                      </div>
                        <div className="col-sm-8 text-left">
                            <img class="card-img-top" src={Image1} />
                            <h3>What is Lorem Ipsum?</h3>
                            <small>posted by Unknown | featured, great, men, women,</small><br/>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer 
                                took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic 
                                typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                                with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                                recently with desktop publishing software like Aldus PageMaker including 
                                versions of Lorem Ipsum.</p>
                                
                        </div>
                        <div className="col-sm-8 text-left">
                            <img class="card-img-top" src={Image1} />
                            <h3>What is Lorem Ipsum?</h3>
                            <small>posted by Unknown | featured, great, men, women,</small><br/>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer 
                                took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic 
                                typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                                with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                                recently with desktop publishing software like Aldus PageMaker including 
                                versions of Lorem Ipsum.</p>
                      </div>
                   </div>
                </div>

                
   
            </div>
        )
    }
}