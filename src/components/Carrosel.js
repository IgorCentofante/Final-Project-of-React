import React from 'react';
import imgHospitalA from '../images/img/Hospital-Israelita-Albert-Einstein-completa-50-anos-de-historia.jpg';
import imgHospitalBonito from '../images/img/imagem_2021-10-09_225325.png';
import imgFachadaHospital from '../images/img/imagem_2021-10-09_221206.png';
import '../JS/carrossel.js';

export default function Carrosel(){
    return(
        <section className="carrossel">
        <div className="container" id="img">
            <picture>
                    <source
                    media="(max-width: 999px)"
                    srcSet={imgHospitalA}/>
                    <img
                    src={imgHospitalA}
                    alt="imagem bonita do hospital"/>
            </picture>
            <picture>
                    <source
                    media="(max-width: 999px)"
                    srcSet={imgHospitalBonito}/>
                    <img
                    src={imgHospitalBonito}
                    alt="Hospital de longe"/>
            </picture>
            <picture>
                    <source
                    media="(max-width: 999px)"
                    srcSet={imgFachadaHospital}/>
                    <img src={imgFachadaHospital} alt="Fachada do hospital"/>
            </picture>
        </div>
    </section>
    );
}