import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ModelPage from './components/ModelPage';
import PruebaProps from './components/PruebaProps';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ModelPage text={{title:"Welcome to the prop-types app!", button:"Go!" }}/>}/>
        
        <Route exact path="/proptypes" element={
          <PruebaProps
            name= 'literalmente cualquier cosa'
            ejString={"This is the new page"}
            ejNumber={3}
            ejArray={[3,'hola', false]}
            stringOrNumber={23}
            ejArrayOfNumbers={[2,4,6]}
            ejArrayOfArray={[['hola',true], [24,false]]}
            state='Loading'
            ejElemento={<ModelPage text={{title:"Welcome to the prop-types app!", button:"Go!" }}/>}
            ejShape={{texto:"This is the new page", unNumero:3, unArreglo:[3,'hola', false]}}
            ejRenderable={<ModelPage text={{title:"Welcome to the prop-types app!", button:"Go!" }}/>}
          />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
