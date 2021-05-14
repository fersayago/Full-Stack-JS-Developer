import MostrarNoticias from './../components/MostrarNoticias'
import { connect } from "react-redux";
import * as creators from "../actions/action-creators"

//el dispatch es un metodo que hace lelga la acción al reducer
function mapDispatchToProps(dispatch){
  return {
    showNews : (tema)=>{
      //dispatch({...objeto json})
      dispatch( creators.requestNews(tema) )
    }
  }
}

export default connect(null, mapDispatchToProps)(MostrarNoticias);