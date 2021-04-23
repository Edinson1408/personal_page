// import logo from './logo.svg';

import React from 'react';
import CardsPerfil from './Compomentes/CardsPerfil.js';
import Project from './Compomentes/Project';
import Courses from './pages/Courses';

class App extends React.Component {
  render(){
    return(
      <div className="container">
          <div className=" row col-md-12 p-4 p-md-5 mb-4 text-white rounded bg-dark">
            <div className="col-md-4 px-0">
              <CardsPerfil />
            </div>
            <div className="col-md-1 px-0"></div>
            <div className="col-md-7 px-0">
              <h1 className="display-4 fst-italic">Desarrollando por diversion </h1>
              <p className="lead my-3">Hola , me desempeño como programador backend y proximamente Frotend ,Actualmente me encunetro 
              laborando en la Universidad Tecnologica del Peru.Me gusta aprender nuevas tecnologias implementar nuevas tendencias tecnologicas.</p>
              {/* <p className="lead mb-0"><a href="/" className="text-white fw-bold">Continue reading...</a></p> */}
 
              <h1 className="display-4  ">Proyectos Realizados &#128526; </h1>

              <Project />

              <h1 className="display-4  ">Curso Culminados &#129299; </h1>
              <Courses />
            </div>
          
        </div>
        
      </div>
    )
  }
}

export default App;
