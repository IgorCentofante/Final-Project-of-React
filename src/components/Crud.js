import React from 'react';

//css

//js

//imgs

export default function Crud() {

    return (
       
        <section className="container12">
            <div className="cadastro">
                <h1 className="header-title" id="cadastro">Cadastro de Paciente</h1>
            </div>
            <div className="main-cadatro">
                <table className="records" id="tableClient">
                    <thead>
                        <tr>
                            <th>Paciente</th>
                            <th>Nascimento</th>
                            <th>Consulta</th>
                            <th>Horarios</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
                <div className="modal" id="modal">
                    <div className="modal-content">
                        <header className="modal-header">
                            <h2>Novo Cliente</h2>
                            <span className="modal-close" id="modalClose">&#10006;</span>
                        </header>
                        <form className="modal-form" id="form">
                            <input type="text" id="Paciente" className="modal-field" placeholder="Nome do Paciente" required/>
                            <input type="date" id="Nascimento" className="modal-field" placeholder="Nascimento do Paciente"
                                required/>
                            <input type="text" id="Consulta" className="modal-field" placeholder="Consulta" required/>
                            <input type="time" id="Horarios" className="modal-field" placeholder="Horarios" required/>
                        </form>
                        <footer className="modal-footer">
                            <button className="button-green" id="salvar">Salvar</button>
                            <button className="button-blue" id="cancelar">Cancelar</button>
                        </footer>
                    </div>
                </div>
            </div>
        </section>


    )

    }