import React from 'react';
import imgTeto from '../images/img/Teto-realiza-projeto-mobiliario-do-Hospital-Albert-Einstein-de-Goiania-em-apenas-cinco-meses.jpg';

export default function SobreNos(){

    return(

        <section className="sobre-nos">
        <div className="sobre-nos-painel">
            <h1 className= "sobre-nos-titulo" id="sobre-nos">SOBRE NÓS</h1>
            <div className="sobre-nos-bg">
                <h2 id = "editarSobre" className= "sobre-nos-sub">
                    Construído em  1947, o Hospital Panaceia tem como objetivo o conforto e segurança para seus pacientes.  Há 74 anos mantemos nosso lema sobre que a transformação é algo natural para todos. Sempre com muito conforto recebemos diversos pacientes não só do estado, mas também do país inteiro. Os melhores profissionais do país estão aqui. Venha logo marcar sua consulta.
                </h2>
            </div>
        </div>

        <div className="sobre-nos-img">
            <img
            src={imgTeto}
            alt="recepção"/>
        </div>
    </section>

    );

}