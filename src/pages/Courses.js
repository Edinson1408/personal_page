import React from 'react';
import CardCourse from '../Compomentes/CardCourse';

import Fundamentos from '../img/Cursos/Fundamentos01.png';
import CloudGoogle from '../img/Cursos/Google_Cloud.png';
import Pensamiento from '../img/Cursos/Pensamiento_computo.png';

import Awscloud  from '../img/Cursos/Cloud_compting.png';
import CloudComp from '../img/Cursos/Cloud_compting.png';


class Courses extends React.Component {
    render(){
        return(
            <div className="card-body pb-0 fondocard" >
                <div className='row ' >
                    <CardCourse
                    ImagenCourse={Fundamentos} 
                    NameProject='SIGH Upal'
                    Empresa='Univercidad Peruana Aleman'

                    />  

                    <CardCourse
                    ImagenCourse={CloudComp} 
                    NameProject='Horacio'
                    Empresa='Univercidad Tecnologica del Peru'
                    /> 
                    
                    <CardCourse
                    ImagenCourse={Awscloud} 
                    NameProject='SIGH Upal'
                    Empresa='Univercidad Peruana Aleman'

                    />  
                    <CardCourse
                    ImagenCourse={CloudGoogle} 
                    NameProject='Horacio'
                    Empresa='Univercidad Tecnologica del Peru'
                    /> 

                    <CardCourse
                    ImagenCourse={Pensamiento} 
                    NameProject='Bodega Lugy'
                    Empresa='MiniMarket Lugy'
                    />                        

                
                
                </div>
            </div>       
        )
    }
}


export default Courses