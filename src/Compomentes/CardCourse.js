import React from 'react';
// import IconVarios from './IcomVarios';
const style_tamano = {
    padding: '5px'
    
} 

class CardCourse extends React.Component {
    render(){
        return(
                <div className=' col-md-6 ' >
                                <div className="card" >
                                <img src={this.props.ImagenCourse} className="card-img-top" alt="Proyecto upal."  style={style_tamano} />
                                {/* <div className="card-body"> */}
                                    {/* <h5 className="card-title text-dark">{this.props.NameProject}</h5> */}
                                    {/* <p className="card-text text-dark" >{this.props.Empresa}</p> */}
                                    {/* <p> */}
                                    {/* <ul className="sidebar-nav nav nav-tabs " id="kt_sidebar_tabs" role="tablist">
                                            <IconVarios
                                            icom="https://www.flaticon.com/svg/vstatic/svg/541/541509.svg?token=exp=1618991787~hmac=21d892e2022a834b96b0dfbb36a948b6"
                                             />
                                             <IconVarios
                                            icom="https://www.flaticon.com/svg/vstatic/svg/1/1975.svg?token=exp=1618991828~hmac=83065cfe123dfb4800a0e4808fe973db"
                                             />
                                    </ul> */}
                                    {/* </p> */}
                                    {/* <a href="#" className="btn btn-primary">Ver Pryecto</a> */}
                                {/* </div> */}
                                </div>
                </div>
        )
    }
}

export default CardCourse;