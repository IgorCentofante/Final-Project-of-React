//componentes
import React from 'react';

//img
import logo from '../images/img/logooficial.png';
import '../css/style.css';
//JS
import menuT from '../JS/menu';


export default function NavBar() {

  return (

    <header>
      
      <div className="barra-de-navegação">
        <nav className="principal">

          <h1 className="titulo" id="titulo">Hospital Panaceia</h1>
          <img className="imagemqueeuodeio" src={logo} alt="Imagem que ela odeia" />
          <h2 className="subtitulo" id="subtitulo">Desde 1947 salvando vidas</h2>
          <div className="sidebar">
            <div className="logo-details">
              <i name='menu'></i>
              <div className="logo_name">Menu</div>
              <i onClick={menuT} className='bx bx-menu' id="btn" ></i>
            </div>
            
            
            <ul className="nav-list">
              <li>
                <a href="#img">
                  <i className='bx bx-grid-alt'></i>
                  <span className="links_name">Fotos sobre-nos</span>
                </a>
                <span className="tooltip">Fotos sobre-nos</span>
              </li>
              <li>
                <a href="#sobre-nos">
                  <i className='bx bxs-message-alt-add'></i>
                  <span className="links_name">Sobre-nos</span>
                </a>
                <span className="tooltip">Sobre-nos</span>
              </li>
              <li>
                <a href="#Consultas">
                  <i className='bx bx-chat' ></i>
                  <span className="links_name">Agendamento Online</span>
                </a>
                <span className="tooltip">Agendamento Online</span>
              </li>
              <li>
                <a href="#cadastro">
                  <i className='bx bx-pie-chart-alt-2' ></i>
                  <span className="links_name">Suas consultas</span>
                </a>
                <span className="tooltip">Suas consultas</span>
              </li>
              <li>
                <a href="#Colaboradores">
                  <i className='bx bx-user' ></i>
                  <span className="links_name">Colaboradores</span>
                </a>
                <span className="tooltip">Colaboradores</span>
              </li>
              <li>
                <a href="/" id="cadastrarCliente">
                  <i className='bx bx-cog'></i>
                  <span className="links_name">Configurações</span>
                </a>
                <span className="tooltip">Configurações</span>
              </li>
            </ul>
          </div>c
          {/* <h6 className="imagemqueeuodeio"></h6>          */}
        </nav>
      </div>
    </header>


  );

}