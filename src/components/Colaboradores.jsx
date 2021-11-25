import  Bruno from "../images/img/Bruno.jpeg"
import  Kaua from "../images/img/Kauã.jpeg"
import  Igor from "../images/img/Ígor.png"
import  Vitoria from "../images/img/Vitória.jpeg"
import  Liu from "../images/img/Liu.jpeg"
import  Laura from "../images/img/Laura.jpeg"




function Colaboradores (){
    return(
        <div className="caixa-colaboradores"><a name="colaboradores"></a>
            <div className="titulo-apresentação" id="Colaboradores">Colaboradores (Projeto final em React)</div>
            <div className="member">
                <img src={Bruno} alt="Selecione uma imagem" id="brunoImg" className="profile-img"/>
                <input className="inputColaboradores" type="file" id="imageBruno" name="fImage" accept="image/*"/>
                <input type="text" id="caixa1" value="Bruno"/>
                <a href="https://www.linkedin.com/in/bruno-yathan-diedrich-kehrwald/">
                    <p className="linkedin">Linkedin</p>
                </a>
            </div>

            <div className="member">
                <img src={Kaua} alt="Selecione uma imagem" id="kauaImg" className="profile-img"/>
                <input className="inputColaboradores" type="file" id="imageKaua" name="fImage" accept="image/*"/>
                <input type="text" id="caixa2" value="Kauã Silva"/>
                <a href="https://www.linkedin.com/in/kauã-da-silva-gonçalves/">
                    <p className="linkedin">Linkedin</p>
                </a>
            </div>

            <div className="member">
                <img src={Igor} alt="Selecione uma imagem" id="igorImg" className="profile-img"/>
                <input className="inputColaboradores" type="file" id="imageIgor" name="fImage" accept="image/*"/>
                <input type="text" id="caixa3" value="Ígor Centofante"/>
                <a href="https://www.linkedin.com/in/ígor-centofante/">
                    <p className="linkedin">Linkedin</p>
                </a>
            </div>

            <div className="member">
                <img src={Vitoria} alt="Selecione uma imagem" id="vitóriaImg" className="profile-img"/>
                <input className="inputColaboradores" type="file" id="imageVitória" name="fImage" accept="image/*"/>
                <input type="text" id="caixa4" value="Vitória Dambros"/>
                <a href="https://www.linkedin.com/in/vitoria-dambros-vd/">
                    <p className="linkedin">Linkedin</p>
                </a>
            </div>

            <div className="member">
                <img src={Liu} alt="Selecione uma imagem" id="liuImg" className="profile-img"/>
                <input className="inputColaboradores" type="file" id="imageLiu" name="fImage" accept="image/*"/>
                <input type="text" id="caixa5" value="Liu Brian"/>
                <a href="https://www.linkedin.com/in/liu-brian-252a97211/">
                    <p className="linkedin">Linkedin</p>
                </a>
            </div>

            <div className="member">
                <img src={Laura} alt="Selecione uma imagem" id="lauraImg" className="profile-img"/>
                <input className="inputColaboradores" type="file" id="imageLaura" name="fImage" accept="image/*"/>
                <input type="text" id="caixa6" value="Laura Quaglioto"/>
                <a href="https://www.linkedin.com/mwlite/in/laura-q-881808201">
                    <p className="linkedin">Linkedin</p>
                </a>
            </div>
        </div>
    )
}

export default Colaboradores;