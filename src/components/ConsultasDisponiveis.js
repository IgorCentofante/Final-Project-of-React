import React from 'react';

//import css
import '../css/consultas.css'

//imagens importadas
import img1 from '../images/img/images/cardiologia_1.png'
import img2 from '../images/img/images/psicologo_1.png'
import img3 from '../images/img/images/historico_medico_1.png'
import img4 from '../images/img/images/odontologia_1.png'
import img5 from '../images/img/images/nutricao_1.png'
import img6 from '../images/img/images/fisioterapia_1.png'
import img7 from '../images/img/images/dermatologia_1.png'
import img8 from '../images/img/images/prescricao_de_oculos_1.png'
import img9 from '../images/img/images/protecao_1.png'
import img10 from '../images/img/images/neuronio_1.png'
import img11 from '../images/img/images/pediatria_1.png'
import img12 from '../images/img/images/osso_1.png'

export default function ConsultasDisponiveis(){

    return(
        
        <article className="consultas_disponiveis">
        <h1 className="consultas_titulo" id="Consultas">Consultas: especialidades disponiveis</h1>
        
            <div className="con_elemento">
                <img className="img_icone" alt="Cardiologia icone" src={img1}/>
                <li className="cardio">Cardiologia</li>
            </div>
            <div className="con_elemento">
                <img className="img_icone" alt="Psicologo icone" src={img2}/>
                <li className="psico">Psicologia</li>
            </div>
            <div className="con_elemento">
                <img className="img_icone"  alt="Historico medico icone" src={img3}/>
                <li className="clinico">Clínico Geral</li>
            </div>
            <div className="con_elemento">
                <img className="img_icone" alt="Odontologia icone" src={img4}/>
                <li className="odonto">Odontologia</li>
            </div>
            <div className="con_elemento">
                <img className="img_icone" alt="nutrição icone" src={img5}/>
                <li className="nutri">Nutrição</li>
            </div>
            <div className="con_elemento">
                <img className="img_icone" alt="Fisioterapia icone" src={img6}/>
                <li className="fisioterapia">Fisioterapia</li>
            </div>
            <div className="con_elemento">
                <img className="img_icone" alt="Dermatologia icone" src={img7}/>
                <li className="derma">Dermatologia</li>
            </div>
            <div className="con_elemento">
                <img className="img_icone" alt="Prescrição de oculos icone" src={img8}/>
                <li className="ofta">Oftamologia</li>
            </div>
            <div className="con_elemento">
                <img className="img_icone" alt="Protecao icone" src={img9}/>
                <li className="vacina">Vacina</li>
            </div>
            <div className="con_elemento">
                <img className="img_icone" alt="Neuronio icone" src={img10}/>
                <li className="neuro">Neurologia</li>
            </div>
            <div className="con_elemento">
                <img className="img_icone" alt="Pediatria icone" src={img11}/>
                <li className="pediatria">Pediatria</li>
            </div>
            <div className="con_elemento">
                <img className="img_icone" alt="Osso icone" src={img12}/>
                <li className="trauma">traumatologia</li>
            </div>  
    </article>

    );

}