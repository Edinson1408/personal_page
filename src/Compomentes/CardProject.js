import React from 'react';
import IconVarios from './IcomVarios';
const style_tamano = {
    padding: '5px'
    
} 



class CardProject extends React.Component {
    render(){
        return(
                <div className=' col-md-6  scrollDiv2' >
                                <div className="card" >
                                <img src={this.props.ImagenProject} className="card-img-top" alt="Proyecto upal."  style={style_tamano} />
                                <div className="card-body">
                                    <h5 className="card-title text-dark">{this.props.NameProject}</h5>
                                    <p className="card-text text-dark" >{this.props.Empresa}</p>
                                    <p>
                                    
                                    </p>
                                    <a href="#" className="btn btn-primary">Ver Pryecto</a>
                                </div>
                                </div>
                                
                </div>
        )
    }
}

export default CardProject;