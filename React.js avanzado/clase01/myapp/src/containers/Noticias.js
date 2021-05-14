import Noticias from "../components/Noticias"
import { connect } from "react-redux";

function mapStateToProps(state){
  return {
    articles : state.articles
  }
}

export default connect(mapStateToProps)(Noticias);