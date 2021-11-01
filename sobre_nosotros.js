import React from 'react';
import { FiPhone, FiMapPin, Fifile } from "react-icons/fi";

var Sobre_nosotros = () => {
    return (
        <div className= "about-style-5">
            <div className= "container">
                <div className="row">    
                    <div className="col-lg-10 offset-lg-1">    
                        <div className="row row--0 about-wrapper align-items-center theme-shape">    
                            <div className="col-lg-6">    
                                <div className="thumbnail">    
                                    <img src="/" alt="Nuestra imagen" />    
                                </div>   
                            </div>    
                            
                            <div className="col-lg-6 mt_md--30 mt_sm--30">    
                                <div className="content">    
                                    <div className="inner">    
                                        <h4 className="title">Las decisiones hoy en día dependen del consumidor</h4>    
                                        <p> Aunque comprar productos es necesario también lo es medirse en los gastos.</p>    
                            
                                        <ul className="contact-address">    
                                            <li><FiFile />  Consumo & tendencias</li>    
                                            <li><FiPhone /> +314 5735261 </li>    
                                            <li><FiMapPin /> Bogotá, Colombia </li>    
                                        </ul>    
                            
                                        <div className="download-button mt--20">    
                                            <a className="btn-read-more" href="#"><span>Descargar</span></a>    
                                        </div>    }
                                    </div>    
                                </div>    
                            </div>    
                        </div>    
                    </div>    
                </div>                          
            </div>    
        </div>    )   }   
        
export default Sobre_nosotros;
 