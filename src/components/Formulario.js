import React from 'react';

import paciente from '../JS/index.js';


export default function Formulario() {

    return (

        <form action="https://formspree.io/f/mbjqbqpe" method="POST" className="form">

            <h1 className="text-center" id="consultas-online">Consulta Online</h1>
            {/* <!-- Barra de progresso --> */}
            <div className="progressbar">
                <div className="progress" id="progress"></div>

                <div className="progress-step progress-step-active" data-title="Dados">
                </div>
                <div className="progress-step" data-title="Contato"></div>
                <div className="progress-step" data-title="Consulta"></div>
                <div className="progress-step" data-title="Agenda"></div>
            </div>

            {/* <!-- Passos --> */}
            <div className="form-step form-step-active">
                <div className="input-group">
                    <label htmlFor="name">Nome e sobrenome</label>
                    <input type="text" name="message" id="username" />
                </div>
                <div className="input-group">
                    <label htmlFor="dob">Data de nascimento</label>
                    <input type="date" name="message" id="dob" />
                </div>
                <div className="">
                    <a href="/#" className="btn btn-next width-50 ml-auto">Próximo</a>
                </div>
            </div>
            <div className="form-step">
                <div className="input-group">
                    <label htmlFor="phone">Telefone</label>
                    <input type="text" name="phone" id="phone" required placeholder="(XX) XXXXX-XXXX" minLength="9"
                        maxLength="15" />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="_replyto" id="email" required placeholder="seuemail@dominio.com" />
                </div>
                <div className="btns-group">
                    <a href="/#" className="btn btn-prev">Anterior</a>
                    <a href="/#" className="btn btn-next">Próximo</a>
                </div>
            </div>
            <div className="form-step">
                <div className="input-group">
                    <fieldset>
                        <label>Tipo de consulta</label>
                        <select id="tdpd" className="tipo-consulta" name="message">
                            <option>Cardiologia</option>
                            <option>Dermatologia</option>
                            <option>traumatologia</option>
                            <option>Pediatria</option>
                            <option>Psiquiatria</option>
                            <option>Clinico geral</option>
                            <option>Nutrição</option>
                            <option>Odontologia</option>
                            <option>Neurologia</option>
                            <option>Oftamologia</option>
                            <option>fisioterapia</option>
                            <option>Vacinação</option>
                        </select>
                    </fieldset>
                </div>
                <div className="input-group">
                    <label htmlFor="mensagem">Descreva os seus sintomas</label>
                    <textarea styles={"resize: none"} cols="45" rows="3" name="message" className="sintomas"></textarea>
                </div>
                <div className="btns-group">
                    <a href="/#" className="btn btn-prev">Anterior</a>
                    <a href="/#" className="btn btn-next">Próximo</a>
                </div>
            </div>
            <div className="form-step">
                <div className="input-group">
                    <label htmlFor="dob">Data da consulta</label>
                    <input type="date" name="message" id="dob" required />
                </div>
                <div className="input-group">
                    <label htmlFor="dob">Horário da consulta</label>
                    <input type="time" id="appt" name="message" min="08:00" max="17:00" required />
                </div>
                <div className="btns-group">
                    <a href="/#" className="btn btn-prev">Anterior</a>
                    <button onClick={paciente} type="submit" value="Enviar formulário" className="btn">Enviar
                        formulário</button>
                </div>
            </div>
        </form>

    );
}