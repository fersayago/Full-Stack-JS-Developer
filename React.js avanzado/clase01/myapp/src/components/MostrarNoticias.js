import React, { Component } from 'react';


class MostrarNoticias extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <button 
        className="btn btn-primary btn-block"
        onClick={() => {this.props.showNews('music')}}
      >
        Mostrar noticias
      </button>
     );
  }
}
 
export default MostrarNoticias;