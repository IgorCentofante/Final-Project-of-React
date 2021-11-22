//Importando Componentes
import Carrosel from '../src/components/Carrosel';
import SobreNos from './components/SobreNos';
import ConsultasDisponiveis from './components/ConsultasDisponiveis';


function App() {
  return(
    <div className="container-inicial">
      <Carrosel/>
      <SobreNos/>
      <ConsultasDisponiveis/>
      
    </div>
  )
}

export default App;
