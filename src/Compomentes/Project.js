import React from 'react';
import projectUpal from '../img/Proyecto-upal.gif';
import projectoUtp from '../img/Projecto-utp.jpeg';
import projectBodega from '../img/Proyecto-Bodega.jpeg';

import CardProject from './CardProject';

const style_tamano = {
    padding: '5px'
    
} 
const display={
    display: 'inline-block'
}

 
class Project extends React.Component {
    render(){
        return(
            <div className="card-body pb-0 fondocard  scrollDiv" >
                
                    <div className='scrollDiv2 row  ' style={display} >
                        <CardProject
                        ImagenProject={projectUpal} 
                        NameProject='SIGH Upal'
                        Empresa='Universidad Peruana Aleman'

                        />  
                        <CardProject
                        ImagenProject={projectoUtp} 
                        NameProject='Horacio'
                        Empresa='Universidad Tecnologica del Peru'
                        /> 

                        <CardProject
                        ImagenProject={projectBodega} 
                        NameProject='Bodega Lugy'
                        Empresa='MiniMarket Lugy'
                        />                        

                       
                    
                </div>
            </div>       
        )
    }
}

export default Project;