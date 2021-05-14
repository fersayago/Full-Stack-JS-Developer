import "bootstrap/dist/css/bootstrap.css"
import NoticiasSinRedux from "./components/NoticiasSinRedux"
import {Provider} from "react-redux";
import theOnlySourceOfTruth from "./store/store"

import Noticias from "./containers/Noticias"

function App() {
  return (
    <Provider store={theOnlySourceOfTruth}>
      <header className="alert alert-info text-center">
        <h1>React Avanzado Clase1</h1>
      </header>
      <main className="container">
        <Noticias />
        <hr/>
        <NoticiasSinRedux />
      </main>
    </Provider>
  );
}

export default App;
