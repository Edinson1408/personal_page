// import logo from './logo.svg';

import React from 'react';
import CardsPerfil from './Compomentes/CardsPerfil.js';

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
              <h1 className="display-4 fst-italic">Title of a longer featured blog post</h1>
              <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
              <p className="lead mb-0"><a href="/" className="text-white fw-bold">Continue reading...</a></p>
            </div>
          
        </div>
        
      </div>
    )
  }
}

export default App;
