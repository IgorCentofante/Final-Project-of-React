//Importando Componentes
import Carrosel from '../src/components/Carrosel';
import SobreNos from './components/SobreNos';

//Arquivos de CSS
import './css/carrosel.css'
import '../src/css/sobre-nos.css';

function App() {
  return(
    <div className="container-inicial">
      <Carrosel/>
      <SobreNos/>
      
    </div>
  )
}

export default App;
