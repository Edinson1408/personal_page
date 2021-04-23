import React from 'react';
// https://www.flaticon.com/svg/vstatic/svg/528/528261.svg?token=exp=1618991828~hmac=3ece75ba0bf3d5320805ebcb9176ad66
class IcomVarios extends React.Component {
    render(){
        return(
            <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#kt_sidebar_tab_pane_2" id="kt_sidebar_tab_2">
                <img alt="s" src={this.props.icom} className="navbar-toggler-icon" />                    
                </a>
            </li> 
        )
    }
}

export default IcomVarios;